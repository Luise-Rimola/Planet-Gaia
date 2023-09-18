import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  alpha,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';





function createData(company, cem, cp, land, lem, lp, kontinent, kem, kp) {
  return {
    company,
    cem,
    cp,
    land,
    lem,
    lp,
    kontinent,
    kem,
    kp,
  };
}

const rows = [
  createData('Walmart', 611, 12.85, 'USA', 4.752, 89.4, 'Nordamerika', 5.316, 15),
  createData('State Grid',  530, 4.20, 'China', 12.466, 55.5, 'Asien', 22.449, 55),
  createData('Amazon',  513, 10.79, 'USA', 4.752, 89.4, 'Nordamerika', 5.316, 15),
  createData('Apple',  394, 8.20, 'USA', 4.752, 89.4, 'Nordamerika', 5.316, 15),
  createData('Shell',  286, 85.37, 'Großbritannien', 335, 0.6, 'Europa', 5.447, 15),
  createData('Trafigura',  98, 67.12, 'Niederlande', 146, 2.6, 'Europa', 5.447, 15),
  createData('Volkswagen',  293, 44.06, 'Deutschland', 665, 12.2, 'Europa', 5.447, 15),
  createData('TotalEnergies',  263, 87.08, 'Frankreich', 302, 5.5, 'Europa', 5.447, 15),
  createData('Samsung Electronics',  234, 37.38, 'Südkorea', 626, 2.7, 'Asien', 22.449, 55),
  createData('Microsoft',  198, 4.16, 'USA', 4.752, 89.4, 'Nordamerika', 5.316, 15),
  createData('Mercedes-Benz Group',  157, 23.60, 'Deutschland', 665, 12.2, 'Europa', 5.447, 15),
  createData('Home Depot', 157, 3.30, 'USA', 4.752, 89.4, 'Nordamerika', 5.316, 15),
  createData('Alibaba Group',  1290, 10.34, 'China', 12.466, 55.5, 'Asien', 22.449, 55),
  createData('E.ON',  121, 18.19, 'Deutschland', 665, 12.2, 'Europa', 5.447, 15),
  createData('Reliance Industries',  129, 4.87, 'Indien', 2.648, 11.7, 'Asien', 22.449, 55),
  createData('PayPal',  135, 2.84, 'USA', 4.752, 89.4, 'Nordamerika', 5.316, 15),
  createData('Hoffmann-La Roche',  16, 45.71, 'Schweiz', 35, 0.6, 'Europa', 5.447, 15),
  createData('Ferrari',  256, 80.25, 'Italien', 319, 5.8, 'Europa', 5.447, 15),
  createData('The Walt Disney Company',  189, 3.97, 'USA', 4.752, 89.4, 'Nordamerika', 5.316, 15),
  createData('Schwarz Gruppe',  125, 18.79, 'Deutschland', 665, 12.2, 'Europa', 5.447, 15),
  createData('JD.com',  62, 1.29, 'China', 12.466, 55.5, 'Asien', 22.449, 55),
  createData('IKEA',  28, 73.68, 'Schweden', 38, 0.6, 'Europa', 5.447, 15),
  createData('LVMH',  37, 12.25, 'Frankreich', 302, 5.5, 'Europa', 5.447, 15),
  createData('Seven & I Holdings',  259, 2.07, 'China', 12.466, 55.5, 'Asien', 22.449, 55),
  createData('Best Buy',  442, 9.30, 'USA', 4.752, 89.4, 'Nordamerika', 5.316, 15),
  createData('Inditex',  129, 55.84, 'Spanien', 231, 4.2, 'Europa', 5.447, 15),
  createData('Metro AG',  228, 34.28, 'Deutschland', 665, 12.2, 'Europa', 5.447, 15),
  createData('H&M',  24, 63.15, 'Schweden', 38, 0.6, 'Europa', 5.447, 15),
  createData('Coop',  23, 65.71, 'Schweiz', 35, 0.6, 'Europa', 5.447, 15),
  createData('Magnit',  190, 9.78, 'Russland', 1942, 35.6, 'Europa', 5.447, 15),
  createData('Empire Company',  189, 33.57, 'Kanada', 563, 10.5, 'Nordamerika', 5.316, 15),
  createData('Wesfarmers',  97, 26.43, 'Australien', 367, 87.7, 'Oceania', 418, 2.5),
  createData('FEMSA',  130, 31.10, 'Mexico', 418, 86.7, 'Mittelamerika', 482, 2.5),
  createData('S Group',  12, 31.57, 'Finnland', 38, 0.6, 'Europa', 5.447, 15),
  createData('Shoprite Holdings',  10, 2.29, 'Südafrika', 435, 4.3, 'Afrika', 1455, 5),
  createData('Vale do Rio',  121, 24.74, 'Brasilien', 489, 44.9, 'Südamerika', 1.087, 5),
  createData('Grupo Votorantim',  83, 16.9, 'Brasilien', 489, 44.9, 'Südamerika', 1.087, 5),
  createData('Vivo',  55, 11.24, 'Brasilien', 489, 44.9, 'Südamerika', 1.087, 5),
  createData('CEMIG',  43, 8.79, 'Brasilien', 489, 44.9, 'Südamerika', 1.087, 5),
  createData('Embraer',  13, 2.65, 'Brasilien', 489, 44.9, 'Südamerika', 1.087, 5),
  createData('Telmex',  16, 3.7, 'Mexico', 418, 86.7, 'Mittelamerika', 482, 2.5),
  createData('Grupo Salinas',  4, 3.7, 'Mexico', 418, 86.7, 'Mittelamerika', 482, 2.5),
  createData('Global Telecom Holding',  102, 39.38, 'Ägypten', 259, 17.8, 'Afrika', 1455, 5),
  createData('Omnium Nord Africain',  24, 32.87, 'Marokko', 73, 5, 'Afrika', 1455, 5),
  createData('Koç Holding',  34, 7.5, 'Türkei', 449, 2, 'Asien', 22.449, 55),
  createData('Saudi Telecom',  210, 35.83, 'Saudi-Arabien', 586, 2.6, 'Asien', 22.449, 55),
  createData('TEVA Pharmaceutical Industries Ltd.',  8, 13.55, 'Israel', 59, 0.2, 'Asien', 22.449, 55),
  createData('National Petrochemical Company',  19, 2.67, 'Iran', 710, 3.1, 'Asien', 22.449, 55),
  createData('Etisalat',  10, 5.18, 'VAE', 193, 0.8, 'Asien', 22.449, 55),
  createData('Emaar Properties',  68, 35.23, 'VAE', 193, 0.8, 'Asien', 22.449, 55),
  createData('Glencore',  7, 20.00, 'Schweiz', 35, 0.6, 'Europa', 5.447, 15),
  createData('AXA',  143, 47.35, 'Frankreich', 302, 5.5, 'Europa', 5.447, 15),
  createData('Trafigura',  98, 67.12, 'Niederlande', 146, 2.6, 'Europa', 5.447, 15),
  createData('Nestlé',  18, 51.42, 'Schweiz', 35, 0.6, 'Europa', 5.447, 15),
  createData('Bosch',  137, 20.91, 'Deutschland', 665, 12.2, 'Europa', 5.447, 15),
  createData('ArcelorMittal',  5, 62.50, 'Luxemburg', 8, 0.1, 'Europa', 5.447, 15),
  createData('Eni',  62, 19.43, 'Italien', 319, 5.8, 'Europa', 5.447, 15),
  createData('Intesa Sanpaolo',  42, 13.16, 'Italien', 319, 5.8, 'Europa', 5.447, 15),
  createData('Equinor',  35, 83.33, 'Norwegen', 42, 0.7, 'Europa', 5.447, 15),
  createData('BBVA',  29, 12.55, 'Spanien', 231, 4.2, 'Europa', 5.447, 15),
  createData('Renault',  66, 21.85, 'Frankreich', 302, 5.5, 'Europa', 5.447, 15),
  createData('Nordea',  15, 39.47, 'Finnland', 38, 0.6, 'Europa', 5.447, 15),
  createData('L Oréal',  29, 9.60, 'Frankreich', 302, 5.5, 'Europa', 5.447, 15),
  createData('KBC Group',  13, 13.68, 'Belgien', 95, 1.7, 'Europa', 5.447, 15),
  createData('Accenture',  29, 82.85, 'Irland', 35, 0.6, 'Europa', 5.447, 15),
  createData('Camelot Group',  17, 5.07, 'Großbritannien', 335, 0.6, 'Europa', 5.447, 15),
  createData('BBC',  13, 3.88, 'Großbrittanien', 335, 0.6, 'Europa', 5.447, 15),
  createData('Poste Italiane',  13, 4.07, 'Italien', 319, 5.8, 'Europa', 5.447, 15),
  createData('Westpac',  21, 5.72, 'Australien', 367, 87.7, 'Oceania', 418, 2.5),
  createData('Goodman Group',  83, 22.61, 'Australien', 367, 87.7, 'Oceania', 418, 2.5),
  createData('Nippon Yūsei',  123, 11.34, 'Japan', 1084, 4.8, 'Asien', 22.449, 55),
  createData('Foxconn',  135, 46.87, 'Taiwan', 288, 1.2, 'Asien', 22.449, 55),
  createData('CK Hutchison Holdings',  13, 39.39, 'Hongkong', 33, 0.1, 'Asien', 22.449, 55),
  createData('PTT PCL',  48, 17.84, 'Thailand', 269, 1.1, 'Asien', 22.449, 55),
  createData('POSCO',  45, 7.18, 'Südkorea', 626, 2.7, 'Asien', 22.449, 55),
  createData('CTT Correios de Portugal',  7, 18.42, 'Portugal', 38, 0.7, 'Europa', 5.447, 15),
  createData('Jerónimo Martins',  18, 44.7, 'Portugal', 38, 0.7, 'Europa', 5.447, 15),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'company',
    numeric: false,
    disablePadding: true,
    label: 'Unternehmen',
  },
  {
    id: 'cem',
    numeric: true,
    disablePadding: true,
    label: 'Mt',
  },
  {
    id: 'cp',
    numeric: true,
    disablePadding: true,
    label: '%',
  },
  {
    id: 'land',
    numeric: false,
    disablePadding: true,
    label: 'Land',
  },
  {
    id: 'lem',
    numeric: true,
    disablePadding: false,
    label: 'Mt',
  },
  {
    id: 'lp',
    numeric: true,
    disablePadding: false,
    label: '%',
  },
  {
    id: 'kontinent',
    numeric: false,
    disablePadding: true,
    label: 'Kontinent',
  },
  {
    id: 'kem',
    numeric: true,
    disablePadding: false,
    label: 'Mt',
  },
  {
    id: 'kp',
    numeric: true,
    disablePadding: false,
    label: '%',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};



