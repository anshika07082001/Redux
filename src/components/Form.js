import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake, buyChocolate, buyIcecream } from '../actions/action'

const Form = () => {
    var cakeQuantInp=useRef(''),icecreamQuantInp=useRef(''),chocolateQuantInp=useRef('')
    const state = useSelector(state=>state)
    const dispatch = useDispatch()

    // function to  buyCake    
    const orderBtnHandler=()=> {
        if(cakeQuantInp.current.value!=='' || icecreamQuantInp.current.value!=='' || chocolateQuantInp.current.value!==''){
            if(cakeQuantInp.current.value>0 ){
                dispatch(buyCake(cakeQuantInp.current.value))
            }
            if(icecreamQuantInp.current.value>0){
                dispatch(buyIcecream(icecreamQuantInp.current.value))
            }
            if(chocolateQuantInp.current.value>0){
                dispatch(buyChocolate(chocolateQuantInp.current.value))
            }
        }
        else{
            alert('Fill details')
        }
    }

    console.log(state)
  return (
    <div>
        <div>
            <h3>Number of Cakes={state.cake.numberOfCakes}</h3><br/><br/>
            <label>Enter Quantity For Cake: </label>
            <input placeholder='Enter Quantity...' ref={cakeQuantInp} type='number'/>
            <br/>
            <span>{state.cake.limit}</span><br/>
        </div>
        <div>
        <h3>Number of Cakes={state.icecream.numberOfIceCreams}</h3><br/><br/>

            <label>Enter Quantity For Icecream: </label>
            <input placeholder='Enter Quantity...' ref={icecreamQuantInp} type='number'/>
            <br/><span>{state.icecream.limit}</span><br/>
        </div>
        <div>
            <h3>Number of Cakes={state.chocolate.numberOfChocolates}</h3><br/><br/>
            <label>Enter Quantity of Chocolate: </label>
            <input placeholder='Enter Quantity...' ref={chocolateQuantInp} type='number'/>
            <br/><span>{state.chocolate.limit}</span><br/>
            <button onClick={orderBtnHandler}>Place Order</button>
        </div> 
    </div>
  )
}

export default Form