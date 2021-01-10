import React, {useState,createContext ,Component, useContext} from 'react'
import { useEffect } from 'react';
import "../../assets/css/homePagev1a.css";
import "../../assets/css/minifiy_bootstrap.css";
import "../../assets/css/website.css";
// import "../../assets/javascript/HomePageV1";
// import "../../assets/javascript/Slicks";
import axios from 'axios';
import Thisdayhistory from '../thisdayhistory/thisdayhistory';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
//import Name from '../banner/nametab'
//import Keyword from '../banner/keywordtab'
//import Titles from '../banner/titlestab'
import Homepagesearch from '../home/Homepagesearch';
import { useDispatch, useSelector } from "react-redux";
 //import { json } from 'express';
 import { getCountryData } from "../../actions/home";
 import worldimg from '../../assets/images/world-map.svg'
 import calenderimg from '../../assets/images/calendar-icon-lg.svg'
 import newspapercollageimg from '../../assets/images/newspaper-collage.png'
 

//import ScriptTag from 'react-script-tag';
//
//
const  Countrydata  = createContext();
const Home = () =>{
    debugger;
    const  dispatch  = useDispatch();
    const  containerList  = useSelector(state => state.home);
    
    let Country  = '';
    
    
    //const Country  = containerList.countryLisy.data;
    
    //const jsnData=JSON.parse(containerList);
  //  const Countrydata=useContext();
//<ScriptTag type="text/javascript" src="src/assets/javascript/HomePageV1.js" />
//let maxpubdt = 
// const headers ={
//     "Content-Type": "application/json",    
//     }
    
//     const url = "https://localhost:44357/api/Home/GetAllCountriesWithAbbr";
  debugger;  
//const [Country, setCountry] = useState([]);
useEffect(() => {
    dispatch(getCountryData());
},[]);

if(containerList.countryList!=""){

    Country  = containerList.countryList.data;
}
// let arr = []
// let jsoncountry = JSON.stringify(arr);
// const loadCountry = async () =>{
//  debugger
 
//  const result = await axios.get(url);
//  let arrdt = result.data
//  arr.push(arrdt)
//  setCountry(result.data.data)
debugger
 
let Maxpubdate = Country.maxPubdateYear;
let minpubdate  = Country.minPubDateYear;

// }
      
    return(
     <>
     
   

<div className="containerWrapper">
                    <div className="showcase-main">
                        <div className="showcase-content">
                                <h3>Try 7 Days Free</h3>
                            <div className="heading">
                                <h2>
                                    Explore billions of
                                    newspaper articles from
                                    all over the world.
                                </h2>
                            </div>
                            <div className="sub-head">
                                Find births, deaths, news and more! Powerful search tools to help you ﬁnd exactly who or what you are looking for.
                            </div>
                                <div className="button">
                                    <a href="../subscribe?plan=18478/" className="btn btn-orange">Start Free Trial</a>
                                </div>
                        </div>
                    </div>
                    
                     <div className="banner"> 
                        
                        <div className="bannerContainer clearfix">
                            
                    
                                <div className="bannerContent">
                                    <h3>Or start searching now</h3>
                                    <h1 tabindex="0" aria-level="1">Newspaper Archives, Obituaries &amp; Family History Records</h1>
                                    <ul className="clearfix">
                                        <li><h2 aria-level="2"><a href="../browse/">Newspaper Archives <br></br>   {minpubdate} -{Maxpubdate}</a></h2></li>
                                        <li><h2 aria-level="2"><a href="../tags/?plo=obituary-obituaries-death/" rel="nofollow">108+ Million Obituaries</a></h2></li>
                                        <li><h2 aria-level="2"><a href="../tags/?plo=marriage-engagement/" rel="nofollow">Marriage Records</a></h2></li>
                                        <li><h2 aria-level="2"><a href="../tags/?plo=birth-births/" rel="nofollow">Birth Records</a></h2></li>
                                        <li><h2 aria-level="2"><a href="../tags/?plo=death-deaths/" rel="nofollow">Death Records</a></h2></li>
                                    </ul>
                                    <ul className="clearfix">
                                        <li><h2 aria-level="2"><a href="../tags/?plo=arrest-arrests-arrested/" rel="nofollow">Arrest Records</a></h2></li>
                                        <li><h2 aria-level="2"><a href="../tags/?plo=divorce-divorced/" rel="nofollow">Divorce Records</a></h2></li>
                                        <li><h2 aria-level="2"><a href="../tags/?plo=murder-murders/" rel="nofollow">Murder Cases</a></h2></li>
                                        <li><h2 aria-level="2"><a href="../tags/?plo=photo-photograph-photographs/" rel="nofollow">Old Photographs</a></h2></li>
                                        <li><h2 aria-level="2"><a href="../tags/family?plo=reunion-reunions/" rel="nofollow">Family Reunions</a></h2></li>
                                        <li><h2 aria-level="2" tabindex="0">Genealogy, Family History, and so much more!</h2></li>
                                    </ul>
                                </div>
                                
                                {/* This component for HomepageSearch */}
                               <Homepagesearch/> 
                        </div>
                    
                    </div>
                    
                    
                    
                    <div className="bottom-section-wrap">
                        
                    {/* <style>
                        .clsdark {
                            background: #000;
                        }
                    
                        .clslight {
                            background: #fff;
                        }
                    </style>
                     */}
                    
                        {/* <app-thisdayhistory></app-thisdayhistory> */}
                        {/* <Thisdayhistory/> */}
                     <Countrydata.Provider value={Country}>

<Thisdayhistory/> 
</Countrydata.Provider>  
                        <div className="AboutServices">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="AboutServicesItem by-location" style={{ backgroundImage:`url(${worldimg})` }}>
                                        <h4>Browse Newspapers</h4>
                                        <h3>By Location</h3>
                                        <a role="button" href="../browse/" className="link">Browse now</a>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="AboutServicesItem by-date" style={{backgroundImage:`url(${calenderimg})`}}>
                                        <h4>Browse Newspapers</h4>
                                        <h3>By Date</h3>
                                        <a role="button" href="../this-day-in-history/" className="link">Browse now</a>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="AboutServicesItem by-publication" style={{backgroundImage:`url(${newspapercollageimg})`}}>
                                        <h4>Browse Newspapers</h4>
                                        <h3>By Publication</h3>
                                        <a role="button" href="../browse/" className="link">Browse now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="modal modalback customModal fade" data-keyboard="false" data-backdrop="static" id="CopyViewModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display:'none'}}>
                        <div className="modal-dialog modal-iframe" role="document">
                            <div className="modal-header"><h2>Copy This Day In History</h2><button type="button" className="modalclose" data-dismiss="modal" aria-label="Close" id="ClosePageViewModal"></button></div>
                            <div className="modal-body">
                                <div className="share-input">
                                    <label>Embed: </label>
                                    
                                    <textarea readonly="" cols="50" id="txtIFrameEmbed">                </textarea>
                                </div>
                                <div className="left_120">
                                    <button onclick="copyIframe()" className="btn btn-yellow popup" id="History_Button">Copy</button>
                                    <span className="popuptext" id="myPopup" style={{display:'none'}}>Copied to clipboard!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    {/* <input type="hidden" id="hdnutcDate" value="11/18/2020 11:58:13 AM"></input>
                    <input type="hidden" id="hdnMainutcDate" value="7/26/2019 12:50:00 PM"></input>
                    <input type="hidden" id="hdnInitialCountTicker" value="8412345679"></input>
                    <input type="hidden" id="HdnSessionExpired"></input>
                    <input type="hidden" id="HdnThanksPopUp"></input>
                    <input type="hidden" id="getListTitles" value=""></input>
                    <input type="hidden" id="getPubTitle" value=""></input>
                    
                    <input type="hidden" id="hdnCookieName" value="NewspaperARCHIVE.com.TestExprienceId"></input>
                     */}
                    
                   
                                    </div>
                                    


</>
  
    );
};
export default Home;
export {Countrydata};