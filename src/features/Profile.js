import React from 'react'
import { Link } from 'react-router-dom'
import './profile.css'

const Profile = () => {
  return (
    <>
    <div className='profileNav'>
        <div style={{background:'white',margin:'10px 30px',borderRadius:'20px'}}>
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
            <Link><i class="fa fa-book" aria-hidden="true"></i>Overview</Link>
            <Link><i class="fa fa-id-card-o" aria-hidden="true"></i>Repositories<span>23</span></Link>
            <Link><i class="fa fa-product-hunt" aria-hidden="true"></i>Projects</Link>
        </div>
    </div>
    </>
  )
}

export default Profile