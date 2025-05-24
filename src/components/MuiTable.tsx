import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <>
      <h1>MuiTable Example</h1>
      <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Brandy",
    last_name: "Ramet",
    email: "bramet0@about.com",
    gender: "Female",
    ip_address: "145.227.224.219",
  },
  {
    id: 2,
    first_name: "Krispin",
    last_name: "Spracklin",
    email: "kspracklin1@goodreads.com",
    gender: "Non-binary",
    ip_address: "210.196.81.162",
  },
  {
    id: 3,
    first_name: "Paxon",
    last_name: "Leonarde",
    email: "pleonarde2@linkedin.com",
    gender: "Male",
    ip_address: "232.11.169.33",
  },
  {
    id: 4,
    first_name: "Marnie",
    last_name: "Cree",
    email: "mcree3@list-manage.com",
    gender: "Female",
    ip_address: "59.60.163.77",
  },
  {
    id: 5,
    first_name: "Carley",
    last_name: "Gabbetis",
    email: "cgabbetis4@ebay.com",
    gender: "Female",
    ip_address: "144.160.57.117",
  },
  {
    id: 6,
    first_name: "Zacharia",
    last_name: "Angus",
    email: "zangus5@oakley.com",
    gender: "Male",
    ip_address: "77.114.73.203",
  },
  {
    id: 7,
    first_name: "Jackelyn",
    last_name: "Cakebread",
    email: "jcakebread6@china.com.cn",
    gender: "Female",
    ip_address: "54.150.186.34",
  },
  {
    id: 8,
    first_name: "Camel",
    last_name: "Bridge",
    email: "cbridge7@purevolume.com",
    gender: "Polygender",
    ip_address: "80.208.157.210",
  },
  {
    id: 9,
    first_name: "Idalia",
    last_name: "Brackley",
    email: "ibrackley8@shutterfly.com",
    gender: "Female",
    ip_address: "58.142.209.10",
  },
  {
    id: 10,
    first_name: "Calla",
    last_name: "Spittle",
    email: "cspittle9@wunderground.com",
    gender: "Female",
    ip_address: "168.165.82.28",
  },
];
