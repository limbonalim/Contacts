import Toolbar from '../../components/Toolbar/Toolbar';
import React, {PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {

}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
      <header className="mb-5">
        <Toolbar/>
      </header>
      <main className="container">
        {children}
      </main>
    </>
  );
};

export default Layout;