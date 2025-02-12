import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import EditNote from './pages/EditNote';
import CreateNotes from './pages/CreateNotes';

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route path="/create-note" element={<CreateNotes setNotes={setNotes} />} />
          <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
