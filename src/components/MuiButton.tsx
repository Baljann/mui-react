import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

import AdbIcon from "@mui/icons-material/Adb";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import {useState} from 'react'

export const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);
  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string []) => {
setFormats(updatedFormats)
  }

  return (
    <Stack spacing={4}>
      <hr />
      <Stack display="block" spacing={2} direction="row">
        <Button variant="text" href="#">
          text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <hr />
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <hr />
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <hr />
      <Stack display="block" spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<AdbIcon />}
          disableRipple
          onClick={() => alert("Clicked")}
        >
          Start Icon
        </Button>
        <Button variant="contained" endIcon={<AdbIcon />} disableElevation>
          End Icon
        </Button>
        <IconButton aria-label="adb" color="success" size="small">
          <AdbIcon />
        </IconButton>
      </Stack>
      <hr />
      <Stack display="block" spacing={2} direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignement button group"
        >
          <Button onClick={() => alert("Top clicked")}>Top</Button>
          <Button>Center</Button>
          <Button>Bottom</Button>
        </ButtonGroup>
      </Stack>
      <hr />
<Stack direction='row'>
  <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange}>
    <ToggleButton value='bold' aria-label='bold'>Bold</ToggleButton>
    <ToggleButton value='italic' aria-label='italic'>Italic</ToggleButton>
    <ToggleButton value='underlined' aria-label='underlined'>Underlined</ToggleButton>
  </ToggleButtonGroup>
</Stack>

    </Stack>
  );
};

//* href becomes anchor tag  *
//
