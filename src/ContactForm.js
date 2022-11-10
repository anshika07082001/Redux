import React, { useRef } from 'react'
import { addName,deleteName,editName } from './actions/action'
import { connect } from 'react-redux'

const ContactForm = (props) => {
    var index=-1;
    var fname = useRef()
    var lname = useRef()
    var contact = useRef()
    const add=()=>{
        var val = document.getElementById('add').innerHTML
        if(val=='Add Contact'){
            if(fname.current.value!=='' && lname.current.value!=='' && contact.current.value!==''){
                let obj ={fname:fname.current.value,lname:lname.current.value,contact:contact.current.value}
                props.addName(obj)
                fname.current.value=''
                lname.current.value=''
                contact.current.value=''
                alert('Successfully added')
            }
            else{
                alert('fill details')
            }
        }
        else if(val=='Update Contact'){
            props.details[index].fname=fname.current.value
            props.details[index].lname=lname.current.value
            props.details[index].contact=contact.current.value
            document.getElementById('add').innerHTML='Add Contact'
            props.editName()
            fname.current.value=''
            lname.current.value=''
            contact.current.value=''
            alert('Updated Successfully')
        }
    }
    const deleteBtn=(e)=>{
        var index = e.target.getAttribute('index')
        props.details.splice(parseInt(index),1)
        props.deleteName([...props.details])
    }
    const editBtn=(e)=>{
        index = e.target.getAttribute('index')
        fname.current.value = props.details[index].fname
        lname.current.value = props.details[index].lname
        contact.current.value = props.details[index].contact
        document.getElementById('add').innerHTML='Update Contact'
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
        <button onClick={add} id='add'>Add Contact</button>
    </div>
    {props.details.length!==0?
    <table id='table'>
        <tr><th>First Name</th><th>Last Name</th><th>Contact Number</th><th>Edit Contact</th><th>Delete Contact</th></tr>
    {props.details.map((item,i)=>{
        return(
            <tr>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.contact}</td>
                <td><button className='btn green' onClick={editBtn} index={i}>Edit</button></td>
                <td><button className='btn red' onClick={deleteBtn} index={i}>Delete</button></td>
            </tr>
        )
    })}
    </table>:<p></p>}
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
        addName:(obj)=>dispatch(addName(obj)),
        deleteName:(delObj)=>dispatch(deleteName(delObj)),
        editName:()=>dispatch(editName())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ContactForm)