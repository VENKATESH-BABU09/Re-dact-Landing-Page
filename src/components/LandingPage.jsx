import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from './Typewriter';  // Adjust path if necessary
import sampleImage from '../assets/images/sample.jpg';  // Adjust path if necessary

const LandingPage = () => {
    return (
        <div className="bg-dark-blue h-[100vh]">
            <nav className="bg-orange-500 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-xl font-bold">
                        Re-dact
                    </div>
                    <div>
                        <button className="text-white mr-4" aria-label="Login">
                            Login
                        </button>
                        <button className="text-white" aria-label="Sign Up">
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>
            <section className="container mx-auto flex flex-col-reverse md:flex-row items-center mt-24">
                <div className="w-full md:w-1/2">
                    <motion.img 
                        src={sampleImage} 
                        alt="Redaction Icon"
                        className="w-1/2 mx-56"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
                <div className="w-full md:w-1/2 text-white text-center px-10 md:text-left">
                    <h1 className="text-5xl font-bold">Re-dact</h1>
                    <h2 className="text-2xl mt-4">
                        <Typewriter text="data privacy in our hands" />
                    </h2>
                    <br></br>
                    <button className="bg-orange-500 text-white py-2 px-4 rounded mt-4 hover:bg-white hover:text-black font-bold">
                        Get Started
                    </button>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
