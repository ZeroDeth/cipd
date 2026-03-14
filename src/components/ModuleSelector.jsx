import { MODULES } from '../data';

export default function ModuleSelector({ onSelect, title }) {
  const moduleArray = Object.entries(MODULES).map(([code, data]) => ({
    code,
    ...data
  }));

  return (
    <div className="block">
      {title && <div className="block-title">{title}</div>}
      <div className="module-grid">
        {moduleArray.map(module => (
          <button
            key={module.code}
            className="module-card"
            onClick={() => onSelect(module.code)}
            style={{ textAlign: 'left' }}
          >
            <div className="module-card-icon">{module.icon}</div>
            <div
              className="module-badge"
              style={{ backgroundColor: module.color }}
            >
              {module.code}
            </div>
            <div style={{ fontSize: '12px', fontWeight: '600' }}>
              {module.name}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: '1.3' }}>
              {module.desc}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
