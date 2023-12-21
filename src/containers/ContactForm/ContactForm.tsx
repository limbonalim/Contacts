import {Link, useNavigate, useParams} from 'react-router-dom';
import {ChangeEvent, FormEvent, useState} from 'react';
import noImage from '../../assets/NoImage.png'

interface Contact {
  name: string;
  phone: string;
  email: string;
  photo: string;
}

const ContactForm = () => {
  const [contact, setContact] = useState<Contact>({
    name: '',
    phone: '',
    email: '',
    photo: ''
  });
  const navigate = useNavigate();
  const {id} = useParams() as {id: string};

  let photo = (
    <img
      className="rounded border"
      src={noImage}
      alt="No Photo"
    />
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setContact(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  if (contact.photo) {
    photo = (
      <img
        className="rounded border"
        src={contact.photo}
        alt={contact.name? contact.name : 'No name'}
      />
    );
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1 className="text-secondary">Add new contact</h1>
        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                onChange={onChange}
                value={contact.name}
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
                onChange={onChange}
                value={contact.phone}
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
                onChange={onChange}
                value={contact.email}
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
                onChange={onChange}
                value={contact.photo}
                type="text"
                className="form-control"
                name="photo"
                id="photo"
                placeholder="Add picture"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            {photo}
          </div>
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