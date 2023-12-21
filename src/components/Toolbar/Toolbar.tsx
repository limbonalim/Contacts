import {Link} from 'react-router-dom';


const Toolbar = () => {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Contact</Link>
        <Link to="/new-contact" className="btn btn-outline-light">Add new contact</Link>
      </div>
    </nav>
  );
};

export default Toolbar;