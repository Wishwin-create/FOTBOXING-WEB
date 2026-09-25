import { Link } from 'react-router-dom'
import coachImage from '../assets/coach img.png'
import facilityImageOne from '../assets/facility 1.png'
import facilityImageTwo from '../assets/facility 2.png'
import facilityImageThree from '../assets/facility 3.png'
import backgroundImage from '../assets/background.jpg'
import '../styles/home.css'
import FacebookIcon from '../components/FacebookIcon'
import LinkArrow from '../components/LinkArrow'
import { Award, Clock, Swords, MapPin } from 'lucide-react'

const stats = [
  { icon: Award, value: 'IBA 3-Star', label: 'Certified Coach' },
  { icon: Clock, value: '15+ Years', label: 'Experience' },
  { icon: Swords, value: '6 Championship', label: 'Pathways' },
  { icon: MapPin, value: '3 Sessions', label: 'Per Week' },
]
function HomePage() {
  return (
    <div className="home-page">
      {/* Hero */}
      <section
        className="home-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 5, 5, 0.94) 0%, rgba(12, 5, 5, 0.82) 48%, rgba(12, 5, 5, 0.38) 100%), url(${backgroundImage})`,
        }}
      >
        <div className="home-hero-copy">
          <p className="eyebrow">UOC FOT BOXING</p>
          <h2>
            <span>FOT</span> BOXING
          </h2>
          <p className="home-hero-subhead">
            Faculty Boxing Initiative — Rise of the New Team
          </p>
          <p className="hero-text">
            Boxing is more than a sport — it&apos;s discipline, confidence,
            and strength. This is the beginning of a new journey: to train,
            to grow, and to prove that determination beats distance.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/join">
              Join the Team 
            </Link>
            <Link className="button button-secondary" to="/training">
              See Training Schedule
            </Link>
          </div>
        </div>
        <div className="hero-diagonal" aria-hidden="true" />
      </section>

      {/* Stats strip */}
    <section className="stats-strip" aria-label="Team credentials">
  {stats.map((stat) => {
    const Icon = stat.icon
    return (
      <article className="stat-card" key={stat.label}>
        <Icon className="stat-icon" aria-hidden="true" size={28} strokeWidth={1.75} />
        <div>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      </article>
    )
  })}
</section>

      {/* Coach teaser */}
      <section className="home-feature split-feature">
        <div className="feature-image-wrap">
          <img
            className="feature-image coach-teaser-image"
            src={coachImage}
            alt="FOT Boxing coach"
          />
        </div>
        <div className="feature-copy">
          <p className="section-tag">Legendary Coach</p>
          <h3>Train with purpose. Build with discipline.</h3>
          <p>
            Our program is guided by an IBA 3-Star Certified Coach, 7-time
            National Champion, and NVQ Level 5 Physical Fitness Trainer — a
            proud Sri Lankan representative at the Commonwealth Games and
            Asian Games.
          </p>
          <Link className="text-link" to="/about">
            Meet the Coach <LinkArrow />
          </Link>
        </div>
      </section>

      {/* Facilities preview */}
      <section className="home-feature facilities-feature">
        <div className="feature-copy">
          <p className="section-tag">Faculty Facilities</p>
          <h3>Everything you need to train right here on campus.</h3>
          <p>
            Punching bags, gloves, skipping ropes, bandages, training pads,
            and weights — everything needed to train right here on campus.
          </p>
          <Link className="text-link" to="/training">
            Explore Training <LinkArrow />
          </Link>
        </div>
        <div className="facilities-preview">
          <img src={facilityImageOne} alt="Boxing gym equipment" />
          <img src={facilityImageTwo} alt="Boxing training mats" />
          <img src={facilityImageThree} alt="Boxing gloves and equipment" />
        </div>
      </section>

      {/* Join CTA banner */}
      <section className="join-banner">
        <p className="section-tag">UOC FOT Boxing</p>
        <h3>Be part of our boxing family.</h3>
        <p>Step into the ring — your journey starts here.</p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/join">
            Join Us <LinkArrow />
          </Link>
          
            <a className="button button-secondary"
            href="https://www.facebook.com/profile.php?id=61567849331232"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon /> Facebook
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-brand">
          <span>FOT BOXING</span>
          <p>University Of Colombo</p>
          <p>Faculty Of Technology</p>
          <p>Fight for your dreams — no one else will do it for you.</p>
        </div>
        <a 
          className="footer-social"
          href="https://www.facebook.com/profile.php?id=61567849331232"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon /> Facebook
        </a>
      </footer>
    </div>
  )
}

export default HomePage
