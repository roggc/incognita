__dev__&& console.log('src/comps/footer/render')

import React from 'react'
import style from 'src/comps/footer/style'
import style2 from 'src/assets/styles/style1'

export default
({message})=>
{
  const el=
  <div className={`${style.border} ${style.font}`}>
    <div className={`${style2.border2}`}>
      {message}
    </div>
  </div>
  return el
}
