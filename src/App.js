import React, { useState } from 'react';
import './styles.css';
import MemberForm from './components/MemberForm';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setShowForm(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="App">
      <h1>NYEF Lalitpur Membership Tracker</h1>
      <button className="add-button" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close" : "➕ Add Member"}
      </button>
      {showForm && <MemberForm onSuccess={handleSuccess} />}
      {showSuccess && <div className="success-message">✔ Member added successfully!</div>}
    </div>
  );
}

export default App;