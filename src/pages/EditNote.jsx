import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((item) => item.id === id);

  const [Title, SetTitle] = useState(note ? note.Title : "");
  const [detail, Setdetail] = useState(note ? note.detail : "");

  if (Title & detail) {
    const newNote = { ...note, Title, detail, Date };
    const newNotes = notes.map((item) => {
      if (item.id === id) {
        item = newNote;
      }
      return item;
    });
    setNotes(newNotes);
  }
  const handleSave = () => {
    setNotes((prevNotes) =>
      prevNotes.map((n) => (n.id === id ? { ...n, Title, detail } : n))
    );
    navigate("/");
  };

  const handleDelete = () => {
    if(window.confirm("are you sure you want to deleete"))
    {
      setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
    }
    
    navigate("/");
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to={`/`} className="btn">
          <MdOutlineArrowBackIosNew />
        </Link>
        <button className="btn lg primary" onClick={handleSave}>
          Save
        </button>
        <button className="btn danger" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>

      <form className="create-note__form">
        <input
          type="text"
          autoFocus
          placeholder="Title"
          value={Title}
          onChange={(e) => SetTitle(e.target.value)}
        />
        <textarea
          rows={28}
          placeholder="Note details..."
          value={detail}
          onChange={(e) => Setdetail(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
