// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

import Icon from 'src/@core/components/icon'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 10, mb: 10 }}>
        <Typography variant='h2' sx={{ mb: 5 }}>
          Welcome to Addovis 💊
        </Typography>
        <Typography>
          Addovis Therapeutics offers a selection of high-quality medication at competitive prices to independent
          pharmacies in the United States.
        </Typography>
      </Grid>

      <Grid item xs={12} md={12} lg={6}>
        <Card sx={{ borderRadius: 0, textAlign: 'center' }}>
          <CardContent>
            <Icon icon='ic:twotone-inventory' fontSize={50} color='#1452a2' />
            <Typography variant='h4' sx={{ mb: 2, mt: 2 }}>
              Inventory Management Services
            </Typography>
            <Typography variant='subtitle2' sx={{ fontWeight: 350 }}>
              Addovis actively tracks inventory levels to ensure that pharmacies have access to needed medications.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={12} lg={6}>
        <Card sx={{ borderRadius: 0, textAlign: 'center' }}>
          <CardContent>
            <Icon icon='ic:twotone-handshake' fontSize={50} color='#1452a2' />
            <Typography variant='h4' sx={{ mb: 2, mt: 2 }}>
              Quality Service
            </Typography>
            <Typography variant='subtitle2' sx={{ fontWeight: 350 }}>
              Addovis works diligently to ensure full compliance with all regulations and laws.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={12} lg={6}>
        <Card sx={{ borderRadius: 0, textAlign: 'center' }}>
          <CardContent>
            <Icon icon='iconamoon:delivery-free-duotone' fontSize={50} color='#1452a2' />
            <Typography variant='h4' sx={{ mb: 2, mt: 2 }}>
              Distribution Services
            </Typography>
            <Typography variant='subtitle2' sx={{ fontWeight: 350 }}>
              Addovis manages the distribution of specialty medication from manufacturer to pharmacy to ensure that
              patients can have timely access to treatments that they need.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={12} lg={6}>
        <Card sx={{ borderRadius: 0, textAlign: 'center' }}>
          <CardContent>
            <Icon icon='ic:twotone-info' fontSize={50} color='#1452a2' />
            <Typography variant='h4' sx={{ mb: 2, mt: 2 }}>
              About Us
            </Typography>
            <Typography variant='subtitle2' sx={{ fontWeight: 350 }}>
              Addovis Therapeutics is a pharmaceutical wholesaler based in Scottsdale, AZ who provides medication to
              specialty pharmacies and hospitals in the United States.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
