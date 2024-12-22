import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
} from "@mui/material";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    symptoms: [],
  });

  const symptomsList = [
    "Fever",
    "Cough",
    "Headache",
    "Shortness of Breath",
    "Chest Pain",
  ];

  const handleCheckboxChange = (symptom) => {
    setFormData((prev) => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter((item) => item !== symptom)
        : [...prev.symptoms, symptom],
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.formContainer}>
        <Typography variant="h4" gutterBottom sx={styles.heading}>
          Patient Form
        </Typography>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          sx={styles.textField}
        />
        <TextField
          label="Age"
          fullWidth
          margin="normal"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          sx={styles.textField}
        />
        <FormControl
          component="fieldset"
          margin="normal"
          sx={{ ...styles.formControl, flexDirection: "column" }} // stack vertically
        >
          <FormLabel component="legend" sx={styles.formLabel}>
            Gender
          </FormLabel>
          <RadioGroup
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          >
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        {/* Add space between Gender and Symptoms */}
        <Box sx={{ marginBottom: 2 }} />

        <FormControl
          component="fieldset"
          margin="normal"
          sx={{ ...styles.formControl, flexDirection: "column" }} // stack vertically
        >
          <FormLabel component="legend" sx={styles.formLabel}>
            Symptoms
          </FormLabel>
          {symptomsList.map((symptom) => (
            <FormControlLabel
              key={symptom}
              control={
                <Checkbox
                  checked={formData.symptoms.includes(symptom)}
                  onChange={() => handleCheckboxChange(symptom)}
                />
              }
              label={symptom}
              sx={styles.checkbox}
            />
          ))}
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          sx={styles.button}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    background: "linear-gradient(to bottom, #ffcccc, #ffe6e6, #ffffff)",
    minHeight: "100vh", // Ensures the background covers the entire screen height
    padding: 3,
    borderRadius: "15px",
  },
  formContainer: {
    maxWidth: 600,
    width: "100%",
    background: "white",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  },
  heading: {
    color: "#d6336c",
    fontSize: "2rem",
    marginBottom: 3,
  },
  textField: {
    marginBottom: 2,
    fontSize: "1.2rem",
  },
  formControl: {
    marginBottom: 3,
  },
  formLabel: {
    fontSize: "1.1rem",
    marginBottom: 1,
  },
  checkbox: {
    fontSize: "1.1rem",
  },
  button: {
    marginTop: 2,
    fontSize: "1.2rem",
    padding: "10px 0",
    borderRadius: "15px",
  },
};

export default Form;
