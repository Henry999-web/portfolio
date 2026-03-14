import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { loginCall } from '../../services/api';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';

const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching, error } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await loginCall(
            { username: userRef.current.value, password: passwordRef.current.value },
            dispatch
        );
        // After login attempt, check if we have a user in context is tricky due to async state update.
        // Instead, we can observe the context change or just rely on the redirect in useEffect inside a protected route or here.
        // For simplicity, we can let the user manually navigate or setup a useEffect here.
        // But loginCall is async, so we can await it if we modify it to return a promise. 
        // Current loginCall doesn't return the user, it dispatches. 
        // Let's assume on success, we redirect. 
        // Ideally loginCall should return result. 
        // For now, I'll rely on a simple check or just redirect if no error thrown (but axiosInstance throws).
    };

    // Improved Login Handler
    // Actually, let's modify loginCall in api.js to return true/false or user/null later if needed.
    // For now, let's handle it here simply.

    // Wait, I can't await dispatch effectively to check state immediately.
    // I will check the user object in the component.

    const { user } = useContext(AuthContext);

    if (user) {
        setTimeout(() => {
            navigate('/admin');
        }, 100);
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-zinc-50 dark:bg-black pt-24 pb-12 flex items-center justify-center">
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg w-full max-w-md border border-zinc-100 dark:border-zinc-800">
                    <h2 className="text-2xl font-bold text-center mb-6 text-zinc-900 dark:text-white">Admin Login</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Username</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                                ref={userRef}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                                ref={passwordRef}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition disabled:opacity-50"
                            disabled={isFetching}
                        >
                            {isFetching ? 'Loading...' : 'Login'}
                        </button>

                        {error && <span className="block text-red-500 text-sm text-center mt-2">Something went wrong!</span>}
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
