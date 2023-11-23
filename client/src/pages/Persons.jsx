import React, { useEffect, useState } from 'react';
import { deletePerson, getPersons, getPersonFilter } from '../services/personServices';
import { Link } from 'react-router-dom';
import {
    Button,
    Container,
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    IconButton,
    Pagination,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Input,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import logo from '../assets/logo.png';
import Background from '../assets/Background.png';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';
import Controls from "../components/controls/Controls";

const Persons = () => {
    const [personsList, setPersonsList] = useState([]);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [record, setRecord] = useState({});
    const [openConfirmBox, setOpenConfirmBox] = useState(false);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const columns = ['name', 'age', 'email'];
    // Function to fetch persons based on the search term
    const fetchPersons = async () => {
        const personsData = await getPersonFilter(searchTerm);
        const allPersons = personsData.data.map((person) => ({
            id: person._id,
            name: person.name,
            age: person.age,
            email: person.email,
        }));


        setPersonsList(allPersons);
    };
    // useEffect to fetch persons when the component mounts or when the search term changes
    useEffect(() => {
        fetchPersons();
    }, [searchTerm]);

    // Pagination handlers
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
    };
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return (

        <div
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',


            }}
        >
            <img
                src={logo}
                alt="Logo"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '75px',
                    height: '40px',

                }}
            />
            <Container maxWidth="md" style={{ paddingTop: '50px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <FormControl>
                        <InputLabel htmlFor="search" style={{
                            fontSize: '18px',

                        }} >Filter Name or Age</InputLabel>
                        <Input
                            id="search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </FormControl>
                    <div style={{ marginLeft: 'auto' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<AddCircleOutlineIcon />}
                            onClick={() => {
                                navigate(`/persons/new`);
                            }}
                        >
                            New Person
                        </Button>
                    </div>
                </div>

                <Paper style={{
                    background: 'rgba(255, 255, 255, 0.55)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 30px #4747470b',
                    backdropFilter: 'blur(1px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                }}>

                    <Table >
                        <TableHead>
                            <TableRow>
                                {columns.map((column, index) => (
                                    <TableCell key={index} style={{ fontWeight: 'bold', textAlign: 'left', }} >{column}</TableCell>
                                ))}
                                <TableCell style={{ fontWeight: 'bold', textAlign: 'left' }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {personsList.slice(startIndex, endIndex).map((person, index) => (
                                <TableRow key={index}>

                                    <TableCell style={{
                                        border: '2px solid #ccc',
                                    }}>{person.name}</TableCell>
                                    <TableCell style={{
                                        border: '2px solid #ccc',
                                    }}>{person.age}</TableCell>
                                    <TableCell style={{
                                        border: '2px solid #ccc',
                                    }}>{person.email}</TableCell>
                                    <TableCell style={{
                                        border: '2px solid #ccc',
                                    }}>

                                        <IconButton
                                            color="primary"
                                            onClick={() => {

                                                navigate(`/persons/${person.id}`)


                                            }}
                                        >
                                            <EditIcon />
                                        </IconButton>

                                        <IconButton
                                            color="error"
                                            onClick={() => {
                                                setOpenConfirmBox(true);
                                                setRecord(person);
                                            }}

                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>



                    <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                        <FormControl sx={{ marginRight: 'auto' }}>
                            <Select
                                labelId="rows-per-page-label"
                                id="rows-per-page"
                                value={rowsPerPage}
                                onChange={handleChangeRowsPerPage}

                            >
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={15}>15</MenuItem>

                            </Select>


                        </FormControl>


                        <Pagination
                            count={Math.ceil(personsList.length / rowsPerPage)}
                            page={page}
                            onChange={handleChangePage}
                            sx={{ marginLeft: 'auto' }}
                        />
                    </div>
                </Paper>

            </Container >
            <Controls.ConfirmBox
                open={openConfirmBox}
                closeDialog={() => { setOpenConfirmBox(false) }}
                record={record}
                deleteFunction={deletePerson}
                fetch={fetchPersons}
            ></Controls.ConfirmBox>
        </div >
    );
};

export default Persons;