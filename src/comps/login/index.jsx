__dev__&& console.log('src/comps/login/render')

import React,{useState,useRef} from 'react'
import style from 'src/comps/login/style'
import graphql from 'src/graphql/client'
import Loading from 'src/comps/loading/index'

export default
({children,setLoading,setResult,setError,name}, ...rest)=>
{
  const emailRef=useRef(null)
  const psswrdRef=useRef(null)
  const btnClick=
  e=>
  {
    setLoading(true)(name)
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
          setResult(d.login.res)(name)
        }
        else
        {
          setError(d.login.error)(name)
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
        <span>{children['errName'+name]}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span>message:</span>
      </div>
      <div>
        <span>{children['errMessage'+name]}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span>function:</span>
      </div>
      <div>
        <span>{children['errFunction'+name]}</span>
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
        <span>{children['name'+name]}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span>email:</span>
      </div>
      <div>
        <span>{children['email'+name]}</span>
      </div>
    </div>
    <div className={style.row}>
      <div>
        <span>id:</span>
      </div>
      <div>
        <span>{children['id'+name]}</span>
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
  children['loading'+name]?
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
  return children['loggedin'+name]?el2:children['logError'+name]?el3:el1
}
