import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import FavoritesProvider from './contexts/favorites';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Header />

        <AppRoutes />

        <Footer />
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
