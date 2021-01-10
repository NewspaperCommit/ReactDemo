export const checkValidations = (name, value, min = 4, max = 100) => {
  switch (name) {
    case 'email':
      return (/^[a-zA-Z0-9]+.+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) && value.length > 0 ? true : false;
    case 'password': {
      return (value.length >= 8) ? true : false;
    }
    case 'text':
      return (value.length >= min && value.length <= max) ? true : false;
    case 'name':
      // return (/^[a-zA-Z][a-zA-Z\s]*$/.test(value) && value.length >= min && value.length <= max) ? true : false;
      return (value.length >= min && value.length <= max) ? true : false;
    default:
      return false;
  }
}



// {
//   const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(String(value).toLowerCase());
//   console.log("emailformat: ", emailformat);
//   return value.match(emailformat) && value.length > 0 ? true : false;
// }