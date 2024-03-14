// import React, { useState } from 'react'
// import './LoginSignup.css'
// const LoginSignup = () => {
//   const [state, setState] = useState("Login");
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email: ""
//   });

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const login = async () => {
//     console.log("Login function executed", formData);

//     let responseData;
//     await fetch('http://localhost:3000/login', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/form-data',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     }).then((res) => res.json()).then((data) => responseData = data);

//     if (responseData.success) {
//       localStorage.setItem('auth-token', responseData.token);
//       window.location.replace("/");
//     } else {
//       alert(responseData.errors);
//     }
//   }

//   const signup = async () => {
//     console.log("Sign up function executed", formData);

//     let responseData;
//     await fetch('http://localhost:3000/signup', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/form-data',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     }).then((response) => response.json()).then((data) => responseData = data);

//     if (responseData.success) {
//       localStorage.setItem('auth-token', responseData.token);
//       window.location.replace("/");
//     } else {
//       alert(responseData.errors);
//     }
//   };

//   return React.createElement(
//     'div',
//     { className: 'loginsignup' },
//     React.createElement(
//       'div',
//       { className: 'loginsignup-container' },
//       React.createElement(
//         'h1',
//         null,
//         state
//       ),
//       React.createElement(
//         'div',
//         { className: 'loginsignup-fields' },
//         state === "Sign Up" && React.createElement('input', { name: 'username', value: formData.username, onChange: changeHandler, type: "text", placeholder: 'Your name' }),
//         React.createElement('input', { name: 'email', value: formData.email, onChange: changeHandler, type: "email", placeholder: 'Your Email' }),
//         React.createElement('input', { name: 'password', value: formData.password, onChange: changeHandler, type: "password", placeholder: 'Password' })
//       ),
//       React.createElement(
//         'button',
//         { onClick: () => state === "Login" ? login() : signup() },
//         'Continue'
//       ),
//       state === "Sign Up" && React.createElement(
//         'p',
//         { className: "loginsignup-login" },
//         'Already have an account? ',
//         React.createElement(
//           'span',
//           { onClick: () => setState("Login") },
//           'Login here'
//         )
//       ),
//       state !== "Sign Up" && React.createElement(
//         'p',
//         { className: "loginsignup-login" },
//         'Create an account ',
//         React.createElement(
//           'span',
//           { onClick: () => setState("Sign Up") },
//           'Click here'
//         )
//       ),
//       React.createElement(
//         'div',
//         { className: 'loginsignup-agree' },
//         React.createElement('input', { type: "checkbox", name: '', id: '' }),
//         React.createElement(
//           'p',
//           null,
//           ' By continuing, I agree to the term of use and privacy policy'
//         )
//       )
//     )
//   );
// };

// export default LoginSignup;








import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  const [state, setState] = useState("Login")
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async () => {
    console.log("Login function executed", formData)

    let responseData
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }

      responseData = await response.json()

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token)
        window.location.replace("/")
      } else {
        alert(responseData.errors)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred while logging in. Please try again later.')
    }
  }

  const signup = async () => {
    console.log("Sign up function executed", formData)

    let responseData
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/form-data',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }

      responseData = await response.json()

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token)
        window.location.replace("/")
      } else {
        alert(responseData.errors)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred while signing up. Please try again later.')
    }
  }

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{state}</h1>
        <div className='loginsignup-fields'>
          {state === "Sign Up" && <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your name' />}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Your Email' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={() => state === "Login" ? login() : signup()}>Continue</button>
        {state === "Sign Up" && (
          <p className="loginsignup-login">
            Already have an account? <span onClick={() => setState("Login")}>Login here</span>
          </p>
        )}
        {state !== "Sign Up" && (
          <p className="loginsignup-login">
            Create an account <span onClick={() => setState("Sign Up")}>Click here</span>
          </p>
        )}
        <div className='loginsignup-agree'>
          <input type="checkbox" name='' id='' />
          <p> By continuing, I agree to the term of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup