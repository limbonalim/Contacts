import {Link} from 'react-router-dom';

const ContactForm = () => {
  return (
    <div className="col-12 col-md-6">
      <form>
        <h1 className="text-secondary">Add new contact</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Jhone Smith"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone:</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            id="phone"
            placeholder="(888) 88 88 88"
            pattern="[0-9]{9}"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="JhoneSmith@mail.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">Photo:</label>
          <input
            type="text"
            className="form-control"
            name="photo"
            id="photo"
            placeholder="Another input placeholder"
          />
        </div>
        <div className="d-flex gap-3">
          <button className="btn btn-outline-success" type="submit">Save</button>
          <Link to="/" className="btn btn-outline-primary">Back to contacts</Link>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;