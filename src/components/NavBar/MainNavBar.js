import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import './MainNavBar.css';

export default function MainNavBar({ signOut }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="navb">
      <Container>
        <Navbar.Brand>
          <img
            src={process.env.PUBLIC_URL + "/images/yelplogo.png"}
            alt="Yelp Logo"
            width="60"
            height="30"
            className="d-inline-block align-top"
          />
          <span>My Yelp</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button onClick={signOut} className="sgn">
              Sign Out
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
