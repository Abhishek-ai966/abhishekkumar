import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect'; // Ensure you have this package installed
import './AboutMe.css'; // Import CSS for styling

const AboutMe = () => {
  const roles = ["Full Stack Web Developer", "App Developer"];
  const [currentRole, setCurrentRole] = useState(0);

  // Change roles every 3 seconds
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, [roles.length]);

  return (
    <div className="about-me-container">
      <div className="message-container">
        <div className="greeting">Hello!! I am Abhishek Kumar</div>

        {/* Typewriter effect for roles */}
        <div className="typing-container">
          <Typewriter
            options={{
              strings: roles,
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </div>

        {/* Paragraph about you */}
        <div className="about-text">
          I am passionate about building innovative web and mobile applications that solve real-world problems. With expertise in the MEAN stack, I love bringing designs to life, optimizing user experiences, and developing scalable solutions.
        </div>
      </div>

      {/* Profile picture with animation */}
      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQFjXCH74sNXsw/profile-displayphoto-shrink_400_400/B56ZPjM1CqHoAk-/0/1734683611786?e=1740009600&v=beta&t=mDffF6w8N64LOpLkO0zb4MlPGBZGMHdH38RHVNEgdvk"
        alt="Abhishek Kumar"
        className="profile-pic"
      />

      {/* Table with details */}
      <table className="details-table">
        <tbody>
          <tr>
            <td><strong>Profession:</strong></td>
            <td>MEAN STACK WEB DEVELOPER</td>
          </tr>
          <tr>
            <td><strong>Address:</strong></td>
            <td>BARAHI NEWADA, VARANASI (221207)</td>
          </tr>
          <tr>
            <td><strong>Birthday:</strong></td>
            <td>JUNE 20, 2006</td>
          </tr>
          <tr>
            <td><strong>Study:</strong></td>
            <td>B.TECH, CSE from G.I.E.T UNIVERSITY</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AboutMe;
