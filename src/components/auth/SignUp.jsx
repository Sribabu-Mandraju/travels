import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure you have bootstrap icons installed
// import './App.css'; // Assuming you have your CSS styles here

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, email, password });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col justify-center items-center w-screen bg-black gap-0 overflow-hidden h-screen sm:bg-gray-800">
            <div className="w-full max-w-[450px] p-4 h-auto rounded bg-gray-800">
                <div className="mb-6 font-bold text-cyan-300 w-full text-center text-[35px]">Sign Up</div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 relative w-full">
                        <div className="absolute left-0 py-2 pl-2 text-gray-400">
                            <i className="bi bi-person-fill"></i>
                        </div>
                        <input
                            type="text"
                            required
                            placeholder="Your Name"
                            minLength="3"
                            className="bg-gray-700 text-sm w-full border-0 p-2 pl-8 rounded-lg placeholder-gray-400 mr-2 text-gray-400"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 relative w-full">
                        <div className="absolute left-0 py-2 pl-2 text-gray-400">
                            <i className="bi bi-envelope-fill"></i>
                        </div>
                        <input
                            type="email"
                            required
                            placeholder="Your Email"
                            maxLength="30"
                            className="bg-gray-700 text-sm w-full p-2 pl-8 border-0 rounded-lg placeholder-gray-400 mr-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 relative w-full">
                        <div className="absolute left-0 py-2 pl-2 text-gray-400">
                            <i className="bi bi-lock-fill"></i>
                        </div>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            placeholder="Your Password"
                            maxLength="15"
                            className="bg-gray-700 text-sm w-full p-2 pl-8 border-0 rounded-lg placeholder-gray-400 mr-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="absolute right-4 top-2 text-gray-400" onClick={togglePasswordVisibility}>
                            <i className={`bi ${showPassword ? 'bi-eye-fill' : 'bi-eye-slash-fill'}`}></i>
                        </div>
                    </div>
                    <div className="mb-6">
                        <input type="checkbox" className="m-2" />
                        <span className="text-white">Terms and Services and Privacy Policy</span>
                    </div>
                    <div className="w-full rounded-lg text-center bg-cyan-400">
                        <button type="submit" className="text-white text-center font-semibold rounded-md text-[20px] p-2">
                            Create an account
                        </button>
                    </div>
                    <div className="my-4 text-center">
                        <span className="text-gray-400">Already Registered? </span>
                        <a href="#" className="text-cyan-300">Sign In</a>
                    </div>
                    <div className="flex flex-row mb-6 justify-around items-center">
                        <div className="w-1/3 "><hr /></div>
                        <div className="text-white">or</div>
                        <div className="w-1/3 bg-gray-400"><hr /></div>
                    </div>
                </form>
                <div className="flex justify-center rounded-lg bg-gray-700 mb-4 relative w-full">
                    <div className='flex items-center gap-1 h-[40px]' >
                            <i className="bi bi-google text-gray-400"></i>
                        <input
                            type="button"
                            value="Sign Up With Google"
                            className="cursor-pointer text-sm w-full border-0 mt-2   rounded-lg bg-transparent placeholder-gray-400  text-gray-400"
                        />
                    </div>
                </div>
                <div className="flex justify-center bg-gray-700 rounded-lg w-full mb-4 relative">
                    <div className='flex items-center h-[40px] gap-1'>
                            <i className="bi bi-twitter-x text-gray-400"></i>
                        <input
                            type="button"
                            value="Sign Up With Twitter"
                            className="b text-sm border-0 mt-2 rounded-lg bg-transparent placeholder-gray-400  text-gray-400"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
