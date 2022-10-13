import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from './Main'
import Landing from './Landing'


export default class App extends React.Component {
    render(){
        return(
            <div>
                <BrowserRouter basename='/'>
                    <Routes>
                        <Route path='/' element={<Main/>}/>
                        <Route path='/landing' element={<Landing/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}