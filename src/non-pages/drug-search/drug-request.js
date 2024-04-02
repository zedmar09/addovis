import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Typography,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  IconButton,
  FormLabel,
  FormControlLabel,
} from "@mui/material";

import usstatecityzip from "src/utilities/usstatecityzip";
import CustomTextField from "src/@core/components/mui/text-field";
import CustomAutocomplete from "src/@core/components/mui/autocomplete";
import Icon from "src/@core/components/icon";

import Swal from "sweetalert2";
import axiosClient from "src/http-request/axios-request";

const StyledButton = styled(Button)(({ theme, color = "primary" }) => ({
  ":hover": {
    color: "white",
    backgroundColor: "#0e3973",
  },
  backgroundColor: "#072142",
}));

const DrugRequest = ({ openDialog, handleClose, drugInfo, setHideRestock }) => {
  //get all states
  const statesList = [...new Set(usstatecityzip.map((item) => item.state_name))]
    .sort()
    .map((stateName) => ({ state: stateName }));
    

  const [request, setRequest] = useState({
    monthlyPrescription: null,
    prescriberNpi: null,
    prescriberName: null,
    state: null,
  });

  const submitDrugRequest = (e) => {
    e.preventDefault();

    Swal.fire({
      title: `Submit Drug Request`,
      text: `Are you sure you want to submit this drug as request?`,
      icon: "question",
      showCancelButton: true,
      cancelButtonColor: "#ea5456",
      confirmButtonColor: "#072142",
      cancelButtonText: "Cancel",
      confirmButtonText: "Confirm",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: `Submitting Drug Request`,
        //   html: "Please wait...",
        //   confirmButtonColor: "#009cc2",
        //   allowEscapeKey: false,
        //   allowOutsideClick: false,
        //   didOpen: () => {
        //     Swal.showLoading();
        //   },
        // });

        
        Swal.fire({
          title: "Success!",
          text: `Your request for Paracetamol has been submitted`,
          icon: "success",
          confirmButtonColor: "#072142",
        });
        handleClose()
        setHideRestock(null)
      }
    });
  };

  return (
    <form onSubmit={submitDrugRequest}>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        maxWidth="xs"
        fullWidth={true}
      >
        <form>
          <DialogTitle
            id="alert-dialog-title"
            sx={{ backgroundColor: "#1c52a1" }}
          >
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="h5" color={"#fff"} sx={{ mb: 2 }}>
                Drug Request
              </Typography>
              <IconButton sx={{ mt: -4, color: "#fff" }} onClick={handleClose}>
                <Icon icon="bx:x" />
              </IconButton>
            </Grid>
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={12}>
                <FormLabel sx={{ fontSize: 13 }}>Drug Name</FormLabel>
                <Typography variant="h4" color="primary">
                  {drugInfo?.name}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant="outlined"
                  size="small"
                  placeholder="Monthly Prescription"
                  label="Monthly Prescription"
                  type="number"
                  InputProps={{ inputProps: { min: 1 } }}
                  onChange={(e) =>
                    setRequest({
                      ...request,
                      monthlyPrescription: e.target.value,
                    })
                  }
                  value={request.monthlyPrescription}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant="outlined"
                  size="small"
                  placeholder="Prescriber NPI"
                  label="Prescriber NPI"
                  type="text"
                  onChange={(e) =>
                    setRequest({
                      ...request,
                      prescriberNpi: e.target.value,
                    })
                  }
                  value={request.prescriberNpi}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant="outlined"
                  size="small"
                  placeholder="Prescriber Name"
                  label="Prescriber Name"
                  type="text"
                  onChange={(e) =>
                    setRequest({
                      ...request,
                      prescriberName: e.target.value,
                    })
                  }
                  value={request.prescriberName}
                />
              </Grid>

              <Grid item xs={12}>
                <FormLabel sx={{ fontSize: 13 }}>
                  Select State<span className="req-color">*</span>
                </FormLabel>
                <CustomAutocomplete
                  sx={{ width: "100%" }}
                  options={statesList}
                  getOptionLabel={(option) => option.state}
                  getOptionSelected={(option, value) =>
                    option.state === value.state
                  }
                  renderInput={(params) => (
                    <CustomTextField
                      {...params}
                      fullWidth
                      required
                      placeholder="Select State"
                    />
                  )}
                  value={request?.state}
                  onChange={(e, values) =>
                    setRequest({
                      ...request,
                      state: values,
                    })
                  }
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions className="dialog-actions-dense">
            <Button variant="contained" type="submit">
              Submit
            </Button>

            <Button variant="tonal" color="error" onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </form>
  );
};

export default DrugRequest;
