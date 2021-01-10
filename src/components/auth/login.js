// import React, { useState, createRef } from "react";
// import { Card, Row, Col, Form, Button } from "shards-react";
// // import { FormCheckbox, NavLink } from "shards-react";
// import { Link } from "react-router-dom";
// import { useDispatch } from 'react-redux';

// import PageTitle from "../../components/common/PageTitle";
// import { EmailBox, PasswordBox } from './../../components/common/FormsInput';
// import { login } from './../../context/actions/user';

// import './account.scss';

// const Login = ({ history }) => {
// debugger;
//  //const { loader } = useSelector(state => state);
//   const dispatch = useDispatch();

//   const emailRef = createRef(); const passRef = createRef();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const [checkBox, setcheckBox] = useState(false);

//   const submitForm = () => {
//     debugger;
//     emailRef.current.props.onChange(email);
//     passRef.current.props.onChange(password);
//     if (email === '' || password === '') console.log("Values should not be empty");
//     history.push('/dashboard');


//   return (
//     <div className="account-block">
//       <div className="page-header text-center">
//         <PageTitle title="Login" subtitle="Sign In Form" className="mb-4" />
//       </div>
//       <Card small className="loginBox p-4">
//         <Form>
//           <Row form>
//             <Col sm="12" className="form-group">
//               <EmailBox Name='Email' Placeholder='Email' handleVal={(val) => setEmail(val)} ref={emailRef} />
//             </Col>
//             <Col sm="12" className="form-group">
//               <PasswordBox Name="Password" Placeholder="Password" handleVal={(val) => setPassword(val)} ref={passRef} />
//             </Col>
//           </Row>
//           <div className="forgot-blc d-flex flex-wrap align-items-center">

//             {/* <FormCheckbox
//           checked={checkBox}
//           onChange={handleChange}
//         >
//           Remember Me
//         </FormCheckbox> */}
//             <Link to="/forgot-password" className="ml-auto mb-0">
//               Forgot Password?
//         </Link>
//           </div>
//           <div className="account-btn">
//             <Button pill block theme="primary" onClick={() => submitForm()}>
//               Submit
//       </Button>
//           </div>
//           <div className="formBottomTxt text-center">
//             don't have an acccount? <Link to="/register">
//               Register
//           </Link>
//           </div>
//         </Form>
//       </Card>
//     </div>)
// };
// }
// export default Login;