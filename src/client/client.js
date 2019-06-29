import {render} from 'react-dom'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import 'src/assets/favicon/android-chrome-192x192'
import 'src/assets/favicon/android-chrome-512x512'
import 'src/assets/favicon/apple-touch-icon'
import 'src/assets/favicon/favicon-16x16'
import 'src/assets/favicon/favicon-32x32'
import 'src/assets/favicon/favicon'
import 'src/assets/favicon/site'

import App from 'src/comps/app/render'

render
(
  <div>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
)
