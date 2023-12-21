import {Route, Routes} from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import ContactForm from './containers/ContactForm/ContactForm';
import Home from './containers/Home/Home';
import NotFound from './containers/NotFound/NotFound';

const App = () => {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={(<Home/>)}/>
          <Route path="/new-contact" element={(<ContactForm/>)}/>
          <Route path="/edit-contac/:id" element={(<ContactForm/>)}/>
          <Route path="*" element={(<NotFound/>)}/>
        </Routes>

      </Layout>

    </>
  );
};

export default App;
