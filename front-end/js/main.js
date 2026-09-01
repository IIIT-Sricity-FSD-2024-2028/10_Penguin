// ═══════════════════════════════════════════════════════════════
// UI RENDERING & HELPER FUNCTIONS - EventFlow Platform
// Dynamically renders all UI components based on state
// ═══════════════════════════════════════════════════════════════

// ═══════════════════ RENDER: TABLES ═══════════════════

function renderUsersTable(containerId, users = null) {
  users = users || AppState.users;
  const container = document.getElementById(containerId);
  if (!container) return;

  const html = `
    <table class="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Phone</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${users.map(u => `
          <tr class="table-row">
            <td>${escapeHtml(u.name)}</td>
            <td>${escapeHtml(u.email)}</td>
            <td><span class="badge badge-${u.role}">${u.role}</span></td>
            <td>${escapeHtml(u.phone)}</td>
            <td><span class="status-badge status-${u.status}">${u.status}</span></td>
            <td class="action-buttons">
              <button class="btn-small btn-edit" onclick="editUserHandler('${u.id}')">Edit</button>
              <button class="btn-small btn-delete" onclick="deleteUserHandler('${u.id}')">Delete</button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
  
  container.innerHTML = html;
}

function renderEventsTable(containerId, events = null) {
  events = events || AppState.events;
  const container = document.getElementById(containerId);
  if (!container) return;

  const html = `
    <table class="data-table">
      <thead>
        <tr>
          <th>Event Title</th>
          <th>Date</th>
          <th>City</th>
          <th>Capacity</th>
          <th>Registered</th>
          <th>Price (₹)</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${events.map(e => `
          <tr class="table-row">
            <td><strong>${escapeHtml(e.title)}</strong></td>
            <td>${e.date}</td>
            <td>${escapeHtml(e.city)}</td>
            <td>${e.capacity}</td>
            <td>${e.registered}/${e.capacity}</td>
            <td>₹${e.price}</td>
            <td><span class="status-badge status-${e.status}">${e.status}</span></td>
            <td class="action-buttons">
              <button class="btn-small btn-edit" onclick="editEventHandler('${e.id}')">Edit</button>
              <button class="btn-small btn-delete" onclick="deleteEventHandler('${e.id}')">Delete</button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
  
  container.innerHTML = html;
}

