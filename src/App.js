import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'

import Gabung from './com//Gabung/Gabung'
import Diskusi from './com/Diskusi/Diskusi'

const App =  () => (
    <Router >
        <Route path="/" exact component={Gabung} />
        <Route path="/diskusi" component={Diskusi} />
    </Router>
)

export default App
