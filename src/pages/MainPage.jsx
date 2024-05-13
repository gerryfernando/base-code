import {
  Typography,
  Grid,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import {
  CheckCircleOutlineOutlined,
  HourglassEmptyOutlined,
  ScheduleOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const tasks = [
  {
    id: 3,
    component: "Button",
    variant: "All",
    status: "Done",
    path: "/test-button",
  },
  {
    id: 6,
    component: "Form",
    variant: "All Variant",
    status: "In Progress",
    path: "/test-form",
  },
  {
    id: 12,
    component: "Table and Pagination",
    status: "To Do",
    path: "/test-table",
  },
  { id: 13, component: "Typography", status: "Done", path: "/" },
  { id: 14, component: "Tabs", status: "In Progress", path: "/test-tabs" },
  { id: 15, component: "Stepper", status: "Done", path: "/test-stepper" },
  { id: 16, component: "Pagination", status: "To Do", path: "/pagination" },
  {
    id: 18,
    component: "Accordion",
    status: "Done",
    path: "/test-accordion",
  },
  {
    id: 19,
    component: "Not Found",
    status: "Done",
    path: "/test-not-found",
  },
  {
    id: 20,
    component: "Toaster",
    status: "Done",
    path: "/test-toaster",
  },
];

const getStatusIcon = (status) => {
  switch (status) {
    case "To Do":
      return <HourglassEmptyOutlined />;
    case "In Progress":
      return <ScheduleOutlined />;
    case "Done":
      return <CheckCircleOutlineOutlined />;
    default:
      return null;
  }
};

const MainPage = () => {
  const navigate = useNavigate();

  const handleTaskClick = (path) => {
    navigate(path);
  };

  return (
    <Grid container minHeight="100vh">
      <Grid
        item
        xs={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "#36a0c4" }}
      >
        <Stack color="white">
          <Typography fontSize={50} fontWeight={600}>
            Main Page
          </Typography>
          <Typography variant="body1" component="p">
            Welcome to the base component website for Jasindo projects!
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6} style={{ maxHeight: "100vh", overflowY: "auto" }}>
        <List>
          {tasks.map((task) => (
            <ListItem
              button
              key={task.id}
              onClick={() => handleTaskClick(task.path)}
              sx={{
                backgroundColor:
                  task.status === "Done"
                    ? "lightGreen"
                    : task.status === "In Progress"
                    ? "orange"
                    : "inherit",
                "&:hover": {
                  backgroundColor:
                    task.status === "Done"
                      ? "lightGreen"
                      : task.status === "In Progress"
                      ? "orange"
                      : "inherit",
                },
              }}
            >
              <ListItemIcon>{getStatusIcon(task.status)}</ListItemIcon>
              <ListItemText
                primary={`${task.component} ${
                  task.variant ? task.variant : ""
                }`}
                secondary={`Status: ${task.status}`}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default MainPage;
