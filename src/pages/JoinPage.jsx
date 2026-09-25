import { useState } from 'react'
import { Link } from 'react-router-dom'

import boxing_ from '../assets/boxing_.jpg'
import facilityImageThree from '../assets/facility 3.png'
import backgroundImage from '../assets/background.jpg'

import '../styles/join.css'

import LinkArrow from '../components/LinkArrow'

const reasons = [
  'No experience required — just the will to learn and improve',
  'Train under an IBA 3-Star Certified, 7-time National Champion coach',
  'Full facilities on campus — no need to travel to Colombo',
  "A real pathway — from Freshers' Tournament to Nationals",
]

const sessions = [
  {
    title: 'Main Practices',
    details: 'Mon · Wed · Fri — 5:00 to 7:30 PM',
    location: 'UOC Indoor Gymnasium',
  },
  {
    title: 'Faculty Practices',
    details: 'Tue · Thu · Sat — Flexible',
    location: 'UOC / FOT Sport Room',
  },
  {
    title: 'Beach Training',
    details: 'Weekends',
    location: 'Mount Lavinia Beach',
  },
]

function JoinPage() {
   const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setSending(true)
    setError(false)

    const formData = new FormData(event.target)

    try {
      const response = await fetch('https://formspree.io/f/mnpnbgdw', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch (err) {
      console.error('Formspree error:', err)
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="join-page page-stack">

      <section
        className="join-hero"
        style={{
          backgroundImage: `linear-gradient(
            90deg,
            rgba(8, 4, 4, 0.91),
            rgba(38, 8, 8, 0.42)
          ), url(${backgroundImage})`,
        }}
      >
        <div>
          <p className="eyebrow">Join Us</p>

          <h2>Step Into the Ring</h2>

          <p>
            Be part of our boxing family — your journey starts here.
          </p>
        </div>
      </section>
      <br></br>

      <section className="why-join-section">
        <div className="section-heading">
          <p className="section-tag">Why Join</p>

          <h3>Find your fight. Find your people.</h3>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article
              className="reason-card"
              key={reason}
            >
              <span aria-hidden="true">✓</span>

              <p>{reason}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="training-snapshot">
        <div className="section-heading">
          <p className="section-tag">When We Train</p>

          <h3>Show up. Put in the rounds.</h3>
        </div>

        <div className="join-session-list">
          {sessions.map((session) => (
            <article
              className="join-session"
              key={session.title}
            >
              <div>
                <p className="mini-label">
                  {session.title}
                </p>

                <h4>{session.details}</h4>
              </div>

              <p>{session.location}</p>
            </article>
          ))}
        </div>

        <Link
          className="text-link"
          to="/training"
        >
          See full training details <LinkArrow />
        </Link>
      </section>

      <section className="get-in-touch">
        <div className="contact-copy">
          <p className="section-tag">Get In Touch</p>

          <h3>Take the first step.</h3>

          <p>
            Fill in your details and we&apos;ll reach out with everything
            you need to know for your first session.
          </p>

          <a
            className="button button-secondary"
            href="https://www.facebook.com/profile.php?id=61567849331232"
            target="_blank"
            rel="noreferrer"
          >
            Or follow us on Facebook <LinkArrow />
          </a>
        </div>

        <div className="join-form-wrap">
          {submitted ? (
            <div className="form-success">
              <span>✓</span>

              <h4>Thanks for stepping forward.</h4>

              <p>
                Your details have been noted in this sample form.
                We&apos;ll be in touch with next steps.
              </p>

              <button
                className="text-link"
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form
  className="join-form"
  onSubmit={handleSubmit}
>
  <label>
    Name
    <input name="name" type="text" placeholder="Your name" required />
  </label>

  <label>
     Year
    <input name="faculty" type="text" placeholder="e.g. Technology — Year 2" required />
  </label>

  <label>
    Phone or Email
    <input name="contact" type="text" placeholder="How can we reach you?" required />
  </label>

  <label>
    Experience level
    <select name="experience" defaultValue="">
      <option value="" disabled>Select one</option>
      <option>None</option>
      <option>Some</option>
      <option>Experienced</option>
    </select>
  </label>

  <label>
    Message (optional)
    <textarea name="message" placeholder="Anything you'd like us to know?" rows={4} />
  </label>

  {error && (
    <p className="form-error">
      Something went wrong. Please try again or reach us on Facebook.
    </p>
  )}

  <button
    className="button button-primary"
    type="submit"
    disabled={sending}
  >
    {sending ? 'Sending…' : 'Submit'} <LinkArrow />
  </button>
</form>
          )}
        </div>

        <img
          className="join-image"
          src={boxing_}
          alt="UOC Boxing "
        />
      </section>

      <section
        className="join-closing"
        style={{
          backgroundImage: `linear-gradient(
            rgba(8, 4, 4, 0.48),
            rgba(8, 4, 4, 0.9)
          ), url(${facilityImageThree})`,
        }}
      >
        <p>
          Be part of our boxing family.
          <br />
          Step into the ring — your journey starts here.
        </p>
      </section>

    </div>
  )
}

export default JoinPage