// src/hooks/useAuth.js
import { useNavigate } from 'react-router-dom';
import { removeTokens } from '../utils/tokenUtils';
import { toast } from 'react-toastify';

export const useAuth = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('accessToken');
    removeTokens(); 
    window.location.reload();
    navigate('/login');
    toast.info('Logged out successfully.');
  };

  return { logout };
};
