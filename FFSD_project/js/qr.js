// ═══════════════════════════════════════════════════════════════
// QR CODE UTILITIES FOR EVENTFLOW CHECK-IN
// Generates and displays QR codes for attendee tickets
// ═══════════════════════════════════════════════════════════════

// Generate a simple deterministic QR-like visual representation
function generateQRVisual(data, size = 20) {
  // Create a hash-based grid pattern
  let pattern = [];
  let hash = 0;
  
  // Simple string hash
  for (let i = 0; i < data.length; i++) {
    hash = ((hash << 5) - hash) + data.charCodeAt(i);
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  // Generate grid pattern based on hash
  for (let i = 0; i < size * size; i++) {
    hash = (hash * 9301 + 49297) % 233280;
    pattern.push(hash % 2 === 0);
  }
  
  return pattern;
}

// Render QR code as SVG or canvas-ready data
function renderQRAsGrid(pattern, size = 20, cellSize = 6) {
  let svg = `<svg width="${size * cellSize}" height="${size * cellSize}" xmlns="http://www.w3.org/2000/svg" style="background:#fff;border:2px solid #000">`;
  
  for (let i = 0; i < pattern.length; i++) {
    const row = Math.floor(i / size);
    const col = i % size;
    const x = col * cellSize;
    const y = row * cellSize;
    
    if (pattern[i]) {
      svg += `<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="#000"/>`;
    }
  }
  
  svg += `</svg>`;
  return svg;
}

// Simple canvas-based QR renderer
function renderQRCanvas(registrationId, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const canvas = document.createElement('canvas');
  canvas.width = 150;
  canvas.height = 150;
  canvas.style.border = '1px solid #ccc';
  canvas.style.borderRadius = '5px';
  
  const ctx = canvas.getContext('2d');
  const pattern = generateQRVisual(registrationId, 15);
  const cellSize = 10;
  
  // White background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Black pattern
  ctx.fillStyle = '#000000';
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i]) {
      const row = Math.floor(i / 15);
      const col = i % 15;
      ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
    }
  }
  
  // Add registration ID text
  ctx.fillStyle = '#000000';
  ctx.font = '10px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(registrationId.substring(0, 8), canvas.width / 2, canvas.height + 15);
  
  container.innerHTML = '';
  container.appendChild(canvas);
}

