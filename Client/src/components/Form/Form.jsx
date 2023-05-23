import React, { useState } from 'react';
import style from "./Form.module.css";
import validationEmail from '../../validation';

const Form = ({ login }) => {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(validationEmail({ ...userData, [event.target.name]: event.target.value }));
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  const handlerSubmit = (event) => {
    event.preventDefault();
  }


  // useEffect(() => {
  //   validationEmail(userData.email,setErrors);
  // }, [userData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }
  
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handlerSubmit}>
        <h1 className={style.title} >WELCOME</h1>
        <label htmlFor="email" className={style.label} >email:</label>
        <input className={style.input} type="text" name='email' autoFocus placeholder='example@example.com' value={userData.email} onChange={handleChange} />
        {errors.e1 ? (
          <p className={style.error}>{errors.e1}</p>
        ) : errors.e2 ? (
          <p className={style.error}>{errors.e2}</p>
          ) : (<p className={style.error}>{errors.e3}</p>)}

        <label htmlFor="password" className={style.label}>password:</label>
        <input className={style.input} type="password" name='password' placeholder='example_666' value={userData.password} onChange={handleChange} />
        {errors.p1 ? (
          <p className={style.error}>{errors.p1}</p>
        ) : (
          <p className={style.error}>{errors.p2}</p>
        )}
        <br />
        <button type='submit' className={style.button} onClick={handleSubmit} >Submit</button>
      </form>
    </div>
  )
};

export default Form;