import React from 'react';
import './Projects.css'; // Import CSS for styling

const projectsData = [
  {
    title: 'Project 1',
    imageUrl: 'https://st2.depositphotos.com/5963850/9255/v/950/depositphotos_92557858-stock-illustration-chef-pizza-banner.jpg',
    description: 'PIZZA SHOP using reacjs and boostrap5',
    githubUrl: 'https://github.com/yourusername/project1'
  },
  {
    title: 'Project 2',
    imageUrl: 'https://code-projects.org/wp-content/uploads/2018/01/Screenshot-1706000000000000.png',
    description: 'Hospital Management System using php and my sql',
    githubUrl: 'https://github.com/yourusername/project2'
  },
  {
    title: 'Project 3',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5622AQHMpy4vxAKhJw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1719320473384?e=1730937600&v=beta&t=gdKhfVrkXXzRzzK-dxMHUv312pjOipInKkVJCbvj828',
    description: 'TRAVELLING WEBSITE FOR TOURIST USING RECT JS AND CSS',
    githubUrl: 'https://github.com/yourusername/project3'
  },
  {
    title: 'Project 4',
    imageUrl: 'https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Machine+Learning+R/iris-machinelearning.png',
    description: 'IRIS FLOWER PREDICTION USING PYTHON',
    githubUrl: 'https://github.com/yourusername/project4'
  },
  {
    title: 'Project 5',
    imageUrl: 'https://repository-images.githubusercontent.com/641986864/6da05aad-185a-457d-ac34-2ec7992a28ca',
    description: 'Disease Prediction using python',
    githubUrl: 'https://github.com/yourusername/project4'
  },
  {
    title: 'Project 5',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/0*rgxBZQVyrT1iiLIA.png',
    description: 'todo list using reactjs and mangodb',
    githubUrl: 'https://github.com/yourusername/project4'
  },
  {
    title: 'Project 6',
    imageUrl: 'https://feeds.abplive.com/onecms/images/uploaded-images/2022/01/31/0dfe05d1f843d2705c096b93ccb80e54_original.jpg?impolicy=abp_cdn&imwidth=1200',
    description: 'youtube clone using reactjs,boostrapcssand nodejs,mangodb',
    githubUrl: 'https://github.com/yourusername/project4'
  },
  {
    title: 'Project 7',
    imageUrl: 'https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/11/Web-series.jpg?fit=1041%2C635&ssl=1',
    description: 'filmzo website uing reactjs,nodejs,mangodb',
    githubUrl: 'https://github.com/yourusername/project4'
  },
  
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div id="Projects" className="projects-container"> {/* Added ID here */}
      <h2 className="projects-headline">Projects</h2>
      <div className="projects-boxes">
        {projectsData.map((project, index) => (
          <div key={index} className="project-box">
            <div className="project-image" style={{ backgroundImage: `url(${project.imageUrl})` }} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
