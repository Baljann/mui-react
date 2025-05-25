import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const MuiBreadcrumbs = () => {
  return (
    <Box sx={{ border: '1px solid black', padding: 2, marginBottom: 4 }}>
      <h1>MuiBreadcrumbs Example</h1>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={3}
        itemsAfterCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text-primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};
