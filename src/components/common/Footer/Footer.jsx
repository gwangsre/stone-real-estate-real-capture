import React, { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import './Footer.css';

const Footer = () => {
  const [footerText, setFooterText] = useState('© 2025 Stone Real Estate. 123 Paramatta Street, Sydney, Australia');

  useEffect(() => {
    const fetchFooterText = async () => {
      try {
        const response = await fetch('/api/v1/footer');
        if (response.ok) {
          const data = await response.json();
          if (data?.message) {
            setFooterText(data.message);
          }
        }
      } catch (error) {
        console.log('Could not fetch footer text:', error);
        // Keep default text if fetch fails
      }
    };

    fetchFooterText();
  }, []);

  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" sx={{ whiteSpace: 'pre-line' }}>
          {footerText}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;