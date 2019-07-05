__dev__&& console.log('src/comps/content/index')

import React,{useState} from 'react'
import {Route} from 'react-router-dom'
import Login from 'src/comps/login/index'
import About from 'src/comps/about/index'
import Home from 'src/comps/home/index'
import style from 'src/comps/content/style'
import style2 from 'src/assets/styles/style1'

export default
()=>
{
  const [state,setState]=useState
  (
    {
    }
  )
  const setLoading=
  val=>name=>
  {
    setState
    (
      {
        ...state,
        ['loading'+name]:true
      }
    )
  }
  const setResult=
  res=>name=>
  {
    setState
    (
      {
        ...state,
        ['loggedin'+name]:true,
        ['name'+name]:res.name,
        ['email'+name]:res.email,
        ['id'+name]:res.id
      }
    )
  }
  const setError=
  error=>name=>
  {
    setState
    (
      {
        ...state,
        ['logError'+name]:true,
        ['errName'+name]:error.name,
        ['errMessage'+name]:error.message,
        ['errFunction'+name]:error.function
      }
    )
  }
  const el=
  <div className={`${style.border} ${style.height}`}>
    <div className={`${style.flex1} ${style.height}`}>
      <div className={style.flex2}>
        <Route path='/about' render=
        {
          ()=><div className={`${style2.border2} ${style.fade}`}><About/></div>
        }
        />
        <Route path='/login' render=
        {
          ()=><div className={`${style2.border2} ${style.fade}`}>
              <Login name={'Log1'} setLoading={setLoading} setError={setError}
                setResult={setResult}>{{...state}}</Login>
              <Login name={'Log2'} setLoading={setLoading} setError={setError}
                setResult={setResult}>{{...state}}</Login>
            </div>
        }
        />
        <Route path='/' exact render=
        {
          ()=><div className={`${style2.border2} ${style.fade}`}><Home/></div>
        }
        />
      </div>
    </div>
  </div>
  return el
}
