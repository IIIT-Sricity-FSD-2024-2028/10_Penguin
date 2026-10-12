(function (React, ReactDOM) {
  'use strict';

  const h = React.createElement;
  const roots = {};
  const navItems = [
    { icon: '📊', label: 'Dashboard', page: 'dashboard' },
    { icon: '👥', label: 'User Reports', page: 'user-reports', title: 'User Reports & Analytics' },
    { icon: '🗓️', label: 'Event Reports', page: 'event-reports', title: 'Event Reports & Analytics' },
    { icon: '💰', label: 'Revenue Reports', page: 'revenue-reports', title: 'Revenue Reports & Analytics' },
  ];

  function getRoot(key, elementId) {
    const element = document.getElementById(elementId);
    if (!element) throw new Error(`React mount point #${elementId} was not found.`);
    if (!roots[key]) roots[key] = ReactDOM.createRoot(element);
    return roots[key];
  }

  function Sidebar({ user, activePage }) {
    const roleLabel = 'Super Administrator';
    return h(React.Fragment, null,
      h('div', { className: 'sb-logo' },
        h('div', { className: 'sb-logo-mark' }, '⚡ EventFlow'),
        h('div', { className: 'sb-logo-sub' }, roleLabel)),
      h('nav', { className: 'sb-nav', 'aria-label': 'Admin navigation' },
        h('div', { className: 'sb-section-lbl' }, 'Menu'),
        navItems.map(item => h('button', {
          className: `sb-item${activePage === item.page ? ' active' : ''}`,
          type: 'button',
          key: item.page,
          onClick: () => window.goNav(item.page),
          'aria-current': activePage === item.page ? 'page' : undefined,
        },
        h('span', { className: 'ic', 'aria-hidden': 'true' }, item.icon),
        h('span', null, item.label)))),
      h('div', { className: 'sb-bottom' },
        h('button', { className: 'sb-user', type: 'button', onClick: () => window.goNav('user-reports') },
          h('div', { className: 'av' }, user.avatarImage
            ? h('img', { src: user.avatarImage, alt: '', onError: event => { event.currentTarget.remove(); } })
            : (user.avatar || (user.name || 'A').charAt(0))),
          h('div', { className: 'sb-user-info' },
            h('div', { className: 'sb-user-name' }, user.name || 'Administrator'),
            h('div', { className: 'sb-user-role' }, roleLabel)),
          h('span', { style: { color: 'var(--text3)', fontSize: '12px' }, 'aria-hidden': 'true' }, '⚙'))));
  }

  function Header({ title, unreadCount }) {
    return h(React.Fragment, null,
      h('div', { className: 'topbar-title' }, title),
      h('div', { className: 'topbar-right' },
        h('button', {
          className: 'notif-trigger',
          type: 'button',
          onClick: () => window.goNav('user-reports'),
          'aria-label': unreadCount ? `Notifications, ${unreadCount} unread` : 'Notifications',
        }, '🔔', unreadCount > 0 ? h('span', { className: 'notif-badge' }) : null),
        h('button', { className: 'btn btn-ghost btn-sm', type: 'button', onClick: () => window.doLogout() }, 'Sign Out')));
  }

  function StatCard({ icon, label, value, color, trend, sub }) {
    return h('div', { className: 'stat-card' },
      h('div', { className: 'glow', style: { background: `var(--${color})` } }),
      h('div', { className: 'stat-icon', style: { background: `var(--${color}-dim)`, color: `var(--${color})` } }, icon),
      h('div', { className: 'stat-value', style: { color: `var(--${color})` } }, value),
      h('div', { className: 'stat-label' }, label),
      h('div', { className: `stat-sub ${trend || 'neutral'}` }, sub));
  }

  function BarChart({ items, height = 160 }) {
    const max = Math.max(1, ...items.map(item => item.value || 0));
    return h('div', { style: { display: 'flex', alignItems: 'flex-end', gap: '14px', height: `${height}px`, paddingTop: '12px' } },
      items.map(item => h('div', {
        key: item.label,
        style: { flex: '1', minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: '8px' },
      },
      h('div', { style: { fontSize: '11px', color: 'var(--text3)' } }, item.value),
      h('div', {
        title: `${item.label}: ${item.value}`,
        style: {
          width: '100%',
          maxWidth: '58px',
          height: `${Math.max(8, Math.round(((item.value || 0) / max) * Math.max(height - 52, 40)))}px`,
          flexShrink: 0,
          borderRadius: '18px 18px 8px 8px',
          background: item.color,
          boxShadow: '0 16px 28px rgba(15,23,42,.18)',
        },
      }),
      h('div', { style: { fontSize: '11px', color: 'var(--text2)', textAlign: 'center', lineHeight: 1.35 } }, item.label))));
  }

  function ProgressList({ items }) {
    const total = items.reduce((sum, item) => sum + (item.value || 0), 0) || 1;
    return h('div', { style: { display: 'flex', flexDirection: 'column', gap: '14px' } },
      items.map(item => {
        const percent = Math.round(((item.value || 0) / total) * 100);
        return h('div', { key: item.label },
          h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' } },
            h('span', { style: { fontSize: '12px', color: 'var(--text2)' } }, item.label),
            h('span', { style: { fontSize: '12px', color: 'var(--text)' } }, `${item.value} · ${percent}%`)),
          h('div', { style: { height: '10px', borderRadius: '999px', background: 'var(--surface3)', overflow: 'hidden' } },
            h('div', { style: { width: `${percent}%`, height: '100%', borderRadius: '999px', background: item.color } })));
      }));
  }

  function Dashboard({ data, loadDashboard }) {
    const [metrics, setMetrics] = React.useState(data);
    React.useEffect(() => {
      setMetrics(data);
    }, [data]);
    React.useEffect(() => {
      let active = true;
      loadDashboard().then(response => {
        if (!active) return;
        const result = (response && response.data) || response || {};
        setMetrics(current => ({
          ...current,
          totalUsers: result.users ? result.users.total : current.totalUsers,
          totalEvents: result.events ? result.events.total : current.totalEvents,
          totalRegistrations: result.registrations ? result.registrations.total : current.totalRegistrations,
          revenue: Number.isFinite(Number(result.payments && result.payments.totalRevenue))
            ? Number(result.payments.totalRevenue)
            : current.revenue,
          pendingRequests: result.eventRequests ? result.eventRequests.pending : current.pendingRequests,
        }));
      }).catch(error => {
        console.warn('[Super Admin dashboard] Backend analytics unavailable; showing local data.', error);
      });
      return () => { active = false; };
    }, [loadDashboard]);

    return h(React.Fragment, null,
      h('div', { className: 'page-hd' },
        h('div', { className: 'page-hd-left' },
          h('div', { className: 'page-title' }, 'System Overview'),
          h('div', { className: 'page-sub' }, `Welcome back, ${data.userName}. Here's the platform at a glance.`)),
        h('div', { className: 'page-hd-right' },
          h('button', { className: 'btn btn-ghost', type: 'button', onClick: () => window.goNav('user-reports') }, 'User Statistics'),
          h('button', { className: 'btn btn-primary mt-4', style: { marginLeft: '8px' }, type: 'button', onClick: () => window.goNav('employee-stats') }, 'Employee Analytics'))),
      h('div', { className: 'grid-4 mb-20' },
        h(StatCard, { icon: '👥', label: 'Total Users', value: metrics.totalUsers, color: 'accent', trend: 'up', sub: '↑ 12% this month' }),
        h(StatCard, { icon: '🗓️', label: 'Total Events', value: metrics.totalEvents, color: 'green', trend: 'up', sub: '↑ 3 new this week' }),
        h(StatCard, { icon: '🎟️', label: 'Registrations', value: metrics.totalRegistrations, color: 'yellow', trend: 'up', sub: '↑ 8% this week' }),
        h(StatCard, { icon: '💰', label: 'Total Revenue', value: `₹${(metrics.revenue / 1000).toFixed(1)}K`, color: 'orange', sub: `${metrics.pendingRequests} req(s) pending` })),
      h('div', { className: 'grid-2', style: { gap: '20px', alignItems: 'start' } },
        h('section', { className: 'card' },
          h('div', { className: 'flex justify-between items-center mb-16' },
            h('span', { className: 'h4' }, 'Platform Role Split'),
            h('button', { className: 'btn btn-ghost btn-xs', type: 'button', onClick: () => window.goNav('user-reports') }, 'Open User Analytics')),
          h(BarChart, { items: metrics.roleBars, height: 160 })),
        h('section', { className: 'card', style: { padding: '16px' } },
          h('div', { className: 'flex justify-between items-center mb-12' },
            h('span', { className: 'h4' }, 'Request Pipeline ', h('span', { className: 'small', style: { color: 'var(--text3)', fontWeight: 500 } }, `(${metrics.requestTotal} total)`)),
            h('button', { className: 'btn btn-ghost btn-xs', type: 'button', onClick: () => window.goNav('revenue-reports') }, 'Open Reports')),
          h(ProgressList, { items: metrics.requestItems }))),
      h('div', { className: 'grid-2 mt-20', style: { gap: '20px', alignItems: 'start' } },
        h('section', { className: 'card', style: { padding: '16px' } },
          h('div', { className: 'h4 mb-12' }, 'Employee Capacity ', h('span', { className: 'small', style: { color: 'var(--text3)', fontWeight: 500 } }, `(${metrics.assignmentTotal} assignments)`)),
          h(ProgressList, { items: metrics.assignmentItems })),
        h('section', { className: 'card', style: { padding: '16px' } },
          h('div', { className: 'h4 mb-12' }, 'Event Coverage'),
          h(BarChart, { items: metrics.eventBars, height: 160 }))));
  }

  function renderRoot(key, elementId, component) {
    getRoot(key, elementId).render(component);
  }

  window.SuperAdminReact = {
    renderShell({ user, activePage, unreadCount }) {
      renderRoot('sidebar', 'admin-sidebar-root', h(Sidebar, { user, activePage, unreadCount }));
      const title = navItems.find(item => item.page === activePage)?.title || 'Dashboard';
      renderRoot('header', 'admin-header-root', h(Header, { title, unreadCount }));
    },
    renderDashboard(data, loadDashboard) {
      renderRoot('dashboard', 'react-page-content', h(Dashboard, { data, loadDashboard }));
    },
    clearDashboard() {
      if (roots.dashboard) roots.dashboard.render(null);
    },
  };
})(window.React, window.ReactDOM);
