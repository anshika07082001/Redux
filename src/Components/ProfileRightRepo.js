import React from 'react'
import { useSelector } from 'react-redux'

const ProfileRightRepo = () => {

  const state = useSelector(state=>state.gitSlice)

  return (
  <>
  <div className='RepoMainDiv'>
    <div id='underline'>
      <input placeholder='Find a Repository...' style={{width:'50%',height:'25px',borderRadius:'5px',border:'1px solid grey'}}/>
      <button>Type&nbsp;<i class="fa fa-caret-down" aria-hidden="true"></i></button>
      <button>Language&nbsp;<i class="fa fa-caret-down" aria-hidden="true"></i></button>
      <button>Sort&nbsp;<i class="fa fa-caret-down" aria-hidden="true"></i></button>
      <br/>
    </div>
    {state.repo.map((item)=>{
      return(
      <div className='item'>
        <div className='itemLeft'>
          <div>
            <label>{item.name}</label>
            <button>{item.visibility}</button>
          </div>
          <label>{item.description}</label>
          <div>
            <i class="fa fa-circle" style={{color:'orange'}}></i>&nbsp;
            <span>hajsah</span>&nbsp;&nbsp;&nbsp;
            <i class="fa fa-balance-scale" style={{color:'grey'}}></i>&nbsp;
            <span>Other</span>&nbsp;&nbsp;&nbsp;
            <span>Updated at: {item.updated_at}</span>
          </div>
        </div>
        <button><i class="fa fa-star-o"></i>&nbsp;Star</button>
      </div>
      )
    })}  
  </div>
  </>
  )
}

export default ProfileRightRepo