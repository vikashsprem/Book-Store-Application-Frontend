import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const OtpAuth = () => {

    const [otp, setOtp] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic to handle form submission (e.g., making API request to Spring Boot backend)
    };

    return (
        <div>
            <div className="popup">
                <div className="popup-content">
                    <div className="flex justify-center">
                        <div className=" flex justify-center">
                            {error && <div>Invalid OTP.</div>}
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="m-2 flex justify-center">
                                    <h1>OTP Verification</h1>
                                </div>
                                <div className="m-2 w-full">
                                    <input
                                        placeholder="Enter six digit OTP"
                                        type="password"
                                        className="input-box p-1 w-11/12 border-gray-400 border"
                                        name="otp"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                    />
                                </div>
                                <div className="m-2 w-full">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white p-1 w-11/12"
                                    >
                                        Verify
                                    </button>
                                </div>
                                <div className="m-2 flex justify-center">
                                    <p style={{ fontSize: "0.63em" }}>
                                        Note: If you haven't received OTP yet.{" "}
                                        <Link to="/users/register" className="text-blue-600">
                                            Resend OTP
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpAuth;