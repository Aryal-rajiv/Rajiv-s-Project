import { Card, CardContent, CardMedia, Typography, Chip, Stack, Box } from '@mui/material';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <Card sx={{ 
      maxWidth: 300, 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      border: featured ? '2px solid #4F46E5' : 'none'
    }}>
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt={project.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          {project.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};