import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Grid,
  Button,
  Alert,
} from "@mui/material/";
import InputMask from "react-input-mask";
import Swal from "sweetalert2";
import Icon from "src/@core/components/icon";
import BlankLayout from "src/@core/layouts/BlankLayout";
import CustomTextField from "src/@core/components/mui/text-field";

const PatientConfirmation = ({ steps, setSteps }) => {
  const nextClick = () => {
    Swal.fire({
      title:
        "The patient's prescription has been sent. The pharmacy has been notified to have the prescription ready. ",
      text: `Note to prescriber: Rx must be submitted via EMR or Fax to the pharmacy.`,
      icon: "success",
      confirmButtonColor: "#072142",
    });
  };

  return (
    <>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 10 }}>
        <Grid item xs={11} md={9} lg={10}>
          <Card elevation={1}>
            <CardHeader
              title={
                <Typography variant="h4">
                 Patient Notification
                </Typography>
              }
               sx={{ backgroundColor: "#f5f5f5" }}
             
            />
            <Divider />
            <Alert severity="success" sx={{ borderRadius: 0 }}>
              <strong>Note to prescriber:</strong> Rx must be submitted via EMR
              or Fax to the pharmacy
            </Alert>
            <Divider />

            <CardHeader
              title={<Typography variant="h5">Send Confirmation</Typography>}
              sx={{ backgroundColor: "#f5f5f5" }}
            />
            <Divider />

            <CardContent>
              <Grid container spacing={5} >
                <Grid item xs={12} lg={6} md={6} sm={12}>
                  <Typography sx={{ mb: 1 }}>Prescriber NPI:</Typography>
                  <CustomTextField
                    fullWidth
                    required={true}
                    variant="outlined"
                    size="small"
                    placeholder="Prescriber NPI"
                    type="text"
                  />
                </Grid>

                <Grid item xs={12} lg={6} md={6} sm={12}>
                  <Typography sx={{ mb: 1 }}>Patient Cell:</Typography>
                  <InputMask
                mask="(999) 999-9999"

                // value={pharmacyProfile.fax}
                // onChange={(e) =>
                //   setPharmacyProfile({
                //     ...pharmacyProfile,
                //     fax: e.target.value,
                //   })
                // }
              >
                {(inputProps) => (
                  <CustomTextField
                    fullWidth
                    required={true}
                    variant="outlined"
                    size="small"
                    placeholder="(123) 456-7890"
                     type="text"
                    {...inputProps}
                  />
                )}
              </InputMask>
                </Grid>
              </Grid>
            </CardContent>

            <Divider />

            <CardHeader
                    title={
                     <>
                     <Grid container>
                        <Grid item lg = {4} md = {6} sm = {12} xs = {12}>
                        <Typography variant="h5" >Drug Name: <strong style = {{color: '#072142'}}>&lt;&lt;Drug Name&gt;&gt;</strong></Typography>
                     
                         </Grid>

                         <Grid item lg = {4} md = {6} sm = {12} xs = {12}>
                         <Typography variant="h5" >   Quantity: <strong style = {{color: '#072142'}}>&lt;&lt;Quantity&gt;&gt;</strong> <strong style = {{color: '#072142'}}>&lt;&lt;Quantity_Type_Description&gt;&gt;</strong>
                    </Typography>
                         </Grid>

                         <Grid item lg = {4} md = {6} sm = {12} xs = {12}>
                         <Typography variant="h5" >   Patient Copay: <strong style = {{color: '#072142'}}>&lt;&lt;$xx&gt;&gt;</strong>
                    </Typography>
                         </Grid>
                     </Grid>
                      
                     </>
                    }
                    sx={{ backgroundColor: "#f5f5f5" }}
                  />
                     <Divider />

            <Card sx={{ borderRadius: 0, border: 0 }}>
                  <CardHeader
                    title={
                      <Typography variant="h5">Pharmacy Information</Typography>
                    }
                    sx={{ backgroundColor: "#f5f5f5" }}
                  />
                     <Divider />
                  <CardContent>
                    <Grid container spacing={5} sx={{ mt: -7 }}>
                      <Grid item xs={12} lg={6}>
                        <Typography color="secondary" sx={{ mb: 1 }}>
                          Pharmacy Name:
                        </Typography>
                        <Typography variant="h5" color="primary">
                          Community Pharmacy
                        </Typography>
                      </Grid>

                      <Grid item xs={12} lg={6}>
                        <Typography color="secondary" sx={{ mb: 1 }}>
                          Address:
                        </Typography>
                        <Typography variant="h5" color="primary">
                          New York, NY
                        </Typography>
                      </Grid>

                      <Grid item xs={12} lg={6}>
                        <Typography color="secondary" sx={{ mb: 1 }}>
                          NABP:
                        </Typography>
                        <Typography variant="h5" color="primary">
                          1123987635
                        </Typography>
                      </Grid>

                      <Grid item xs={12} lg={6}>
                        <Typography color="secondary" sx={{ mb: 1 }}>
                          NPI:
                        </Typography>
                        <Typography variant="h5" color="primary">
                          1123987635
                        </Typography>
                      </Grid>

                      <Grid item xs={12} lg={6}>
                        <Typography color="secondary" sx={{ mb: 1 }}>
                          Phone Number:
                        </Typography>
                        <Typography variant="h5" color="primary">
                        (111) 222-3333
                        </Typography>
                      </Grid>

                      <Grid item xs={12} lg={6}>
                        <Typography color="secondary" sx={{ mb: 1 }}>
                          Fax Number:
                        </Typography>
                        <Typography variant="h5" color="primary">
                        (111) 222-3333
                        </Typography>
                      </Grid>

                 
                    </Grid>
                  </CardContent>
                </Card>
                <Divider />
      

            <Grid container>
           
             

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  m: 5
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setSteps((steps) => steps - 1)}
                >
                  Cancel
                </Button>

                <Button variant="contained" onClick={nextClick}>
                  Confirm
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default PatientConfirmation;
