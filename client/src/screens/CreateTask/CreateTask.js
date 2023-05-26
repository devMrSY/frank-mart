import { useEffect, useState } from "react";
import { createResource, getTaskById } from "./CreateService";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import urls from "../../global/constants/UrlConstants";
import { useHistory } from "react-router-dom";

const fields = [
  {
    label: "Task name",
    name: "task_name",
  },
  {
    label: "Discription",
    name: "discription",
  },
  {
    label: "Start Time",
    name: "start_time",
  },
  {
    label: "End Time",
    name: "end_time",
  },
  {
    label: "Status",
    name: "status",
  },
];

function CreateTask() {
  const [taskInfo, setTaskInfo] = useState({});
  // const taskId = props.match.params.taskId;
  const history = useHistory();

  // const init = async () => {
  //   try {
  //     if (taskId) {
  //       const response = await getTaskById(taskId);
  //       setTaskInfo(response);
  //     }
  //   } catch (error) {
  //     alert(error.message ?? "something went wrong");
  //   }
  // };

  const handleSave = async () => {
    await createResource(taskInfo);
    history.push(urls.viewTaskViewPath);
  };

  const onChanageHandler = (event) => {
    setTaskInfo({ ...taskInfo, [event.target.name]: event.target.value });
  };

  return (
    <Card
      sx={{
        marginTop: 8,
      }}
    >
      <CardContent>
        {fields.map((item, index) => (
          <TextField
            sx={{ marginBottom: 2 }}
            label={item.label}
            name={item.name}
            value={taskInfo[item.name]}
            onChange={onChanageHandler}
            fullWidth
          />
        ))}
      </CardContent>
      <CardActions sx={{ marginTop: "auto" }}>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </CardActions>
    </Card>
  );
}

export default CreateTask;
