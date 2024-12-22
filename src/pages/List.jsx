import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Paper,
} from "@mui/material";

const ListPage = () => {
  const [patients] = useState([
    {
      id: 1,
      name: "John Doe",
      description:
        "Severe headache and fever, accompanied by fatigue and chills. The patient also reports sensitivity to light and nausea. Symptoms have been persistent for the last 48 hours and have not improved with over-the-counter medication. A thorough examination is recommended for proper diagnosis.",
      priority: "red",
      doctor: "Dr. Smith",
    },
    {
      id: 2,
      name: "Jane Roe",
      description:
        "Mild cough with occasional shortness of breath. The patient has a history of asthma but has not had any recent flare-ups. The cough is dry and persistent, especially at night. There is no fever, but the patient reports feeling generally fatigued.",
      priority: "green",
      doctor: "Dr. Adams",
    },
    {
      id: 3,
      name: "Mark Lee",
      description:
        "Experiencing shortness of breath, dizziness, and chest tightness. The patient has a history of smoking and reports increased physical exertion in recent days. The symptoms worsen with physical activity and improve slightly with rest. There is concern for potential cardiovascular issues.",
      priority: "orange",
      doctor: "Dr. Brown",
    },
    {
      id: 4,
      name: "Emily Clark",
      description:
        "Severe abdominal pain and bloating, particularly after meals. The patient reports nausea and vomiting with no relief from antacids. The pain is sharp and localized to the lower right quadrant. Family history includes a diagnosis of gallstones, and an ultrasound is advised.",
      priority: "orange",
      doctor: "Dr. Wilson",
    },
    {
      id: 5,
      name: "Sarah Miller",
      description:
        "Persistent dry eyes, headaches, and occasional blurred vision. The patient works long hours in front of a computer and reports frequent eye strain. Symptoms have worsened in the past month. The patient also reports mild back pain due to poor posture during work hours.",
      priority: "orange",
      doctor: "Dr. Martinez",
    },
    {
      id: 6,
      name: "David Harris",
      description:
        "Experiencing chronic knee pain, especially after prolonged standing or walking. The patient has a history of mild arthritis and reports stiffness in the morning. Pain is localized to the right knee, with limited mobility and swelling during flare-ups. Physical therapy is recommended.",
      priority: "green",
      doctor: "Dr. Green",
    },
    {
      id: 7,
      name: "Anna Williams",
      description:
        "Recent weight gain and increased thirst. The patient also reports frequent urination and fatigue. There is a family history of diabetes, and the patient has not been following a healthy diet. A blood sugar test is necessary to rule out diabetes or prediabetes.",
      priority: "orange",
      doctor: "Dr. Clark",
    },
    {
      id: 8,
      name: "Chris Johnson",
      description:
        "Painful swelling in the left ankle after an injury during sports. The patient reports difficulty walking and has noticeable bruising. The swelling has not reduced with ice and elevation. X-rays are recommended to rule out any fractures or ligament damage in the ankle.",
      priority: "red",
      doctor: "Dr. Walker",
    },
  ]);

  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.patientList}>
        <Typography variant="h5" gutterBottom sx={styles.heading}>
          Patients List
        </Typography>
        <List>
          {patients.map((patient) => (
            <ListItemButton
              key={patient.id}
              onClick={() => setSelectedPatient(patient)}
              sx={styles.listItemButton}
            >
              <ListItem sx={styles.listItem}>
                <ListItemText primary={patient.name} />
              </ListItem>
            </ListItemButton>
          ))}
        </List>
      </Box>
      <Box sx={styles.patientDetails}>
        {selectedPatient ? (
          <Paper elevation={3} sx={styles.patientDetailsCard}>
            <Typography variant="h6" sx={styles.detailTitle}>
              Patient Details
            </Typography>
            <Typography sx={styles.detailText}>
              <strong>Name:</strong> {selectedPatient.name}
            </Typography>
            <Typography sx={styles.detailText}>
              <strong>Description:</strong> {selectedPatient.description}
            </Typography>
            <Typography sx={styles.detailText}>
              <strong>Priority:</strong>
              <span
                style={{
                  color: selectedPatient.priority,
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                {selectedPatient.priority.toUpperCase()}
              </span>
            </Typography>
            <Typography sx={styles.detailText}>
              <strong>Assigned Doctor:</strong> {selectedPatient.doctor}
            </Typography>
          </Paper>
        ) : (
          <Typography sx={styles.selectPatientText}>
            Select a patient to view details
          </Typography>
        )}
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    height: "100%",
    display: "flex",
    p: 3,
    background: "linear-gradient(to bottom, #ffcccc, #ffe6e6, #ffffff)",
    borderRadius: "15px",
  },
  patientList: {
    flex: 1,
    mr: 2,
    background: "white",
    padding: 2,
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  patientDetails: {
    flex: 2,
    background: "white",
    padding: 2,
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    color: "#d6336c",
    fontSize: "1.8rem", // Increased font size for heading
  },
  listItemButton: {
    borderRadius: "15px",
    "&:hover": {
      backgroundColor: "#f8d7da",
    },
  },
  listItem: {
    padding: 1,
  },
  patientDetailsCard: {
    padding: 3,
    borderRadius: "20px",
  },
  detailTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: 2, // Spacing between the title and details
  },
  detailText: {
    fontSize: "1.2rem", // Increased font size for details
    marginBottom: 1.5, // Increased spacing between details
  },
  selectPatientText: {
    fontSize: "1.2rem",
    color: "#888",
  },
};

export default ListPage;
