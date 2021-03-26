import React from 'react';
interface Props extends React.FC {
    redirect: string;
    isAuthorized: boolean;
}
declare const ProtectedRoute: ({ isAuthorized, redirect, ...rest }: Props) => JSX.Element;
export default ProtectedRoute;
