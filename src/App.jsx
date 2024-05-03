import {
  About,
  BackToTop,
  Contact,
  Footer,
  Header,
  Hero,
  Service,
  Portfolio,
} from './components';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Service />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
