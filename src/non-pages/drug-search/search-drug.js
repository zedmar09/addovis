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
import CustomTextField from "src/@core/components/mui/text-field";
import DrugRequest from "./drug-request";

const SearchDrug = ({setSteps, hideReStock, setHideRestock, drugInfo, setDrugInfo}) => {
 
  //OPEN DRUG DIALOG
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpen = () => setOpenDialog(true);
  const handleClose = () => setOpenDialog(false);

  //submit search
  const submitSearch = (e) => {
    e.preventDefault();

    const { name, quantity } = drugInfo;

    if (name?.toUpperCase() == "PARACETAMOL") {
      setHideRestock(true);
    } else {
      setHideRestock(false);
    }
  };

 const confirmClick = async () => {
  setSteps(steps => steps + 1)
 }

  return (
    <>
       <Grid container spacing={2} justifyContent="center" sx={{ mt: 10 }}>
        <Grid item xs={11} md={9} lg={10}>
          <Card elevation={1}>
            <CardHeader
              title={<Typography variant="h4">Drug Lookup</Typography>}
               sx={{ backgroundColor: "#f5f5f5" }}
            
            />
            <Divider />
            <CardContent>
              <form onSubmit={submitSearch}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} lg={6} md = {12} sm = {12}>
                    <CustomTextField
                      fullWidth
                      required={true}
                      variant="outlined"
                      size="small"
                      placeholder="Drug Name"
                      label="Drug Name"
                      value={drugInfo.name}
                      onChange={(e) =>
                        setDrugInfo({ ...drugInfo, name: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} lg={4} md = {12} sm = {12}>
                    <CustomTextField
                      fullWidth
                      required={true}
                      variant="outlined"
                      size="small"
                      placeholder="Quantity"
                      label="Quantity"
                      type="number"
                      value={drugInfo.quantity}
                      InputProps={{ inputProps: { min: 1 } }}
                      onChange={(e) =>
                        setDrugInfo({ ...drugInfo, quantity: e.target.value })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} lg={2} md = {12} sm = {12}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mr: 3, width: "100%", mt: 4 }}
                    >
                      <Icon
                        icon="iconamoon:search-bold"
                        style={{ marginRight: 5 }}
                      />
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>

            <Divider />

            {hideReStock != null && !hideReStock && (
              <>
                <CardContent
                  sx={{
                      backgroundColor: "#dce6f1",
                  }}
                >
                  <Typography variant="h4" color = '#072142'><strong>2</strong> Drug(s) Available</Typography>
               
                </CardContent>
                <Divider />

                <CardContent sx={{ backgroundColor: "#fafafa" }}>
                  <Grid container spacing={3}>
                    <Grid item lg={10}>
                      <Typography variant="h4">Ibuprufen</Typography>A drug used
                      to treat fever, swelling, pain, and redness by preventing
                      the body from making a substance that causes inflammation.
                    </Grid>
                    <Grid item lg={2}>
                      <Button variant="tonal" sx={{ mr: 3, width: "100%" }} onClick={confirmClick}>
                        <Icon icon="fe:check" style={{ marginRight: 5 }} />
                        Select Drug
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />

                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item lg={10}>
                      <Typography variant="h4">Biogesic</Typography>
                      Paracetamol (Biogesic) is a medication that is typically
                      used to relieve mild to moderate pain such as headache,
                      backache, menstrual cramps, muscular strain, minor
                      arthritis pain, toothache, and reduce fevers caused by
                      illnesses such as the common cold and flu.
                    </Grid>
                    <Grid item lg={2}>
                      <Button variant="tonal" sx={{ mr: 3, width: "100%" }} onClick={confirmClick}>
                        <Icon icon="fe:check" style={{ marginRight: 5 }} />
                        Select Drug
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
              </>
            )}

            {hideReStock && (
              <CardContent>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                  <Icon icon="solar:notes-bold-duotone" fontSize={100} />
                  <Typography variant="h3">
                    Paracetamol is currently not available
                  </Typography>
                  <Typography variant="subtitle">
                    Request stocking of this product?
                  </Typography>

                  <Box sx={{ mt: 6 }}>
                    <Button
                      variant="contained"
                      sx={{ mr: 3 }}
                      onClick={() => {
                        handleOpen();
                      }}
                    >
                      <Icon icon="fe:check" style={{ marginRight: 5 }} />
                      Yes
                    </Button>

                    <Button
                      variant="contained"
                      sx={{ mr: 3 }}
                      color="error"
                      onClick={() => setHideRestock(false)}
                    >
                      <Icon
                        icon="eva:close-outline"
                        style={{ marginRight: 5 }}
                      />
                      No
                    </Button>
                  </Box>
                </Grid>
              </CardContent>
            )}
          </Card>
        </Grid>
      </Grid>

      {openDialog && (
        <DrugRequest openDialog={openDialog} handleClose={handleClose} drugInfo = {drugInfo} setHideRestock = {setHideRestock} />
      )}
    </>
  );
};


export default SearchDrug;
