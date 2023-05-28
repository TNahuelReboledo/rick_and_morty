
const validationEmail = (data) => {
  let errors = {};

  if (!(/\S+@\S+\.\S+/.test(data.email))){
    errors.e1 = `It's not an email.`
  }
    

  if (!data.email) {
    errors.e2 = `Email cannot be empty.`
  }

  if (data.email.length > 35) {
    errors.e3 = `Cannot be longer than 35 characters.`
  }

  if (!(/\d/.test(data.password))) {
    errors.p1 = 'Must contain at least one number.'
  }
  if (data.password.length < 6 || data.password.length > 10) {
    errors.p2 = 'Must be between 6 and 15 characters.'
  }
  return errors;
};

export default validationEmail;
