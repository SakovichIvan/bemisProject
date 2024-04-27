import { Routes, Route } from 'react-router-dom';

import './App.css';

import { PriceListPage } from './pages/PriceListPage.js';
import { MainPage } from './pages/MainPage.js';
import { NotFoundPage } from './pages/NotFoundPage.js';
import { HeaderPage } from './pages/HeaderPage.js';
import { CatalogPage } from './pages/CatalogPage.js';
import { CertificatesPage } from './pages/CertificatesPage.js';
import { ContactsPage } from './pages/ContactsPage.js';
import { CatalogTitlePage } from './pages/CatalogTitlePage.js';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HeaderPage />}>
            <Route index element={<MainPage />} />
            <Route path="price" element={<PriceListPage />} />
            <Route path="catalog" element={<CatalogPage />} />

            <Route path='catalog/:category/:id' element={<CatalogTitlePage />} />

            <Route path="certificates" element={<CertificatesPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
