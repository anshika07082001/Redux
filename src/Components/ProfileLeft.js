import React from 'react'
import { useSelector } from 'react-redux'

const ProfileLeft = () => {
    
    const state=useSelector(state=>state.gitSlice)
    return (
    <>
    <div className='mainProfileLeftBody'>
        <img src={state.arr[0].avatar_url} alt=''/>
        <div className='mainProfileleftDiv'>
            <h1>{state.arr[0].name}</h1>
            <p>{state.arr[0].login}</p>
            <p>{state.arr[0].bio}</p>
            <button>Follow</button>
            <div>
                <i class="fa fa-users" aria-hidden="true"></i>&nbsp;
                <span>{state.arr[0].followers}</span>&nbsp;
                <span>Followers</span>&nbsp;&nbsp;.&nbsp;
                <span>{state.arr[0].following}</span>&nbsp;
                <span>Following</span>&nbsp;
            </div>
            <div>
                <i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{state.arr[0].location}</span>
            </div>
            <div>
                <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;
                <span>github@aboutmonica.com</span>
            </div>
            <div>
                <i class="fa fa-paperclip" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;
                <span>https://aboutmonica.com</span>
            </div>
            <div>
                <i class="fa fa-twitter" aria-hidden="true"></i>&nbsp;&nbsp;
                <span>@{state.arr[0].twitter_username}</span>
            </div>
            <br/>
        </div>
    </div>
    </>
    )
}

export default ProfileLeft