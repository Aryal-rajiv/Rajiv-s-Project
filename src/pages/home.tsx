import { Container, Grid, Typography } from '@mui/material';
import ProjectCard from '../components/layout/ProjectCard';

const home = [
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
    description: "WordPress development support along with custom features",
    image: "/images/Sentient.webp",
    link: "https://sentientworld.org/",
    tags: ["WordPress", "Jet Engine", "Smart Filters"]
  },
  {
    title: "Impower Healthcare",
    description: "A WordPress Digital Marketing with custom theme and WooCommerce integration",
    image: "/images/impower.webp",
    link: "https://impowerhealthcare.com/",
    tags: ["WordPress", "Custom JS", "PHP"]
  },
  {
    title: "Microsoft SSO Plugin",
    description: "Plugin to verify user with Azure AD annd get acess token",
    image: "/images/Plugin.webp",
    link: "https://github.com/Aryal-rajiv/Microsoft-Login-Plugin",
    tags: ["PHP", "Azure AD"]
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
    title: "TagMyFav",
    description: "Site revamp with feature like Custom Pricing Table",
    image: "/images/Tagmy.webp",
    link: "https://https://tagmyfav.com/",
    tags: ["WordPress", "Elementor",]
  },
  {
    title: "LawToolBox",
    description: "Feature like Deadline Calculator",
    image: "/images/Lawtool.webp",
    link: "https://lawtoolbox.com/",
    tags: ["API Integration", "JavaScript", "CSS"]
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