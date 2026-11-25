import{r as h,j as e,g as P}from"./index-Ca0ZN0F_.js";import{P as k,b as O,r as D}from"./ProfileAvatar-ztaOo_XF.js";const L=`/* ===== EventFlow source: state.js ===== */
// ═══════════════════════════════════════════════════════════════
// CENTRAL STATE MANAGEMENT - EventFlow Platform
// Handles all app state, localStorage persistence, and CRUD operations
// ═══════════════════════════════════════════════════════════════

const STATE_VERSION = '2.0';
const STATE_KEY = 'eventflow_state_v2';

// Central state object
let AppState = {
  users: [],
  events: [],
  registrations: [],
  notifications: [],
  currentUser: null,
  version: STATE_VERSION,
};

// ═══════════════════ PERSISTENCE ═══════════════════

function saveState() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(AppState));
  } catch (e) {
    console.error('Failed to save state:', e);
  }
}
function loadState() {
  try {
    const saved = localStorage.getItem(STATE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Merge with existing to preserve structure
      AppState = {
        ...AppState,
        ...parsed,
      };
      window.EventFlowAccountPolicy.migrateLegacyDemoData(AppState);
      if (Number(parsed.accountSchemaVersion || 0) < 2) saveState();
    }
  } catch (e) {
    console.error('Failed to load state:', e);
  }
}
function initializeDefaultState() {
  AppState = {
    users: [
      {
        id: 'u1',
        name: 'Super Admin',
        email: 'admin@eventflow.com',
        password: 'admin123',
        role: 'superuser',
        phone: '+91 9876543210',
        status: 'active',
        joinedAt: '2024-01-01',
        avatarImage: '/assets/images/avatars/user-alex-johnson.jpg',
      },
      {
        id: 'u2',
        name: 'Priya Sharma',
        email: 'organizer@eventflow.com',
        password: 'org123',
        role: 'organizer',
        phone: '+91 9876543211',
        status: 'active',
        joinedAt: '2024-01-05',
        specialization: 'Corporate Events',
        avatarImage: '/assets/images/avatars/organizer-priya-sharma.jpg',
      },
      {
        id: 'u4',
        name: 'Sneha Reddy',
        email: 'client@eventflow.com',
        password: 'client123',
        role: 'client',
        phone: '+91 9876543213',
        status: 'active',
        joinedAt: '2024-02-01',
        company: 'TechCorp',
        avatarImage: '/assets/images/avatars/user-michael-torres.jpg',
      },
      {
        id: 'u5',
        name: 'Rahul Singh',
        email: 'attendee@eventflow.com',
        password: 'att123',
        role: 'attendee',
        phone: '+91 9876543214',
        status: 'active',
        joinedAt: '2024-02-10',
        avatarImage: '/assets/images/avatars/user-robert-singh.jpg',
      },
    ],
    events: [
      {
        id: 'e1',
        title: 'Tech Fest 2026',
        category: 'Conference',
        date: '2026-04-15',
        time: '09:00',
        location: 'Convention Center, Chennai',
        city: 'Chennai',
        capacity: 500,
        registered: 342,
        price: 499,
        status: 'upcoming',
        organizer: 'u2',
        description: 'Premier technology conference featuring AI, Cloud & DevOps workshops',
        image: '/assets/images/events/event-tech-summit.jpg',
      },
      {
        id: 'e2',
        title: 'Startup Meetup',
        category: 'Networking',
        date: '2026-04-22',
        time: '18:00',
        location: 'Innovation Hub, Bangalore',
        city: 'Bangalore',
        capacity: 150,
        registered: 98,
        price: 0,
        status: 'upcoming',
        organizer: 'u2',
        description: 'Monthly networking event for startups and investors',
        image: '/assets/images/events/event-pitch-night.jpg',
      },
      {
        id: 'e3',
        title: 'Web Dev Workshop',
        category: 'Workshop',
        date: '2026-05-01',
        time: '10:00',
        location: 'Tech Academy, Hyderabad',
        city: 'Hyderabad',
        capacity: 80,
        registered: 65,
        price: 299,
        status: 'upcoming',
        organizer: 'u2',
        description: 'Hands-on workshop on modern web development with React & Vue',
        image: '/assets/images/events/event-marketing-workshop.jpg',
      },
    ],
    registrations: [
      {
        id: 'r1',
        attendeeId: 'u5',
        eventId: 'e1',
        date: '2026-03-01',
        ticketId: 'TKT-001',
        status: 'confirmed',
        amount: 499,
        checkedIn: false,
        qr: generateQRCode(),
      },
      {
        id: 'r2',
        attendeeId: 'u5',
        eventId: 'e2',
        date: '2026-03-05',
        ticketId: 'TKT-002',
        status: 'confirmed',
        amount: 0,
        checkedIn: false,
        qr: generateQRCode(),
      },
    ],
    notifications: [
      {
        id: 'n1',
        userId: 'u5',
        message: 'Welcome to EventFlow! 🎉',
        type: 'info',
        read: false,
        createdAt: new Date().toISOString(),
      },
    ],
    currentUser: null,
    version: STATE_VERSION,
  };
  saveState();
}

// Load state on initialization
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  if (!AppState.users || AppState.users.length === 0) {
    initializeDefaultState();
  }
});

// ═══════════════════ CRUD: USERS ═══════════════════

function createUser(userData) {
  if (!window.EventFlowAccountPolicy.canManageAccount(CU, userData)) {
    addNotification(null, 'Only an admin can manage employee or admin accounts.', 'warning');
    return null;
  }
  const email = window.EventFlowAccountPolicy.normalizeEmail(userData.email);
  if (window.EventFlowAccountPolicy.isEmailInUse(AppState.users, email)) {
    addNotification(null, 'Email already registered', 'warning');
    return null;
  }
  const newUser = {
    id: 'u' + Date.now(),
    joinedAt: new Date().toISOString().split('T')[0],
    status: 'active',
    ...userData,
    email,
  };
  AppState.users.push(newUser);
  saveState();
  addNotification(null, \`User "\${newUser.name}" created successfully\`, 'success');
  return newUser;
}
function updateUser(userId, updates) {
  const user = AppState.users.find(u => u.id === userId);
  if (user) {
    if (!window.EventFlowAccountPolicy.canApplyAccountUpdate(CU, user, updates)) {
      addNotification(null, 'This account change requires an admin.', 'warning');
      return null;
    }
    if (
      updates.email &&
      window.EventFlowAccountPolicy.isEmailInUse(AppState.users, updates.email, userId)
    ) {
      addNotification(null, 'Email already registered', 'warning');
      return null;
    }
    Object.assign(user, updates);
    if (updates.email) user.email = window.EventFlowAccountPolicy.normalizeEmail(updates.email);
    saveState();
    addNotification(null, \`User "\${user.name}" updated\`, 'success');
    return user;
  }
  return null;
}
function deleteUser(userId) {
  const target = AppState.users.find(user => String(user.id) === String(userId));
  if (!window.EventFlowAccountPolicy.canManageAccount(CU, target)) {
    addNotification(null, 'Only an admin can manage employee or admin accounts.', 'warning');
    return false;
  }
  const index = AppState.users.findIndex(user => user.id === userId);
  if (index > -1) {
    const name = AppState.users[index].name;
    AppState.users.splice(index, 1);
    saveState();
    addNotification(null, \`User "\${name}" deleted\`, 'info');
    return true;
  }
  return false;
}

// ═══════════════════ CRUD: EVENTS ═══════════════════

function createEvent(eventData) {
  const newEvent = {
    id: 'e' + Date.now(),
    createdAt: new Date().toISOString().split('T')[0],
    registered: 0,
    status: 'upcoming',
    ...eventData,
  };
  AppState.events.push(newEvent);
  saveState();
  addNotification(null, \`Event "\${newEvent.title}" created\`, 'success');
  return newEvent;
}
function updateEvent(eventId, updates) {
  const event = AppState.events.find(currentEvent => currentEvent.id === eventId);
  if (event) {
    Object.assign(event, updates);
    saveState();
    addNotification(null, \`Event "\${event.title}" updated\`, 'success');
    return event;
  }
  return null;
}
function deleteEvent(eventId) {
  const index = AppState.events.findIndex(event => event.id === eventId);
  if (index > -1) {
    const title = AppState.events[index].title;
    AppState.events.splice(index, 1);
    // Also remove registrations for this event
    AppState.registrations = AppState.registrations.filter(
      registration => registration.eventId !== eventId
    );
    saveState();
    addNotification(null, \`Event "\${title}" deleted\`, 'info');
    return true;
  }
  return false;
}

// ═══════════════════ CRUD: REGISTRATIONS ═══════════════════

function registerAttendee(attendeeId, eventId) {
  const event = AppState.events.find(currentEvent => currentEvent.id === eventId);
  if (!event) return null;
  if (event.registered >= event.capacity || event.status === 'full') {
    return {
      success: false,
      message: 'Event is at maximum capacity',
    };
  }

  // Check if already registered
  if (
    AppState.registrations.find(
      registration => registration.attendeeId === attendeeId && registration.eventId === eventId
    )
  ) {
    addNotification(attendeeId, "You're already registered for this event", 'warning');
    return null;
  }
  const newReg = {
    id: 'r' + Date.now(),
    attendeeId,
    eventId,
    date: new Date().toISOString().split('T')[0],
    ticketId: 'TKT-' + String(AppState.registrations.length + 1).padStart(3, '0'),
    status: 'confirmed',
    amount: event.price,
    checkedIn: false,
    qr: generateQRCode(),
  };
  AppState.registrations.push(newReg);
  event.registered = Math.min(event.registered + 1, event.capacity);
  if (event.registered >= event.capacity) {
    event.status = 'full';
  }
  saveState();
  addNotification(attendeeId, \`Registered for "\${event.title}" ✓\`, 'success');
  return newReg;
}
function cancelRegistration(registrationId) {
  const index = AppState.registrations.findIndex(
    registration => registration.id === registrationId
  );
  if (index > -1) {
    const reg = AppState.registrations[index];
    const event = AppState.events.find(currentEvent => currentEvent.id === reg.eventId);
    if (event) {
      event.registered = Math.max(0, event.registered - 1);
      if (event.registered < event.capacity && event.status === 'full') {
        event.status = 'upcoming';
      }
    }
    AppState.registrations.splice(index, 1);
    saveState();
    addNotification(null, 'Registration cancelled', 'info');
    return true;
  }
  return false;
}
function checkInAttendee(registrationId) {
  const reg = AppState.registrations.find(registration => registration.id === registrationId);
  if (reg) {
    reg.checkedIn = true;
    saveState();
    addNotification(null, 'Attendee checked in ✓', 'success');
    return true;
  }
  return false;
}

// ═══════════════════ NOTIFICATIONS ═══════════════════

function addNotification(userId, message, type = 'info') {
  const notification = {
    id: 'n' + Date.now(),
    userId: userId || 'global',
    message,
    type,
    // "success", "error", "warning", "info"
    read: false,
    createdAt: new Date().toISOString(),
  };
  AppState.notifications.push(notification);
  // Keep only last 50 notifications
  if (AppState.notifications.length > 50) {
    AppState.notifications.shift();
  }
  saveState();
  return notification;
}
function markNotificationAsRead(notificationId) {
  const notif = AppState.notifications.find(notification => notification.id === notificationId);
  if (notif) {
    notif.read = true;
    saveState();
  }
}
function getUnreadCount() {
  return AppState.notifications.filter(notification => !notification.read).length;
}

// ═══════════════════ HELPERS ═══════════════════

function generateQRCode() {
  // Simple QR grid pattern (5x5 for demo)
  const qr = [];
  for (let i = 0; i < 25; i++) {
    qr.push(Math.random() > 0.5 ? 1 : 0);
  }
  return qr;
}
function findUser(userId) {
  return AppState.users.find(user => user.id === userId);
}
function findEvent(eventId) {
  return AppState.events.find(event => event.id === eventId);
}
function getUserEvents(userId) {
  return AppState.events.filter(event => event.organizer === userId);
}
function getUserRegistrations(userId) {
  return AppState.registrations.filter(registration => registration.attendeeId === userId);
}
function getEventRegistrations(eventId) {
  return AppState.registrations.filter(registration => registration.eventId === eventId);
}

// ═══════════════════ AUTHENTICATION ═══════════════════

function login(email, password) {
  const user = AppState.users.find(u => u.email === email && u.password === password);
  if (user) {
    AppState.currentUser = user;
    saveState();
    addNotification(user.id, \`Welcome back, \${user.name}! 👋\`, 'success');
    return user;
  }
  return null;
}
function logout() {
  AppState.currentUser = null;
  saveState();
}

// Make AppState global
window.AppState = AppState;
window.createUser = createUser;
window.updateUser = updateUser;
window.deleteUser = deleteUser;
window.createEvent = createEvent;
window.updateEvent = updateEvent;
window.deleteEvent = deleteEvent;
window.registerAttendee = registerAttendee;
window.cancelRegistration = cancelRegistration;
window.checkInAttendee = checkInAttendee;
window.addNotification = addNotification;
window.markNotificationAsRead = markNotificationAsRead;
window.getUnreadCount = getUnreadCount;
window.findUser = findUser;
window.findEvent = findEvent;
window.getUserEvents = getUserEvents;
window.getUserRegistrations = getUserRegistrations;
window.getEventRegistrations = getEventRegistrations;
window.login = login;
window.logout = logout;
`;function q({children:i,value:d="",onChange:t,...a}){const[o,c]=h.useState(d);return h.useEffect(()=>c(d),[d]),e.jsx("select",{...a,value:o,onChange:p=>{c(p.target.value),t?.(p)},children:i})}function U({children:i,fallbackTag:d="div",fallbackProps:t={},...a}){const[o,c]=h.useState(!1);return h.useEffect(()=>c(!1),[a.src]),e.jsxs(e.Fragment,{children:[e.jsx("img",{...a,style:{...a.style,display:o?"none":a.style?.display},onError:()=>c(!0)}),e.jsx(d,{...t,style:{...t.style,display:o?t.style?.display||"block":"none"},children:i})]})}function z({registrations:i,supportRequests:d,financeTransactions:t,events:a,eventOperationsTasks:o,financeRefunds:c,eventRequests:p,onNavigate:s,user:r,EMPLOYEE_TYPE_LABELS:w,financeWorkspace:y=!1}){const f=r.employeeType,b={title:"Finance Executive",purpose:"Manage financial operations, monitor registration revenue, audit transactions, and process attendee refunds.",focus:["Monitor attendee registration revenue and platform commissions","Review transactions and process refund cases","Maintain finance and revenue reconciliation reports"],primaryAction:()=>s("finance"),primaryLabel:"Open Finance Center",secondaryAction:()=>s("reports"),secondaryLabel:"Open Finance Reports"},m={REGISTRATION_VERIFICATION:{title:"User Executive",purpose:"Protect event access by reviewing registrations, validating attendee documents, and resolving account verification issues.",focus:["Review pending registrations and identity documents","Verify attendee eligibility and ticket details","Resolve account access and registration queries"],primaryAction:()=>s("registrations"),primaryLabel:"Open Registrations",secondaryAction:()=>s("attendees"),secondaryLabel:"Manage Attendees"},EVENT_OPERATIONS:{title:"Event Executive",purpose:"Coordinate event readiness and live delivery, from event information and operational plans to post-event reporting.",focus:["Maintain event schedules, venues, and operational details","Prepare and track event-operation tasks","Coordinate changes with organizers and clients"],primaryAction:()=>s("events"),primaryLabel:"Manage Events",secondaryAction:()=>s("event-requests"),secondaryLabel:"Open Operations"},SUPPORT_FINANCE:y?b:{title:"Customer Support & Finance Executive",purpose:"Resolve customer requests and maintain accurate payment, refund, and service-operation records.",focus:["Respond to customer support requests","Review transactions and refund cases","Maintain service and finance operational reports"],primaryAction:()=>s("support-center"),primaryLabel:"Open Support Center",secondaryAction:()=>s("finance"),secondaryLabel:"Open Finance"},FINANCE_EXECUTIVE:y?b:void 0}[f];if(!m)return"";const j=i||[],g=d||[],A=t||[],N=a||[],E=j.filter(n=>!n.verified||["Pending Review","Flagged","pending"].includes(n.verificationStatus||n.status)).length,R=j.filter(n=>n.verified||n.verificationStatus==="Verified").length,C=N.filter(n=>["upcoming","ongoing"].includes(n.status)).length,v=(o||[]).filter(n=>!n.status||!["completed","done"].includes(String(n.status).toLowerCase())).length,l=g.filter(n=>!["Resolved","Closed"].includes(n.status)).length,u=(c||[]).filter(n=>!["Approved","Completed","Rejected"].includes(n.status)).length,I=f==="REGISTRATION_VERIFICATION"?[["Pending reviews",E,"var(--yellow)"],["Verified attendees",R,"var(--green)"],["Registration records",j.length,"var(--accent)"]]:f==="EVENT_OPERATIONS"?[["Active events",C,"var(--accent)"],["Open operations tasks",v,"var(--yellow)"],["Event requests",(p||[]).length,"var(--green)"]]:y?[["Total Revenue Tracked","₹"+A.reduce((n,x)=>n+(Number(x.amount)||0),0).toLocaleString("en-IN"),"var(--green)"],["Transactions monitored",A.length,"var(--blue)"],["Refunds awaiting review",u,"var(--yellow)"]]:[["Open support requests",l,"var(--yellow)"],["Transactions reviewed",A.length,"var(--blue)"],["Refunds awaiting review",u,"var(--red)"]];return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"page-hd",children:[e.jsxs("div",{className:"page-hd-left",children:[e.jsx("div",{className:"page-title",children:"My Employee Profile"}),e.jsx("div",{className:"page-sub",children:"Your department responsibilities and work overview."})]}),e.jsx("div",{className:"page-hd-right",children:e.jsx("button",{className:"btn btn-ghost",onClick:()=>s("settings"),children:"Edit Profile"})})]}),e.jsxs("div",{className:"profile-banner",children:[r.avatarImage?e.jsx("div",{className:"av av-xl",children:e.jsx(U,{src:r.avatarImage,alt:r.name,fallbackTag:"span",fallbackProps:{style:{display:"block"}},children:r.avatar||r.name[0]})}):e.jsx("div",{className:"av av-xl",children:r.avatar||r.name[0]}),e.jsxs("div",{className:"profile-info",children:[e.jsx("div",{className:"profile-name",children:r.name}),e.jsx("div",{className:"profile-role-tag",children:m.title}),e.jsx("div",{className:"small mt-4",children:r.service||w[f]}),e.jsx("span",{className:"badge badge-green mt-8",children:"Active employee account"})]})]}),e.jsx("div",{className:"grid-3 mb-20",children:I.map(([n,x,T])=>e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"label",children:n}),e.jsx("div",{className:"stat-value",style:{color:T,marginTop:"10px"},children:x})]},n))}),e.jsxs("div",{className:"grid-2",style:{alignItems:"start",gap:"20px"},children:[e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"h4 mb-14",children:"Role & Responsibilities"}),e.jsx("p",{style:{fontSize:"13.5px",color:"var(--text2)",lineHeight:"1.7",marginBottom:"16px"},children:m.purpose}),e.jsx("div",{className:"label mb-8",children:"Core responsibilities"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:m.focus.map((n,x)=>e.jsxs("div",{style:{display:"flex",gap:"9px",alignItems:"flex-start",color:"var(--text2)"},children:[e.jsx("span",{style:{color:"var(--green)",fontWeight:"700"},children:"✓"}),e.jsx("span",{children:n})]},n?.id??n?.requestId??n?.eventId??n?.registrationId??n?.reportId??n?.label??(typeof n=="string"||typeof n=="number"?n:x)))})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"h4 mb-14",children:"Employee Details"}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Department"}),e.jsx("span",{className:"info-value",children:w[f]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Email"}),e.jsx("span",{className:"info-value",children:r.email})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Phone"}),e.jsx("span",{className:"info-value",children:r.phone||"Not set"})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Location"}),e.jsx("span",{className:"info-value",children:r.city||"Not set"})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:"Member since"}),e.jsx("span",{className:"info-value",children:r.joined||"Not set"})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"h4 mb-14",children:"Work Tools"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("button",{className:"btn btn-primary w-full",onClick:m.primaryAction,children:m.primaryLabel}),e.jsx("button",{className:"btn btn-ghost w-full",onClick:m.secondaryAction,children:m.secondaryLabel}),e.jsx("button",{className:"btn btn-ghost w-full",onClick:()=>s("reports"),children:"View Department Reports"})]})]})]})]})]})}function S({id:i,label:d,value:t,onChange:a,type:o="text",placeholder:c,multiline:p,maxLength:s,invalid:r}){return e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",htmlFor:i,children:d}),p?e.jsx("textarea",{className:"form-control",id:i,value:t,onChange:a,maxLength:s,"aria-invalid":r||void 0}):e.jsx("input",{className:"form-control",id:i,type:o,placeholder:c,"aria-invalid":r||void 0,value:t,onChange:a})]})}function V({user:i,roleLabel:d,admin:t=!1,actions:{onSaveSettings:a,onChangePass:o,onSignOut:c,onValidationError:p}}){const[s,r]=h.useState({name:i.name,email:i.email,phone:i.phone||(t?i.phoneNo:"")||"",bio:i.bio||""}),[w,y]=h.useState({current:"",next:"",confirm:""}),[f,b]=h.useState(i.name),[m,j]=h.useState([!0,!1,!0]),[g,A]=h.useState({profile:"",password:""}),N=v=>l=>r(u=>({...u,[v]:l.target.value})),E=v=>l=>y(u=>({...u,[v]:l.target.value}));async function R(v){v.preventDefault();const l=!s.name.trim()||!s.email.trim().includes("@")?"Enter a name and valid email.":"";if(A(u=>({...u,profile:l})),l){p?.(l);return}await a(s)&&b(s.name)}async function C(v){v.preventDefault();const{current:l,next:u,confirm:I}=w,n=!l.trim()||u.trim().length<6?"Enter your current password and a new password of at least 6 characters.":u.trim()!==I.trim()?"Passwords do not match.":"";if(A(x=>({...x,password:n})),n){p?.(n);return}await o(w)&&y({current:"",next:"",confirm:""})}return e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"Account Settings",subtitle:"Manage your personal information and account preferences."}),e.jsxs("div",{className:"grid-2",style:{alignItems:"start",gap:20},children:[e.jsxs("form",{className:"card card-lg",noValidate:!0,onSubmit:R,children:[e.jsx("div",{className:"h4 mb-20",children:"Personal Information"}),e.jsxs("div",{className:"profile-banner",style:{marginBottom:20,padding:18},children:[e.jsx(O,{size:"av-lg",name:f,image:t?void 0:i.avatarImage,fallback:i.avatar||f[0]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:700},children:f}),e.jsx("div",{className:"small",children:d})]})]}),e.jsx(S,{id:"st-name",label:"Full Name",value:s.name,onChange:N("name"),invalid:!!g.profile}),e.jsx(S,{id:"st-email",label:"Email Address",type:t?"email":"text",value:s.email,onChange:N("email"),invalid:!!g.profile}),e.jsx(S,{id:"st-phone",label:"Phone Number",value:s.phone,onChange:N("phone"),invalid:!!g.profile}),e.jsx(S,{id:"st-bio",label:"Bio",value:s.bio,onChange:N("bio"),multiline:!0,maxLength:t?2e3:void 0,invalid:!!g.profile}),e.jsx("button",{className:"btn btn-primary w-full",style:{justifyContent:"center"},type:"submit",children:"Save Changes"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("form",{className:"card card-lg",noValidate:!0,onSubmit:C,children:[e.jsx("div",{className:"h4 mb-20",children:"Change Password"}),e.jsx(S,{id:"st-cur",label:"Current Password",type:"password",placeholder:"Enter current password",value:w.current,onChange:E("current"),invalid:!!g.password}),e.jsx(S,{id:"st-new",label:"New Password",type:"password",placeholder:"Min 6 characters",value:w.next,onChange:E("next"),invalid:!!g.password}),e.jsx(S,{id:"st-conf",label:"Confirm New Password",type:"password",placeholder:"Re-enter new password",value:w.confirm,onChange:E("confirm"),invalid:!!g.password}),e.jsx("button",{className:"btn btn-primary w-full",style:{justifyContent:"center"},type:"submit",children:"Update Password"})]}),!t&&e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"h4 mb-16",children:"Preferences"}),["Email Notifications","SMS Reminders","Event Recommendations"].map((v,l)=>e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:v}),e.jsx("div",{className:`toggle${m[l]?" on":""}`,onClick:()=>j(u=>u.map((I,n)=>n===l?!I:I))})]},v))]}),e.jsx("div",{className:"card",children:e.jsx("button",{className:"btn btn-danger w-full mb-8",style:{justifyContent:"center"},onClick:c,children:"Sign Out"})})]})]})]})}function B(i,d){let t=null;return{hasPage(a){return d.includes(a)},isCurrentPage(a){return t?.page===a},clear(a){!t||t.container!==a||(t.root.unmount(),t=null)},render(a,o,c){if(!a)return;t?.container!==a&&(t?.root.unmount(),a.replaceChildren(),t={container:a,root:P.createRoot(a)}),t.page=o;const p=c?.pageProps||{},s=`${o}:${p.id||""}`;D.flushSync(()=>t.root.render(e.jsx(i,{page:o,pageProps:p},s)))}}}export{V as A,z as E,U as I,q as P,B as c,L as p};
