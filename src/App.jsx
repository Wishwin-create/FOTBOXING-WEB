import { useEffect, useState } from 'react'
import logoImage from './assets/logo.jpg'
import backgroundImage from './assets/background.jpg'
import missionImage from './assets/mission image.jpg'
import coachImage from './assets/coach img.png'
import facilityImageOne from './assets/facility 1.png'
import facilityImageTwo from './assets/facility 2.png'
import facilityImageThree from './assets/facility 3.png'
import pathwayImage from './assets/pathway img.jpg'
import aboutImageOne from './assets/about img.png'
import aboutImageTwo from './assets/about img 2.png'
import aboutImageThree from './assets/about img 3.png'

const pages = [
  { id: 'home', label: 'Home' },
  { id: 'training', label: 'Training' },
  { id: 'pathway', label: 'Pathway' },
  { id: 'about', label: 'About' },
  { id: 'join', label: 'Join' },
]

const goals = [
  'Freshers Tournament',
  'Inter-Faculty Championship',
  'Novices Boxing Championship',
  'Intermediate Boxing Championship',
  'Provincial Meets',
  'Nationals',
]

const schedule = [
  {
    title: 'Main Practices',
    days: 'Mon - Wed - Fri',
    time: '5.00 PM to 7.30 PM',
    place: 'UOC Indoor Gymnasium',
  },
  {
    title: 'Faculty Practices',
    days: 'Tue - Thu - Sat',
    time: 'Flexible based on student availability',
    place: 'UOC / FOT Sport Room',
  },
  {
    title: 'Beach Training',
    days: 'Special conditioning sessions',
    time: 'Scheduled with the squad',
    place: 'Mount Lavinia Beach',
  },
]

const benefits = [
  'Builds patience, self-control, and resilience under pressure.',
  'Sharpens focus and strategic thinking inside and outside the ring.',
  'Develops confidence, respect, and long-term discipline.',
]

const facilities = [
  'Punching bags',
  'Gloves',
  'Skipping ropes',
  'Bandages',
  'Training pads',
  'Weights',
]

const coachFacts = [
  'IBA 3-Star Boxing Coach',
  '7-time National Champion',
  'NVQ Level 5 Physical Fitness Trainer',
  '15+ years of boxing experience',
  'Commonwealth Games and Asian Games representation',
]

function getInitialPage() {
  const hash = window.location.hash.replace('#', '')
  return pages.some((page) => page.id === hash) ? hash : 'home'
}

