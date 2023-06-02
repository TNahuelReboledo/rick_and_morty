import React, { useState } from 'react';
import style from "./Form.module.css";
import validationEmail from '../../validation';
import imagen from "../images/png.png"

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

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handlerSubmit}>
        <h1 className={style.title} >Sign in</h1>
        <label htmlFor="email" className={style.label} >email</label>
        <input className={style.input} type="text" name='email' autoFocus value={userData.email} onChange={handleChange} />
        {errors.e1 ? (
          <p className={style.error}>{errors.e1}</p>
        ) : errors.e2 ? (
          <p className={style.error}>{errors.e2}</p>
        ) : (<p className={style.error}>{errors.e3}</p>)}

        <label htmlFor="password" className={style.label}>password</label>
        <input className={style.input} type="password" name='password' value={userData.password} onChange={handleChange} />
        {errors.p1 ? (
          <p className={style.error}>{errors.p1}</p>
        ) : (
          <p className={style.error}>{errors.p2}</p>
        )}
        <br />
        <button type='submit' className={style.button} onClick={handleSubmit} >Login</button>
      </form>
      <div className={style.image_container}>
        <div className={style.sombra}>
        </div>
        <img src={imagen} alt="" className={style.image_nave} />
      </div>
    </div>
  )
};

export default Form;