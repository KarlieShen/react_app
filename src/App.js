import * as React from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Popular from './Component/Popular';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Battle from './Component/Battle';
import Douban from './Component/Douban';

export default class App extends React.Component{
    render() {
    	return (
            <Router>
                <div className="test">
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/popular' component={Popular} />
                        <Route path='/battle' component={Battle} />
                        <Route path='/douban' component={Douban} />
                        <Route render={() => {
                            return <p> Not Found </p>
                        }} />
                    </Switch>
                </div>
            </Router>
    	)
    }
}
