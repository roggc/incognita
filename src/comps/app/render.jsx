__dev__&& console.log('src/comps/app/render')

import React from 'react'
import Header from 'src/comps/header/render'
import Content from 'src/comps/content/render'
import Footer from 'src/comps/footer/render'
import style from 'src/comps/app/style'

export default
()=>
{
  const el=
  <div className={style.all}>
    <Header
      message={'very wellcome'}
      children=
      {
        [
          'login',
        ]
      }
    />
    <Content/>
    <Footer message=<span>&copy; 2019 trying to do react ...</span>/>
  </div>
  return el
}
