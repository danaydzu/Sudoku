import React from 'react';
import {Box, Typography} from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      padding: '15px',
      width:'100%',
      boxShadow: '0 0 0.3em rgba(36,36,36,0)',
      fontSize: '1vw',
      background: 'radial-gradient(#b0e633, #53ef7d)',
    }}>
      <Typography variant='body1'>Team № 1: Новиков Юрий, Демиркапы Денис, Раджабов Нозим, Гиллер Михаил, Черников Антон, Чуприна Виктор, Ненада Даниил </Typography>
    </Box>
  );
};

export default Footer;