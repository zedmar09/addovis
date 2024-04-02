import { Grid, Card, CardHeader, Divider, Typography } from "@mui/material";

import ManualInsurance from "./manual-insurance";

const PatientInsurance = ({
  steps,
  setSteps,
  patientInsurance,
  setPatientInsurance,
}) => {
  return (
    <>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 10 }}>
        <Grid item xs={11} md={9} lg={10}>
          <Card sx={{ borderRadius: 0 }}>
            <CardHeader
              title={
                <>
                  <Typography variant="h4">
                  Enter Patient Insurance
                  </Typography>
                </>
              }
              sx={{ backgroundColor: "#f5f5f5" }}
            />
            <Divider />

            <ManualInsurance
              steps={steps}
              setSteps={setSteps}
              patientInsurance={patientInsurance}
              setPatientInsurance={setPatientInsurance}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default PatientInsurance;
