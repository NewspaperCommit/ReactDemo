import React, {useState} from 'react'

import '../../assets/css/loginPage.css';
import { useDispatch, useSelector } from "react-redux";
import { Singin } from "../../actions/singin";

const Login = ({history}) =>{

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const { username, password } = inputs;
    const  dispatch  = useDispatch();
    const  containerList  = useSelector(state => state.singin);
    
    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

       
        if (username && password) {
            
let obj ={
    username,
    password
}

            dispatch(Singin(obj, (result) => {
               
                if (result.status == 200) {
                history.push('/');
                }
            }));   
        }
    }
    

return(
<>
    <div className="loginContainer">
    <div className="row row-eq-height">
        <div className="col-sm-6">
            <div className="loginSection">
                <h2><span className="txtRed">Login</span> to Your Account </h2>
                <form name="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input class="form-control" data-val="true" data-val-required="The Username field is required." id="UserName" name="username" placeholder="Enter your username" type="text" value={username} onChange={handleChange}/>
                            <span class="field-validation-valid error-msg" data-valmsg-for="UserName" data-valmsg-replace="true"></span>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input class="form-control" data-toggle="password" data-val="true" data-val-required="The Password field is required." id="Password" maxlength="50" name="password" placeholder="Enter your password" type="password" value={password} onChange={handleChange}/>
                        </div>
                  
                  
                        {/* <button type="submit" name="Reset" id="Reset" className="btn btn-yellow" style={{width: "100%",height: "38px"}}>Yes. Log me in and end the other session.</button> */}
                        <input type="submit" name="Login" id="Login" value="Login to Your Account" class="btn btn-block btn-green"/>
                   
                   
                    <div className="form-check">
                        <label className="form-check-label">
                          
                        </label>
                    </div>
                    
                   
                <a href="#forgotModal" data-toggle="modal" data-target="#forgotModal" onclick="ResetForgotPasswordForm()">Forgot username and/ or password?</a>
                <div style={{textAalign:"center"}}>

                    <div style={{textAlign:"center",padding: "20px"}}>
                        <label>OR</label>
                        <div className="sign-up-with-google">
                            <div className="g-signin2" data-onsuccess="onGoogleSignIn" data-theme="dark"></div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="leftSection">
                <h1><span className="txtRed">Don't have an account?</span> Explore the world’s premier Newspaper Archive!</h1>
                <a href="" className="btn btn-yellow">Start Free Trial</a>
                <div className="newsArchiveList">
                    <h2>WHY NewspaperARCHIVE?</h2>
                    <ul>
                        <li><i className="customicon customicon-checkmark"></i>More Exclusive Content</li>
                        {/* <li><i className="customicon customicon-checkmark"></i>@Na.Core.Configuration.NaConfig.Url.TotalNumberOfImageInDegitalArchive+ Billion Articles and Growing</li> */}
                        <li><i className="customicon customicon-checkmark"></i>400+ Years of Papers: 1607 to Today!</li>
                        <li><i className="customicon customicon-checkmark"></i>All 50 U.S.States + 22 Other Countries</li>
                        <li><i className="customicon customicon-checkmark"></i>Powerful Time-Saving Search Tools</li>
                        <li><i className="customicon customicon-checkmark"></i>View, Save, Print and Share It All</li>
                        <li><i className="customicon customicon-checkmark"></i>It's Easy, Fun and Exciting!</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
     


</>



);




}


export default Login;