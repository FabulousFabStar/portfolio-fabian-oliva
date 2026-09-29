import { useEffect, useState } from 'react'
import profilePhoto from './assets/fabian-profile.png'

const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
]

const skillGroups = [
  {
    number: '01',
    title: 'Frontend',
    description: 'Interfaces web claras, adaptables y centradas en las personas.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Angular'],
  },
  {
    number: '02',
    title: 'Backend',
    description: 'Servicios y lógica que conectan las experiencias digitales.',
    skills: ['Node.js', 'APIs REST', 'Integración de servicios'],
  },
  {
    number: '03',
    title: 'Datos',
    description: 'Organización y persistencia de información para aplicaciones.',
    skills: ['MongoDB', 'Modelado de datos'],
  },
  {
    number: '04',
    title: 'Herramientas',
    description: 'Diseño, colaboración y control de cada etapa del desarrollo.',
    skills: ['Git', 'GitHub', 'Figma', 'VS Code'],
  },
]

const projects = [
  {
    number: '01',
    name: 'ParkLink',
    category: 'Plataforma Full Stack',
    description:
      'Plataforma digital que conecta a conductores con propietarios de estacionamientos para consultar espacios, realizar reservas y aprovechar cocheras disponibles.',
    contribution:
      'Participé en la definición del producto y sus criterios arquitectónicos, la integración inicial del frontend y la validación entre la aplicación móvil y el backend.',
    technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Flutter'],
    href: 'https://github.com/1ASI0657-2610-17949-ParkLink',
    accent: 'blue',
  },
  {
    number: '02',
    name: 'EMSafe',
    category: 'Solución IoT',
    description:
      'Sistema para monitorear contaminación electromagnética mediante sensores IoT, aplicaciones web y móvil, alertas y visualización de mediciones.',
    contribution:
      'Trabajé en análisis competitivo, historias de usuario, arquitectura de gestión de dispositivos, wireframes móviles y planificación de sprints.',
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Flutter', 'ESP32'],
    href: 'https://github.com/Desarrollo-de-soluciones-IOT-UPC',
    accent: 'cyan',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.02-1.91-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.01a9.2 9.2 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.88 6.75 1.88 1.88 0 0 0 4.88 3ZM21 13.7c0-3.84-2.05-5.63-4.79-5.63-2.2 0-3.19 1.22-3.74 2.07V8.25H9.22V21h3.25v-6.31c0-1.66.31-3.26 2.37-3.26 2.03 0 2.05 1.9 2.05 3.37V21H21v-7.3Z" />
    </svg>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      elements.forEach((element) => {
        element.dataset.visible = 'true'
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            element.dataset.visible = 'true'
            observer.unobserve(element)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-portfolio-bg/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Navegación principal">
          <a href="#inicio" className="flex items-center gap-3 font-semibold tracking-tight text-white">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-portfolio-cyan/30 bg-portfolio-surface text-sm text-portfolio-cyan shadow-[0_0_24px_rgba(34,211,238,0.12)]">
              FO
            </span>
            <span className="hidden sm:inline">Fabián Oliva</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-portfolio-muted transition hover:text-portfolio-cyan">
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contacto"
            className="hidden rounded-full border border-portfolio-cyan/35 px-4 py-2 text-sm font-medium text-portfolio-cyan transition hover:border-portfolio-cyan hover:bg-portfolio-cyan/10 sm:inline-flex"
          >
            Contacto
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-portfolio-cyan/30 hover:text-portfolio-cyan md:hidden"
          >
            {isMenuOpen ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </nav>

        <div
          id="mobile-navigation"
          className={`border-t border-white/5 bg-portfolio-bg/95 px-5 pb-6 pt-4 backdrop-blur-xl transition-all duration-300 md:hidden ${isMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible absolute inset-x-0 -translate-y-3 opacity-0'}`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-portfolio-muted transition hover:bg-white/5 hover:text-portfolio-cyan"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-xl bg-portfolio-blue px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Contacto
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:pt-24">
          <div className="absolute left-[8%] top-32 -z-10 h-72 w-72 rounded-full bg-portfolio-blue/15 blur-[110px]" />
          <div className="absolute bottom-12 right-[8%] -z-10 h-80 w-80 rounded-full bg-portfolio-cyan/10 blur-[120px]" />
          <div className="hero-grid absolute inset-0 -z-20 opacity-30" />

          <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl" data-reveal>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-portfolio-cyan/20 bg-portfolio-surface/70 px-4 py-2 text-sm text-portfolio-cyan">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-portfolio-cyan opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-portfolio-cyan" />
                </span>
                Disponible para aprender y colaborar
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-portfolio-blue sm:text-base">
                Hola, soy
              </p>
              <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Fabián Oliva<span className="text-portfolio-cyan">.</span>
              </h1>
              <h2 className="mt-5 text-xl font-medium text-slate-300 sm:text-2xl">
                Desarrollador Full Stack en formación
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-portfolio-muted sm:text-lg">
                Construyo experiencias digitales y soluciones de software mientras continúo aprendiendo, creciendo e inspirando a otras personas a perseguir sus sueños en la programación.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#proyectos" className="inline-flex items-center justify-center gap-2 rounded-full bg-portfolio-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-500">
                  Ver mis proyectos
                  <ArrowIcon />
                </a>
                <a href="mailto:fabianalejandro1001@gmail.com" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-portfolio-cyan/40 hover:bg-portfolio-cyan/10">
                  Contáctame
                </a>
              </div>

              <div className="mt-9 flex items-center gap-5 text-portfolio-muted">
                <span className="text-sm">Encuéntrame en</span>
                <span className="h-px w-10 bg-white/10" />
                <a href="https://github.com/FabulousFabStar" target="_blank" rel="noreferrer" aria-label="Perfil de GitHub" className="transition hover:text-portfolio-cyan">
                  <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/fabian-oliva-lopez-7407b133b/" target="_blank" rel="noreferrer" aria-label="Perfil de LinkedIn" className="transition hover:text-portfolio-cyan">
                  <LinkedInIcon />
                </a>
              </div>
            </div>

            <div className="reveal-delay-1 relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto" data-reveal>
              <div className="absolute -inset-4 rotate-3 rounded-[2.5rem] border border-portfolio-cyan/20" />
              <div className="absolute -inset-4 -rotate-3 rounded-[2.5rem] border border-portfolio-blue/20" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-portfolio-surface p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-white">
                  <img src={profilePhoto} alt="Retrato de Fabián Oliva" className="aspect-[4/5] w-full object-cover object-top" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-portfolio-bg/45 to-transparent" />
                </div>
                <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between rounded-2xl border border-white/10 bg-portfolio-bg/80 p-4 backdrop-blur-md">
                  <div>
                    <p className="text-sm font-semibold text-white">Ingeniería de Software</p>
                    <p className="mt-1 text-xs text-portfolio-muted">Universidad Peruana de Ciencias Aplicadas</p>
                  </div>
                  <span className="h-2.5 w-2.5 rounded-full bg-portfolio-cyan shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
                </div>
              </div>

              <div className="absolute -left-8 top-12 hidden rounded-2xl border border-white/10 bg-portfolio-surface/90 px-4 py-3 shadow-xl backdrop-blur lg:block">
                <p className="text-xs text-portfolio-muted">En constante</p>
                <p className="mt-1 text-sm font-semibold text-portfolio-cyan">aprendizaje</p>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="scroll-mt-20 border-t border-white/5 px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div data-reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-portfolio-cyan">Conóceme</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Sobre mí</h2>
              <div className="mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-portfolio-blue to-portfolio-cyan" />
            </div>

            <div className="reveal-delay-1" data-reveal>
              <p className="text-xl leading-9 text-slate-200 sm:text-2xl sm:leading-10">
                Soy estudiante de Ingeniería de Software en la UPC y disfruto convertir ideas en soluciones digitales útiles.
              </p>
              <div className="mt-8 grid gap-6 text-base leading-8 text-portfolio-muted sm:grid-cols-2">
                <p>
                  Tengo conocimientos en desarrollo frontend y backend, utilizando tecnologías como HTML, CSS, JavaScript, React, Angular, Node.js y MongoDB.
                </p>
                <p>
                  Mi objetivo es seguir creciendo como desarrollador y demostrar que, con constancia y dedicación, es posible avanzar e inspirar a otras personas a perseguir sus sueños en la programación.
                </p>
              </div>

              <div className="mt-10 rounded-3xl border border-portfolio-cyan/15 bg-gradient-to-br from-portfolio-surface to-portfolio-bg p-7 sm:p-8">
                <div className="flex gap-5">
                  <span className="text-4xl leading-none text-portfolio-cyan/50">“</span>
                  <div>
                    <p className="leading-7 text-slate-300">
                      Este portafolio está dedicado a mi familia, que me ha apoyado cada día y siempre ha estado presente para cuidarme, orientarme y motivarme a seguir adelante.
                    </p>
                    <p className="mt-4 text-sm font-semibold text-portfolio-cyan">Cada paso de este camino también es gracias a ellos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="habilidades" className="scroll-mt-20 bg-portfolio-surface/35 px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl" data-reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-portfolio-cyan">Lo que utilizo</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Habilidades y herramientas</h2>
              <p className="mt-6 text-lg leading-8 text-portfolio-muted">
                Una base técnica que continúa creciendo con cada curso, reto y proyecto en equipo.
              </p>
            </div>

            <div className="reveal-delay-1 mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4" data-reveal>
              {skillGroups.map((group) => (
                <article key={group.title} className="group rounded-3xl border border-white/7 bg-portfolio-bg/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-portfolio-cyan/25">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-portfolio-cyan">{group.number}</span>
                    <span className="h-2 w-2 rounded-full bg-portfolio-blue transition group-hover:bg-portfolio-cyan" />
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-white">{group.title}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-portfolio-muted">{group.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-white/8 bg-white/4 px-3 py-1.5 text-xs text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end" data-reveal>
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-portfolio-cyan">Trabajo en equipo</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Proyectos destacados</h2>
                <p className="mt-6 text-lg leading-8 text-portfolio-muted">
                  Proyectos académicos donde participé en distintas etapas del diseño, desarrollo, arquitectura y validación.
                </p>
              </div>
              <a href="https://github.com/FabulousFabStar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-portfolio-cyan transition hover:text-cyan-300">
                Ver perfil de GitHub <ArrowIcon />
              </a>
            </div>

            <div className="mt-14 grid gap-7 lg:grid-cols-2">
              {projects.map((project) => (
                <article key={project.name} className="group relative overflow-hidden rounded-[2rem] border border-white/8 bg-portfolio-surface/55 p-7 sm:p-9" data-reveal>
                  <div className={`absolute right-0 top-0 h-48 w-48 rounded-full blur-[90px] ${project.accent === 'blue' ? 'bg-portfolio-blue/20' : 'bg-portfolio-cyan/15'}`} />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm text-portfolio-cyan">Proyecto {project.number}</span>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-portfolio-muted">{project.category}</span>
                    </div>
                    <h3 className="mt-10 text-4xl font-bold tracking-tight text-white">{project.name}</h3>
                    <p className="mt-5 leading-7 text-portfolio-muted">{project.description}</p>

                    <div className="mt-7 border-l-2 border-portfolio-cyan/40 pl-5">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-portfolio-cyan">Mi participación</p>
                      <p className="text-sm leading-6 text-slate-300">{project.contribution}</p>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span key={technology} className="rounded-lg bg-white/5 px-3 py-2 text-xs text-slate-300">{technology}</span>
                      ))}
                    </div>

                    <a href={project.href} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-portfolio-cyan">
                      Explorar proyecto <ArrowIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="scroll-mt-20 px-5 pb-20 pt-10 sm:px-8 lg:pb-28">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-portfolio-cyan/15 bg-gradient-to-br from-portfolio-blue/20 via-portfolio-surface to-portfolio-bg px-7 py-16 text-center sm:px-12 lg:py-20" data-reveal>
            <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-portfolio-cyan/10 blur-[90px]" />
            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-portfolio-cyan">Construyamos algo juntos</p>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">¿Tienes una idea o quieres conversar?</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-portfolio-muted">
                Estoy abierto a colaborar, aprender de nuevos desafíos y conectar con personas apasionadas por la tecnología.
              </p>
              <a href="mailto:fabianalejandro1001@gmail.com" className="mt-9 inline-flex items-center gap-2 rounded-full bg-portfolio-cyan px-7 py-4 text-sm font-bold text-portfolio-bg transition hover:-translate-y-0.5 hover:bg-cyan-300">
                Envíame un correo <ArrowIcon />
              </a>
              <p className="mt-5 text-sm text-portfolio-muted">fabianalejandro1001@gmail.com</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-portfolio-muted sm:flex-row sm:text-left">
          <p>© 2026 Fabián Oliva. Construido con dedicación y aprendizaje continuo.</p>
          <div className="flex items-center gap-5">
            <a href="https://github.com/FabulousFabStar" target="_blank" rel="noreferrer" className="transition hover:text-portfolio-cyan">GitHub</a>
            <a href="https://www.linkedin.com/in/fabian-oliva-lopez-7407b133b/" target="_blank" rel="noreferrer" className="transition hover:text-portfolio-cyan">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
