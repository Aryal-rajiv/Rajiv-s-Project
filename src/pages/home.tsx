import { Container, Grid, Typography } from '@mui/material';
import ProjectCard from '../components/layout/ProjectCard';

const home = [
  {
    title: "Mangobyte",
    description: "Worked on Munltiple projects as a WordPress/PHP Developer",
    image: "/images/Portfolio.webp",
    link: "../mangobyte",
    tags: ["Express", "Bootstrap"]
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
    title: "My Accountability Now",
    description: "Six Websites for Asia Accountability initiative within 2 weeks",
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


  return (
    <>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
        </Typography>
        <Grid container spacing={3}>
          {home.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}