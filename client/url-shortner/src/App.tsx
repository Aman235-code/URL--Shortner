import * as React from 'react';
import Container from './components/container/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = () => {
  return(
    <>
    <Header/>
    <Container/>
    <Footer/>
    </>
  ) ;
};

export default App;
