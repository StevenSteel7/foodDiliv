/* import styles from "../styles/Cart.module.css"; */
import Image from "next/image";
import {useDispatch, useSelector} from 'react-redux'


//paypal
import { useEffect, useState } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";












const Cart = () => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)

//paypal
  // This values are the props in the UI
  const [open,setOpen] = useState(false) // for paypal showing
  const amount = "2";
  const currency = "USD";
  const style = {"layout":"vertical"};
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                    });
                }}
            />
        </>
    );
}
  


  return (
    <div >



      <div className='py-20 flex px-20 drop-shadow-xl '>
      
      <table className=' border border-spacing-x-2  rounded-xl justify-center w-screen'>
        <tbody>
          <tr className=' '>        
              <th className='  border'>Product</th>
              <th className='  border'>Name</th>
              <th className='  border'>Extras</th>
              <th className='  border'>Price</th>
              <th className='  border'>Quantity</th>
              <th className='  border'>Total</th>
          </tr>
          {cart.products.map(product => (   // map 
          <tr className=' ' key = {product._id}>
            <td classname='border '>
            <div className='relative h-[40%]  w-[40%] pl-20' >
                <Image className='' 
                src={product.img}
                width='200'
                height='200'
                objectFit='cover'/>
              </div>
            </td>
            <td className='border'>
              <span className='name '> {product.title}</span>
            </td>
            <td className='border'>
              <span className='Extras '> 
             { product.extraOptions.map(extra =>(
                <span key = {extra._id} >{extra.text}, </span>
              ))}
              </span>
            </td>
            <td className='border'>
              <span className='price '> 
              {product.price}
              </span>
            </td>
            <td className='border'>
              <span className='Quantity '> 
              {product.quantity}
              </span>
            </td>
            <td >
              <span className='Total '> 
              {product.quantity*product.price}
              </span>
            </td>
          </tr>
          ))}
          
        </tbody>
      </table>
      <div className='bg-zinc-200'>
        <div className='px-20 py-5 '>
          <h2 className='font-bold'>CART TOTAL</h2>
          <div className=' text-xl py-2'>
            <b className='{styles.totalTextTitle}'>Subtotal:</b>{cart.total}₹
          </div>
          <div className=' text-xl py-2'>
            <b className='{styles.totalTextTitle}'>Discount:</b>0₹ 
          </div>
          <div className=' text-xl py-2'>
            <b className='{styles.totalTextTitle}'>Total:</b>{cart.total}₹
          </div>
          


{/* //paypal */}
{open ? (<PayPalScriptProvider
          options={{
              "client-id": "test",
              components: "buttons",
              currency: "INR",
              "disable-funding":"credit,card,p24"
          }}>
            
				<ButtonWrapper
            currency={currency}
            showSpinner={false}/>
                
			</PayPalScriptProvider>)
      :
      (<button onClick = {() => setOpen(true)} className='border rounded-none p-1 font-bold'>CHECKOUT NOW!</button> ) /* made by me */
      }

      
		</div>

        </div>

      </div>

      </div>

  );
};

export default Cart;
