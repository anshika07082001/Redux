import React from 'react'
import { useSelector } from 'react-redux'

const ProfileRightOverview = () => {
    const state=useSelector(state=>state.gitSlice)
    
    return (
    <div className='profileRightDiv'>
        <label>{state.arr[0].login}/README.md</label>
        <h1>Hi, I'm {state.arr[0].name}</h1>
        <hr style={{width:'90%',border:'0.1px solid grey'}}/>
        <div className='profileRightdiv'>
            <div style={{width:'60%'}}>
            <h1>{state.arr[0].name}</h1>
            <h2>Software Engineer, Content Creator & Community Organizer</h2>
            </div>
            <img src='girl.png' alt=''/>
        </div>
        <p>
            I'm a software engineer who is passionate about making contributing to open-source more approachable,creating technology to elevate people, and building community. Some technologies I enjoy working withinclude ReactJS, Jamstack (JavaScript, APIs + Markup) and GraphQL. In 2020, I was selected to be aninaugural GitHub Star star2 based on my involvement in the tech community. My interest in the Reactecosystem led me to launch React Robins, a community for women and non-binary ReactJS developers.
        </p>
        <div className='divProfile'>
            <img src='https://raw.githubusercontent.com/M0nica/M0nica/main/octomonica/m0nica-octocat-rotating.gif' alt=''/>
            <div>
                <h4>Find me around the web earth_americas:</h4>
                <hr style={{width:'90%'}}/>
                <ul>
                    <li>Learning in public on Twitch or monica.dev</li>
                    <li>Tinkering with interactions on Codepen</li>
                    <li>Sharing updates on LinkedIn </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProfileRightOverview