
import { Container, Grid, Typography } from '@mui/material';
import ProjectCard from '../components/layout/ProjectCard';

const accountability = [
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
    description: "Website for My Accountabilioty using WordPress in quicktime",
    image: "/images/My.webp",
    link: "https://myaccountabilitynow.org/",
    tags: ["WordPress", "Elementor",]
  },
  {
    title: "LawToolBox",
    description: "WordPress Support for Sentient World",
    image: "/images/Sentient.webp",
    link: "https://sentientworld.org/",
    tags: ["WordPress", "Communication", "Facilitation"]
  }
];

export default function Accountability() {


  return (
    <>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
        </Typography>
        <Grid container spacing={3}>
          {accountability.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}