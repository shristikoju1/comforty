import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch} from 'react-redux';
import { logout as logoutAction } from '@/Store/authslice';

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    dispatch(logoutAction());
    toast.success("Logout Successful!");

    setTimeout(() => {
      navigate('/login');
      // window.location.reload(); 
    }, 1000);  };

  return { handleLogout };
};
