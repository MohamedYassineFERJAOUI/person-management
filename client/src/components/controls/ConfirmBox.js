import {
    Button,
    Dialog,
    DialogContent,
    Fade,
    Grid,
    IconButton,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { forwardRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import toast, { Toaster } from 'react-hot-toast';

// ConfirmBox component to display a confirmation dialog
function ConfirmBox({ open, closeDialog, deleteFunction, record, fetch }) {
    // Handling the delete action
    const handleDelete = async () => {
        // Invoking the delete function and displaying toast notifications
        let deletePromise = deleteFunction(record.id);
        toast.promise(deletePromise, {
            loading: 'Deleting...',
            success: <b>Deleted Successfully...!</b>,
            error: <b>Could not Delete.</b>
        });
        // Waiting for the deletePromise to resolve and then fetching updated data
        await deletePromise.then(fetch);
        // Closing the dialog after successful deletion

        closeDialog();

    }
    return (
        <div >
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <Dialog
                fullWidth
                open={open}
                maxWidth="sm"
                scroll="body"
                onClose={closeDialog}
                onBackdropClick={closeDialog}
                sx={{

                    "& .MuiDialog-paper": {
                        background: 'rgba(255, 255, 255, 0.55)',
                        borderRadius: '16px',
                        boxShadow: '0 4px 30px #4747470b',
                        backdropFilter: 'blur(1px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        width: '450px',
                        height: '170px',

                    },
                }}
            >
                <DialogContent sx={{
                    px: 8, py: 6, display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: "10px"
                }}>
                    <Button
                        style={{ color: '#338cf1' }}

                        size="medium"
                        onClick={closeDialog}
                        sx={{ position: "absolute", right: "1rem", top: "1rem" }}
                    >
                        X
                    </Button>
                    <Grid container spacing={3}>
                        <Grid
                            item
                            xs={12}
                            sx={{ display: "flex", flexDirection: "column", gap: "1rem", }}
                        >

                            <Typography ><h3>Delete {record.name}</h3>


                                Are you sure you want to delete {record.name}?
                            </Typography>
                            <Grid
                                item
                                xs={12}
                                sx={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}
                            >


                                <Button onClick={closeDialog} size="medium" variant="contained" color="primary" >
                                    Cancel
                                </Button>


                                <Button onClick={handleDelete} size="medium" variant="contained" color="error"  >
                                    Delete
                                </Button>


                            </Grid>


                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div >
    );
}

export default ConfirmBox;