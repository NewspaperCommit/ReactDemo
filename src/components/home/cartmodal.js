import React, { useState ,useEffect} from "react";
import { Modal, Button } from "react-bootstrap";
 //import "../../assets/css/cartmodal.css";
 import "../../assets/css/common.css";
 import '../../assets/css/cartmodal.css';
//  import '../../assets/css/common.css';
import axios from "axios";
import { CalculateTotalPrice } from "../../actions/shoppingcart";
import { useDispatch, useSelector } from "react-redux";
import { calculate_price } from "../../actions/action_constant";
import calculate from './calculate';



export function Cartmodal() {
    debugger;
  const [show, setShow] = useState(false);
  let Cartdetails = [];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const  dispatch  = useDispatch();
  const  shoppingcartdata  = useSelector(state => state.sigin);
  const  Calculateprice  = useSelector(state => state.shoppin);


  
    const Isloggedin = shoppingcartdata.loggedIn;
    
    if(Isloggedin == true){
        debugger

        Cartdetails = shoppingcartdata.Userdata.data.shoppingCartModel.cartDetails;
      //  let a = Calculateprice.totalprice.data
      //  alert(a)
    }
 
const [CalculatedPrice, setCalculatedPrice] = useState(0);

  const obj = {
    itemBaseTotalQnty : 0,
    deductedQuantity :0,
    totalquantity:0,
    itemQuantity:0,
    totalCartDetailCount:0,
    modelUnitPrice:0,
    count:0,
  }
  
  
  function CalculateTotalprice  (...obj){
    dispatch(CalculateTotalPrice(obj, (result) => {
               
      if (result.status == 200) {
      
      }
  }));   
    //dispatch(CalculateTotalPrice);
    // if(obj && dispatch){
    //  useEffect({

    //   dispatch(CalculateTotalPrice(obj));
    //  })  

    // }
      
    // useEffect(() => {
    //   if (obj && dispatch) {
    //     dispatch(
    //       CalculateTotalPrice(obj),
          
    //     );
    //   }
    // }, []);
             
  

  }
  let async = require('async');
 const  Calculatetotal =  (event) =>{

  }

  const modalwidth = {
    width:'100%'

  };

   
 
  return (
    <>
    <a   > 
            <svg width="20.571428571428573" height="22" role="presentation" viewBox="0 0 1664 1792"><path key="path-0" d="M640 1536q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zM1536 1536q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zM1664 448v512q0 24-16.5 42.5t-40.5 21.5l-1044 122q13 60 13 70 0 16-24 64h920q26 0 45 19t19 45-19 45-45 19h-1024q-26 0-45-19t-19-45q0-11 8-31.5t16-36 21.5-40 15.5-29.5l-177-823h-204q-26 0-45-19t-19-45 19-45 45-19h256q16 0 28.5 6.5t19.5 15.5 13 24.5 8 26 5.5 29.5 4.5 26h1201q26 0 45 19t19 45z"></path>  </svg>
         </a>
        {Isloggedin
        ? <p className='cartVal' onClick={handleShow}>{shoppingcartdata.Userdata.data.cartvalue}
        {/* <Cartmodal/> */}
        </p>
        :<p className='cartVal' ></p>
      } 
      
      {/* <Button variant="primary" onClick={handleShow}  className='pbutton'>
       Click cart
      </Button> */}
      <div  style={modalwidth}>
      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="title clearfix">
              <h2 className="txtRed">
                Your Shopping Cart <span>2 Item(s)</span>
              </h2>

              <div className="helpTxt">
                Need Help?{" "}
                <span className="block">
                  <a href="mailto:customerservice@newspaperarchive.com">
                    customerservice@newspaperarchive.com
                  </a>
                </span>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div id="oncart" className="modal-cart">
    <div id="DivResult">
            <div className="cartSection">

           
                
                <div className="offerStrip">Buy 2 Get 1 FREE</div>

                {Cartdetails.map((data,index) =>(
                   
                obj.count = obj.count+1,
                //obj.totalquantity =data.quantity+obj.totalquantity,
                obj.totalquantity = 14,
                obj.itemQuantity = data.quantity,
                obj.itemBaseTotalQnty += obj.itemQuantity,

              
               

                //CalculateTotalprice(obj.totalquantity ,obj.itemBaseTotalQnty , obj.deductedQuantity , obj.itemQuantity=data.quantity,obj.totalCartDetailCount=Cartdetails.length, obj.count,obj.modelUnitPrice=data.unitPrice ),
           

               // <calculate obj= {obj}/>
                    <div className="cartList">


                       
                        <div className="deleteIcon">
                            <a id="linkRemoveItem_0" customshoppingcartitemsid="591955" customshoppingcartitemsvalue="329017766" className="removeLink" href="javascript:void(0);" onclick="javascript:RemoveItemFrommShopCart('591955', '329017766');">
                            <span>
                            <img src="/Content/assets/images/trashBlack.svg" width="18" height="21"/>
                            </span> Remove</a>
                        </div>
                        
                       
                        <div className="image">
                            {/* <div className="img">
                                        <div className="imgPrintColor imgPrintColorOpt1" id="329017766" data-pdf="set-bg-591955"> </div>
                                   
                                        <img src="https://www.mergenalocal.com/thumbimage.ashx?i=329017766&amp;iscart=true" alt="NewspaperArchive" className="img-responsive"/>

                            </div> */}
                        </div>
                       
                        <div className="cartDetail">
                           
                            <div className="description">
                                <h5>Item:</h5>
                                <p>{data.item}</p>
                                <h5>Description:</h5>
                                <p>
                                    {data.description}
                                </p>
                              
                            </div>
                            
                            <div className="detail">
                                <div className="detailTop">
                                    <div className="colorQuantity">
                                        
                                        <div className="quantity">
                                            <label>Quantity:</label>
                                            <input className="form-control" name={data.quantity} onChange={Calculatetotal(data.unitPrice)}  type="text" value= {data.quantity} required/>

                                                {/* <span className="field-validation-valid" data-valmsg-for="CartDetails[0].Quantity" data-valmsg-replace="true"></span>
                                                <input data-val="true" data-val-number="The field ShoppingCartItemsId must be a number." data-val-required="The ShoppingCartItemsId field is required." id="CartDetails_0__ShoppingCartItemsId" name="CartDetails[0].ShoppingCartItemsId" type="hidden" value="591955"/>
                                                <input data-val="true" data-val-number="The field ItemTypeId must be a number." data-val-required="The ItemTypeId field is required." id="CartDetails_0__ItemTypeId" name="CartDetails[0].ItemTypeId" type="hidden" value="1"/>
                                                <input id="CartDetails_0__ItemValue" name="CartDetails[0].ItemValue" type="hidden" value="329017766"/> */}

                                            </div>
                                          
                                            <div className="color" id="divColor_0">
                                                <label>Select Color*:</label>
                                                <div className="colorRadioBoxArea">

                                                    <div className="set-np-bg colorRadioBox colorRadioBoxSelected" data-name="set-bg-591955" data-value="1">
                                                        <div className="colorOptBox">
                                                        </div>
                                                    </div>
                                                    <div className="set-np-bg colorRadioBox " data-name="set-bg-591955" data-value="2">
                                                        <div className="colorOptBox colorOpt2">
                                                        </div>
                                                    </div>
                                                    
                                                    <input type="hidden"  id="hdnset-bg-0" className="hdnsetbg" name="set-bg-591955" value="1"/>
                                                    <br/>
                                                    
                                                    <span className="field-validation-valid" data-valmsg-for="CartDetails[0].ColorId" data-valmsg-replace="true">

                                                    </span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="shippingField hidden">
                                            <label>Select Shipping Package:</label>
                                            
                                            <span className="field-validation-valid" data-valmsg-for="CartDetails[0].ShippingPackageId" data-valmsg-replace="true"></span>
                                            <input id="hiddenShippingPackageId_0" name="CartDetails[0].ShippingPackageId" type="hidden" value="2"/>
                                        </div>
                                    </div>

                                   
                                    <div className="price txtRed">
                                        <p>Unit Price: <span>{data.unitPrice}</span></p>
                                        <p>Total Price: <span id="spanTotalPrice_0">{Calculateprice.totalprice.data}</span></p>
                                    </div>
                                   

                            </div>
                            
                        </div>
                        
                    </div>

                    ))}
                   
                   
            <div className="bottomSection clearfix">
                    <div className="button">
                        <div className="upgradeBtn">
                            <button className="btn btn-inverse updateCartBtn" id="CartUpdatePrice" name="CartUpdatePrice" onclick="javascript:changevalue('');" type="submit">Update Cart</button>
                            {/* <button className="btn btn-inverse updateCartBtn" id="CartUpdatePricenew"  name="CartUpdatePrice" type="submit">Update Cart</button> */}
                        </div>
                        <a className="btn clearCartBtn" href="javascript:void(0);" onclick="javascript:RemoveItemFrommShopCartNew();" id="CleanCart">Clear Cart </a>&nbsp;
                        <input type="button" className="btn btn-warning continueBtn" name="ContinueShopping" value="Continue Shopping" id="ContinueShopping" onclick="javascript: ClosePopUpOnContinue();"/>
                    </div>



                    <div className="totalAmount">
                        <p>Cart Subtotal: <span className="txtRed" id="spanCartSubTotal"></span></p>
                        
                        {/* {shoppingcartdata.Userdata.data.subTotal}
                        {shoppingcartdata.Userdata.data.subTotal} */}
                        
                        <p>Plus Shipping<span className="txtRed">**</span></p>
                        <p className="cartTotal">Order Total: 
                        <span className="txtRed" id="spanOrderTotal"></span></p>

                        <input data-val="true" data-val-number="The field TotalCost must be a number." data-val-required="The TotalCost field is required." id="totalCost1" name="TotalCost" type="hidden" value="59.90"/>
                        <input data-val="true" data-val-number="The field Flag must be a number." id="hiddenFlag" name="Flag" type="hidden" value="" />

                            <div className="checkoutButton">
                                <button className="btn btn-red" name="ProceedToCheckout" onclick="" type="submit" id="ProceedToCheckout">
                                    Proceed to Checkout
                                </button>
                            </div>

                    </div>
                </div>
               
                {/* <div className="termTxt">
                    <p>* Actual colors may be slightly different than the ones you see on the screen.</p>
                    <p>**For US destinations a flat rate of $9.95 USD and for international destinations a flat rate of $28.00 USD will apply. Please contact <a href="mailto:customerservice@newspaperarchive.com">customerservice@newspaperarchive.com</a> for a quote.</p>
                </div> */}
            </div>
            
           </div> 
           </div>
 

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}
