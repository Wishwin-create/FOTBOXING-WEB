import { Link } from 'react-router-dom'
import { Dumbbell, HandFist, Waves } from 'lucide-react'
import facilityImageOne from '../assets/facility 1.png'
import facilityImageTwo from '../assets/facility 2.png'
import facilityImageThree from '../assets/facility 3.png'
import backgroundImage from '../assets/background.jpg'
import '../styles/training.css'
import LinkArrow from '../components/LinkArrow'

const schedule = [
  {
    icon: HandFist,
    title: 'Main Practices',
    schedule: 'Mon · Wed · Fri — 5:00 PM to 7:30 PM',
    location: 'UOC Indoor Gymnasium',
  },
  {
    icon: Dumbbell,
    title: 'Faculty Practices',
    schedule: 'Tue · Thu · Sat — Flexible, based on availability',
    location: 'UOC / FOT Sport Room',
  },
  {
    icon: Waves,
    title: 'Beach Training',
    schedule: 'Weekend conditioning session',
    location: 'Mount Lavinia Beach',
  },
]

const benefits = [
  {
    title: 'Discipline',
    text: 'Every round teaches patience, self-control, and resilience.',
  },
  {
    title: 'Focus',
    text: 'Training sharpens the ability to stay calm and think strategically under pressure.',
  },
  {
    title: 'Strength',
    text: 'Boxing builds a mindset of strength, respect, and perseverance — the qualities of a champion.',
  },
]

function TrainingPage() {
  return (
    <div className="training-page page-stack">
      {/* Hero */}
      <section
        className="training-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8, 4, 4, 0.9), rgba(38, 8, 8, 0.42)), url(${backgroundImage})`,
        }}
      >
        <div>
          <p className="eyebrow">Training</p>
          <h2>Train Like a Champion</h2>
          <p>Fight for your dreams — no one else will do it for you.</p>
        </div>
      </section>

      {/* Training schedule */}
      <section className="training-schedule-section">
        <div className="section-heading">
          <p className="section-tag">Training Structure</p>
          <h3>A rhythm built for progress.</h3>
        </div>
        <div className="training-schedule-grid">
          {schedule.map((item) => (
            <article className="training-schedule-card" key={item.title}>
              <span className="training-card-icon" aria-hidden="true">
                <item.icon size={32} strokeWidth={1.8} />
              </span>
              <p className="mini-label">{item.title}</p>
              <h4>{item.schedule}</h4>
              <p className="training-location">{item.location}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="training-facilities-section home-feature">
        <div className="feature-copy">
          <p className="section-tag">Faculty Facilities</p>
          <h3>Everything needed to train with purpose.</h3>
          <p>
            Our faculty provides essential boxing training equipment to help
            athletes develop their skills and fitness. We&apos;re equipped
            with punching bags, gloves, skipping ropes, bandages, training
            pads, and weights — everything needed for effective strength,
            endurance, and technique development.
          </p>
          <p>
            These facilities let us create a focused, disciplined training
            environment right here on campus.
          </p>
        </div>
        <div className="facilities-preview">
          <img src={facilityImageOne} alt="Boxing gym equipment" />
          <img src={facilityImageTwo} alt="Boxing training mats" />
          <img src={facilityImageThree} alt="Boxing gloves and equipment" />
        </div>
      </section>

      {/* Fitness benefits */}
      <section className="benefits-section">
        <div className="section-heading">
          <p className="section-tag">Fitness Benefits</p>
          <h3>More than fitness. A mindset for life.</h3>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <article className="benefit-card" key={benefit.title}>
              <span className="benefit-number">0{index + 1}</span>
              <h4>{benefit.title}</h4>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="training-cta">
        <p className="section-tag">Start Where You Are</p>
        <h3>No prior experience is required — just the will to learn.</h3>
        <Link className="button button-primary" to="/join">
          Join the Team <LinkArrow />
        </Link>
      </section>
    </div>
  )
}

export default TrainingPage
