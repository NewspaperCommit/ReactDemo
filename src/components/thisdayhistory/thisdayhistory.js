import React,{useContext,useState,useEffect}  from 'react'
import "../../assets/css/homePagev1a.css";
import "../../assets/css/minifiy_bootstrap.css";
import "../../assets/css/website.css";
import {Countrydata} from '../home/Home';
import moment from 'moment'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/Slicks.css";
import styles from "../../assets/css/slick.module.css";
import { useDispatch, useSelector } from "react-redux";


const Thisdayhistory = () =>{
    debugger;
    //const Countrydata="";
    let Minpubdate1 
    let thisdayhistorylist = []
    // const [mindt, setmindt] = useState('');
    const [events,setUser]=useState([]);
   const country  = useContext(Countrydata)
   
   //Use Selector used for get data from current state//
   const  countryDataList  = useSelector(state => state.home);
  
    //alert(country);
    const key = 0;
   
    if(country!=0 ){
        if(country!= undefined){

            thisdayhistorylist = countryDataList.countryList.data.dayHistoryList;
           
            
        }
        
     

    }

    
    
    
    
    const settingsNoModules = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dotsClass: "button__bar",
        arrows: false
      };


      const settingsWithModules = {
        ...settingsNoModules,
        dotsClass: styles.button__bar
      };
    
    return(
        
        <>
        
<div id="divthedayInHistory" className="thisdayinHistory">
  <div className="containerBox">
      <h3 tabindex="0" className="subtitle">This day in History </h3>
      <div tabindex="0" aria-label=" Nov. 18, 1930 Publication Date" className="date  thisdayinHistoryUrl" >
      
          
      </div>
      <ul id="DayHistorySection"  className="slick-initialized slick-slider " >
      
      
      
    <li className="slick-slide slick-active slick-center" data-slick-index="0" aria-hidden="true" style={{width: '540px'}}>
   
     
    <Slider {...settingsNoModules} >
      
    {thisdayhistorylist.map((data,index) =>(
        
         <>


         <div tabindex="0" aria-label="" class="date txtRed thisdayinHistoryUrl">
                                <a href="">{moment(data.pubDate).format("MMMM-DD-YYYY")}</a>
                            </div>
          
          <div className="image loaderimg thisdayinHistoryUrl">
                          <a href="../union-franklin-county-tribune-nov-18-1930-p-1/" >
                              <img src="../thumbimage.ashx?i=340547738&amp;ishome=true" className="imageHistory" alt="Union Franklin County Tribune Image" width="332" height="417"></img> </a>
                         </div>
      <div className="desc">
                      <h4 tabindex="0" aria-label="Union Franklin County Tribune Publication Title thisdayinHistoryUrl">
                          
                          <a href="../browse/us/mo/union/union-franklin-county-tribune/">{data.pubtitle}</a>
                      </h4>
                      
                      <span tabindex="0" aria-label="Missouri Union State &amp; City Name" className="thisdayinHistoryUrl">
                          <a href="../browse/us/mo/" target="">{data.stateName},</a>
                          <a href="../browse/us/mo/union/" target="">{data.cityName},</a>
                      </span>
                      <br></br>
                      <span tabindex="0" aria-label="United States Of America Country Name" className="thisdayinHistoryUrl">
                          <a href="../browse/us/" target="">{data.countryName}</a>
                      </span>
                  </div>

</>                  
             
            
             ))
                
            }
             </Slider>      

      
</li>
              
                  
             
           
     </ul>
     
      <div className="change-theme">
          Dark
          <label className="switch">
              <input id="chkDrakLightSwitch" type="checkbox"></input>
              <span className="slider round"></span>
          </label>
          Light
      </div>
      <div className="text-right embed-code-text">
          <span className="embed-text">
              EMBED THIS WIDGET
              ON YOUR SITE
          </span>
          <button className="copy_code" id="OpenCopyPopup">
              <svg width="39" height="33" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.164 9.187L14.77 26.368H17.369L23.786 9.187H21.164Z" fill="white"></path>
                  <path d="M12.742 14.823V12.178L1.058 16.824V19.538L12.742 24.161V21.539L4.301 18.181L12.742 14.823Z" fill="white"></path>
                  <path d="M26.058 21.539V24.161L37.742 19.538V16.824L26.058 12.178V14.823L34.499 18.181L26.058 21.539Z" fill="white"></path>
              </svg>
          </button>
      </div>
      

      

  </div>
</div>

</>
    );
   
};
export default Thisdayhistory;