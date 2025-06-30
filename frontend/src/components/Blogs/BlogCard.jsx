import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: '16px', boxShadow: '0 4px 12px' }}>
        <CardMedia
          component="img"
          height="200"
          image={blog.image}
          alt={blog.title}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.description}
          </Typography>
        </CardContent>
        <Button
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ m: 2, mt: 'auto' }}
          variant="contained"
        >
          Read More
        </Button>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
