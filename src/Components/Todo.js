import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { addContent, deleteContent, loadUsers } from '../actions/action'

const Todo = (props) => {
  
    var contentInp=useRef()

    const addBtn=()=>{
        var inp = contentInp.current.value
        if(inp!=''){
        let obj={title:inp}
        props.addContent(obj)
        contentInp.current.value=''
        }
        else{
            alert('fill details')
        }
    }

    const deleteBtn=(e)=>{
        var index = e.target.getAttribute('index')
        props.details.splice(parseInt(index),1)
        props.deleteContent([...props.details])
    }

    useEffect(()=>{
        props.loadUsers()
    },[])

    return (
  <>
  <h1>Todo List</h1>
  <div className='addBox'>
    <div className='addBox_Box'>
        <input placeholder='Add Todo...' ref={contentInp}/>
        <button onClick={addBtn}>Submit</button>
    </div>
    <div className='addBoxElements'>
        {props.details.map((item,i)=> <div className='addBoxElement'>
                <input type='checkbox'/>
                <label>{item.title}</label>
                <button onClick={deleteBtn} index={i}>Delete</button>
            </div>
            
        )}
    </div>        
  </div>
  </>
  )
} 

const mapStateToProps=state=>{
    return{
        details:state.details,
        loading:state.loading,
        error:state.error
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        loadUsers:()=>dispatch(loadUsers()),
        addContent:(obj)=>dispatch(addContent(obj)),
        deleteContent:(obj)=>dispatch(deleteContent(obj))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Todo)