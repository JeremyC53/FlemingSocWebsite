import Announcements from "./pages/Announcements";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function Switch() {
  return (() => {
    switch (window.location.pathname) {
      case "/":
        return <Home />;

      case "/announcements":
        return <Announcements />;

      case "/contacts":
        return <Contacts />;

      case "/projects":
        return <Projects />;

      default:
        return <Home />;
    }
  })();
}
