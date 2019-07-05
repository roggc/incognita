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
  const [login,setLogin]=useState
  (
    {
    }
  )
  const loginState=
  {
    login,
    setLogin
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
              <Login name={'Log1'} {...loginState}></Login>
              <Login name={'Log2'} {...loginState}></Login>
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
