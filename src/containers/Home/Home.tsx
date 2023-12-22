import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {fetchContacts} from '../../store/contactThunks';
import {selectIsLoading, selectList} from '../../store/contactSlice';
import Contact from '../../components/Contact/Contact';
import Loading from '../../components/Loading/Loading';

const Home = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectList);
  const loading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {
        loading ? <Loading/> :
          <div className="d-flex flex-column gap-2">
            {contacts.map((contact) => (
              <Contact
                key={contact.id}
                contact={contact}
              />))
            }
          </div>
      }
    </>

  );
};

export default Home;