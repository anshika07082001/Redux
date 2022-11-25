import React, { useEffect, useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './GitSearch.css'
import { searchData, user, usersData } from './gitSlice'


const GitSearch = () => {

  const navigate=useNavigate()
  const state=useSelector((state)=>state.gitSlice)
  const dispatch=useDispatch()
  var searchInp=useRef('')

  useEffect(()=>{
    if(searchInp.current){
      searchInp.current.focus()
    }
    dispatch(usersData())
  },[])

  // Search Function

  const submit=(e)=>{
    e.preventDefault()
    dispatch(searchData(searchInp.current.value))
  }

  // Show Profile Function

  const profileBtn=(e)=>{
    var ind = e.target.getAttribute('index')
    dispatch(user(state.arr[ind]))
    navigate('/profile')
  }

  return (
  <>
  <h1>Get Github Profile Cards!</h1>
  <form onSubmit={submit}>
    <input id='searchInp' placeholder='Search a Github User' ref={searchInp}/>
    <button type='submit' style={{display:'none'}}>Submit</button>
  </form>
  {state.arr.map((item,i)=>{
    return(
    <div className='profileDiv'>
      <img src={item.avatar_url} alt=''/>
      <div className='profileContentDiv'>
        <h1>{item.login} <button index={i} onClick={profileBtn} style={{borderRadius:'5px',height:'30px'}}>Show Profile</button></h1>
        <h4>{item.bio}</h4>
        <div className='spanDiv'>
          <span>{item.followers} followers</span><span>{item.following} following</span><span>{item.public_repos} repos</span>
        </div>
        <div className='btnDiv'>
          <button>Python-Statistics</button><button>Whatsapp Ananlysis</button><button>BlogPosts</button><button>Cpp-Projects</button><button>ML-models</button>
        </div>
      </div>
    </div>
    )
  })}
  </>
  )
}

export default GitSearch