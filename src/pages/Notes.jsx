import React, { useEffect, useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    if (text.trim() === "") {
      setFilteredNotes(notes); // Show all notes if search is empty
    } else {
      setFilteredNotes(
        notes.filter((note) =>
          note.title.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

 // Add missing dependency in useEffect
useEffect(() => {
  handleSearch();
}, [handleSearch]); // ✅ Include 'handleSearch' in the dependency array

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>Notes</h2>}
        {showSearch && (
          <input
            type="text"
            autoFocus
            placeholder="Search notes..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        )}
        <button className="btn" onClick={() => setShowSearch((prev) => !prev)}>
          <FaSearchengin />
        </button>
      </header>

      <div className="notes__container">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => <NoteItem key={note.id} note={note} />)
        ) : (
          <p>No matching notes found.</p>
        )}
      </div>

      <Link to="/create-note" className="btn add__btn">
        <FaPlus />
      </Link>
    </section>
  );
};

export default Notes;
