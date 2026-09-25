import { Link } from 'react-router-dom'

import coachImage from '../assets/coach img.png'
import aboutImageOne from '../assets/about img.png'
import aboutImageTwo from '../assets/about img 2.png'
import aboutImageThree from '../assets/about img 3.png'
import backgroundImage from '../assets/background.jpg'

import '../styles/about.css'

import LinkArrow from '../components/LinkArrow'

function AboutPage() {
  return (
    <div className="about-page page-stack">

      <section
        className="about-hero"
        style={{
          backgroundImage: `linear-gradient(
            90deg,
            rgba(8, 4, 4, 0.9),
            rgba(38, 8, 8, 0.42)
          ), url(${backgroundImage})`
        }}
      >
        <div>
          <p className="eyebrow">About</p>
          <h2>Our Story</h2>
          <p>Determination beats distance.</p>
        </div>
      </section>

      <section className="origin-story">
        <div className="section-heading">
          <p className="section-tag">
            Faculty Boxing Initiative — Rise of the New Team
          </p>

          <h3>
            Bringing the spirit of boxing closer to home.
          </h3>
        </div>

        <div className="origin-story-copy">
          <p>
            Boxing is more than a sport — it&apos;s discipline, confidence,
            and strength.
          </p>

          <p>
            Although our main university team trains in Colombo, many
            passionate students from our faculty in Homagama face challenges
            in joining them.
          </p>

          <p>
            Under the guidance of our university coach, we&apos;ve decided
            to bring the spirit of boxing here — to our own faculty.
          </p>

          <p>
            This is the beginning of a new journey: to train, to grow,
            and to prove that determination beats distance. Let&apos;s
            build our own ring. Let&apos;s fight for our passion.
          </p>
        </div>
      </section>

      <section className="coach-bio home-feature">
        <div className="feature-image-wrap">
          <img
            className="feature-image about-coach-image"
            src={coachImage}
            alt="UOC FOT Boxing coach with medals"
          />
        </div>

        <div className="feature-copy">
          <p className="section-tag">Legendary Coach</p>

          <h3>
            Experience that raises every round.
          </h3>

          <p className="coach-credentials">
            IBA 3-Star Boxing Coach · 7-Time National Champion ·
            NVQ Level 5 Physical Fitness Trainer
          </p>

          <p>
            Our boxing program is guided by an IBA 3-Star Certified Coach
            with over 15 years of experience in the sport.
          </p>

          <p>
            A 7-time National Champion and a proud representative of
            Sri Lanka at prestigious international events such as the
            Commonwealth Games and Asian Games, our coach brings
            world-class expertise, discipline, and passion to every
            training session.
          </p>

          <p>
            His deep technical knowledge and strategic insight inspire us
            to train harder, aim higher, and build a new generation of
            champions.
          </p>
        </div>
      </section>

      <section className="team-participation home-feature">
        <div className="feature-copy">
          <p className="section-tag">Team &amp; Participation</p>

          <h3>
            A family built on passion, dedication, and unity.
          </h3>

          <p>
            Our boxing team is built on passion, dedication, and unity.
            Each member, whether beginner or experienced, shares one goal
            — to push limits and grow stronger together.
          </p>

          <p>
            We welcome all students who have the courage to step forward
            and train with discipline and heart. No prior experience is
            required — just the will to learn and improve.
          </p>

          <p>
            Together, we&apos;re not only building fighters — we&apos;re
            building a family that represents our faculty with pride and
            determination.
          </p>
        </div>

        <div className="about-team-gallery">
          <img
            src={aboutImageOne}
            alt="FOT Boxing team"
          />

          <img
            src={aboutImageTwo}
            alt="Students training together"
          />

          <img
            src={aboutImageThree}
            alt="Boxing team participation"
          />
        </div>
      </section>

      <section className="about-cta">
        <p className="section-tag">Start Your Story</p>

        <h3>
          No experience needed. Just the will to show up.
        </h3>

        <Link
          className="button button-primary"
          to="/join"
        >
          Join the Team <LinkArrow />
        </Link>
      </section>

    </div>
  )
}

export default AboutPage