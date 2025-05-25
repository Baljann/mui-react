import { Box, Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import {useState} from 'react'

export const MuiChip = () => {
  const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3']);

  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Box sx={{ border: '1px solid black', padding: 2, marginBottom: 4 }}>

      <h1>MuiChip Examples</h1>
      <Stack direction="row" spacing={1}>
        <Chip label="Chip" color="primary" size="small" icon={<FaceIcon />} />
        <Chip
          label="Chip outlined"
          color="secondary"
          size="small"
          variant="outlined"
          avatar={<Avatar>V</Avatar>}
        />
        <Chip label="Click" color="success" onClick={() => alert("Clicked")} />
        <Chip label="Delete"
        color="error"
        onClick={() => alert("Clicked")}
        onDelete={() => console.log('Delete handler called')} />
        {chips.map((chip) => (
       <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)}/>
        ))}
      </Stack>
      </Box>
  );
};

