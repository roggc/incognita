__dev__&& console.log('src/comps/app/index')

import React from 'react'
import Header from 'src/comps/header/index'
import Content from 'src/comps/content/index'
import Footer from 'src/comps/footer/index'
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
          'home',
          'about',
          'login',
        ]
      }
    />
    <Content/>
    <Footer message=<span>&copy; 2019 trying to do react ...</span>/>
  </div>
  return el
}
