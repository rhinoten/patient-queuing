import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={styles.heading}>
        Welcome to the Hospital Queue System
      </Typography>
      <Grid container spacing={3} sx={styles.grid}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={styles.card}>
            <Typography variant="h6">Total Patients Today</Typography>
            <Typography variant="h4">120</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={styles.card}>
            <Typography variant="h6">High Priority Cases</Typography>
            <Typography variant="h4">15</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={styles.card}>
            <Typography variant="h6">Available Staff</Typography>
            <Typography variant="h4">8</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

const styles = {
  container: {
    height: "100%",
    padding: 3,
    background: "linear-gradient(to bottom, #ffcccc, #ffe6e6, #ffffff)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "15px",
  },
  heading: {
    marginBottom: 4,
    color: "#d6336c",
  },
  grid: {
    width: "100%",
    justifyContent: "center",
  },
  card: {
    padding: 2,
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    background: "white",
  },
};

export default Dashboard;
