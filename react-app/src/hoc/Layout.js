import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import Aux from './Holder'
import CurrencyDisplay from '../containers/CurrencyDisplay/currencyDisplay'
import CurrencyAdmin from '../containers/CurrencyAdmin/CurrencyAdmin'

const layout = () =>(
    <Aux>
        <section className="Main">
            <Container>
                <BrowserRouter basename="/api/pmxpro">
                    <Route path="/" exact component={CurrencyDisplay} />
                    <Route path="/admin" exact component={CurrencyAdmin} />
                </BrowserRouter>
            </Container>
        </section>
    </Aux>
)
export default layout