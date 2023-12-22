import React from 'react';
import {useAppDispatch} from '../../app/hooks';
import {openModal} from '../../store/contactSlice';
import noImage from '../../assets/NoImage.png';
import {Contact} from '../../types';
import './Contact.css';

interface Props {
  contact: Contact;
}

const MemoContact: React.FC<Props> = React.memo(function Contact({contact}) {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(openModal(contact))}
      className="d-flex align-items-center gap-3 border border-2 rounded Contact"
      style={{maxHeight: '200px'}}
    >
      <div className="image-Wrapper">
        <img
          className="rounded"
          src={contact.photo ? contact.photo : noImage}
          alt={contact.name}
        />
      </div>
      <p>{contact.name}</p>
    </div>
  );
});

export default MemoContact;