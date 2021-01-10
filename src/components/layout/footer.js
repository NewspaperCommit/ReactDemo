import React from 'react'
import "../../assets/css/homePagev1a.css"
import "../../assets/css/minifiy_bootstrap.css"
import "../../assets/css/website.css"
 
const footer = () =>{
    return(
//   <div classNameName="footer-copyright text-center py-3">© 2020 Copyright:
//     <a href="https://www.smartdatainc.com/">SmartData</a>
//   </div>
<div id="footer" style={{background: 'url(&quot;../../assets/images/world-map.svg&quot) right bottom no-repeat rgb(255, 255, 255)'}}>

  <div className="footerContent">
      <div className="container">
          
          <div role="navigation" className="footerNav clearfix">
              <ul>
                  <li><a id="AboutUS" href="../about-us/">About Us</a></li>
                  <li><a href="../contactus/">Contact Us</a></li>
                  <li>
                      {/* @if (ViewBag.HistoricalEvent != null)
                      {
                          <a href="../@ViewBag.HistoricalEvent">This Day In History</a>
                      }
                      else
                      {
                          <a href="../this-day-in-history/">This Day In History</a>
                      } */}
                   </li>
                  <li><a href="../people/">People</a></li>                        
                  <li><a href="../free-newspaper-archives/">Free Newspaper Archives</a></li>
                  <li><a href="../ssdi/">SSDI</a></li>
                  <li><a href="../help/">Help</a></li>
                  <li><a href="../terms/">Terms</a></li>
                  <li><a href="../privacypolicy/">Privacy</a></li>
                  <li><a href="../copyright/">Copyright</a></li>
                  <li><a href="../sitemap/">Sitemap</a></li>
              </ul>
          </div>
         
          <div className="footerBottom clearfix">
              <div className="copyright">
                  {/* &copy; Copyright  {{ today | date: 'yyyy' }}  */}
                  NewspaperARCHIVE.com. All rights reserved</div>
          </div>
        
      </div>
  </div>
  
  <div id="FBConnectModal" className="FBModal"></div>
 
</div>
  
    );
};
export default footer;