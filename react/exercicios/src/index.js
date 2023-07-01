import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Vicente" />
            <Filho nome="Pedro" sobrenome="Vicente"/>
            <Filho nome="Paulo" sobrenome="Vicente"/>
            <Filho nome="Carla" sobrenome="Vicente" />
        <Pai/>
    </div>
    , document.getElementById('root'))