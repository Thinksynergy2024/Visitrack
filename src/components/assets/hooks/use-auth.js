import { authContext } from '@/use-context';
import { useContext } from 'react';


export const useAuth = () => {
    const { user } = useContext(authContext);
    return user;
};
