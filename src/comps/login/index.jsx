__dev__&& console.log('src/comps/login/render')

import React,{useState,useRef} from 'react'
import style from 'src/comps/login/style'
import graphql from 'src/graphql/client'
import Loading from 'src/comps/loading/index'

export default
({login,setLogin}, ...rest)=>
{
  const emailRef=useRef(null)
  const psswrdRef=useRef(null)
  const btnClick=
  e=>
  {
    setLogin
    (
      {
        ...login,
        loading:true
      }
    )
    let query=
    `
      mutation ($email: String!, $psswrd: String!)
      {
        login(email: $email, psswrd: $psswrd)
        {
          res
          {
            name
            email
            id
          }
          error
          {
            name
            message
            function
          }
          errors
          {
            name
            message
            function
          }
        }
      }
    `
    let variables=
    {
      "email":emailRef.current.value.trim(),
      "psswrd":psswrdRef.current.value.trim()
    }
    graphql(query)(variables)
    (
      d=>
      {
        if(d.login.res)
        {
          setLogin
          (
            {
              ...login,
              loading:false,
              loggedin:true,
              name:d.login.res.name,
              email:d.login.res.email,
              id:d.login.res.id
            }
          )
        }
        else
        {
          setLogin
          (
            {
              ...login,
              loading:false,
              logError:true,
              errName:d.login.error.name,
              errMessage:d.login.error.message,
              errFunction:d.login.error.function
            }
          )
        }
      }
    )
  }
  const onKeyPressed=
  e=>
  {
    if(e.keyCode === 13)
    {
      btnClick(e)
    }
  }
  const tryAgainClick=
  e=>
  {
    setLogin
    (
      {
        ...login,
        loggedin:false,
        logError:false,
      }
    )
  }
  const logoutClick=
  e=>
  {
    let query=
    `
    mutation
    {
      logout
    }
    `
    graphql(query)({})
    (
      d=>
      {
        if(d.logout===true)
        {
          setLogin
          (
            {
              ...login,
              loggedin:false,
              logError:false,
            }
          )
        }
      }
    )
  }
  const el3=
  <div>
    <div className={style.row}>
      <div>
        <span>name:</span>
      </div>
      <div>
        <span>{login.errName}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span>message:</span>
      </div>
      <div>
        <span>{login.errMessage}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span>function:</span>
      </div>
      <div>
        <span>{login.errFunction}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span></span>
      </div>
      <div onClick={tryAgainClick}>
        <span><a className={style.anchor}>try again</a></span>
      </div>
    </div>
  </div>
  const el2=
  <div>
    <div className={style.row}>
      <div>
        <span>name:</span>
      </div>
      <div>
        <span>{login.name}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span>email:</span>
      </div>
      <div>
        <span>{login.email}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span>id:</span>
      </div>
      <div>
        <span>{login.id}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span></span>
      </div>
      <div onClick={logoutClick}>
        <span><a className={style.anchor}>logout</a></span>
      </div>
    </div>
  </div>
  const el1=
  login.loading?
  <Loading/>:
  <div onKeyDown={onKeyPressed}>
    <div className={style.row}>
      <div><span>email:</span></div>
      <div><input type='text' ref={emailRef}/></div>
    </div>
    <div className={style.row}>
      <div><span>password:</span></div>
      <div><input type='password' ref={psswrdRef}/></div>
    </div>
    <div className={style.row}>
      <div></div>
      <div><button onClick={btnClick}>enter</button></div>
    </div>
  </div>
  return login.loggedin?el2:login.logError?el3:el1
}
