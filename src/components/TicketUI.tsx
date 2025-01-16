import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Chip,
  Button,
  //   IconButton,
  Box,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
// import PersonIcon from "@mui/icons-material/PriorityLow";

const TicketUI = () => {
  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "20px auto", padding: 2, boxShadow: 3 }}>
      <CardContent>
        {/* Header */}
        <Typography variant="h5" gutterBottom>
          Delay in Project Completion
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Project: <strong>World of Joy E 612A</strong>
        </Typography>
        <Grid container alignItems="center" spacing={1} sx={{ marginTop: 2 }}>
          <Grid item>
            <PersonIcon color="primary" />
          </Grid>
          <Grid item>
            <Typography variant="body2">Priority: Low</Typography>
          </Grid>
          <Grid item>
            <AccessTimeIcon color="action" />
          </Grid>
          <Grid item>
            <Typography variant="body2">10/12/2024, 4:55 PM</Typography>
          </Grid>
          <Grid item>
            <Chip label="Open" color="primary" size="small" />
          </Grid>
        </Grid>

        {/* Form */}
        <Box sx={{ marginTop: 3 }}>
          <TextField
            select
            fullWidth
            label="Category"
            margin="normal"
            variant="outlined"
          >
            <MenuItem value="category1">Category 1</MenuItem>
            <MenuItem value="category2">Category 2</MenuItem>
          </TextField>
          <TextField
            select
            fullWidth
            label="SubCategory"
            margin="normal"
            variant="outlined"
          >
            <MenuItem value="subcategory1">SubCategory 1</MenuItem>
            <MenuItem value="subcategory2">SubCategory 2</MenuItem>
          </TextField>
          <TextField
            fullWidth
            label="Description"
            margin="normal"
            multiline
            rows={3}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Comments"
            margin="normal"
            multiline
            rows={2}
            variant="outlined"
          />
        </Box>

        {/* Collaborators */}
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="subtitle2">Collaborators:</Typography>
          <Chip
            label="vishal.jaiswal@gera.in"
            onDelete={() => console.log("Remove collaborator")}
            icon={<PersonIcon />}
            color="primary"
            sx={{ margin: 1 }}
          />
        </Box>

        {/* Actions */}
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            color="success"
            onClick={() => console.log("Complete")}
          >
            Complete
          </Button>
          <Button
            variant="outlined"
            color="warning"
            onClick={() => console.log("Customer Action Pending")}
          >
            Customer Action Pending
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TicketUI;
