import React, {useState,createContext ,Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../../assets/css/homePagev1a.css";
import "../../assets/css/minifiy_bootstrap.css";
import "../../assets/css/website.css";
import {setNestedObjectValues, useFormik} from 'formik';


const validateName=empData=>{
    const errors={};
     if(!empData.discoverFirstName){
        errors.discoverFirstName ='Please Enter First Name';
     }
     else if(empData.discoverFirstName.length>20){
         errors.discoverFirstName='Employee Name should not exceed 20 character';
     }else if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.discoverFirstName)){
  
      errors.discoverFirstName = 'Please insert only Alphabet';
     }
     if(!empData.discoverLastName){
        errors.discoverLastName ='Please Enter Last Name';
     }
     else if(empData.discoverLastName.length>20){
         errors.discoverLastName='Employee Name should not exceed 20 character';
     }else if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.discoverLastName)){
  
      errors.discoverLastName = 'Please insert only Alphabet';
     }
     if(!empData.discoverKeyword){
        errors.discoverKeyword ='Please Enter search term(s)';
     }
     else if(empData.discoverKeyword.length>20){
         errors.discoverKeyword='Employee Name should not exceed 20 character';
     }else if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.discoverKeyword)){
  
      errors.discoverKeyword = 'Please insert only Alphabet';
     }
     if(!empData.discoverPubTitles){
        errors.discoverPubTitles ='Please Enter search term(s)';
     }
     else if(empData.discoverPubTitles.length>20){
         errors.discoverPubTitles='Employee Name should not exceed 20 character';
     }else if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.discoverPubTitles)){
  
      errors.discoverPubTitles = 'Please insert only Alphabet';
     }
     return errors;
}
// const handlechange= e=>{
//     const{name,value}=e.target;
//     setNestedObjectValues({
//     ...user,[name]:value
//     });
//     };
//     const onInputChange = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//     };


