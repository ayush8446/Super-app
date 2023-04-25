import React from 'react'
import { useState } from 'react'
import "./SignupForm.css"

const SignupForm = () => {
  const [formValues, setFormValues] = useState(
    {
      name: "",
      username: "",
      email: "",
      mobile: "",
    }
  );
  const [subscribe, setSubscribe] = useState(false);
  const [errors, setErrors] = useState({})

  const handleInputChange = (event) =>{
    setFormValues({...formValues, [event.target.name]: event.target.value})
    setErrors(validateForm({...formValues, [event.target.name]: event.target.value}))
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm(formValues);
    if(Object.keys(formErrors).length === 0) {
      // form is valid
      localStorage.setItem('formValues', JSON.stringify(formValues))
      alert("form values stored")
    } else {
      // form has errors
      setErrors(formErrors);
    }
  }


  const validateForm = (values) => {
    const errors = {};
    if(!values.name.trim()){
      errors.name = 'Name is required';
    }
    if(!values.username.trim()){
      errors.username = 'Username is required';
    }
    if(!values.email){
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid'; 
    }
    if(!values.mobile){
      errors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(values.mobile)) {
      errors.mobile = "Mobile number must be 10 digits"
    }
    return errors;
  };

  return (
    <div className='form'>
      <h3 className='rr'>Super app</h3>
      <p className='rrt'>Create your new account</p>
      <h3>Email&nbsp; | &nbsp;Google</h3>
      <form className="formBody" onSubmit={handleFormSubmit} >
        <div className="form-field">
          <input 
            type="text"
            name='name' id='name' autoComplete='off'
            placeholder='Name'
            value={formValues.name}
            onChange={handleInputChange}
            required
            className={errors.name ? 'error' : ''}
          />
            {errors.name && (
            <div className='error-message'>{errors.name}  </div>
            )}
        </div>
        <div className="form-field">
          <input 
            type="text"
            name='username' id='username' autoComplete='off'
            placeholder='Username'
            value={formValues.username}
            onChange={handleInputChange}
            required
            className={errors.username ? 'error' : ''}
          />
            {errors.username && (
            <div className='error-message'>{errors.username}  </div>
            )}
        </div>
        <div className="form-field">
          <input 
            type="text"
            name='email' id='email' autoComplete='off'
            placeholder='Email'
            value={formValues.email}
            onChange={handleInputChange}
            required
            className={errors.email ? 'error' : ''}
          />
          {errors.email && (
            <div className='error-message'>{errors.email}  </div>
            )}
        </div>
        <div className="form-field">
          <input 
            type="number"
            name='mobile' id='mobile' autoComplete='off'
            placeholder='Mobile'
            value={formValues.mobile}
            onChange={handleInputChange}
            required
            className={errors.mobile ? 'error' : ''}
          />
          {errors.mobile && (
            <div className='error-message'>{errors.mobile}  </div>
            )}
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="subscribe" name="subscribe" checked={subscribe} onChange={(e) => setSubscribe(e.target.checked)}
          required />
          <label htmlFor="subscribe">Share my registration data with Superapp</label>
        </div>
        <button>SIGN UP</button>
        <p>By clicking on Sign up. you agree to Superapp  <span className='green'>Terms and <br /> Conditions of Use</span> </p>
        <p>To learn more about how Superapp collects, uses, shares and <br /> protects your personal data please head Superapp <span className='green'> Privacy <br/> Policy</span> </p>
      </form>
    </div>
  )
}

export default SignupForm