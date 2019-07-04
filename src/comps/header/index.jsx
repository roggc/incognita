__dev__&& console.log('src/comps/header/index')

import React,{useState,useRef} from 'react'
import style from 'src/comps/header/style'
import Modal from 'src/comps/modal/index'
import useClickOutside from 'src/hooks/useClickOutside'

export default
({message,children})=>
{
  const [state,setState]=useState
  (
    {
      showMenu:false
    }
  )
  const menuClick=
  turnOff=>e=>
  {
    if(!turnOff)
    {
      setState
      (
        {
          ...state,
          showMenu:!state.showMenu
        }
      )
    }
    else
    {
      setState
      (
        {
          ...state,
          showMenu:false
        }
      )
    }
  }
  const menuRef = useRef(null)
  useClickOutside
  (
    e => menuClick(true)(e),
    menuRef
  )
  const el=
  <div className={`${style.border} ${style.flex1}`}
    onClick={menuClick(false)}>
    <div className={`${style.border2}`}>{message}</div>
    <div className={`${style.border2} ${style.menu}`} ref={menuRef}>
      <div><i className="fas fa-bars"></i></div>
      <Modal children={children} opa={state.showMenu}/>
    </div>
  </div>
  return el
}
