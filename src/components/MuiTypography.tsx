import {Typography, Box} from '@mui/material'

export const MuiTypography = () => {
  return (
    <Box sx={{ border: '1px solid black', padding: 2, marginBottom: 4 }}>
      <h1>MuiTypography Examples </h1>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4'>h4 Heading</Typography>
      <Typography variant='h5'>h5 Heading</Typography>
    </Box>
   );
}

