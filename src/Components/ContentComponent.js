import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import Login from "../Pages/Login";
import {Layout, Menu, PageHeader} from "antd";

import {useEffect, useState} from "react";
import { capitalize } from "lodash"
import { useSelector } from "react-redux";
import Dashboard from "../Pages/Dashboard";
import LaunchCampaign from "../Campaign/LaunchCampaign";
import RejectDeliveryCampaignList from "../Pages/RejectDeliveryCampaignList";
import PatientRegistrationForm from "../Patient/PatientRegistrationForm";
import { LoggedIN } from "../Shared/LoggedIN";
import DoctorPrescribedForm from "../Patient/DoctorPrescribedForm";
import PatientsReport from "../Reports/PatientsReport";
import CallDetailReport from "../Reports/CallDetailReport";
import Login2 from "../login/Login2";


const { Content } = Layout

const ContentComponent = () => {

    const location = useLocation()
    const [pathname, setPathname] = useState('Dashboard')

    useEffect(() => {
        setPathname(capitalize(location.pathname.replace("/", '')))
    }, [location])
 
    return(
        <Content style={{  background: 'transparent'}}>
            <Switch>
                <PublicRoute exact path="/sign-in">
                    <Login2/>
                </PublicRoute>
                <PrivateRoute exact path="/dashboard">
                    <Dashboard /> 
                </PrivateRoute>
                <PrivateRoute exact path="/patient-registration">
                    <PatientRegistrationForm /> 
                </PrivateRoute>
                <PrivateRoute exact path="/doctor-prescribed-form">
                    <DoctorPrescribedForm /> 
                </PrivateRoute>
                <PrivateRoute exact path="/patients-report">
                    <PatientsReport /> 
                </PrivateRoute> 
                <PrivateRoute exact path="/login2">
                    <Login2 /> 
                </PrivateRoute>
                <PrivateRoute exact path="/call-report">
                    <CallDetailReport /> 
                </PrivateRoute>
                <PrivateRoute exact>
                    <h2 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Page Not Found </h2>
                </PrivateRoute>
            </Switch>
        </Content>
    )
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {

    const user = useSelector(state => state.User)
    const [path] = useState("/sign-in")
    return (
        <Route
            {...rest}
            render={({location}) =>
                LoggedIN() ? (
                    children
                ) : (
                    <Redirect
                    to={{
                        pathname: path,
                    }}
                    />
                )
            }
        />
    );
}

function PublicRoute({ children, ...rest }) {

    const user = useSelector(state => state.User)
    const [path] = useState("/dashboard")
    return (
        <Route
            {...rest}
            render={(props) =>
                
                !LoggedIN() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: path,
                        }}
                    />
                )
            }
        />
    );
}

export default ContentComponent