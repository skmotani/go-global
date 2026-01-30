function TrustStats() {
  const stats = [
    { value: '500+', label: 'Manufacturers Served' },
    { value: '$200M+', label: 'Export Value Enabled' },
    { value: '12+', label: 'Strategic FTAs' },
  ]

  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustStats
