import { Box, Grid, Typography, Chip, Divider } from "@mui/material";
import { AccessTime, Event, Comment, Work } from "@mui/icons-material";

const TaskCard = () => {
  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "20px auto",
        padding: 4,
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.15)",
        borderRadius: 4,
        bgcolor: "#f9f9f9",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      Title
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          mb: 3,
          textAlign: "center",
          color: "primary.main",
        }}
      >
        Task Details
      </Typography>
      <Divider sx={{ mb: 3 }} />
      {/* Task Information */}
      <Grid container spacing={3}>
        {/* Due Date */}
        <Grid item xs={12} sm={6}>
          <Box display="flex" alignItems="center" gap={1}>
            <Event color="primary" />
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              Due Date:
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              2024-12-11
            </Typography>
          </Box>
        </Grid>

        {/* HOD Date */}
        <Grid item xs={12} sm={6}>
          <Box display="flex" alignItems="center" gap={1}>
            <Event color="secondary" />
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              HOD Date:
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              2024-12-12
            </Typography>
          </Box>
        </Grid>

        {/* Due Days */}
        <Grid item xs={12} sm={6}>
          <Box display="flex" alignItems="center" gap={1}>
            <AccessTime color="action" />
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              Due Days:
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              1
            </Typography>
          </Box>
        </Grid>

        {/* Department */}
        <Grid item xs={12} sm={6}>
          <Box display="flex" alignItems="center" gap={1}>
            <Work color="action" />
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              Department:
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              ITE
            </Typography>
          </Box>
        </Grid>

        {/* Comments */}
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" gap={1}>
            <Comment color="action" />
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              Comments:
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              ml: 4,
              mt: 0.5,
              bgcolor: "#f0f0f0",
              p: 1,
              borderRadius: 2,
            }}
          >
            test
          </Typography>
        </Grid>
      </Grid>
      {/* Divider */}
      <Divider sx={{ my: 3 }} />
      {/* Priority and Status */}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Chip
            icon={<Work />}
            label="LOW"
            sx={{
              fontWeight: "bold",
              bgcolor: "success.light",
              color: "success.dark",
              px: 2,
            }}
          />
        </Grid>
        <Grid item xs={6} textAlign="right">
          <Chip
            label="Open"
            color="info"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              px: 2,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskCard;
