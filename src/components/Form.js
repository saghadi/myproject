// import React, { useState } from 'react';

// function FormWithValidation() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     if (!formData.username.trim()) {
//       newErrors.username = 'Username is required';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }

//     if (!formData.password.trim()) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       // Form is valid, submit data
//       console.log('Form submitted:', formData);
//     }
//   };

//   return (
//     <div>
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//           {errors.username && <span className="error">{errors.username}</span>}
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {errors.password && <span className="error">{errors.password}</span>}
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//           />
//           {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default FormWithValidation;



import React, { useState } from 'react';

function SimpleForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div style={{ marginTop: '0', padding: '60px 0', background: '#0dcaf0' }}>
      <div class="butcher-title-box title-box">
        <h3>
          Simple Form with Validation
        </h3>
      </div>
      <div className='container'>
        <div className='form-input' style={{ maxWidth: '50%', margin: 'auto', marginTop: '20px' }}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ background: '#fff', width: '100%', border: '0', padding: '10px', marginTop: '10px' }}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{ background: '#fff', width: '100%', border: '0', padding: '10px', marginTop: '10px' }}
              />
              {errors.password && <div className="error">{errors.password}</div>}
            </div>
            <div className="banner-btn">
              <button type='button' className="bg-white text-info border-0 py-2 px-5 rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SimpleForm;

