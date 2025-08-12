import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <nav className="container-responsive flex items-center justify-between py-4" aria-label="Primary">
          <a href="#home" className="text-lg font-semibold">TechTogether</a>
          <div className="flex items-center gap-4">
            <a href="#schedule" className="hover:underline">Schedule</a>
            <a href="#speakers" className="hover:underline">Speakers</a>
            <a href="#about" className="hover:underline">About</a>
          </div>
        </nav>
      </header>

      <main id="home" className="container-responsive py-12">
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <article>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              TechTogether Conference App
            </h1>
            <p className="text-muted-foreground mb-6">
              Your mobile-friendly companion for agendas, speakers, and live updates during the event.
            </p>
            <div className="flex gap-3">
              <a className="btn-primary" href="#schedule">View Schedule</a>
              <a className="btn-primary" href="#speakers">Meet Speakers</a>
            </div>
          </article>
          <aside className="rounded-xl bg-card p-6 shadow-elegant">
            <h2 className="text-xl font-semibold mb-2">Latest Update</h2>
            <p className="text-muted-foreground">Welcome! We’re setting things up. Check back soon for the full experience.</p>
          </aside>
        </section>

        <section id="schedule" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Schedule</h2>
          <p className="text-muted-foreground">Full agenda coming soon.</p>
        </section>

        <section id="speakers" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Speakers</h2>
          <p className="text-muted-foreground">Speaker lineup will be announced shortly.</p>
        </section>

        <section id="about" className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">About TechTogether</h2>
          <p className="text-muted-foreground">A collaborative space for innovators to learn, connect, and build.</p>
        </section>
      </main>

      <footer className="border-t mt-16">
        <div className="container-responsive py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} TechTogether. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
