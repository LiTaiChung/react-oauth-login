import { isAuthAtom } from '@/store/authAtom';
import { useAtomValue } from 'jotai';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
  const isAuth = useAtomValue(isAuthAtom);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default AuthGuard;
