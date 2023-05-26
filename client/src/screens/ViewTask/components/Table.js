import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  TablePagination,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import urls from "../../../global/constants/UrlConstants";
import { deleteTaskById } from "../ViewTaskService";

const ViewTable = ({ data, init }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogBox, setIsDialogBox] = useState({ taskId: "", open: false });

  const history = useHistory();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  // Filter the data based on the search term
  const filteredData = data?.filter((item) =>
    item?.task_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const editTask = (taskId) => {
    history.push(urls.editTaskViewPath + taskId);
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await deleteTaskById(taskId);
      init(response);
    } catch (error) {
      alert(error);
    }
  };

  const getConfirmation = () => {
    return (
      <>
        <Dialog
          // fullScreen={fullScreen}
          open={isDialogBox.open}
          onClose={() => setIsDialogBox({ open: false })}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this task ??
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={() => setIsDialogBox({ open: false })}>
              Close
            </Button>
            <Button
              onClick={() => {
                deleteTask(isDialogBox.taskId);
                setIsDialogBox({ open: false });
              }}
              autoFocus
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };

  return (
    <div>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={handleSearch}
        variant="outlined"
        margin="normal"
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task Name</TableCell>
              <TableCell>Discription</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.length &&
              paginatedData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.task_name}</TableCell>
                  <TableCell>{item.discription}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    <DeleteIcon
                      onClick={() =>
                        setIsDialogBox({ taskId: item.id, open: true })
                      }
                    />
                    <EditIcon onClick={() => editTask(item.id)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {getConfirmation()}
    </div>
  );
};

export default ViewTable;
