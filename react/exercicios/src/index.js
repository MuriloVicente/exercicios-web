import React from 'react'
import ReactDOM from 'react-dom'

import { BoaTarde, BoaNoite } from './components/Multiplos'

ReactDOM.render(
    <div>
        <BoaTarde nome="Murilo" />
        <BoaNoite nome="Murilo" />
    </div>
    , document.getElementById('root'))