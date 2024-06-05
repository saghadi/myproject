import React, { useState, useEffect } from 'react';

const LoginModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const isModalShown = localStorage.getItem('isModalShown');
        if (!isModalShown) {
            setShowModal(true);
            localStorage.setItem('isModalShown', true);
        }
    }, []);

    const handleLogin = () => {
        // Implement your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        handleCloseModal();
    };

    const handleCloseModal = () => {
        setShowModal(false);
        localStorage.removeItem('isModalShown');
    };

    return (
        <>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>Login</h2>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleLogin}>Login</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default LoginModal;
