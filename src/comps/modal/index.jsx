__dev__&& console.log('src/comps/modal/index')
import React,{useState,useRef} from 'react'
import style from 'src/comps/modal/style'
import {Link} from 'react-router-dom'
export default
({children,opa})=>
{
  const outRef = useRef(null);
  const clickOut=(e)=>
  {
    outRef.current.isEqualNode(e.target)?
      e.stopPropagation():false
  }
  const el=
  <div className={`${style.container}`} style={{right:'68px'}}>
      <div className={`${style.modal} ${style.fade}
        ${opa?style.show:style.notShow}`} onClick={clickOut} ref={outRef}>
          {children&& children.map
          (
            (e,i)=>
            <div key={i} className={`${style.cursor}`}>
              {e==='home'?<Link to={'/'}>{e}</Link>
              :<Link to={'/'+e}>{e}</Link>}
            </div>
          )
        }
      </div>
  </div>
  return el
}
