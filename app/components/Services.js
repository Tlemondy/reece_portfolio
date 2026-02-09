export default function Services() {
  const services = [
    { title: 'Web Development', description: 'Custom websites and web applications built with modern technologies and best practices' },
    { title: 'Mobile Dev', description: 'Native and cross-platform mobile applications for iOS and Android' },
    { title: 'Mac/Windows Dev', description: 'Desktop applications for macOS and Windows platforms' },
    { title: 'Backend', description: 'Robust server-side solutions with secure APIs and database architecture' },
    { title: 'UI/UX', description: 'Beautiful, intuitive interfaces that users love and convert visitors into customers' },
    { title: 'Performance', description: 'Lightning-fast, optimized applications that scale with your business needs' }
  ]

  return (
    <section id="services">
      <div className="container">
        <h2>What I Do</h2>
        <div className="grid">
          {services.map((service, i) => (
            <div key={i} className="card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
