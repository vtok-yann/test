import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import Main from './Main'
import Landing from './Landing'


export default class App extends React.Component {
    render(){
        return(<>
                <HashRouter basename='/'>
                    <Routes>
                        <Route path='/' element={<Main/>}/>
                        <Route path='/landing' element={<Landing/>}/>
                    </Routes>
                </HashRouter>
                </>
        )
    }
}