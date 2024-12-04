"use client";
// pages/signin.tsx
import React, { useState, useEffect } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineArrowRight } from "react-icons/ai";
// import Image from "next/image";

// const logoImageUrl =
//     "https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"; // Static logo URL

interface SignInFormData {
    email: string;
    password?: string;
    otp?: string;
}

const SignInPage: React.FC = () => {
    const methods = useForm<SignInFormData>({
        defaultValues: {
            email: "",
            password: "",
            otp: "",
        },
    });

    const [isOtpLogin, setIsOtpLogin] = useState(false);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [otpResendTimer, setOtpResendTimer] = useState<number | null>(null);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const onSubmit: SubmitHandler<SignInFormData> = (data) => {
        setIsAuthenticating(true);
        console.log("Sign In Data:", data);

        // Simulate API call
        setTimeout(() => {
            setIsAuthenticating(false);
            setIsAuthenticated(true);
        }, 1500);
    };

    const handleSuccessClose = () => {
        setIsAuthenticated(false);
        methods.reset();
    };

    const handleSendOtp = () => {
        const email = methods.getValues("email");
        if (!email) {
            alert("Please enter your email to send OTP!");
            return;
        }

        console.log("Sending OTP to:", email);

        // Simulate API call for sending OTP
        setIsOtpSent(true);
        setOtpResendTimer(30); // Set 30 seconds timer
        alert(`OTP has been sent to ${email}`);
    };

    // Countdown for OTP resend
    useEffect(() => {
        if (otpResendTimer === null || otpResendTimer <= 0) return;

        const interval = setInterval(() => {
            setOtpResendTimer((prev) => (prev ? prev - 1 : null));
        }, 1000);

        return () => clearInterval(interval);
    }, [otpResendTimer]);

    return (
        <div className="w-full h-[85vh] flex flex-col md:flex-row bg-white">
            {/* Left Section - Text Content */}
            <div className="flex-col justify-center md:w-1/2 bg-gradient-to-br from-pink-500 to-yellow-400 text-white p-8 ">
                <div className="max-w-md mx-auto">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                        <h2 className="text-lg font-semibold text-gray-800">LET'S CAFE</h2>
                    </div>
                    <h2 className="text-5xl font-bold uppercase mt-2 text-red-600">
                        Food
                    </h2>
                    <h3 className="text-6xl font-bold text-black mt-1">Restaurant</h3>
                    <p className="mt-4 text-gray-800">
                        Log in to manage your outlet and explore features.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-full flex items-center gap-2 hover:bg-orange-500 transition font-semibold">
                        Explore More <AiOutlineArrowRight />
                    </button>
                </div>
            </div>

            {/* Right Section - Sign In Form */}
            <div className="flex items-center justify-center md:w-1/2 bg-white">
                <div className="w-full max-w-lg p-8 space-y-6">
                    <FormProvider {...methods}>
                        <form
                            onSubmit={methods.handleSubmit(onSubmit)}
                            className="space-y-4"
                        >
                            {/* Loading and Success Dialogs */}
                            {isAuthenticating && <div>Authenticating...</div>}
                            {isAuthenticated && (
                                <div>
                                    Success! You have been logged in.
                                    <button
                                        className="ml-2 text-blue-500 underline"
                                        onClick={handleSuccessClose}
                                    >
                                        Close
                                    </button>
                                </div>
                            )}

                            {/* Static Logo */}
                            {/* <div className="flex justify-center mb-6">
                                <Image
                                    src={logoImageUrl}
                                    alt="Logo"
                                    width={128}
                                    height={128}
                                    className="rounded-full object-cover border border-gray-300"
                                />
                            </div> */}

                            {/* Email Field */}
                            <label className="block mb-2 text-sm font-medium">Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                {...methods.register("email", { required: true })}
                            />

                            {isOtpLogin ? (
                                <>
                                    {/* OTP Section */}
                                    <div className="flex justify-between items-center mt-4">
                                        <label className="block mb-2 text-sm font-medium">OTP</label>
                                        <button
                                            type="button"
                                            className={`text-sm font-semibold ${otpResendTimer === 0 || !isOtpSent
                                                ? "text-blue-500 underline"
                                                : "text-gray-500"
                                                }`}
                                            onClick={handleSendOtp}
                                            disabled={otpResendTimer !== 0 && isOtpSent}
                                        >
                                            {otpResendTimer === null || !isOtpSent
                                                ? "Send OTP"
                                                : otpResendTimer > 0
                                                    ? `Resend OTP in ${otpResendTimer}s`
                                                    : "Resend OTP"}
                                        </button>
                                    </div>
                                    <input
                                        name="otp"
                                        type="text"
                                        placeholder="Enter OTP"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        {...methods.register("otp", { required: true })}
                                    />
                                </>
                            ) : (
                                <>
                                    {/* Password Field */}
                                    <label className="block mb-2 text-sm font-medium">
                                        Password
                                    </label>
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        {...methods.register("password", { required: true })}
                                    />
                                </>
                            )}

                            {/* Switch Login Option */}
                            <div className="flex justify-between items-center">
                                <button
                                    type="button"
                                    className="text-blue-500 underline"
                                    onClick={() => setIsOtpLogin(!isOtpLogin)}
                                >
                                    {isOtpLogin
                                        ? "Login with Password"
                                        : "Login with Email OTP"}
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-br from-pink-500 to-orange-400 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
                            >
                                {isOtpLogin ? "Login with OTP" : "Login"}
                            </button>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
