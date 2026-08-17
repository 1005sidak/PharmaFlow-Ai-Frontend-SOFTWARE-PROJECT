export default function PlaceholderPage({ title }) {
  return (
    <div className="card" style={{ padding: 48, textAlign: 'center' }}>
      <span className="eyebrow">Module</span>
      <h1 style={{ margin: '10px 0' }}>{title}</h1>
      <p style={{ color: 'var(--ink-soft)', maxWidth: 420, margin: '0 auto' }}>
        Build this module out next — wire it to your Django endpoints for {title.toLowerCase()}.
      </p>
    </div>
  )
}
