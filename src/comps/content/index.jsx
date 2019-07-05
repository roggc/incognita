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
  const [login1,setLogin1]=useState
  (
    {
    }
  )
  const loginState1=
  {
    login:login1,
    setLogin:setLogin1
  }
  const [login2,setLogin2]=useState
  (
    {
    }
  )
  const loginState2=
  {
    login:login2,
    setLogin:setLogin2
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
              <Login {...loginState1}/>
              <Login {...loginState2}/>
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
