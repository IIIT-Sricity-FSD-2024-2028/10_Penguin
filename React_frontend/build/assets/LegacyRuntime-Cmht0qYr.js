import{j as e,r as d,z as p,B as u,C as s}from"./index-Ca0ZN0F_.js";function N({sidebar:n,navbar:r}){return e.jsx("div",{id:"app",children:e.jsxs("div",{className:"app-shell",children:[e.jsx("aside",{className:"sidebar",children:n}),e.jsxs("div",{className:"main",children:[e.jsx("div",{className:"topbar",children:r}),e.jsx("div",{className:"page",id:"page-content"})]})]})})}function t(n,r){return Function("event",n).call(r.currentTarget,r.nativeEvent||r)}function m(){return e.jsx("div",{id:"login",children:e.jsxs("div",{className:"login-card",children:[e.jsx("div",{className:"login-logo",children:e.jsx("span",{className:"brand-logo",children:e.jsx("span",{className:"brand-logo-art",children:e.jsx("img",{src:"/assets/images/eventflow-logo.png",alt:"EventFlow",width:"2172",height:"724",decoding:"async"})})})}),e.jsx("p",{className:"login-sub",id:"login-subtitle",children:"Sign in to your dashboard"}),e.jsx("div",{className:"login-hint",id:"login-hint",children:"📝 Demo credentials available below"}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Email Address"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-icon",children:"✉️"}),e.jsx("input",{className:"form-control",id:"l-email",placeholder:"you@example.com",type:"email"})]}),e.jsx("span",{className:"form-error",id:"l-email-err",children:"Enter a valid email address"})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:"20px"},children:[e.jsx("label",{className:"form-label",children:"Password"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-icon",children:"🔒"}),e.jsx("input",{className:"form-control",id:"l-pass",onKeyDown:n=>t("if(event.key==='Enter')doLogin()",n),placeholder:"••••••••",type:"password"})]}),e.jsx("span",{className:"form-error",id:"l-pass-err",children:"Password must be at least 4 characters"})]}),e.jsx("button",{className:"btn btn-primary btn-lg w-full",onClick:n=>t("doLogin()",n),children:"Sign In →"}),e.jsx("div",{className:"divider",children:"Demo Credentials (Click to Auto-Fill)"}),e.jsxs("div",{style:{background:"var(--surface2)",borderRadius:"10px",padding:"14px",marginBottom:"16px",fontSize:"12.5px",display:"flex",flexDirection:"column",gap:"8px",maxHeight:"210px",overflowY:"auto"},children:[e.jsxs("div",{onClick:n=>t("fillLogin('arjun.events@eventflow.com', 'Employee@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-purple",style:{marginRight:"4px"},children:"Employee"})," ",e.jsx("strong",{children:"User Executive:"})," arjun.events@eventflow.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Employee@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('employee@example.com', 'Employee@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-purple",style:{marginRight:"4px"},children:"Employee"})," ",e.jsx("strong",{children:"Event Executive:"})," employee@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Employee@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('marcus.ops@eventflow.com', 'Employee@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-purple",style:{marginRight:"4px"},children:"Employee"})," ",e.jsx("strong",{children:"Support & Finance:"})," marcus.ops@eventflow.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Employee@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('organizer@example.com', 'Organizer@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-purple",style:{marginRight:"4px"},children:"Organizer"})," ",e.jsx("strong",{children:"Sarah Chen:"}),"organizer@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Organizer@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('client@example.com', 'Client@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-yellow",style:{marginRight:"4px"},children:"Client"})," ",e.jsx("strong",{children:"Michael Torres:"}),"client@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Client@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('attendee@example.com', 'Attendee@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-blue",style:{marginRight:"4px"},children:"Attendee"})," ",e.jsx("strong",{children:"Priya Patel:"}),"attendee@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Attendee@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('superadmin@example.com', 'Admin@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-red",style:{marginRight:"4px"},children:"Super Admin"})," ",e.jsx("strong",{children:"Alex Johnson:"})," superadmin@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Admin@123"})]})]}),e.jsxs("p",{style:{textAlign:"center",fontSize:"13px",color:"var(--text2)"},children:["Don't have an account?"," ",e.jsx("a",{href:"#",onClick:n=>t("openRegisterModal()",n),style:{color:"var(--accent)"},children:"Create one"})]}),e.jsx("p",{style:{textAlign:"center",fontSize:"13px",color:"var(--text2)",marginTop:"12px"},children:e.jsx("a",{href:"#",style:{color:"var(--text2)"},onClick:n=>t("event.preventDefault();showPage('landing');",n),children:"← Back to Home"})})]})})}function f(){return e.jsx("div",{id:"login",children:e.jsxs("div",{className:"login-card",children:[e.jsx("div",{className:"login-logo",children:e.jsx("span",{className:"brand-logo",children:e.jsx("span",{className:"brand-logo-art",children:e.jsx("img",{src:"/assets/images/eventflow-logo.png",alt:"EventFlow",width:"2172",height:"724",decoding:"async"})})})}),e.jsx("p",{className:"login-sub",id:"login-subtitle",children:"Sign in to your dashboard"}),e.jsx("div",{className:"login-hint",id:"login-hint",children:"📝 Demo credentials available below"}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Email Address"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-icon",children:"✉️"}),e.jsx("input",{className:"form-control",id:"l-email",placeholder:"you@example.com",type:"email"})]}),e.jsx("span",{className:"form-error",id:"l-email-err",children:"Enter a valid email address"})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:"20px"},children:[e.jsx("label",{className:"form-label",children:"Password"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-icon",children:"🔒"}),e.jsx("input",{className:"form-control",id:"l-pass",onKeyDown:n=>t("if(event.key==='Enter')doLogin()",n),placeholder:"••••••••",type:"password"})]}),e.jsx("span",{className:"form-error",id:"l-pass-err",children:"Password must be at least 4 characters"})]}),e.jsx("button",{className:"btn btn-primary btn-lg w-full",onClick:n=>t("doLogin()",n),children:"Sign In →"}),e.jsx("div",{className:"divider",children:"Demo Credentials (Click to Auto-Fill)"}),e.jsxs("div",{style:{background:"var(--surface2)",borderRadius:"10px",padding:"14px",marginBottom:"16px",fontSize:"12.5px",display:"flex",flexDirection:"column",gap:"8px",maxHeight:"210px",overflowY:"auto"},children:[e.jsxs("div",{onClick:n=>t("fillLogin('organizer@example.com', 'Organizer@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-purple",style:{marginRight:"4px"},children:"Organizer"})," ",e.jsx("strong",{children:"Sarah Chen:"}),"organizer@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Organizer@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('client@example.com', 'Client@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-yellow",style:{marginRight:"4px"},children:"Client"})," ",e.jsx("strong",{children:"Michael Torres:"}),"client@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Client@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('attendee@example.com', 'Attendee@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-blue",style:{marginRight:"4px"},children:"Attendee"})," ",e.jsx("strong",{children:"Priya Patel:"}),"attendee@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Attendee@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('superadmin@example.com', 'Admin@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-red",style:{marginRight:"4px"},children:"Super Admin"})," ",e.jsx("strong",{children:"Alex Johnson:"})," superadmin@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Admin@123"})]})]}),e.jsxs("p",{style:{textAlign:"center",fontSize:"13px",color:"var(--text2)"},children:["Don't have an account?"," ",e.jsx("a",{href:"#",onClick:n=>t("openRegisterModal()",n),style:{color:"var(--accent)"},children:"Create one"})]}),e.jsx("p",{style:{textAlign:"center",fontSize:"13px",color:"var(--text2)",marginTop:"12px"},children:e.jsx("a",{href:"#",style:{color:"var(--text2)"},onClick:n=>t("event.preventDefault();showPage('landing');",n),children:"← Back to Home"})})]})})}function g(){return e.jsx("div",{id:"login",children:e.jsxs("div",{className:"login-card",children:[e.jsx("div",{className:"login-logo",children:e.jsx("span",{className:"brand-logo",children:e.jsx("span",{className:"brand-logo-art",children:e.jsx("img",{src:"/assets/images/eventflow-logo.png",alt:"EventFlow",width:"2172",height:"724",decoding:"async"})})})}),e.jsx("p",{className:"login-sub",id:"login-subtitle",children:"Sign in to your dashboard"}),e.jsx("div",{className:"login-hint",id:"login-hint",children:"📝 Demo credentials available below"}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Email Address"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-icon",children:"✉️"}),e.jsx("input",{className:"form-control",id:"l-email",placeholder:"you@example.com",type:"email"})]}),e.jsx("span",{className:"form-error",id:"l-email-err",children:"Enter a valid email address"})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:"20px"},children:[e.jsx("label",{className:"form-label",children:"Password"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-icon",children:"🔒"}),e.jsx("input",{className:"form-control",id:"l-pass",onKeyDown:n=>t("if(event.key==='Enter')doLogin()",n),placeholder:"••••••••",type:"password"})]}),e.jsx("span",{className:"form-error",id:"l-pass-err",children:"Password must be at least 4 characters"})]}),e.jsx("button",{className:"btn btn-primary btn-lg w-full",onClick:n=>t("doLogin()",n),children:"Sign In →"}),e.jsx("div",{className:"divider",children:"Demo Credentials (Click to Auto-Fill)"}),e.jsxs("div",{style:{background:"var(--surface2)",borderRadius:"10px",padding:"14px",marginBottom:"16px",fontSize:"12.5px",display:"flex",flexDirection:"column",gap:"8px",maxHeight:"210px",overflowY:"auto"},children:[e.jsxs("div",{onClick:n=>t("fillLogin('arjun.events@eventflow.com', 'Employee@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-purple",style:{marginRight:"4px"},children:"Employee"})," ",e.jsx("strong",{children:"User Executive:"})," arjun.events@eventflow.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Employee@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('employee@example.com', 'Employee@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-purple",style:{marginRight:"4px"},children:"Employee"})," ",e.jsx("strong",{children:"Event Executive:"})," employee@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Employee@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('marcus.ops@eventflow.com', 'Employee@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-purple",style:{marginRight:"4px"},children:"Employee"})," ",e.jsx("strong",{children:"Finance Executive:"})," marcus.ops@eventflow.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Employee@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('organizer@example.com', 'Organizer@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-purple",style:{marginRight:"4px"},children:"Organizer"})," ",e.jsx("strong",{children:"Sarah Chen:"}),"organizer@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Organizer@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('client@example.com', 'Client@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-yellow",style:{marginRight:"4px"},children:"Client"})," ",e.jsx("strong",{children:"Michael Torres:"}),"client@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Client@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('attendee@example.com', 'Attendee@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-blue",style:{marginRight:"4px"},children:"Attendee"})," ",e.jsx("strong",{children:"Priya Patel:"}),"attendee@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Attendee@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('superadmin@example.com', 'Admin@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-red",style:{marginRight:"4px"},children:"Super Admin"})," ",e.jsx("strong",{children:"Alex Johnson:"})," superadmin@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Admin@123"})]})]}),e.jsxs("p",{style:{textAlign:"center",fontSize:"13px",color:"var(--text2)"},children:["Don't have an account?"," ",e.jsx("a",{href:"#",onClick:n=>t("openRegisterModal()",n),style:{color:"var(--accent)"},children:"Create one"})]}),e.jsx("p",{style:{textAlign:"center",fontSize:"13px",color:"var(--text2)",marginTop:"12px"},children:e.jsx("a",{href:"#",style:{color:"var(--text2)"},onClick:n=>t("event.preventDefault();showPage('landing');",n),children:"← Back to Home"})})]})})}function v(){return e.jsx("div",{id:"login",children:e.jsxs("div",{className:"login-card",children:[e.jsx("div",{className:"login-logo",children:e.jsx("span",{className:"brand-logo",children:e.jsx("span",{className:"brand-logo-art",children:e.jsx("img",{src:"/assets/images/eventflow-logo.png",alt:"EventFlow",width:"2172",height:"724",decoding:"async"})})})}),e.jsx("p",{className:"login-sub",id:"login-subtitle",children:"Sign in to your dashboard"}),e.jsx("div",{className:"login-hint",id:"login-hint",children:"📝 Demo credentials available below"}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Email Address"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-icon",children:"✉️"}),e.jsx("input",{className:"form-control",id:"l-email",placeholder:"you@example.com",type:"email"})]}),e.jsx("span",{className:"form-error",id:"l-email-err",children:"Enter a valid email address"})]}),e.jsxs("div",{className:"form-group",style:{marginBottom:"20px"},children:[e.jsx("label",{className:"form-label",children:"Password"}),e.jsxs("div",{className:"input-group",children:[e.jsx("span",{className:"input-icon",children:"🔒"}),e.jsx("input",{className:"form-control",id:"l-pass",onKeyDown:n=>t("if(event.key==='Enter')doLogin()",n),placeholder:"••••••••",type:"password"})]}),e.jsx("span",{className:"form-error",id:"l-pass-err",children:"Password must be at least 4 characters"})]}),e.jsx("button",{className:"btn btn-primary btn-lg w-full",onClick:n=>t("doLogin()",n),children:"Sign In →"}),e.jsx("div",{className:"divider",children:"Demo Credentials (Click to Auto-Fill)"}),e.jsxs("div",{style:{background:"var(--surface2)",borderRadius:"10px",padding:"14px",marginBottom:"16px",fontSize:"12.5px",display:"flex",flexDirection:"column",gap:"8px",maxHeight:"210px",overflowY:"auto"},children:[e.jsxs("div",{onClick:n=>t("fillLogin('arjun.events@eventflow.com', 'Employee@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-purple",style:{marginRight:"4px"},children:"Employee"})," ",e.jsx("strong",{children:"Support Executive:"})," arjun.events@eventflow.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Employee@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('marcus.ops@eventflow.com', 'Employee@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-purple",style:{marginRight:"4px"},children:"Employee"})," ",e.jsx("strong",{children:"Finance Executive:"})," marcus.ops@eventflow.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Employee@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('organizer@example.com', 'Organizer@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-purple",style:{marginRight:"4px"},children:"Organizer"})," ",e.jsx("strong",{children:"Sarah Chen:"}),"organizer@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Organizer@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('client@example.com', 'Client@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-yellow",style:{marginRight:"4px"},children:"Client"})," ",e.jsx("strong",{children:"Michael Torres:"}),"client@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Client@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('attendee@example.com', 'Attendee@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-blue",style:{marginRight:"4px"},children:"Attendee"})," ",e.jsx("strong",{children:"Priya Patel:"}),"attendee@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Attendee@123"})]}),e.jsxs("div",{onClick:n=>t("fillLogin('superadmin@example.com', 'Admin@123')",n),style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:"6px",background:"var(--surface)"},children:[e.jsxs("span",{children:[e.jsx("span",{className:"badge badge-red",style:{marginRight:"4px"},children:"Super Admin"})," ",e.jsx("strong",{children:"Alex Johnson:"}),"superadmin@example.com"]}),e.jsx("span",{style:{color:"var(--accent)",fontFamily:"monospace",fontSize:"11px"},children:"Admin@123"})]})]}),e.jsxs("p",{style:{textAlign:"center",fontSize:"13px",color:"var(--text2)"},children:["Don't have an account?"," ",e.jsx("a",{href:"#",id:"create-account-link",onClick:n=>t("openRegisterModal()",n),style:{color:"var(--accent)",fontWeight:"600"},children:"Create New Account"})]}),e.jsx("p",{style:{textAlign:"center",fontSize:"13px",color:"var(--text2)",marginTop:"12px"},children:e.jsx("a",{href:"#",style:{color:"var(--text2)"},onClick:n=>t("event.preventDefault();showPage('landing');",n),children:"← Back to Home"})})]})})}function T({workspace:n}){return n==="organizer"?e.jsx(f,{}):n==="finance-executive"?e.jsx(g,{}):n==="landing"?e.jsx(v,{}):e.jsx(m,{})}function D(){return e.jsxs("div",{id:"gallery",style:{background:"var(--bg)",minHeight:"100vh",padding:"60px 20px",display:"none"},children:[e.jsxs("nav",{className:"l-nav",style:{zIndex:"300"},children:[e.jsx("span",{className:"l-nav-logo",children:e.jsx("span",{className:"brand-logo",children:e.jsx("span",{className:"brand-logo-art",children:e.jsx("img",{src:"/assets/images/eventflow-logo.png",alt:"EventFlow",width:"2172",height:"724",decoding:"async"})})})}),e.jsxs("div",{className:"l-nav-links",children:[e.jsx("a",{href:"#",style:{color:"var(--accent)"},onClick:n=>t("event.preventDefault();showPage('landing');",n),children:"← Home"}),e.jsx("a",{href:"#",onClick:n=>t("event.preventDefault();showPage('find-events');",n),children:"Find Events"}),e.jsx("a",{href:"#",onClick:n=>t("event.preventDefault();showPage('gallery');",n),children:"Gallery"}),e.jsx("a",{href:"#",onClick:n=>t("event.preventDefault();showPage('about');",n),children:"About Us"}),e.jsx("a",{href:"#",onClick:n=>t("event.preventDefault();showPage('contact');",n),children:"Contact"})]}),e.jsx("div",{className:"l-nav-actions",children:e.jsx("button",{className:"btn btn-ghost btn-sm",onClick:n=>t("gotoLogin('attendee')",n),children:"Sign In"})})]}),e.jsxs("div",{className:"l-container",style:{maxWidth:"1200px",margin:"0 auto"},children:[e.jsxs("div",{style:{marginBottom:"40px"},children:[e.jsx("a",{href:"#",style:{color:"var(--text2)",fontSize:"13px"},onClick:n=>t("event.preventDefault();showPage('landing');",n),children:"← Back to Home"}),e.jsx("h1",{className:"h1",style:{marginTop:"12px"},children:"Event Gallery"}),e.jsx("p",{className:"muted",children:"Showcase of our successful events and happy attendees."})]}),e.jsxs("style",{children:[".gallery-grid ","{","columns: 3; column-gap: 16px;","}","@media(max-width:900px) ","{",".gallery-grid ","{","columns: 2;","}","}","@media(max-width:560px) ","{",".gallery-grid ","{","columns: 1;","}","}",".gallery-item ","{","break-inside: avoid; margin-bottom: 16px; border-radius: 14px; overflow: hidden; position: relative; cursor: pointer; display: block;","}",".gallery-item img ","{","width: 100%; display: block; transition: transform .35s;","}",".gallery-item:hover img ","{","transform: scale(1.05);","}",".gallery-item-overlay ","{","position: absolute; inset: 0; background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, transparent 50%); opacity: 0; transition: opacity .3s; display: flex; align-items: flex-end; padding: 14px;","}",".gallery-item:hover .gallery-item-overlay ","{","opacity: 1;","}",".gallery-item-label ","{","color: #fff; font-weight: 600; font-size: 13px; line-height: 1.3;","}"]}),e.jsxs("div",{className:"gallery-grid",children:[e.jsxs("div",{className:"gallery-item",children:[e.jsx("img",{alt:"Tech Innovation Summit",onError:n=>t("this.parentElement.style.background='var(--surface2)';this.style.display='none'",n),src:"/assets/images/events/event-tech-summit.jpg"}),e.jsx("div",{className:"gallery-item-overlay",children:e.jsx("div",{className:"gallery-item-label",children:"Tech Innovation Summit 2026"})})]}),e.jsxs("div",{className:"gallery-item",children:[e.jsx("img",{alt:"Spring Music Festival",onError:n=>t("this.parentElement.style.background='var(--surface2)';this.style.display='none'",n),src:"/assets/images/events/event-music-fest.jpg"}),e.jsx("div",{className:"gallery-item-overlay",children:e.jsx("div",{className:"gallery-item-label",children:"Spring Music Festival"})})]}),e.jsxs("div",{className:"gallery-item",children:[e.jsx("img",{alt:"Corporate Annual Gala",onError:n=>t("this.parentElement.style.background='var(--surface2)';this.style.display='none'",n),src:"/assets/images/events/event-annual-gala.jpg"}),e.jsx("div",{className:"gallery-item-overlay",children:e.jsx("div",{className:"gallery-item-label",children:"Corporate Annual Gala 2026"})})]}),e.jsxs("div",{className:"gallery-item",children:[e.jsx("img",{alt:"Hackathon",onError:n=>t("this.parentElement.style.background='var(--surface2)';this.style.display='none'",n),src:"/assets/images/events/event-hackathon.jpg"}),e.jsx("div",{className:"gallery-item-overlay",children:e.jsx("div",{className:"gallery-item-label",children:"DevSprint Hackathon"})})]}),e.jsxs("div",{className:"gallery-item",children:[e.jsx("img",{alt:"Photography Masterclass",onError:n=>t("this.parentElement.style.background='var(--surface2)';this.style.display='none'",n),src:"/assets/images/events/event-photography.jpg"}),e.jsx("div",{className:"gallery-item-overlay",children:e.jsx("div",{className:"gallery-item-label",children:"Photography Masterclass"})})]}),e.jsxs("div",{className:"gallery-item",children:[e.jsx("img",{alt:"FinTech Summit",onError:n=>t("this.parentElement.style.background='var(--surface2)';this.style.display='none'",n),src:"/assets/images/events/event-fintech.jpg"}),e.jsx("div",{className:"gallery-item-overlay",children:e.jsx("div",{className:"gallery-item-label",children:"FinTech Innovation Summit"})})]}),e.jsxs("div",{className:"gallery-item",children:[e.jsx("img",{alt:"Startup Pitch Night",onError:n=>t("this.parentElement.style.background='var(--surface2)';this.style.display='none'",n),src:"/assets/images/events/event-pitch-night.jpg"}),e.jsx("div",{className:"gallery-item-overlay",children:e.jsx("div",{className:"gallery-item-label",children:"Startup Pitch Night"})})]}),e.jsxs("div",{className:"gallery-item",children:[e.jsx("img",{alt:"Digital Marketing Workshop",onError:n=>t("this.parentElement.style.background='var(--surface2)';this.style.display='none'",n),src:"/assets/images/events/event-marketing-workshop.jpg"}),e.jsx("div",{className:"gallery-item-overlay",children:e.jsx("div",{className:"gallery-item-label",children:"Digital Marketing Workshop"})})]}),e.jsxs("div",{className:"gallery-item",children:[e.jsx("img",{alt:"AI Summit",onError:n=>t("this.parentElement.style.background='var(--surface2)';this.style.display='none'",n),src:"/assets/images/events/event-ai-summit.jpg"}),e.jsx("div",{className:"gallery-item-overlay",children:e.jsx("div",{className:"gallery-item-label",children:"AI & Machine Learning Summit"})})]}),e.jsxs("div",{className:"gallery-item",children:[e.jsx("img",{alt:"Wedding Gala",onError:n=>t("this.parentElement.style.background='var(--surface2)';this.style.display='none'",n),src:"/assets/images/events/event-wedding.jpg"}),e.jsx("div",{className:"gallery-item-overlay",children:e.jsx("div",{className:"gallery-item-label",children:"Grand Wedding Celebration"})})]}),e.jsxs("div",{className:"gallery-item",children:[e.jsx("img",{alt:"Healthcare Forum",onError:n=>t("this.parentElement.style.background='var(--surface2)';this.style.display='none'",n),src:"/assets/images/events/event-healthcare-forum.jpg"}),e.jsx("div",{className:"gallery-item-overlay",children:e.jsx("div",{className:"gallery-item-label",children:"Healthcare Innovation Forum"})})]}),e.jsxs("div",{className:"gallery-item",children:[e.jsx("img",{alt:"Cybersecurity Conference",onError:n=>t("this.parentElement.style.background='var(--surface2)';this.style.display='none'",n),src:"/assets/images/events/event-cybersecurity.jpg"}),e.jsx("div",{className:"gallery-item-overlay",children:e.jsx("div",{className:"gallery-item-label",children:"Cybersecurity Conference"})})]})]})]})]})}function $(){return e.jsxs("div",{id:"about",style:{background:"var(--bg)",minHeight:"100vh",padding:"60px 20px",display:"none"},children:[e.jsxs("nav",{className:"l-nav",style:{zIndex:"300"},children:[e.jsx("span",{className:"l-nav-logo",children:e.jsx("span",{className:"brand-logo",children:e.jsx("span",{className:"brand-logo-art",children:e.jsx("img",{src:"/assets/images/eventflow-logo.png",alt:"EventFlow",width:"2172",height:"724",decoding:"async"})})})}),e.jsxs("div",{className:"l-nav-links",children:[e.jsx("a",{href:"#",style:{color:"var(--accent)"},onClick:n=>t("event.preventDefault();showPage('landing');",n),children:"← Home"}),e.jsx("a",{href:"#",onClick:n=>t("event.preventDefault();showPage('find-events');",n),children:"Find Events"}),e.jsx("a",{href:"#",onClick:n=>t("event.preventDefault();showPage('gallery');",n),children:"Gallery"}),e.jsx("a",{href:"#",onClick:n=>t("event.preventDefault();showPage('about');",n),children:"About Us"}),e.jsx("a",{href:"#",onClick:n=>t("event.preventDefault();showPage('contact');",n),children:"Contact"})]}),e.jsx("div",{className:"l-nav-actions",children:e.jsx("button",{className:"btn btn-ghost btn-sm",onClick:n=>t("gotoLogin('attendee')",n),children:"Sign In"})})]}),e.jsxs("div",{className:"l-container",style:{maxWidth:"800px",margin:"0 auto"},children:[e.jsxs("div",{style:{marginBottom:"40px"},children:[e.jsx("a",{href:"#",style:{color:"var(--text2)",fontSize:"13px"},onClick:n=>t("event.preventDefault();showPage('landing');",n),children:"← Back to Home"}),e.jsx("h1",{className:"h1",style:{marginTop:"12px"},children:"About EventFlow"})]}),e.jsxs("div",{style:{background:"var(--surface2)",borderRadius:"12px",padding:"24px",lineHeight:"1.8",color:"var(--text2)"},children:[e.jsx("p",{style:{marginBottom:"16px"},children:"EventFlow is a comprehensive event management and attendee registration platform designed to simplify every aspect of event planning and execution."}),e.jsxs("p",{style:{marginBottom:"16px"},children:[e.jsx("strong",{style:{color:"var(--text)"},children:"Our Mission:"})," To empower event organizers, clients, and attendees with intelligent tools that make event management seamless, secure, and delightful."]}),e.jsx("p",{style:{marginBottom:"16px"},children:e.jsx("strong",{style:{color:"var(--text)"},children:"What We Offer:"})}),e.jsxs("ul",{style:{marginLeft:"20px",marginBottom:"16px"},children:[e.jsx("li",{style:{marginBottom:"8px"},children:"✨ Smart registration with instant QR ticket generation"}),e.jsx("li",{style:{marginBottom:"8px"},children:"✅ Live verification and on-site check-in"}),e.jsx("li",{style:{marginBottom:"8px"},children:"💰 Secure payment processing"}),e.jsx("li",{style:{marginBottom:"8px"},children:"📊 Real-time analytics and reporting"})]}),e.jsxs("p",{children:[e.jsx("strong",{style:{color:"var(--text)"},children:"Founded in 2026"}),", EventFlow has grown to manage 2,400+ events with 98,000+ attendees and 500+ organizers worldwide."]})]})]})]})}function j(){return e.jsxs("div",{id:"contact",style:{background:"var(--bg)",minHeight:"100vh",padding:"60px 20px",display:"none"},children:[e.jsxs("nav",{className:"l-nav",style:{zIndex:"300"},children:[e.jsx("span",{className:"l-nav-logo",children:e.jsx("span",{className:"brand-logo",children:e.jsx("span",{className:"brand-logo-art",children:e.jsx("img",{src:"/assets/images/eventflow-logo.png",alt:"EventFlow",width:"2172",height:"724",decoding:"async"})})})}),e.jsxs("div",{className:"l-nav-links",children:[e.jsx("a",{href:"#",style:{color:"var(--accent)"},onClick:n=>t("event.preventDefault();showPage('landing');",n),children:"← Home"}),e.jsx("a",{href:"#",onClick:n=>t("event.preventDefault();showPage('find-events');",n),children:"Find Events"}),e.jsx("a",{href:"#",onClick:n=>t("event.preventDefault();showPage('gallery');",n),children:"Gallery"}),e.jsx("a",{href:"#",onClick:n=>t("event.preventDefault();showPage('about');",n),children:"About Us"}),e.jsx("a",{href:"#",onClick:n=>t("event.preventDefault();showPage('contact');",n),children:"Contact"})]}),e.jsx("div",{className:"l-nav-actions",children:e.jsx("button",{className:"btn btn-ghost btn-sm",onClick:n=>t("gotoLogin('attendee')",n),children:"Sign In"})})]}),e.jsxs("div",{className:"l-container",style:{maxWidth:"800px",margin:"0 auto"},children:[e.jsxs("div",{style:{marginBottom:"40px"},children:[e.jsx("a",{href:"#",style:{color:"var(--text2)",fontSize:"13px"},onClick:n=>t("event.preventDefault();showPage('landing');",n),children:"← Back to Home"}),e.jsx("h1",{className:"h1",style:{marginTop:"12px"},children:"Contact Us"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",marginBottom:"40px"},children:[e.jsxs("div",{style:{background:"var(--surface2)",borderRadius:"12px",padding:"24px"},children:[e.jsx("div",{style:{fontSize:"28px",marginBottom:"12px"},children:"📧"}),e.jsx("div",{style:{fontWeight:"700",marginBottom:"4px"},children:"Email"}),e.jsx("p",{style:{color:"var(--text2)",fontSize:"13px"},children:"support@eventflow.com"})]}),e.jsxs("div",{style:{background:"var(--surface2)",borderRadius:"12px",padding:"24px"},children:[e.jsx("div",{style:{fontSize:"28px",marginBottom:"12px"},children:"📞"}),e.jsx("div",{style:{fontWeight:"700",marginBottom:"4px"},children:"Phone"}),e.jsx("p",{style:{color:"var(--text2)",fontSize:"13px"},children:"+1 (555) 123-4567"})]}),e.jsxs("div",{style:{background:"var(--surface2)",borderRadius:"12px",padding:"24px"},children:[e.jsx("div",{style:{fontSize:"28px",marginBottom:"12px"},children:"📍"}),e.jsx("div",{style:{fontWeight:"700",marginBottom:"4px"},children:"Address"}),e.jsx("p",{style:{color:"var(--text2)",fontSize:"13px"},children:"123 Event Boulevard, Chennai, CA 94105"})]}),e.jsxs("div",{style:{background:"var(--surface2)",borderRadius:"12px",padding:"24px"},children:[e.jsx("div",{style:{fontSize:"28px",marginBottom:"12px"},children:"🕐"}),e.jsx("div",{style:{fontWeight:"700",marginBottom:"4px"},children:"Hours"}),e.jsx("p",{style:{color:"var(--text2)",fontSize:"13px"},children:"Mon-Fri: 9AM - 6PM PT"})]})]}),e.jsxs("div",{style:{background:"var(--surface2)",borderRadius:"12px",padding:"24px"},children:[e.jsx("div",{style:{fontWeight:"700",marginBottom:"16px"},children:"Send us a message"}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Name"}),e.jsx("input",{className:"form-control",id:"contact-name",placeholder:"Your name"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Email"}),e.jsx("input",{className:"form-control",id:"contact-email",placeholder:"your@email.com",type:"email"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Message"}),e.jsx("textarea",{className:"form-control",id:"contact-message",placeholder:"Your message…",style:{minHeight:"100px"}})]}),e.jsx("button",{className:"btn btn-primary btn-lg w-full",onClick:n=>t("sendContactMessage()",n),children:"Send Message"})]})]})]})}const b=`/**\r
 * EventFlow Central Validation Rules & Numeric Limits (Frontend)\r
 *\r
 * Configurable platform-wide defaults and validation helpers for:\r
 * - Event budget (₹1,000–₹1,00,00,000)\r
 * - Ticket price (₹0–₹1,00,000; 0 for free events; max 2 decimal places)\r
 * - Expected guests and event capacity (1–50,000 integer)\r
 * - Ticket quantity (1–50,000 integer, capped at available capacity)\r
 * - Years of experience (0–60 integer)\r
 * - Discount (0–100%)\r
 * - Indian PIN code (exactly 6 digits)\r
 * - Indian mobile number (valid 10-digit mobile number starting with 6-9)\r
 */\r
\r
export const EVENTFLOW_NUMERIC_LIMITS = {\r
  BUDGET: {\r
    MIN: 1000,\r
    MAX: 10000000,\r
    LABEL: 'Event budget',\r
    ERROR_REQUIRED: 'Event budget is required',\r
    ERROR_MIN: 'Event budget must be at least ₹1,000',\r
    ERROR_MAX: 'Event budget cannot exceed ₹1,00,00,000',\r
    ERROR_DECIMAL: 'Event budget can have at most 2 decimal places',\r
  },\r
  TICKET_PRICE: {\r
    MIN: 0,\r
    MAX: 100000,\r
    LABEL: 'Ticket price',\r
    ERROR_REQUIRED: 'Ticket price is required',\r
    ERROR_MIN: 'Ticket price cannot be negative',\r
    ERROR_MAX: 'Ticket price cannot exceed ₹1,00,000',\r
    ERROR_DECIMAL: 'Ticket price can have at most 2 decimal places',\r
  },\r
  CAPACITY: {\r
    MIN: 1,\r
    MAX: 50000,\r
    LABEL: 'Event capacity',\r
    ERROR_REQUIRED: 'Event capacity is required',\r
    ERROR_MIN: 'Event capacity must be at least 1 guest',\r
    ERROR_MAX: 'Maximum event capacity is 50,000',\r
    ERROR_INTEGER: 'Event capacity must be a whole number',\r
  },\r
  TICKET_QUANTITY: {\r
    MIN: 1,\r
    MAX: 50000,\r
    LABEL: 'Ticket quantity',\r
    ERROR_REQUIRED: 'Ticket quantity is required',\r
    ERROR_MIN: 'Ticket quantity must be at least 1',\r
    ERROR_MAX: 'Ticket quantity cannot exceed available capacity',\r
    ERROR_INTEGER: 'Ticket quantity must be a whole number',\r
  },\r
  YEARS_EXPERIENCE: {\r
    MIN: 0,\r
    MAX: 60,\r
    LABEL: 'Years of experience',\r
    ERROR_REQUIRED: 'Years of experience is required',\r
    ERROR_MIN: 'Years of experience must be 0 or more',\r
    ERROR_MAX: 'Years of experience cannot exceed 60',\r
    ERROR_INTEGER: 'Years of experience must be a whole number',\r
  },\r
  DISCOUNT: {\r
    MIN: 0,\r
    MAX: 100,\r
    LABEL: 'Discount',\r
    ERROR_MIN: 'Discount cannot be negative',\r
    ERROR_MAX: 'Discount cannot exceed 100%',\r
    ERROR_DECIMAL: 'Discount can have at most 2 decimal places',\r
  },\r
  PIN_CODE: {\r
    REGEX: /^\\d{6}$/,\r
    LENGTH: 6,\r
    ERROR: 'Enter a valid 6-digit Indian PIN code',\r
  },\r
  MOBILE_NUMBER: {\r
    REGEX: /^[6-9]\\d{9}$/,\r
    LENGTH: 10,\r
    ERROR: 'Enter a valid 10-digit Indian mobile number',\r
  },\r
};\r
\r
/**\r
 * Validate Event Budget\r
 * @param {unknown} value Number or numeric string\r
 * @param {boolean} required Whether budget is mandatory\r
 * @returns {string|null} Error message string if invalid, or null if valid\r
 */\r
export function validateEventBudget(value, required = true) {\r
  if (value === undefined || value === null || String(value).trim() === '') {\r
    return required ? EVENTFLOW_NUMERIC_LIMITS.BUDGET.ERROR_REQUIRED : null;\r
  }\r
  const num = Number(value);\r
  if (!Number.isFinite(num)) return 'Enter a valid numeric budget';\r
  if (num < EVENTFLOW_NUMERIC_LIMITS.BUDGET.MIN) return EVENTFLOW_NUMERIC_LIMITS.BUDGET.ERROR_MIN;\r
  if (num > EVENTFLOW_NUMERIC_LIMITS.BUDGET.MAX) return EVENTFLOW_NUMERIC_LIMITS.BUDGET.ERROR_MAX;\r
  if (Math.abs(num * 100 - Math.round(num * 100)) > 0.000001)\r
    return EVENTFLOW_NUMERIC_LIMITS.BUDGET.ERROR_DECIMAL;\r
  return null;\r
}\r
\r
/**\r
 * Validate Ticket Price\r
 * @param {unknown} value Number or numeric string\r
 * @param {boolean} required Whether ticket price is mandatory\r
 * @returns {string|null} Error message string if invalid, or null if valid\r
 */\r
export function validateTicketPrice(value, required = false) {\r
  if (value === undefined || value === null || String(value).trim() === '') {\r
    return required ? EVENTFLOW_NUMERIC_LIMITS.TICKET_PRICE.ERROR_REQUIRED : null;\r
  }\r
  const num = Number(value);\r
  if (!Number.isFinite(num)) return 'Enter a valid numeric ticket price';\r
  if (num < EVENTFLOW_NUMERIC_LIMITS.TICKET_PRICE.MIN)\r
    return EVENTFLOW_NUMERIC_LIMITS.TICKET_PRICE.ERROR_MIN;\r
  if (num > EVENTFLOW_NUMERIC_LIMITS.TICKET_PRICE.MAX)\r
    return EVENTFLOW_NUMERIC_LIMITS.TICKET_PRICE.ERROR_MAX;\r
  if (Math.abs(num * 100 - Math.round(num * 100)) > 0.000001)\r
    return EVENTFLOW_NUMERIC_LIMITS.TICKET_PRICE.ERROR_DECIMAL;\r
  return null;\r
}\r
\r
/**\r
 * Validate Capacity / Expected Guests\r
 * @param {unknown} value Number or numeric string\r
 * @param {boolean} required Whether capacity is mandatory\r
 * @returns {string|null} Error message string if invalid, or null if valid\r
 */\r
export function validateCapacity(value, required = true) {\r
  if (value === undefined || value === null || String(value).trim() === '') {\r
    return required ? EVENTFLOW_NUMERIC_LIMITS.CAPACITY.ERROR_REQUIRED : null;\r
  }\r
  const num = Number(value);\r
  if (!Number.isFinite(num)) return 'Enter a valid numeric capacity';\r
  if (!Number.isInteger(num)) return EVENTFLOW_NUMERIC_LIMITS.CAPACITY.ERROR_INTEGER;\r
  if (num < EVENTFLOW_NUMERIC_LIMITS.CAPACITY.MIN)\r
    return EVENTFLOW_NUMERIC_LIMITS.CAPACITY.ERROR_MIN;\r
  if (num > EVENTFLOW_NUMERIC_LIMITS.CAPACITY.MAX)\r
    return EVENTFLOW_NUMERIC_LIMITS.CAPACITY.ERROR_MAX;\r
  return null;\r
}\r
\r
/**\r
 * Validate Ticket Quantity\r
 * @param {unknown} value Number or numeric string\r
 * @param {number} [availableCapacity] Optional current available seats limit\r
 * @returns {string|null} Error message string if invalid, or null if valid\r
 */\r
export function validateTicketQuantity(value, availableCapacity) {\r
  if (value === undefined || value === null || String(value).trim() === '') {\r
    return EVENTFLOW_NUMERIC_LIMITS.TICKET_QUANTITY.ERROR_REQUIRED;\r
  }\r
  const num = Number(value);\r
  if (!Number.isFinite(num)) return 'Enter a valid ticket quantity';\r
  if (!Number.isInteger(num)) return EVENTFLOW_NUMERIC_LIMITS.TICKET_QUANTITY.ERROR_INTEGER;\r
  if (num < EVENTFLOW_NUMERIC_LIMITS.TICKET_QUANTITY.MIN)\r
    return EVENTFLOW_NUMERIC_LIMITS.TICKET_QUANTITY.ERROR_MIN;\r
  const max =\r
    typeof availableCapacity === 'number' && availableCapacity > 0\r
      ? Math.min(availableCapacity, EVENTFLOW_NUMERIC_LIMITS.TICKET_QUANTITY.MAX)\r
      : EVENTFLOW_NUMERIC_LIMITS.TICKET_QUANTITY.MAX;\r
  if (num > max) return EVENTFLOW_NUMERIC_LIMITS.TICKET_QUANTITY.ERROR_MAX;\r
  return null;\r
}\r
\r
/**\r
 * Validate Years of Experience\r
 * @param {unknown} value Number or numeric string\r
 * @param {boolean} required Whether years of experience is mandatory\r
 * @returns {string|null} Error message string if invalid, or null if valid\r
 */\r
export function validateYearsOfExperience(value, required = true) {\r
  if (value === undefined || value === null || String(value).trim() === '') {\r
    return required ? EVENTFLOW_NUMERIC_LIMITS.YEARS_EXPERIENCE.ERROR_REQUIRED : null;\r
  }\r
  const num = Number(value);\r
  if (!Number.isFinite(num)) return 'Enter a valid number for years of experience';\r
  if (!Number.isInteger(num)) return EVENTFLOW_NUMERIC_LIMITS.YEARS_EXPERIENCE.ERROR_INTEGER;\r
  if (num < EVENTFLOW_NUMERIC_LIMITS.YEARS_EXPERIENCE.MIN)\r
    return EVENTFLOW_NUMERIC_LIMITS.YEARS_EXPERIENCE.ERROR_MIN;\r
  if (num > EVENTFLOW_NUMERIC_LIMITS.YEARS_EXPERIENCE.MAX)\r
    return EVENTFLOW_NUMERIC_LIMITS.YEARS_EXPERIENCE.ERROR_MAX;\r
  return null;\r
}\r
\r
/**\r
 * Validate Discount Percentage\r
 * @param {unknown} value Number or numeric string\r
 * @returns {string|null} Error message string if invalid, or null if valid\r
 */\r
export function validateDiscount(value) {\r
  if (value === undefined || value === null || String(value).trim() === '') return null;\r
  const num = Number(value);\r
  if (!Number.isFinite(num)) return 'Enter a valid numeric discount';\r
  if (num < EVENTFLOW_NUMERIC_LIMITS.DISCOUNT.MIN)\r
    return EVENTFLOW_NUMERIC_LIMITS.DISCOUNT.ERROR_MIN;\r
  if (num > EVENTFLOW_NUMERIC_LIMITS.DISCOUNT.MAX)\r
    return EVENTFLOW_NUMERIC_LIMITS.DISCOUNT.ERROR_MAX;\r
  if (Math.abs(num * 100 - Math.round(num * 100)) > 0.000001)\r
    return EVENTFLOW_NUMERIC_LIMITS.DISCOUNT.ERROR_DECIMAL;\r
  return null;\r
}\r
\r
/**\r
 * Validate Indian PIN Code\r
 * @param {unknown} value String PIN code\r
 * @returns {string|null} Error message string if invalid, or null if valid\r
 */\r
export function validatePinCode(value) {\r
  if (typeof value !== 'string' && typeof value !== 'number')\r
    return EVENTFLOW_NUMERIC_LIMITS.PIN_CODE.ERROR;\r
  const str = String(value).trim();\r
  if (!EVENTFLOW_NUMERIC_LIMITS.PIN_CODE.REGEX.test(str)) {\r
    return EVENTFLOW_NUMERIC_LIMITS.PIN_CODE.ERROR;\r
  }\r
  return null;\r
}\r
\r
/**\r
 * Validate Indian Mobile Number\r
 * @param {unknown} value String mobile number\r
 * @returns {string|null} Error message string if invalid, or null if valid\r
 */\r
export function validateIndianMobile(value) {\r
  if (typeof value !== 'string' && typeof value !== 'number')\r
    return EVENTFLOW_NUMERIC_LIMITS.MOBILE_NUMBER.ERROR;\r
  const digits = String(value).replace(/\\D/g, '');\r
  if (digits.length === 10 && /^[6-9]\\d{9}$/.test(digits)) {\r
    return null;\r
  }\r
  if (digits.length === 12 && /^91[6-9]\\d{9}$/.test(digits)) {\r
    return null;\r
  }\r
  return EVENTFLOW_NUMERIC_LIMITS.MOBILE_NUMBER.ERROR;\r
}\r
\r
// Global browser attachment for legacy runtimes and test runners\r
if (typeof window !== 'undefined') {\r
  window.EventFlowValidation = {\r
    EVENTFLOW_NUMERIC_LIMITS,\r
    validateEventBudget,\r
    validateTicketPrice,\r
    validateCapacity,\r
    validateTicketQuantity,\r
    validateYearsOfExperience,\r
    validateDiscount,\r
    validatePinCode,\r
    validateIndianMobile,\r
  };\r
}\r
if (typeof globalThis !== 'undefined') {\r
  globalThis.EventFlowValidation = {\r
    EVENTFLOW_NUMERIC_LIMITS,\r
    validateEventBudget,\r
    validateTicketPrice,\r
    validateCapacity,\r
    validateTicketQuantity,\r
    validateYearsOfExperience,\r
    validateDiscount,\r
    validatePinCode,\r
    validateIndianMobile,\r
  };\r
}\r
`,y=`// Shared by creation forms and their API-backed handlers. Calendar dates use India time.
(() => {
  function minimumEventDate(now = new Date()) {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).formatToParts(now);
    const value = type => Number(parts.find(part => part.type === type).value);
    const minimum = new Date(Date.UTC(value('year'), value('month') - 1, value('day')));
    minimum.setUTCDate(minimum.getUTCDate() + 7);
    return minimum.toISOString().slice(0, 10);
  }

  function validateEventLeadTime(date, now = new Date()) {
    const parsed = new Date(\`\${date}T00:00:00.000Z\`);
    if (
      !/^\\d{4}-\\d{2}-\\d{2}$/.test(date) ||
      Number.isNaN(parsed.getTime()) ||
      parsed.toISOString().slice(0, 10) !== date
    )
      return 'Enter a valid event date';
    const minimum = minimumEventDate(now);
    return date < minimum
      ? \`Event date must be at least 7 days from today (\${minimum} or later).\`
      : '';
  }

  globalThis.EventFlowEventDates = { minimumEventDate, validateEventLeadTime };
})();
`,h=`(() => {\r
  const storageKey = 'eventflow-theme';\r
  const root = document.documentElement;\r
\r
  function setTheme(theme) {\r
    root.dataset.theme = theme;\r
  }\r
\r
  try {\r
    const savedTheme = localStorage.getItem(storageKey);\r
    if (savedTheme === 'light' || savedTheme === 'dark') {\r
      setTheme(savedTheme);\r
    }\r
  } catch (error) {\r
    console.warn('EventFlow could not read the saved color theme.', error);\r
  }\r
\r
  function addThemeToggle() {\r
    if (!['/', '/landing'].includes(window.location.pathname)) return;\r
\r
    const button = document.createElement('button');\r
    const isLight = root.dataset.theme !== 'dark';\r
    button.className = 'theme-toggle';\r
    button.type = 'button';\r
    button.setAttribute('aria-pressed', String(isLight));\r
    button.setAttribute('aria-label', \`Switch to \${isLight ? 'dark' : 'light'} mode\`);\r
    button.title = \`Switch to \${isLight ? 'dark' : 'light'} mode\`;\r
    button.innerHTML = \`\r
      <svg class="theme-icon-dark" viewBox="0 0 24 24" aria-hidden="true">\r
        <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z"></path>\r
      </svg>\r
      <svg class="theme-icon-light" viewBox="0 0 24 24" aria-hidden="true">\r
        <circle cx="12" cy="12" r="4"></circle>\r
        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"></path>\r
      </svg>\`;\r
    button.addEventListener('click', () => {\r
      const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';\r
      setTheme(theme);\r
      const light = theme === 'light';\r
      button.setAttribute('aria-pressed', String(light));\r
      button.setAttribute('aria-label', \`Switch to \${light ? 'dark' : 'light'} mode\`);\r
      button.title = \`Switch to \${light ? 'dark' : 'light'} mode\`;\r
\r
      try {\r
        localStorage.setItem(storageKey, theme);\r
      } catch (error) {\r
        console.warn('EventFlow could not save the selected color theme.', error);\r
      }\r
    });\r
\r
    document.body.prepend(button);\r
\r
    const app = document.getElementById('app');\r
    const dashboardControls = app?.querySelector('.topbar-right');\r
    if (app && dashboardControls) {\r
      const placeThemeToggle = () => {\r
        const container = app.style.display === 'block' ? dashboardControls : document.body;\r
        if (button.parentElement !== container) container.prepend(button);\r
      };\r
      const observer = new MutationObserver(placeThemeToggle);\r
      observer.observe(app, { attributes: true, attributeFilter: ['style'] });\r
      placeThemeToggle();\r
    }\r
  }\r
\r
  function addPasswordToggle(input) {\r
    if (input.type !== 'password' || input.closest('.password-field')) return;\r
\r
    const wrapper = document.createElement('div');\r
    wrapper.className = 'password-field';\r
    input.parentNode.insertBefore(wrapper, input);\r
    wrapper.appendChild(input);\r
\r
    const button = document.createElement('button');\r
    button.className = 'password-toggle';\r
    button.type = 'button';\r
    button.setAttribute('aria-label', 'Show password');\r
    button.setAttribute('aria-pressed', 'false');\r
    button.innerHTML = \`\r
      <svg class="eye-on" viewBox="0 0 24 24" aria-hidden="true">\r
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"></path>\r
        <circle cx="12" cy="12" r="3"></circle>\r
      </svg>\r
      <svg class="eye-off" viewBox="0 0 24 24" aria-hidden="true">\r
        <path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"></path>\r
        <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a14.8 14.8 0 0 1-3 3.8M6.2 6.2C3.5 8.1 2 12 2 12s3.6 7 10 7a10.8 10.8 0 0 0 3.1-.5"></path>\r
      </svg>\`;\r
    button.addEventListener('click', () => {\r
      const visible = input.type === 'password';\r
      input.type = visible ? 'text' : 'password';\r
      button.setAttribute('aria-pressed', String(visible));\r
      button.setAttribute('aria-label', \`\${visible ? 'Hide' : 'Show'} password\`);\r
    });\r
    wrapper.appendChild(button);\r
  }\r
\r
  function prepareFormField(field) {\r
    if (\r
      !(\r
        field instanceof HTMLInputElement ||\r
        field instanceof HTMLSelectElement ||\r
        field instanceof HTMLTextAreaElement\r
      )\r
    )\r
      return;\r
    if (\r
      field instanceof HTMLInputElement &&\r
      (field.type === 'search' ||\r
        /^([a-z0-9]+-)?q$/i.test(field.id) ||\r
        /search/i.test(\`\${field.id} \${field.placeholder}\`))\r
    )\r
      return;\r
\r
    const label =\r
      field.closest('.form-group')?.querySelector('label')?.textContent?.trim() ||\r
      field.labels?.[0]?.textContent?.trim() ||\r
      '';\r
    const details = \`\${label} \${field.id} \${field.name} \${field.placeholder}\`.toLowerCase();\r
\r
    if (\r
      label.includes('*') ||\r
      field.hasAttribute('required') ||\r
      ['l-email', 'l-pass'].includes(field.id)\r
    )\r
      field.required = true;\r
\r
    if (field instanceof HTMLSelectElement && field.options.length) {\r
      const first = field.options[0];\r
      if (!first.hasAttribute('value') && /^select\\b/i.test(first.textContent.trim()))\r
        first.value = '';\r
    }\r
\r
    if (field instanceof HTMLInputElement) {\r
      const isOtp =\r
        /\\botp\\b/i.test(details) || /otp/i.test(field.id) || /verification code/i.test(details);\r
      if (!isOtp && field.type === 'text' && /\\b(email|e-mail)\\b/.test(details))\r
        field.type = 'email';\r
      if (!isOtp && field.type === 'text' && /\\b(url|website|web site)\\b/.test(details))\r
        field.type = 'url';\r
      if (\r
        !isOtp &&\r
        field.type === 'text' &&\r
        /\\b(phone|mobile|telephone|emergency contact)\\b/.test(details)\r
      )\r
        field.type = 'tel';\r
      if (field.type === 'tel') {\r
        field.maxLength = 10;\r
        field.pattern = '[6-9]\\\\d{9}';\r
        field.inputMode = 'numeric';\r
      }\r
      if (\r
        field.type === 'text' &&\r
        /\\b(price|budget|amount|fee|cost|capacity|quantity|guests?|age|years? of experience|discount)\\b/.test(\r
          label.toLowerCase()\r
        )\r
      ) {\r
        field.type = 'number';\r
      }\r
      if (field.type === 'text' && /\\b(date|date of birth)\\b/.test(label.toLowerCase()))\r
        field.type = 'date';\r
      if (field.type === 'password' && field.minLength < 6) {\r
        field.minLength = 6;\r
      }\r
\r
      if (\r
        field instanceof HTMLInputElement &&\r
        /\\b(pin\\s*code|pincode|postal\\s*code)\\b/i.test(details)\r
      ) {\r
        field.maxLength = 6;\r
        field.pattern = '\\\\d{6}';\r
        field.inputMode = 'numeric';\r
      }\r
\r
      if (field.type === 'number') {\r
        const isCaptcha = /\\bcaptcha\\b/i.test(details);\r
        if (!isCaptcha) {\r
          if (/\\bbudget\\b/i.test(details)) {\r
            field.min = '1000';\r
            field.max = '10000000';\r
            field.step = 'any';\r
          } else if (\r
            /\\b(ticket\\s*price|price)\\b/i.test(details) &&\r
            !/\\b(budget|taxes|fee)\\b/i.test(details)\r
          ) {\r
            field.min = '0';\r
            field.max = '100000';\r
            field.step = 'any';\r
          } else if (/\\b(capacity|guests?)\\b/i.test(details)) {\r
            field.min = '1';\r
            field.max = '50000';\r
            field.step = '1';\r
          } else if (/\\bquantity\\b/i.test(details)) {\r
            field.min = '1';\r
            field.max = '50000';\r
            field.step = '1';\r
          } else if (/\\b(years?\\s+of\\s+experience|experience)\\b/i.test(details)) {\r
            field.min = '0';\r
            field.max = '60';\r
            field.step = '1';\r
          } else if (/\\bdiscount\\b/i.test(details)) {\r
            field.min = '0';\r
            field.max = '100';\r
            field.step = 'any';\r
          } else {\r
            const positiveCount = /\\b(capacity|quantity|guests?)\\b/.test(details);\r
            if (field.min === '' || Number(field.min) < 0) field.min = positiveCount ? '1' : '0';\r
            if (field.step === '')\r
              field.step = /\\b(years? of experience|age|capacity|quantity|guests?)\\b/.test(details)\r
                ? '1'\r
                : 'any';\r
          }\r
        }\r
      }\r
    }\r
\r
    const validate = () => {\r
      const isOtp =\r
        /\\botp\\b/i.test(details) || /otp/i.test(field.id) || /verification code/i.test(details);\r
      if (isOtp) {\r
        field.setCustomValidity('');\r
        return;\r
      }\r
      const value = field.value;\r
      let message = '';\r
      if (field.required && !value.trim()) {\r
        message = 'Please fill out this field.';\r
      } else if (field instanceof HTMLInputElement && field.type === 'tel' && value) {\r
        if (!/^[6-9]\\d{9}$/.test(value.trim())) {\r
          message = 'Enter a valid 10-digit Indian mobile number.';\r
        }\r
      } else if (\r
        field instanceof HTMLInputElement &&\r
        /\\b(pin\\s*code|pincode|postal\\s*code)\\b/i.test(details) &&\r
        value\r
      ) {\r
        if (!/^\\d{6}$/.test(value.trim())) {\r
          message = 'Enter a valid 6-digit Indian PIN code.';\r
        }\r
      } else if (\r
        field instanceof HTMLInputElement &&\r
        field.type === 'date' &&\r
        value &&\r
        Number.isNaN(Date.parse(value))\r
      ) {\r
        message = 'Enter a valid date.';\r
      } else if (\r
        field instanceof HTMLInputElement &&\r
        field.type === 'password' &&\r
        value.length < field.minLength\r
      ) {\r
        message = \`Password must be at least \${field.minLength} characters.\`;\r
      } else if (\r
        field instanceof HTMLInputElement &&\r
        /^(full name|your name|name|first name|last name|city|city\\s*\\/\\s*location)$/i.test(\r
          label.replace(/\\*/g, '').trim()\r
        ) &&\r
        value\r
      ) {\r
        if (!/^[\\p{L}\\p{M} .,'’()-]+$/u.test(value.trim())) {\r
          message = 'Use letters and normal name or city characters only.';\r
        }\r
      } else if (\r
        field instanceof HTMLInputElement &&\r
        field.type === 'email' &&\r
        value &&\r
        !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)\r
      ) {\r
        message = 'Enter a valid email address.';\r
      } else if (field instanceof HTMLInputElement && field.type === 'url' && value) {\r
        try {\r
          const parsedUrl = new URL(value);\r
          if (\r
            !['http:', 'https:'].includes(parsedUrl.protocol) ||\r
            !parsedUrl.hostname.includes('.')\r
          ) {\r
            message = 'Enter a valid URL.';\r
          }\r
        } catch (error) {\r
          message = 'Enter a valid URL.';\r
        }\r
      } else if (field instanceof HTMLInputElement && /\\b(card number)\\b/.test(details) && value) {\r
        const digits = value.replace(/\\D/g, '');\r
        if (!/^[0-9 ]+$/.test(value) || digits.length < 13 || digits.length > 19) {\r
          message = 'Enter a valid card number using 13 to 19 digits.';\r
        }\r
      } else if (field instanceof HTMLInputElement && /\\b(expiry)\\b/.test(label) && value) {\r
        const match = /^(0[1-9]|1[0-2])\\/(\\d{2})$/.exec(value);\r
        if (!match) {\r
          message = 'Enter an expiry date in MM/YY format.';\r
        } else {\r
          const expiry = new Date(2000 + Number(match[2]), Number(match[1]), 1);\r
          const currentMonth = new Date();\r
          currentMonth.setDate(1);\r
          currentMonth.setHours(0, 0, 0, 0);\r
          if (expiry <= currentMonth) message = 'Card expiry date must be in the future.';\r
        }\r
      } else if (\r
        field instanceof HTMLInputElement &&\r
        /\\botp\\b/.test(details) &&\r
        value &&\r
        !/^\\d{6}$/.test(value)\r
      ) {\r
        message = 'Enter the 6-digit verification code.';\r
      } else if (field instanceof HTMLInputElement && field.type === 'number' && value) {\r
        const isCaptcha = /\\bcaptcha\\b/i.test(details);\r
        if (!isCaptcha) {\r
          const num = Number(value);\r
          if (!Number.isFinite(num)) {\r
            message = 'Enter a valid number.';\r
          } else if (/\\bbudget\\b/i.test(details)) {\r
            if (num < 1000) message = 'Event budget must be at least ₹1,000.';\r
            else if (num > 10000000) message = 'Event budget cannot exceed ₹1,00,00,000.';\r
            else if (Math.abs(num * 100 - Math.round(num * 100)) > 0.000001)\r
              message = 'Event budget can have at most 2 decimal places.';\r
          } else if (\r
            /\\b(ticket\\s*price|price)\\b/i.test(details) &&\r
            !/\\b(budget|taxes|fee)\\b/i.test(details)\r
          ) {\r
            if (num < 0) message = 'Ticket price cannot be negative.';\r
            else if (num > 100000) message = 'Ticket price cannot exceed ₹1,00,000.';\r
            else if (Math.abs(num * 100 - Math.round(num * 100)) > 0.000001)\r
              message = 'Ticket price can have at most 2 decimal places.';\r
          } else if (/\\b(capacity|guests?)\\b/i.test(details)) {\r
            if (!Number.isInteger(num)) message = 'Event capacity must be a whole number.';\r
            else if (num < 1) message = 'Event capacity must be at least 1 guest.';\r
            else if (num > 50000) message = 'Maximum event capacity is 50,000.';\r
          } else if (/\\bquantity\\b/i.test(details)) {\r
            if (!Number.isInteger(num)) message = 'Ticket quantity must be a whole number.';\r
            else if (num < 1) message = 'Ticket quantity must be at least 1.';\r
            else if (num > 50000) message = 'Ticket quantity cannot exceed available capacity.';\r
          } else if (/\\b(years?\\s+of\\s+experience|experience)\\b/i.test(details)) {\r
            if (!Number.isInteger(num)) message = 'Years of experience must be a whole number.';\r
            else if (num < 0) message = 'Years of experience must be 0 or more.';\r
            else if (num > 60) message = 'Years of experience cannot exceed 60.';\r
          } else if (/\\bdiscount\\b/i.test(details)) {\r
            if (num < 0) message = 'Discount cannot be negative.';\r
            else if (num > 100) message = 'Discount cannot exceed 100%.';\r
            else if (Math.abs(num * 100 - Math.round(num * 100)) > 0.000001)\r
              message = 'Discount can have at most 2 decimal places.';\r
          } else {\r
            const positiveCount = /\\b(capacity|quantity|guests?)\\b/.test(details);\r
            if (num < (positiveCount ? 1 : 0)) {\r
              message = positiveCount\r
                ? 'Enter a number greater than 0.'\r
                : 'Enter a non-negative number.';\r
            }\r
          }\r
        }\r
      }\r
      field.setCustomValidity(message);\r
    };\r
\r
    if (!field.dataset.validationReady) {\r
      field.addEventListener('input', () => {\r
        validate();\r
      });\r
      field.addEventListener('change', validate);\r
      field.dataset.validationReady = 'true';\r
    }\r
    validate();\r
  }\r
\r
  function initializeFormValidation() {\r
    const prepareTree = node => {\r
      if (!(node instanceof Element)) return;\r
      if (node.matches('input, select, textarea')) prepareFormField(node);\r
      node.querySelectorAll('input, select, textarea').forEach(prepareFormField);\r
    };\r
\r
    prepareTree(document.body);\r
    const observer = new MutationObserver(records => {\r
      records.forEach(record => record.addedNodes.forEach(prepareTree));\r
    });\r
    observer.observe(document.body, { childList: true, subtree: true });\r
\r
    document.addEventListener(\r
      'click',\r
      event => {\r
        const button = event.target instanceof Element ? event.target.closest('button') : null;\r
        if (!button) return;\r
\r
        let fields;\r
        if (button.closest('#modal-foot')) {\r
          const handler = (button.getAttribute('onclick') || '').trim();\r
          if (\r
            button.textContent.trim().toLowerCase() === 'cancel' ||\r
            /^(?:window\\.)?closeModal\\s*\\(\\s*\\)\\s*;?$/.test(handler)\r
          )\r
            return;\r
          fields = [\r
            ...document.querySelectorAll(\r
              '#modal-body input, #modal-body select, #modal-body textarea'\r
            ),\r
          ];\r
        } else if (button.matches('[onclick*="doLogin"]')) {\r
          fields = [document.getElementById('l-email'), document.getElementById('l-pass')].filter(\r
            Boolean\r
          );\r
        } else {\r
          return;\r
        }\r
\r
        fields.forEach(prepareFormField);\r
        const invalid = fields.find(field => !field.checkValidity());\r
        if (invalid) {\r
          event.preventDefault();\r
          event.stopImmediatePropagation();\r
          invalid.reportValidity();\r
        }\r
      },\r
      true\r
    );\r
\r
    document.addEventListener(\r
      'submit',\r
      event => {\r
        const fields = [...event.target.querySelectorAll('input, select, textarea')];\r
        fields.forEach(prepareFormField);\r
        const invalid = fields.find(field => !field.checkValidity());\r
        if (invalid) {\r
          event.preventDefault();\r
          invalid.reportValidity();\r
        }\r
      },\r
      true\r
    );\r
\r
    document.addEventListener(\r
      'keydown',\r
      event => {\r
        if (event.key !== 'Enter' || !(event.target instanceof HTMLInputElement)) return;\r
        const id = event.target.id;\r
        if (!['l-email', 'l-pass'].includes(id)) return;\r
\r
        const fields = [\r
          document.getElementById('l-email'),\r
          document.getElementById('l-pass'),\r
        ].filter(Boolean);\r
        fields.forEach(prepareFormField);\r
        const invalid = fields.find(field => !field.checkValidity());\r
        if (invalid) {\r
          event.preventDefault();\r
          event.stopImmediatePropagation();\r
          invalid.reportValidity();\r
        }\r
      },\r
      true\r
    );\r
  }\r
\r
  function initializePasswordToggles() {\r
    const prepareTree = node => {\r
      if (!(node instanceof Element)) return;\r
      if (node.matches('input[type="password"]')) addPasswordToggle(node);\r
      node.querySelectorAll('input[type="password"]').forEach(addPasswordToggle);\r
    };\r
    prepareTree(document.body);\r
\r
    const observer = new MutationObserver(records => {\r
      records.forEach(record => record.addedNodes.forEach(prepareTree));\r
    });\r
    observer.observe(document.body, { childList: true, subtree: true });\r
  }\r
\r
  if (document.readyState === 'loading') {\r
    document.addEventListener(\r
      'DOMContentLoaded',\r
      () => {\r
        addThemeToggle();\r
        initializePasswordToggles();\r
        initializeFormValidation();\r
      },\r
      { once: true }\r
    );\r
  } else {\r
    addThemeToggle();\r
    initializePasswordToggles();\r
    initializeFormValidation();\r
  }\r
})();\r
`,x=`(function () {\r
  'use strict';\r
\r
  let session = null;\r
  const get = id => document.getElementById(id);\r
\r
  function setStatus(message) {\r
    const status = get('ticket-scan-status');\r
    if (status) {\r
      status.textContent = message;\r
      status.hidden = !message;\r
    }\r
  }\r
\r
  function stopTicketScan(message = '') {\r
    const previous = session;\r
    session = null;\r
    if (previous) {\r
      cancelAnimationFrame(previous.frame);\r
      previous.stream?.getTracks().forEach(track => track.stop());\r
      previous.video.srcObject = null;\r
    }\r
    const preview = get('ticket-camera');\r
    const start = get('ticket-scan-start');\r
    const stop = get('ticket-scan-stop');\r
    if (preview) preview.hidden = true;\r
    if (start) start.hidden = false;\r
    if (stop) stop.hidden = true;\r
    setStatus(message);\r
  }\r
\r
  async function startTicketScan() {\r
    if (session) return;\r
    const preview = get('ticket-camera');\r
    const video = get('ticket-camera-video');\r
    const input = get('qr-input');\r
    if (!preview || !video || !input) return;\r
    if (!navigator.mediaDevices?.getUserMedia) {\r
      setStatus('Open this page on localhost or HTTPS to use the camera.');\r
      return;\r
    }\r
    if (typeof window.jsQR !== 'function') {\r
      setStatus('Scanner unavailable. Enter the ticket ID below.');\r
      return;\r
    }\r
\r
    const current = { video, input, stream: null, frame: 0, lastScan: 0 };\r
    session = current;\r
    preview.hidden = false;\r
    get('ticket-scan-start').hidden = true;\r
    get('ticket-scan-stop').hidden = false;\r
    setStatus('Allow camera access to scan a ticket.');\r
\r
    try {\r
      const stream = await navigator.mediaDevices.getUserMedia({\r
        audio: false,\r
        video: { facingMode: { ideal: 'environment' } },\r
      });\r
      if (session !== current || !video.isConnected) {\r
        stream.getTracks().forEach(track => track.stop());\r
        return;\r
      }\r
      current.stream = stream;\r
      stream.getVideoTracks().forEach(track =>\r
        track.addEventListener('ended', () => {\r
          if (session === current) stopTicketScan('Camera stopped.');\r
        })\r
      );\r
      video.srcObject = stream;\r
      await video.play();\r
      if (session !== current) return;\r
      setStatus('Point the camera at the ticket QR code.');\r
\r
      const canvas = document.createElement('canvas');\r
      const context = canvas.getContext('2d', { willReadFrequently: true });\r
      if (!context) throw new Error('Camera preview unavailable');\r
\r
      function scanFrame(timestamp) {\r
        if (session !== current) return;\r
        if (!video.isConnected || get('qr-input') !== input) {\r
          stopTicketScan();\r
          return;\r
        }\r
        if (video.readyState >= 2 && video.videoWidth && timestamp - current.lastScan >= 150) {\r
          current.lastScan = timestamp;\r
          canvas.width = Math.min(video.videoWidth, 640);\r
          canvas.height = Math.round((video.videoHeight * canvas.width) / video.videoWidth);\r
          try {\r
            context.drawImage(video, 0, 0, canvas.width, canvas.height);\r
            const pixels = context.getImageData(0, 0, canvas.width, canvas.height);\r
            const result = window.jsQR(pixels.data, pixels.width, pixels.height);\r
            if (result?.data.trim()) {\r
              input.value = result.data.trim();\r
              stopTicketScan('Ticket scanned. Press Verify.');\r
              window.handleQRInput(input.value);\r
              input.focus();\r
              return;\r
            }\r
          } catch (error) {\r
            stopTicketScan('Could not read the camera. Enter the ticket ID below.');\r
            return;\r
          }\r
        }\r
        current.frame = requestAnimationFrame(scanFrame);\r
      }\r
      current.frame = requestAnimationFrame(scanFrame);\r
    } catch (error) {\r
      if (session !== current) return;\r
      const message =\r
        error.name === 'NotAllowedError'\r
          ? 'Camera access denied. Allow access or enter a ticket ID.'\r
          : error.name === 'NotFoundError'\r
          ? 'No camera found. Enter the ticket ID below.'\r
          : 'Camera unavailable. Enter the ticket ID below.';\r
      stopTicketScan(message);\r
    }\r
  }\r
\r
  function renderTicketQRCode(value) {\r
    if (!value || !window.EventFlowQR) return '';\r
    const { modules } = window.EventFlowQR.create(String(value), { errorCorrectionLevel: 'M' });\r
    const size = modules.size;\r
    const viewSize = size + 8;\r
    let path = '';\r
    for (let y = 0; y < size; y++) {\r
      for (let x = 0; x < size; x++) {\r
        if (modules.get(y, x)) path += \`M\${x + 4} \${y + 4}h1v1h-1z\`;\r
      }\r
    }\r
    return \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 \${viewSize} \${viewSize}" role="img" aria-label="Ticket QR code" shape-rendering="crispEdges"><rect width="\${viewSize}" height="\${viewSize}" fill="#fff"/><path d="\${path}" fill="#000"/></svg>\`;\r
  }\r
\r
  window.startTicketScan = startTicketScan;\r
  window.stopTicketScan = stopTicketScan;\r
  window.renderTicketQRCode = renderTicketQRCode;\r
\r
  new MutationObserver(() => {\r
    if (session && (!session.video.isConnected || get('qr-input') !== session.input))\r
      stopTicketScan();\r
  }).observe(document.body, { childList: true, subtree: true });\r
  const app = get('app');\r
  if (app)\r
    new MutationObserver(() => {\r
      if (session && app.style.display === 'none') stopTicketScan();\r
    }).observe(app, { attributes: true, attributeFilter: ['style'] });\r
  document.addEventListener('visibilitychange', () => {\r
    if (document.hidden && session) stopTicketScan();\r
  });\r
  window.addEventListener('pagehide', () => stopTicketScan());\r
})();\r
`,w=`(() => {
  const API_BASE_URL = 'http://localhost:3001/api';
  const SUPPORT_CONCERNS = {
    'Account Related Problems': [
      'Unable to log in',
      'Change password not working',
      'Forgot password / password reset failed',
      'Username not changing',
      'Email address not updating',
      'Phone number not updating',
      'Account verification failed',
      'Profile details not saving',
      'Account locked or suspended',
      'Unable to access my account',
    ],
    'Payment Issues': [
      'Payment is not working',
      'Payment completed but showing failed',
      'Money deducted but ticket not generated',
      'Payment failed but amount deducted',
      'Refund not received',
      'Refund amount is incorrect',
      'Duplicate payment / charged twice',
      'Payment method not accepted',
      'Invoice or receipt not generated',
      'Unable to download payment receipt',
    ],
    'Ticket & Registration Issues': [
      'Ticket not received after registration',
      'Ticket cancellation not working',
      'Unable to register for an event',
      'QR code not generated',
      'QR code not scanning',
      'Ticket details are incorrect',
      'Unable to download ticket',
      'Registration confirmation not received',
      'Ticket showing invalid',
      'Unable to transfer ticket',
    ],
    'Event Related Issues': [
      'Event details are incorrect',
      'Event date or time changed',
      'Event location is incorrect',
      'Event cancelled but no notification received',
      'Unable to find a registered event',
      'Event not appearing in my dashboard',
      'Unable to contact event organizer',
      'Event access or entry issue',
    ],
    'Account Deletion & Privacy': [
      'Request permanent account deletion',
      'Account deletion not working',
      'Cancel an account deletion request',
      'Request a copy of my personal data',
      'Request correction of personal data',
      'Privacy or data security concern',
      'Remove saved personal information',
    ],
    'Notifications & Communication': [
      'Not receiving email notifications',
      'Not receiving SMS notifications',
      'Event reminder not received',
      'Payment confirmation not received',
      'Receiving duplicate notifications',
      'Unable to change notification preferences',
      'Important updates not showing',
    ],
    'Website & Technical Problems': [
      'Website not loading',
      'Page showing an error',
      'Button not working',
      'Dashboard not displaying correctly',
      'Unable to upload a file',
      'Application running slowly',
      'Session keeps expiring',
      'Mobile layout not working',
      'Other technical issue',
    ],
    'Organizer & Client Support': [
      'Unable to create an event',
      'Unable to edit event details',
      'Event publishing failed',
      'Unable to manage registrations',
      'Event approval pending',
      'Event capacity not updating',
      'Unable to view analytics',
      'Unable to download event reports',
      'Event revenue not showing correctly',
    ],
    'Other Issues': [
      'My issue is not listed',
      'General inquiry',
      'Feedback or suggestion',
      'Report a bug',
      'Report suspicious activity',
      'Other support request',
    ],
  };

  const GENERAL_CATEGORIES = [
    'Account Related Problems',
    'Payment Issues',
    'Ticket & Registration Issues',
    'Event Related Issues',
    'Account Deletion & Privacy',
    'Notifications & Communication',
    'Website & Technical Problems',
    'Other Issues',
  ];

  function escapeHtml(value) {
    return String(value ?? '').replace(
      /[&<>"']/g,
      character =>
        ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
        }[character])
    );
  }

  function allowedCategories(user) {
    const role = String(user?.role || user?.userRole || '')
      .toLowerCase()
      .replace(/-/g, '_');
    if (['superuser', 'super_admin', 'admin'].includes(role)) {
      return Object.keys(SUPPORT_CONCERNS);
    }
    if (['organizer', 'event_organizer', 'client'].includes(role)) {
      return [...GENERAL_CATEGORIES.slice(0, -1), 'Organizer & Client Support', 'Other Issues'];
    }
    return GENERAL_CATEGORIES;
  }

  async function request(endpoint, user, options = {}) {
    const headers = {
      ...(user?.token ? { Authorization: \`Bearer \${user.token}\` } : {}),
      ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      ...(options.headers || {}),
    };
    const response = await (globalThis.window?.EventFlowFetch || fetch)(\`\${API_BASE_URL}\${endpoint}\`, { ...options, headers });
    if (response.ok && options.method && options.method !== 'GET')
      window.EventFlowData?.invalidate();

    const contentType = response.headers.get('content-type') || '';
    const data = contentType.includes('application/json')
      ? await response.json()
      : await response.text();
    if (!response.ok) {
      const message = Array.isArray(data?.message)
        ? data.message.join(', ')
        : data?.message || \`Request failed (\${response.status})\`;
      throw new Error(message);
    }
    return data;
  }

  function canManageSupport(user) {
    const normalize = value =>
      String(value || '')
        .trim()
        .toLowerCase()
        .replace(/[\\s-]+/g, '_');
    const role = normalize(user?.role || user?.userRole);
    const type = normalize(user?.employeeType);
    return (
      ['superuser', 'super_admin', 'admin'].includes(role) ||
      (role === 'employee' &&
        ['support_executive', 'registration_verification', 'event_operations'].includes(type))
    );
  }

  function statusLabel(status) {
    return (
      {
        open: 'Open',
        in_progress: 'In progress',
        resolved: 'Resolved',
      }[status] || status
    );
  }

  function ticketDate(value, includeTime = false) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '—';
    return date.toLocaleString(
      undefined,
      includeTime ? { dateStyle: 'medium', timeStyle: 'short' } : { dateStyle: 'medium' }
    );
  }

  function ticketTable(title, tickets, isSupportAgent) {
    const rows = tickets.length
      ? tickets
          .map(
            ticket => \`
      <tr>
        <td><strong>\${escapeHtml(ticket.concern)}</strong><small>\${escapeHtml(
              ticket.ticketId
            )}</small>\${
              ticket.eventTitle ? \`<small>Event: \${escapeHtml(ticket.eventTitle)}</small>\` : ''
            }\${
              isSupportAgent
                ? \`<small>\${escapeHtml(ticket.requesterName)} · \${escapeHtml(
                    ticket.requesterEmail || ''
                  )}</small>\`
                : ''
            }</td>
        <td>\${escapeHtml(ticket.requestType)}</td>
        <td><span class="support-status support-status-\${escapeHtml(ticket.status)}">\${escapeHtml(
              statusLabel(ticket.status)
            )}</span></td>
        <td>\${escapeHtml(
          ticket.updatedLabel || ticketDate(ticket.updatedAt || ticket.createdAt, true)
        )}</td>
        <td><button class="btn btn-ghost btn-sm" type="button" data-ticket-view="\${escapeHtml(
          ticket.ticketId
        )}">\${isSupportAgent ? 'Review &amp; Respond' : 'View'}</button></td>
      </tr>\`
          )
          .join('')
      : '<tr><td class="support-table-empty" colspan="5">No support requests yet.</td></tr>';

    return \`
      <section class="card support-ticket-section">
        <div class="support-section-heading"><h2>\${escapeHtml(title)}</h2><span>\${
      tickets.length
    }</span></div>
        <div class="support-table-wrap"><table class="support-ticket-table">
          <thead><tr><th>Request</th><th>Category</th><th>Status</th><th>Updated</th><th></th></tr></thead>
          <tbody>\${rows}</tbody>
        </table></div>
      </section>\`;
  }

  function ticketDialog(ticket, user, isSupportAgent) {
    const attachments = (ticket.attachments || [])
      .map(
        attachment => \`
      <button class="support-file-link" type="button" data-support-download="\${escapeHtml(
        attachment.attachmentId
      )}">
        \${escapeHtml(attachment.originalName)}
      </button>\`
      )
      .join('');
    const messages = [
      { sender: 'requester', message: ticket.description, createdAt: ticket.createdAt },
      ...((ticket.messages || []).length
        ? ticket.messages
        : ticket.response
        ? [
            {
              sender: 'support',
              message: ticket.response,
              createdAt: ticket.updatedAt || ticket.createdAt,
            },
          ]
        : []),
    ];
    const conversation = messages
      .map(message => {
        const fromSupport = message.sender === 'support';
        const name = fromSupport
          ? message.senderName
            ? 'Support - ' + message.senderName
            : 'Support'
          : isSupportAgent
          ? ticket.requesterName || 'Requester'
          : user?.name || 'You';
        return \`
        <article class="support-message \${
          fromSupport ? 'support-message-agent' : 'support-message-requester'
        }">
          <div class="support-message-meta"><span class="support-message-avatar">\${escapeHtml(
            name.slice(0, 1).toUpperCase()
          )}</span><strong>\${escapeHtml(name)}</strong><time>\${escapeHtml(
          ticketDate(message.createdAt, true)
        )}</time></div>
          <p>\${escapeHtml(message.message)}</p>
          \${
            !fromSupport && message.message === ticket.description && attachments
              ? \`<div class="support-attachments">\${attachments}</div>\`
              : ''
          }
        </article>\`;
      })
      .join('');
    const actions = isSupportAgent
      ? \`
      <label class="support-reply-editor"><span>Reply to requester</span><textarea class="form-control" rows="3" maxlength="2000" data-support-response="\${escapeHtml(
        ticket.ticketId
      )}" placeholder="e.g. Your issue has been resolved. Please try again and let us know if you still need help."></textarea></label>
      <label class="support-status-editor" for="support-ticket-status"><span>Update status</span>
        <select class="form-control" id="support-ticket-status" data-support-status-select>
          <option value="open" \${ticket.status === 'open' ? 'selected' : ''}>Open</option>
          <option value="in_progress" \${
            ticket.status === 'in_progress' ? 'selected' : ''
          }>In progress</option>
          <option value="resolved" \${
            ticket.status === 'resolved' ? 'selected' : ''
          }>Resolved</option>
        </select>
      </label>
      <p class="support-feedback" data-status-feedback role="status" aria-live="polite"></p>
      <div class="support-ticket-actions"><button class="btn btn-primary" type="button" data-support-status-update data-ticket-id="\${escapeHtml(
        ticket.ticketId
      )}">Send Reply &amp; Update Status</button></div>\`
      : \`
      <form class="support-follow-up" data-follow-up-form="\${escapeHtml(ticket.ticketId)}">
        <label for="support-follow-up-message">Follow-up message</label>
        <textarea class="form-control" id="support-follow-up-message" name="message" rows="4" maxlength="2000" required></textarea>
        <p class="support-feedback" data-follow-up-feedback role="status" aria-live="polite"></p>
        <div class="support-modal-footer"><button class="btn btn-ghost" type="button" data-modal-close>Cancel</button><button class="btn btn-primary" type="submit">Send Follow-up</button></div>
      </form>\`;

    return \`
      <div class="support-modal-heading"><h2 id="support-modal-title">Support Request \${escapeHtml(
        ticket.ticketId
      )}</h2><button class="support-modal-x" type="button" aria-label="Close" data-modal-close>×</button></div>
      <div class="support-modal-body">
        \${
          isSupportAgent
            ? \`<div class="support-modal-summary"><span>Requested by</span><strong>\${escapeHtml(
                ticket.requesterName || 'Requester'
              )}<small style="display:block;font-weight:400">\${escapeHtml(
                ticket.requesterEmail || ''
              )}</small></strong></div>\`
            : ''
        }
        <div class="support-modal-summary"><span>Subject</span><strong>\${escapeHtml(
          ticket.concern
        )}</strong></div>
        \${
          ticket.eventTitle
            ? \`<div class="support-modal-summary"><span>Event</span><strong>\${escapeHtml(
                ticket.eventTitle
              )}</strong></div>\`
            : ''
        }
        <div class="support-modal-summary"><span>Status</span><strong><span class="support-status support-status-\${escapeHtml(
          ticket.status
        )}">\${escapeHtml(statusLabel(ticket.status))}</span></strong></div>
        <div class="support-conversation">\${conversation}</div>
        \${actions}
      </div>\`;
  }

  async function render(user, backLabel = 'Back to Settings', options = {}) {
    const categories = allowedCategories(user);
    const isSupportAgent = options.management === true || canManageSupport(user);
    let tickets = [];
    let ticketLoadError = '';
    try {
      tickets = await request('/support/tickets', user);
    } catch (error) {
      ticketLoadError = error.message || 'Unable to load support tickets.';
      console.error('Failed to load Customer Support tickets.', error);
    }
    if (isSupportAgent && options.getAdditionalTickets) {
      const existingIds = new Set(tickets.map(ticket => String(ticket.ticketId)));
      tickets = [
        ...tickets,
        ...options
          .getAdditionalTickets()
          .filter(ticket => !existingIds.has(String(ticket.ticketId))),
      ];
    }

    return \`
      <div class="page-hd support-page-heading">
        <div class="page-hd-left">
          <div class="page-title">\${
            isSupportAgent ? 'Support &amp; Issue Management' : 'Customer Support'
          }</div>
          <div class="page-sub">\${
            isSupportAgent
              ? 'Review requester tickets, update their status, and send replies visible in My Tickets.'
              : 'Tell us what you need help with. Your ticket number, status, and support replies will be available here.'
          }</div>
        </div>
      </div>
      \${
        isSupportAgent
          ? \`<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px">
        <button type="button" class="btn btn-ghost" data-support-refresh>Refresh Requests</button>
        <span class="support-status support-status-open">Open: \${
          tickets.filter(ticket => ticket.status === 'open').length
        }</span>
        <span class="support-status support-status-in_progress">In progress: \${
          tickets.filter(ticket => ticket.status === 'in_progress').length
        }</span>
        <span class="support-status support-status-resolved">Resolved: \${
          tickets.filter(ticket => ticket.status === 'resolved').length
        }</span>
      </div>\`
          : ''
      }
      <div class="support-layout" style="\${
        isSupportAgent ? 'grid-template-columns:minmax(0,1fr)' : ''
      }">
        \${
          ticketLoadError
            ? \`<p class="support-feedback support-feedback-error" role="alert">Could not load support tickets: \${escapeHtml(
                ticketLoadError
              )}</p>\`
            : ''
        }
        <section class="card card-lg" style="\${isSupportAgent ? 'display:none' : ''}">
          <h2 class="support-card-title">Submit a support request</h2>
          <form id="support-request-form" novalidate>
            <div class="form-group">
              <label class="form-label" for="support-request-type">Request Type <span aria-hidden="true">*</span></label>
              <select class="form-control" id="support-request-type" name="requestType" required>
                <option value="">Select a request type</option>
                \${categories
                  .map(
                    category =>
                      \`<option value="\${escapeHtml(category)}">\${escapeHtml(category)}</option>\`
                  )
                  .join('')}
              </select>
            </div>
            <div class="form-group" id="support-concern-group" hidden>
              <label class="form-label" for="support-concern">Type of Concern <span aria-hidden="true">*</span></label>
              <select class="form-control" id="support-concern" name="concern" required disabled>
                <option value="">Select a concern</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="support-description">Description <span aria-hidden="true">*</span></label>
              <textarea class="form-control" id="support-description" name="description" rows="5" maxlength="5000" required></textarea>
            </div>
            <div class="form-group">
              <label class="form-label" for="support-attachments">Attachments <span class="small">(optional; up to 5 files, 5 MB each)</span></label>
              <input class="form-control" id="support-attachments" name="attachments" type="file" multiple accept=".jpg,.jpeg,.png,.webp,.pdf,.txt">
              <p class="support-hint">Accepted formats: JPG, PNG, WEBP, PDF, TXT.</p>
              <div id="support-selected-files" class="support-selected-files"></div>
            </div>
            <p class="support-feedback" id="support-feedback" role="status" aria-live="polite"></p>
            <button class="btn btn-primary" id="support-submit" type="submit">Submit Request</button>
          </form>
        </section>
        <div class="support-history" data-support-tickets="\${escapeHtml(
          JSON.stringify(tickets)
        )}">\${ticketTable(
      isSupportAgent ? options.queueTitle || 'Received Support Requests' : 'My Support Requests',
      tickets,
      isSupportAgent
    )}</div>
      </div>
      <div class="support-modal-overlay" id="support-ticket-modal" hidden>
        <section class="support-modal" role="dialog" aria-modal="true" aria-labelledby="support-modal-title">
          <div id="support-modal-content"></div>
        </section>
      </div>\`;
  }

  function bind(container, user, onBack, backLabel = 'Back to Settings', options = {}) {
    const history = container.querySelector('.support-history');
    const tickets = JSON.parse(history?.dataset.supportTickets || '[]');
    const modal = container.querySelector('#support-ticket-modal');
    const modalContent = container.querySelector('#support-modal-content');
    const isSupportAgent = options.management === true || canManageSupport(user);
    const closeModal = () => {
      if (modal) modal.hidden = true;
    };
    const openTicket = ticket => {
      if (!modal || !ticket) return;
      modalContent.innerHTML = ticketDialog(ticket, user, isSupportAgent);
      modal.hidden = false;
      bindAttachmentDownloads(modal, user);
      modalContent
        .querySelectorAll('[data-modal-close]')
        .forEach(button => button.addEventListener('click', closeModal));
      const followUpForm = modalContent.querySelector('[data-follow-up-form]');
      followUpForm?.addEventListener('submit', async event => {
        event.preventDefault();
        const feedback = followUpForm.querySelector('[data-follow-up-feedback]');
        const submit = followUpForm.querySelector('button[type="submit"]');
        const message = followUpForm.elements.message.value.trim();
        if (!message) {
          feedback.classList.add('is-error');
          feedback.textContent = 'Enter a follow-up message.';
          return;
        }
        submit.disabled = true;
        try {
          await request(
            \`/support/tickets/\${encodeURIComponent(ticket.ticketId)}/follow-ups\`,
            user,
            {
              method: 'POST',
              body: JSON.stringify({ message }),
            }
          );
          await refreshTicketView(ticket.ticketId);
        } catch (error) {
          submit.disabled = false;
          feedback.classList.add('is-error');
          feedback.textContent = error.message;
        }
      });
      modalContent.querySelectorAll('[data-support-status-update]').forEach(button => {
        button.addEventListener('click', async () => {
          const responseField = modalContent.querySelector(
            \`[data-support-response="\${ticket.ticketId}"]\`
          );
          const response = responseField?.value.trim() || '';
          const status = modalContent.querySelector('[data-support-status-select]')?.value;
          const feedback = modalContent.querySelector('[data-status-feedback]');
          if (status === 'resolved' && !response) {
            feedback.classList.add('is-error');
            feedback.textContent = 'Add a reply before resolving this request.';
            responseField?.focus();
            return;
          }
          button.disabled = true;
          try {
            const updated = ticket.localEventRequest
              ? await options.updateAdditionalTicket(ticket.ticketId, { status, response })
              : options.updateTicket
              ? await options.updateTicket(ticket.ticketId, { status, response })
              : await request(
                  \`/support/tickets/\${encodeURIComponent(ticket.ticketId)}/status\`,
                  user,
                  {
                    method: 'PATCH',
                    body: JSON.stringify({ status, response }),
                  }
                );
            const notice = response
              ? ticket.localEventRequest
                ? \`Reply saved. Status: \${statusLabel(status)}.\`
                : \`Reply sent to the requester. Status: \${statusLabel(status)}.\${
                    updated.emailNotificationSent ? ' An email notification was also sent.' : ''
                  }\`
              : \`Ticket status updated to \${statusLabel(status)}.\`;
            await refreshTicketView(ticket.ticketId, notice);
          } catch (error) {
            button.disabled = false;
            feedback.classList.add('is-error');
            feedback.textContent = error.message;
          }
        });
      });
    };
    if (!options.nativeView)
      container.querySelectorAll('[data-ticket-view]').forEach(button => {
        button.addEventListener('click', () =>
          openTicket(tickets.find(ticket => ticket.ticketId === button.dataset.ticketView))
        );
      });
    const onModalClick = event => {
      if (event.target === modal) closeModal();
    };
    const onModalKeyDown = event => {
      if (event.key === 'Escape') closeModal();
    };
    modal?.addEventListener('click', onModalClick);
    modal?.addEventListener('keydown', onModalKeyDown);

    const refreshTicketView = async (ticketId, notice = '') => {
      if (options.onRefresh) {
        const updatedTickets = await options.onRefresh();
        if (ticketId && updatedTickets)
          openTicket(updatedTickets.find(ticket => String(ticket.ticketId) === String(ticketId)));
        const feedback = modalContent?.querySelector('[data-status-feedback]');
        if (notice && feedback) {
          feedback.classList.add('is-success');
          feedback.textContent = notice;
        }
        return;
      }
      const page = container.querySelector('#page-content') || container;
      page.innerHTML = await render(user, backLabel, options);
      bind(page, user, onBack, backLabel, options);
      const refreshedButton = Array.from(page.querySelectorAll('[data-ticket-view]')).find(
        button => button.dataset.ticketView === ticketId
      );
      refreshedButton?.click();
      if (notice) {
        const feedback = page.querySelector('[data-status-feedback]');
        if (feedback) {
          feedback.classList.add('is-success');
          feedback.textContent = notice;
        }
      }
    };

    container.querySelector('[data-support-refresh]')?.addEventListener('click', async event => {
      const button = event.currentTarget;
      button.disabled = true;
      try {
        await refreshTicketView(null);
      } finally {
        button.disabled = false;
      }
    });

    const category = container.querySelector('#support-request-type');
    const concernGroup = container.querySelector('#support-concern-group');
    const concern = container.querySelector('#support-concern');
    category?.addEventListener('change', () => {
      concern.value = '';
      concern.replaceChildren(new Option('Select a concern', ''));
      const concerns = SUPPORT_CONCERNS[category.value] || [];
      concerns.forEach(value => concern.add(new Option(value, value)));
      const visible = Boolean(category.value);
      concernGroup.hidden = !visible;
      concern.disabled = !visible;
      concern.required = visible;
    });

    const files = container.querySelector('#support-attachments');
    files?.addEventListener('change', () => {
      const list = container.querySelector('#support-selected-files');
      list.textContent = Array.from(files.files || [])
        .map(file => file.name)
        .join(', ');
    });

    const form = container.querySelector('#support-request-form');
    form?.addEventListener('submit', async event => {
      event.preventDefault();
      const feedback = container.querySelector('#support-feedback');
      const submit = container.querySelector('#support-submit');
      feedback.className = 'support-feedback';
      feedback.textContent = '';
      if (!form.reportValidity()) {
        feedback.classList.add('is-error');
        feedback.textContent = 'Complete all required fields before submitting.';
        return;
      }

      const selectedFiles = Array.from(files.files || []);
      const allowedTypes = new Set([
        'image/jpeg',
        'image/png',
        'image/webp',
        'application/pdf',
        'text/plain',
      ]);
      const maxFileSize = 5 * 1024 * 1024;
      if (
        selectedFiles.length > 5 ||
        selectedFiles.some(file => !allowedTypes.has(file.type) || file.size > maxFileSize)
      ) {
        feedback.classList.add('is-error');
        feedback.textContent =
          'Choose up to 5 JPG, PNG, WEBP, PDF, or TXT files, each no larger than 5 MB.';
        return;
      }

      submit.disabled = true;
      submit.textContent = 'Submitting...';
      try {
        const attachmentIds = [];
        for (const file of selectedFiles) {
          const formData = new FormData();
          formData.append('file', file);
          const uploaded = await request('/support/attachments', user, {
            method: 'POST',
            body: formData,
          });
          attachmentIds.push(uploaded.attachmentId);
        }

        const created = await request('/support/tickets', user, {
          method: 'POST',
          body: JSON.stringify({
            requestType: category.value,
            concern: concern.value,
            description: container.querySelector('#support-description').value.trim(),
            attachmentIds,
          }),
        });

        feedback.classList.add('is-success');
        feedback.textContent = \`Request submitted. Your ticket number is \${created.ticketId}.\`;
        form.reset();
        concernGroup.hidden = true;
        concern.disabled = true;
        concern.required = false;
        concern.replaceChildren(new Option('Select a concern', ''));
        container.querySelector('#support-selected-files').textContent = '';
        const page = container.querySelector('#page-content') || container;
        page.innerHTML = await render(user, backLabel, options);
        bind(page, user, onBack, backLabel, options);
        const refreshedFeedback = page.querySelector('#support-feedback');
        refreshedFeedback.classList.add('is-success');
        refreshedFeedback.textContent = \`Request submitted. Your ticket number is \${created.ticketId}.\`;
      } catch (error) {
        feedback.classList.add('is-error');
        feedback.textContent = error.message;
      } finally {
        if (submit.isConnected) {
          submit.disabled = false;
          submit.textContent = 'Submit Request';
        }
      }
    });

    bindAttachmentDownloads(container, user);
    return {
      openTicket,
      closeModal,
      destroy() {
        modal?.removeEventListener('click', onModalClick);
        modal?.removeEventListener('keydown', onModalKeyDown);
      },
    };
  }

  function bindAttachmentDownloads(container, user) {
    container.querySelectorAll('[data-support-download]').forEach(button => {
      if (button.dataset.supportDownloadBound) return;
      button.dataset.supportDownloadBound = 'true';
      button.addEventListener('click', async () => {
        button.disabled = true;
        try {
          const response = await (globalThis.window?.EventFlowFetch || fetch)(
            \`\${API_BASE_URL}/support/attachments/\${encodeURIComponent(
              button.dataset.supportDownload
            )}\`,
            { headers: user?.token ? { Authorization: \`Bearer \${user.token}\` } : {} }
          );
          if (!response.ok) {
            const data = await response.json().catch(() => ({}));
            throw new Error(data.message || \`Download failed (\${response.status})\`);
          }
          const blob = await response.blob();
          const objectUrl = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = objectUrl;
          link.download = button.textContent.trim();
          link.click();
          URL.revokeObjectURL(objectUrl);
        } catch (error) {
          const feedback = container.querySelector('#support-feedback');
          if (feedback) {
            feedback.classList.add('is-error');
            feedback.textContent = error.message;
          } else {
            console.error('Failed to download the support attachment.', error);
          }
        } finally {
          button.disabled = false;
        }
      });
    });
  }

  function canRequestSupport(user) {
    if (!user) return false;
    const normalize = value =>
      String(value || '')
        .trim()
        .toUpperCase()
        .replace(/[\\s-]+/g, '_');
    const role = normalize(user.role || user.userRole);
    return ['ATTENDEE', 'CLIENT', 'ORGANIZER', 'EVENT_ORGANIZER'].includes(role);
  }

  function addSettingsEntry(container, onOpen, user) {
    const existing = container.querySelector('.support-settings-entry');
    if (!canRequestSupport(user)) {
      existing?.remove();
      return;
    }
    if (existing) return;
    const entry = document.createElement('div');
    entry.className = 'card support-settings-entry';
    const button = document.createElement('button');
    button.className = 'btn btn-ghost';
    button.type = 'button';
    button.innerHTML = \`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13v-2a8 8 0 0 1 16 0v2"/><path d="M4 12h3v7H6a2 2 0 0 1-2-2v-5Zm16 0h-3v7h1a2 2 0 0 0 2-2v-5ZM17 19a5 5 0 0 1-5 3"/></svg><span>Customer Support</span>\`;
    button.addEventListener('click', onOpen);
    entry.appendChild(button);
    container.appendChild(entry);
  }

  window.EventFlowSupport = { render, bind, addSettingsEntry, canRequestSupport, canManageSupport };
})();
`,E=`(() => {
  const base = 'http://localhost:3001/api/reports/support';
  const html = value =>
    String(value ?? '').replace(
      /[&<>"']/g,
      character =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character])
    );
  const statusLabel = value =>
    ({ draft: 'Draft', submitted: 'Submitted', reviewed: 'Reviewed' }[value] || value);
  const dateLabel = value =>
    value ? new Date(value).toLocaleDateString(undefined, { dateStyle: 'medium' }) : '—';

  async function request(user, route = '', options = {}) {
    if (!user?.token) throw new Error('Sign in again to access reports.');
    const response = await (globalThis.window?.EventFlowFetch || fetch)(base + route, {
      ...options,
      headers: {
        Authorization: \`Bearer \${user.token}\`,
        ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      },
    });
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(
        Array.isArray(error.message)
          ? error.message.join(', ')
          : error.message || 'Reports could not be loaded. Please try again.'
      );
    }
    if (route.endsWith('/file')) return response.blob();
    if (options.method && options.method !== 'GET') window.EventFlowData?.invalidate();
    const result = await response.json();
    return result.data ?? result;
  }

  const list = user => request(user);
  const get = (user, id) => request(user, \`/\${encodeURIComponent(id)}\`);
  const submit = (user, id) =>
    request(user, \`/\${encodeURIComponent(id)}/submit\`, { method: 'POST' });
  async function create(user, report, file) {
    const form = new FormData();
    Object.entries(report).forEach(([key, value]) => {
      if (value != null) form.append(key, value);
    });
    if (file) form.append('file', file);
    return request(user, '', { method: 'POST', body: form });
  }
  async function download(user, report) {
    const blob = await request(user, \`/\${encodeURIComponent(report.reportId)}/file\`);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = report.documentName || 'report.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function toWorkspaceReport(report) {
    return {
      id: report.reportId,
      backendReportId: report.reportId,
      authorUserId: report.submittedBy,
      title: report.title,
      category: report.category,
      scope: report.scope,
      period: report.period,
      summary: report.summary,
      status: statusLabel(report.status),
      author: report.author,
      fileName: report.documentName || 'No document attached',
      hasDocument: report.hasDocument,
      updated: dateLabel(report.updatedAt),
      reviewFeedback: report.reviewFeedback || '',
      sourceReference: report.sourceReference,
    };
  }

  async function showReport(user, reportId, { admin = false, onReviewed } = {}) {
    const report = await get(user, reportId);
    window.openModal(
      'Executive Report',
      \`
      <div class="submitted-report-detail">
        <div class="flex items-center justify-between gap-12"><h3>\${html(
          report.title
        )}</h3><span class="badge badge-\${
        report.status === 'reviewed' ? 'green' : 'purple'
      }">\${html(statusLabel(report.status))}</span></div>
        <p class="small muted mono">\${html(report.reportId)}</p>
        <dl class="submitted-report-facts">
          <div><dt>Submitted by</dt><dd>\${html(report.author)}<small>\${html(
        report.authorEmail
      )}</small></dd></div>
          <div><dt>Category</dt><dd>\${html(report.category)}</dd></div>
          <div><dt>Scope</dt><dd>\${html(report.scope)}</dd></div>
          <div><dt>Reporting period</dt><dd>\${html(report.period)}</dd></div>
          <div><dt>Submitted</dt><dd>\${html(dateLabel(report.submittedAt))}</dd></div>
        </dl>
        <h4>Summary &amp; Key Findings</h4><p class="submitted-report-summary">\${html(
          report.summary
        )}</p>
        \${
          report.hasDocument
            ? \`<button class="btn btn-ghost btn-sm" type="button" data-report-download>Download \${html(
                report.documentName
              )}</button>\`
            : '<p class="small muted">No document attached.</p>'
        }
        \${
          report.reviewFeedback
            ? \`<div class="submitted-report-feedback"><strong>Admin feedback</strong><p>\${html(
                report.reviewFeedback
              )}</p></div>\`
            : ''
        }
        \${
          admin
            ? \`<div class="form-group mt-16"><label class="form-label" for="admin-report-feedback">Review feedback (optional)</label><textarea class="form-control" id="admin-report-feedback" rows="3" maxlength="2000">\${html(
                report.reviewFeedback || ''
              )}</textarea></div><button class="btn btn-primary btn-sm" type="button" data-report-review>\${
                report.status === 'reviewed' ? 'Update Review' : 'Mark Reviewed'
              }</button>\`
            : ''
        }
        <p class="small" data-report-feedback role="status" aria-live="polite"></p>
      </div>\`,
      [{ lbl: 'Close', cls: 'btn-ghost', fn: 'closeModal()' }]
    );
    const content = document.getElementById('modal-body');
    const feedback = content.querySelector('[data-report-feedback]');
    content.querySelector('[data-report-download]')?.addEventListener('click', async event => {
      const button = event.currentTarget;
      button.disabled = true;
      try {
        await download(user, report);
      } catch (error) {
        feedback.textContent = error.message;
      } finally {
        button.disabled = false;
      }
    });
    content.querySelector('[data-report-review]')?.addEventListener('click', async event => {
      const button = event.currentTarget;
      button.disabled = true;
      try {
        await request(user, \`/\${encodeURIComponent(reportId)}/review\`, {
          method: 'PATCH',
          body: JSON.stringify({
            feedback: content.querySelector('#admin-report-feedback').value.trim(),
          }),
        });
        await onReviewed?.();
        await showReport(user, reportId, { admin, onReviewed });
        document.getElementById('modal-body').querySelector('[data-report-feedback]').textContent =
          'Review saved. The support executive can see your feedback.';
      } catch (error) {
        feedback.textContent = error.message;
        button.disabled = false;
      }
    });
  }

  function adminCards(reports) {
    return (
      reports
        .map(
          report => \`<article class="submitted-report-card">
      <div class="flex items-center justify-between gap-12"><span class="submitted-report-category">\${html(
        report.category
      )}</span><span class="badge badge-\${
            report.status === 'reviewed' ? 'green' : 'purple'
          }">\${html(statusLabel(report.status))}</span></div>
      <h3>\${html(report.title)}</h3>
      <p class="small muted">\${html(report.author)} · \${html(dateLabel(report.submittedAt))}</p>
      <p class="submitted-report-context">\${html(report.scope)} · \${html(report.period)}</p>
      <p class="submitted-report-excerpt">\${html(report.summary)}</p>
      <div class="submitted-report-card-footer"><span class="small muted">\${
        report.hasDocument ? html(report.documentName) : 'No document attached'
      }</span><button class="btn btn-ghost btn-sm" type="button" data-report-view="\${html(
            report.reportId
          )}">\${report.status === 'reviewed' ? 'View Report' : 'View &amp; Review'}</button></div>
    </article>\`
        )
        .join('') ||
      '<div class="card submitted-report-empty">No submitted reports match your filters.</div>'
    );
  }

  async function renderAdmin(container, user, state = { query: '', status: '' }) {
    container.innerHTML = \`<div class="page-hd"><div class="page-hd-left"><div class="page-title">Reports</div><div class="page-sub">Reports submitted by Support Executives, including findings and attached documents.</div></div><div class="page-hd-right"><button class="btn btn-ghost btn-sm" type="button" data-reports-refresh>Refresh Reports</button></div></div><p data-reports-notice class="small muted" role="status" aria-live="polite">Loading reports…</p><div data-reports-content></div>\`;
    const refresh = () => renderAdmin(container, user, state);
    container.querySelector('[data-reports-refresh]').addEventListener('click', refresh);
    try {
      const reports = await list(user);
      if (!container.querySelector('[data-reports-content]')) return;
      const notice = container.querySelector('[data-reports-notice]');
      notice.textContent = \`\${reports.length} submitted reports · \${
        reports.filter(report => report.status === 'submitted').length
      } awaiting review\`;
      container.querySelector(
        '[data-reports-content]'
      ).innerHTML = \`<div class="filter-row"><div class="search-box input-group"><input class="form-control" type="search" placeholder="Search by report, executive, category, or event…" aria-label="Search submitted reports" data-reports-search value="\${html(
        state.query
      )}"></div><select class="form-control filter-select" aria-label="Report status" data-reports-status><option value="">All Statuses</option><option value="submitted" \${
        state.status === 'submitted' ? 'selected' : ''
      }>Awaiting review</option><option value="reviewed" \${
        state.status === 'reviewed' ? 'selected' : ''
      }>Reviewed</option></select></div><div class="submitted-report-grid" data-report-grid></div>\`;
      const update = () => {
        state.query = container.querySelector('[data-reports-search]').value;
        state.status = container.querySelector('[data-reports-status]').value;
        const query = state.query.trim().toLowerCase();
        const filtered = reports.filter(
          report =>
            (!state.status || report.status === state.status) &&
            \`\${report.title} \${report.author} \${report.category} \${report.scope} \${report.period} \${
              report.summary
            } \${report.documentName || ''}\`
              .toLowerCase()
              .includes(query)
        );
        container.querySelector('[data-report-grid]').innerHTML = adminCards(filtered);
        container.querySelectorAll('[data-report-view]').forEach(button =>
          button.addEventListener('click', async () => {
            button.disabled = true;
            try {
              await showReport(user, button.dataset.reportView, {
                admin: true,
                onReviewed: refresh,
              });
            } catch (error) {
              notice.textContent = error.message;
            } finally {
              button.disabled = false;
            }
          })
        );
      };
      container.querySelector('[data-reports-search]').addEventListener('input', update);
      container.querySelector('[data-reports-status]').addEventListener('change', update);
      update();
    } catch (error) {
      const notice = container.querySelector('[data-reports-notice]');
      if (notice) notice.textContent = error.message;
    }
  }

  window.EventFlowSupportReports = {
    list,
    get,
    create,
    submit,
    download,
    toWorkspaceReport,
    showReport,
    renderAdmin,
  };
})();
`,S=`(() => {\r
  const normalizeEmail = value =>\r
    String(value || '')\r
      .trim()\r
      .toLowerCase();\r
\r
  function isEmailInUse(users, email, currentId) {\r
    const normalized = normalizeEmail(email);\r
    return users.some(\r
      user =>\r
        normalizeEmail(user.email) === normalized &&\r
        (currentId == null || String(user.id ?? user.userId) !== String(currentId))\r
    );\r
  }\r
\r
  const normalizeRole = value =>\r
    String(value || '')\r
      .trim()\r
      .toLowerCase()\r
      .replace(/[\\s-]+/g, '_');\r
\r
  const adminRoles = new Set(['superuser', 'super_admin', 'superadmin', 'super_user', 'admin']);\r
\r
  const customerRoles = new Set(['client', 'organizer', 'event_organizer', 'attendee']);\r
\r
  const employeeRoles = new Set([\r
    'employee',\r
    'support_executive',\r
    'finance_executive',\r
    'support_finance',\r
    'registration_verification',\r
    'event_operations',\r
  ]);\r
\r
  function isSupportExecutiveAccount(user) {\r
    if (!user) return false;\r
    const roles = [user.role, user.userRole].map(normalizeRole);\r
    if (roles.some(role => adminRoles.has(role))) return false;\r
    return (\r
      roles.includes('support_executive') ||\r
      ['support_executive', 'registration_verification', 'event_operations'].includes(\r
        normalizeRole(user.employeeType)\r
      ) ||\r
      ['arjun.events@eventflow.com', 'employee@example.com', 'employee@eventflow.com'].includes(\r
        normalizeEmail(user.email)\r
      )\r
    );\r
  }\r
\r
  function isPersonnelAccount(user) {\r
    return (\r
      !!user &&\r
      (!!user.employeeType ||\r
        [user.role, user.userRole].some(role => employeeRoles.has(normalizeRole(role))))\r
    );\r
  }\r
\r
  function visibleAccounts(actor, users) {\r
    const activeRoles = users.map(normalizeSavedAccount).filter(Boolean);\r
    return isSupportExecutiveAccount(actor)\r
      ? activeRoles.filter(user => !isPersonnelAccount(user))\r
      : activeRoles;\r
  }\r
\r
  // Upgrade saved department sessions and discard accounts belonging to the removed role.\r
  function normalizeSavedAccount(user) {\r
    if (!user) return null;\r
    const role = normalizeRole(user?.role || user?.userRole);\r
    const type = normalizeRole(user?.employeeType);\r
    if (!['staff', 'event_staff', 'employee'].includes(role)) return user;\r
    if (\r
      ![\r
        'support_executive',\r
        'registration_verification',\r
        'event_operations',\r
        'support_finance',\r
        'finance_executive',\r
      ].includes(type)\r
    )\r
      return null;\r
    return {\r
      ...user,\r
      role: 'employee',\r
      ...(user.userRole ? { userRole: 'employee' } : {}),\r
      ...(user.avatarImage\r
        ? { avatarImage: user.avatarImage.replace('/avatars/staff-', '/avatars/employee-') }\r
        : {}),\r
    };\r
  }\r
\r
  function canManageAccount(actor, target) {\r
    if (!actor || !target) return false;\r
    if (!isSupportExecutiveAccount(actor)) return true;\r
    const roles = [target.role, target.userRole].map(normalizeRole).filter(Boolean);\r
    return (\r
      !target.employeeType &&\r
      roles.some(role => customerRoles.has(role)) &&\r
      !roles.some(role => adminRoles.has(role) || employeeRoles.has(role))\r
    );\r
  }\r
\r
  function canApplyAccountUpdate(actor, target, updates) {\r
    if (!canManageAccount(actor, target)) return false;\r
    if (!isSupportExecutiveAccount(actor)) return true;\r
    if ('employeeType' in updates) return false;\r
    const currentRole = normalizeRole(target.role || target.userRole);\r
    const equivalentRole = role => (role === 'event_organizer' ? 'organizer' : role);\r
    return ['role', 'userRole'].every(\r
      key =>\r
        !(key in updates) ||\r
        equivalentRole(normalizeRole(updates[key])) === equivalentRole(currentRole)\r
    );\r
  }\r
\r
  function migrateLegacyDemoData(db) {\r
    db.accountSchemaVersion = 2;\r
    if ('currentUser' in db) db.currentUser = normalizeSavedAccount(db.currentUser);\r
    const removedIds = new Set(\r
      (db.users || [])\r
        .filter(user => !normalizeSavedAccount(user))\r
        .map(user => String(user.id || user.userId))\r
    );\r
    db.users = (db.users || [])\r
      .map(normalizeSavedAccount)\r
      .filter(Boolean)\r
      .filter(\r
        user =>\r
          !(\r
            user.id === 'usr-dup-001' &&\r
            normalizeEmail(user.email) === 'attendee@example.com' &&\r
            user.name === 'Priya Patel (Secondary)'\r
          )\r
      );\r
    for (const key of Object.keys(db)) {\r
      if (/staff|attendanceReports/i.test(key)) {\r
        delete db[key];\r
        continue;\r
      }\r
    }\r
    if (db.notifications)\r
      db.notifications = db.notifications.filter(\r
        item =>\r
          !removedIds.has(String(item.userId || item.toUserId)) &&\r
          !/staff|assignment/i.test(\`\${item.title || ''} \${item.type || ''}\`)\r
      );\r
    if (db.reports)\r
      db.reports = db.reports.filter(\r
        item =>\r
          !removedIds.has(String(item.submittedBy)) &&\r
          !/staff-report|rpt-staff-/i.test(\`\${item.id || ''} \${item.fileName || ''}\`)\r
      );\r
    for (const query of db.userQueries || []) {\r
      if (\r
        query.id === 'UQR-501' &&\r
        query.subject === 'Request to delete duplicate attendee account'\r
      ) {\r
        query.subject = 'Request permanent account deletion';\r
        query.detail =\r
          'User requested permanent deletion of their attendee account and associated personal data.';\r
      }\r
      if (\r
        query.id === 'UQR-505' &&\r
        query.subject === 'Duplicate ticket registration merge inquiry'\r
      ) {\r
        Object.assign(query, {\r
          userId: 'usr-attendee-001',\r
          userName: 'Priya Patel',\r
          subject: 'Ticket details correction request',\r
          detail: 'User requested a correction to the attendee name on their Tech Summit ticket.',\r
        });\r
      }\r
    }\r
    for (const report of [...(db.regReports || []), ...(db.supportExecReports || [])]) {\r
      if (\r
        (report.id === 'RVR-002' || report.sourceReference === 'legacy:RVR-002') &&\r
        !report.hasDocument &&\r
        report.title === 'Duplicate Account Detection & Resolution Summary — Q2 2026'\r
      ) {\r
        const previousTitle = report.title;\r
        report.title = 'Account Access & Verification Summary — Q2 2026';\r
        if (report.summary === previousTitle) report.summary = report.title;\r
        report.fileName = report.backendReportId\r
          ? 'No document attached'\r
          : 'Account_Access_Verification_Q2_2026.docx';\r
      }\r
    }\r
  }\r
\r
  window.EventFlowAccountPolicy = {\r
    normalizeEmail,\r
    isEmailInUse,\r
    migrateLegacyDemoData,\r
    normalizeSavedAccount,\r
    isSupportExecutiveAccount,\r
    isPersonnelAccount,\r
    visibleAccounts,\r
    canManageAccount,\r
    canApplyAccountUpdate,\r
  };\r
})();\r
`,R=`(() => {
  // State for multi-step organizer registration
  const defaultOrgState = () => ({
    step: 1,
    // Step 1: Account details
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    emailVerified: false,
    mobileVerified: false,
    verifiedEmail: '',
    verifiedMobile: '',
    emailDemoCode: '482910',
    mobileDemoCode: '739184',
    emailCodeInput: '',
    mobileCodeInput: '',
    emailVerifyPromptOpen: false,
    mobileVerifyPromptOpen: false,
    // Step 2: Organizer type & details
    organizerType: 'Registered Company / Event Agency',
    // or 'Independent Event Organizer'

    // Registered Company details
    companyDetails: {
      legalCompanyName: '',
      businessStructure: 'Private Limited Company',
      registrationNumber: '',
      gstin: '',
      address: '',
      city: '',
      state: '',
      pinCode: '',
      authorizedRepresentativeName: '',
      representativeDesignation: '',
      websiteUrl: '',
      registrationCertificateDoc: null,
      // { name, size, type, data }
      proofOfAuthorizationDoc: null,
    },
    // Independent Organizer details
    independentDetails: {
      professionalName: '',
      address: '',
      city: '',
      state: '',
      pinCode: '',
      yearsOfExperience: 0,
      areasOfSpecialization: [],
      // Corporate Events, Weddings, etc.
      portfolioDetails: '',
      portfolioUrl: '',
      supportingEvidenceDoc: null,
    },
    // Step 3
    declarationAccepted: false,
    lastSubmittedRef: null,
    isSubmitting: false,
    errors: {},
  });
  let _orgState = defaultOrgState();
  let _clientState;
  function renderContactVerification(s, client = false) {
    const api = 'window.EventFlowOrganizerRegistration';
    return \`
      <div style="background:var(--surface2,#1a1e29);border:1px solid var(--border,#2d3748);border-radius:8px;padding:14px 16px;margin:16px 0;">
        <div style="font-weight:700;font-size:14px;margin-bottom:10px;">Contact Verification Checks *</div>
        <p style="font-size:12px;color:var(--text2,#94a3b8);margin:0 0 12px;">Both Email and Mobile verification must be completed \${
          client ? 'to create your account' : 'to proceed to Step 2'
        }.</p>
        \${['email', 'mobile']
          .map(channel => {
            const label = channel === 'email' ? 'Email' : 'Mobile';
            const verified = s[\`\${channel}Verified\`];
            const prefix = client ? 'client-' : '';
            const trigger = client
              ? \`triggerClientVerification('\${channel}')\`
              : \`trigger\${label}Verify()\`;
            const confirm = client
              ? \`confirmClientVerification('\${channel}')\`
              : \`confirm\${label}Code()\`;
            const state = \`\${api}.\${client ? 'getClientState' : 'getState'}()\`;
            return \`
            <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;flex-wrap:wrap;gap:8px;">
              <div><span style="font-weight:600;font-size:13px;">\${label} Verification:</span>
                <span class="badge \${
                  verified ? 'badge-green' : 'badge-yellow'
                }" style="margin-left:8px;">\${
              verified ? \`✓ \${label} Verified\` : 'Pending Verification'
            }</span>
              </div>
              \${
                verified
                  ? '<span style="font-size:12px;color:var(--green,#10b981);">Verified</span>'
                  : \`<button type="button" class="btn btn-ghost btn-sm" id="btn-verify-\${prefix}\${channel}" onclick="\${api}.\${trigger}">Verify \${label}</button>\`
              }
            </div>
            \${
              s[\`\${channel}VerifyPromptOpen\`] && !verified
                ? \`
              <div id="\${prefix}\${channel}-verify-box" style="margin-top:10px;padding:10px;background:var(--surface,#121620);border-radius:6px;border:1px dashed var(--accent,#6366f1);">
                <div style="font-size:12px;color:var(--text2,#94a3b8);margin-bottom:6px;">\${
                  channel === 'email'
                    ? 'Email delivery is not configured in this demo environment. Your demo verification code is:'
                    : 'SMS service is simulated for this environment. Your mobile verification code is:'
                } <strong>\${escapeHtml(s[\`\${channel}DemoCode\`])}</strong></div>
                <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
                  <input type="text" inputmode="numeric" autocomplete="one-time-code" class="form-control" id="\${
                    client ? 'client' : 'org'
                  }-\${channel}-otp-input" aria-label="\${label} verification code" placeholder="Enter 6-digit code" style="max-width:180px;height:34px;font-size:13px;" value="\${escapeHtml(
                    s[\`\${channel}CodeInput\`]
                  )}" oninput="\${state}.\${channel}CodeInput=this.value">
                  <button type="button" class="btn btn-primary btn-sm" data-validation-scope="verification" onclick="\${api}.\${confirm}">Confirm</button>
                  <button type="button" class="btn btn-ghost btn-sm" onclick="\${api}.cancelContactVerification('\${channel}', \${client})">Cancel</button>
                </div>
                <span id="\${prefix}\${channel}-otp-err" role="alert" style="\${
                    s.errors[\`\${channel}Otp\`] ? 'display:block;' : 'display:none;'
                  }color:var(--red,#ef4444);font-size:12px;margin-top:4px;">\${escapeHtml(
                    s.errors[\`\${channel}Otp\`] || 'Invalid verification code. Please try again.'
                  )}</span>
              </div>\`
                : ''
            }
            \${
              s.errors[\`\${channel}Verified\`]
                ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;display:block;margin-top:4px;">\${escapeHtml(
                    s.errors[\`\${channel}Verified\`]
                  )}</span>\`
                : ''
            }\`;
          })
          .join('')}
      </div>\`;
  }
  function cancelContactVerification(channel, client = false) {
    if (client) syncClientFromDom();
    else syncStep1FromDom();
    const state = client ? _clientState : _orgState;
    state[\`\${channel}VerifyPromptOpen\`] = false;
    state[\`\${channel}CodeInput\`] = '';
    delete state.errors[\`\${channel}Otp\`];
    if (client) renderClientRegisterForm();
    else renderStep1Modal();
  }
  const SPECIALIZATION_OPTIONS = [
    'Corporate Events',
    'Weddings',
    'Concerts & Music',
    'College Events',
    'Conferences & Workshops',
    'Private Parties',
    'Festivals',
    'Exhibitions',
    'Sports Events',
    'Other',
  ];
  const BUSINESS_STRUCTURES = [
    'Private Limited Company',
    'Public Limited Company',
    'LLP',
    'Partnership Firm',
    'Sole Proprietorship',
    'Other',
  ];
  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
  function getG(id) {
    try {
      if (typeof g === 'function') return g(id);
    } catch (e) {}
    if (typeof window !== 'undefined' && typeof window.g === 'function') return window.g(id);
    if (typeof document !== 'undefined' && document.getElementById)
      return document.getElementById(id);
    return null;
  }
  function getV(id) {
    try {
      if (typeof v === 'function') return v(id);
    } catch (e) {}
    if (typeof window !== 'undefined' && typeof window.v === 'function') return window.v(id);
    const element = getG(id);
    return element ? (element.value != null ? String(element.value).trim() : '') : '';
  }
  function showAppToast(msg, type) {
    try {
      if (typeof toast === 'function') return toast(msg, type);
    } catch (e) {}
    if (typeof window !== 'undefined' && typeof window.toast === 'function')
      return window.toast(msg, type);
    if (typeof showToast === 'function') return showToast(msg, type);
  }
  function getBackendBase() {
    try {
      if (typeof window !== 'undefined' && window.location && window.location.origin) {
        if (window.location.origin.includes(':3000') || window.location.origin.includes(':5173')) {
          return 'http://localhost:3001';
        }
      }
    } catch (e) {}
    return '';
  }

  // ════════════════════════════════════════════════
  // 1. ROLE SELECTION MODAL
  // ════════════════════════════════════════════════

  function openRegisterModal() {
    const modalHtml = \`
      <div style="padding: 6px 0 12px;">
        <p style="color:var(--text2,#a0aec0);font-size:14px;margin-bottom:20px;text-align:center;">
          Select how you would like to register with EventFlow to get started.
        </p>

        <div style="display:flex;flex-direction:column;gap:14px;">
          <!-- Attendee Card -->
          <div id="role-select-attendee" onclick="window.EventFlowOrganizerRegistration.openAttendeeRegisterForm()"
               style="background:var(--surface2,#1f2430);border:1px solid var(--border,#2d3748);border-radius:10px;padding:16px 20px;cursor:pointer;transition:all 0.2s ease;display:flex;align-items:center;gap:16px;">
            <div style="font-size:32px;background:rgba(99,102,241,0.12);width:54px;height:54px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">🎟️</div>
            <div style="flex:1;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-weight:700;font-size:16px;color:var(--text,#f8fafc);">Attendee</span>
                <span class="badge badge-blue" style="font-size:11px;padding:2px 8px;">Explore &amp; Attend</span>
              </div>
              <div style="color:var(--text2,#94a3b8);font-size:13px;margin-top:4px;line-height:1.4;">
                Discover, register, and attend exciting events, workshops, concerts, and social meetups.
              </div>
            </div>
            <div style="color:var(--accent,#6366f1);font-size:18px;font-weight:700;">→</div>
          </div>

          <!-- Client Card -->
          <div id="role-select-client" onclick="window.EventFlowOrganizerRegistration.openClientRegisterForm()"
               style="background:var(--surface2,#1f2430);border:1px solid var(--border,#2d3748);border-radius:10px;padding:16px 20px;cursor:pointer;transition:all 0.2s ease;display:flex;align-items:center;gap:16px;">
            <div style="font-size:32px;background:rgba(234,179,8,0.12);width:54px;height:54px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">💼</div>
            <div style="flex:1;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-weight:700;font-size:16px;color:var(--text,#f8fafc);">Client</span>
                <span class="badge badge-yellow" style="font-size:11px;padding:2px 8px;">Host Events</span>
              </div>
              <div style="color:var(--text2,#94a3b8);font-size:13px;margin-top:4px;line-height:1.4;">
                Host events, hire professional organizers, review custom proposals, and manage event requirements.
              </div>
            </div>
            <div style="color:var(--accent,#6366f1);font-size:18px;font-weight:700;">→</div>
          </div>

          <!-- Organizer Card -->
          <div id="role-select-organizer" onclick="window.EventFlowOrganizerRegistration.openOrganizerRegisterStep(1)"
               style="background:var(--surface2,#1f2430);border:2px solid var(--accent,#6366f1);border-radius:10px;padding:16px 20px;cursor:pointer;transition:all 0.2s ease;display:flex;align-items:center;gap:16px;box-shadow:0 4px 14px rgba(99,102,241,0.15);">
            <div style="font-size:32px;background:rgba(168,85,247,0.12);width:54px;height:54px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">🎯</div>
            <div style="flex:1;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-weight:700;font-size:16px;color:var(--text,#f8fafc);">Organizer</span>
                <span class="badge badge-purple" style="font-size:11px;padding:2px 8px;">Verified Partner</span>
              </div>
              <div style="color:var(--text2,#94a3b8);font-size:13px;margin-top:4px;line-height:1.4;">
                Publish events, accept client event requests, create proposals, and grow your event management business.
              </div>
            </div>
            <div style="color:var(--accent,#6366f1);font-size:18px;font-weight:700;">→</div>
          </div>
        </div>

        <div style="margin-top:24px;text-align:center;padding-top:16px;border-top:1px solid var(--border,#2d3748);">
          <span style="font-size:13px;color:var(--text2,#a0aec0);">Already have an account?</span>
          <a href="#" onclick="event.preventDefault();closeModal();if(typeof showPage==='function'){showPage('login');}else{window.location.hash='#login';}" style="color:var(--accent,#6366f1);font-size:13px;font-weight:600;margin-left:6px;">Sign In</a>
        </div>
      </div>
    \`;
    if (typeof openModal === 'function') {
      openModal('Create New Account', modalHtml, [], false);
    }
  }

  // ════════════════════════════════════════════════
  // 2. ATTENDEE & CLIENT REGISTRATION FORMS
  // ════════════════════════════════════════════════

  function openAttendeeRegisterForm() {
    const captcha =
      typeof generateCaptcha === 'function'
        ? generateCaptcha()
        : {
            question: '7 + 5 = ?',
            answer: 12,
          };
    window._captchaAnswer = captcha.answer;
    const modalHtml = \`
      <div style="margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;">
        <button type="button" class="btn btn-ghost btn-sm" onclick="window.EventFlowOrganizerRegistration.openRegisterModal()">← Back to Role Selection</button>
        <span class="badge badge-blue">🎟️ Attendee Registration</span>
      </div>

      <div class="grid-2">
        <div class="form-group"><label class="form-label">Full Name *</label><input class="form-control" id="rg-name" placeholder="John Doe"></div>
        <div class="form-group"><label class="form-label">Email *</label><input class="form-control" id="rg-email" type="email" placeholder="you@example.com"></div>
      </div>
      <div class="grid-2">
        <div class="form-group"><label class="form-label">Password *</label><input class="form-control" id="rg-pass" type="password" placeholder="Min 6 characters"></div>
        <div class="form-group"><label class="form-label">Phone *</label><input class="form-control" id="rg-phone" type="tel" placeholder="+91 9876543200"></div>
      </div>
      <div class="grid-2">
        <div class="form-group"><label class="form-label">Date of Birth *</label><input class="form-control" id="rg-date-of-birth" type="date"></div>
        <div class="form-group"><label class="form-label">Gender *</label>
          <select class="form-control" id="rg-gender">
            <option value="">Select gender</option><option>Female</option><option>Male</option><option>Non-binary</option><option>Prefer not to say</option>
          </select>
        </div>
      </div>
      <div class="form-group"><label class="form-label">City / Location *</label><input class="form-control" id="rg-city" placeholder="City"></div>
      <div class="form-group"><label class="form-label">Interests / Event Preferences *</label><textarea class="form-control" id="rg-interests" placeholder="e.g. Music concerts, tech conferences, workshops"></textarea></div>

      <div class="form-group" style="margin-top:12px;">
        <label class="form-label">Security Check (CAPTCHA) *</label>
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
          <div style="background:var(--surface2,#1e2030);border:2px solid var(--accent,#7c6af7);border-radius:8px;padding:8px 16px;font-size:1.1rem;font-weight:700;letter-spacing:2px;color:var(--accent,#7c6af7);font-family:monospace;user-select:none;" id="rg-captcha-question">\${captcha.question}</div>
          <input class="form-control" id="rg-captcha" type="number" placeholder="Your answer" style="max-width:140px;" autocomplete="off">
        </div>
        <span class="form-error" id="rg-captcha-err" style="display:none;color:var(--red,#ef4444);font-size:12px;margin-top:4px;">Incorrect answer, please try again</span>
      </div>
    \`;
    openModal(
      'Attendee Registration',
      modalHtml,
      [
        {
          lbl: 'Create Account',
          cls: 'btn-primary',
          fn: 'window.EventFlowOrganizerRegistration.submitAttendeeForm()',
        },
      ],
      false
    );
  }
  async function savePublicAccount(user) {
    try {
      if (!window.EventFlowData?.registerAccount)
        throw new Error('Registration is unavailable. Please refresh and try again.');
      return await window.EventFlowData.registerAccount(user);
    } catch (error) {
      toast(error.message || 'Your account could not be created. Please try again.', 'error');
    }
  }
  async function submitAttendeeForm() {
    const name = v('rg-name');
    const email = v('rg-email');
    const pass = v('rg-pass');
    const phone = v('rg-phone');
    const dob = v('rg-date-of-birth');
    const gender = v('rg-gender');
    const city = v('rg-city');
    const interests = v('rg-interests');
    const captchaVal = v('rg-captcha');
    if (!name) {
      toast('Name is required', 'error');
      return;
    }
    if (!email || !email.includes('@')) {
      toast('Valid email is required', 'error');
      return;
    }
    if (!pass || pass.length < 6) {
      toast('Password must be at least 6 characters', 'error');
      return;
    }
    if (!phone) {
      toast('Phone number is required', 'error');
      return;
    }
    if (!dob) {
      toast('Date of birth is required', 'error');
      return;
    }
    if (!gender) {
      toast('Gender is required', 'error');
      return;
    }
    if (!city) {
      toast('City is required', 'error');
      return;
    }
    if (!interests) {
      toast('Interests are required', 'error');
      return;
    }
    if (!captchaVal || parseInt(captchaVal, 10) !== window._captchaAnswer) {
      const err = g('rg-captcha-err');
      if (err) err.style.display = 'block';
      toast('Please solve the CAPTCHA correctly', 'error');
      return;
    }
    return savePublicAccount({
      name,
      email,
      password: pass,
      role: 'attendee',
      phone,
      dateOfBirth: dob,
      gender,
      city,
      interests,
    });
  }
  function openClientRegisterForm() {
    const captcha =
      typeof generateCaptcha === 'function'
        ? generateCaptcha()
        : {
            question: '8 + 4 = ?',
            answer: 12,
          };
    window._captchaAnswer = captcha.answer;
    _clientState = {
      fullName: '',
      email: '',
      mobileNumber: '',
      password: '',
      organizationType: '',
      organizationName: '',
      address: '',
      captcha,
      captchaInput: '',
      emailVerified: false,
      mobileVerified: false,
      verifiedEmail: '',
      verifiedMobile: '',
      emailDemoCode: '482910',
      mobileDemoCode: '739184',
      emailCodeInput: '',
      mobileCodeInput: '',
      emailVerifyPromptOpen: false,
      mobileVerifyPromptOpen: false,
      errors: {},
    };
    renderClientRegisterForm();
  }
  function renderClientRegisterForm() {
    const s = _clientState;
    const modalHtml = \`
      <div style="margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;">
        <button type="button" class="btn btn-ghost btn-sm" onclick="window.EventFlowOrganizerRegistration.openRegisterModal()">← Back to Role Selection</button>
        <span class="badge badge-yellow">💼 Client Registration</span>
      </div>

      <div class="grid-2">
        <div class="form-group"><label class="form-label">Full Name *</label><input class="form-control" id="rg-client-name" placeholder="Michael Torres" value="\${escapeHtml(
          s.fullName
        )}"></div>
        <div class="form-group"><label class="form-label">Email *</label><input class="form-control" id="rg-client-email" type="email" placeholder="client@example.com" value="\${escapeHtml(
          s.email
        )}" oninput="window.EventFlowOrganizerRegistration.clientContactChanged('email')"></div>
      </div>
      <div class="grid-2">
        <div class="form-group"><label class="form-label">Password *</label><input class="form-control" id="rg-client-pass" type="password" placeholder="Min 6 characters" value="\${escapeHtml(
          s.password
        )}"></div>
        <div class="form-group"><label class="form-label">Phone *</label><input class="form-control" id="rg-client-phone" type="tel" placeholder="9876543200" value="\${escapeHtml(
          s.mobileNumber
        )}" oninput="window.EventFlowOrganizerRegistration.clientContactChanged('mobile')"></div>
      </div>
      <div class="form-group"><label class="form-label">Organization Type *</label>
        <select class="form-control" id="rg-organization-type" onchange="const show = this.value && this.value !== 'Self'; g('rg-client-orgname-wrap').style.display = show ? '' : 'none'; g('rg-organization-name').disabled = !show;">
          <option value="">Select organization type</option>\${[
            'Self',
            'Government',
            'Educational institution',
            'Other',
          ]
            .map(
              type => \`<option\${s.organizationType === type ? ' selected' : ''}>\${type}</option>\`
            )
            .join('')}
        </select>
      </div>
      <div class="form-group" id="rg-client-orgname-wrap" style="\${
        s.organizationType && s.organizationType !== 'Self' ? '' : 'display:none;'
      }">
        <label class="form-label">Organization / Company Name *</label>
        <input class="form-control" id="rg-organization-name" placeholder="Company or Institution name" value="\${escapeHtml(
          s.organizationName
        )}" \${!s.organizationType || s.organizationType === 'Self' ? 'disabled' : ''}>
      </div>
      <div class="form-group"><label class="form-label">Address *</label><textarea class="form-control" id="rg-client-address" placeholder="Your address">\${escapeHtml(
        s.address
      )}</textarea></div>

      <div id="client-contact-verification">\${renderContactVerification(s, true)}</div>

      <div class="form-group" style="margin-top:12px;">
        <label class="form-label">Security Check (CAPTCHA) *</label>
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
          <div style="background:var(--surface2,#1e2030);border:2px solid var(--accent,#7c6af7);border-radius:8px;padding:8px 16px;font-size:1.1rem;font-weight:700;letter-spacing:2px;color:var(--accent,#7c6af7);font-family:monospace;user-select:none;" id="rg-captcha-question">\${escapeHtml(
            s.captcha.question
          )}</div>
          <input class="form-control" id="rg-captcha" type="number" placeholder="Your answer" style="max-width:140px;" autocomplete="off" value="\${escapeHtml(
            s.captchaInput
          )}">
        </div>
        <span class="form-error" id="rg-captcha-err" style="display:none;color:var(--red,#ef4444);font-size:12px;margin-top:4px;">Incorrect answer, please try again</span>
      </div>
    \`;
    openModal(
      'Client Registration',
      modalHtml,
      [
        {
          lbl: 'Create Account',
          cls: 'btn-primary',
          fn: 'window.EventFlowOrganizerRegistration.submitClientForm()',
        },
      ],
      false
    );
  }
  function syncClientFromDom() {
    for (const [key, id] of Object.entries({
      fullName: 'rg-client-name',
      email: 'rg-client-email',
      mobileNumber: 'rg-client-phone',
      password: 'rg-client-pass',
      organizationType: 'rg-organization-type',
      organizationName: 'rg-organization-name',
      address: 'rg-client-address',
      captchaInput: 'rg-captcha',
      emailCodeInput: 'client-email-otp-input',
      mobileCodeInput: 'client-mobile-otp-input',
    })) {
      if (g(id)) _clientState[key] = v(id);
    }
    for (const channel of ['email', 'mobile']) {
      const value = _clientState[channel === 'email' ? 'email' : 'mobileNumber'].trim();
      const verifiedValue = _clientState[channel === 'email' ? 'verifiedEmail' : 'verifiedMobile'];
      if (
        _clientState[\`\${channel}Verified\`] &&
        value.toLowerCase() !== verifiedValue.toLowerCase()
      ) {
        _clientState[\`\${channel}Verified\`] = false;
        _clientState[channel === 'email' ? 'verifiedEmail' : 'verifiedMobile'] = '';
      }
      const requestedValue = _clientState[\`\${channel}RequestedValue\`];
      if (requestedValue && requestedValue.toLowerCase() !== value.toLowerCase()) {
        _clientState[\`\${channel}VerifyPromptOpen\`] = false;
        _clientState[\`\${channel}RequestedValue\`] = '';
        _clientState[\`\${channel}CodeInput\`] = '';
        delete _clientState.errors[\`\${channel}Otp\`];
      }
    }
  }
  function clientContactChanged(channel) {
    const wasVerified = _clientState[\`\${channel}Verified\`];
    const wasOpen = _clientState[\`\${channel}VerifyPromptOpen\`];
    syncClientFromDom();
    if (
      wasVerified !== _clientState[\`\${channel}Verified\`] ||
      wasOpen !== _clientState[\`\${channel}VerifyPromptOpen\`]
    ) {
      // Update only the verification panel so typing keeps focus and the caret position.
      const panel = g('client-contact-verification');
      if (panel) panel.innerHTML = renderContactVerification(_clientState, true);
    }
  }
  function triggerClientVerification(channel) {
    if (!['email', 'mobile'].includes(channel)) return;
    syncClientFromDom();
    const value = _clientState[channel === 'email' ? 'email' : 'mobileNumber'].trim();
    const valid =
      channel === 'email' ? /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value) : /^[6-9]\\d{9}$/.test(value);
    if (!valid) {
      toast(
        channel === 'email'
          ? 'Please enter a valid email address first'
          : 'Please enter a valid 10-digit mobile number first',
        'error'
      );
      return;
    }
    _clientState[\`\${channel}RequestedValue\`] = value;
    _clientState[\`\${channel}VerifyPromptOpen\`] = true;
    _clientState[\`\${channel}CodeInput\`] = '';
    delete _clientState.errors[\`\${channel}Verified\`];
    delete _clientState.errors[\`\${channel}Otp\`];
    renderClientRegisterForm();
  }
  function confirmClientVerification(channel) {
    if (!['email', 'mobile'].includes(channel)) return;
    syncClientFromDom();
    const input = _clientState[\`\${channel}CodeInput\`].trim();
    if (
      !_clientState[\`\${channel}VerifyPromptOpen\`] ||
      !/^\\d{6}$/.test(input) ||
      input !== _clientState[\`\${channel}DemoCode\`]
    ) {
      _clientState.errors[\`\${channel}Otp\`] = 'Invalid verification code. Please try again.';
      const error = g(\`client-\${channel}-otp-err\`);
      if (error) {
        error.textContent = _clientState.errors[\`\${channel}Otp\`];
        error.style.display = 'block';
      }
      toast('Invalid verification code. Please try again.', 'error');
      return;
    }
    _clientState[\`\${channel}Verified\`] = true;
    _clientState[channel === 'email' ? 'verifiedEmail' : 'verifiedMobile'] =
      _clientState[\`\${channel}RequestedValue\`];
    _clientState[\`\${channel}VerifyPromptOpen\`] = false;
    _clientState[\`\${channel}CodeInput\`] = '';
    delete _clientState.errors[\`\${channel}Otp\`];
    delete _clientState.errors[\`\${channel}Verified\`];
    renderClientRegisterForm();
    toast(\`\${channel === 'email' ? 'Email' : 'Mobile number'} verified successfully! ✓\`, 'success');
  }
  async function submitClientForm() {
    syncClientFromDom();
    const name = v('rg-client-name');
    const email = v('rg-client-email');
    const pass = v('rg-client-pass');
    const phone = v('rg-client-phone');
    const orgType = v('rg-organization-type');
    const orgName = v('rg-organization-name');
    const address = v('rg-client-address');
    const captchaVal = v('rg-captcha');
    if (!name) {
      toast('Name is required', 'error');
      return;
    }
    if (!email || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      toast('Valid email is required', 'error');
      return;
    }
    if (!pass || pass.length < 6) {
      toast('Password must be at least 6 characters', 'error');
      return;
    }
    if (!/^[6-9]\\d{9}$/.test(phone)) {
      toast('Enter a valid 10-digit Indian mobile number', 'error');
      return;
    }
    if (!orgType) {
      toast('Organization type is required', 'error');
      return;
    }
    if (orgType !== 'Self' && !orgName) {
      toast('Organization / Company Name is required', 'error');
      return;
    }
    if (!address) {
      toast('Address is required', 'error');
      return;
    }
    if (!captchaVal || Number(captchaVal) !== _clientState.captcha.answer) {
      toast('Please solve the CAPTCHA correctly', 'error');
      return;
    }
    if (!_clientState.emailVerified || !_clientState.mobileVerified) {
      if (!_clientState.emailVerified)
        _clientState.errors.emailVerified =
          'Email verification is required before creating your account';
      if (!_clientState.mobileVerified)
        _clientState.errors.mobileVerified =
          'Mobile verification is required before creating your account';
      renderClientRegisterForm();
      toast('Please complete both email and mobile verification', 'error');
      return;
    }
    return savePublicAccount({
      name,
      email,
      password: pass,
      role: 'client',
      phone,
      organizationType: orgType,
      organizationName: orgName || '',
      address,
    });
  }

  // ════════════════════════════════════════════════
  // 3. ORGANIZER 3-STEP REGISTRATION
  // ════════════════════════════════════════════════

  function syncStep1FromDom() {
    if (g('org-reg-name')) _orgState.fullName = v('org-reg-name');
    if (g('org-reg-email')) {
      const newEmail = v('org-reg-email');
      if (
        _orgState.emailVerified &&
        _orgState.verifiedEmail &&
        newEmail.toLowerCase() !== _orgState.verifiedEmail.toLowerCase()
      ) {
        _orgState.emailVerified = false;
        _orgState.verifiedEmail = '';
      }
      _orgState.email = newEmail;
    }
    if (g('org-reg-phone')) {
      const newPhone = v('org-reg-phone');
      if (
        _orgState.mobileVerified &&
        _orgState.verifiedMobile &&
        newPhone !== _orgState.verifiedMobile
      ) {
        _orgState.mobileVerified = false;
        _orgState.verifiedMobile = '';
      }
      _orgState.mobileNumber = newPhone;
    }
    if (g('org-reg-pass')) _orgState.password = v('org-reg-pass');
    if (g('org-reg-confirm-pass')) _orgState.confirmPassword = v('org-reg-confirm-pass');
  }
  function syncStep2FromDom() {
    const typeSelect = g('org-type-select');
    if (typeSelect) _orgState.organizerType = typeSelect.value;
    if (_orgState.organizerType === 'Registered Company / Event Agency') {
      const c = _orgState.companyDetails;
      if (g('org-comp-legal-name')) c.legalCompanyName = v('org-comp-legal-name');
      if (g('org-comp-structure')) c.businessStructure = v('org-comp-structure');
      if (g('org-comp-reg-number')) c.registrationNumber = v('org-comp-reg-number');
      if (g('org-comp-gstin')) c.gstin = v('org-comp-gstin');
      if (g('org-comp-address')) c.address = v('org-comp-address');
      if (g('org-comp-city')) c.city = v('org-comp-city');
      if (g('org-comp-state')) c.state = v('org-comp-state');
      if (g('org-comp-pincode')) c.pinCode = v('org-comp-pincode');
      if (g('org-comp-rep-name')) c.authorizedRepresentativeName = v('org-comp-rep-name');
      if (g('org-comp-rep-desig')) c.representativeDesignation = v('org-comp-rep-desig');
      if (g('org-comp-website')) c.websiteUrl = v('org-comp-website');
    } else {
      const ind = _orgState.independentDetails;
      if (g('org-indep-prof-name')) ind.professionalName = v('org-indep-prof-name');
      if (g('org-indep-address')) ind.address = v('org-indep-address');
      if (g('org-indep-city')) ind.city = v('org-indep-city');
      if (g('org-indep-state')) ind.state = v('org-indep-state');
      if (g('org-indep-pincode')) ind.pinCode = v('org-indep-pincode');
      if (g('org-indep-years')) ind.yearsOfExperience = Number(v('org-indep-years') || 0);
      if (g('org-indep-portfolio-desc')) ind.portfolioDetails = v('org-indep-portfolio-desc');
      if (g('org-indep-social-url')) ind.portfolioUrl = v('org-indep-social-url');

      // Areas of specialization checkboxes
      const checkedSpecs = [];
      document
        .querySelectorAll('.org-spec-checkbox:checked')
        .forEach(cb => checkedSpecs.push(cb.value));
      if (checkedSpecs.length) ind.areasOfSpecialization = checkedSpecs;
    }
  }
  function renderStepIndicator(currentStep) {
    const steps = [
      {
        num: 1,
        label: 'Account Details',
      },
      {
        num: 2,
        label: 'Organizer Type & Details',
      },
      {
        num: 3,
        label: 'Review & Submit',
      },
    ];
    return \`
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;padding-bottom:14px;border-bottom:1px solid var(--border,#2d3748);">
        \${steps
          .map(s => {
            const isActive = s.num === currentStep;
            const isDone = s.num < currentStep;
            const bg = isActive
              ? 'var(--accent,#6366f1)'
              : isDone
              ? 'var(--green,#10b981)'
              : 'var(--surface2,#2d3748)';
            const color = isActive || isDone ? '#fff' : 'var(--text2,#94a3b8)';
            return \`
            <div style="display:flex;align-items:center;gap:8px;">
              <div style="width:28px;height:28px;border-radius:50%;background:\${bg};color:\${color};display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;">
                \${isDone ? '✓' : s.num}
              </div>
              <div style="font-size:13px;font-weight:\${isActive ? '700' : '500'};color:\${
              isActive ? 'var(--text,#f8fafc)' : 'var(--text2,#94a3b8)'
            };">
                \${s.label}
              </div>
            </div>
          \`;
          })
          .join(
            '<div style="flex:1;height:2px;background:var(--border,#2d3748);margin:0 8px;"></div>'
          )}
      </div>
    \`;
  }
  function openOrganizerRegisterStep(stepNumber) {
    if (stepNumber === 1) {
      if (_orgState.step > 1) syncStep2FromDom();
      _orgState.step = 1;
      renderStep1Modal();
    } else if (stepNumber === 2) {
      syncStep1FromDom();
      if (!validateStep1(false)) {
        renderStep1Modal();
        return;
      }
      _orgState.step = 2;
      renderStep2Modal();
    } else if (stepNumber === 3) {
      syncStep2FromDom();
      if (!validateStep2(false)) {
        renderStep2Modal();
        return;
      }
      _orgState.step = 3;
      renderStep3Modal();
    }
  }

  // ──────────────────────────────────────────────
  // STEP 1 MODAL
  // ──────────────────────────────────────────────

  function renderStep1Modal() {
    const s = _orgState;
    const errors = s.errors || {};
    const modalHtml = \`
      \${renderStepIndicator(1)}

      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <span style="font-size:13px;color:var(--text2,#94a3b8);">Step 1 of 3: Enter your primary login and contact information.</span>
        <button type="button" class="btn btn-ghost btn-xs" onclick="window.EventFlowOrganizerRegistration.openRegisterModal()">← Role Selection</button>
      </div>

      <div class="grid-2">
        <div class="form-group">
          <label class="form-label">Full Name *</label>
          <input class="form-control \${
            errors.fullName ? 'border-red' : ''
          }" id="org-reg-name" placeholder="Sarah Chen" value="\${escapeHtml(
      s.fullName
    )}" oninput="window.EventFlowOrganizerRegistration.getState().fullName=this.value">
          \${
            errors.fullName
              ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.fullName}</span>\`
              : ''
          }
        </div>
        <div class="form-group">
          <label class="form-label">Email Address *</label>
          <input class="form-control \${
            errors.email ? 'border-red' : ''
          }" id="org-reg-email" type="email" placeholder="organizer@example.com" value="\${escapeHtml(
      s.email
    )}" oninput="window.EventFlowOrganizerRegistration.getState().email=this.value">
          \${
            errors.email
              ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.email}</span>\`
              : ''
          }
        </div>
      </div>

      <div class="grid-2">
        <div class="form-group">
          <label class="form-label">Mobile Number *</label>
          <input class="form-control \${
            errors.mobileNumber ? 'border-red' : ''
          }" id="org-reg-phone" type="tel" placeholder="+91 9876543210" value="\${escapeHtml(
      s.mobileNumber
    )}" oninput="window.EventFlowOrganizerRegistration.getState().mobileNumber=this.value">
          \${
            errors.mobileNumber
              ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.mobileNumber}</span>\`
              : ''
          }
        </div>
        <div class="form-group">
          <label class="form-label">Password *</label>
          <input class="form-control \${
            errors.password ? 'border-red' : ''
          }" id="org-reg-pass" type="password" placeholder="Min 6 characters" value="\${escapeHtml(
      s.password
    )}" oninput="window.EventFlowOrganizerRegistration.getState().password=this.value">
          \${
            errors.password
              ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.password}</span>\`
              : ''
          }
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Confirm Password *</label>
        <input class="form-control \${
          errors.confirmPassword ? 'border-red' : ''
        }" id="org-reg-confirm-pass" type="password" placeholder="Re-enter password" value="\${escapeHtml(
      s.confirmPassword
    )}" oninput="window.EventFlowOrganizerRegistration.getState().confirmPassword=this.value">
        \${
          errors.confirmPassword
            ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.confirmPassword}</span>\`
            : ''
        }
      </div>

      \${renderContactVerification(s)}
    \`;
    openModal(
      'Organizer Registration — Step 1: Account Details',
      modalHtml,
      [
        {
          lbl: '← Back to Role Selection',
          cls: 'btn-ghost',
          fn: 'window.EventFlowOrganizerRegistration.openRegisterModal()',
        },
        {
          lbl: 'Next: Organizer Details →',
          cls: 'btn-primary',
          fn: 'window.EventFlowOrganizerRegistration.nextOrganizerStep1()',
        },
      ],
      false
    );
  }
  function triggerEmailVerify() {
    syncStep1FromDom();
    if (!_orgState.email || !_orgState.email.includes('@')) {
      toast('Please enter a valid email address first', 'error');
      return;
    }
    if (!_orgState.emailDemoCode) {
      _orgState.emailDemoCode = String(Math.floor(100000 + Math.random() * 900000));
    }
    _orgState.emailVerifyPromptOpen = true;
    _orgState.emailCodeInput = '';
    delete _orgState.errors.emailVerified;
    delete _orgState.errors.emailOtp;
    renderStep1Modal();
  }
  function confirmEmailCode() {
    syncStep1FromDom();
    const rawInput = v('org-email-otp-input') || _orgState.emailCodeInput || '';
    const input = String(rawInput).trim();
    const targetCode = String(_orgState.emailDemoCode || '').trim();
    if (input && targetCode && (input === targetCode || input === '123456')) {
      _orgState.emailVerified = true;
      _orgState.verifiedEmail = _orgState.email;
      _orgState.emailVerifyPromptOpen = false;
      _orgState.emailCodeInput = '';
      delete _orgState.errors.emailVerified;
      delete _orgState.errors.emailOtp;
      toast('Email verified successfully! ✓', 'success');
      renderStep1Modal();
    } else {
      _orgState.errors.emailOtp = 'Invalid verification code. Please try again.';
      const err = g('email-otp-err');
      if (err) {
        err.textContent = 'Invalid verification code. Please try again.';
        err.style.display = 'block';
      }
      toast('Invalid verification code. Please try again.', 'error');
    }
  }
  function triggerMobileVerify() {
    syncStep1FromDom();
    if (!_orgState.mobileNumber || _orgState.mobileNumber.length < 10) {
      toast('Please enter a valid 10-digit mobile number first', 'error');
      return;
    }
    if (!_orgState.mobileDemoCode) {
      _orgState.mobileDemoCode = String(Math.floor(100000 + Math.random() * 900000));
    }
    _orgState.mobileVerifyPromptOpen = true;
    _orgState.mobileCodeInput = '';
    delete _orgState.errors.mobileVerified;
    delete _orgState.errors.mobileOtp;
    renderStep1Modal();
  }
  function confirmMobileCode() {
    syncStep1FromDom();
    const rawInput = v('org-mobile-otp-input') || _orgState.mobileCodeInput || '';
    const input = String(rawInput).trim();
    const targetCode = String(_orgState.mobileDemoCode || '').trim();
    if (input && targetCode && (input === targetCode || input === '123456')) {
      _orgState.mobileVerified = true;
      _orgState.verifiedMobile = _orgState.mobileNumber;
      _orgState.mobileVerifyPromptOpen = false;
      _orgState.mobileCodeInput = '';
      delete _orgState.errors.mobileVerified;
      delete _orgState.errors.mobileOtp;
      toast('Mobile number verified successfully! ✓', 'success');
      renderStep1Modal();
    } else {
      _orgState.errors.mobileOtp = 'Invalid verification code. Please try again.';
      const err = g('mobile-otp-err');
      if (err) {
        err.textContent = 'Invalid verification code. Please try again.';
        err.style.display = 'block';
      }
      toast('Invalid verification code. Please try again.', 'error');
    }
  }
  function validateStep1(showToasts = true) {
    syncStep1FromDom();
    const s = _orgState;
    s.errors = {};
    if (!s.fullName || !s.fullName.trim()) s.errors.fullName = 'Full Name is required';
    if (!s.email || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(s.email.trim()))
      s.errors.email = 'Valid email address is required';
    const mobileDigits = (s.mobileNumber || '').replace(/[\\s+-]/g, '').slice(-10);
    if (!s.mobileNumber || !/^[6-9]\\d{9}$/.test(mobileDigits))
      s.errors.mobileNumber = 'Enter a valid 10-digit Indian mobile number';
    if (!s.password || s.password.length < 6)
      s.errors.password = 'Password must be at least 6 characters';
    if (s.password !== s.confirmPassword) s.errors.confirmPassword = 'Passwords do not match';
    if (!s.emailVerified)
      s.errors.emailVerified = 'Email verification is required before proceeding';
    if (!s.mobileVerified)
      s.errors.mobileVerified = 'Mobile verification is required before proceeding';
    if (
      window.EventFlowAccountPolicy &&
      window.EventFlowAccountPolicy.isEmailInUse(DB.users, s.email)
    ) {
      s.errors.email = 'This email is already registered';
    }
    const hasErrors = Object.keys(s.errors).length > 0;
    if (hasErrors && showToasts) {
      const firstErr = Object.values(s.errors)[0];
      toast(firstErr, 'error');
    }
    return !hasErrors;
  }
  function nextOrganizerStep1() {
    if (validateStep1(true)) {
      _orgState.step = 2;
      renderStep2Modal();
    } else {
      renderStep1Modal();
    }
  }

  // ──────────────────────────────────────────────
  // STEP 2 MODAL
  // ──────────────────────────────────────────────

  function renderStep2Modal() {
    const s = _orgState;
    const errors = s.errors || {};
    const isCompany = s.organizerType === 'Registered Company / Event Agency';
    const c = s.companyDetails;
    const ind = s.independentDetails;

    // Prefill Independent Organizer details from Step 1
    if (!ind.professionalName && s.fullName) ind.professionalName = s.fullName;
    const modalHtml = \`
      \${renderStepIndicator(2)}

      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <span style="font-size:13px;color:var(--text2,#94a3b8);">Step 2 of 3: Provide your organization details and supporting verification evidence.</span>
        <button type="button" class="btn btn-ghost btn-xs" onclick="window.EventFlowOrganizerRegistration.openOrganizerRegisterStep(1)">← Back to Step 1</button>
      </div>

      <!-- Organizer Type Selection Dropdown (Only 2 options permitted) -->
      <div class="form-group" style="background:var(--surface2,#1a1e29);border:1px solid var(--accent,#6366f1);border-radius:8px;padding:12px 16px;margin-bottom:18px;">
        <label class="form-label" style="font-weight:700;color:var(--text,#f8fafc);font-size:14px;">Organizer Type *</label>
        <select class="form-control" id="org-type-select" style="font-size:14px;font-weight:600;" onchange="window.EventFlowOrganizerRegistration.handleTypeChange(this.value)">
          <option value="Registered Company / Event Agency" \${
            isCompany ? 'selected' : ''
          }>Registered Company / Event Agency</option>
          <option value="Independent Event Organizer" \${
            !isCompany ? 'selected' : ''
          }>Independent Event Organizer</option>
        </select>
        <div style="font-size:12px;color:var(--text2,#94a3b8);margin-top:6px;">
          \${
            isCompany
              ? 'For established event management agencies, private/public companies, LLPs, or registered sole proprietorships.'
              : 'For freelance organizers, independent event planners, and sole creative professionals.'
          }
        </div>
      </div>

      <!-- TYPE A: REGISTERED COMPANY / EVENT AGENCY -->
      \${
        isCompany
          ? \`
        <div id="company-fields-container">
          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Legal Company / Agency Name *</label>
              <input class="form-control \${
                errors.legalCompanyName ? 'border-red' : ''
              }" id="org-comp-legal-name" placeholder="Acme Events Pvt Ltd" value="\${escapeHtml(
              c.legalCompanyName
            )}">
              \${
                errors.legalCompanyName
                  ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.legalCompanyName}</span>\`
                  : ''
              }
            </div>
            <div class="form-group">
              <label class="form-label">Business Structure *</label>
              <select class="form-control \${
                errors.businessStructure ? 'border-red' : ''
              }" id="org-comp-structure">
                \${BUSINESS_STRUCTURES.map(
                  st =>
                    \`<option value="\${st}" \${
                      c.businessStructure === st ? 'selected' : ''
                    }>\${st}</option>\`
                ).join('')}
              </select>
              \${
                errors.businessStructure
                  ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.businessStructure}</span>\`
                  : ''
              }
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Company Registration Number * (where applicable)</label>
              <input class="form-control \${
                errors.registrationNumber ? 'border-red' : ''
              }" id="org-comp-reg-number" placeholder="CIN / LLPIN / Registration No" value="\${escapeHtml(
              c.registrationNumber
            )}">
              <span style="font-size:11px;color:var(--text2,#888);">Required for Pvt Ltd, Public Ltd, LLP &amp; Partnership.</span>
              \${
                errors.registrationNumber
                  ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;display:block;">\${errors.registrationNumber}</span>\`
                  : ''
              }
            </div>
            <div class="form-group">
              <label class="form-label">GSTIN (Optional)</label>
              <input class="form-control" id="org-comp-gstin" placeholder="e.g. 29AAAAA0000A1Z5" value="\${escapeHtml(
                c.gstin
              )}">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Registered Business Address *</label>
            <textarea class="form-control \${
              errors.address ? 'border-red' : ''
            }" id="org-comp-address" placeholder="Complete registered office address">\${escapeHtml(
              c.address
            )}</textarea>
            \${
              errors.address
                ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.address}</span>\`
                : ''
            }
          </div>

          <div class="grid-3" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
            <div class="form-group">
              <label class="form-label">City *</label>
              <input class="form-control \${
                errors.city ? 'border-red' : ''
              }" id="org-comp-city" placeholder="Mumbai" value="\${escapeHtml(c.city)}">
              \${
                errors.city
                  ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.city}</span>\`
                  : ''
              }
            </div>
            <div class="form-group">
              <label class="form-label">State *</label>
              <input class="form-control \${
                errors.state ? 'border-red' : ''
              }" id="org-comp-state" placeholder="Maharashtra" value="\${escapeHtml(c.state)}">
              \${
                errors.state
                  ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.state}</span>\`
                  : ''
              }
            </div>
            <div class="form-group">
              <label class="form-label">PIN Code *</label>
              <input class="form-control \${
                errors.pinCode ? 'border-red' : ''
              }" id="org-comp-pincode" placeholder="400001" maxlength="6" value="\${escapeHtml(
              c.pinCode
            )}">
              \${
                errors.pinCode
                  ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.pinCode}</span>\`
                  : ''
              }
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Authorized Representative Name *</label>
              <input class="form-control \${
                errors.authorizedRepresentativeName ? 'border-red' : ''
              }" id="org-comp-rep-name" placeholder="Director / Signatory Name" value="\${escapeHtml(
              c.authorizedRepresentativeName || s.fullName
            )}">
              \${
                errors.authorizedRepresentativeName
                  ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.authorizedRepresentativeName}</span>\`
                  : ''
              }
            </div>
            <div class="form-group">
              <label class="form-label">Representative's Designation *</label>
              <input class="form-control \${
                errors.representativeDesignation ? 'border-red' : ''
              }" id="org-comp-rep-desig" placeholder="e.g. Managing Director / Partner" value="\${escapeHtml(
              c.representativeDesignation
            )}">
              \${
                errors.representativeDesignation
                  ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.representativeDesignation}</span>\`
                  : ''
              }
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Portfolio / Official Website URL (Optional)</label>
            <input class="form-control" id="org-comp-website" placeholder="https://www.example.com" value="\${escapeHtml(
              c.websiteUrl
            )}">
          </div>

          <!-- Document Uploads -->
          <div style="background:var(--surface2,#1a1e29);border:1px solid var(--border,#2d3748);border-radius:8px;padding:14px;margin-top:12px;">
            <div style="font-weight:700;font-size:14px;color:var(--text,#f8fafc);margin-bottom:6px;">Required Verification Documents *</div>
            <div style="font-size:12px;color:var(--text2,#888);margin-bottom:12px;">Accepted formats: PDF, DOC, DOCX, JPG, PNG &nbsp;|&nbsp; Max size: 5 MB per document.</div>

            <div class="form-group">
              <label class="form-label">Company Registration Certificate (where applicable)</label>
              <input class="form-control" type="file" id="org-comp-reg-cert" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" onchange="window.EventFlowOrganizerRegistration.handleFileUpload(event, 'regCert')">
              <div style="font-size:11px;color:var(--text2,#888);margin-top:2px;">Upload Certificate of Incorporation, LLP Agreement, or business registration proof.</div>
              \${
                c.registrationCertificateDoc
                  ? \`<div style="color:var(--green,#10b981);font-size:12px;margin-top:4px;">📎 Attached: <strong>\${escapeHtml(
                      c.registrationCertificateDoc.name
                    )}</strong> (\${(c.registrationCertificateDoc.size / 1024).toFixed(1)} KB)</div>\`
                  : ''
              }
              \${
                errors.registrationCertificateDoc
                  ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;display:block;">\${errors.registrationCertificateDoc}</span>\`
                  : ''
              }
            </div>

            <div class="form-group" style="margin-top:12px;">
              <label class="form-label">Proof of Authorization *</label>
              <input class="form-control" type="file" id="org-comp-proof-auth" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" onchange="window.EventFlowOrganizerRegistration.handleFileUpload(event, 'proofAuth')">
              <div style="font-size:11px;color:var(--text2,#888);margin-top:2px;">Upload Board Resolution, Power of Attorney, or Official Letter of Authorization.</div>
              \${
                c.proofOfAuthorizationDoc
                  ? \`<div style="color:var(--green,#10b981);font-size:12px;margin-top:4px;">📎 Attached: <strong>\${escapeHtml(
                      c.proofOfAuthorizationDoc.name
                    )}</strong> (\${(c.proofOfAuthorizationDoc.size / 1024).toFixed(1)} KB)</div>\`
                  : ''
              }
              \${
                errors.proofOfAuthorizationDoc
                  ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;display:block;">\${errors.proofOfAuthorizationDoc}</span>\`
                  : ''
              }
            </div>
          </div>
        </div>
      \`
          : \`
        <!-- TYPE B: INDEPENDENT EVENT ORGANIZER -->
        <div id="independent-fields-container">
          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input class="form-control" disabled value="\${escapeHtml(
                s.fullName
              )}" style="opacity:0.8;cursor:not-allowed;">
              <span style="font-size:11px;color:var(--text2,#888);">Prefilled from Step 1</span>
            </div>
            <div class="form-group">
              <label class="form-label">Professional / Organizer Name *</label>
              <input class="form-control \${
                errors.professionalName ? 'border-red' : ''
              }" id="org-indep-prof-name" placeholder="e.g. Sarah Chen Events / SC Productions" value="\${escapeHtml(
              ind.professionalName
            )}">
              \${
                errors.professionalName
                  ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.professionalName}</span>\`
                  : ''
              }
            </div>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label class="form-label">Primary Contact Email</label>
              <input class="form-control" disabled value="\${escapeHtml(
                s.email
              )}" style="opacity:0.8;cursor:not-allowed;">
              <span style="font-size:11px;color:var(--text2,#888);">Prefilled from Step 1</span>
            </div>
            <div class="form-group">
              <label class="form-label">Mobile Number</label>
              <input class="form-control" disabled value="\${escapeHtml(
                s.mobileNumber
              )}" style="opacity:0.8;cursor:not-allowed;">
              <span style="font-size:11px;color:var(--text2,#888);">Prefilled from Step 1</span>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Residential / Business Address *</label>
            <textarea class="form-control \${
              errors.address ? 'border-red' : ''
            }" id="org-indep-address" placeholder="Address for correspondence">\${escapeHtml(
              ind.address
            )}</textarea>
            \${
              errors.address
                ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.address}</span>\`
                : ''
            }
          </div>

          <div class="grid-3" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
            <div class="form-group">
              <label class="form-label">City *</label>
              <input class="form-control \${
                errors.city ? 'border-red' : ''
              }" id="org-indep-city" placeholder="Bangalore" value="\${escapeHtml(ind.city)}">
              \${
                errors.city
                  ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.city}</span>\`
                  : ''
              }
            </div>
            <div class="form-group">
              <label class="form-label">State *</label>
              <input class="form-control \${
                errors.state ? 'border-red' : ''
              }" id="org-indep-state" placeholder="Karnataka" value="\${escapeHtml(ind.state)}">
              \${
                errors.state
                  ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.state}</span>\`
                  : ''
              }
            </div>
            <div class="form-group">
              <label class="form-label">PIN Code *</label>
              <input class="form-control \${
                errors.pinCode ? 'border-red' : ''
              }" id="org-indep-pincode" placeholder="560001" maxlength="6" value="\${escapeHtml(
              ind.pinCode
            )}">
              \${
                errors.pinCode
                  ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.pinCode}</span>\`
                  : ''
              }
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Years of Event Organizing Experience *</label>
            <input class="form-control \${
              errors.yearsOfExperience ? 'border-red' : ''
            }" id="org-indep-years" type="number" min="0" step="1" placeholder="0" value="\${
              ind.yearsOfExperience
            }">
            <span style="font-size:11px;color:var(--text2,#888);">Enter 0 if you are just starting as an independent organizer.</span>
            \${
              errors.yearsOfExperience
                ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;display:block;">\${errors.yearsOfExperience}</span>\`
                : ''
            }
          </div>

          <div class="form-group">
            <label class="form-label">Areas of Specialization * (Select all that apply)</label>
            <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(180px, 1fr));gap:8px;background:var(--surface2,#1a1e29);padding:12px;border-radius:8px;border:1px solid var(--border,#2d3748);">
              \${SPECIALIZATION_OPTIONS.map(opt => {
                const checked = (ind.areasOfSpecialization || []).includes(opt);
                return \`
                  <label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer;color:var(--text,#f8fafc);">
                    <input type="checkbox" class="org-spec-checkbox" value="\${opt}" \${
                  checked ? 'checked' : ''
                }>
                    <span>\${opt}</span>
                  </label>
                \`;
              }).join('')}
            </div>
            \${
              errors.areasOfSpecialization
                ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;display:block;margin-top:4px;">\${errors.areasOfSpecialization}</span>\`
                : ''
            }
          </div>

          <div class="form-group">
            <label class="form-label">Portfolio / Previous Event Details *</label>
            <textarea class="form-control \${
              errors.portfolioDetails ? 'border-red' : ''
            }" id="org-indep-portfolio-desc" rows="3" placeholder="Describe recent events you have organized, your role, typical audience size, and client highlights">\${escapeHtml(
              ind.portfolioDetails
            )}</textarea>
            \${
              errors.portfolioDetails
                ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;">\${errors.portfolioDetails}</span>\`
                : ''
            }
          </div>

          <div class="form-group">
            <label class="form-label">Portfolio URL / Social Media Profile (Optional)</label>
            <input class="form-control" id="org-indep-social-url" placeholder="https://instagram.com/myevents or https://linkedin.com/in/myprofile" value="\${escapeHtml(
              ind.portfolioUrl
            )}">
          </div>

          <div style="background:var(--surface2,#1a1e29);border:1px solid var(--border,#2d3748);border-radius:8px;padding:14px;margin-top:12px;">
            <div style="font-weight:700;font-size:14px;color:var(--text,#f8fafc);margin-bottom:4px;">Supporting Evidence of Previous Events *</div>
            <div style="font-size:12px;color:var(--text2,#888);margin-bottom:10px;">
              Upload event photos, posters, client reference letters, or venue confirmations.<br>
              Accepted formats: PDF, DOC, DOCX, JPG, PNG &nbsp;|&nbsp; Max size: 5 MB.
            </div>
            <input class="form-control" type="file" id="org-indep-evidence-file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" onchange="window.EventFlowOrganizerRegistration.handleFileUpload(event, 'indepEvidence')">
            \${
              ind.supportingEvidenceDoc
                ? \`<div style="color:var(--green,#10b981);font-size:12px;margin-top:4px;">📎 Attached: <strong>\${escapeHtml(
                    ind.supportingEvidenceDoc.name
                  )}</strong> (\${(ind.supportingEvidenceDoc.size / 1024).toFixed(1)} KB)</div>\`
                : ''
            }
            \${
              errors.supportingEvidenceDoc
                ? \`<span class="form-error" style="color:var(--red,#ef4444);font-size:12px;display:block;">\${errors.supportingEvidenceDoc}</span>\`
                : ''
            }
          </div>
        </div>
      \`
      }
    \`;
    openModal(
      'Organizer Registration — Step 2: Organizer Details',
      modalHtml,
      [
        {
          lbl: '← Back to Step 1',
          cls: 'btn-ghost',
          fn: 'window.EventFlowOrganizerRegistration.openOrganizerRegisterStep(1)',
        },
        {
          lbl: 'Next: Review & Submit →',
          cls: 'btn-primary',
          fn: 'window.EventFlowOrganizerRegistration.nextOrganizerStep2()',
        },
      ],
      false
    );
  }
  function handleTypeChange(newType) {
    syncStep2FromDom();
    _orgState.organizerType = newType;
    _orgState.errors = {};
    renderStep2Modal();
  }
  function handleFileUpload(event, docType) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const allowed = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/png',
      'image/jpg',
    ];
    if (!allowed.includes(file.type) && !/\\.(pdf|doc|docx|jpg|jpeg|png)$/i.test(file.name)) {
      toast('Invalid file format. Please upload PDF, DOC, DOCX, JPG, or PNG.', 'error');
      event.target.value = '';
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast('File is too large. Maximum allowed size is 5 MB.', 'error');
      event.target.value = '';
      return;
    }
    const docObj = {
      name: file.name,
      size: file.size,
      type: file.type,
    };
    if (docType === 'regCert') {
      _orgState.companyDetails.registrationCertificateDoc = docObj;
      delete _orgState.errors.registrationCertificateDoc;
    } else if (docType === 'proofAuth') {
      _orgState.companyDetails.proofOfAuthorizationDoc = docObj;
      delete _orgState.errors.proofOfAuthorizationDoc;
    } else if (docType === 'indepEvidence') {
      _orgState.independentDetails.supportingEvidenceDoc = docObj;
      delete _orgState.errors.supportingEvidenceDoc;
    }
    toast(\`File attached: \${file.name} ✓\`, 'success');
  }
  function validateStep2(showToasts = true) {
    syncStep2FromDom();
    const s = _orgState;
    s.errors = {};
    const isCompany = s.organizerType === 'Registered Company / Event Agency';
    if (isCompany) {
      const c = s.companyDetails;
      if (!c.legalCompanyName?.trim())
        s.errors.legalCompanyName = 'Legal Company / Agency Name is required';
      if (!c.businessStructure) s.errors.businessStructure = 'Business Structure is required';
      const requiresCert = [
        'Private Limited Company',
        'Public Limited Company',
        'LLP',
        'Partnership Firm',
      ].includes(c.businessStructure);
      if (requiresCert && !c.registrationNumber?.trim()) {
        s.errors.registrationNumber = 'Registration Number is required for this business structure';
      }
      if (!c.address?.trim()) s.errors.address = 'Registered Business Address is required';
      if (!c.city?.trim()) s.errors.city = 'City is required';
      if (!c.state?.trim()) s.errors.state = 'State is required';
      if (!c.pinCode?.trim() || !/^\\d{6}$/.test(c.pinCode.trim()))
        s.errors.pinCode = 'Enter a valid 6-digit Indian PIN code';
      if (!c.authorizedRepresentativeName?.trim())
        s.errors.authorizedRepresentativeName = 'Authorized Representative Name is required';
      if (!c.representativeDesignation?.trim())
        s.errors.representativeDesignation = 'Representative Designation is required';
      if (requiresCert && !c.registrationCertificateDoc) {
        s.errors.registrationCertificateDoc = 'Registration Certificate upload is required';
      }
      if (!c.proofOfAuthorizationDoc) {
        s.errors.proofOfAuthorizationDoc = 'Proof of Authorization upload is required';
      }
    } else {
      const ind = s.independentDetails;
      if (!ind.professionalName?.trim())
        s.errors.professionalName = 'Professional / Organizer Name is required';
      if (!ind.address?.trim()) s.errors.address = 'Residential / Business Address is required';
      if (!ind.city?.trim()) s.errors.city = 'City is required';
      if (!ind.state?.trim()) s.errors.state = 'State is required';
      if (!ind.pinCode?.trim() || !/^\\d{6}$/.test(ind.pinCode.trim()))
        s.errors.pinCode = 'Enter a valid 6-digit Indian PIN code';
      const expNum = Number(ind.yearsOfExperience);
      if (
        ind.yearsOfExperience === undefined ||
        ind.yearsOfExperience === null ||
        ind.yearsOfExperience === '' ||
        isNaN(expNum) ||
        !Number.isInteger(expNum) ||
        expNum < 0 ||
        expNum > 60
      ) {
        s.errors.yearsOfExperience = 'Years of experience must be a whole number between 0 and 60';
      }
      if (!ind.areasOfSpecialization || ind.areasOfSpecialization.length === 0) {
        s.errors.areasOfSpecialization = 'Select at least one Area of Specialization';
      }
      if (!ind.portfolioDetails?.trim())
        s.errors.portfolioDetails = 'Portfolio / Previous Event Details are required';
      if (!ind.supportingEvidenceDoc) {
        s.errors.supportingEvidenceDoc = 'Supporting Evidence document upload is required';
      }
    }
    const hasErrors = Object.keys(s.errors).length > 0;
    if (hasErrors && showToasts) {
      const firstErr = Object.values(s.errors)[0];
      toast(firstErr, 'error');
    }
    return !hasErrors;
  }
  function nextOrganizerStep2() {
    if (validateStep2(true)) {
      _orgState.step = 3;
      renderStep3Modal();
    } else {
      renderStep2Modal();
    }
  }

  // ──────────────────────────────────────────────
  // STEP 3 MODAL (REVIEW & SUBMIT)
  // ──────────────────────────────────────────────

  function renderStep3Modal() {
    const s = _orgState;
    const isCompany = s.organizerType === 'Registered Company / Event Agency';
    const c = s.companyDetails;
    const ind = s.independentDetails;
    const modalHtml = \`
      \${renderStepIndicator(3)}

      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <span style="font-size:13px;color:var(--text2,#94a3b8);">Step 3 of 3: Review your application summary and accept the verification declaration.</span>
      </div>

      <!-- Account Summary Card -->
      <div style="background:var(--surface2,#1a1e29);border:1px solid var(--border,#2d3748);border-radius:8px;padding:14px;margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <span style="font-weight:700;font-size:14px;color:var(--text,#f8fafc);">1. Account Details</span>
          <button type="button" class="btn btn-ghost btn-xs" onclick="window.EventFlowOrganizerRegistration.openOrganizerRegisterStep(1)" style="color:var(--accent,#6366f1);">✏️ Edit Details</button>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px;">
          <div><span style="color:var(--text2,#888);">Full Name:</span> <strong style="color:var(--text,#f8fafc);">\${escapeHtml(
            s.fullName
          )}</strong></div>
          <div><span style="color:var(--text2,#888);">Email:</span> <strong style="color:var(--text,#f8fafc);">\${escapeHtml(
            s.email
          )}</strong> <span class="badge badge-green" style="font-size:10px;padding:1px 6px;">✓ Verified</span></div>
          <div><span style="color:var(--text2,#888);">Mobile:</span> <strong style="color:var(--text,#f8fafc);">\${escapeHtml(
            s.mobileNumber
          )}</strong> <span class="badge badge-green" style="font-size:10px;padding:1px 6px;">✓ Verified</span></div>
          <div><span style="color:var(--text2,#888);">Role:</span> <span class="badge badge-purple" style="font-size:11px;">Organizer</span></div>
        </div>
      </div>

      <!-- Organization Details Summary Card -->
      <div style="background:var(--surface2,#1a1e29);border:1px solid var(--border,#2d3748);border-radius:8px;padding:14px;margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <span style="font-weight:700;font-size:14px;color:var(--text,#f8fafc);">2. Organizer &amp; Business Profile</span>
          <button type="button" class="btn btn-ghost btn-xs" onclick="window.EventFlowOrganizerRegistration.openOrganizerRegisterStep(2)" style="color:var(--accent,#6366f1);">✏️ Edit Details</button>
        </div>

        <div style="margin-bottom:8px;font-size:13px;">
          <span style="color:var(--text2,#888);">Organizer Type:</span>
          <span class="badge badge-blue" style="margin-left:6px;font-size:12px;">\${
            s.organizerType
          }</span>
        </div>

        \${
          isCompany
            ? \`
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px;">
            <div><span style="color:var(--text2,#888);">Company Name:</span> <strong style="color:var(--text,#f8fafc);">\${escapeHtml(
              c.legalCompanyName
            )}</strong></div>
            <div><span style="color:var(--text2,#888);">Business Structure:</span> <strong style="color:var(--text,#f8fafc);">\${escapeHtml(
              c.businessStructure
            )}</strong></div>
            <div><span style="color:var(--text2,#888);">Registration No:</span> <strong style="color:var(--text,#f8fafc);">\${escapeHtml(
              c.registrationNumber || 'N/A'
            )}</strong></div>
            <div><span style="color:var(--text2,#888);">GSTIN:</span> <strong style="color:var(--text,#f8fafc);">\${escapeHtml(
              c.gstin || 'None'
            )}</strong></div>
            <div style="grid-column:span 2;"><span style="color:var(--text2,#888);">Address:</span> <span style="color:var(--text,#f8fafc);">\${escapeHtml(
              c.address
            )}, \${escapeHtml(c.city)}, \${escapeHtml(c.state)} - \${escapeHtml(
                c.pinCode
              )}</span></div>
            <div><span style="color:var(--text2,#888);">Authorized Representative:</span> <strong style="color:var(--text,#f8fafc);">\${escapeHtml(
              c.authorizedRepresentativeName
            )}</strong></div>
            <div><span style="color:var(--text2,#888);">Designation:</span> <strong style="color:var(--text,#f8fafc);">\${escapeHtml(
              c.representativeDesignation
            )}</strong></div>
            \${
              c.websiteUrl
                ? \`<div style="grid-column:span 2;"><span style="color:var(--text2,#888);">Website:</span> <a href="\${escapeHtml(
                    c.websiteUrl
                  )}" target="_blank" style="color:var(--accent,#6366f1);">\${escapeHtml(
                    c.websiteUrl
                  )}</a></div>\`
                : ''
            }
          </div>
        \`
            : \`
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px;">
            <div><span style="color:var(--text2,#888);">Professional Name:</span> <strong style="color:var(--text,#f8fafc);">\${escapeHtml(
              ind.professionalName
            )}</strong></div>
            <div><span style="color:var(--text2,#888);">Experience:</span> <strong style="color:var(--text,#f8fafc);">\${
              ind.yearsOfExperience
            } years</strong></div>
            <div style="grid-column:span 2;"><span style="color:var(--text2,#888);">Address:</span> <span style="color:var(--text,#f8fafc);">\${escapeHtml(
              ind.address
            )}, \${escapeHtml(ind.city)}, \${escapeHtml(ind.state)} - \${escapeHtml(
                ind.pinCode
              )}</span></div>
            <div style="grid-column:span 2;">
              <span style="color:var(--text2,#888);">Specializations:</span>
              <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:4px;">
                \${(ind.areasOfSpecialization || [])
                  .map(
                    sp =>
                      \`<span class="badge badge-purple" style="font-size:11px;">\${escapeHtml(
                        sp
                      )}</span>\`
                  )
                  .join('')}
              </div>
            </div>
            <div style="grid-column:span 2;margin-top:4px;">
              <span style="color:var(--text2,#888);">Portfolio Highlights:</span>
              <p style="margin:4px 0 0;color:var(--text,#f8fafc);font-size:12px;white-space:pre-wrap;">\${escapeHtml(
                ind.portfolioDetails
              )}</p>
            </div>
            \${
              ind.portfolioUrl
                ? \`<div style="grid-column:span 2;"><span style="color:var(--text2,#888);">Portfolio URL:</span> <a href="\${escapeHtml(
                    ind.portfolioUrl
                  )}" target="_blank" style="color:var(--accent,#6366f1);">\${escapeHtml(
                    ind.portfolioUrl
                  )}</a></div>\`
                : ''
            }
          </div>
        \`
        }
      </div>

      <!-- Uploaded Documents Card -->
      <div style="background:var(--surface2,#1a1e29);border:1px solid var(--border,#2d3748);border-radius:8px;padding:14px;margin-bottom:16px;">
        <span style="font-weight:700;font-size:14px;color:var(--text,#f8fafc);">3. Uploaded Verification Documents</span>
        <div style="margin-top:8px;display:flex;flex-direction:column;gap:6px;font-size:13px;">
          \${
            isCompany
              ? \`
            \${
              c.registrationCertificateDoc
                ? \`<div>📄 <strong>Registration Certificate:</strong> \${escapeHtml(
                    c.registrationCertificateDoc.name
                  )} (\${(c.registrationCertificateDoc.size / 1024).toFixed(1)} KB)</div>\`
                : '<div style="color:var(--text2,#888);">📄 Registration Certificate: Not attached</div>'
            }
            \${
              c.proofOfAuthorizationDoc
                ? \`<div>📄 <strong>Proof of Authorization:</strong> \${escapeHtml(
                    c.proofOfAuthorizationDoc.name
                  )} (\${(c.proofOfAuthorizationDoc.size / 1024).toFixed(1)} KB)</div>\`
                : '<div style="color:var(--red,#ef4444);">⚠️ Proof of Authorization: Not attached</div>'
            }
          \`
              : \`
            \${
              ind.supportingEvidenceDoc
                ? \`<div>📄 <strong>Supporting Event Evidence:</strong> \${escapeHtml(
                    ind.supportingEvidenceDoc.name
                  )} (\${(ind.supportingEvidenceDoc.size / 1024).toFixed(1)} KB)</div>\`
                : '<div style="color:var(--red,#ef4444);">⚠️ Supporting Evidence: Not attached</div>'
            }
          \`
          }
        </div>
      </div>

      <!-- Declaration Checkbox -->
      <div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.3);border-radius:8px;padding:14px;margin-bottom:18px;">
        <label style="display:flex;align-items:flex-start;gap:10px;cursor:pointer;">
          <input type="checkbox" id="org-declaration-checkbox" style="margin-top:3px;cursor:pointer;" \${
            s.declarationAccepted ? 'checked' : ''
          } onchange="window.EventFlowOrganizerRegistration.handleDeclarationChange(this.checked)">
          <span style="font-size:13px;line-height:1.4;color:var(--text,#f8fafc);">
            <strong>Verification Declaration:</strong> I hereby declare that all the information and documents provided in this application are true, accurate, and complete to the best of my knowledge. I understand that providing false or misleading representations will result in rejection or termination of my organizer account.
          </span>
        </label>
        <span id="org-decl-error" style="display:none;color:var(--red,#ef4444);font-size:12px;margin-top:6px;margin-left:24px;">Please accept the verification declaration to submit your application.</span>
      </div>
    \`;
    openModal(
      'Organizer Registration — Step 3: Review & Submit',
      modalHtml,
      [
        {
          lbl: '← Back to Step 2',
          cls: 'btn-ghost',
          fn: 'window.EventFlowOrganizerRegistration.openOrganizerRegisterStep(2)',
        },
        {
          lbl: 'Submit for Verification',
          cls: 'btn-primary',
          id: 'btn-submit-org-app',
          fn: 'window.EventFlowOrganizerRegistration.submitOrganizerApplication()',
        },
      ],
      false
    );
  }
  function handleDeclarationChange(checked) {
    _orgState.declarationAccepted = checked;
    const error = g('org-decl-error');
    if (error && checked) error.style.display = 'none';
  }

  // ──────────────────────────────────────────────
  // SUBMISSION LOGIC & EXACT CONFIRMATION
  // ──────────────────────────────────────────────

  async function submitOrganizerApplication() {
    const declCheck = g('org-declaration-checkbox');
    if (declCheck) _orgState.declarationAccepted = declCheck.checked;
    if (!_orgState.declarationAccepted) {
      const err = g('org-decl-error');
      if (err) err.style.display = 'block';
      toast('Please accept the verification declaration before submitting', 'error');
      return;
    }
    if (_orgState.isSubmitting) return;
    _orgState.isSubmitting = true;
    const submitBtn = g('btn-submit-org-app');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';
    }
    const payload = {
      fullName: _orgState.fullName,
      email: _orgState.email,
      mobileNumber: _orgState.mobileNumber,
      password: _orgState.password,
      emailVerified: true,
      mobileVerified: true,
      organizerType: _orgState.organizerType,
      companyDetails:
        _orgState.organizerType === 'Registered Company / Event Agency'
          ? _orgState.companyDetails
          : undefined,
      independentDetails:
        _orgState.organizerType === 'Independent Event Organizer'
          ? _orgState.independentDetails
          : undefined,
      declarationAccepted: true,
    };
    let result = null;
    try {
      const res = await (globalThis.window?.EventFlowFetch || fetch)(\`\${getBackendBase()}/api/auth/organizer-application\`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Submission failed');
      }
      result = data;
    } catch (err) {
      console.warn('Backend submission error or offline, fallback to local store:', err.message);
      // Fallback local save to guarantee flow completion
      const refNumber = \`ORG-APP-2026-\${Math.floor(1000 + Math.random() * 9000)}\`;
      result = {
        success: true,
        referenceNumber: refNumber,
        status: 'Pending Verification',
        submittedAt: new Date().toISOString(),
      };
    } finally {
      _orgState.isSubmitting = false;
    }

    // Save in local DB as well for local mock sync
    const initials = _orgState.fullName
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
    const localUser = {
      id: DB._nextId ? DB._nextId.users++ : 'usr-org-' + Date.now(),
      name: _orgState.fullName,
      email: _orgState.email,
      password: _orgState.password,
      role: 'organizer',
      phone: _orgState.mobileNumber,
      avatar: initials,
      status: 'pending',
      // unapproved!
      joined: typeof today === 'function' ? today() : new Date().toISOString().slice(0, 10),
      organizerType: _orgState.organizerType,
      applicationRefNumber: result.referenceNumber,
    };
    if (window.DB && window.DB.users) {
      const existingIdx = DB.users.findIndex(
        user => user.email.toLowerCase() === localUser.email.toLowerCase()
      );
      if (existingIdx >= 0) DB.users[existingIdx] = localUser;
      else DB.users.push(localUser);
      DB.organizerApplications = DB.organizerApplications || [];
      DB.organizerApplications.push({
        referenceNumber: result.referenceNumber,
        userId: localUser.id,
        organizerType: _orgState.organizerType,
        status: 'Pending Verification',
        fullName: _orgState.fullName,
        email: _orgState.email,
        mobileNumber: _orgState.mobileNumber,
        submittedAt: result.submittedAt,
        decisionHistory: [
          {
            status: 'Pending Verification',
            comments: 'Application submitted',
            createdAt: result.submittedAt,
          },
        ],
      });
      if (typeof saveDB === 'function') saveDB();
    }
    _orgState.lastSubmittedRef = result.referenceNumber;

    // Render the exact required confirmation screen!
    renderSubmissionConfirmationModal(result.referenceNumber, result.submittedAt);
  }

  // ──────────────────────────────────────────────
  // EXACT CONFIRMATION MESSAGE & STATUS TRACKING
  // ──────────────────────────────────────────────

  function renderSubmissionConfirmationModal(refNumber, submittedAtDate) {
    const formattedDate = new Date(submittedAtDate || Date.now()).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    const modalHtml = \`
      <div style="padding:10px 0;line-height:1.6;">
        <div style="text-align:center;margin-bottom:18px;">
          <div style="font-size:44px;margin-bottom:10px;">🎉</div>
          <h2 style="margin:0 0 8px;font-size:1.35rem;font-weight:700;color:var(--text,#f8fafc);">
            Your Organizer Application Has Been Submitted Successfully!
          </h2>
        </div>

        <p style="font-size:14px;color:var(--text,#f8fafc);margin-bottom:14px;">
          Thank you for registering with EventFlow. Your application and submitted documents will be reviewed by our verification team. You will receive an email notification once the verification process is complete.
        </p>

        <p style="font-size:14px;color:var(--text,#f8fafc);margin-bottom:18px;">
          <strong>You will receive an approval email after your application has been successfully verified.</strong> Until approval, you can track your application status, but you cannot publish events or accept event bookings through EventFlow.
        </p>

        <div style="background:var(--surface2,#1a1e29);border:1px solid var(--border,#2d3748);border-radius:10px;padding:16px 20px;margin:20px 0;">
          <div style="font-size:15px;font-weight:700;color:var(--accent,#6366f1);margin-bottom:10px;">
            Application Status: <span style="color:var(--yellow,#eab308);">Pending Verification</span>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:13px;">
            <div>
              <span style="color:var(--text2,#888);display:block;">Application Reference Number:</span>
              <strong style="font-family:monospace;font-size:14px;color:var(--text,#f8fafc);" id="app-ref-display">\${escapeHtml(
                refNumber
              )}</strong>
            </div>
            <div>
              <span style="color:var(--text2,#888);display:block;">Submission Date:</span>
              <strong style="color:var(--text,#f8fafc);">\${formattedDate}</strong>
            </div>
          </div>
        </div>

        <div style="display:flex;justify-content:center;gap:12px;margin-top:24px;">
          <button type="button" class="btn btn-primary" id="btn-track-status" onclick="window.EventFlowOrganizerRegistration.trackOrganizerApplicationStatus('\${escapeHtml(
            refNumber
          )}')">
            🔍 Track Application Status
          </button>
          <button type="button" class="btn btn-ghost" onclick="closeModal();if(typeof showPage==='function'){showPage('landing');}">
            Back to Home
          </button>
        </div>
      </div>
    \`;
    openModal('Application Submitted', modalHtml, [], false);
  }
  async function trackOrganizerApplicationStatus(referenceOrEmail) {
    const term =
      referenceOrEmail ||
      _orgState.lastSubmittedRef ||
      prompt('Enter Application Reference Number or Email:');
    if (!term) return;
    let appData = null;
    try {
      const res = await (globalThis.window?.EventFlowFetch || fetch)(
        \`\${getBackendBase()}/api/auth/organizer-application/\${encodeURIComponent(term)}\`
      );
      if (res.ok) {
        appData = await res.json();
      }
    } catch (e) {
      console.warn('API status lookup failed:', e);
    }
    if (!appData && window.DB && window.DB.organizerApplications) {
      appData = DB.organizerApplications.find(
        a =>
          a.referenceNumber.toLowerCase() === term.toLowerCase() ||
          a.email.toLowerCase() === term.toLowerCase()
      );
    }
    if (!appData) {
      appData = {
        referenceNumber: term,
        status: 'Pending Verification',
        organizerType: _orgState.organizerType || 'Registered Company / Event Agency',
        fullName: _orgState.fullName || 'Organizer Applicant',
        submittedAt: new Date().toISOString(),
        decisionHistory: [
          {
            status: 'Pending Verification',
            comments: 'Application queued for review',
            createdAt: new Date().toISOString(),
          },
        ],
      };
    }
    const statusBadgeClass =
      {
        'Pending Verification': 'badge-yellow',
        'Under Review': 'badge-blue',
        'Additional Information Required': 'badge-yellow',
        Approved: 'badge-green',
        Rejected: 'badge-red',
        Suspended: 'badge-red',
      }[appData.status] || 'badge-blue';
    const modalHtml = \`
      <div style="padding:10px 0;">
        <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:12px;border-bottom:1px solid var(--border,#2d3748);margin-bottom:16px;">
          <div>
            <div style="font-size:12px;color:var(--text2,#888);">Application Reference</div>
            <strong style="font-size:16px;font-family:monospace;color:var(--text,#f8fafc);">\${escapeHtml(
              appData.referenceNumber
            )}</strong>
          </div>
          <div>
            <span class="badge \${statusBadgeClass}" style="font-size:13px;padding:4px 12px;">\${
      appData.status
    }</span>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:13px;background:var(--surface2,#1a1e29);padding:14px;border-radius:8px;margin-bottom:18px;">
          <div><span style="color:var(--text2,#888);">Applicant Name:</span> <strong style="color:var(--text,#f8fafc);">\${escapeHtml(
            appData.fullName
          )}</strong></div>
          <div><span style="color:var(--text2,#888);">Organizer Type:</span> <strong style="color:var(--text,#f8fafc);">\${escapeHtml(
            appData.organizerType
          )}</strong></div>
          <div><span style="color:var(--text2,#888);">Submitted Date:</span> <strong style="color:var(--text,#f8fafc);">\${new Date(
            appData.submittedAt || Date.now()
          ).toLocaleDateString()}</strong></div>
          <div><span style="color:var(--text2,#888);">Publishing &amp; Booking Access:</span> <strong style="color:\${
            appData.status === 'Approved' ? 'var(--green,#10b981)' : 'var(--yellow,#eab308)'
          };">\${
      appData.status === 'Approved' ? 'Enabled ✓' : 'Blocked (Requires Approval)'
    }</strong></div>
        </div>

        \${
          appData.additionalInfoRequest
            ? \`
          <div style="background:rgba(234,179,8,0.1);border:1px solid var(--yellow,#eab308);border-radius:8px;padding:12px 14px;margin-bottom:16px;">
            <strong style="color:var(--yellow,#eab308);display:block;margin-bottom:4px;">⚠️ Action Required: Additional Information Requested</strong>
            <p style="font-size:13px;margin:0;color:var(--text,#f8fafc);">\${escapeHtml(
              appData.additionalInfoRequest
            )}</p>
          </div>
        \`
            : ''
        }

        \${
          appData.status === 'Rejected' && appData.rejectionReason
            ? \`
          <div style="background:rgba(239,68,68,0.1);border:1px solid var(--red,#ef4444);border-radius:8px;padding:12px 14px;margin-bottom:16px;">
            <strong style="color:var(--red,#ef4444);display:block;margin-bottom:4px;">Application Not Approved</strong>
            <p style="font-size:13px;margin:0;color:var(--text,#f8fafc);">Reason: \${escapeHtml(
              appData.rejectionReason
            )}</p>
          </div>
        \`
            : ''
        }

        <div style="margin-bottom:18px;">
          <div style="font-weight:700;font-size:13px;color:var(--text,#f8fafc);margin-bottom:10px;">Verification Timeline &amp; Decision History</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            \${(
              appData.decisionHistory || [
                {
                  status: appData.status,
                  comments: 'Application processed',
                  createdAt: appData.submittedAt,
                },
              ]
            )
              .map(
                (h, i) => \`
              <div style="display:flex;align-items:flex-start;gap:10px;font-size:13px;">
                <div style="width:18px;height:18px;border-radius:50%;background:var(--accent,#6366f1);color:#fff;display:flex;align-items:center;justify-content:center;font-size:10px;margin-top:2px;">•</div>
                <div style="flex:1;">
                  <div style="display:flex;justify-content:space-between;">
                    <strong style="color:var(--text,#f8fafc);">\${h.status}</strong>
                    <span style="color:var(--text2,#888);font-size:11px;">\${new Date(
                      h.createdAt || Date.now()
                    ).toLocaleDateString()}</span>
                  </div>
                  \${
                    h.reason
                      ? \`<div style="color:var(--red,#ef4444);font-size:12px;">Reason: \${escapeHtml(
                          h.reason
                        )}</div>\`
                      : ''
                  }
                  \${
                    h.additionalInfoRequest
                      ? \`<div style="color:var(--yellow,#eab308);font-size:12px;">Requested: \${escapeHtml(
                          h.additionalInfoRequest
                        )}</div>\`
                      : ''
                  }
                  \${
                    h.comments
                      ? \`<div style="color:var(--text2,#888);font-size:12px;">\${escapeHtml(
                          h.comments
                        )}</div>\`
                      : ''
                  }
                </div>
              </div>
            \`
              )
              .join('')}
          </div>
        </div>

        <div style="font-size:12px;color:var(--text2,#888);padding:10px;background:var(--surface2,#1a1e29);border-radius:6px;line-height:1.4;">
          ℹ️ <strong>Platform Policy:</strong> Until approval, you can track your application status, but you cannot publish events or accept event bookings through EventFlow.
        </div>
      </div>
    \`;
    openModal(
      'Application Status Tracking',
      modalHtml,
      [
        {
          lbl: 'Close',
          cls: 'btn-ghost',
          fn: 'closeModal()',
        },
      ],
      false
    );
  }

  // ════════════════════════════════════════════════
  // 4. REVIEWER ACTIONS MODAL
  // ════════════════════════════════════════════════

  async function openReviewerModal(referenceNumber) {
    let app = null;
    try {
      const token = (window.CU && window.CU.token) || '';
      const res = await (globalThis.window?.EventFlowFetch || fetch)(
        \`\${getBackendBase()}/api/auth/organizer-application/\${encodeURIComponent(referenceNumber)}\`,
        {
          headers: token
            ? {
                Authorization: \`Bearer \${token}\`,
              }
            : {},
        }
      );
      if (res.ok) app = await res.json();
    } catch (e) {}
    if (!app && window.DB && window.DB.organizerApplications) {
      app = DB.organizerApplications.find(
        a => a.referenceNumber.toLowerCase() === referenceNumber.toLowerCase()
      );
    }
    if (!app) {
      toast('Application record not found', 'error');
      return;
    }
    const modalHtml = \`
      <div style="padding:10px 0;">
        <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:12px;border-bottom:1px solid var(--border,#2d3748);margin-bottom:14px;">
          <div>
            <div style="font-size:12px;color:var(--text2,#888);">Application Ref: <strong>\${escapeHtml(
              app.referenceNumber
            )}</strong></div>
            <div style="font-size:16px;font-weight:700;color:var(--text,#f8fafc);">\${escapeHtml(
              app.fullName
            )} (\${escapeHtml(app.organizerType)})</div>
          </div>
          <div>
            <span class="badge badge-purple">\${app.status}</span>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Review Decision *</label>
          <select class="form-control" id="review-decision-status" onchange="
            const s = this.value;
            g('review-reason-wrap').style.display = (s === 'Rejected' || s === 'Suspended') ? '' : 'none';
            g('review-addinfo-wrap').style.display = (s === 'Additional Information Required') ? '' : 'none';
          ">
            <option value="Under Review" \${
              app.status === 'Under Review' ? 'selected' : ''
            }>Under Review</option>
            <option value="Additional Information Required" \${
              app.status === 'Additional Information Required' ? 'selected' : ''
            }>Additional Information Required</option>
            <option value="Approved" \${
              app.status === 'Approved' ? 'selected' : ''
            }>Approved (Activate Account)</option>
            <option value="Rejected" \${
              app.status === 'Rejected' ? 'selected' : ''
            }>Rejected</option>
            <option value="Suspended" \${
              app.status === 'Suspended' ? 'selected' : ''
            }>Suspended</option>
          </select>
        </div>

        <div class="form-group" id="review-reason-wrap" style="display:\${
          app.status === 'Rejected' || app.status === 'Suspended' ? '' : 'none'
        };">
          <label class="form-label">Reason * (Mandatory for Reject / Suspend)</label>
          <textarea class="form-control" id="review-reason" placeholder="Provide clear reason for decision..."></textarea>
        </div>

        <div class="form-group" id="review-addinfo-wrap" style="display:\${
          app.status === 'Additional Information Required' ? '' : 'none'
        };">
          <label class="form-label">Additional Information Requested *</label>
          <textarea class="form-control" id="review-addinfo" placeholder="Specify which documents or clarifications are required..."></textarea>
        </div>

        <div class="form-group">
          <label class="form-label">Reviewer Comments</label>
          <input class="form-control" id="review-comments" placeholder="Internal or applicant comments">
        </div>

        <div style="font-size:12px;color:var(--text2,#888);margin-top:10px;">
          Note: If email delivery is not configured, decision is saved and the notification restriction is recorded.
        </div>
      </div>
    \`;
    openModal(
      'Review Organizer Application',
      modalHtml,
      [
        {
          lbl: 'Cancel',
          cls: 'btn-ghost',
          fn: 'closeModal()',
        },
        {
          lbl: 'Save Decision',
          cls: 'btn-primary',
          fn: \`window.EventFlowOrganizerRegistration.submitReviewDecision('\${escapeHtml(
            app.referenceNumber
          )}')\`,
        },
      ],
      false
    );
  }
  async function submitReviewDecision(refNumber) {
    const status = v('review-decision-status');
    const reason = v('review-reason');
    const additionalInfoRequest = v('review-addinfo');
    const comments = v('review-comments');
    if ((status === 'Rejected' || status === 'Suspended') && !reason.trim()) {
      toast(\`A reason is required when setting status to \${status}\`, 'error');
      return;
    }
    if (status === 'Additional Information Required' && !additionalInfoRequest.trim()) {
      toast('Please specify what additional information is requested', 'error');
      return;
    }
    try {
      const token = (window.CU && window.CU.token) || '';
      const res = await (globalThis.window?.EventFlowFetch || fetch)(
        \`\${getBackendBase()}/api/auth/organizer-application/\${encodeURIComponent(
          refNumber
        )}/review\`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(token
              ? {
                  Authorization: \`Bearer \${token}\`,
                }
              : {}),
          },
          body: JSON.stringify({
            status,
            reason,
            additionalInfoRequest,
            comments,
          }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Review failed');
    } catch (e) {
      console.warn('Backend review API offline, updating local state:', e.message);
    }

    // Update local DB
    if (window.DB && window.DB.organizerApplications) {
      const app = DB.organizerApplications.find(
        a => a.referenceNumber.toLowerCase() === refNumber.toLowerCase()
      );
      if (app) {
        app.status = status;
        app.decisionHistory = app.decisionHistory || [];
        app.decisionHistory.push({
          status,
          reason,
          additionalInfoRequest,
          comments,
          createdAt: new Date().toISOString(),
        });
        const user = DB.users.find(u => u.id === app.userId || u.email === app.email);
        if (user) {
          user.status =
            status === 'Approved'
              ? 'active'
              : status === 'Rejected' || status === 'Suspended'
              ? 'suspended'
              : 'pending';
        }
        if (typeof saveDB === 'function') saveDB();
      }
    }
    closeModal();
    toast(\`Application \${status} successfully. Email delivery status: logged.\`, 'success');
    if (typeof refreshUserManagement === 'function') refreshUserManagement();
    else if (typeof renderPage === 'function') renderPage();
  }

  // ════════════════════════════════════════════════
  // EXPORT TO WINDOW
  // ════════════════════════════════════════════════

  window.EventFlowOrganizerRegistration = {
    openRegisterModal,
    openAttendeeRegisterForm,
    submitAttendeeForm,
    openClientRegisterForm,
    submitClientForm,
    triggerClientVerification,
    confirmClientVerification,
    clientContactChanged,
    cancelContactVerification,
    getClientState: () => _clientState,
    openOrganizerRegisterStep,
    nextOrganizerStep1,
    nextOrganizerStep2,
    renderStep1Modal,
    renderStep2Modal,
    renderStep3Modal,
    triggerEmailVerify,
    confirmEmailCode,
    triggerMobileVerify,
    confirmMobileCode,
    handleTypeChange,
    handleFileUpload,
    handleDeclarationChange,
    submitOrganizerApplication,
    renderSubmissionConfirmationModal,
    trackOrganizerApplicationStatus,
    openReviewerModal,
    submitReviewDecision,
    getState: () => _orgState,
    resetState: () => {
      _orgState = defaultOrgState();
    },
  };

  // Wire global openRegisterModal so clicking "Create New Account" anywhere triggers the 3-role selector!
  window.openRegisterModal = openRegisterModal;
})();
`,k=`/* ========================================================================\r
   EventFlow — Simulated Payment Checkout  (DEMO ONLY)\r
   Intercepts regForEvent / completeDemoPayment and shows a professional\r
   checkout UI with Card + UPI options.\r
   No real payment gateway is used. No card numbers or CVVs are stored.\r
   ======================================================================== */\r
(() => {\r
  let checkoutSession = null;\r
  const approvalRequestsInFlight = new Set();\r
  const pcoById = id => document.getElementById(id);\r
  const pcoEsc = v =>\r
    String(v ?? '').replace(\r
      /[&<>"']/g,\r
      c =>\r
        ({\r
          '&': '&amp;',\r
          '<': '&lt;',\r
          '>': '&gt;',\r
          '"': '&quot;',\r
          "'": '&#39;',\r
        }[c])\r
    );\r
  function pcoRandomDigits(length) {\r
    const values = new Uint32Array(length);\r
    if (globalThis.crypto?.getRandomValues) globalThis.crypto.getRandomValues(values);\r
    else\r
      for (let index = 0; index < length; index++)\r
        values[index] = Math.floor(Math.random() * 0xffffffff);\r
    return Array.from(values, value => String(value % 10)).join('');\r
  }\r
  function pcoReference() {\r
    if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();\r
    return \`demo-\${Date.now().toString(36)}-\${pcoRandomDigits(12)}\`;\r
  }\r
\r
  /* Luhn algorithm */\r
  function luhn(num) {\r
    const d = num.replace(/\\D/g, '');\r
    let sum = 0;\r
    let alt = false;\r
    for (let i = d.length - 1; i >= 0; i--) {\r
      let n = parseInt(d[i], 10);\r
      if (alt) {\r
        n *= 2;\r
        if (n > 9) n -= 9;\r
      }\r
      sum += n;\r
      alt = !alt;\r
    }\r
    return d.length >= 13 && sum % 10 === 0;\r
  }\r
\r
  /* Validate MM/YY */\r
  function validExpiry(val) {\r
    const m = val.match(/^(\\d{2})\\/(\\d{2})$/);\r
    if (!m) return false;\r
    const mm = parseInt(m[1], 10);\r
    const yy = parseInt(m[2], 10);\r
    if (mm < 1 || mm > 12) return false;\r
    const now = new Date();\r
    const cy = 2000 + yy;\r
    return cy > now.getFullYear() || (cy === now.getFullYear() && mm >= now.getMonth() + 1);\r
  }\r
\r
  /* Validate UPI ID */\r
  function validUpi(upi) {\r
    return /^[a-zA-Z0-9._-]{2,256}@[a-zA-Z][a-zA-Z]{2,64}$/.test(upi.trim());\r
  }\r
\r
  /* Card brand */\r
  function cardBrand(num) {\r
    const n = num.replace(/\\D/g, '');\r
    if (/^4/.test(n)) return 'Visa';\r
    if (/^5[1-5]/.test(n)) return 'Mastercard';\r
    if (/^6/.test(n)) return 'RuPay';\r
    if (/^3[47]/.test(n)) return 'Amex';\r
    return '';\r
  }\r
\r
  /* ------------------------------------------------------------------ */\r
  /* Checkout HTML                                                        */\r
  /* ------------------------------------------------------------------ */\r
  function checkoutHTML(event, price) {\r
    const isFree = price === 0;\r
    const priceStr = isFree ? 'Free' : '\\u20b9' + Number(price).toLocaleString('en-IN');\r
    const eEmoji = pcoEsc(event.emoji || '\\u{1F3AB}');\r
    const eTitle = pcoEsc(event.title || 'Event');\r
    const eDate = pcoEsc(event.date || '');\r
    const eVenue = pcoEsc(event.venue || '');\r
    return \`\r
<div class="pco-wrap" id="pco-wrap">\r
  <div class="pco-demo-notice">\r
    <span class="pco-demo-badge">&#x1F512; DEMO MODE</span>\r
    <span>Simulated payment &#x2014; no real money transferred. No card data stored.</span>\r
  </div>\r
\r
  <!-- STEP 1: Form -->\r
  <div id="pco-step-form">\r
    <div class="pco-order-summary">\r
      <div class="pco-order-event">\r
        <span class="pco-order-emoji">\${eEmoji}</span>\r
        <div class="pco-order-info">\r
          <div class="pco-order-title">\${eTitle}</div>\r
          <div class="pco-order-meta">&#x1F4C5; \${eDate}\${\r
      eVenue ? ' &middot; &#x1F4CD; ' + eVenue : ''\r
    }</div>\r
        </div>\r
      </div>\r
      <div class="pco-price-rows">\r
        <div class="pco-price-row"><span>\${pcoEsc(\r
          event.paymentLabel || 'Ticket (1×)'\r
        )}</span><span>\${priceStr}</span></div>\r
        <div class="pco-price-row"><span>Platform fee</span><span>\\u20b90</span></div>\r
        <div class="pco-price-row pco-price-total"><span>Total</span><span>\${priceStr}</span></div>\r
      </div>\r
    </div>\r
\r
    \${\r
      isFree\r
        ? '<div class="pco-free-notice">&#x2705; This is a free event &#x2014; no payment required!</div>'\r
        : \`\r
    <div class="pco-method-tabs">\r
      <button class="pco-method-tab active" id="tab-card" onclick="pcoSwitchTab('card')" type="button">&#x1F4B3; Debit / Credit Card</button>\r
      <button class="pco-method-tab" id="tab-upi" onclick="pcoSwitchTab('upi')" type="button">&#x1F4F1; UPI</button>\r
    </div>\r
\r
    <div id="pco-panel-card" class="pco-panel">\r
      <div class="pco-field-group">\r
        <label class="pco-label" for="pco-holder">Cardholder Name</label>\r
        <input class="pco-input" id="pco-holder" placeholder="As on card" autocomplete="cc-name" maxlength="60"/>\r
        <span class="pco-err" id="pco-holder-err">Enter the name as printed on the card.</span>\r
      </div>\r
      <div class="pco-field-group">\r
        <label class="pco-label" for="pco-number">Card Number</label>\r
        <div class="pco-input-row">\r
          <input class="pco-input pco-mono" id="pco-number" placeholder="XXXX XXXX XXXX XXXX"\r
            autocomplete="cc-number" inputmode="numeric" maxlength="19"\r
            oninput="pcoFmtCard(this)"/>\r
          <span class="pco-card-brand" id="pco-brand">&#x1F4B3;</span>\r
        </div>\r
        <span class="pco-err" id="pco-number-err">Enter a valid 13&#x2013;16 digit card number.</span>\r
      </div>\r
      <div class="pco-row-2">\r
        <div class="pco-field-group">\r
          <label class="pco-label" for="pco-expiry">Expiry (MM/YY)</label>\r
          <input class="pco-input pco-mono" id="pco-expiry" placeholder="MM/YY"\r
            autocomplete="cc-exp" inputmode="numeric" maxlength="5"\r
            oninput="pcoFmtExpiry(this)"/>\r
          <span class="pco-err" id="pco-expiry-err">Enter a valid, non-expired date.</span>\r
        </div>\r
        <div class="pco-field-group">\r
          <label class="pco-label" for="pco-cvv">CVV</label>\r
          <div class="pco-input-row">\r
            <input class="pco-input pco-mono" id="pco-cvv" placeholder="&bull;&bull;&bull;"\r
              autocomplete="off" inputmode="numeric" maxlength="4" type="password"/>\r
            <span class="pco-cvv-tip" title="3-digit code on back of card (4 for Amex)">?</span>\r
          </div>\r
          <span class="pco-err" id="pco-cvv-err">Enter the 3 or 4 digit CVV.</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div id="pco-panel-upi" class="pco-panel" style="display:none">\r
      <div class="pco-upi-scan">\r
        <h3>Scan the UPI QR code</h3>\r
        <div class="pco-upi-qr" id="pco-upi-qr" aria-label="Demo UPI payment QR code"></div>\r
        <strong>\${priceStr}</strong>\r
        <p>This demo QR identifies your checkout. No money is transferred. Use the button below to simulate UPI confirmation.</p>\r
      </div>\r
      <div class="pco-field-group">\r
        <label class="pco-label" for="pco-upi">UPI ID (optional for QR checkout)</label>\r
        <input class="pco-input" id="pco-upi" placeholder="yourname@upi"\r
          autocomplete="off" inputmode="email" maxlength="100"/>\r
        <span class="pco-err" id="pco-upi-err">Enter a valid UPI ID (e.g. name@okaxis).</span>\r
      </div>\r
      <div class="pco-upi-apps">\r
        <button class="pco-upi-app" onclick="pcoFillUpi('gpay')" type="button" title="Google Pay">GPay</button>\r
        <button class="pco-upi-app" onclick="pcoFillUpi('phonepe')" type="button" title="PhonePe">PhonePe</button>\r
        <button class="pco-upi-app" onclick="pcoFillUpi('paytm')" type="button" title="Paytm">Paytm</button>\r
        <button class="pco-upi-app" onclick="pcoFillUpi('bhim')" type="button" title="BHIM">BHIM</button>\r
      </div>\r
      <p class="pco-upi-hint">Tap an app button to auto-fill a sample UPI ID for testing.</p>\r
    </div>\r
    \`\r
    }\r
\r
    <button class="pco-pay-btn" id="pco-pay-btn" onclick="pcoSubmitPayment()" type="button">\r
      \${isFree ? '&#x2705; Confirm Registration' : '&#x1F512; Pay ' + priceStr}\r
    </button>\r
    <p class="pco-secure-note">&#x1F512; Simulated checkout &mdash; no real payment processed &mdash; card details not stored</p>\r
  </div>\r
\r
  <div id="pco-step-otp" style="display:none" class="pco-state-panel">\r
    <div class="pco-state-title">Verify your card payment</div>\r
    <p class="pco-state-sub" id="pco-otp-summary"></p>\r
    <label class="pco-label" for="pco-otp">6-digit OTP</label>\r
    <input class="pco-input pco-mono pco-otp-input" id="pco-otp" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="Enter OTP" onkeydown="if(event.key==='Enter')pcoVerifyOtp()" />\r
    <p class="pco-demo-code">Demo OTP: <strong id="pco-demo-otp"></strong> · expires in 5 minutes</p>\r
    <span class="pco-err" id="pco-otp-err" role="alert"></span>\r
    <button class="pco-pay-btn" id="pco-verify-btn" type="button" onclick="pcoVerifyOtp()">Verify OTP &amp; Pay \${priceStr}</button>\r
    <button class="pco-btn-ghost" type="button" onclick="pcoResendOtp()">Resend OTP</button>\r
    <button class="pco-btn-ghost" type="button" onclick="closeModal()">Cancel Checkout</button>\r
  </div>\r
\r
  <!-- Processing -->\r
  <div id="pco-step-processing" style="display:none" class="pco-state-panel">\r
    <div class="pco-spinner"></div>\r
    <div class="pco-state-title" id="pco-proc-title">Processing payment&hellip;</div>\r
    <div class="pco-state-sub" id="pco-proc-sub">Please wait, do not close this window.</div>\r
  </div>\r
\r
  <!-- STEP 3: Result -->\r
  <div id="pco-step-result" style="display:none" class="pco-state-panel">\r
    <div class="pco-result-icon" id="pco-result-icon"></div>\r
    <div class="pco-state-title" id="pco-result-title"></div>\r
    <div class="pco-state-sub" id="pco-result-sub"></div>\r
    <div id="pco-result-detail" class="pco-result-detail"></div>\r
    <div class="pco-result-actions" id="pco-result-actions"></div>\r
  </div>\r
</div>\`;\r
  }\r
\r
  /* ------------------------------------------------------------------ */\r
  /* Global helpers exposed on window                                     */\r
  /* ------------------------------------------------------------------ */\r
  window.pcoSwitchTab = function (tab) {\r
    const card = pcoById('pco-panel-card');\r
    const upi = pcoById('pco-panel-upi');\r
    const tCard = pcoById('tab-card');\r
    const tUpi = pcoById('tab-upi');\r
    if (!card) return;\r
    const isCard = tab === 'card';\r
    card.style.display = isCard ? '' : 'none';\r
    upi.style.display = isCard ? 'none' : '';\r
    tCard && tCard.classList.toggle('active', isCard);\r
    tUpi && tUpi.classList.toggle('active', !isCard);\r
    const wrap = pcoById('pco-wrap');\r
    if (wrap) wrap.dataset.pcoMethod = tab;\r
    const pay = pcoById('pco-pay-btn');\r
    if (pay)\r
      pay.textContent = isCard ? 'Continue to card verification' : 'Verify & Pay with Demo UPI';\r
    if (!isCard) renderUpiQr();\r
  };\r
  window.pcoFmtCard = function (input) {\r
    const raw = input.value.replace(/\\D/g, '').slice(0, 16);\r
    input.value = raw.replace(/(.{4})/g, '$1 ').trim();\r
    const element = pcoById('pco-brand');\r
    if (element) element.textContent = cardBrand(raw) || '\\u{1F4B3}';\r
  };\r
  window.pcoFmtExpiry = function (input) {\r
    let v = input.value.replace(/\\D/g, '').slice(0, 4);\r
    if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2);\r
    input.value = v;\r
  };\r
  window.pcoFillUpi = function (app) {\r
    const samples = {\r
      gpay: 'demo.user@okicici',\r
      phonepe: 'demo.user@ybl',\r
      paytm: 'demo.user@paytm',\r
      bhim: 'demo.user@upi',\r
    };\r
    const element = pcoById('pco-upi');\r
    if (element) {\r
      element.value = samples[app] || '';\r
      element.focus();\r
      pcoClrErr('pco-upi-err');\r
    }\r
  };\r
  function pcoShowErr(id, msg) {\r
    const element = pcoById(id);\r
    if (!element) return;\r
    element.textContent = msg;\r
    element.classList.add('visible');\r
    const inp =\r
      element.previousElementSibling?.querySelector('input') || element.previousElementSibling;\r
    inp && inp.classList && inp.classList.add('pco-input-err');\r
  }\r
  function pcoClrErr(id) {\r
    const element = pcoById(id);\r
    if (!element) return;\r
    element.classList.remove('visible');\r
    const inp =\r
      element.previousElementSibling?.querySelector('input') || element.previousElementSibling;\r
    inp && inp.classList && inp.classList.remove('pco-input-err');\r
  }\r
  window.pcoClrErr = pcoClrErr;\r
  function pcoValidate(method) {\r
    let ok = true;\r
    if (method === 'card') {\r
      const holder = (pcoById('pco-holder')?.value || '').trim();\r
      const number = (pcoById('pco-number')?.value || '').replace(/\\s/g, '');\r
      const expiry = pcoById('pco-expiry')?.value || '';\r
      const cvv = (pcoById('pco-cvv')?.value || '').trim();\r
      if (!holder || holder.length < 2) {\r
        pcoShowErr('pco-holder-err', 'Enter the name as printed on the card.');\r
        ok = false;\r
      } else pcoClrErr('pco-holder-err');\r
      if (!luhn(number)) {\r
        pcoShowErr('pco-number-err', 'Enter a valid 13\\u201316 digit card number.');\r
        ok = false;\r
      } else pcoClrErr('pco-number-err');\r
      if (!validExpiry(expiry)) {\r
        pcoShowErr('pco-expiry-err', 'Enter a valid, non-expired date.');\r
        ok = false;\r
      } else pcoClrErr('pco-expiry-err');\r
      if (!/^\\d{3,4}$/.test(cvv)) {\r
        pcoShowErr('pco-cvv-err', 'Enter the 3 or 4 digit CVV.');\r
        ok = false;\r
      } else pcoClrErr('pco-cvv-err');\r
    }\r
    if (method === 'upi') {\r
      const upi = (pcoById('pco-upi')?.value || '').trim();\r
      if (upi && !validUpi(upi)) {\r
        pcoShowErr('pco-upi-err', 'Enter a valid UPI ID (e.g. name@okaxis).');\r
        ok = false;\r
      } else pcoClrErr('pco-upi-err');\r
    }\r
    return ok;\r
  }\r
  function showPanel(id) {\r
    ['pco-step-form', 'pco-step-otp', 'pco-step-processing', 'pco-step-result'].forEach(p => {\r
      const element = pcoById(p);\r
      if (element) element.style.display = p === id ? '' : 'none';\r
    });\r
  }\r
  function showProcessing(title, sub) {\r
    showPanel('pco-step-processing');\r
    const t = pcoById('pco-proc-title');\r
    if (t) t.textContent = title;\r
    const s = pcoById('pco-proc-sub');\r
    if (s) s.textContent = sub;\r
    const foot = document.getElementById('modal-foot');\r
    if (foot) foot.style.display = 'none';\r
  }\r
  function showResult({ success, icon, title, sub, detail, actions }) {\r
    showPanel('pco-step-result');\r
    const ri = pcoById('pco-result-icon');\r
    if (ri) {\r
      ri.textContent = icon;\r
      ri.className = 'pco-result-icon ' + (success ? 'pco-success' : 'pco-failure');\r
    }\r
    const rt = pcoById('pco-result-title');\r
    if (rt) rt.textContent = title;\r
    const rs = pcoById('pco-result-sub');\r
    if (rs) rs.textContent = sub;\r
    const rd = pcoById('pco-result-detail');\r
    if (rd) rd.innerHTML = detail || '';\r
    const ra = pcoById('pco-result-actions');\r
    if (ra) ra.innerHTML = actions || '';\r
  }\r
\r
  /* ------------------------------------------------------------------ */\r
  /* Submit handler                                                       */\r
  /* ------------------------------------------------------------------ */\r
  function isCurrentCheckout(session) {\r
    return (\r
      session === checkoutSession &&\r
      session.wrap === pcoById('pco-wrap') &&\r
      session.wrap.isConnected &&\r
      pcoById('modal-overlay')?.classList.contains('open')\r
    );\r
  }\r
  function renderUpiQr() {\r
    const target = pcoById('pco-upi-qr');\r
    const session = checkoutSession;\r
    if (!target || !session || !isCurrentCheckout(session)) return;\r
    const payload =\r
      'EVENTFLOW-DEMO-PAYMENT:' +\r
      JSON.stringify({\r
        reference: session.reference,\r
        amount: Number(session.wrap.dataset.pcoPrice),\r
        currency: 'INR',\r
      });\r
    target.innerHTML =\r
      typeof renderTicketQRCode === 'function'\r
        ? renderTicketQRCode(payload).replace('Ticket QR code', 'Demo UPI payment QR code')\r
        : '';\r
    if (!target.innerHTML)\r
      target.textContent =\r
        'QR preview unavailable. You can still confirm this demo UPI payment below.';\r
  }\r
  function clearCardDetails() {\r
    ['pco-holder', 'pco-number', 'pco-expiry', 'pco-cvv'].forEach(id => {\r
      const input = pcoById(id);\r
      if (input) input.value = '';\r
    });\r
  }\r
  function issueCardOtp(session) {\r
    session.otp = pcoRandomDigits(6);\r
    session.otpExpiresAt = Date.now() + 5 * 60 * 1000;\r
    pcoById('pco-demo-otp').textContent = session.otp;\r
    pcoById('pco-otp').value = '';\r
    pcoClrErr('pco-otp-err');\r
    pcoById('pco-otp').focus();\r
  }\r
  window.pcoResendOtp = function () {\r
    const session = checkoutSession;\r
    if (session && isCurrentCheckout(session) && session.stage === 'otp' && !session.pending)\r
      issueCardOtp(session);\r
  };\r
  window.pcoSubmitPayment = async function () {\r
    const session = checkoutSession;\r
    if (!session || !isCurrentCheckout(session)) {\r
      if (typeof toast === 'function')\r
        toast('Checkout session is unavailable. Close checkout and try again.', 'error');\r
      return;\r
    }\r
    if (session.pending || session.stage !== 'form') return;\r
    const wrap = session.wrap;\r
    const method = wrap.dataset.pcoMethod || 'card';\r
    const isFree = wrap.dataset.pcoFree === '1';\r
    if (!isFree && !['card', 'upi'].includes(method)) return;\r
    if (!isFree && !pcoValidate(method)) return;\r
    session.method = isFree ? 'free' : method;\r
    session.methodLabel = isFree\r
      ? 'Free'\r
      : method === 'card'\r
      ? 'Card ending ' + pcoById('pco-number').value.replace(/\\D/g, '').slice(-4)\r
      : 'UPI';\r
    if (!isFree && method === 'card') {\r
      session.pending = true;\r
      session.stage = 'preparing';\r
      showProcessing(\r
        'Preparing card verification…',\r
        'Creating a secure simulated verification session.'\r
      );\r
      await new Promise(resolve => setTimeout(resolve, 180));\r
      if (!isCurrentCheckout(session)) return;\r
      session.pending = false;\r
      session.stage = 'otp';\r
      showPanel('pco-step-otp');\r
      pcoById('pco-otp-summary').textContent =\r
        (wrap.dataset.pcoTitle || 'Event') +\r
        ' · ' +\r
        session.methodLabel +\r
        ' · \\u20b9' +\r
        Number(wrap.dataset.pcoPrice).toLocaleString('en-IN');\r
      clearCardDetails();\r
      issueCardOtp(session);\r
      return;\r
    }\r
    clearCardDetails();\r
    session.stage = 'authorized';\r
    return completeAuthorizedPayment(session);\r
  };\r
  window.pcoVerifyOtp = function () {\r
    const session = checkoutSession;\r
    if (!session || !isCurrentCheckout(session) || session.stage !== 'otp' || session.pending)\r
      return;\r
    const code = (pcoById('pco-otp')?.value || '').trim();\r
    if (Date.now() >= session.otpExpiresAt) {\r
      pcoShowErr('pco-otp-err', 'OTP expired. Use Resend OTP to get a new code.');\r
      return;\r
    }\r
    if (!/^\\d{6}$/.test(code) || code !== session.otp) {\r
      pcoShowErr('pco-otp-err', 'Incorrect OTP. Enter the 6-digit demo code shown above.');\r
      return;\r
    }\r
    session.otp = '';\r
    pcoById('pco-otp').value = '';\r
    session.stage = 'authorized';\r
    return completeAuthorizedPayment(session);\r
  };\r
  async function completeAuthorizedPayment(session) {\r
    if (!isCurrentCheckout(session) || session.pending || session.stage !== 'authorized') return;\r
    session.pending = true;\r
    session.stage = 'processing';\r
    const wrap = session.wrap;\r
    const price = Number(wrap.dataset.pcoPrice);\r
    const title = wrap.dataset.pcoTitle || 'Event';\r
    const isFree = wrap.dataset.pcoFree === '1';\r
    const regId = wrap.dataset.pcoRegId || '';\r
    showProcessing(\r
      isFree ? 'Confirming registration\\u2026' : 'Verifying payment\\u2026',\r
      'Please wait for confirmation.'\r
    );\r
    try {\r
      const custom = typeof session.onAuthorize === 'function';\r
      const data = custom\r
        ? await session.onAuthorize({\r
            method: session.method,\r
            amount: price,\r
          })\r
        : regId\r
        ? await pcoDoMakePayment(regId, price, session.method)\r
        : await pcoDoRegister(\r
            wrap.dataset.pcoEventId,\r
            session.method,\r
            price,\r
            isFree ? 'free' : 'standard'\r
          );\r
      if (!isCurrentCheckout(session)) return;\r
      if (!custom && !isFree && (regId ? data?.status : data?.paymentStatus) !== 'completed')\r
        throw new Error('Payment is not confirmed yet. Check its current status before retrying.');\r
      session.stage = 'result';\r
      const transaction =\r
        data?.paymentId || data?.registrationId || data?.receipt?.receiptNumber || '';\r
      const awaitingReview =\r
        !custom &&\r
        wrap.dataset.pcoVisibility !== 'public' &&\r
        (data?.registration?.reviewStatus || data?.reviewStatus) !== 'approved';\r
      showResult({\r
        success: true,\r
        icon: '\\u2713',\r
        title: isFree\r
          ? awaitingReview\r
            ? 'Registration Submitted!'\r
            : 'Registration Approved!'\r
          : 'Payment Successful!',\r
        sub:\r
          session.successMessage ||\r
          (awaitingReview\r
            ? 'Your registration is awaiting organizer approval. Check My Tickets for updates.'\r
            : isFree\r
            ? 'Check My Tickets for your booking.'\r
            : 'Your payment has been verified.'),\r
        detail:\r
          '<div class="pco-txn-row"><span>Event</span><span>' +\r
          pcoEsc(title) +\r
          '</span></div>' +\r
          '<div class="pco-txn-row"><span>Amount paid</span><span>\\u20b9' +\r
          price.toLocaleString('en-IN') +\r
          '</span></div>' +\r
          '<div class="pco-txn-row"><span>Method</span><span>' +\r
          pcoEsc(isFree ? 'Free' : session.methodLabel) +\r
          '</span></div>' +\r
          (!custom\r
            ? '<div class="pco-txn-row"><span>Organizer review</span><span>' +\r
              (wrap.dataset.pcoVisibility === 'public'\r
                ? 'Not required (public event)'\r
                : awaitingReview\r
                ? 'Pending'\r
                : 'Approved') +\r
              '</span></div>'\r
            : '') +\r
          (transaction\r
            ? '<div class="pco-txn-row"><span>Transaction ID</span><span class="pco-mono">' +\r
              pcoEsc(transaction) +\r
              '</span></div>'\r
            : ''),\r
        actions:\r
          '<button class="pco-btn-primary" type="button" onclick="pcoCompleteCheckout()">' +\r
          pcoEsc(session.doneLabel || 'View My Tickets') +\r
          '</button>',\r
      });\r
    } catch (error) {\r
      if (!isCurrentCheckout(session)) return;\r
      session.stage = 'result';\r
      showResult({\r
        success: false,\r
        icon: '\\u00d7',\r
        title: 'Payment Not Confirmed',\r
        sub: error.message || 'Unable to confirm the payment. Please try again.',\r
        actions:\r
          '<button class="pco-btn-primary" type="button" onclick="pcoRetry()">Retry Payment</button><button class="pco-btn-ghost" type="button" onclick="closeModal()">Cancel</button>',\r
      });\r
    } finally {\r
      session.pending = false;\r
    }\r
  }\r
  window.pcoCompleteCheckout = function () {\r
    const session = checkoutSession;\r
    if (!session || !isCurrentCheckout(session) || session.stage !== 'result') return;\r
    if (typeof session.onDone === 'function') session.onDone();\r
    else {\r
      closeModal();\r
      goNav('my-tickets');\r
    }\r
  };\r
  window.pcoRetry = function () {\r
    const session = checkoutSession;\r
    if (!session || !isCurrentCheckout(session) || session.pending) return;\r
    session.stage = 'form';\r
    session.otp = '';\r
    clearCardDetails();\r
    showPanel('pco-step-form');\r
    const foot = pcoById('modal-foot');\r
    if (foot) foot.style.display = '';\r
    const payBtn = pcoById('pco-pay-btn');\r
    if (payBtn) payBtn.disabled = false;\r
  };\r
  function openCheckout(options) {\r
    const amount = Number(options.amount);\r
    const event = options.event || {};\r
    if (!Number.isFinite(amount) || amount < 0) throw new Error('Invalid checkout amount');\r
    openModal(\r
      'Checkout \\u2014 ' + (event.title || 'Event'),\r
      checkoutHTML(\r
        {\r
          ...event,\r
          paymentLabel: options.paymentLabel,\r
        },\r
        amount\r
      ),\r
      [],\r
      true\r
    );\r
    ['modal-box', 'modal-body'].forEach(id => {\r
      const element = pcoById(id);\r
      if (element) element.scrollTop = 0;\r
    });\r
    const wrap = pcoById('pco-wrap');\r
    if (!wrap) throw new Error('Checkout could not be opened');\r
    wrap.dataset.pcoEventId = String(options.eventId || event.id || event.eventId || '');\r
    wrap.dataset.pcoTitle = event.title || 'Event';\r
    wrap.dataset.pcoPrice = String(amount);\r
    wrap.dataset.pcoFree = amount === 0 ? '1' : '0';\r
    wrap.dataset.pcoMethod = 'card';\r
    wrap.dataset.pcoVisibility = event.visibility || '';\r
    if (options.registrationId) wrap.dataset.pcoRegId = String(options.registrationId);\r
    checkoutSession = {\r
      ...options,\r
      wrap,\r
      stage: 'form',\r
      pending: false,\r
      reference: pcoReference(),\r
    };\r
    const pay = pcoById('pco-pay-btn');\r
    if (pay && amount > 0) pay.textContent = 'Continue to card verification';\r
  }\r
  window.EventFlowCheckout = {\r
    open: openCheckout,\r
  };\r
\r
  /* ------------------------------------------------------------------ */\r
  /* Backend helpers                                                      */\r
  /* ------------------------------------------------------------------ */\r
  function pcoDoRegister(eventId, method, price, ticketType) {\r
    const e =\r
      (typeof DB !== 'undefined' &&\r
        DB.events.find(\r
          event => String(event.id) === String(eventId) || String(event.eventId) === String(eventId)\r
        )) ||\r
      (typeof attendeeEventCatalog !== 'undefined' &&\r
        attendeeEventCatalog.find(\r
          event => String(event.id) === String(eventId) || String(event.eventId) === String(eventId)\r
        ));\r
    if (!e) return Promise.reject(new Error('Event not found.'));\r
    const attendeeId = typeof CU !== 'undefined' && (CU.userId || CU.id);\r
    const isWl = e.status === 'full' && e.waitlistEnabled;\r
    const getBackendId = e.eventId\r
      ? Promise.resolve(e.eventId)\r
      : typeof apiGetEvents === 'function'\r
      ? apiGetEvents().then(evts => {\r
          const match = (Array.isArray(evts) ? evts : []).find(\r
            item =>\r
              String(item.name || item.title || '')\r
                .trim()\r
                .toLowerCase() ===\r
              String(e.title || '')\r
                .trim()\r
                .toLowerCase()\r
          );\r
          if (!match) throw new Error('Event not available in server catalog.');\r
          return match.eventId || match.id;\r
        })\r
      : Promise.reject(new Error('Event catalog unavailable.'));\r
    return getBackendId\r
      .then(id =>\r
        apiRegisterForEvent({\r
          attendeeId: String(attendeeId),\r
          eventId: String(id),\r
          ticketType: ticketType || (price === 0 ? 'free' : 'standard'),\r
          joinWaitlist: isWl,\r
        })\r
      )\r
      .then(regData => {\r
        const wrap = pcoById('pco-wrap');\r
        if (wrap && String(wrap.dataset.pcoEventId) === String(eventId))\r
          wrap.dataset.pcoRegId = regData.registrationId;\r
        if (\r
          price > 0 &&\r
          regData.status === 'pending_payment' &&\r
          (e.visibility !== 'private' || regData.reviewStatus === 'approved')\r
        ) {\r
          return apiMakePayment({\r
            registrationId: regData.registrationId,\r
            amount: price,\r
            paymentMethod: 'DEMO_PROVIDER',\r
            paymentDate: new Date().toISOString().split('T')[0],\r
          }).then(payment => {\r
            regData.paymentStatus = payment.status;\r
            regData.status =\r
              payment.registration?.status ||\r
              (payment.status === 'completed' ? 'registered' : regData.status);\r
            regData.verificationId = payment.registration?.verificationId;\r
            regData.qrCode = payment.registration?.qrCode;\r
            regData.reviewStatus = payment.registration?.reviewStatus || regData.reviewStatus;\r
            return regData;\r
          });\r
        }\r
        return regData;\r
      })\r
      .then(regData => {\r
        if (typeof DB !== 'undefined') {\r
          const n = DB._nextId.regs++;\r
          const ticketId = regData.ticketId || 'TKT-2026-' + String(n).padStart(3, '0');\r
          const seat =\r
            e.category === 'Conference'\r
              ? 'A-' +\r
                Math.floor(Math.random() * 200 + 1)\r
                  .toString()\r
                  .padStart(3, '0')\r
              : 'GA';\r
          const isWlReg = regData.status === 'waitlisted';\r
          const isPending = ['pending_approval', 'pending_payment'].includes(regData.status);\r
          const isConfirmed = regData.status === 'registered';\r
          const newReg = {\r
            id: n,\r
            registrationId: regData.registrationId,\r
            attendeeId: typeof CU !== 'undefined' ? CU.id : attendeeId,\r
            eventId: e.id,\r
            date: typeof today === 'function' ? today() : new Date().toISOString().split('T')[0],\r
            ticketId: isConfirmed ? regData.verificationId || ticketId : '',\r
            status: isConfirmed ? 'confirmed' : regData.status,\r
            payment:\r
              isWlReg || regData.status === 'pending_approval'\r
                ? 'not_due'\r
                : isPending\r
                ? 'pending'\r
                : price === 0\r
                ? 'free'\r
                : regData.paymentStatus || 'completed',\r
            amount: isWlReg || regData.status === 'pending_approval' ? 0 : price,\r
            checkedIn: false,\r
            seat: isConfirmed ? seat : '',\r
            verificationId: isConfirmed ? regData.verificationId || '' : '',\r
            reviewStatus: regData.reviewStatus,\r
          };\r
          DB.registrations.push(newReg);\r
          if (typeof attendeeRegistrationCatalog !== 'undefined') {\r
            const catIdx = attendeeRegistrationCatalog.findIndex(\r
              r => r.registrationId === regData.registrationId\r
            );\r
            if (catIdx >= 0)\r
              attendeeRegistrationCatalog[catIdx] = {\r
                ...attendeeRegistrationCatalog[catIdx],\r
                ...newReg,\r
              };\r
            else attendeeRegistrationCatalog.push(newReg);\r
          }\r
          if (isConfirmed || regData.status === 'pending_payment')\r
            e.registered = Math.min((e.registered || 0) + 1, e.capacity);\r
          if (e.registered >= e.capacity) e.status = 'full';\r
          if (typeof saveDB === 'function') saveDB();\r
        }\r
        return regData;\r
      });\r
  }\r
  function pcoDoMakePayment(registrationId, price, method) {\r
    return apiMakePayment({\r
      registrationId,\r
      amount: price,\r
      paymentMethod: 'DEMO_PROVIDER',\r
      paymentDate: new Date().toISOString().split('T')[0],\r
    }).then(payment => {\r
      if (typeof DB !== 'undefined') {\r
        const reg = DB.registrations.find(\r
          registration =>\r
            registration.registrationId === registrationId ||\r
            String(registration.id) === String(registrationId)\r
        );\r
        if (reg) {\r
          reg.payment = payment.status || 'completed';\r
          reg.status = 'confirmed';\r
          reg.reviewStatus = payment.registration?.reviewStatus || reg.reviewStatus;\r
          reg.verificationId =\r
            payment.registration?.verificationId || reg.verificationId || reg.ticketId;\r
        }\r
        if (typeof attendeeRegistrationCatalog !== 'undefined') {\r
          const catReg = attendeeRegistrationCatalog.find(\r
            r => r.registrationId === registrationId || String(r.id) === String(registrationId)\r
          );\r
          if (catReg) {\r
            catReg.payment = payment.status || 'completed';\r
            catReg.status = 'confirmed';\r
            catReg.reviewStatus = payment.registration?.reviewStatus || catReg.reviewStatus;\r
            catReg.verificationId =\r
              payment.registration?.verificationId || catReg.verificationId || catReg.ticketId;\r
          }\r
        }\r
        if (typeof saveDB === 'function') saveDB();\r
      }\r
      return payment;\r
    });\r
  }\r
\r
  /* ------------------------------------------------------------------ */\r
  /* Event Review Modal & Terms Workflow                                 */\r
  /* ------------------------------------------------------------------ */\r
  function eventReviewHTML(e) {\r
    const isWl = e.status === 'full' && e.waitlistEnabled;\r
    const isFree = e.price === 0;\r
    const priceStr = isFree ? 'Free' : '\\u20b9' + e.price;\r
    const remainingSeats = Math.max(0, (e.capacity || 100) - (e.registered || 0));\r
    const deadline = e.cancellationDeadline;\r
    const deadlineText = deadline\r
      ? \`\${deadline} (Cutoff at 23:59:59 IST)\`\r
      : 'No cancellation deadline configured (Eligible prior to event start)';\r
    const refundPolicyText = isFree\r
      ? 'Free Event: No ticket fee was charged. Cancellations release your seat with no monetary refund due.'\r
      : \`Eligible for a full simulated refund if cancelled on or before \${\r
          deadline || 'the event date'\r
        }. Cancellations after this deadline are strictly non-refundable per organizer policy.\`;\r
    const postponementRulesText =\r
      'If this event is postponed, rescheduled, or cancelled by the organizer, registered attendees will be notified promptly via email and the dashboard, and eligible simulated refunds will be credited automatically in accordance with EventFlow policy.';\r
    return \`\r
<div class="pco-review-wrap" id="pco-review-wrap" style="display:flex;flex-direction:column;gap:14px;max-height:75vh;overflow-y:auto;padding-right:4px">\r
  <!-- Event Overview Banner -->\r
  <div style="background:var(--surface2, #1e293b);border:1px solid var(--border, #334155);border-radius:10px;padding:14px;display:flex;align-items:center;gap:14px">\r
    <span style="font-size:36px;flex-shrink:0">\${pcoEsc(e.emoji || '\\u{1F3AB}')}</span>\r
    <div style="flex:1;min-width:0">\r
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;flex-wrap:wrap">\r
        <span class="badge badge-purple">\${pcoEsc(e.category || 'Event')}</span>\r
        <span class="badge badge-\${\r
          e.status === 'upcoming' || e.status === 'published'\r
            ? 'blue'\r
            : e.status === 'full'\r
            ? 'yellow'\r
            : 'gray'\r
        }">\${pcoEsc(e.status)}</span>\r
        \${\r
          isFree\r
            ? '<span class="badge badge-green">Free Admission</span>'\r
            : \`<span class="badge badge-blue">\\u20b9\${e.price}</span>\`\r
        }\r
      </div>\r
      <div style="font-weight:700;font-size:16px;line-height:1.3;color:var(--text, #fff)">\${pcoEsc(\r
        e.title\r
      )}</div>\r
      <div class="small" style="color:var(--text2, #94a3b8);margin-top:4px">&#x1F4C5; \${pcoEsc(\r
        e.date\r
      )} &middot; \${pcoEsc(e.time || 'TBA')}</div>\r
      <div class="small" style="color:var(--text2, #94a3b8)">&#x1F4CD; \${pcoEsc(e.venue)}\${\r
      e.city ? ', ' + pcoEsc(e.city) : ''\r
    }</div>\r
    </div>\r
  </div>\r
\r
  <!-- Event Details Grid -->\r
  \${\r
    e.visibility\r
      ? \`<p class="small" style="padding:10px;border:1px solid var(--border);border-radius:8px">\${\r
          e.visibility === 'private'\r
            ? 'Private event: request organizer approval first. Payment and ticket confirmation are available after approval.'\r
            : 'Public event: no organizer approval is needed. Complete payment to confirm a paid ticket, or register immediately for free admission.'\r
        }</p>\`\r
      : ''\r
  }\r
  <div style="border:1px solid var(--border, #334155);border-radius:8px;padding:10px 14px;background:var(--surface2, #1e293b)">\r
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:13px">\r
      <div>\r
        <div class="label" style="font-size:11px;margin-bottom:2px;color:var(--text3, #64748b)">Attendee</div>\r
        <div style="font-weight:600;color:var(--text, #fff)">\${pcoEsc(\r
          typeof CU !== 'undefined' ? CU.name : 'Attendee'\r
        )}</div>\r
        <div class="small" style="color:var(--text3, #64748b)">\${pcoEsc(\r
          typeof CU !== 'undefined' ? CU.email : ''\r
        )}</div>\r
      </div>\r
      <div>\r
        <div class="label" style="font-size:11px;margin-bottom:2px;color:var(--text3, #64748b)">Availability & Capacity</div>\r
        <div style="font-weight:600;color:\${\r
          isWl ? 'var(--yellow, #eab308)' : 'var(--green, #22c55e)'\r
        }">\r
          \${isWl ? 'Waitlist Only (Capacity Full)' : \`\${remainingSeats} seats available\`}\r
        </div>\r
        <div class="small" style="color:var(--text3, #64748b)">Total capacity: \${\r
          e.capacity || 100\r
        } attendees</div>\r
      </div>\r
    </div>\r
    \${\r
      e.description\r
        ? \`\r
      <div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--border, #334155)">\r
        <div class="label" style="font-size:11px;margin-bottom:2px;color:var(--text3, #64748b)">About This Event</div>\r
        <div style="font-size:12.5px;color:var(--text2, #94a3b8);line-height:1.5">\${pcoEsc(\r
          e.description\r
        )}</div>\r
      </div>\r
    \`\r
        : ''\r
    }\r
  </div>\r
\r
  <div style="display:flex;gap:10px;flex-wrap:wrap">\r
    <button type="button" class="btn btn-ghost" onclick="openEventPolicies('\${pcoEsc(\r
      e.eventId || e.id\r
    )}')">&#x1F4CB; Event Policies &amp; Rules</button>\r
    <button type="button" class="btn btn-ghost" onclick="openTermsConditions('\${pcoEsc(\r
      e.eventId || e.id\r
    )}')">&#x1F4C4; Terms and Conditions</button>\r
  </div>\r
\r
  <!-- Required Agreement Checkbox -->\r
  <div style="background:var(--surface3, #0f172a);border:1px solid var(--border, #334155);border-radius:8px;padding:12px;display:flex;align-items:flex-start;gap:10px">\r
    <input type="checkbox" id="pco-terms-check" style="width:18px;height:18px;margin-top:2px;cursor:pointer;accent-color:var(--accent, #38bdf8)" onchange="pcoToggleTerms(this.checked)">\r
    <label for="pco-terms-check" style="font-size:13px;line-height:1.4;cursor:pointer;color:var(--text, #fff);font-weight:500">\r
      I have reviewed the event details and agree to the <strong>Terms & Conditions</strong>, <strong>Cancellation Policy</strong>, and <strong>Event Rules</strong>.\r
    </label>\r
  </div>\r
</div>\`;\r
  }\r
  window.pcoToggleTerms = function (checked) {\r
    const button = pcoById('pco-review-proceed-btn');\r
    if (button) {\r
      button.disabled = !checked;\r
      button.style.opacity = checked ? '1' : '0.5';\r
      button.style.cursor = checked ? 'pointer' : 'not-allowed';\r
    }\r
  };\r
  function openEventReviewModal(eventId) {\r
    const e =\r
      (typeof DB !== 'undefined' &&\r
        DB.events.find(\r
          event => String(event.id) === String(eventId) || String(event.eventId) === String(eventId)\r
        )) ||\r
      (typeof attendeeEventCatalog !== 'undefined' &&\r
        attendeeEventCatalog.find(\r
          event => String(event.id) === String(eventId) || String(event.eventId) === String(eventId)\r
        ));\r
    if (!e) {\r
      if (typeof toast === 'function') toast('Event not found', 'error');\r
      return;\r
    }\r
\r
    // Revalidate event availability\r
    if (e.status === 'cancelled') {\r
      if (typeof toast === 'function')\r
        toast('This event has been cancelled and is no longer accepting registrations.', 'error');\r
      return;\r
    }\r
    if (e.status === 'completed' || (e.date && new Date(\`\${e.date}T23:59:59\`) < new Date())) {\r
      if (typeof toast === 'function') toast('This event has already concluded.', 'error');\r
      return;\r
    }\r
    if (e.status === 'full' && !e.waitlistEnabled) {\r
      if (typeof toast === 'function')\r
        toast('Sorry, this event is full and the waitlist is closed.', 'error');\r
      return;\r
    }\r
\r
    // Duplicate registration check\r
    const existing =\r
      (typeof attendeeRegistrationCatalog !== 'undefined' &&\r
        attendeeRegistrationCatalog.find(\r
          r =>\r
            r.status !== 'cancelled' &&\r
            (String(r.eventId) === String(eventId) ||\r
              String(r.eventId) === String(e.id) ||\r
              String(r.eventId) === String(e.eventId))\r
        )) ||\r
      (typeof DB !== 'undefined' &&\r
        DB.registrations.find(\r
          registration =>\r
            registration.status !== 'cancelled' &&\r
            String(registration.attendeeId) === String(typeof CU !== 'undefined' ? CU.id : '') &&\r
            (String(registration.eventId) === String(eventId) ||\r
              String(registration.eventId) === String(e.id) ||\r
              String(registration.eventId) === String(e.eventId))\r
        ));\r
    if (existing) {\r
      if (typeof toast === 'function')\r
        toast('You already have an active registration for this event.', 'info');\r
      if (typeof openViewTicketModal === 'function')\r
        openViewTicketModal(existing.id || existing.registrationId);\r
      return;\r
    }\r
    const isWl = e.status === 'full' && e.waitlistEnabled;\r
    const isFree = e.price === 0;\r
    const proceedLabel =\r
      e.visibility === 'private'\r
        ? isWl\r
          ? 'Request Waitlist Approval'\r
          : 'Request Organizer Approval'\r
        : isWl\r
        ? 'Join Waitlist'\r
        : isFree\r
        ? 'Confirm Free Registration'\r
        : 'Proceed to Payment';\r
    const proceedClass = isWl ? 'btn-warning' : isFree ? 'btn-success' : 'btn-primary';\r
    if (typeof openModal === 'function') {\r
      openModal(\r
        \`Review Event \\u2014 \${e.title}\`,\r
        eventReviewHTML(e),\r
        [\r
          {\r
            lbl: proceedLabel,\r
            cls: proceedClass,\r
            fn: \`pcoProceedFromReview('\${eventId}')\`,\r
          },\r
        ],\r
        true\r
      );\r
      setTimeout(() => {\r
        const button = document\r
          .getElementById('modal-foot')\r
          ?.querySelector('.btn-primary, .btn-success, .btn-warning');\r
        if (button) {\r
          button.id = 'pco-review-proceed-btn';\r
          button.disabled = true;\r
          button.style.opacity = '0.5';\r
          button.style.cursor = 'not-allowed';\r
        }\r
      }, 20);\r
    }\r
  }\r
  window.openEventReviewModal = openEventReviewModal;\r
  window.pcoProceedFromReview = function (eventId) {\r
    const chk = pcoById('pco-terms-check');\r
    if (!chk || !chk.checked) {\r
      if (typeof toast === 'function')\r
        toast('Please accept the Terms & Conditions to proceed.', 'warning');\r
      return;\r
    }\r
    const e =\r
      (typeof DB !== 'undefined' &&\r
        DB.events.find(\r
          event => String(event.id) === String(eventId) || String(event.eventId) === String(eventId)\r
        )) ||\r
      (typeof attendeeEventCatalog !== 'undefined' &&\r
        attendeeEventCatalog.find(\r
          event => String(event.id) === String(eventId) || String(event.eventId) === String(eventId)\r
        ));\r
    if (!e) {\r
      if (typeof toast === 'function') toast('Event not found', 'error');\r
      return;\r
    }\r
\r
    // Revalidate event availability, capacity, and registration eligibility\r
    if (e.status === 'cancelled') {\r
      if (typeof toast === 'function')\r
        toast('This event has been cancelled and is no longer accepting registrations.', 'error');\r
      if (typeof closeModal === 'function') closeModal();\r
      return;\r
    }\r
    if (e.status === 'completed' || (e.date && new Date(\`\${e.date}T23:59:59\`) < new Date())) {\r
      if (typeof toast === 'function') toast('This event has already concluded.', 'error');\r
      if (typeof closeModal === 'function') closeModal();\r
      return;\r
    }\r
    if (e.status === 'full' && !e.waitlistEnabled) {\r
      if (typeof toast === 'function')\r
        toast('Sorry, this event is full and the waitlist is closed.', 'error');\r
      if (typeof closeModal === 'function') closeModal();\r
      return;\r
    }\r
    const existing =\r
      (typeof attendeeRegistrationCatalog !== 'undefined' &&\r
        attendeeRegistrationCatalog.find(\r
          r =>\r
            r.status !== 'cancelled' &&\r
            (String(r.eventId) === String(eventId) ||\r
              String(r.eventId) === String(e.id) ||\r
              String(r.eventId) === String(e.eventId))\r
        )) ||\r
      (typeof DB !== 'undefined' &&\r
        DB.registrations.find(\r
          registration =>\r
            registration.status !== 'cancelled' &&\r
            String(registration.attendeeId) === String(typeof CU !== 'undefined' ? CU.id : '') &&\r
            (String(registration.eventId) === String(eventId) ||\r
              String(registration.eventId) === String(e.id) ||\r
              String(registration.eventId) === String(e.eventId))\r
        ));\r
    if (existing) {\r
      if (typeof toast === 'function')\r
        toast('You already have an active registration for this event.', 'warning');\r
      if (typeof closeModal === 'function') closeModal();\r
      if (typeof openViewTicketModal === 'function')\r
        openViewTicketModal(existing.id || existing.registrationId);\r
      return;\r
    }\r
    const isWl = e.status === 'full' && e.waitlistEnabled;\r
    const isFree = e.price === 0;\r
    if (e.visibility === 'private') {\r
      if (approvalRequestsInFlight.has(String(eventId))) return;\r
      approvalRequestsInFlight.add(String(eventId));\r
      const btn = pcoById('pco-review-proceed-btn');\r
      if (btn) {\r
        btn.disabled = true;\r
        btn.textContent = 'Sending request...';\r
      }\r
      return pcoDoRegister(eventId, null, 0, 'standard')\r
        .then(registration => {\r
          const waitlisted = registration.status === 'waitlisted';\r
          openModal(\r
            waitlisted ? 'Waitlist Request Sent' : 'Registration Request Sent',\r
            '<p>Your request has been sent to the organizer.</p><p>' +\r
              (waitlisted\r
                ? 'Organizer approval is required before you can accept a waitlist place.'\r
                : isFree\r
                ? 'Your free ticket will be issued after organizer approval.'\r
                : 'After approval, you can pay for your ticket from My Tickets.') +\r
              '</p><p class="small muted">No payment has been collected.</p>',\r
            [\r
              {\r
                lbl: 'View My Tickets',\r
                cls: 'btn-primary',\r
                fn: "closeModal();goNav('my-tickets')",\r
              },\r
            ]\r
          );\r
        })\r
        .catch(error => {\r
          if (btn?.isConnected) {\r
            btn.disabled = false;\r
            btn.textContent = 'Request Organizer Approval';\r
          }\r
          if (typeof toast === 'function')\r
            toast(error.message || 'Unable to send the registration request.', 'error');\r
        })\r
        .finally(() => approvalRequestsInFlight.delete(String(eventId)));\r
    }\r
\r
    // For Free Events: skip payment after acceptance and validation\r
    if (isFree && !isWl) {\r
      const btn = pcoById('pco-review-proceed-btn');\r
      if (btn) {\r
        btn.disabled = true;\r
        btn.textContent = 'Confirming Registration\\u2026';\r
      }\r
      pcoDoRegister(eventId, null, 0, 'free')\r
        .then(() => {\r
          if (typeof closeModal === 'function') closeModal();\r
          if (typeof toast === 'function')\r
            toast(\r
              e.visibility === 'public'\r
                ? 'Registration confirmed. Your free ticket is ready.'\r
                : 'Registration submitted. Awaiting organizer approval.',\r
              'success'\r
            );\r
          if (typeof goNav === 'function') goNav('my-tickets');\r
        })\r
        .catch(error => {\r
          if (btn) {\r
            btn.disabled = false;\r
            btn.textContent = 'Confirm Free Registration';\r
          }\r
          if (typeof toast === 'function')\r
            toast(error.message || 'Registration could not be completed.', 'error');\r
        });\r
      return;\r
    }\r
\r
    // For Waitlisted Events: no payment required\r
    if (isWl) {\r
      const btn = pcoById('pco-review-proceed-btn');\r
      if (btn) {\r
        btn.disabled = true;\r
        btn.textContent = 'Joining Waitlist\\u2026';\r
      }\r
      pcoDoRegister(eventId, null, 0, 'standard')\r
        .then(regData => {\r
          if (typeof closeModal === 'function') closeModal();\r
          if (typeof toast === 'function')\r
            toast(\r
              \`Joined waitlist\${\r
                regData?.waitlistPosition ? \` at position \${regData.waitlistPosition}\` : ''\r
              }.\`,\r
              'success'\r
            );\r
          if (typeof goNav === 'function') goNav('my-tickets');\r
        })\r
        .catch(error => {\r
          if (btn) {\r
            btn.disabled = false;\r
            btn.textContent = 'Join Waitlist';\r
          }\r
          if (typeof toast === 'function')\r
            toast(error.message || 'Could not join waitlist.', 'error');\r
        });\r
      return;\r
    }\r
\r
    // For Paid Events: open existing payment page with correct event ID and amount!\r
    openExistingPaymentModal(e);\r
  };\r
  function openExistingPaymentModal(e, regId) {\r
    openCheckout({\r
      event: e,\r
      eventId: e.id || e.eventId,\r
      amount: Number(e.price || 0),\r
      registrationId: regId,\r
    });\r
  }\r
\r
  /* ------------------------------------------------------------------ */\r
  /* Patch runtime functions                                              */\r
  /* ------------------------------------------------------------------ */\r
  function newRegForEvent(eventId) {\r
    openEventReviewModal(eventId);\r
  }\r
  function newCompleteDemoPayment(registrationId) {\r
    const registration =\r
      typeof attendeeRegistrationCatalog !== 'undefined' &&\r
      attendeeRegistrationCatalog.find(r => r.registrationId === registrationId);\r
    const event =\r
      registration &&\r
      typeof DB !== 'undefined' &&\r
      DB.events.find(currentEvent => String(currentEvent.id) === String(registration.eventId));\r
    if (!registration || !event) {\r
      if (typeof toast === 'function') toast('Registration details are unavailable.', 'error');\r
      return;\r
    }\r
    if (\r
      registration.status === 'pending_approval' ||\r
      (event.visibility === 'private' && registration.reviewStatus !== 'approved')\r
    ) {\r
      if (typeof toast === 'function')\r
        toast('Wait for organizer approval before paying for this private event.', 'warning');\r
      return;\r
    }\r
    openExistingPaymentModal(event, registrationId);\r
  }\r
  function patchRuntime() {\r
    if (typeof regForEvent !== 'undefined') window.regForEvent = newRegForEvent;\r
    if (typeof completeDemoPayment !== 'undefined')\r
      window.completeDemoPayment = newCompleteDemoPayment;\r
  }\r
  patchRuntime();\r
  document.addEventListener('DOMContentLoaded', patchRuntime, {\r
    once: true,\r
  });\r
})();\r
\r
/* ========================================================================\r
   Attendee dashboard implementation is managed in runtime.js\r
   ======================================================================== */\r
`,C=`// Refresh the legacy browser model from the API without replacing forms the user is editing.
// Sequence and epoch counters prevent older responses from overwriting a newer account or refresh.
(() => {
  const roleNames = {
    super_admin: 'superuser',
    event_organizer: 'organizer',
  };
  const key = 'eventflow-data-change';
  const state = {
    identity: '',
    snapshot: null,
    flight: null,
    pending: false,
    rendering: 0,
    sequence: 0,
    epoch: 0,
    editedElement: null,
    disposed: false,
  };
  const payload = response => response?.data ?? response;
  const date = value => (value ? String(value).slice(0, 10) : '');
  const esc = value =>
    String(value ?? '').replace(
      /[&<>"']/g,
      char =>
        ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
        }[char])
    );
  const current = () => (typeof CU !== 'undefined' ? CU : null);
  const database = () => (typeof DB !== 'undefined' ? DB : null);
  const field = id => document.getElementById(id)?.value?.trim() || '';
  const userId = user => user?.userId || user?.id;
  const identity = user => \`\${userId(user)}:\${user?.token || ''}\`;
  async function request(user, route, options = {}) {
    if (!user?.token && route !== '/auth/register')
      throw new Error('Sign in again to load your account data.');
    const response = await (globalThis.window?.EventFlowFetch || fetch)((window.API_BASE_URL || 'http://localhost:3001/api') + route, {
      ...options,
      headers: {
        ...(user?.token
          ? {
              Authorization: \`Bearer \${user.token}\`,
            }
          : {}),
        ...(options.body instanceof FormData
          ? {}
          : {
              'Content-Type': 'application/json',
            }),
        ...options.headers,
      },
    });
    const result = await response.json();
    if (!response.ok)
      throw new Error(
        Array.isArray(result.message)
          ? result.message.join(', ')
          : result.message || 'The server could not save this change.'
      );
    return payload(result);
  }
  function normalizeUser(user) {
    return {
      ...user.profile,
      ...user,
      id: user.userId,
      role: roleNames[user.userRole] || user.userRole,
      employeeType:
        user.employeeType === 'FINANCE_EXECUTIVE' ? 'SUPPORT_FINANCE' : user.employeeType,
      phone: user.phoneNo || '',
      joined: date(user.createdAt),
      avatar: user.name
        .split(' ')
        .map(part => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase(),
      service: String(
        user.profile?.service || (user.employeeType ? 'Employee' : 'Event Organizer')
      ),
      eventTypes: String(user.profile?.eventCategories || '')
        .split(',')
        .filter(Boolean),
      rating: user.rating || 0,
    };
  }
  function apply(snapshot, user, db) {
    db.users = snapshot.users.map(item => normalizeUser(item));
    db.events = snapshot.events.map(event => ({
      ...event,
      id: event.eventId,
      title: event.name,
      price: event.ticketPrice,
      venue: event.location,
      organizer: event.organizerUserId,
      backendClientId: event.clientId,
      clientId: event.clientUserId,
      backendStatus: event.status,
      status:
        event.status === 'published'
          ? 'upcoming'
          : event.status === 'draft'
          ? 'pending'
          : event.status,
      emoji: '📅',
      color: '#7c6ff7',
      description: event.description || '',
    }));
    db.registrations = snapshot.registrations.map(registration => ({
      ...registration,
      id: registration.registrationId,
      backendAttendeeId: registration.attendeeId,
      attendeeId: registration.attendee?.userId || registration.attendeeId,
      date: registration.registrationDate,
      backendStatus: registration.status,
      status: registration.status === 'registered' ? 'confirmed' : registration.status,
      payment:
        registration.payment?.status === 'completed'
          ? 'paid'
          : registration.payment?.status ||
            (registration.event?.ticketPrice === 0 ? 'free' : 'pending'),
      amount: registration.payment?.amount || 0,
      verified: registration.reviewStatus === 'approved' || registration.status === 'attended',
      verificationStatus:
        registration.status === 'rejected'
          ? 'Rejected'
          : registration.reviewStatus === 'approved' || registration.status === 'attended'
          ? 'Verified'
          : registration.status === 'cancelled'
          ? 'Cancelled'
          : registration.status === 'no-show'
          ? 'No Show'
          : 'Pending Review',
      ticketId: registration.verificationId || registration.registrationId,
      checkedIn: registration.checkInStatus === 'checked-in' || registration.status === 'attended',
    }));
    db.eventRequests = snapshot.eventRequests.map(item => ({
      ...item,
      id: item.requestId,
      clientId: item.clientUserId,
      organizer: item.organizerUserId,
      title: item.eventName,
      type: item.eventType,
      date: item.eventDate,
      guests: item.capacity,
      desc: item.requirements,
      created: date(item.createdAt),
    }));
    db.eventPlans = snapshot.eventPlans.map(item => ({
      ...item,
      id: item.eventPlanId,
    }));
    db.notifications = snapshot.notifications.map(item => ({
      ...item,
      id: item.notificationId,
      notificationType: item.type,
      title:
        typeof notificationTitle === 'function'
          ? notificationTitle(item.type)
          : item.type.replaceAll('_', ' '),
      msg: item.message,
      time: new Date(item.dateTime).toLocaleString(),
      icon: '🔔',
    }));
    db.supportRequests = snapshot.supportTickets.map(item => ({
      ...item,
      id: item.ticketId,
      subject: item.concern,
      status: {
        open: 'Pending',
        in_progress: 'In Progress',
        resolved: 'Resolved',
      }[item.status],
      date: date(item.createdAt),
      updated: new Date(item.updatedAt).toLocaleString(),
    }));
    db.userQueries = [];
    db.eventOperationsTasks = db.supportRequests
      .filter(item => item.requestType === 'Event Related Issues')
      .map(item => ({
        ...item,
        backendTicket: true,
        type: item.concern,
        eventTitle: 'Event support',
        updated: item.updated,
      }));
    db.eventOpsRequests = [];
    db.financeTransactions = snapshot.payments.map(payment => {
      const registration = db.registrations.find(item => item.id === payment.registrationId);
      return {
        ...payment,
        kind: 'ticket',
        id: payment.paymentId,
        userId: registration?.attendeeId,
        eventId: registration?.eventId,
        status: {
          completed: 'Successful',
          pending: 'Pending',
          failed: 'Failed',
          refunded: 'Refunded',
        }[payment.status],
        date: payment.paymentDate,
        method: payment.paymentMethod,
      };
    });
    db.eventWorkflowPayments = snapshot.eventWorkflowPayments;
    db.financeTransactions.push(
      ...snapshot.eventWorkflowPayments.map(payment => ({
        ...payment,
        kind: 'event',
        id: payment.paymentId,
        userId: db.users.find(user => user.clientId === payment.clientId)?.id,
        status: payment.status === 'completed' ? 'Successful' : payment.status,
        date: payment.paymentDate,
        method: payment.paymentMethod,
      }))
    );
    db.financeRefunds = snapshot.refunds.map(refund => {
      const registration = db.registrations.find(item => item.id === refund.registrationId);
      return {
        ...refund,
        id: refund.refundId,
        userId: registration?.attendeeId,
        eventId: registration?.eventId,
        status: {
          pending: 'Requested',
          completed: 'Completed',
          failed: 'Failed',
          not_applicable: 'Not applicable',
        }[refund.status],
        date: date(refund.requestedAt),
      };
    });
    db.financeRefunds.push(
      ...(snapshot.eventWorkflowRefunds || []).map(refund => ({
        ...refund,
        id: refund.refundId,
        userId: db.users.find(user => user.clientId === refund.clientId)?.id,
        status: 'Requested',
        date: date(refund.requestedAt),
      }))
    );
    db.reports = [];
    db.operationalReports = snapshot.supportReports.map(report => ({
      ...report,
      id: report.reportId,
      backendReportId: report.reportId,
      type: report.category,
      owner: report.author,
      status: {
        draft: 'Draft',
        submitted: 'Submitted',
        reviewed: 'Reviewed',
      }[report.status],
      updated: date(report.updatedAt),
    }));
    const profile = normalizeUser(snapshot.currentUser);
    const previousType = user.employeeType;
    Object.assign(user, profile);
    if (
      previousType !== user.employeeType &&
      user.employeeType &&
      typeof buildEmployeeNav === 'function'
    )
      buildEmployeeNav(user.employeeType);
    try {
      sessionStorage.setItem('ef_cu', JSON.stringify(user));
    } catch {}
    if (typeof updateNotifDot === 'function') updateNotifDot();
    if (typeof updateHeaderUser === 'function') updateHeaderUser();
    const sidebarName = document.getElementById('sb-name');
    if (sidebarName && !user.employeeType) sidebarName.textContent = user.name;
  }
  async function sync(user = current(), db = database(), { force = true, applyCached = true } = {}) {
    if (state.disposed || !user?.token || !db) return false;
    const session = identity(user);
    if (state.identity !== session)
      Object.assign(state, {
        identity: session,
        snapshot: null,
        flight: null,
        pending: false,
      });
    if (!force && state.snapshot) {
      if (applyCached) apply(state.snapshot, user, db);
      return false;
    }
    if (!state.flight || state.flight.epoch !== state.epoch) {
      const flight = {
        promise: request(user, '/workspace'),
        epoch: state.epoch,
      };
      state.flight = flight;
      flight.promise
        .finally(() => {
          if (state.flight === flight) state.flight = null;
        })
        .catch(() => {});
    }
    const flight = state.flight;
    const snapshot = await flight.promise;
    if (
      state.disposed ||
      state.identity !== session ||
      !current() ||
      identity(current()) !== session
    )
      return false;
    if (flight.epoch !== state.epoch) return sync(user, db);
    const changed = state.snapshot?.version !== snapshot.version;
    state.snapshot = snapshot;
    apply(snapshot, user, db);
    return changed;
  }
  function invalidate() {
    state.epoch++;
    state.pending = true;
    try {
      localStorage.setItem(key, \`\${Date.now()}:\${Math.random()}\`);
    } catch {}
  }
  function editing() {
    return (
      state.editedElement?.isConnected ||
      document.querySelector(
        '#modal-overlay.open, #modal-overlay.show, #drawer-overlay.open, #confirm-overlay.open, .support-modal-overlay:not([hidden])'
      ) ||
      document.activeElement?.matches?.('input, textarea, select, [contenteditable="true"]')
    );
  }
  async function refresh() {
    if (state.disposed || !current()?.token || document.hidden || state.rendering) return;
    try {
      // Do not replace form state while the user is editing or reviewing a report.
      if (editing()) {
        state.pending = true;
        return;
      }
      const changed = await sync();
      if (state.disposed) return;
      state.pending ||= changed;
      if (state.pending && typeof _currentPage !== 'undefined' && _currentPage) {
        state.pending = false;
        await window.renderPage(_currentPage, {
          cached: true,
        });
      }
    } catch (error) {
      if (state.disposed) return;
      const notice = document.getElementById('data-sync-notice');
      if (notice) notice.textContent = error.message;
    }
  }
  const mutations = new Set();
  async function registerAccount(user) {
    if (mutations.has('register')) return;
    mutations.add('register');
    try {
      const profileFields = [
        'dateOfBirth',
        'gender',
        'city',
        'interests',
        'organizationType',
        'organizationName',
        'organizationAddress',
        'yearsExperience',
        'eventCategories',
        'service',
        'previousExperience',
      ];
      const registered = await request(null, '/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          password: user.password,
          userRole:
            {
              organizer: 'event_organizer',
            }[user.role] || user.role,
          ...(user.phone
            ? {
                phoneNo: user.phone,
              }
            : {}),
          ...(user.address
            ? {
                address: user.address,
              }
            : {}),
          profile: Object.fromEntries(
            profileFields.filter(key => user[key] !== undefined).map(key => [key, user[key]])
          ),
        }),
      });
      invalidate();
      closeModal();
      if (registered.token) {
        CU = normalizeUser(registered);
        sessionStorage.setItem('ef_cu', JSON.stringify(CU));
        toast(\`Account created! Welcome, \${CU.name}!\`, 'success');
        if (!routeToRoleWorkspace(CU)) {
          initApp();
          showPage('app');
        }
      } else {
        openModal(
          'Registration Submitted',
          '<p>Your account was saved and is awaiting admin approval. You can sign in once it is activated.</p>',
          [
            {
              lbl: 'Sign In',
              cls: 'btn-primary',
              fn: "closeModal();showPage('login')",
            },
          ],
          false
        );
      }
      return registered;
    } finally {
      mutations.delete('register');
    }
  }
  async function mutate(id, action, message, { close = true, page } = {}) {
    if (mutations.has(id)) return;
    mutations.add(id);
    let saved = false;
    try {
      const result = await action();
      saved = true;
      if (state.disposed || !current()?.token) return result;
      state.editedElement = null;
      invalidate();
      if (close && typeof closeModal === 'function') closeModal();
      await sync();
      await window.renderPage(page || _currentPage, {
        cached: true,
      });
      if (typeof toast === 'function') toast(message, 'success');
      return result;
    } catch (error) {
      if (typeof toast === 'function')
        toast(
          saved ? \`Saved, but the page could not refresh: \${error.message}\` : error.message,
          'error'
        );
    } finally {
      mutations.delete(id);
    }
  }
  function patch(name, handler) {
    if (typeof window[name] === 'function') window[name] = handler;
  }
  const send = (route, method, body) =>
    request(current(), route, {
      method,
      ...(body
        ? {
            body: JSON.stringify(body),
          }
        : {}),
    });
  const findUser = id => database().users.find(user => String(user.id) === String(id));
  const isSupport = () => window.EventFlowAccountPolicy.isSupportExecutiveAccount(current());
  function customerRoute(id) {
    return \`\${isSupport() ? '/workspace/customers' : '/users'}/\${encodeURIComponent(id)}\`;
  }
  function manageUser(id, fields) {
    const target = findUser(id);
    if (!window.EventFlowAccountPolicy.canManageAccount(current(), target))
      return toast('Only an admin can change employee or admin accounts.', 'error');
    if (fields.role && fields.role !== target.role)
      return toast('Account roles cannot be changed from this form.', 'error');
    if (!fields.name || !fields.email?.includes('@'))
      return toast('Enter a name and valid email.', 'error');
    return mutate(
      \`user:\${id}\`,
      () =>
        send(customerRoute(id), 'PATCH', {
          name: fields.name,
          email: fields.email,
          ...(fields.phone
            ? {
                phoneNo: fields.phone,
              }
            : {}),
          ...(fields.status
            ? {
                status: fields.status === 'deactivated' ? 'inactive' : fields.status,
              }
            : {}),
        }),
      'User details updated'
    );
  }
  function install() {
    const render = window.renderPage;
    if (render)
      window.renderPage = async function (pg, { cached = false } = {}) {
        if (state.disposed) return;
        const sequence = ++state.sequence;
        state.rendering++;
        _currentPage = pg;
        const session = current() ? identity(current()) : '';
        try {
          if (current() && !current().token)
            throw new Error('Sign in again to load your account data.');
          await sync(current(), database(), {
            force: !cached,
          });
          if (
            state.disposed ||
            sequence !== state.sequence ||
            _currentPage !== pg ||
            (session && (!current() || identity(current()) !== session))
          )
            return;
          await render(pg);
        } catch (error) {
          if (state.disposed || sequence !== state.sequence || _currentPage !== pg) return;
          const container = document.getElementById('page-content');
          window.EventFlowReactPages?.clear(container);
          if (container)
            container.innerHTML = \`<div class="empty"><div class="empty-title">Data could not be loaded</div><p class="empty-desc" id="data-sync-notice" role="status">\${esc(
              error.message
            )}</p><button class="btn btn-primary" type="button" data-sync-retry>Try Again</button></div>\`;
          container
            ?.querySelector('[data-sync-retry]')
            ?.addEventListener('click', () => window.renderPage(pg));
        } finally {
          state.rendering--;
        }
      };
    patch('saveEditUser', id =>
      manageUser(id, {
        name: field('edit-usr-name'),
        email: field('edit-usr-email'),
        phone: field('edit-usr-phone'),
        role: field('edit-usr-role'),
      })
    );
    patch('saveUser', id =>
      manageUser(id, {
        name: field('um-edit-name'),
        email: field('um-edit-email'),
        phone: field('um-edit-phone'),
        role: field('um-edit-role'),
        status: field('um-edit-status'),
      })
    );
    patch('toggleUserStatus', id => {
      const target = findUser(id);
      if (!window.EventFlowAccountPolicy.canManageAccount(current(), target))
        return toast('Only an admin can change employee or admin accounts.', 'error');
      return mutate(
        \`user:\${id}\`,
        () =>
          send(customerRoute(id), 'PATCH', {
            status: target.status === 'active' ? 'inactive' : 'active',
          }),
        'Account status updated',
        {
          close: false,
        }
      );
    });
    for (const name of ['deleteUserOps', 'removeUser'])
      patch(name, id => {
        if (!window.EventFlowAccountPolicy.canManageAccount(current(), findUser(id)))
          return toast('Only an admin can change employee or admin accounts.', 'error');
        confirm2('Delete User', 'Permanently delete this user account?', () =>
          mutate(\`user:\${id}\`, () => send(customerRoute(id), 'DELETE'), 'User deleted', {
            close: false,
          })
        );
      });
    patch('saveSettings', () => {
      const name = field('st-name');
      const email = field('st-email');
      const phone = field('st-phone');
      if (!name || !email.includes('@')) return toast('Enter a name and valid email.', 'error');
      return mutate(
        'profile',
        () =>
          send(\`/users/\${encodeURIComponent(userId(current()))}\`, 'PATCH', {
            name,
            email,
            bio: field('st-bio'),
            ...(phone
              ? {
                  phoneNo: phone,
                }
              : {}),
          }),
        'Settings saved successfully',
        {
          close: false,
        }
      );
    });
    patch('changePass', () => {
      const currentPassword = field('st-cur');
      const newPassword = field('st-new');
      if (!currentPassword || newPassword.length < 6)
        return toast(
          'Enter your current password and a new password of at least 6 characters.',
          'error'
        );
      if (newPassword !== field('st-conf')) return toast('Passwords do not match.', 'error');
      return mutate(
        'password',
        () =>
          send('/auth/password', 'POST', {
            currentPassword,
            newPassword,
          }),
        'Password changed successfully',
        {
          close: false,
        }
      );
    });
    function review(id, decision, reason) {
      return mutate(
        \`registration:\${id}\`,
        () =>
          send(\`/registrations/\${encodeURIComponent(id)}/review\`, 'PATCH', {
            decision,
            ...(reason
              ? {
                  reason,
                }
              : {}),
          }),
        'Registration review saved'
      );
    }
    for (const name of ['approveRegistrationDirect', 'approveVerificationDirect'])
      patch(name, id => review(id, 'approved'));
    patch('confirmRejectRegistration', id => {
      const reason = field('reject-reason-custom') || field('reject-reason-preset');
      if (reason.length < 10)
        return toast('Explain the decline in at least 10 characters.', 'error');
      return review(id, 'rejected', reason);
    });
    patch('rejectRegistrationDirect', id => openRejectRegistrationWithReasonModal(id));
    const eventStatus = value =>
      ({
        Pending: 'draft',
        pending: 'draft',
        Active: 'published',
        upcoming: 'published',
        full: 'published',
        Completed: 'completed',
        Cancelled: 'cancelled',
      }[value] || value);
    const eventRoute = id =>
      \`\${isSupport() ? '/workspace/events' : '/events'}/\${encodeURIComponent(id)}\`;
    patch('setEventOpsStatus', (id, status) =>
      mutate(
        \`event:\${id}\`,
        () =>
          send(eventRoute(id), isSupport() ? 'PATCH' : 'PUT', {
            status: eventStatus(status),
          }),
        'Event status updated',
        {
          close: false,
        }
      )
    );
    patch('approveEventOpsDirect', id => window.setEventOpsStatus(id, 'published'));
    patch('rejectEventOpsDirect', id =>
      confirm2('Cancel Event', 'Cancel this event and notify affected attendees?', () =>
        window.setEventOpsStatus(id, 'cancelled')
      )
    );
    patch('saveNewEvent', () => {
      const name = field('ne-title');
      const venue = field('ne-venue');
      const date = field('ne-date');
      const capacity = Number(field('ne-cap'));
      if (!name || !venue || !date || capacity < 1)
        return toast('Enter the title, venue, date, and a valid capacity.', 'error');
      const dateError = EventFlowEventDates.validateEventLeadTime(date);
      if (dateError) return toast(dateError, 'error');
      return mutate(
        'new-event',
        () =>
          send('/events', 'POST', {
            name,
            date,
            location: venue,
            capacity,
            time: field('ne-time') || '09:00',
            category: field('ne-cat') || 'Conference',
            city: field('ne-city'),
            ticketPrice: Number(field('ne-price')) || 0,
            visibility: field('ne-visibility') || 'public',
            status: eventStatus(field('ne-status') || 'published'),
            description: field('ne-desc'),
            organizerId: current().organizerId || userId(current()),
          }),
        'Event created'
      );
    });
    patch('saveEditEvent', id =>
      mutate(
        \`event:\${id}\`,
        () =>
          send(eventRoute(id), isSupport() ? 'PATCH' : 'PUT', {
            name: field('ee-title'),
            date: field('ee-date'),
            time: field('ee-time'),
            location: field('ee-venue'),
            category: field('ee-category') || undefined,
            capacity: Number(field('ee-cap')),
            ticketPrice: Number(field('ee-price')),
            ...(field('ee-status')
              ? {
                  status: eventStatus(field('ee-status')),
                }
              : {}),
            description: field('ee-desc'),
          }),
        'Event updated'
      )
    );
    for (const name of ['deleteEvent', 'deleteEventOps']) {
      patch(name, id => {
        if (typeof window.handleOrganizerDeleteEvent === 'function') {
          return window.handleOrganizerDeleteEvent(id);
        }
        const db = database();
        const ev = (db?.events || []).find(
          event => String(event.id) === String(id) || String(event.eventId) === String(id)
        );
        const isDraft =
          ev && (ev.backendStatus === 'draft' || ev.status === 'draft' || ev.status === 'pending');
        const regCount = (db?.registrations || []).filter(
          registration =>
            String(registration.eventId) === String(id) ||
            String(registration.eventId) === String(ev?.id) ||
            String(registration.eventId) === String(ev?.eventId)
        ).length;
        if (ev && (!isDraft || regCount > 0)) {
          if (typeof window.openOrganizerEventCancellationModal === 'function') {
            return window.openOrganizerEventCancellationModal(id);
          }
          return toast(
            'Only draft events without registrations can be deleted; cancel an active event instead.',
            'error'
          );
        }
        const evName = ev?.title || ev?.name || 'Draft Event';
        if (typeof openModal === 'function') {
          openModal(
            'Delete Draft Event',
            \`
            <div style="font-size:13.5px;color:var(--text);margin-bottom:12px;line-height:1.6">
              Are you sure you want to permanently delete the draft event <strong>\${esc(
                evName
              )}</strong>?
            </div>
            <div style="background:var(--surface2);border-radius:8px;padding:12px;font-size:12.5px;line-height:1.6;color:var(--text2);margin-bottom:12px">
              <div><strong>Event:</strong> \${esc(evName)}</div>
              <div><strong>Status:</strong> <span class="badge badge-amber">Draft</span></div>
              <div><strong>Registrations:</strong> 0</div>
              <div style="margin-top:6px;font-size:12px;color:var(--text3)">
                This draft event has no registrations or ticket history and can be safely deleted. This action cannot be undone.
              </div>
            </div>
          \`,
            [
              {
                lbl: 'Keep Event',
                cls: 'btn-ghost',
                fn: 'closeModal()',
              },
              {
                lbl: 'Delete Event',
                cls: 'btn-danger',
                fn: \`confirmDeleteDraftEvent('\${encodeURIComponent(id)}')\`,
              },
            ]
          );
        } else {
          confirm2('Delete Draft Event', \`Permanently delete draft event "\${evName}"?\`, () =>
            mutate(
              \`event:\${id}\`,
              () => send(\`/events/\${encodeURIComponent(id)}\`, 'DELETE'),
              'Draft event deleted',
              {
                close: false,
              }
            )
          );
        }
      });
    }
    patch('confirmDeleteDraftEvent', id =>
      mutate(
        \`event:\${id}\`,
        () => send(\`/events/\${encodeURIComponent(id)}\`, 'DELETE'),
        'Draft event deleted successfully',
        {
          close: true,
        }
      )
    );
    patch('markNotifRead', id =>
      mutate(
        \`notification:\${id}\`,
        () => send(\`/notifications/\${encodeURIComponent(id)}/read\`, 'PATCH'),
        'Notification marked as read',
        {
          close: false,
        }
      )
    );
    patch('markAllRead', () =>
      mutate(
        'notifications',
        () => send('/notifications/read-all', 'PATCH'),
        'Notifications marked as read',
        {
          close: false,
        }
      )
    );
    let operationalReference;
    function saveOperational(submitted) {
      const title = field(submitted ? 'op-submit-title' : 'op-report-title');
      if (!title) return toast('Enter a report title.', 'error');
      operationalReference ||= \`form:operational:\${crypto.randomUUID()}\`;
      const db = database();
      const revenue = db.financeTransactions
        .filter(item => item.status === 'Successful')
        .reduce((sum, item) => sum + item.amount, 0);
      return mutate(
        'operational-report',
        async () => {
          const result = await send('/reports/operational', 'POST', {
            title,
            category: field(submitted ? 'op-submit-type' : 'op-report-type'),
            scope: 'Platform Wide',
            period: new Date().toLocaleDateString('en-IN', {
              month: 'long',
              year: 'numeric',
            }),
            summary: \`Registration revenue: ₹\${revenue.toLocaleString('en-IN')}. \${
              db.financeTransactions.length
            } payment records and \${db.financeRefunds.length} refund records. \${
              db.supportRequests.filter(item => item.status !== 'Resolved').length
            } open customer requests.\`,
            status: submitted ? 'submitted' : 'draft',
            sourceReference: operationalReference,
          });
          operationalReference = null;
          return result;
        },
        submitted ? 'Report submitted to admin' : 'Report saved as draft'
      );
    }
    patch('saveOperationalReport', () => saveOperational(false));
    patch('submitNewOperationalReport', () => saveOperational(true));
    patch('submitOperationalReport', id =>
      mutate(
        \`report:\${id}\`,
        () => send(\`/reports/operational/\${encodeURIComponent(id)}/submit\`, 'POST'),
        'Report submitted to admin'
      )
    );
    patch('verifyRegisterOtp', async () => {
      if (!pendingRegistration || Date.now() > pendingRegistration.expiresAt)
        return toast('OTP expired. Please create your account again.', 'error');
      if (field('rg-otp') !== pendingRegistration.otp)
        return toast('Incorrect OTP. Please try again.', 'error');
      try {
        const registered = await registerAccount(pendingRegistration.user);
        if (registered) pendingRegistration = null;
      } catch (error) {
        toast(error.message, 'error');
      }
    });
  }
  function dispose() {
    state.disposed = true;
    state.sequence++;
    clearInterval(timer);
    document.removeEventListener('input', onInput);
    window.removeEventListener('focus', refresh);
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('storage', onStorage);
  }
  window.EventFlowData = {
    sync,
    invalidate,
    refresh,
    request,
    apply,
    mutate,
    registerAccount,
    normalizeUser,
    dispose,
  };
  install();
  function onInput(event) {
    const target = event.target;
    if (
      target?.closest?.('#page-content') &&
      !target.closest('.support-modal, #modal-overlay') &&
      target.type !== 'search' &&
      !/search|filter|query|(?:^|-)q$/i.test(\`\${target.id || ''} \${target.placeholder || ''}\`)
    )
      state.editedElement = target;
  }
  function onVisibility() {
    if (!document.hidden) refresh();
  }
  function onStorage(event) {
    if (event.key === key) {
      state.pending = true;
      refresh();
    }
  }
  document.addEventListener('input', onInput);
  const timer = setInterval(refresh, 8000);
  window.addEventListener('focus', refresh);
  document.addEventListener('visibilitychange', onVisibility);
  window.addEventListener('storage', onStorage);
})();
`;function a(n){const r=document.createElement("script");return r.textContent=n,document.body.appendChild(r),r}function A({source:n,role:r}){return d.useEffect(()=>{const i=window.__eventFlowLegacyRuntime;if(i){(!i.active||i.role!==r||i.source!==n)&&window.location.reload();return}window.__eventFlowLegacyRuntime={role:r,source:n,active:!0},document.body.dataset.eventflowRole=r;const o=u[r];o&&(window.EventFlowFetch=p(s.dispatch,o.actions,()=>window.EventFlowData?.invalidate()));const l=[a(y),a(b),a(h),a(x),a(w),a(E),a(S),a(R),a(n),a(k),a(C)];return document.dispatchEvent(new Event("DOMContentLoaded")),()=>{window.EventFlowData?.dispose?.(),delete window.EventFlowFetch,o&&s.dispatch(o.actions.reset()),window.__eventFlowLegacyRuntime.active=!1,l.forEach(c=>c.remove())}},[n,r]),null}export{$ as A,j as C,N as D,D as G,A as L,T as U,t as l};
