import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {fetchContacts} from '../../store/contactThunks';
import {selectList} from '../../store/contactSlice';
import Contact from '../../components/Contact/Contact';


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
          contact={contact}
        />))
      }
    </div>
  );
};

export default Home;