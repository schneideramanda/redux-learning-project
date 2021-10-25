import React from 'react';
import { Navigate, Route } from 'react-router';
import { useSelector } from 'react-redux';

const ProtectedRoute = (props) => {
  const { data } = useSelector((state) => state.user);

  if (data) return <Route {...props} />;
  else if (data === null) return <Navigate to='/login' />;
  else return null;
};

export default ProtectedRoute;
