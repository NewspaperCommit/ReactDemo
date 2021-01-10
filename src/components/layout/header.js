import React, {useState,createContext ,Component, useContext} from 'react'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import "../../assets/css/homePagev1a.css"
import "../../assets/css/minifiy_bootstrap.css"
import "../../assets/css/website.css"
import { useDispatch, useSelector } from "react-redux";
import {logout} from '../../actions/singin';
//import cart from '../../home/cart';
import {Cartmodal} from '../home/cartmodal';
import {Modal,Button} from 'react-bootstrap';

const Header =() =>
{
   
    const  dispatch  = useDispatch();
    const  userlogindata  = useSelector(state => state.sigin);
    const Isloggedin = userlogindata.loggedIn;
    let username ="";
    if(Isloggedin == true){
        debugger

         username =userlogindata.Userdata.data.firstName;
    }
    
    const [isActive, setActive] = useState("false");
       
    const style = {
        display: 'block'
    };

    const handleToggle = () => {
        setActive(!isActive);
      
      };

      const clicklogout = () => {
          
        dispatch(logout());
       
      
      };
const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    return(
        <div id="header">
        <style>
            {/* #header .container {
                position: relative;
            }
      
            .add-banner-top {
                margin: 0 auto
            } */}
        </style>
      
        
        <div className="container">

            <div className='logo'>
                <a id="idLogo" href="../" tabindex="0">
                    
                    <svg width="330" height="22" viewBox="0 0 330 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5207 0.385905L19.1978 21.2914H13.3667L8.39905 9.14334H8.34298L5.84457 21.2914H0L4.32175 0.385905H10.1529L15.1071 12.562H15.1631L17.6862 0.385905H23.533H23.5207ZM42.741 0.385905L41.8214 4.87765H31.6114L30.9386 8.20072H40.7775L39.8714 12.435H30.046L29.196 16.527H40.2706L39.2838 21.3042H22.0069L26.3017 0.401053H42.741V0.385905ZM71.5086 0.385905L62.0397 21.2891H55.9462L55.4663 8.46871H55.4102L49.6654 21.2914H43.4486L42.9148 0.385905H48.5138L48.2267 13.148L48.294 13.2063L53.8526 0.387071H59.8901L60.1783 13.2925H60.2343L65.4072 0.387071H71.5097L71.5086 0.385905ZM87.5778 6.18846L81.7467 6.51471C81.6188 4.69937 80.6455 3.7917 78.8244 3.7917C78.0843 3.7917 77.5124 3.95483 77.1165 4.28108C76.7207 4.60732 76.5188 5.00348 76.5188 5.4614C76.5188 5.79347 76.6792 6.1069 77.001 6.40752C77.3229 6.70813 78.0809 7.09147 79.2796 7.55638C80.798 8.1646 82.0337 8.74019 82.9846 9.28083C83.9356 9.82147 84.7138 10.5276 85.3171 11.3921C85.9204 12.2567 86.2232 13.3356 86.2232 14.629C86.2232 15.8466 85.8957 16.978 85.242 18.0278C84.5882 19.0776 83.6451 19.9433 82.4161 20.6238C81.1871 21.3042 79.4355 21.6456 77.1681 21.6456C73.9756 21.6456 71.7104 21.0083 70.3748 19.7348C69.0393 18.4612 68.3564 16.8265 68.3564 14.8294V14.3447L74.2021 13.9322C74.2021 15.2349 74.4791 16.1507 75.0319 16.689C75.5847 17.2273 76.3506 17.4965 77.3307 17.4965C78.3175 17.4965 79.0711 17.2727 79.588 16.8265C80.105 16.3802 80.373 15.871 80.373 15.3118C80.373 14.8841 80.2081 14.4892 79.8796 14.1279C79.551 13.7667 78.7403 13.3438 77.4507 12.8463C74.4948 11.7452 72.6266 10.7256 71.8438 9.79584C71.0611 8.86603 70.6709 7.7428 70.6709 6.41684C70.6625 5.24668 71.0003 4.1021 71.6386 3.13804C72.2834 2.14765 73.222 1.39028 74.4421 0.831001C75.6621 0.271719 77.1479 0.0153809 78.8681 0.0153809C84.3101 0.0153809 87.2055 2.06841 87.5531 6.17565L87.5778 6.18846ZM90.8073 0.385905H99.9465C101.666 0.385905 102.965 0.595637 103.838 1.01859C104.71 1.44155 105.374 2.06725 105.831 2.89918C106.289 3.73112 106.518 4.75414 106.518 5.96009C106.518 7.53074 106.111 8.92196 105.292 10.1547C104.473 11.3875 103.444 12.2555 102.204 12.788C100.964 13.3205 99.2434 13.5873 97.0489 13.5873H94.2903L92.726 21.3008H86.4575L90.7972 0.383575L90.8073 0.385905ZM95.1717 9.44163H97.272C98.251 9.44163 99.0662 9.14218 99.6829 8.54444C100.3 7.94671 100.62 7.23246 100.62 6.40519C100.62 5.15029 99.9666 4.52343 98.658 4.52343H96.2157L95.1728 9.44279L95.1717 9.44163ZM122.34 21.2914H116.247L115.972 17.8682H109.412L107.847 21.2914H101.15L112.513 0.388236H119.129L122.328 21.2914H122.34ZM115.575 13.4323L114.958 5.8191H114.904L111.446 13.4323H115.575ZM127.511 0.385905H136.65C138.37 0.385905 139.664 0.595637 140.539 1.01859C141.38 1.40959 142.08 2.0681 142.538 2.89918C142.996 3.73112 143.225 4.75414 143.225 5.96009C143.225 7.53074 142.813 8.92196 141.993 10.1547C141.174 11.3875 140.146 12.2555 138.906 12.788C137.666 13.3205 135.951 13.5873 133.756 13.5873H130.997L129.433 21.3008H123.161L127.512 0.395227L127.511 0.385905ZM131.884 9.44163H133.984C134.963 9.44163 135.763 9.14218 136.391 8.54444C137.019 7.94671 137.333 7.23246 137.333 6.40519C137.333 5.15029 136.679 4.52343 135.37 4.52343H132.928L131.885 9.44279L131.884 9.44163ZM162.834 0.385905L161.914 4.87765H151.704L151.032 8.20072H160.87L159.965 12.435H150.118L149.265 16.527H160.34L159.351 21.3042H142.077L146.372 0.401053H162.812L162.834 0.385905ZM165.287 0.385905H176.733C178.709 0.385905 180.153 0.921885 181.07 1.99734C181.986 3.07279 182.442 4.36264 182.442 5.87736C182.442 7.5121 181.957 8.93827 180.988 10.1594C180.019 11.3805 178.467 12.1658 176.336 12.5072C177.598 13.5733 179.108 16.5014 180.864 21.2926H174.291L172.351 16.3336C171.605 14.5416 171.045 13.5069 170.669 13.2203C170.293 12.9336 169.841 12.7938 169.31 12.7938H168.957L167.241 21.2926H160.997L165.265 0.387071L165.287 0.385905ZM169.789 8.88467H170.969C172.945 8.88467 174.224 8.78913 174.805 8.59921C175.385 8.40928 175.817 8.08653 176.101 7.63444C176.385 7.18236 176.527 6.75124 176.527 6.33294C176.527 5.7993 176.359 5.38333 176.019 5.07805C175.679 4.77278 174.945 4.62131 173.81 4.62131H170.654L169.789 8.88584V8.88467Z" fill="black"></path>
                        <path d="M201.035 21.2907H194.942L194.667 17.8674H188.107L186.542 21.2907H179.845L191.208 0.387476H197.824L201.023 21.2907H201.035ZM194.27 13.4316L193.653 5.81834H193.597L190.151 13.4304H194.282L194.27 13.4316ZM206.187 0.385146H217.633C219.608 0.385146 221.053 0.921125 221.969 1.99658C222.885 3.07203 223.341 4.36188 223.341 5.8766C223.341 7.51134 222.857 8.93751 221.887 10.1586C220.917 11.3797 219.366 12.165 217.236 12.5064C218.498 13.5726 220.008 16.5006 221.766 21.2918H215.193L213.251 16.3433C212.506 14.5513 211.945 13.5166 211.569 13.23C211.194 12.9434 210.742 12.8035 210.224 12.8035H209.894L208.178 21.3023H201.935L206.201 0.396798L206.187 0.385146ZM210.688 8.88391H211.868C213.844 8.88391 215.123 8.78837 215.703 8.59844C216.282 8.40852 216.715 8.08577 216.999 7.63368C217.283 7.18159 217.425 6.75048 217.425 6.33218C217.425 5.79853 217.257 5.38257 216.918 5.07729C216.58 4.77202 215.842 4.62055 214.709 4.62055H211.553L210.689 8.88508L210.688 8.88391ZM243.17 7.255L237.451 7.92381V7.80962C237.451 6.79359 237.159 6.03856 236.573 5.54336C235.986 5.04816 235.341 4.80231 234.637 4.80231C233.722 4.80231 232.843 5.14837 231.96 5.84747C231.078 6.54658 230.393 7.61504 229.866 9.0517C229.339 10.4884 229.078 11.8854 229.078 13.244C229.078 14.2926 229.348 15.1455 229.889 15.8423C230.431 16.5391 231.216 16.891 232.249 16.891C233.202 16.891 234.001 16.5764 234.655 15.9588C235.309 15.3413 235.885 14.3684 236.379 13.0669L242.21 14.0072C241.606 16.1662 240.435 17.9688 238.7 19.4543C236.965 20.9399 234.71 21.6647 231.93 21.6647C229.029 21.6647 226.812 20.8491 225.278 19.2551C223.744 17.6612 222.982 15.5102 222.982 12.8385C222.982 10.7936 223.435 8.74059 224.345 6.67824C225.256 4.61589 226.588 2.9963 228.334 1.81598C230.08 0.635658 232.178 0.0472463 234.619 0.0472463C237.153 0.0472463 239.153 0.707899 240.621 2.02804C242.089 3.34818 242.942 5.09477 243.171 7.26316L243.17 7.255ZM265.67 0.396798L261.347 21.3H255.104L256.847 12.8012H250.119L248.403 21.3H242.104L246.427 0.396798H252.671L251.148 7.78399H257.872L259.45 0.396798H265.68H265.67ZM274.983 0.396798L270.673 21.3H264.386L268.695 0.396798H274.994H274.983ZM297.742 0.396798L286.45 21.3H279.725L275.856 0.396798H282.033L283.83 15.283H283.886L291.009 0.396798H297.745H297.742ZM314.796 0.396798L313.876 4.88854H303.667L302.995 8.21161H312.833L311.927 12.4458H302.101L301.249 16.5379H312.323L311.336 21.3151H294.059L298.354 0.411945H314.796V0.396798ZM323.812 0.0122909C325.509 0.0122909 326.951 0.641484 328.185 1.89754C328.77 2.48402 329.232 3.18884 329.544 3.96842C329.856 4.74801 330.011 5.58581 329.999 6.43006C329.999 8.18131 329.394 9.68671 328.185 10.9439C326.976 12.2012 325.522 12.8292 323.812 12.8292C322.102 12.8292 320.672 12.2 319.438 10.9439C318.205 9.68788 317.624 8.18248 317.624 6.43006C317.613 5.58425 317.769 4.74504 318.08 3.96373C318.392 3.18241 318.854 2.4754 319.438 1.88589C320.003 1.27863 320.681 0.79803 321.431 0.473774C322.181 0.149519 322.987 -0.011508 323.799 0.000639502L323.812 0.0122909ZM323.812 11.5859C324.466 11.596 325.116 11.4668 325.721 11.2064C326.325 10.9459 326.872 10.5596 327.328 10.0712C327.8 9.60148 328.173 9.03584 328.425 8.40958C328.677 7.78331 328.801 7.10986 328.792 6.43122C328.792 5.00738 328.302 3.78861 327.328 2.77724C326.873 2.28729 326.327 1.89955 325.722 1.638C325.117 1.37646 324.467 1.24668 323.812 1.25669C322.441 1.25669 321.27 1.76354 320.291 2.77724C319.312 3.79094 318.833 5.00738 318.833 6.43122C318.824 7.1101 318.95 7.78355 319.203 8.40973C319.455 9.03592 319.829 9.60146 320.301 10.0712C321.281 11.0814 322.454 11.5859 323.822 11.5859H323.812ZM326.705 9.85566H324.772L323.538 7.56377C323.308 7.2783 323.089 7.13266 322.848 7.13266C322.754 7.13266 322.691 7.13732 322.653 7.1513V9.8545H321.015V2.97416H323.957C325.545 2.97416 326.341 3.62316 326.341 4.92349C326.341 5.93486 325.747 6.55473 324.554 6.8134V6.84602C325.052 7.00216 325.451 7.36336 325.727 7.92963L326.707 9.84401L326.705 9.85566ZM322.654 5.89058H323.368C324.224 5.89058 324.652 5.60628 324.652 5.03651C324.652 4.46674 324.244 4.17895 323.431 4.17895H322.655V5.89175L322.654 5.89058Z" fill="#DE2336"></path>
                    </svg>
      
                </a>
            </div>
            <div role="menubar" className='rightNav'>
                <ul>
                
                {Isloggedin
        ? <li><a  onClick={clicklogout}>Logout</a></li>
        :<li><Link to="/login" className="">
            Sign in
        </Link></li>
      }
                       
                        
                        <li className='cart'>
                        <Cartmodal/>
        
        {/* <a   onClick={handleShow} > 
            <svg width="20.571428571428573" height="22" role="presentation" viewBox="0 0 1664 1792"><path key="path-0" d="M640 1536q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zM1536 1536q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zM1664 448v512q0 24-16.5 42.5t-40.5 21.5l-1044 122q13 60 13 70 0 16-24 64h920q26 0 45 19t19 45-19 45-45 19h-1024q-26 0-45-19t-19-45q0-11 8-31.5t16-36 21.5-40 15.5-29.5l-177-823h-204q-26 0-45-19t-19-45 19-45 45-19h256q16 0 28.5 6.5t19.5 15.5 13 24.5 8 26 5.5 29.5 4.5 26h1201q26 0 45 19t19 45z"></path>  </svg>
         </a>
        {Isloggedin
        ? <p className='cartVal' onClick={handleShow}>{userlogindata.Userdata.data.cartvalue}
        <Cartmodal/>
        </p>
        :<p className='cartVal' onClick={handleShow}><Cartmodal/></p>
      }  */}
      <input type="hidden" id="hdnStoreic" value="0"></input>
      
    {/* <cartmodal/> */}
    {/* <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal> */}

      </li>
          
                        


                        {Isloggedin 
        ? <li className={isActive ? "dropdown" : "dropdown open"}id="myAcMenu">
                        <a className="btnHeader btnHeader-default dropdown-toggle" dataToggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="javascript:void(0);"><span className="name">Hello, {username}</span>My Account<span className="caret" onClick={handleToggle}></span></a>
                            <ul className="dropdown-menu">
                                    <li><a href="https://www.nalocalhost.com/aboutme/"> My Profile</a></li>
                                    <li><a href="https://www.nalocalhost.com/workbench/"> Workbench </a></li>
                                    <li><a href="https://www.nalocalhost.com/mytreasureboxv1/">Treasure Box</a></li>
                                    <li><a href="https://www.nalocalhost.com/mysavedsearch/"> Saved Searches</a></li>
                                    <li><a href="https://www.nalocalhost.com/myaccountsettings/"> Account Settings</a></li>
                                        <li><a href="https://www.nalocalhost.com/mergeaccount/"> Merge Account </a></li>
                                        <li><a href="https://www.nalocalhost.com/myaccountbilling/"> My Billing</a></li>
                                    <li><a href="https://www.nalocalhost.com/contactimporter/"> Invite Friends</a></li>
                                            <li>
<a className="btn-green" href="https://www.nalocalhost.com/selectplan/">Change Plan </a>
                                            </li>
                            </ul>
                    </li>


        :<li className='dropdown subscribe-dropdown open'>
                            <a className='dropdown-toggle start-free-trial' id="dropdownMenuButton" href="https://newspaperlocal/subscribe?plan=18478/">7-Day Free Trial</a>
                        </li> 
      } 



                </ul>
            </div>
            <div className='navigation'>
                <button type="button" className='navbar-toggle collapsed' data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                    Menu
                    <i className='customicon customicon-menu open'></i>
                    <i className='customicon customicon-close close'></i>
                </button>
                <div role="menubar" className='collapse navbar-collapse' id="navbar-collapse-1">
                    <ul className='navbar-nav' style={style}>
                        
                        <li id="advancedsearch">
                        {/* <a href="../advancedsearch/">Search</a> */}
                        <Link to="/search" className="">
                            Search
                         </Link>
                        </li>
                        <li id="browselocation">
                            {/* <a id="browsefocusCountry" href="../browse/">
                                Browse
                            </a> */}
                            <Link to="/browse" className="">
                            Browse
                         </Link>
                        </li>
                        <li id="obits">
                            {/* <a href="../obituaries/us/">Obituaries</a> */}
                            <Link to="/obituaries" className="">
                            Obituaries
                         </Link>
                        </li>
                        
      
      
                        <li id="mnuclipping">
                            <a href="../clippings/">Clippings</a>
                        </li>
                        <li id="mnuclipping">
                            <a href="../clippings/">Publications</a>
                        </li>
                      











       
                        
                    </ul>
                </div>
            </div>
        </div>
      </div>
      
    );
};
export default Header;