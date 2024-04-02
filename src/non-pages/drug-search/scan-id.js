import {
  Typography,
  Grid,
} from "@mui/material";
import Icon from "src/@core/components/icon";

import { useState } from "react";
import { CardScanView } from "@cardscan.ai/insurance-cardscan-react";

const ScanID = () => {
  const [token, setToken] = useState("");
  
  const onSuccess = (card) => {
    console.log("success!");
    console.log(card)
  };
  
  const loadScanView = () => {
    fetch("/api/cardscan-session")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
  
        return res.json();
      })
      .then((data) => {
        // Assuming data.session contains the token
        setToken(data.Token);
        console.log(data.Token)
      })
      .catch((err) => console.log(err));
  };
  
    
  return (
    <div>

{/* <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Icon icon="solar:user-id-bold-duotone" fontSize={100} />
                <Typography variant="h4" fontWeight={350}>
                 Scan your Insurance ID
                </Typography>
                <Typography variant="subtitle" color={"secondary"}>
                  Please scan your insurance ID here.
                </Typography>
              </Grid> */}

      { token?.trim() === "" ? (
        <button onClick={loadScanView}>Start Scanning</button>
      ) : (
        <CardScanView
          live={false}
          sessionToken={token}
          onSuccess={onSuccess}
        />
      )}
    </div>
  );
};

export default ScanID;
