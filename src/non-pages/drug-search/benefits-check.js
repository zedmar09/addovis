import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Grid,
  Button,
  Box,
} from "@mui/material/";

import Swal from "sweetalert2";
import Icon from "src/@core/components/icon";
import BlankLayout from "src/@core/layouts/BlankLayout";
import CustomTextField from "src/@core/components/mui/text-field";

const BenefitsCheck = ({ steps, setSteps, patientInsurance }) => {
  //submit search
  //   const submitSearch = (e) => {
  //     e.preventDefault();

  //     const { name, quantity } = drugInfo;

  //     if (name?.toUpperCase() == "PARACETAMOL") {
  //       setHideRestock(true);
  //     } else {
  //       setHideRestock(false);
  //     }
  //   };

  //  const confirmClick = async () => {
  //   Swal.fire({
  //     title: `Drug Confirmation`,
  //     text: `Are you sure you want to select Ibuprufen?`,
  //     icon: "question",
  //     showCancelButton: true,
  //     cancelButtonColor: "#ea5456",
  //     confirmButtonColor: "#072142",
  //     cancelButtonText: "Cancel",
  //     confirmButtonText: "Confirm",
  //     reverseButtons: true,
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // Swal.fire({
  //       //   title: `Submitting Drug Request`,
  //       //   html: "Please wait...",
  //       //   confirmButtonColor: "#009cc2",
  //       //   allowEscapeKey: false,
  //       //   allowOutsideClick: false,
  //       //   didOpen: () => {
  //       //     Swal.showLoading();
  //       //   },
  //       // });

  //       setSteps(steps => steps + 1)

  //     }
  //   });
  //  }

  return (
    <>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 10 }}>
        <Grid item xs={11} md={9} lg={10}>
          <Card elevation={1}>
            <CardHeader
              title={
                <Typography variant="h4">Insurance Coverage</Typography>
              }
               sx={{ backgroundColor: "#f5f5f5" }}
             
            />
            <Divider />
            <CardContent>
              <form>
                <Grid container spacing={2} alignItems="center">

                  {patientInsurance?.firstName == 'John' ? <>
                  
                  <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Icon
                      icon="iconamoon:check-circle-1-thin"
                      fontSize={100}
                      color = '#22bb33'
                    />
                    <Typography variant="h2" sx={{mb:3}} color = '#22bb33'>
                    Insurance Verified!
                    </Typography>

                    <Typography variant="h5">Patient insurance coverage for <strong>&lt;&lt;Drug Name Here&gt;&gt;</strong> is over <strong>$100</strong> based on insurance information provided.</Typography>
                

                    <Box sx={{ mt: 10,  }}>
                      <Button variant="outlined" sx={{ mr: 3, mb: 4 }} onClick={() => setSteps(steps => steps + 1)} >
                        See further details
                      </Button>

                      <Button
                        variant="outlined"
                        color = 'secondary'
                         sx={{ mr: 3, mb: 4 }}
                        onClick={() => setSteps((steps) => steps - 2)}
                      >
                       Perform another search
                      </Button>
                    </Box>
                  </Grid>
                  
                  </> : <>

                  <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Icon
                      icon="ph:x-circle-light"
                      fontSize={100}
                      color = '#bb2124'
                    />
                    <Typography variant="h2" sx={{mb:3}} color = '#bb2124'>
                    Insurance Coverage was not successful
                    </Typography>

                    <Typography variant="h5"> Re-enter insurance?</Typography>
                

                    <Box sx={{ mt: 10 }}>
                      <Button variant="outlined" sx={{ mr: 3 }} onClick={() => setSteps((steps) => steps - 1)} >
                        Yes
                      </Button>

                      <Button
                        variant="outlined"
                        color = 'secondary'
                         sx={{ mr: 3 }}
                        onClick={() => setSteps((steps) => steps - 2)}
                      >
                       No
                      </Button>
                    </Box>
                  </Grid>     
                  </>}
                 
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
                    onClick={() => setSteps((step) => step - 1)}
                  >
                    Cancel
                  </Button>

                  <Button
                    variant="contained"
                    onClick={() => setSteps((step) => step + 1)}
                    >
                    Next
                  </Button>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default BenefitsCheck;
