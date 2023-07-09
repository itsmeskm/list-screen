import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Screen from './screen';
import Navigation from './Navigation';
import SideNavbar from './SideNavbar';
import ChartComponent from './ChartComponent';
import { PieComponent } from './PieComponent';
import Details from './Details';

function Login() {
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <div className='container'>
            {profile ? (
                <div className='row'>
                    <div className='col-md-2'>
                        <SideNavbar />
                    </div>
                    <div className='col-md-10'>
                        <Navigation title="Dashboard" image={profile.picture} name={profile.name} email={profile.email} logOut={logOut}/>
                        <Screen />
                        <ChartComponent />
                        <div className='row my-4'>
                            <div className='col-md-6' style={{height:"350px"}}>
                                <PieComponent />
                            </div>
                            <div className='col-md-6'>
                                <Details />
                            </div>
                        </div>
                    </div>
                    <button className='my-4' onClick={logOut}>Log out</button>
                </div>
            ) : (
                <div className='d-flex align-items-center mt-4 justify-content-center my-4'>
                    <button className='btn btn-outline-primary' onClick={() => login()}>Sign in with Google 🚀 </button>
                </div>
            )}
        </div>
    );
}
export default Login;
