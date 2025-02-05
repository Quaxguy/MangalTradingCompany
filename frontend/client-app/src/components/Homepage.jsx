import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function App() {
    const [userEmail, setUserEmail] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Function to fetch user info
    const fetchUserInfo = async () => {
        const token = JSON.parse(localStorage.getItem("token"));

        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get("http://localhost:8000/api/v1/auth/user-info/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                setUserEmail(response.data.email); // Set user's email from response
            }
        } catch (error) {
            console.error("Failed to fetch user info:", error);
            localStorage.removeItem("token");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUserEmail(null);
        navigate("/login");
    };

    return (
        <div>
            {/* Navbar */}
            <div className="navbar">
                <span className="naive" onClick={() => document.getElementById("work").scrollIntoView({ behavior: "smooth" })}>
                    Work
                </span>
                <span className="naive" onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
                    About
                </span>
                <span className="naive" onClick={() => document.getElementById("footer").scrollIntoView({ behavior: "smooth" })}>
                    Contact
                </span>

                {!userEmail && !loading && (
                    <span className="naive" onClick={() => navigate("/signup")}>
                        Login
                    </span>
                )}
                {loading && <span className="nav-item">Loading...</span>}

                {userEmail && (
                    <div className="user-info">
                        <span className="user-email">{userEmail}</span>
                        <button className="logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                )}
            </div>

            {/* Rest of the landing page content */}
            <div className="header">
                <div className="logo-container">
                    <div className="logo">Mangal</div>
                    <span className="logo2">Trading</span>
                </div>
                <div className="company-description-container">
                    <span className="logo3">Company</span>
                    <div className="description">At Mangal Traders, we turn opportunities into success stories. From stocks to crypto, our expertise helps you navigate markets with confidence and ease. Let’s trade smarter, together!</div>
                </div>
                <div className="moving-image"></div>
            </div>





            {/* Rest of the page remains unchanged */}
            {/* Squares Section (Work Section) */}
            <div id="work" className="squares-container">
                <div className="square">
                    <img src='3e125508a456baa2beceb721447f9de0.png' />
                    <div className="square-text">Get rewards by referring your network</div>
                </div>
                <div className="square">
                    <img className="square3" src='a5f7d1f50bf2c9dd4755c1c507b4ff2e.jpeg' />
                    <div className="square-text">Forgotten Wikipedia articles</div>
                </div>
                <div className="square">
                    <img className="square2" src="WhatsApp Image 2025-02-05 at 12.49.03 AM.jpeg" />
                    <div className="square-text">The future of Web3 on Bitcoin</div>
                </div>
                <div className="square">
                    <img className="square1" src="e8f76f82b44bc073051a7eb15eb6884c.jpeg" />
                    <div className="square-text">Global Education</div>
                </div>
            </div>
            {/* Funky Fonts Section (About Section) */}
            <div id="about" className="sec">
                <div className="section1">
                    <p>Since 2021</p>
                    <p><strong>Mangal Traders:</strong> Where smart moves meet big wins.</p>
                </div>

                <div className="section2">
                    <p><strong>FROM</strong></p>
                    <p><strong>NAGPUR, INDIA</strong></p>
                </div>

                <div className="section3">
                    
                    <p>
                        At Mangal Traders, we simplify trading with expertise and innovation.
                        Whether it's stocks, crypto, or other markets, we are here to guide you
                        toward smarter investments and success.
                    </p>
                </div>
            </div>

            {/* Subscription Plans */}
            {/* <div className="subscription-plans">
         <div className="plan">
           Plan 1
           <button>Subscribe</button>
         </div>
         <div className="plan">
           Plan 2
           <button>Subscribe</button>
         </div>
         <div className="plan">
           Plan 3
           <button>Subscribe</button>
         </div>
         <div className="plan">
           Plan 4
           <button>Subscribe</button>
         </div>
       </div> */}
            {/* Client List */}
            <marquee scrollamount="20">
                <span className="text"> Ravi Verma says:
                    "Your trading strategies are unique and highly effective. I have started making good profits thanks to your techniques. Thank you!"</span>
                <span className="text">Sonia Sharma says:
                    "I used to find trading very complicated, but your guidance made it easy. Now I can invest with confidence!"</span>
                <span className="text">Aman Gupta says:
                    "Your trading tips helped me achieve my dream income. This is an amazing platform!"</span>
                <span className="text">Aman Gupta says:
                    "Your trading tips helped me achieve my dream income. This is an amazing platform!"</span>      </marquee>
            {/* Referral Block */}
            {fetchUserInfo ? (
                <div className="referral-block">
                    <div className="referral-box">
                        <p>Refer your friends and earn rewards!</p>
                        {/* Add referral link and logic here */}
                    </div>
                </div>
            ) : (
                <div className="referral-block">
                    <button onClick={() => navigate("/signup")}>Refer</button>
                </div>
            )}

            {/* Welcome Rotating Text Section */}
            <marquee scrollamount="20">
                <span className="welcom">Welcome to mangaltrading.co.in</span>
                <span className="welcom">Welcome to mangaltrading.co.in</span>
                <span className="welcom">Welcome to mangaltrading.co.in</span>
            </marquee>

            

            {/* Footer */}

            <footer id="footer" className="footer-distributed">

                <div className="footer-left">

                    <h3>Mangal Trading<span> Company</span></h3>

                    

                    <p className="footer-company-name">Company Name © 2024</p>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Nagpur address</span> Uday Nagar square 
       Opp SBI Bank 
       Old Ring Road
       Nagpur-440024</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+91 9860362007</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">support@company.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the company</span>
                        At Mangal Traders, we turn opportunities into success stories. From stocks to crypto, our expertise helps you navigate markets with confidence and ease. Let’s trade smarter, together!
                    </p>



                </div>

            </footer>
        </div>

    );
}

export default App;

