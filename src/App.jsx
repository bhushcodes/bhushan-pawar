import { useEffect, useMemo, useRef, useState } from 'react'
import { FaCss3Alt, FaEnvelope, FaGithub, FaHtml5, FaInstagram, FaLinkedinIn, FaPython, FaReact } from 'react-icons/fa'
import { MdOutlineRocketLaunch } from 'react-icons/md'
import { PiMoonBold, PiSunBold } from 'react-icons/pi'
import { SiBootstrap, SiJavascript, SiTailwindcss } from 'react-icons/si'
import { TbBrandVisualStudio } from 'react-icons/tb'

const buttonPrimary =
  'inline-flex items-center gap-2 rounded-[18px] border-[3px] border-arcBlack bg-arcRed px-6 py-3 font-display text-xs uppercase tracking-[0.35em] text-white shadow-[6px_6px_0_#212121] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-arcRed/40 dark:border-white dark:bg-arcRed dark:shadow-[6px_6px_0_#FFFFFF]'

const buttonSecondary =
  'inline-flex items-center gap-2 rounded-[18px] border-[3px] border-arcBlack bg-mint px-6 py-3 font-display text-xs uppercase tracking-[0.35em] text-arcBlack shadow-[6px_6px_0_#212121] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint/60 dark:border-white dark:bg-mint dark:text-arcDarkBg dark:shadow-[6px_6px_0_#FFFFFF]'

const buttonGhost =
  'inline-flex items-center gap-2 rounded-[18px] border-[3px] border-arcBlack bg-white px-6 py-3 font-display text-xs uppercase tracking-[0.35em] text-arcBlack shadow-[6px_6px_0_#212121] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint/40 dark:border-white dark:bg-arcDarkSurface dark:text-white dark:shadow-[6px_6px_0_#FFFFFF]'

const neoCard =
  'rounded-[30px] border-[3px] border-arcBlack bg-white/95 p-8 shadow-[10px_10px_0_#212121] dark:border-white dark:bg-arcDarkSurface dark:shadow-[10px_10px_0_#FFFFFF]'

const iconButton =
  'flex h-12 w-12 items-center justify-center rounded-[18px] border-[3px] border-arcBlack bg-white text-arcBlack shadow-[6px_6px_0_#212121] transition-transform hover:-translate-y-0.5 dark:border-white dark:bg-arcDarkSurface dark:text-white dark:shadow-[6px_6px_0_#FFFFFF]'

const skills = [
  {
    name: 'HTML',
    icon: FaHtml5,
    color: 'text-arcRed',
    level: 92,
    focus: 'Semantic layouts and accessible structure.',
  },
  {
    name: 'CSS',
    icon: FaCss3Alt,
    color: 'text-mint',
    level: 90,
    focus: 'Responsive design with animation systems.',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: 'text-amber-400',
    level: 88,
    focus: 'Interaction logic and state handling.',
  },
  {
    name: 'React',
    icon: FaReact,
    color: 'text-sky-400',
    level: 86,
    focus: 'Component-driven UI with hooks and routing.',
  },
  {
    name: 'Bootstrap',
    icon: SiBootstrap,
    color: 'text-purple-500',
    level: 84,
    focus: 'Fast prototyping and theming.',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: 'text-sky-500',
    level: 82,
    focus: 'Utility-first workflows for quick iteration.',
  },
  {
    name: 'Python',
    icon: FaPython,
    color: 'text-yellow-400',
    level: 78,
    focus: 'Automation scripts and chess bot logic.',
  },
  {
    name: 'VS Code',
    icon: TbBrandVisualStudio,
    color: 'text-indigo-500',
    level: 95,
    focus: 'Keyboard-first development efficiency.',
  },
]

const projects = [
  {
    id: 'solar-system',
    title: 'Dynamic Solar System',
    tech: 'HTML, CSS, JavaScript',
    context: 'Built for school science clubs to help students explore planetary motion.',
    problem: 'Designed orbit animations and made them mobile-friendly.',
    role: 'Added accessibility features for better usability.',
    outcome: 'Result: doubled student engagement and became the most revisited demo.',
    code: 'https://github.com/bhushcodes/solar-system-orbit-playground',
    live: 'https://bhushcodes.github.io/solar-system-orbit-playground/',
  },
  {
    id: 'chess-bot',
    title: 'BhushanChessBot',
    tech: 'Python',
    context: 'A simple chess bot made to help learners understand move logic — no complex setup needed.',
    problem: 'Wrote search algorithms and clear, step-by-step hints so practice stays transparent.',
    role: 'Built CLI tooling and messaging so learners can stay focused while they experiment.',
    outcome: 'Result: reduced analysis time by 40% and onboarded 20+ testers easily.',
    code: null,
    live: 'https://lichess.org/@/BhushanChessBot',
    buttonAlignment: 'center',
  },
  {
    id: 'chess-academy',
    title: 'Chess Academy',
    tech: 'HTML, CSS, JavaScript',
    context: 'A small marketing site for a community chess academy.',
    problem: 'Created a responsive layout that works beautifully on all devices.',
    role: 'Improved course visibility and accessibility (98 Lighthouse score).',
    outcome: 'Result: helped increase newsletter sign-ups by 1.4x.',
    code: 'https://github.com/bhushcodes/bhushan-chess-academy',
    live: 'https://bhushcodes.github.io/bhushan-chess-academy/',
  },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bhush-codes',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/unifiltered.bhushan',
    icon: FaGithub,
  },
  {
    label: 'Email',
    href: 'mailto:hello@bhushandev.me',
    icon: FaEnvelope,
  },
]

function Section({ id, eyebrow, title, description, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="space-y-6"
      style={{ scrollMarginTop: 'calc(var(--header-offset, 96px) + 24px)' }}
    >
      <header className="space-y-1">
        <p className="text-xs font-display uppercase tracking-[0.35em] text-arcBlack/80 dark:text-white">{eyebrow}</p>
        <h2 id={`${id}-title`} className="text-3xl font-display text-arcBlack sm:text-4xl dark:text-white">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base text-arcBlack/80 dark:text-white">{description}</p>
        ) : null}
      </header>
      {children}
    </section>
  )
}

