import React from 'react'

const AddProduct = () => {
  return (
    <>
    <div className='productDiv'>
        <h2>Add Product</h2>
        <hr/>
        <div className='formDiv'>
            <label>Product Id:</label>
            <input placeholder='Product Id'/>
            <label>Quantity:</label>
            <input placeholder='Quantity'/>
            <button>Add Product</button>
        </div>
        <hr/>
        <h2>Update Product</h2>
        <hr/>
        <div className='tableDiv'>
            <button id='delBtn'>Delete Cart</button>
            <table>
                <tr><th>S.No.</th><th>Title</th><th>Quantity</th><th>Action</th><th>Price</th></tr>
                <tr><td>1</td><td>helo k djsd</td><td><input value='1'/></td><td><button>Update</button></td><td>40</td></tr>
            </table>
        </div>
    </div>
    </>
  )
}

export default AddProduct