import React from 'react'
import { Route, Redirect } from "react-router-dom";

interface Props extends React.FC {
    redirect: string;
    isAuthorized: boolean;
}

const ProtectedRoute = ({ isAuthorized, redirect, ...rest }:Props) => {
  return isAuthorized ? <Route {...rest} /> : <Redirect to={redirect} />;
};


export default ProtectedRoute
