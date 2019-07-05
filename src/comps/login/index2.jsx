__dev__&& console.log('src/comps/login/render')

import React,{useState,useRef} from 'react'
import style from 'src/comps/login/style'
import graphql from 'src/graphql/client'
import Loading from 'src/comps/loading/index'

export default
({children,setGreeting}, ...rest)=>
{
  const [state,setState]=
  useState
  (
    {
    }
  )
  const emailRef=useRef(null)
  const psswrdRef=useRef(null)
  const btnClick=
  e=>
  {
    setState
    (
      {
        ...state,
        loading:true,
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
          setState
          (
            {
              ...state,
              loggedin:true,
              name:d.login.res.name,
              email:d.login.res.email,
              id:d.login.res.id
            }
          )
        }
        else
        {
          setState
          (
            {
              ...state,
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
  const el3=
  <div>
    <div className={style.row}>
      <div>
        <span>name:</span>
      </div>
      <div>
        <span>{state.errName}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span>message:</span>
      </div>
      <div>
        <span>{state.errMessage}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span>function:</span>
      </div>
      <div>
        <span>{state.errFunction}</span>
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
        <span>{state.name}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span>email:</span>
      </div>
      <div>
        <span>{state.email}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span>id:</span>
      </div>
      <div>
        <span>{state.id}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span></span>
      </div>
      <div>
        <span><a className={style.anchor}>logout</a></span>
      </div>
    </div>
  </div>
  const el1=
  state.loading?
  <Loading/>:
  <div>
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
  return state.loggedin?el2:state.logError?el3:el1
}
