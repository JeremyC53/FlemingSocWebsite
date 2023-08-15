export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="home">
        Fleming Society
      </a>
      <ul>
        <li>
          <a href="/announcements">Announcements</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contacts">Contacts</a>
        </li>
      </ul>
    </nav>
    
  );
}
