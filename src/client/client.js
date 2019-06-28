import {render} from 'react-dom'
import React from 'react'

import 'src/assets/favicon/android-chrome-192x192'
import 'src/assets/favicon/android-chrome-512x512'
import 'src/assets/favicon/apple-touch-icon'
import 'src/assets/favicon/favicon-16x16'
import 'src/assets/favicon/favicon-32x32'
import 'src/assets/favicon/favicon'
import 'src/assets/favicon/site'

import App from 'src/comps/app/app'

render
(
  <div>
    <App person={{name:'alexander',surname:'gomez'}}/>
  </div>,
  document.getElementById('root')
)