function renderRegistrationsTable(containerId, registrations = null) {
  registrations = registrations || AppState.registrations;
  const container = document.getElementById(containerId);
  if (!container) return;

  const html = `
    <table class="data-table">
      <thead>
        <tr>
          <th>Ticket ID</th>
          <th>Attendee</th>
          <th>Event</th>
          <th>Date</th>
          <th>Status</th>
          <th>Checked In</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${registrations.map(r => {
          const attendee = findUser(r.attendeeId);
          const event = findEvent(r.eventId);
          return `
            <tr class="table-row">
              <td><code>${r.ticketId}</code></td>
              <td>${escapeHtml(attendee?.name || "Unknown")}</td>
              <td>${escapeHtml(event?.title || "Unknown")}</td>
              <td>${r.date}</td>
              <td><span class="status-badge status-${r.status}">${r.status}</span></td>
              <td>${r.checkedIn ? "✓" : "−"}</td>
              <td class="action-buttons">
                ${!r.checkedIn ? `<button class="btn-small btn-success" onclick="checkInHandler('${r.id}')">Check In</button>` : ""}
                <button class="btn-small btn-delete" onclick="cancelRegistrationHandler('${r.id}')">Cancel</button>
              </td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  `;
  
  container.innerHTML = html;
}

// ═══════════════════ RENDER: EVENT CARDS ═══════════════════

function renderEventCards(containerId, events = null, isAttendee = false) {
  events = events || AppState.events;
  const container = document.getElementById(containerId);
  if (!container) return;

  const html = `
    <div class="event-cards-grid">
      ${events.map(e => {
        const userReg = AppState.registrations.find(r => 
          r.eventId === e.id && 
          AppState.currentUser && 
          r.attendeeId === AppState.currentUser.id
        );
        const isFull = e.registered >= e.capacity;
        const isRegistered = !!userReg;
        
        return `
          <div class="event-card">
            ${e.image ? `
              <div class="event-card-banner" style="height:130px;overflow:hidden;border-radius:8px 8px 0 0;margin:-16px -16px 12px -16px;position:relative">
                <img src="${e.image}" alt="${escapeHtml(e.title)}" style="width:100%;height:100%;object-fit:cover" onerror="this.parentElement.style.display='none'">
              </div>
            ` : ''}
            <div class="event-card-header">
              <h3>${escapeHtml(e.title)}</h3>
              <span class="badge badge-${(e.category || '').toLowerCase()}">${e.category}</span>
            </div>
            <div class="event-card-body">
              <p class="event-date">📅 ${e.date} at ${e.time}</p>
              <p class="event-location">📍 ${escapeHtml(e.city)}</p>
              <p class="event-description">${escapeHtml(e.description)}</p>
              <div class="event-capacity">
                <span>${e.registered}/${e.capacity} registered</span>
                <div class="progress-bar">
                  <div class="progress" style="width: ${(e.registered/e.capacity)*100}%"></div>
                </div>
              </div>
              <p class="event-price"><strong>₹${e.price}</strong>${e.price === 0 ? " (FREE)" : ""}</p>
            </div>
            <div class="event-card-footer">
              ${isAttendee ? `
                ${isRegistered ? 
                  `<button class="btn btn-secondary" disabled>Registered ✓</button>` :
                  `<button class="btn btn-primary" onclick="quickRegisterHandler('${e.id}')" ${isFull ? "disabled" : ""}>
                    ${isFull ? "Event Full" : "Register Now"}
                  </button>`
                }
              ` : ""}
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
  
  container.innerHTML = html;
}

// ═══════════════════ RENDER: NOTIFICATIONS ═══════════════════

function renderNotificationsPanel(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const unread = AppState.notifications.filter(n => !n.read);
  
  const html = `
    <div class="notifications-panel">
      ${unread.length === 0 ? 
        `<p class="empty-state">No new notifications</p>` :
        `
          <div class="notification-list">
            ${unread.map(n => `
              <div class="notification-item notification-${n.type}" onclick="markNotificationAsRead('${n.id}')">
                <div class="notification-icon">
                  ${n.type === "success" ? "✓" : n.type === "error" ? "✕" : n.type === "warning" ? "⚠" : "ℹ"}
                </div>
                <div class="notification-content">
                  <p>${escapeHtml(n.message)}</p>
                  <small>${getTimeAgo(n.createdAt)}</small>
                </div>
              </div>
            `).join("")}
          </div>
        `
      }
    </div>
  `;
  
  container.innerHTML = html;
  
  // Update notification badge
  const badge = document.querySelector(".notification-badge");
  if (badge) {
    const count = getUnreadCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-flex" : "none";
  }
}

// ═══════════════════ MODAL: FORMS ═══════════════════

function showAddUserModal() {
  const modal = `
    <div class="modal-overlay" onclick="closeModal()">
      <div class="modal" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h3>Add New User</h3>
          <button class="btn-close" onclick="closeModal()">×</button>
        </div>
        <div class="modal-body">
          <form id="addUserForm" onsubmit="submitAddUser(event)">
            <div class="form-group">
              <label for="newUserName">Name *</label>
              <input type="text" id="newUserName" required>
            </div>
            <div class="form-group">
              <label for="newUserEmail">Email *</label>
              <input type="email" id="newUserEmail" required>
            </div>
            <div class="form-group">
              <label for="newUserPassword">Password *</label>
              <input type="password" id="newUserPassword" required>
            </div>
            <div class="form-group">
              <label for="newUserRole">Role *</label>
              <select id="newUserRole" required>
                <option value="">Select a role</option>
                <option value="superuser">Super Admin</option>
                <option value="organizer">Event Organizer</option>
                <option value="staff">Event Staff</option>
                <option value="client">Client</option>
                <option value="attendee">Attendee</option>
              </select>
            </div>
            <div class="form-group">
              <label for="newUserPhone">Phone *</label>
              <input type="tel" id="newUserPhone" required>
            </div>
            <div class="modal-buttons">
              <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
              <button type="submit" class="btn btn-primary">Create User</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML("beforeend", modal);
}

function showAddEventModal() {
  const modal = `
    <div class="modal-overlay" onclick="closeModal()">
      <div class="modal" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h3>Create New Event</h3>
          <button class="btn-close" onclick="closeModal()">×</button>
        </div>
        <div class="modal-body">
          <form id="addEventForm" onsubmit="submitAddEvent(event)">
            <div class="form-row">
              <div class="form-group">
                <label for="newEventTitle">Event Title *</label>
                <input type="text" id="newEventTitle" required>
              </div>
              <div class="form-group">
                <label for="newEventCategory">Category *</label>
                <select id="newEventCategory" required>
                  <option value="">Select category</option>
                  <option value="Conference">Conference</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Networking">Networking</option>
                  <option value="Seminar">Seminar</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="newEventDate">Date *</label>
                <input type="date" id="newEventDate" required>
              </div>
              <div class="form-group">
                <label for="newEventTime">Time *</label>
                <input type="time" id="newEventTime" required>
              </div>
            </div>
            <div class="form-group">
              <label for="newEventCity">City *</label>
              <select id="newEventCity" required>
                <option value="">Select city</option>
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>
            <div class="form-group">
              <label for="newEventLocation">Full Location Address *</label>
              <input type="text" id="newEventLocation" placeholder="e.g., Convention Center, Chennai" required>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="newEventCapacity">Capacity *</label>
                <input type="number" id="newEventCapacity" min="1" required>
              </div>
              <div class="form-group">
                <label for="newEventPrice">Price (₹) *</label>
                <input type="number" id="newEventPrice" min="0" step="0.01" required>
              </div>
            </div>
            <div class="form-group">
              <label for="newEventDescription">Description</label>
              <textarea id="newEventDescription" rows="3"></textarea>
            </div>
            <div class="modal-buttons">
              <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
              <button type="submit" class="btn btn-primary">Create Event</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML("beforeend", modal);
}

// ═══════════════════ FORM HANDLERS ═══════════════════

function submitAddUser(e) {
  e.preventDefault();
  
  const user = {
    name: document.getElementById("newUserName").value,
    email: document.getElementById("newUserEmail").value,
    password: document.getElementById("newUserPassword").value,
    role: document.getElementById("newUserRole").value,
    phone: document.getElementById("newUserPhone").value
  };
  
  createUser(user);
  closeModal();
  updateAllTables();
}

function submitAddEvent(e) {
  e.preventDefault();
  
  const event = {
    title: document.getElementById("newEventTitle").value,
    category: document.getElementById("newEventCategory").value,
    date: document.getElementById("newEventDate").value,
    time: document.getElementById("newEventTime").value,
    city: document.getElementById("newEventCity").value,
    location: document.getElementById("newEventLocation").value,
    capacity: parseInt(document.getElementById("newEventCapacity").value),
    price: parseFloat(document.getElementById("newEventPrice").value),
    description: document.getElementById("newEventDescription").value,
    organizer: AppState.currentUser?.id || "u1"
  };
  
  createEvent(event);
  closeModal();
  updateAllTables();
}

// ═══════════════════ QUICK ACTION HANDLERS ═══════════════════

function editUserHandler(userId) {
  console.log("Edit user:", userId);
  const user = findUser(userId);
  if (!user) { alert('User not found'); return; }
  // TODO: Show edit modal with user data pre-filled
  alert("Edit functionality for: " + user.name);
}

function deleteUserHandler(userId) {
  const user = findUser(userId);
  if (!user) { alert('User not found'); return; }
  if (confirm(`Delete user "${user.name}"? This cannot be undone.`)) {
    deleteUser(userId);
    updateAllTables();
  }
}

function editEventHandler(eventId) {
  console.log("Edit event:", eventId);
  const event = findEvent(eventId);
  if (!event) { alert('Event not found'); return; }
  // TODO: Show edit modal with event data pre-filled
  alert("Edit functionality for: " + event.title);
}

function deleteEventHandler(eventId) {
  const event = findEvent(eventId);
  if (!event) { alert('Event not found'); return; }
  if (confirm(`Delete event "${event.title}"? This will also cancel all registrations.`)) {
    deleteEvent(eventId);
    updateAllTables();
  }
}

function quickRegisterHandler(eventId) {
  if (!AppState.currentUser) {
    alert("Please log in to register for events");
    return;
  }
  
  const event = findEvent(eventId);
  if (!event) { alert('Event not found'); return; }
  if (event.registered >= event.capacity) {
    alert("Event is full!");
    return;
  }
  
  registerAttendee(AppState.currentUser.id, eventId);
  updateAllTables();
  renderEventCards("eventsContainer", null, AppState.currentUser.role === "attendee");
}

function checkInHandler(registrationId) {
  if (confirm("Confirm check-in for this attendee?")) {
    checkInAttendee(registrationId);
    updateAllTables();
  }
}

function cancelRegistrationHandler(registrationId) {
  if (confirm("Cancel this registration?")) {
    cancelRegistration(registrationId);
    updateAllTables();
  }
}

// ═══════════════════ UTILITY FUNCTIONS ═══════════════════

function closeModal() {
  const overlay = document.querySelector(".modal-overlay");
  if (overlay) overlay.remove();
}

function updateAllTables() {
  if (document.getElementById('usersTableContainer')) renderUsersTable("usersTableContainer", AppState.users);
  if (document.getElementById('eventsTableContainer')) renderEventsTable("eventsTableContainer", AppState.events);
  if (document.getElementById('registrationsTableContainer')) renderRegistrationsTable("registrationsTableContainer", AppState.registrations);
  if (document.getElementById('notificationsPanel')) renderNotificationsPanel("notificationsPanel");
}

function escapeHtml(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function getTimeAgo(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  
  if (seconds < 60) return "just now";
  if (seconds < 3600) return Math.floor(seconds / 60) + "m ago";
  if (seconds < 86400) return Math.floor(seconds / 3600) + "h ago";
  return Math.floor(seconds / 86400) + "d ago";
}

// Notifications are refreshed when their data changes. Replacing the panel on
// a timer remounted its DOM every five seconds and made pages visibly blink.

// Make functions global
window.renderUsersTable = renderUsersTable;
window.renderEventsTable = renderEventsTable;
window.renderRegistrationsTable = renderRegistrationsTable;
window.renderEventCards = renderEventCards;
window.renderNotificationsPanel = renderNotificationsPanel;
window.showAddUserModal = showAddUserModal;
window.showAddEventModal = showAddEventModal;
window.submitAddUser = submitAddUser;
window.submitAddEvent = submitAddEvent;
window.updateAllTables = updateAllTables;
window.closeModal = closeModal;
