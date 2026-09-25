import { Link } from 'react-router-dom'
import pathwayImage from '../assets/pathway img.jpg'
import aboutImageOne from '../assets/Achievements -1.jpeg'
import aboutImageTwo from '../assets/about img 2.png'

import winningNovices from '../assets/wining_novices.jpg'
import winningInter_1 from '../assets/achievements_2.png'
import winningInter_2 from '../assets/achievements_3.png'
import '../styles/pathway.css'
import LinkArrow from '../components/LinkArrow'

const goals = [
  {
    title: "Freshers' Tournament",
    text: 'Your first step into competitive boxing, open to new members.',
  },
  {
    title: 'Inter-Faculty Championship',
    text: 'Represent FOT and test your skills against fellow faculties.',
  },
  {
    title: 'Novices Boxing Championship',
    text: 'Build confidence through your first serious championship.',
  },
  {
    title: 'Intermediate Boxing Championship',
    text: 'Raise your level through stronger competition.',
  },
  {
    title: 'Provincial Meets',
    text: 'Take your experience beyond the university and into the province.',
  },
  {
    title: 'Nationals',
    text: 'The national stage — where preparation meets opportunity.',
  },
]

function PathwayPage() {
  return (
    <div className="pathway-page page-stack">
      {/* Hero */}
      <section
        className="pathway-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8, 4, 4, 0.88), rgba(38, 8, 8, 0.38)), url(${pathwayImage})`,
        }}
      >
        <div>
          <p className="eyebrow">Pathway</p>
          <h2>Your Goals</h2>
          <p>
            From your first fight to the national stage — here&apos;s the
            road ahead.
          </p>
        </div>
      </section>

      {/* Championship ladder */}
      <section className="ladder-section">
        <div className="section-heading">
          <p className="section-tag">Your Goals</p>
          <h3>Every champion starts with one round.</h3>
        </div>
        <div className="championship-ladder">
          {goals.map((goal, index) => (
            <article className="ladder-step" key={goal.title}>
              <div className="ladder-node">{index + 1}</div>
              <div className="ladder-content">
                <p className="mini-label">Step {index + 1}</p>
                <h4>{goal.title}</h4>
                <p>{goal.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Competitive boxing gallery */}
      {/* Competitive boxing gallery */}
<section className="competitive-section">
  <div className="section-heading">
    <p className="section-tag">Competitive Boxing</p>
    <h3>The work becomes real in the ring.</h3>
    <p>
      From Inter-Faculty Championships to national games, our fighters
      have already made their mark. This is where the training pays off.
    </p>
  </div>
  <div className="competitive-gallery">
    <img className="gallery-large" src={aboutImageOne} alt="FOT boxer competing" />
    <img className="gallery-square gallery-top-one" src={aboutImageTwo} alt="Boxing match-day moment" />
    <img className="gallery-square gallery-top-two" src={winningNovices} alt="Boxing coaching and preparation" />
    <img className="gallery-square gallery-next-line-one" src={winningInter_1} alt="Boxing coaching and preparation" />
    <img className="gallery-square gallery-next-line-two" src={winningInter_2} alt="Boxing coaching and preparation" />
  </div>
</section>

      {/* Narrative bridge */}
      <p className="pathway-bridge">
        This is the beginning of a new journey — to train, to grow, and to
        prove that determination beats distance.
      </p>

      {/* CTA */}
      <section className="pathway-cta">
        <p className="section-tag">Your Next Round</p>
        <h3>Ready to start climbing?</h3>
        <Link className="button button-primary" to="/join">
          Join the Team <LinkArrow />
        </Link>
      </section>
    </div>
  )
}

export default PathwayPage
