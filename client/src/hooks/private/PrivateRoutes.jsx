import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../auth/auth';
const PrivateRoutes = () => {

  const  {token} = useAuth()

  return token ? (
    <Outlet /> 
  ) : (
    <Navigate to="/login" /> 
  );
};

export default PrivateRoutes;
