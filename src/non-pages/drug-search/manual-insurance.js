import {
  CardContent,
  FormLabel,
  Grid,
  Button,
  
} from "@mui/material/";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import CustomTextField from "src/@core/components/mui/text-field";

const ManualInsurance = ({
  steps,
  setSteps,
  patientInsurance,
  setPatientInsurance,
}) => {
  const submitInsurance = (e) => {
    e.preventDefault();

    setSteps((steps) => steps + 1);
  };

  return (
    <>
      <CardContent >
        <form onSubmit={submitInsurance}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <CustomTextField
                fullWidth
                required={true}
                variant="outlined"
                size="small"
                placeholder="First Name"
                label="First Name"
                value={patientInsurance.firstName}
                onChange={(e) =>
                  setPatientInsurance({
                    ...patientInsurance,
                    firstName: e.target.value,
                  })
                }
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <CustomTextField
                fullWidth
                required={true}
                variant="outlined"
                size="small"
                placeholder="Last Name"
                label="Last Name"
                value={patientInsurance.lastName}
                onChange={(e) =>
                  setPatientInsurance({
                    ...patientInsurance,
                    lastName: e.target.value,
                  })
                }
              />
            </Grid>

            <Grid item xs={12} lg={6}>
            <FormLabel>
                   Date of Birth
                    <span className="req-color">*</span>
                  </FormLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      disableFuture
                      sx={{ width: "100%" }}
                      slotProps={{ textField: { size: "small" } }}
                      renderInput={(params) => <CustomTextField {...params} />}
                      onChange={(e) =>
                        setPatientInsurance({
                          ...patientInsurance,
                          dateOfBirth: e,
                        })
                      }
                      value={patientInsurance ?.dateOfBirth}
                    />
                  </LocalizationProvider>
            </Grid>

            <Grid item xs={12} lg={6}>
              <CustomTextField
                fullWidth
                required={true}
                variant="outlined"
                size="small"
                placeholder="Member ID"
                label="Member ID"
                type="text"
                value={patientInsurance.memberId}
                onChange={(e) =>
                  setPatientInsurance({
                    ...patientInsurance,
                    memberId: e.target.value,
                  })
                }
              />
            </Grid>

            <Grid item xs={12} lg={12}>
              <CustomTextField
                fullWidth
                required={true}
                variant="outlined"
                size="small"
                placeholder="Zip Code"
                label="Zip Code"
                type="number"
                value={patientInsurance.zipCode}
                onChange={(e) =>
                  setPatientInsurance({
                    ...patientInsurance,
                    zipCode: e.target.value,
                  })
                }
              />
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

            <Button variant="contained" type="submit">
              Next
            </Button>
          </Grid>
        </form>
      </CardContent>
    </>
  );
};

export default ManualInsurance;
