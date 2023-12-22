import React from 'react';
import './Contact.css';

interface Props {
  photo: string;
  name: string;
}

const MemoContact: React.FC<Props> = React.memo(function Contact({photo, name}) {
  return (
    <div
      className="d-flex align-items-center gap-3 border border-2 rounded Contact"
      style={{maxHeight: '200px'}}
    >
      <img
        className="rounded"
        src={photo}
        alt={name}
      />
      <p>{name}</p>
    </div>
  );
});

export default MemoContact;