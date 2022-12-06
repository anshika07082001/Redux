import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, div, mul, sub,clear } from '../actions/actions'

const Number = () => {
    var [style,setStyle]=useState('none')
    var inpFVal = useRef('')
    var inpSVal=useRef('')
    const state=useSelector(state=>state)
    var dispatch = useDispatch()

    // function to calculate the answers
    const calculateHandler=()=>{
        if(inpFVal.current.value!=='' && inpSVal.current.value!==''){
        dispatch(add({num1:inpFVal.current.value,num2:inpSVal.current.value}))
        dispatch(sub({num1:inpFVal.current.value,num2:inpSVal.current.value}))
        dispatch(mul({num1:inpFVal.current.value,num2:inpSVal.current.value}))
        dispatch(div({num1:inpFVal.current.value,num2:inpSVal.current.value}))
        setStyle('block')
        }
        else{
            alert('Fill details')
        }
    }

    // function to clear the answers
    const clearHandler=()=>{
        dispatch(clear(state))
        setStyle('none')
        inpFVal.current.value=''
        inpSVal.current.value=''
    }
    
    console.log(state)
  return (
    <div>
        <h3>Calculation</h3>
        <input placeholder='Enter First Number' ref={inpFVal} type='number'/><br/>
        <input placeholder='Enter Second Number' ref={inpSVal} type='number'/><br/><br/>
        <button onClick={calculateHandler}>Calculate</button>
        <div className={style}>
            <p>Result of Addition is :- {state.add.calculation}</p>
            <p>Result of Subtraction is :- {state.sub.calculation}</p>
            <p>Result of Multiplication is :- {state.mul.calculation}</p>
            <p>Result of Division is :- {state.div.calculation}</p>
        </div>
        <button onClick={clearHandler}>clear</button>
    </div>
  )
}

export default Number