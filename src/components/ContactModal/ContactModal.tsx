import {Button, Modal} from 'react-bootstrap';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {closeModal, selectCurrentContact, selectShowModal} from '../../store/contactSlice';
import noImage from '../../assets/NoImage.png';


const ContactModal = () => {
  const show = useAppSelector(selectShowModal);
  const contact = useAppSelector(selectCurrentContact);
  const dispatch = useAppDispatch();


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


  const handleDelete = () => {

  };

  const handleEdit = () => {

  };


  return contact && (
    <>
      <Modal show={show} onHide={() => dispatch(closeModal())}>
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
          <Button variant="outline-primary" onClick={handleEdit}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactModal;