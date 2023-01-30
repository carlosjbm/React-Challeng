import './Pack1.css';
import React, { useState } from 'react';



function Pack1() {

    const [quantity, setQuantity] = useState(50);
    const [price, setPrice] = useState(71.20);
    const [visible, setVisible] = useState(true);


    const remove=()=>{setVisible(false)}
    const countD=()=>{setQuantity(quantity-1)}
    if(visible){
          return ( 
        <>
        <div className='pack1'>
            <div className='photo'>
              {/* fotos */}
            </div>
              <div className='content'>
                <div className='mcpk' >
                    <h3>My Christmas pack</h3>
                    <h3>$ {price.toFixed(2)}</h3>
                </div>
                <div className='quantity'>
                    <div className='quantity-box'>
                     <div className='q-box'>
                           <p>Quantity:</p>
                    <p>{quantity}</p>
                    {quantity >0 ? <button className='arrow' onClick={countD}>
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M6.96296 0.5L4 3.44191L1.03778 0.5L0 1.52941L4 5.5L8 1.52941L6.96296 0.5Z" fill="#091625"/>
                        </svg>
                    </button>:<></> }
                    
                     </div>
                    <div className='total-q'>
                        <p>Total:</p>
                        <h4>${(quantity*price).toFixed(2)}</h4>
                    </div>
                    </div>
                    
                 </div>
                  <div className='card-box'>
                        Cardboard box:  (container)<br/>
                        Unisex Short Sleeve T-Shirt (Green, Small) <br/> 
                        Basic bottle (Blue)
                 </div>
                 <div className='options'>
                    <button className='b-option'>Edit pack</button>  |  <button className='b-option' onClick={remove}>Remove</button>
                 </div>
              </div>
        </div>
        
        </>
     );
    }
    
}

export default Pack1;