function App() {
  const [activePage, setActivePage] = useState(getInitialPage)

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getInitialPage())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = (pageId) => {
    window.location.hash = pageId
    setActivePage(pageId)

    if (pageId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }


    if (pageId === 'about') {
      requestAnimationFrame(() => {
        document.getElementById('about-overview')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
    if (pageId === 'training') {
      requestAnimationFrame(() => {
        document.getElementById('training-overview')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }

    if (pageId === 'pathway') {
      requestAnimationFrame(() => {
        document.getElementById('pathway-overview')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }

    if (pageId === 'join') {
      requestAnimationFrame(() => {
        document.getElementById('join-overview')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }

  return (
    <div className="site-shell" style={{ backgroundImage: `linear-gradient(rgba(6, 6, 6, 0.72), rgba(16, 6, 6, 0.86)), url(${backgroundImage})` }}>
      <header className="top-frame">
        <div className="brand-lockup">
          <img className="brand-logo" src={logoImage} alt="UOC FOT Boxing logo" />
          <div>
            <p className="brand-kicker">Faculty of Technology</p>
            <h1>UOC FOT Boxing</h1>
          </div>
        </div>

        <nav className="main-nav" aria-label="Primary">
          {pages.map((page) => (
            <button
              key={page.id}
              type="button"
              className={activePage === page.id ? 'nav-pill active' : 'nav-pill'}
              onClick={() => navigate(page.id)}
            >
              {page.label}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">Faculty Boxing Initiative - Rise of the New Team</p>
            <h2>
              Building a boxing identity for the
              <span> University of Colombo Faculty of Technology</span>
            </h2>
            <p className="hero-text">
              Boxing is more than a sport. It is discipline, confidence, and
              strength. This concept site is based on the FOT boxing proposal
              and presents a front-end presence for students in Homagama who
              want to train, grow, and represent the faculty with purpose.
            </p>
          </div>

          <div className="hero-aside">
            <article className="glass-card impact-card">
              <img className="mission-image" src={missionImage} alt="Mission training visual" />
              <p className="mini-label">Mission</p>
              <strong>Bring the spirit of boxing to the faculty and remove the barrier of distance.</strong>
            </article>
            <article className="glass-card coach-highlight-card">
              <p className="mini-label">LEGENDARY COACH</p>
              <img className="coach-highlight-image" src={coachImage} alt="Legendary boxing coach" />
             
              <span>IBA 3-Star Boxing Coach, 7-time National Champion, and technical guide for the new team.</span>
              <span>Our boxing program is guided by an IBA 3-Star Certified Coach with over
                            15 years of experience in the sport.
                            A 7-time National Champion and a
                            proud representative of Sri Lanka at
                            prestigious international events such as
                            the Commonwealth Games and Asian
                            Games, our coach brings world-class
                            expertise, discipline, and passion to
                            every training session.
                            His deep technical knowledge and
                            strategic insight inspire us to train
                            harder, aim higher, and build a new
                            generation of champions. 
                            
                            
                            
                            </span>

            </article>
          </div>
        </section>

        <PageTabs activePage={activePage} navigate={navigate} />
      </main>
    </div>
  )
}

function PageTabs({ activePage, navigate }) {
  if (activePage === 'about') {
    return <HomePage navigate={navigate} />
  }

  if (activePage === 'training') {
    return <HomePage navigate={navigate} />
  }

  if (activePage === 'pathway') {
    return <HomePage navigate={navigate} />
  }

  if (activePage === 'join') {
    return <HomePage navigate={navigate} />
  }

  return <HomePage navigate={navigate} />
}
function HomePage({ navigate }) {
  return (
    <div className="page-stack">
      <section className="section-grid">
        <article className="content-card feature-card">
          <p className="section-tag">Why This Team Matters</p>
          <h3>Determination beats distance.</h3>
          <p>
            The main university boxing team trains in Colombo, but many students
            in Homagama face real access challenges. This initiative brings that
            same fighting spirit to the faculty and creates a serious training
            environment on campus.
          </p>
        </article>

        <article className="content-card quote-card">
          <p className="section-tag">Core Message</p>
          <p className="quote-text">
            Let&apos;s build our own ring. Let&apos;s fight for our passion.
          </p>
        </article>
      </section>

      <section className="section-block home-training-stack">
        <article id="training-overview" className="content-card feature-card training-preview-card">
          <p className="section-tag">Training Card</p>
          <h4>Three training formats designed around access, repetition, and conditioning.</h4>
          <div className="training-preview-grid">
            {schedule.map((item) => (
              <article key={item.title} className="content-card schedule-card">
                <p className="mini-label">{item.title}</p>
                <h4>{item.days}</h4>
                <p>{item.time}</p>
                <span>{item.place}</span>
              </article>
            ))}
          </div>
          <p>
            The structure balances central university practices, faculty-based
            accessibility, and conditioning outside the usual indoor setting.
            That combination helps new athletes build routine without losing
            competitive ambition.
          </p>
          <h4>FACULTY FACILITIES</h4>
          <div className="training-facility-row">
            <img className="training-facility-image" src={facilityImageOne} alt="Faculty boxing facility 1" />
            <img className="training-facility-image" src={facilityImageTwo} alt="Faculty boxing facility 2" />
            <img className="training-facility-image" src={facilityImageThree} alt="Faculty boxing facility 3" />
          </div>
          <p>
            Our faculty provides essential boxing training equipment to help athletes
            develop their skills and fitness. We are equipped with punching bags,
            gloves, skipping ropes, bandages, training pads, and weights.
          </p>
        </article>

        <article id="pathway-overview" className="content-card pathway-preview-card">
          <p className="section-tag">Pathway </p>
          <h4>YOUR GOALS</h4>
          <img className="pathway-image" src={pathwayImage} alt="Pathway goals visual" />
          <div className="pathway-goals-row">
            {goals.map((goal) => (
              <article key={goal} className="pathway-goal-chip">
                <span>{goal}</span>
              </article>
            ))}
          </div>
        </article>

        <article id="about-overview" className="content-card action-card home-next-card">
          <p className="section-tag">About</p>
          <h4>From proposal to identity: a boxing team rooted in FOT.</h4>
          <div className="about-image-row">
            <img className="about-card-image" src={aboutImageOne} alt="About initiative visual 1" />
            <img className="about-card-image" src={aboutImageTwo} alt="About initiative visual 2" />
            <img className="about-card-image" src={aboutImageThree} alt="About initiative visual 3" />
          </div>
          <p>
            The Faculty Boxing Initiative is positioned as the start of a new
            journey for the University of Colombo Faculty of Technology. The aim
            is to create a disciplined boxing culture closer to students in
            Homagama while remaining connected to the wider university spirit.
          </p>
          <p>
            The team is presented as open to students with courage and
            commitment, not only to experienced athletes. The emphasis is on
            growth, unity, and faculty pride.
          </p>
        </article>

      
          <article id="join-overview" className="content-card action-tile home-join-card">
            <p className="section-tag">Join Us!</p>
            <br/>
            
            <h1>
               Be part of our boxing
               family. Step into the ring
               your journey starts here!
            </h1>
            
          </article>
        
      </section>
    </div>
  )
}


export default App






