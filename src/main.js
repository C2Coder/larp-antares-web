import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="fixed top-0 left-0 right-0 z-50 bg-header/95 backdrop-blur border-b border-border shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-3">
          <img src="/assets/logo.svg" alt="Logo" class="h-8 w-8" onerror="this.style.display='none'">
          <span class="text-xl font-bold text-primary">Antares</span>
        </div>
        
        <div class="hidden md:flex items-center gap-6">
          <a href="#about" class="text-text-muted hover:text-primary transition-colors">About</a>
          <a href="#services" class="text-text-muted hover:text-primary transition-colors">Services</a>
          <a href="#gallery" class="text-text-muted hover:text-primary transition-colors">Gallery</a>
          <a href="#contact" class="text-text-muted hover:text-primary transition-colors">Contact</a>
        </div>

        <div class="flex items-center gap-3">
          <a href="https://instagram.com" target="_blank" rel="noopener" class="p-2 text-text-muted hover:text-primary transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener" class="p-2 text-text-muted hover:text-primary transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
      </div>
    </nav>
  </header>

  <main class="pt-16">
    <section id="hero" class="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background-light to-accent/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Welcome to <span class="text-primary">Antares</span>
        </h1>
        <p class="text-xl text-text-muted max-w-2xl mx-auto mb-8">
          Your tagline or main message goes here. Make it compelling and clear.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" class="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium text-lg">
            Contact Us
          </a>
          <a href="#about" class="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium text-lg">
            Learn More
          </a>
        </div>
      </div>
    </section>

    <section id="about" class="py-20 bg-background-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">About Us</h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-lg text-text-muted mb-6">
              Add your about text here. Describe who you are, what you do, and why it matters.
            </p>
            <p class="text-lg text-text-muted">
              You can add more paragraphs as needed to tell your story and connect with your audience.
            </p>
          </div>
          <div class="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
            <span class="text-text-muted">Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="p-6 bg-background-dark rounded-xl border border-border hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Service One</h3>
            <p class="text-text-muted">Description of your first service and its benefits.</p>
          </div>
          <div class="p-6 bg-background-dark rounded-xl border border-border hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Service Two</h3>
            <p class="text-text-muted">Description of your second service and its benefits.</p>
          </div>
          <div class="p-6 bg-background-dark rounded-xl border border-border hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Service Three</h3>
            <p class="text-text-muted">Description of your third service and its benefits.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="gallery" class="py-20 bg-background-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">Gallery</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
            <span class="text-text-muted">Image 1</span>
          </div>
          <div class="aspect-square bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center">
            <span class="text-text-muted">Image 2</span>
          </div>
          <div class="aspect-square bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center">
            <span class="text-text-muted">Image 3</span>
          </div>
          <div class="aspect-square bg-gradient-to-br from-primary/10 to-accent/20 rounded-xl flex items-center justify-center">
            <span class="text-text-muted">Image 4</span>
          </div>
          <div class="aspect-square bg-gradient-to-br from-accent/10 to-primary/20 rounded-xl flex items-center justify-center">
            <span class="text-text-muted">Image 5</span>
          </div>
          <div class="aspect-square bg-gradient-to-br from-accent/10 to-primary/20 rounded-xl flex items-center justify-center">
            <span class="text-text-muted">Image 6</span>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div class="max-w-xl mx-auto">
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" class="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Your name">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" class="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="your@email.com">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium mb-2">Message</label>
              <textarea id="message" rows="4" class="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" class="w-full px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium text-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-text text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center gap-6">
        <div class="flex items-center gap-6">
          <img src="/assets/logo.svg" alt="Partner Logo 1" class="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" onerror="this.style.display='none'">
          <img src="/assets/logo.svg" alt="Partner Logo 2" class="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" onerror="this.style.display='none'">
          <img src="/assets/logo.svg" alt="Partner Logo 3" class="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" onerror="this.style.display='none'">
        </div>
        <p class="text-white/70">
          Made by <a href="https://github.com/C2Coder" class="text-primary hover:underline">C2Coder</a>
        </p>
      </div>
    </div>
  </footer>
`
