import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import ViewTable from "./components/Table";
import { getTask } from "./ViewTaskService";
import { Box } from "@mui/material";

function EditViewTaskPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const response = await getTask();
      setTasks(response.reverse() ?? []);
    } catch (error) {
      alert(error.message ?? "something went wrong");
    }
  };

  const getTableBody = () => {
    return (
      <Box sx={{ marginTop: 8, padding: "0px 28px" }}>
        <ViewTable data={tasks} init={init} />
      </Box>
    );
  };
  return (
    <>
      {/* <Navbar /> */}
      {getTableBody()}
    </>
  );
}

export default EditViewTaskPage;