function EnhancedTableToolbar(props) {
  const {
    order,
    orderBy,
    onOrderChange,
    onPageChange,
    page, 
    rowsPerPage,
    onRowsPerPageChange,
    filterText,
    onFilterTextChange,
    selectedCountry,
    onCountryChange,
    selectedContinent,
    onContinentChange
  } = props;

  const uniqueCountries = Array.from(new Set(rows.map((row) => row.land.toUpperCase())));
  const uniqueContinents = Array.from(new Set(rows.map((row) => row.kontinent.toUpperCase())));


  const handleFilterChange = (event) => {
    onFilterTextChange(event.target.value);
  };

  const handleCountryChange = (event) => {
    onCountryChange(event.target.value);
  };

  const handleContinentChange = (event) => {
    onContinentChange(event.target.value);
  };

  const handleFilterButtonClick = () => {
    const newFilteredRows = rows.filter(
      (row) =>
        row.company.toLowerCase().includes(filterText.toLowerCase()) &&
        (selectedCountry === '' || row.land.toLowerCase() === selectedCountry.toLowerCase()) &&
        (selectedContinent === '' || row.kontinent.toLowerCase() === selectedContinent.toLowerCase())
    );

    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const newVisibleRows = stableSort(newFilteredRows, getComparator(order, orderBy)).slice(
      startIndex,
      endIndex
    );

    onPageChange(0); 
    props.onVisibleRowsChange(newVisibleRows);
  };



  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <TextField
        label="Filter nach Unternehmen"
        variant="standard"
        sx={{ marginLeft: '20px', minWidth: '200px' }}
        value={filterText} 
        onChange={handleFilterChange}
      />
      <FormControl variant="standard" sx={{ marginLeft: '20px', minWidth: '200px' }}>
        <InputLabel htmlFor="country-select">Land</InputLabel>
        <Select
          native
          value={selectedCountry}
          onChange={handleCountryChange}
          inputProps={{
            name: 'country',
            id: 'country-select',
          }}
        >
          <option value="" />
          {uniqueCountries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ marginLeft: '20px', minWidth: '200px' }}>
        <InputLabel htmlFor="continent-select">Kontinent</InputLabel>
        <Select
          native
          value={selectedContinent}
          onChange={handleContinentChange}
          inputProps={{
            name: 'continent',
            id: 'continent-select',
          }}
        >
          <option value="" />
          {uniqueContinents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </Select>
      </FormControl>
      
      
      
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('company');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(35);
  const [filterText, setFilterText] = React.useState('');
  const [selectedCountry, setSelectedCountry] = React.useState('');
  const [selectedContinent, setSelectedContinent] = React.useState('');
  const [visibleRows, setVisibleRows] = React.useState(
    stableSort(rows, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    )
  );

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

   const handleFilterButtonClick = () => {
    const newFilteredRows = rows.filter(
      (row) =>
        row.company.toLowerCase().includes(filterText.toLowerCase()) &&
        (selectedCountry === '' || row.land.toLowerCase() === selectedCountry.toLowerCase()) &&
        (selectedContinent === '' || row.kontinent.toLowerCase() === selectedContinent.toLowerCase())
    );
    setFilteredRows(newFilteredRows); 
    setPage(0);
  };

  React.useEffect(() => {
    const filteredRows = rows.filter(
      (row) =>
        row.company.toLowerCase().includes(filterText.toLowerCase()) &&
        (selectedCountry === '' || row.land.toLowerCase() === selectedCountry.toLowerCase()) &&
        (selectedContinent === '' || row.kontinent.toLowerCase() === selectedContinent.toLowerCase())
    );

    const sortedFilteredRows = stableSort(filteredRows, getComparator(order, orderBy));

    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const newVisibleRows = sortedFilteredRows.slice(startIndex, endIndex);

    setVisibleRows(newVisibleRows);
  }, [order, orderBy, page, rowsPerPage, filterText, selectedCountry, selectedContinent]);

  // ...

  return (
    <Box sx={{ width: '100%', alignItems: 'center' }}>
    <Paper sx={{ padding: '30px', marginTop: '80px', width: '100%', mb: 2 }}>
    <EnhancedTableToolbar
          order={order}
          orderBy={orderBy}
          onOrderChange={setOrder}
          onPageChange={setPage}
          page={page} 
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={setRowsPerPage}
          filterText={filterText}
          onFilterTextChange={setFilterText}
          onCountryChange={setSelectedCountry}
          onContinentChange={setSelectedContinent}
        />
        <TableContainer sx={{ marginTop: '80px' }}>
          <Table sx={{ minWidth: 650 }} aria-labelledby="tableTitle" size="medium">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                const key = `table-row-${row.company}-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={key}
                    selected={false}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {row.company}
                    </TableCell>

                    <TableCell align="right">{row.cem}</TableCell>
                    <TableCell align="right">{row.cp}</TableCell>
                    <TableCell align="left">{row.land}</TableCell>
                    <TableCell align="right">{row.lem}</TableCell>
                    <TableCell align="right">{row.lp}</TableCell>
                    <TableCell align="left">{row.kontinent}</TableCell>
                    <TableCell align="right">{row.kem}</TableCell>
                    <TableCell align="right">{row.kp}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[35, 50, 75]}
            component="div"
            count={visibleRows.length} 
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </Paper>
    </Box>
  );
}