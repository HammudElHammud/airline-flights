import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css';
import '../src/css/style.css'

const Home = React.lazy(() => import('../src/Views/pages/Home'));
const Flights = React.lazy(() => import('../src/Views/pages/Flights'));

function App() {

    const loading = (
        <div className="pt-3 text-center">
            <div className="sk-spinner sk-spinner-pulse"/>
        </div>
    )

    return (

        <BrowserRouter basename={process.env.REACT_APP_BASE_DASHBOARD_URL}>
            <React.Suspense fallback={loading}>
                <Switch>
                    <Route exact path="/flights" render={(props: object) => <Flights/>}/>
                    <Route path="/" render={(props: object) => <Home/>}/>
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
}

export default App;
