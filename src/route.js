import React from 'react'
import { BrowserRouter,Route, Switch} from 'react-router-dom'

import APP from './App';
import FOOTER from './footer';
import HEADER from './Header';
import NAV from './Nav';
import ARTICLE from './Article';
import FORM from './Form';

export default(
    <BrowserRouter>
        <switch>
            <Route path='/' exact component={APP}/>
            <Route path='/footer' exact component={FOOTER}/>
            <Route path='/header' exact component={HEADER}/>
            <Route path='/article' exact component={ARTICLE}/>
         </switch>
    </BrowserRouter>
)