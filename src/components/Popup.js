import React, { useState, useEffect } from 'react';

function Popup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const modalTriggerButton = document.getElementById('modalTriggerButton');
    if (modalTriggerButton) {
      modalTriggerButton.click();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const errors = {};
    if (!username.trim()) {
      errors.username = 'Username is required';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length === 0) {
      
      console.log('Form submitted successfully');
      console.log('Username:', username);
      console.log('Password:', password);
      setIsModalOpen(false);
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <button
        id="modalTriggerButton"
        type="button"
        className="btn btn-primary"
        style={{ display: 'none' }}
        onClick={() => setIsModalOpen(true)}
      >
        Launch demo modal
      </button>

      <div className={`modal fade ${isModalOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isModalOpen ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Login Form</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setIsModalOpen(false)}></button>
            </div>
            <div className="modal-body">
              <div className='popup-form-box'>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  {errors.username && <span className="error">{errors.username}</span>}
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {errors.password && <span className="error">{errors.password}</span>}
                  <button type="submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
