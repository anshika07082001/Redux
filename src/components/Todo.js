import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, del, edit,check } from '../features/todoSlice'

const Todo = () => {
    
    var contentInp=useRef(''),ind=''
    const state = useSelector(state=>state.todoSlice)
    const dispatch = useDispatch()

    // Add function
    const addBtn=()=>{
        var txt = document.getElementById('submit').innerHTML
        if(txt==='Add'){
        dispatch(add({value:false,content:contentInp.current.value}))
        }
        else{
            dispatch(edit({index:ind,content:contentInp.current.value}))
            document.getElementById('submit').innerHTML='Add'
        }
        contentInp.current.value=''
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
        document.getElementById('submit').innerHTML='Update'
    }
    // check function
    const checkFun=(e)=>{
        ind = e.target.getAttribute('index')
        dispatch(check(ind))
    }
    return (
    <div>
        <h1>Todo App</h1>
        <div className='addBox'>
            <div className='addBox_Box'>
                <input placeholder='Add Todo...' ref={contentInp}/>
                <button onClick={addBtn} id='submit'>Add</button>
            </div>
        </div>
        <div className='addBoxElements'>
            {state.arr.map((item,i)=> 
            <div className='addBoxElement'>
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