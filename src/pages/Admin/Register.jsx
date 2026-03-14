import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", {
                username,
                password,
            });
            res.data && navigate("/login");
        } catch (err) {
            setError(true);
        }
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-zinc-50 dark:bg-black pt-24 pb-12 flex items-center justify-center">
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg w-full max-w-md border border-zinc-100 dark:border-zinc-800">
                    <h2 className="text-2xl font-bold text-center mb-6 text-zinc-900 dark:text-white">Create Admin Account</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Username</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                                onChange={e => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
                        >
                            Register
                        </button>

                        {error && <span className="block text-red-500 text-sm text-center mt-2">Something went wrong!</span>}

                        <div className="text-center mt-4">
                            <Link to="/login" className="text-sm text-blue-600 hover:underline">
                                Already have an account? Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
