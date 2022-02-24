import React from 'react';
import NavBar from './NavBar.js';
import Sidebar from './SideBar.js';
import Footer from './Footer.js';
import {BrowserRouter as Router, Route , Redirect, Switch} from 'react-router-dom';
import routes from '../../routes/routes.js';

import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';


const MasterLayout = () => {
    return (
        <div className='sb-nav-fixed'>
            <NavBar/>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div>

                <div id="layoutSidenav_content">
                    <Switch>
                        {routes.map((route, idx)=> {
                            return(
                                route.component && (
                                    <Route 
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={(props)=> (<route.component {...props} /> )}
                                    />
                                )
                            )
                        })
                        }
                        <Redirect from="admin" to="/admin/dashboard"/>
                    </Switch>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default MasterLayout;
