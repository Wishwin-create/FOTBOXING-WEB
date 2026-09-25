import { NavLink } from 'react-router-dom'
import logoImage from '../assets/logo.jpg'

const pages = [{ id: 'home', label: 'Home', path: '/' }, { id: 'training', label: 'Training', path: '/training' }, { id: 'pathway', label: 'Pathway', path: '/pathway' }, { id: 'about', label: 'About', path: '/about' }, { id: 'join', label: 'Join', path: '/join' }]

function Header() {
  return <header className="top-frame"><div className="brand-lockup"><img className="brand-logo" src={logoImage} alt="UOC FOT Boxing logo" /><div><p className="brand-kicker">Faculty of Technology</p><h1>UOC FOT Boxing</h1></div></div><nav className="main-nav" aria-label="Primary">{pages.map((page) => <NavLink key={page.id} to={page.path} end={page.id === 'home'} className={({ isActive }) => isActive ? 'nav-pill active' : 'nav-pill'}>{page.label}</NavLink>)}</nav></header>
}

export default Header
