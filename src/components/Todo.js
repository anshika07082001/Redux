import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, del, edit,check,flg } from '../features/todoSlice'

const Todo = () => {
    
    var contentInp=useRef(''),ind
    const state = useSelector(state=>state.todoSlice)
    const dispatch = useDispatch()
    var [txt,setTxt]=useState('Add')

    // Add function
    const addBtn=(e)=>{
        var txt = e.target.innerHTML
        if(contentInp.current.value!==''){
        if(txt==='Add'){
        dispatch(add({value:false,content:contentInp.current.value}))
        }
        else{
            dispatch(edit({index:state.index,content:contentInp.current.value}))
            setTxt('Add')
        }
        contentInp.current.value=''
    }
    else{
        alert('Fill details')
    }
    }
    // delete function
    const deleteBtn=(e)=>{
        ind =e.target.getAttribute('index')
        dispatch(del(ind))
    }
    // edit function
    const editBtn=(e)=>{
        ind =e.target.getAttribute('index')
        contentInp.current.value=state.arr[ind].content
        setTxt('Update')
        dispatch(flg(ind))
    }
    // check function
    const checkFun=(e)=>{
        ind = e.target.getAttribute('index')
        dispatch(check(ind))
    }
    return (
    <div>
        <h1>Todo App</h1>
        <div className=' addBox '>
            <div className=' addBox_Box '>
                <input placeholder='Add Todo...' ref={contentInp}/>
                <button onClick={addBtn} id=' submit '>{txt}</button>
            </div>
        </div>
        <div className=' addBoxElements '>
            {state.arr.map((item,i)=> 
            <div className=' addBoxElement '>
                <input type='checkbox' onChange={checkFun} index={i} checked={item.value}/>
                <label>{item.content}</label>
                <div>
                <button onClick={editBtn} index={i} style={{background:'green'}}>Edit</button>
                <button onClick={deleteBtn} index={i} style={{background:'red'}}>X</button>
                </div>
            </div>
            )}
        </div>
    </div>
    )
}

export default Todo