__dev__&& console.log('src/comps/login/render')

import React,{useState,useRef} from 'react'
import style from 'src/comps/login/style'
import graphql from 'src/graphql/client'
import Loading from 'src/comps/loading/index'

export default
({login,setLogin,name}, ...rest)=>
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
        ['loading'+name]:true
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
              ['loggedin'+name]:true,
              ['name'+name]:d.login.res.name,
              ['email'+name]:d.login.res.email,
              ['id'+name]:d.login.res.id
            }
          )
        }
        else
        {
          setLogin
          (
            {
              ...login,
              ['logError'+name]:true,
              ['errName'+name]:d.login.error.name,
              ['errMessage'+name]:d.login.error.message,
              ['errFunction'+name]:d.login.error.function
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
        <span>{login['errName'+name]}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span>message:</span>
      </div>
      <div>
        <span>{login['errMessage'+name]}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span>function:</span>
      </div>
      <div>
        <span>{login['errFunction'+name]}</span>
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
        <span>{login['name'+name]}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span>email:</span>
      </div>
      <div>
        <span>{login['email'+name]}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span>id:</span>
      </div>
      <div>
        <span>{login['id'+name]}</span>
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
  login['loading'+name]?
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
  return login['loggedin'+name]?el2:login['logError'+name]?el3:el1
}
