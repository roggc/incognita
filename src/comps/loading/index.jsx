__dev__&& console.log('src/comps/loading/index')
import React,{useState} from 'react'
import style from 'src/comps/loading/style'
import style2 from 'src/assets/styles/style1'
export default
()=>
{
  const el=
  <div className={style2.border2}>
    <i className="fas fa-spinner fa-spin"></i>
  </div>
  return el
}
