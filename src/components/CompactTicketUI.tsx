import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  MenuItem,
  IconButton,
  Chip,
  Button,
  Tooltip,
  Box,
} from "@mui/material";
// import PersonIcon from "@mui/icons-material/PriorityLow";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";

const CompactTicketUI = () => {
  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: "20px auto",
        padding: 2,
        boxShadow: 2,
        borderRadius: 2,
      }}
    >
      <CardContent>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" fontWeight="bold">
            Delay in Project Completion
          </Typography>
          <Chip label="Open" size="small" color="primary" />
        </Box>
        <Typography variant="body2" color="textSecondary">
          Project: <strong>World of Joy E 612A</strong>
        </Typography>

        <Grid
          container
          spacing={1}
          alignItems="center"
          sx={{ marginTop: 1, marginBottom: 2 }}
        >
          <Grid item>
            <Tooltip title="Priority: Low">
              <PersonIcon color="primary" />
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Time">
              <AccessTimeIcon color="action" />
            </Tooltip>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              10/12/2024, 4:55 PM
            </Typography>
          </Grid>
        </Grid>

        {/* Form */}
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              size="small"
              label="Category"
              variant="outlined"
            >
              <MenuItem value="category1">Category 1</MenuItem>
              <MenuItem value="category2">Category 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              size="small"
              label="SubCategory"
              variant="outlined"
            >
              <MenuItem value="subcategory1">SubCategory 1</MenuItem>
              <MenuItem value="subcategory2">SubCategory 2</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        <TextField
          fullWidth
          label="Description"
          size="small"
          margin="dense"
          multiline
          rows={2}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Comments"
          size="small"
          margin="dense"
          multiline
          rows={2}
          variant="outlined"
        />

        {/* Collaborators */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginTop={2}
        >
          <Chip
            label="vishal.jaiswal@gera.in"
            size="small"
            onDelete={() => console.log("Remove collaborator")}
            icon={<PersonIcon />}
            color="primary"
            sx={{ marginRight: 1 }}
          />
          <Tooltip title="Add Collaborator">
            <IconButton size="small" color="primary">
              <AddIcon />
            </IconButton>
          </Tooltip>
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
            variant="outlined"
            color="success"
            size="small"
            onClick={() => console.log("Complete")}
          >
            Complete
          </Button>
          <Button
            variant="outlined"
            color="warning"
            size="small"
            onClick={() => console.log("Pending")}
          >
            Pending
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CompactTicketUI;
