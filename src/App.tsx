import {Route, Routes} from 'react-router-dom';
import {Alert} from 'react-bootstrap';
import Layout from './containers/Layout/Layout';
import ContactForm from './containers/ContactForm/ContactForm';
import Home from './containers/Home/Home';
import NotFound from './containers/NotFound/NotFound';
import ContactModal from './components/ContactModal/ContactModal';
import {useAppDispatch, useAppSelector} from './app/hooks';
import {closeAlert, selectErrorMessage, selectIsError} from './store/contactSlice';


const App = () => {
  const isError = useAppSelector(selectIsError);
  const errorMessage = useAppSelector(selectErrorMessage);
  const dispatch = useAppDispatch();

  return (
    <>
      <Alert
        show={isError}
        variant="danger"
        onClose={() => dispatch(closeAlert())}
        dismissible
        style={{marginBottom: '0'}}
      >
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {errorMessage ? errorMessage : null}
        </p>
      </Alert>
      <ContactModal/>
      <Layout>
        <Routes>
          <Route path="/" element={(<Home/>)}/>
          <Route path="/new-contact" element={(<ContactForm/>)}/>
          <Route path="/edit-contact/:id" element={(<ContactForm/>)}/>
          <Route path="*" element={(<NotFound/>)}/>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
