import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { addContent, deleteContent } from '../actions/action'

const Todo = (props) => {
    console.log(props.details)
    var contentInp=useRef()
    const addBtn=()=>{
        var inp = contentInp.current.value
        let obj={content:inp}
        props.addContent(obj)
    }
    const deleteBtn=(e)=>{
        var index = e.target.getAttribute('index')
        props.details.splice(parseInt(index),1)
        deleteContent([...props.details])
        console.log(props.details);
    }
  return (
    <><h1>Todo List</h1>
    <div className='addBox'>
        <div className='addBox_Box'>
            <input placeholder='Add Todo...' ref={contentInp}/>
            <button onClick={addBtn}>Submit</button>
        </div>
        <div className='addBoxElements'>
            {props.details.map((item,i)=>{
                return(
                    <div className='addBoxElement'>
                    <input type='checkbox'/>
                    <label>{item.content}</label>
                    <button onClick={deleteBtn} index={i}>Delete</button>
                  </div>
                )
            })}
        </div>        
    </div>
    </>
  )
}

const mapStateToProps=state=>{
    return{
        details:state.details
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addContent:(obj)=>dispatch(addContent(obj)),
        deleteContent:(obj)=>dispatch(deleteContent(obj))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Todo)