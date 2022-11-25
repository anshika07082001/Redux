import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { over, project, repoData } from '../features/gitSlice'
import './profile.css'
import ProfileLeft from './ProfileLeft'
import ProfileRightOverview from './ProfileRightOverview'
import ProfileRightRepo from './ProfileRightRepo'
import Project from './Project'

const Profile = () => {
  const state=useSelector(state=>state.gitSlice)
  const navigate=useNavigate()
  const dispatch=useDispatch()

//Function shows repo component

  const repo=()=>{
    dispatch(repoData(state.arr[0].login))
  }

// Function shows overview component

  const overView=()=>{
    dispatch(over())
  }

// Function shows projects component

  const projects=()=>{
    dispatch(project())
  }

// Function navigates to home page

  const git=()=>{
    navigate('/') 
  }

  return (
  <>
  <div className='profileNav'>
    <div onClick={git} style={{background:'white',margin:'10px 30px',borderRadius:'20px'}}>
      <img style={{height:'40px',width:'40px'}} src='https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png' alt=''/>
    </div>
    <input className='navInp' placeholder='Search or Jump to...'/>
    <label style={{margin:'20px 5px'}}>Pull requests</label>
    <label style={{margin:'20px 5px'}}>Issues</label>
    <label style={{margin:'20px 5px'}}>Codespaces</label>
    <label style={{margin:'20px 5px'}}>Marketplace</label>
    <label style={{margin:'20px 5px'}}>Explore</label>
    <div className='navDiv'>
      <i class='far fa-bell'></i>
      <i class="fa fa-plus"></i>
      <i class="fa fa-caret-down"></i>
      <img style={{height:'30px',width:'30px',borderRadius:'20px',margin:'-5px 5px'}} src='https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg' alt=''/>
      <i class="fa fa-caret-down"></i>
    </div>
  </div>
  <div className='profileBody'>
    <div className='profileBodyDiv'>
      <a onClick={overView}><i class="fa fa-book" aria-hidden="true"></i>&nbsp;Overview</a>
      <a onClick={repo}><i class="fa fa-id-card-o" aria-hidden="true"></i>&nbsp;Repositories&nbsp;
      <span style={{background:'#e1e1e1',borderRadius:'20px'}}>{state.arr[0].public_repos}</span></a>
      <a onClick={projects}><i class="fa fa-product-hunt" aria-hidden="true"></i>&nbsp;Projects</a>
    </div>
    <div className='mainProfileBody'>
      <ProfileLeft/>
      <div className='mainProfileRightBody'>
        {state.count==1?<ProfileRightOverview/>:<p></p>}
        {state.count==2?<ProfileRightRepo/>:<p></p>}
        {state.count==3?<Project/>:<p></p>}
      </div>
    </div>
  </div>
  </>
  )
}

export default Profile