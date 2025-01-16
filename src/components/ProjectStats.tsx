// import {
//   Box,
//   Card,
//   CardContent,
//   Avatar,
//   Typography,
//   Grid,
//   LinearProgress,
// } from "@mui/material";
// import { deepPurple, green, blue } from "@mui/material/colors";

// // Generate dynamic colors for avatars
// const colors = [deepPurple[500], green[500], blue[500]];

// const ProjectStats = ({ stats }) => {
//   return (
//     <Box>
//       <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
//         Top Performers
//       </Typography>
//       <Grid
//         container
//         spacing={2}
//         sx={{
//           //   border: "1px solid blue",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         {stats.map((stat, index) => (
//           <Grid item xs={12} sm={6} md={4} key={stat.name}>
//             <Card
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 padding: 2,
//                 borderRadius: 2,
//                 boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <Avatar
//                 sx={{
//                   bgcolor: colors[index % colors.length],
//                   width: 56,
//                   height: 56,
//                   fontSize: "1.2rem",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {stat.name.charAt(0)}
//               </Avatar>
//               <CardContent sx={{ flex: 1, ml: 2 }}>
//                 <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                   {stat.name}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
//                   Rank: {stat.rank}
//                 </Typography>
//                 <LinearProgress
//                   variant="determinate"
//                   value={parseFloat(stat.rank)}
//                   sx={{
//                     height: 8,
//                     borderRadius: 5,
//                     backgroundColor: "#f0f0f0",
//                   }}
//                 />
//                 <Typography variant="body2" sx={{ color: "gray", mt: 1 }}>
//                   Calls Handled: {stat.calls}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ProjectStats;