// Display QR code in modal for ticket view
function showTicketQRModal(registrationId) {
  const reg = AppState.registrations.find(r => r.id === registrationId);
  if (!reg) {
    addNotification(null, 'Registration not found', 'error');
    return;
  }
  
  const event = AppState.events.find(e => e.id === reg.eventId);
  const attendee = AppState.users.find(u => u.id === reg.attendeeId);
  
  const modal = `
    <div class="modal-overlay" onclick="closeModal()">
      <div class="modal" onclick="event.stopPropagation()" style="max-width: 400px">
        <div class="modal-header">
          <h3>🎟️ Ticket & QR Code</h3>
          <button class="modal-close-btn" onclick="closeModal()">×</button>
        </div>
        <div class="modal-body">
          <div style="text-align: center; padding: 20px 0">
            <div style="font-weight: 600; margin-bottom: 10px">${attendee?.name}</div>
            <div style="color: #8891b4; font-size: 12px; margin-bottom: 20px">${event?.title}</div>
            <div id="qr-canvas-container" style="display: flex; justify-content: center; margin: 20px 0"></div>
            <div style="background: #1c2135; padding: 12px; border-radius: 5px; margin: 20px 0">
              <div style="font-size: 12px; color: #8891b4">Ticket ID</div>
              <div style="font-family: monospace; font-weight: 600; color: #7c6ff7">${reg.ticketId}</div>
            </div>
            <div style="background: #1c2135; padding: 12px; border-radius: 5px; margin: 20px 0">
              <div style="font-size: 12px; color: #8891b4">Event Date</div>
              <div style="font-weight: 500">${event?.date} at ${event?.time}</div>
            </div>
            <div style="background: #1c2135; padding: 12px; border-radius: 5px; margin: 20px 0">
              <div style="font-size: 12px; color: #8891b4">Amount Paid</div>
              <div style="font-weight: 600; color: #22d3a5">₹${reg.amount}</div>
            </div>
            <div style="text-align: center; margin-top: 16px">
              <span class="badge badge-${reg.checkedIn ? 'green' : 'yellow'}">${reg.checkedIn ? '✓ Checked In' : 'Pending Check-in'}</span>
            </div>
          </div>
        </div>
        <div class="modal-buttons">
          ${!reg.checkedIn ? `<button class="btn btn-success w-full" onclick="checkInHandler('${reg.id}'); closeModal(); renderPage('registrations')">✓ Check In Now</button>` : ''}
          <button class="btn btn-ghost w-full" onclick="closeModal()">Close</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modal);
  setTimeout(() => renderQRCanvas(reg.id, 'qr-canvas-container'), 100);
}

// Render QR in registration row
function addQRToRegistration(registrationId, cellElement) {
  const reg = AppState.registrations.find(r => r.id === registrationId);
  if (!reg) return;
  
  const qrIcon = document.createElement('a');
  qrIcon.href = '#';
  qrIcon.style.cursor = 'pointer';
  qrIcon.style.fontSize = '16px';
  qrIcon.onclick = (e) => {
    e.preventDefault();
    showTicketQRModal(registrationId);
  };
  qrIcon.textContent = '📱 QR';
  qrIcon.title = 'View QR Code';
  
  cellElement.insertBefore(qrIcon, cellElement.firstChild);
  cellElement.insertBefore(document.createTextNode(' '), qrIcon.nextSibling);
}

// Check-in modal with QR scanner simulation
function showCheckInModal(eventId) {
  const event = AppState.events.find(e => e.id === eventId);
  if (!event) return;
  
  const regs = AppState.registrations.filter(r => r.eventId === eventId && !r.checkedIn);
  
  const modal = `
    <div class="modal-overlay" onclick="closeModal()">
      <div class="modal" onclick="event.stopPropagation()" style="max-width: 500px">
        <div class="modal-header">
          <h3>✅ Check-in Attendees — ${event.title}</h3>
          <button class="modal-close-btn" onclick="closeModal()">×</button>
        </div>
        <div class="modal-body">
          <div style="margin-bottom: 16px">
            <div style="font-size: 12px; color: #8891b4; margin-bottom: 8px">Pending Check-ins</div>
            <div style="font-size: 20px; font-weight: 700; color: #7c6ff7">${regs.length}</div>
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; max-height: 300px; overflow-y: auto">
            ${regs.map(r => {
              const att = AppState.users.find(u => u.id === r.attendeeId);
              return `
                <div style="background: #151929; border: 1px solid #1f2640; border-radius: 8px; padding: 12px">
                  <div style="font-weight: 500; font-size: 13px; margin-bottom: 4px">${att?.name}</div>
                  <div style="font-size: 11px; color: #8891b4; margin-bottom: 8px">${r.ticketId}</div>
                  <button class="btn btn-sm btn-success" onclick="checkInAttendee('${r.id}'); refreshCheckInList('${eventId}')" style="width: 100%">✓ Check In</button>
                </div>
              `;
            }).join('')}
          </div>
        </div>
        <div class="modal-buttons">
          <button class="btn btn-ghost" onclick="closeModal()">Close</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modal);
}

function refreshCheckInList(eventId) {
  // Re-render the check-in modal
  closeModal();
  setTimeout(() => showCheckInModal(eventId), 100);
}

// Global access
window.generateQRVisual = generateQRVisual;
window.renderQRAsGrid = renderQRAsGrid;
window.renderQRCanvas = renderQRCanvas;
window.showTicketQRModal = showTicketQRModal;
window.addQRToRegistration = addQRToRegistration;
window.showCheckInModal = showCheckInModal;
window.refreshCheckInList = refreshCheckInList;
