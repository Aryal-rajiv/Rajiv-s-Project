import { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Navbar } from './components/layout/Navbar';
import ProjectCard from './components/layout/ProjectCard';

const projects = [
  {
    title: "Impower Healthcare",
    description: "A WordPress Digital Marketing with custom theme and WooCommerce integration",
    image: "/images/impower.webp",
    link: "https://impowerhealthcare.com/",
    tags: ["WordPress", "Custom JS", "PHP"]
  },
  {
    title: "Rajiv's Portfolio",
    description: "Portfolio site for myself with all my expereince projects and skills and form to contact me",
    image: "/images/Portfolio.webp",
    link: "https://www.aryalrajiv.com.np/",
    tags: ["Express", "Bootstrap"]
  },
  {
    title: "Microsoft SSO Plugin",
    description: "Plugin to verify user with Azure AD annd get acess token",
    image: "/images/Plugin.webp",
    link: "https://github.com/Aryal-rajiv/Microsoft-Login-Plugin",
    tags: ["PHP", "Azure AD"]
  },
  {
    title: "Facebook Clone for Security Research",
    description: "Facebook clone to exploit bug found in encrpted chat of Facebook messenger",
    image: "/images/Security.webp",
    link: "https://facebook-login-page-five.vercel.app/",
    tags: ["Express", "Nodemailer, Bootstrap"]
  },
  {
    title: "FeriBrandIT - E-Commerce Site",
    description: "E-commerce site buit with React and Rest API",
    image: "/images/FeriBrandit.webp",
    link: "https://github.com/Aryal-rajiv/Final-project-7th-Sem/",
    tags: ["Express", "REST", "React"]
  },
  {
    title: "Qualify Express",
    description: "Wordpress Elementor Website Project, Elementor Templates as per need with Theme Customization",
    image: "/images/Qualify.webp",
    link: "https://qualifyexpress.com.au/",
    tags: ["WordPress", "Elementor", "CSS", "Javascript"]
  },
  {
    title: "Liberty Healthcare Services",
    description: "Custom CSS for Javascript for the custom feature Needed",
    image: "/images/Liberty.webp",
    link: "https://libertyhealthservices.com.au/",
    tags: ["WordPress", "Custom CSS", "Elementor Template"]
  },
  {
    title: "My Accountability Now",
    description: "Website for My Accountabilioty using WordPress in quicktime",
    image: "/images/My.webp",
    link: "https://myaccountabilitynow.org/",
    tags: ["WordPress", "Elementor",]
  },
  {
    title: "Sentient World",
    description: "WordPress Support for Sentient World",
    image: "/images/Sentient.webp",
    link: "https://sentientworld.org/",
    tags: ["WordPress", "Communication", "Facilitation"]
  }
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}