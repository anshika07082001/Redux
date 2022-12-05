import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake, buyChocolate, buyIcecream } from '../actions/action'

const Form = () => {
    var cakeQuantInp=useRef(''),icecreamQuantInp=useRef(''),chocolateQuantInp=useRef('')
    const state = useSelector(state=>state)
    const dispatch = useDispatch()

    // function to  buyCake    
    const cakeHandler=()=> {
        if(cakeQuantInp.current.value!==''){
            if(cakeQuantInp.current.value>0){
                dispatch(buyCake(cakeQuantInp.current.value))
            }
            else{
                alert('enter the value greater than 0')
            }
        }
        else{
            alert('Fill details')
        }
    }

    // function to buyIcecream
    const icecreamHandler=()=>{
        if(icecreamQuantInp.current.value!==''){
            if(icecreamQuantInp.current.value>0){
                dispatch(buyIcecream(icecreamQuantInp.current.value))
            }
            else{
                alert('enter the value greater than 0')
            } 
        }
        else{
            alert('Fill details')
        }
    }

    // Function to buychocolate
    const chocolateHandler=()=>{
        if(chocolateQuantInp.current.value!==''){
            if(chocolateQuantInp.current.value>0){
                dispatch(buyChocolate(chocolateQuantInp.current.value))
            }
            else{
                alert('enter the value greater than 0')
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
            <h4>To Buy Cake</h4>
            <label>Number of Cakes={state.cake.numberOfCakes}</label><br/><br/>
            <label>Enter Quantity: </label>
            <input placeholder='Enter Quantity...' ref={cakeQuantInp} type='number'/>
            <br/><br/>
            <button onClick={cakeHandler}>Buy</button>
        </div>
        <div>
        <h4>To Buy Icecream</h4>
        <label>Number of Cakes={state.icecream.numberOfIceCreams}</label><br/><br/>

            <label>Enter Quantity: </label>
            <input placeholder='Enter Quantity...' ref={icecreamQuantInp} type='number'/>
            <br/><br/>
            <button onClick={icecreamHandler}>Buy</button>
        </div>
        <div>
            <h5>To Buy Chocolate</h5>
            <label>Number of Cakes={state.chocolate.numberOfChocolates}</label><br/><br/>
            <label>Enter Quantity: </label>
            <input placeholder='Enter Quantity...' ref={chocolateQuantInp} type='number'/><br/><br/>
            <button onClick={chocolateHandler}>Buy</button>
        </div> 
    </div>
  )
}

export default Form