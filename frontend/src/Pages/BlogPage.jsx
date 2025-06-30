import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
// import Grid from "@mui/material/Unstable_Grid2";
import BlogCard from '../components/Blogs/BlogCard';
import blogData from '../Data/blogData';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const BlogPage = () => {
  return (
    <>
    <Navbar />
    <Container maxWidth={false} sx={{ maxWidth: "1330px", mt: 4, mb: 6 }}>
    <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
            fontWeight: "bold",
            color: "rgb(66, 33, 26)", // chocolate tone
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "2rem",
            fontFamily: "Helvetica, sans-serif",
            boxShadow: "0 4px 10px rgba(53, 23, 2, 0.15)", 
            padding: "1rem",
            borderRadius: "8px",
        }}
    >
    Our Blog Insights
    </Typography>
      <Grid container spacing={5}>
        {blogData.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Container>
    <Footer />
    </>
  );
};

export default BlogPage;
