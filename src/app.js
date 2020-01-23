import React from 'react'
import { Route } from 'react-router-dom'
import Users from './users'

function App(){
    return (
        <Route path="/" component={Users} />
    )
}

export default App