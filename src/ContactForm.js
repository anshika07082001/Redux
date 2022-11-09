import React, { useRef } from 'react'
import { addName } from './actions'
import { connect } from 'react-redux'

const ContactForm = (props) => {
    var fname = useRef()
    var lname = useRef()
    var contact = useRef()
    const add=()=>{
        let obj ={fname:fname.current.value,lname:lname.current.value,contact:contact.current.value}
        props.addName(obj)
        fname.current.value=''
        lname.current.value=''
        contact.current.value=''
        console.log(props.details)
    }
    const deleteBtn=(e)=>{
        var index = e.target.getAttribute('index')
        props.details.splice(index,1)
    }
  return (
  <>
    <div className='formDiv'>
        <h2>Add Contact</h2>
        <label>FirstName:</label>
        <input placeholder='Enter FirstName' type='text' ref={fname}/>
        <label>LastName:</label>
        <input placeholder='Enter LastName' type='text' ref={lname}/>
        <label>Contact Number</label>
        <input placeholder='Enter Number' type='number' ref={contact}/>
        <button onClick={add}>Add Contact</button>

    </div>
    <table>
        <tr><th>First Name</th><th>Last Name</th><th>Contact Number</th><th>Edit Contact</th><th>Delete Contact</th></tr>
    {props.details.map((item,i)=>{
        return(
            <tr>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.contact}</td>
                <td><button className='btn green'>Edit</button></td>
                <td><button className='btn red' onClick={deleteBtn} index={i}>Delete</button></td>
            </tr>
        )
    })}
    </table>
    </>
  )
}

const mapStateToProps =state=>{
    return{
        details:state.details
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        addName:(obj)=>dispatch(addName(obj))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ContactForm)