function App() {
  const formatISTTime = useMemo(() => {
    const formatter = new Intl.DateTimeFormat('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata',
    })
    return (date) => {
      const parts = formatter.formatToParts(date)
      const get = (type) => parts.find((part) => part.type === type)?.value ?? '--'
      const dayPeriod = get('dayPeriod').toLowerCase()
      return `${get('hour')}:${get('minute')}:${get('second')} ${dayPeriod} IST`
    }
  }, [])
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const stored = window.localStorage.getItem('bhushan-theme')
    if (stored) return stored === 'dark'
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  })
  const headerRef = useRef(null)
  const [currentTime, setCurrentTime] = useState(() => formatISTTime(new Date()))
  const [formStatus, setFormStatus] = useState('idle')
  const [formFeedback, setFormFeedback] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const languages = useMemo(() => ['English', 'Hindi', 'Marathi'], [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDark)
    root.classList.toggle('light', !isDark)
  }, [isDark])

  useEffect(() => {
    window.localStorage.setItem('bhushan-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const tick = () => setCurrentTime(formatISTTime(new Date()))
    tick()
    const interval = window.setInterval(tick, 1000)
    return () => window.clearInterval(interval)
  }, [formatISTTime])

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const updateOffset = () => {
      if (!headerRef.current) return
      const offset = headerRef.current.offsetHeight
      document.documentElement.style.setProperty('--header-offset', `${offset}px`)
    }
    updateOffset()
    window.addEventListener('resize', updateOffset)
    return () => window.removeEventListener('resize', updateOffset)
  }, [])
  useEffect(() => {
    if (!headerRef.current) return
    document.documentElement.style.setProperty('--header-offset', `${headerRef.current.offsetHeight}px`)
  }, [isDark])

  const handleInputChange = (field) => (event) => {
    setFormData((previous) => ({ ...previous, [field]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (formStatus === 'submitting') return

    setFormStatus('submitting')
    setFormFeedback('')

    const formElement = event.currentTarget
    const submission = new FormData(formElement)

    try {
      const response = await fetch('https://formspree.io/f/xanpbkwb', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: submission,
      })

      if (response.ok) {
        setFormStatus('success')
        setFormFeedback('Message delivered!')
        setFormData({ name: '', email: '', message: '' })
        return
      }

      const data = await response.json().catch(() => null)
      const message = data?.errors?.[0]?.message ?? 'Something went wrong. Please try again.'
      setFormStatus('error')
      setFormFeedback(message)
    } catch (error) {
      setFormStatus('error')
      setFormFeedback('Network error. Please retry in a moment.')
    }
  }

  return (
    <div className="min-h-screen bg-arcSand text-arcBlack transition-colors dark:bg-arcDarkBg dark:text-white">
      <header ref={headerRef} className="sticky top-0 z-50 border-b-[3px] border-arcBlack bg-arcSand/70 backdrop-blur-md transition-colors dark:border-white dark:bg-arcDarkSurface/70">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <p className="text-xs font-display uppercase tracking-[0.35em] text-arcBlack/80 dark:text-white">Open to work — India</p>
            <span className="font-mono text-xs text-arcBlack/80 dark:text-mint">{currentTime}</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-display text-arcBlack sm:text-3xl dark:text-white">Bhushan Pawar</h1>
              <div className="flex items-center gap-2 text-xl text-arcBlack dark:text-white">
                <a
                  href="https://github.com/bhushcodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-[#181717] transition hover:text-arcRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-arcRed/40 dark:text-white dark:hover:text-mint dark:focus-visible:outline-mint/40"
                >
                  <FaGithub aria-hidden />
                </a>
                <a
                  href="https://www.linkedin.com/in/bhush-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-[#0A66C2] transition hover:text-arcRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-arcRed/40 dark:text-[#0A66C2] dark:hover:text-mint dark:focus-visible:outline-mint/40"
                >
                  <FaLinkedinIn aria-hidden />
                </a>
                <a
                  href="https://www.instagram.com/unfiltered.bhushan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#E4405F] transition hover:text-arcRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-arcRed/40 dark:text-[#E4405F] dark:hover:text-mint dark:focus-visible:outline-mint/40"
                >
                  <FaInstagram aria-hidden />
                </a>
              </div>
            </div>
            <p className="text-sm text-arcBlack/70 dark:text-white">Software Developer (Fresher)</p>
          </div>
          <div className="flex w-full flex-wrap items-center justify-end gap-3">
            <nav className="hidden items-center gap-3 text-xs font-display uppercase tracking-[0.35em] text-arcBlack/70 md:flex dark:text-white">
              <a className="rounded-[14px] px-3 py-2 transition hover:bg-arcBlack hover:text-arcSand dark:hover:bg-arcDarkText dark:hover:text-white" href="#skills">
                Skills
              </a>
              <a className="rounded-[14px] px-3 py-2 transition hover:bg-arcBlack hover:text-arcSand dark:hover:bg-arcDarkText dark:hover:text-white" href="#projects">
                Projects
              </a>
              <a className="rounded-[14px] px-3 py-2 transition hover:bg-arcBlack hover:text-arcSand dark:hover:bg-arcDarkText dark:hover:text-white" href="#contact">
                Contact
              </a>
            </nav>
            <button
              type="button"
              onClick={() => setIsDark((previous) => !previous)}
              className="flex items-center gap-2 rounded-[18px] border-[3px] border-arcBlack bg-white px-4 py-2 text-xs font-display uppercase tracking-[0.35em] text-arcBlack shadow-[5px_5px_0_#212121] transition hover:-translate-y-0.5 dark:border-white dark:bg-arcDarkSurface dark:text-white dark:shadow-[5px_5px_0_#FFFFFF]"
              aria-label="Toggle theme"
            >
              {isDark ? <PiSunBold className="text-lg" aria-hidden /> : <PiMoonBold className="text-lg" aria-hidden />}
              <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'} Mode</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-4 py-12 sm:px-6">
        <section id="hero" className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)]">
          <article className={neoCard}>
            <span className="inline-flex rounded-[16px] border-[3px] border-arcBlack bg-arcSand px-4 py-2 text-xs font-display uppercase tracking-[0.4em] text-arcBlack/80 dark:border-white dark:bg-arcDarkBg dark:text-white">
              Portfolio Snapshot
            </span>
            <h1 className="mt-6 text-4xl font-display leading-[1.1] text-arcBlack sm:text-5xl dark:text-white">
              🌙 Bhushan Pawar — Software Developer (Fresher)
            </h1>
            <p className="mt-4 text-lg font-medium text-arcBlack/90 dark:text-white">
              Crafting playful web experiences built for speed and accessibility
            </p>
            <p className="mt-4 max-w-2xl text-base text-arcBlack/80 dark:text-white">
              I pair inclusive front-end engineering with animation thinking so products stay joyful without sacrificing performance.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-display uppercase tracking-[0.35em] text-arcBlack/80 dark:text-white">
              <span className="rounded-[14px] border-[3px] border-arcBlack bg-white px-3 py-2 dark:border-white dark:bg-arcDarkSurface dark:text-white">
                Languages
              </span>
              {languages.map((language) => (
                <span
                  key={language}
                  className="rounded-[14px] border-[3px] border-arcBlack bg-arcSand px-3 py-2 text-arcBlack dark:border-white dark:bg-arcDarkBg dark:text-white"
                >
                  {language}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className={buttonPrimary}>
                <MdOutlineRocketLaunch aria-hidden />
                View Projects
              </a>
              <a href="#contact" className={buttonSecondary}>
                <FaEnvelope aria-hidden />
                Hire Me
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={iconButton} aria-label={item.label}>
                    <Icon aria-hidden />
                  </a>
                )
              })}
            </div>
          </article>

          <div className={neoCard}>
            <h3 className="text-xl font-display text-arcBlack dark:text-white">💡 What I Do</h3>
            <ul className="mt-4 space-y-3 text-sm text-arcBlack/80 dark:text-white">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-3 w-3 rounded-sm bg-arcRed" aria-hidden />
                Build interactive, accessible front-ends that look great on any device.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-3 w-3 rounded-sm bg-mint" aria-hidden />
                Create design systems that keep brands consistent and easy to scale.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-3 w-3 rounded-sm bg-arcBlack" aria-hidden />
                Add lightweight animations that bring interfaces to life without slowing them down.
              </li>
            </ul>
            <div className="mt-8 rounded-[22px] border-[3px] border-arcBlack bg-arcSand p-5 text-sm text-arcBlack/80 dark:border-white dark:bg-arcDarkBg dark:text-white">
              <p className="font-display text-xs uppercase tracking-[0.35em] text-arcBlack/70 dark:text-white">
                Availability
              </p>
              <p className="mt-3">
                I enjoy working with early teams and startups where thoughtful front-end craft can shape the product.
              </p>
            </div>
          </div>
        </section>

        <Section
          id="about"
          eyebrow="👋 About Me"
          title="Hi, I'm Bhushan — a front-end developer who loves building clean, interactive, and user-friendly web experiences."
          description="I focus on making websites that feel good to use — fast, accessible, and full of character."
        >
          <p className="max-w-3xl text-base text-arcBlack/80 dark:text-white">
            I enjoy working with early teams and startups where front-end craft can really shape the product and how people feel using it.
          </p>
        </Section>

        <Section
          id="skills"
          eyebrow="🛠 My Core Skills"
          title="A practical, well-rounded stack for turning designs into polished experiences"
          description="Skill · Focus pairs show where I invest to deliver reliable, delightful products."
        >
          <ul className="grid gap-6 sm:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <li key={skill.name} className={neoCard}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-[18px] border-[3px] border-arcBlack bg-arcSand text-2xl dark:border-white dark:bg-arcDarkBg">
                        <Icon className={skill.color} aria-hidden />
                      </span>
                      <div>
                        <h3 className="font-display text-xl text-arcBlack dark:text-white">{skill.name}</h3>
                        <p className="text-sm text-arcBlack/70 dark:text-white">{skill.focus}</p>
                      </div>
                    </div>
                    <span className="text-xs font-display uppercase tracking-[0.35em] text-arcBlack/60 dark:text-white">{skill.level}%</span>
                  </div>
                  <div className="mt-5 h-3 rounded-full border-[3px] border-arcBlack bg-white dark:border-white dark:bg-arcDarkBg">
                    <span className="block h-full rounded-full bg-mint" style={{ width: `${skill.level}%` }} />
                  </div>
                </li>
              )
            })}
          </ul>
        </Section>

        <Section
          id="projects"
          eyebrow="🚀 Featured Projects"
          title="Playful builds that still deliver measurable impact"
          description="Each project below blends character, accessibility, and clear outcomes."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.id} className={neoCard}>
                <header className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-xl text-arcBlack dark:text-white">{project.title}</h3>
                    <span className="rounded-[14px] border-[3px] border-arcBlack bg-arcSand px-3 py-1 text-xs font-display uppercase tracking-[0.35em] text-arcBlack/80 dark:border-white dark:bg-arcDarkBg dark:text-white">
                      {project.tech}
                    </span>
                  </div>
                  <p className="text-sm text-arcBlack/80 dark:text-white">{project.context}</p>
                </header>
                <dl className="mt-4 space-y-3 text-sm text-arcBlack/80 dark:text-white">
                  <div>
                    <dt className="font-display text-xs uppercase tracking-[0.35em] text-arcBlack/60 dark:text-white">Problem</dt>
                    <dd>{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-display text-xs uppercase tracking-[0.35em] text-arcBlack/60 dark:text-white">Role</dt>
                    <dd>{project.role}</dd>
                  </div>
                  <div>
                    <dt className="font-display text-xs uppercase tracking-[0.35em] text-arcBlack/60 dark:text-white">Impact</dt>
                    <dd>{project.outcome}</dd>
                  </div>
                </dl>
                <div
                  className={`mt-6 flex flex-wrap gap-3 ${
                    project.buttonAlignment === 'center' ? 'justify-center' : ''
                  }`}
                >
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
                      🔗 Visit Site
                    </a>
                  ) : null}
                  {project.code ? (
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className={buttonGhost}>
                      💻 View Code
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="📬 Let's Connect"
          title="I'm currently open for full-time or internship roles where thoughtful front-end development makes a real impact."
          description="Or just drop a message — I usually reply within a day."
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <form onSubmit={handleSubmit} className={neoCard}>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-display uppercase tracking-[0.35em] text-arcBlack/70 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    className="mt-2 w-full rounded-[16px] border-[3px] border-arcBlack bg-white px-4 py-3 text-base text-arcBlack outline-none transition focus:ring-2 focus:ring-mint/50 dark:border-white dark:bg-arcDarkBg dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-display uppercase tracking-[0.35em] text-arcBlack/70 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    className="mt-2 w-full rounded-[16px] border-[3px] border-arcBlack bg-white px-4 py-3 text-base text-arcBlack outline-none transition focus:ring-2 focus:ring-mint/50 dark:border-white dark:bg-arcDarkBg dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-display uppercase tracking-[0.35em] text-arcBlack/70 dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange('message')}
                    className="mt-2 w-full rounded-[16px] border-[3px] border-arcBlack bg-white px-4 py-3 text-base text-arcBlack outline-none transition focus:ring-2 focus:ring-mint/50 dark:border-white dark:bg-arcDarkBg dark:text-white"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <button type="submit" className={buttonPrimary} disabled={formStatus === 'submitting'}>
                    {formStatus === 'submitting' ? 'Sending…' : 'Send Message'}
                  </button>
                  {formFeedback ? (
                    <span
                      role="status"
                      aria-live="polite"
                      className={`text-xs font-display uppercase tracking-[0.35em] ${
                        formStatus === 'error' ? 'text-arcRed' : 'text-mint'
                      }`}
                    >
                      {formFeedback}
                    </span>
                  ) : null}
                </div>
                <p className="text-sm text-arcBlack/70 dark:text-white">
                  Tell me about the interface you need and I'll get back to you within one business day.
                </p>
              </div>
            </form>
            <div className="space-y-6">
              <div className={neoCard}>
                <h3 className="text-xl font-display text-arcBlack dark:text-white">Prefer a quick action?</h3>
                <p className="mt-3 text-sm text-arcBlack/80 dark:text-white">Skip the form and connect directly.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href="tel:+917219678798" className={buttonSecondary}>
                    💬 Call +91 7219678798
                  </a>
                  <a href="/BhushanPawarResume.pdf" className={buttonGhost} download>
                    📄 Download Resume
                  </a>
                </div>
              </div>
              <div className={`${neoCard} bg-white text-arcBlack dark:bg-arcDarkSurface dark:text-white`}>
                <p className="text-xs font-display uppercase tracking-[0.35em] text-arcBlack/70 dark:text-white">Why Bhushan?</p>
                <p className="mt-3 text-base">
                  I translate playful briefs into resilient front-end systems, keeping accessibility, performance, and delivery speed in balance.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <p className="text-center text-sm text-arcBlack/70 dark:text-white">
          ✨ I bring energy, precision, and empathy to front-end development — balancing accessibility, performance, and playful design.
        </p>
      </main>

      <footer className="border-t-[3px] border-arcBlack bg-arcSand/80 py-8 text-arcBlack dark:border-white dark:bg-arcDarkSurface/80 dark:text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-xs font-display uppercase tracking-[0.35em] sm:flex-row sm:text-left">
          <p>Built with ❤️ + ☕ by Bhushan Pawar</p>
          <button
            type="button"
            onClick={() => setIsDark((previous) => !previous)}
            className="rounded-[18px] border-[3px] border-arcBlack bg-white px-4 py-2 text-xs font-display uppercase tracking-[0.35em] text-arcBlack shadow-[5px_5px_0_#212121] transition hover:-translate-y-0.5 dark:border-white dark:bg-arcDarkSurface dark:text-white dark:shadow-[5px_5px_0_#FFFFFF]"
          >
            {isDark ? 'Use light theme' : 'Use dark theme'}
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
