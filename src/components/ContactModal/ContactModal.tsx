import {Button, Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {clearCurrent, closeModal, selectCurrentContact, selectShowModal} from '../../store/contactSlice';
import noImage from '../../assets/NoImage.png';
import {deleteContact, fetchContacts} from '../../store/contactThunks';
import {Contact} from '../../types';


const ContactModal = () => {
  const show = useAppSelector(selectShowModal);
  const contact = useAppSelector(selectCurrentContact) as Contact;
  const dispatch = useAppDispatch();
  const path = contact ? `/edit-contact/${contact.id}` : '/';


  const editPhone = (phone: string) => {
    const edit = phone.split('');
    return `+996 (${edit[0]}${edit[1]}${edit[2]}) ${edit[3]}${edit[4]}-${edit[5]}${edit[6]}-${edit[7]}${edit[8]}`;
  };

  const phone = contact ? editPhone(contact.phone) : '-';
  const hrefPhone = contact ? `tel:+996${contact.phone}` : '#';
  const hrefEmail = contact ? `mailto:${contact.email}` : '#';
  const email = contact && contact.email ? (
    <p className="text-secondary">Email: <a href={hrefEmail} className="text-dark">{contact.email}</a></p>
  ) : null;

  const handleDelete = async () => {
    await dispatch(deleteContact(contact.id));
    handleClose();
    dispatch(fetchContacts());
  };

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(clearCurrent());
  };

  return contact && (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{contact.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex gap-2">
            <section>
              <img
                style={{maxHeight: '100px', maxWidth: '150px'}}
                className="rounded"
                src={contact.photo ? contact.photo : noImage}
                alt={contact.name}
              />
            </section>
            <section>
              <p className="text-secondary">Phone: <a href={hrefPhone} className="text-dark">{phone}</a></p>
              {email}
            </section>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleDelete}>
            Delete
          </Button>
          <Link
            to={path}
            onClick={() => dispatch(closeModal())}
            className="btn btn-outline-primary"
          >
            Edit
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactModal;