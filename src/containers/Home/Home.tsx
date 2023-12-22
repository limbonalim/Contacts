import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {fetchContacts} from '../../store/contactThunks';
import {useEffect} from 'react';
import {selectList} from '../../store/contactSlice';
import Contact from '../../components/Contact/Contact';
import noImage from '../../assets/NoImage.png';


const Home = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectList);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="d-flex flex-column gap-2">
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          photo={contact.photo ? contact.photo : noImage}
          name={contact.name}
        />))
      }
    </div>
  );
};

export default Home;