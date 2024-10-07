import React, { useState } from 'react';
import './Skills.css'; // Import the CSS file
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons/faC';

const Skills = () => {
    const [showCertificates, setShowCertificates] = useState(false);

    const handleCertificationClick = () => {
        setShowCertificates(!showCertificates);
    };

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1VudKxvkjBKrg8tOIn_kvwIVojQ-FMT_v/view?usp=drive_link'; // Replace with the path to your resume
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                <div className="skill-box">
                    <h3>Front-End</h3>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
                        <p>HTML</p>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
                        <p>CSS</p>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faJs} className="skill-icon" />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faReact} className="skill-icon" />
                        <p>React</p>
                    </div>
                </div>
                <div className="skill-box">
                    <h3>Back-End</h3>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faNodeJs} className="skill-icon" />
                        <p>Node.js</p>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faNodeJs} className="skill-icon" />
                        <p>Express.js</p>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
                        <p>MongoDB</p>
                    </div>
                </div>
                
                <div className="skill-box">
                    <h3>Languages Known</h3>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faC} className="skill-icon" />
                        <p>C language</p>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faJs} className="skill-icon" />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faPython} className="skill-icon" />
                        <p>Python</p>
                    </div>
                    <div className="skill-item">
                        <FontAwesomeIcon icon={faJava} className="skill-icon" />
                        <p>Java</p>
                    </div>
                </div>
            </div>

            <div className="certification-resume">
                <div className="button-container">
                    <div className="certification-tab" onClick={handleCertificationClick}>
                        Certification
                    </div>
                    <div className="resume-tab" onClick={handleResumeDownload}>
                        Resume
                    </div>
                </div>
                {showCertificates && (
                    <div className="certification-list">
                        {/* Add your certification images here */}
                        <img src="https://media.licdn.com/dms/image/v2/D4D22AQHklxQwHiGv7g/feedshare-shrink_800/feedshare-shrink_800/0/1702627379429?e=1730937600&v=beta&t=ASqWJcE87om6BeqDPwfjFlrcTsdlyCRescxC488ff2o" alt="Certification 1" />
                        <img src="https://media.licdn.com/dms/image/v2/D4D22AQHUuLCxEzCKhw/feedshare-shrink_800/feedshare-shrink_800/0/1702627292349?e=1730937600&v=beta&t=N23EwwExs4uh0tmHYZfwlvKDj_YAeqs-_zaiQ7MU-fM" alt="Certification 2" />
                        <img src="https://media.licdn.com/dms/image/v2/D5622AQEoTPlNmdvy4Q/feedshare-shrink_800/feedshare-shrink_800/0/1715169528837?e=1730937600&v=beta&t=Jpw3DxI3bQg5M-yFPkgvEyfPSwxBUrSeyWj0Kx0vumo" alt="Certification 1" />
                        <img src="https://media.licdn.com/dms/image/v2/D5622AQFpsqZPr6QEvg/feedshare-shrink_800/feedshare-shrink_800/0/1715169526872?e=1730937600&v=beta&t=3GafZmRaEBOdze_INGAi6l7uhqj8cAgjtTYDUMqBasE" alt="Certification 2" />
                        <img src="https://media.licdn.com/dms/image/v2/D5622AQEZkILQ1mk-gg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1719138225830?e=1730937600&v=beta&t=CbMUhnuDJG8Ff1jVcdxKw-MCvgTybstpyfcR_ui_4Ys" alt="Certification 1" />
                        <img src="https://media.licdn.com/dms/image/v2/D5622AQFVQn7rMIrdCw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1719041284337?e=1730937600&v=beta&t=7lmd1muUs089goK8h900obdBjOCm_cIEBi0-PhrbBm0" alt="Certification 2" />
                        <img src="https://media.licdn.com/dms/image/v2/D5622AQE83FnJqDrpOg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1717849995483?e=1730937600&v=beta&t=Udzrre3k_pATKiUK6kVQPAP53F4_ieEvVtScnGb9A7Q" alt="Certification 1" />
                        <img src="https://media.licdn.com/dms/image/v2/D5622AQFho7UUnjz5tA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1718385562753?e=1730937600&v=beta&t=WBdZzXs70Bc-_uncW-DIKOLmO3u5-SoJlvP320oIwDY" alt="Certification 2" />
                        <img src="https://media.licdn.com/dms/image/v2/D5622AQHZ7kErFdQ9zQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1698470516253?e=1730937600&v=beta&t=E9CH8INZV_vQUJuMO-bdBrVTbkkSZdu8qqshUoEc3Sk" alt="Certification 2" />
                        <img src="https://media.licdn.com/dms/image/v2/D5622AQEuqK1R4RrhnA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1697356696853?e=1730937600&v=beta&t=i6C95XNYRB6uCpWAsUrmjx2EMX3nI4oFwwTpKnNNRIc" alt="Certification 2" />
                        <img src="https://media.licdn.com/dms/image/v2/D5622AQGKGAJ7tk8xsw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1692857547005?e=1730937600&v=beta&t=7-XAwNW3C7JS7XIT3RIyMGzYCrIr4fjlVq3l5dSUNBQ" alt="Certification 2" />
                        <img src="https://media.licdn.com/dms/image/v2/D5622AQHXByTXIIwNog/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1692857293765?e=1730937600&v=beta&t=Q4mDnIZHZnsNdyiQ_u1_XSxkBSjb04wj_qGrZzmRv4c" alt="Certification 2" />
                        <img src="https://media.licdn.com/dms/image/v2/D5622AQH3-McsUfCq5A/feedshare-shrink_800/feedshare-shrink_800/0/1718968703316?e=1730937600&v=beta&t=G4J8AeIIoPYN5Ub1pyW8BFCIaaML75qj2ragzpDKhhA" alt="Certification 2" />
                        <img src="https://media.licdn.com/dms/image/sync/v2/D4D27AQGTnmduee7CVQ/articleshare-shrink_480/articleshare-shrink_480/0/1714412232100?e=1728903600&v=beta&t=JvZunE6oJizqk9Zt7RCsslk1M4EfXPgnVkNMGjbd-Sg" alt="Certification 2" />
                    

                        {/* Add more certification images as needed */}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;
