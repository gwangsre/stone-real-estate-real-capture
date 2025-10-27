import React, { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { API_CONFIG } from '../../../config/api.js';
import './Footer.css';

const Footer = () => {
  const [footerText, setFooterText] = useState('© 2025 Stone Real Estate. 123 Paramatta Street, Sydney, Australia');

  useEffect(() => {
    const fetchFooterText = async () => {
      try {
        console.log('Fetching footer from:', API_CONFIG.FOOTER.PUBLIC); // Debug log
        const response = await fetch(API_CONFIG.FOOTER.PUBLIC);
        if (response.ok) {
          const data = await response.json();
          console.log('Footer data received:', data); // Debug log
          // Handle different response formats
          const message = data?.message || data?.data?.message || data;
          if (message && typeof message === 'string') {
            setFooterText(message);
          }
        } else {
          console.log('Footer fetch failed with status:', response.status);
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