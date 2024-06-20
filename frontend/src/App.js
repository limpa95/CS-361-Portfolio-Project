// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

import TopicsPage from './pages/TopicsPage';
import HomePage from './pages/HomePage';
import DeckPage from './pages/DeckPage';
import GalleryPage from './pages/GalleryPage';
import OrderPage from './pages/OrderPage';


import EditCardPageTable from './pages/EditCardPageTable';
import AddCardPageTable from './pages/AddCardPageTable';
import TutorialPage from './pages/TutorialPage';

// Define the function that renders the content in Routes, using State.
function App() {

  const [card, setCardToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
          <h1 class="headingCentered"><img class="iconCentered" src="android-chrome-192x192.png" alt="Favicon for Patrick Lim's website" width="50" height="50" />
            Patrick Lim
        </h1>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                
                    <Route path="/" element={<HomePage />} />
                    <Route path="/topicspage" element={<TopicsPage />} />
                    <Route path="/deckpage" element={<DeckPage setCard={setCardToEdit} />} />
                    <Route path="/gallerypage" element={<GalleryPage />} />
                    <Route path="/orderpage" element={<OrderPage />} />
                    <Route path="/create" element={<AddCardPageTable />} /> 
                    <Route path="/update" element={<EditCardPageTable cardToEdit={card} />} />
                    <Route path="/tutorial" element={<TutorialPage />} />

                </Routes>
              </section>
          </main>

          <footer>
            <p class="footerCentered"><strong>&copy; 2023 Patrick Lim</strong></p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;