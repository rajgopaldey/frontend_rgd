import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button
} from '@mui/material';

function TodoApp() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0b1120 0%, #111827 45%, #1e3a8a 100%)',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: '#ff4d4f',
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            WELCOME TO DEY INFO APP
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mt: 1,
              color: '#ff8a80',
              fontStyle: 'italic',
              fontWeight: 600,
            }}
          >
            Organized by Rajgopal Dey
          </Typography>
        </Box>

        <Grid container spacing={5} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, mb: 3, lineHeight: 1.2 }}
            >
              We Build Modern Cloud & DevOps Solutions
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: '#d1d5db', mb: 4, fontSize: '1.05rem' }}
            >
              Dey Info App is a professional IT solutions platform specializing in
              Cloud Infrastructure, DevOps Automation, Kubernetes, CI/CD pipelines,
              and scalable web application deployment on Azure.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '14px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  boxShadow: '0 10px 24px rgba(37,99,235,0.35)',
                }}
              >
                Explore Services
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '14px',
                  fontWeight: 'bold',
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.35)',
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"
              alt="Developer working on cloud infrastructure"
              sx={{
                width: '100%',
                borderRadius: '24px',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
              }}
            />
          </Grid>
        </Grid>

        {/* Services Section */}
        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: 'center', fontWeight: 700, mb: 5 }}
          >
            Our Core Services
          </Typography>

          <Grid container spacing={3}>
            {[
              {
                title: 'Cloud Infrastructure',
                desc: 'Azure resource provisioning, networking, security, and monitoring.',
              },
              {
                title: 'DevOps Automation',
                desc: 'CI/CD pipelines using GitHub Actions, Docker, and Terraform.',
              },
              {
                title: 'Kubernetes',
                desc: 'AKS deployment, scaling, ingress, and container orchestration.',
              },
            ].map((service) => (
              <Grid item xs={12} md={4} key={service.title}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: '20px',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                      {service.title}
                    </Typography>

                    <Typography sx={{ color: '#cbd5e1' }}>
                      {service.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            mt: 10,
            py: 3,
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.12)',
            color: '#cbd5e1',
          }}
        >
          <Typography variant="body2">
            © 2026 Dey Info App. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default TodoApp;