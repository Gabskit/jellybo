
class AppTabs extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-around;
          background-color: var(--tab-bar-bg, #fff);
          border-top: 1px solid var(--tab-bar-border-color, #ddd);
          padding: 0.5rem 0;
          z-index: 1000;
        }
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: var(--tab-bar-text-color, #333);
          font-size: 0.75rem;
          padding: 0.25rem;
          border-radius: 4px;
          transition: background-color 0.3s;
        }
        a.active {
          color: var(--tab-bar-active-color, #007bff);
        }
        a:hover {
          background-color: var(--tab-bar-hover-bg, #f0f0f0);
        }
        .icon {
          font-size: 1.5rem; /* Placeholder for icon styles */
          margin-bottom: 0.25rem;
        }
      </style>
      <nav>
        <a href="#home" class="active">
          <span class="icon">🏠</span>
          <span>Home</span>
        </a>
        <a href="#feed">
          <span class="icon">📰</span>
          <span>Feed</span>
        </a>
        <a href="#messages">
          <span class="icon">💬</span>
          <span>Messages</span>
        </a>
        <a href="#profile">
          <span class="icon">👤</span>
          <span>Profile</span>
        </a>
      </nav>
    `;
  }
}

customElements.define('app-tabs', AppTabs);
