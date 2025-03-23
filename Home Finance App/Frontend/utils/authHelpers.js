import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './authconfig';

export const loginUser = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error('Login failed:', error.message);
    }
};

export const logoutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Logout failed:', error.message);
    }
};
