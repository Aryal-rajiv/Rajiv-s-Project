import { Card, CardContent, CardMedia, Typography, Chip, Box, Button, Stack } from '@mui/material';
import { ArrowRightAlt } from '@mui/icons-material';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const ProjectCard = ({ title, description, image, link, tags }: ProjectCardProps) => {
  return (
    <Card sx={{ 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }
    }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ 
            objectFit: 'cover',
            width: '100%',
            height: '200px'
         }}
      />
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h3">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {tags.map((tag) => (
            <Chip 
              key={tag} 
              label={tag} 
              size="small" 
              sx={{ 
                backgroundColor: '#1f1f1f',
                fontSize: '0.7rem'
              }} 
            />
          ))}
        </Stack>
      </CardContent>
      
      <Box sx={{ p: 2 }}>
        <Button 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<ArrowRightAlt />}
          fullWidth
          variant="contained"
          size="small"
          sx={{
            backgroundColor: '#4F46E5',
            '&:hover': {
              backgroundColor: '#4338CA'
            }
          }}
        >
          {link.startsWith('http') ? 'Visit Site' : 'View Details'}
        </Button>
      </Box>
    </Card>
  );
};

export default ProjectCard;