const Homepagesearch = (props) =>{
    const formik=useFormik({
        initialValues:{
            
            discoverFirstName:'',
            discoverLastName:'',
            discoverKeyword:'',
            discoverPubTitles:'',
           
        },
        validate:validateName,
        onSubmit: values => {
            
          },
    });
return(

<div className="bannerForm">
                                    <div className="title" tabindex="0">
                                        Find anyone in <br></br> <span id="findsearchCount">9,451,268,404</span> <br></br> names.
                                    </div>
                                   
                                    <div className="formContent">
                                        
                                  <Tabs> 
                                    <TabList className="nav nav-tabs" > 
                                    <Tab><li className="active"> Name</li></Tab>
                                    <Tab><li>Keyword</li></Tab>
                                    <Tab><li>Titles</li></Tab>
                                    </TabList>
                                    <TabPanel>

                                    <div role="tabpanel" className="tab-pane active" id="searchname" style={{display: 'block'}}>
                                    <form onSubmit={formik.handleSubmit}>    
                                            {/* <input name="__RequestVerificationToken" type="hidden" value="">  </input>                               */}
                                            <div className="form-group">
                                                    <label for="discoverFirstName">First name</label>
                                                    {/* <input aria-label="please enter firstname or Press tab to continue" className="CheckValidation form-control firstNamesolrSrh" id="discoverFirstName" name="discoverFirstName" tabindex="0" type="text" value="" placeholder="E.g. John"></input>  */}
                                                    <input type="text"
                      className=" form-control form-control-lg"
                      placeholder="E.g. jhon"
                      name="discoverFirstName" 
                       value={formik.values.discoverFirstName}
                       onBlur={formik.handleBlur}
                       onChange={formik.handleChange}
                       />   {formik.touched.discoverFirstName && formik.errors.discoverFirstName ? <span style={{color:'red'}}>{formik.errors.discoverFirstName}</span> : null}              
                                                    {/* <div id="Firstnameerrorspan" className="error-msg" tabindex="0" style={{display: 'none', color: 'red'}} onkeydown=" FocusFirstName();"></div> */}
                                                </div>
                                                <div className="form-group">
                                                    <label for="discoverLastName">Last name </label>
                                                    <input type="text"
                      className=" form-control form-control-lg"
                      placeholder="E.g. Doe"
                      name="discoverLastName" 
                       value={formik.values.discoverLastName}
                       onBlur={formik.handleBlur}
                       onChange={formik.handleChange}
                       />   {formik.touched.discoverLastName && formik.errors.discoverLastName ? <span style={{color:'red'}}>{formik.errors.discoverLastName}</span> : null}              
                                                    {/* <input aria-label="please enter Lastname and Press tab to continue" className=" CheckValidation form-control lastNamesolrSrh" id="discoverLastName" name="discoverLastName" placeholder="E.g. Doe" tabindex="0" type="text" value=""></input> 
                                                    <div id="errorspan" className="error-msg" tabindex="0" style={{display: 'none'  ,color: 'red'}} onkeydown=" FocusLastName();"></div> */}
                                                </div>
                                                 <div className="form-group"> 
                                                     <input id="discoverpeoplehomev5" name="discoverpeoplehomev5" type="submit"  value="Discover your family stories" className="btn btn-block btn-green" aria-label="Press enter to search by name"></input> 
                                                 </div> 
                                                 {/* <button className="btn btn-primary btn-block" >Login</button> */}
                                                <div className="form-link text-center">
                                                    <a href="../advancedsearch/">Go to Advanced Search</a>
                                                </div>
                                                </form>
                   
                </div>
                                        
                                    </TabPanel>

                                    <TabPanel> 
                                    
                                             
                                    <div role="tabpanel" className="tab-pane" id="profile"> 
                   
                   {/* <input name="__RequestVerificationToken" type="hidden" value="0">
                       </input>  */}
                       <form onSubmit={formik.handleSubmit}>
                                                      <div className="form-group">
                                                   <label for="discoverKeyword">Keyword </label>
                                                   {/* <input aria-label="please enter keyword and Press tab to continue" className="CheckValidation form-control" id="discoverKeyword" name="discoverKeyword" placeholder="What are you looking for?" type="text" value=""></input> */}
                                                   <input type="text"
                      className=" form-control form-control-lg"
                      placeholder="What are you looking for?"
                      name="discoverKeyword" 
                       value={formik.values.discoverKeyword}
                       onBlur={formik.handleBlur}
                       onChange={formik.handleChange}
                       />   {formik.touched.discoverKeyword && formik.errors.discoverKeyword ? <span style={{color:'red'}}>{formik.errors.discoverKeyword}</span> : null}
                                                   {/* <div id="KeywordErrorSpan" className="error-msg" tabindex="0" style={{display: 'none', color: 'red'}} onkeydown=" Focuskeyword();"></div> */}
               
                                               </div>
                                               <div className="form-group">
                                                   <input id="discoverpeoplehomev6" name="discoverpeoplehomev6" type="submit" value="Discover your family stories" className="btn btn-block btn-green" aria-label="Press enter to search by keyword"></input>
                                               </div>
                                               <div className="form-link text-center">
                                                   <a href="../advancedsearch/">Go to Advanced Search</a>
                                               </div>
                                               </form>
               
               </div>
                                    
                                    
                                    </TabPanel>




                                    <TabPanel> 
                                    
                                    
                                    
                                    <div role="tabpanel" className="tab-pane" id="titles">
                    
                    <div className="form-group" id="formPubTitlesList">
                        <label for="discoverPubTitles">Newspaper Titles</label>
                        {/* <input aria-label="please enter publication titles and Press tab to continue" className="form-control pubTitlesList ui-autocomplete-input" id="pubTitlesList" name="pubTitlesList" placeholder="What are you looking for?" type="text" value="" autocomplete="off"></input> */}
                        <input type="text"
                      className=" form-control form-control-lg"
                      placeholder="What are you looking for?"
                      name="discoverPubTitles" 
                       value={formik.values.discoverPubTitles}
                       onBlur={formik.handleBlur}
                       onChange={formik.handleChange}
                       />   {formik.touched.discoverPubTitles && formik.errors.discoverPubTitles ? <span style={{color:'red'}}>{formik.errors.discoverPubTitles}</span> : null}
                        {/* <span className="field-validation-valid" data-valmsg-for="pubTitlesList" data-valmsg-replace="true"></span> */}
                        {/* <div id="PubtitleErrorSpan" className="error-msg" tabindex="0" style={{display: 'none', color: 'red'}}></div> */}
                    <ul className="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id="ui-id-1" tabindex="0" style={{display: 'none'}}></ul></div>
                    <div className="form-group">

                        
                        

                        <input id="discovertitlesearch" type="button" name="discovertitlesearch" value="Discover Your Titles" className="btn btn-block btn-green" aria-label="Press enter to search by keyword" disabled=""></input>

                    </div>

                </div>
                                    
                                    
                                    
                                    
                                    </TabPanel>
                                    </Tabs>
                                       
                                    </div>
                                </div>
                               


)

}

export  default  Homepagesearch; 