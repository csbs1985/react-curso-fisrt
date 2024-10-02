import Footer from './components/Footer';
import Header from './components/Header';
import Root from './Root';
import AppRoutes from './Routes';

function App() {
  return (
    <Root>
      <Header />
      <AppRoutes />
      <Footer />
    </Root>
  );
}

export default App;
