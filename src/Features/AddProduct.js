import React, { useEffect, useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchCartData,addCartData, deleteCartData, updateCartData } from './cartSlice';


const AddProduct = () => {

  var idInp=useRef('')
  var quantInp=useRef('')
  var state = useSelector((state)=>state.cartSlice)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCartData())
  },[])

  const addBtn=(e)=>{
    e.preventDefault()
    var text = document.getElementById('Add').innerHTML
    if(text=='Add Product'){
      if(idInp.current.value!='' && quantInp.current.value!=''){
        dispatch(addCartData([...state.arr,{id:idInp.current.value,quantity:quantInp.current.value}]))
        idInp.current.value=''
        quantInp.current.value=''
      }
      else{
        return
      }
    }
    else{
      document.getElementById('Add').innerHTML='Add Product'
      dispatch(updateCartData({id:idInp.current.value,quantity:quantInp.current.value}))
    }
  }

  const updateBtn=(id,quant)=>{
    idInp.current.value=id
    quantInp.current.value=quant
    document.getElementById('Add').innerHTML='Update Product'
  }

  const deleteBtn=()=>{
    dispatch(deleteCartData())
  }

  return (
  <>
  <div className='productDiv'>
    <h2>Add Product</h2>
    <hr/>
    <form className='formDiv' onSubmit={addBtn}>
      <label>Product Id:</label>
      <input placeholder='Product Id' ref={idInp} type='number'/>
      <label>Quantity:</label>
      <input placeholder='Quantity' ref={quantInp} type='number'/>
      <button  type='submit' id='Add'>Add Product</button>
    </form>
    {console.log(state)}
    {state.error=='Items added Successfully'?
    <div className='success'>{state.error}</div>:
    <p></p>}
    {state.error=='Item Updated Successfully'?
    <div className='success'>{state.error}</div>:
    <p></p>}
    {state.error=='Deleted successfully'?
    <div className='success'>{state.error}</div>:
    <p></p>}
    {state.error=='there was an error'?
    <div className='error'>{state.error}</div>:
    <p></p>}
    {state.error=='Fetched successfuly'?
    <div className='success'>{state.error}</div>:
    <p></p>}
    {state.error=='pending'?
    <img src='https://assets-blog.lottiefiles.dev/2021/03/CoMw0bhvYXrDGN6ZDTOWmFAfoIWWR8VxEIAzq9r8.gif' alt=''/>:
    <p></p>}
    <hr/>
    <h2>Update Product</h2>
    <hr/>
    <div className='tableDiv'>
      <button id='delBtn' onClick={deleteBtn}>Delete Cart</button>
      {state.arr.length!==0?
      <table>
        <tr><th>S.No.</th><th>Title</th><th>Quantity</th><th>Action</th><th>Price</th></tr>
        {state.arr.map((item,i)=>{
          return(
          <tr><td>{item.id}</td><td>{item.title}</td><td><input value={item.quantity}/></td><td index={i}><button onClick={()=>updateBtn(item.id,item.quantity)} >Update</button></td><td>{item.price}</td></tr>
          )
        })}
      </table>:
      <p></p>}
    </div>
  </div>
  </>
  )
}


export default AddProduct