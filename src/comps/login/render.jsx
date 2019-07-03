__dev__&& console.log('src/comps/login/render')

import React,{useState,useRef} from 'react'
import style from 'src/comps/login/style'

export default
()=>
{
  const inputChange=(e)=>
  {
    console.log(e.target.value)
    console.log(aRef.current.value)
  }
  const aRef=useRef(null)
  const el= 
  <div>
    <div className={style.row}>
      <div><span>email:</span></div>
      <div><input type='text' ref={aRef} onChange={inputChange}/></div>
    </div>
    <div className={style.row}>
      <div><span>password:</span></div>
      <div><input type='password'/></div>
    </div>
    <div className={style.row}>
      <div></div>
      <div><button>enter</button></div>
    </div>
  </div>
  return el
}
