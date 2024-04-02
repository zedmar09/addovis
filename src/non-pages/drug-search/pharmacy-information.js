import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Grid,
  Button,
  Alert,
  FormControlLabel,
  Checkbox
} from "@mui/material/";

import Swal from "sweetalert2";


const PharmacyInformation = ({ steps, setSteps }) => {
  

  return (
    <>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 10 }}>
        <Grid item xs={11} md={9} lg={10}>
          <Card elevation={1}>
            <CardHeader
              title={
                <Typography variant="h4">
                  Pharmacy Stocking
                </Typography>
              }
              sx={{ backgroundColor: "#f5f5f5" }}
           
            />
            <Divider />
            <Alert severity="success" sx={{ borderRadius: 0 }}>
              {/* <strong>Note to prescriber:</strong> Rx must be submitted via EMRor Fax to the pharmacy.
              <br /> */}
             Note to prescriber:<strong>&lt;&lt;Quantity;&gt;&gt; - &lt;&lt;ROA&gt;&gt;</strong> of <strong>&lt;&lt;Drug Name&gt;&gt;</strong> is available for <strong>&lt;&lt;$xx.xx&gt;&gt;</strong> patient copay at participating pharmacies including:
            </Alert>
            <Divider />
            <CardContent>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{ mt: 3 }}
              >
                <Grid item xs={11} md={9} lg={7}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} lg={6}>
                      <Typography color="secondary" sx={{ mb: 1 }}>
                        Pharmacy Name:
                      </Typography>
                      <Typography variant="h4" color="primary">
                        Community Pharmacy
                      </Typography>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <Typography color="secondary" sx={{ mb: 1 }}>
                        Address:
                      </Typography>
                      <Typography variant="h4" color="primary">
                        New York, NY
                      </Typography>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <Typography color="secondary" sx={{ mb: 1 }}>
                        NABP:
                      </Typography>
                      <Typography variant="h4" color="primary">
                        1123987635
                      </Typography>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <Typography color="secondary" sx={{ mb: 1 }}>
                        NPI:
                      </Typography>
                      <Typography variant="h4" color="primary">
                        1123987635
                      </Typography>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <Typography color="secondary" sx={{ mb: 1 }}>
                        Phone Number:
                      </Typography>
                      <Typography variant="h4" color="primary">
                      (111) 222-3333
                      </Typography>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <Typography color="secondary" sx={{ mb: 1 }}>
                        Fax Number:
                      </Typography>
                      <Typography variant="h4" color="primary">
                      (111) 222-3333
                      </Typography>
                    </Grid>

                    <Grid item xs = {12} sx={{mt:5}}>
                      <FormControlLabel
                   label={<Typography variant="h5">Notified to have this prescription ready</Typography>}
                  control={<Checkbox  defaultChecked = {true}/>}
                />
                      </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 7,
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setSteps((steps) => steps - 1)}
                >
                  Cancel
                </Button>

                <Button variant="contained" onClick={() => setSteps((steps) => steps + 1)}>
                  Next
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default PharmacyInformation;
