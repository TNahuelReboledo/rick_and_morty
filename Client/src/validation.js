
const validationEmail = (data) => {
  let errors = {};

  if (!(/\S+@\S+\.\S+/.test(data.email))){
    errors.e1 = `El email de usuario tiene que ser un email.`
  }
    

  if (!data.email) {
    errors.e2 = `El email de usuario no puede estar vacío.`
  }

  if (data.email.length > 35) {
    errors.e3 = `El email no puede tener más de 35 caracteres.`
  }

  if (!(/\d/.test(data.password))) {
    errors.p1 = 'El password debe contener al menos un numero'
  }
  if (data.password.length < 6 || data.password.length > 10) {
    errors.p2 = 'El password debe contener entre 6 y 10 caracteres.'
  }
  return errors;
};

export default validationEmail;
