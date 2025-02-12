import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import CreateDate from '../components/CreateDate';
import { v4 as uuid } from 'uuid';

const CreateNotes = ({ setNotes }) => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const date = CreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && detail.trim()) {
      const note = { id: uuid(), title, detail, date };
      setNotes((prevNotes) => [note, ...prevNotes]);
      navigate('/');
    } else {
      alert('Please fill in both Title and Details.');
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn"><MdOutlineArrowBackIosNew /></Link>
        <button className="btn lg primary" onClick={handleSubmit}>Save</button>
      </header>

      <form className="create-note__form" onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows={28}
          placeholder="Note details..."
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNotes;
