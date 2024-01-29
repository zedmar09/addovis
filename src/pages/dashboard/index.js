// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Icon from 'src/@core/components/icon'

const Dashboard = () => {
  return (
    <Grid container spacing={6}>
      <Grid item lg={6} md={12} sm={12}>
        <Typography variant='h3'>Dashboard</Typography>
        <Typography>A quick data overview of the inventory.</Typography>
      </Grid>

      <Grid item lg={6} md={12} sm={12} sx={{ textAlign: 'right' }}>
        <Typography variant='h6'>
          <Icon icon='emojione-v1:sun' fontSize='15' /> Good Morning
        </Typography>
        <Typography variant='subtitle2'>15 January 2024 02:15 AM</Typography>
      </Grid>

      <Grid item lg={3} md={6} sm={12} sx={{ mt: 5 }}>
        <Card sx={{ borderRadius: 0, border: '1px solid #00a768' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Icon icon='ph:shield-plus-duotone' fontSize='60' color='#00a768' />
            <Typography variant='h5' color='black'>
              Good
            </Typography>
            <Typography>Inventory Status</Typography>
          </CardContent>
          <Box sx={{ textAlign: 'center', backgroundColor: '#b3e5d2', p: 2, borderTop: '1px solid #00a768' }}>
            <Typography color='black'>View Detailed Report</Typography>
          </Box>
        </Card>
      </Grid>

      <Grid item lg={3} md={6} sm={12} sx={{ mt: 5 }}>
        <Card sx={{ borderRadius: 0, border: '1px solid #fed600' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Icon icon='lets-icons:money-duotone-line' fontSize='60' color='#fed600' />
            <Typography variant='h5' color='black'>
              Rs. 8,55,875
            </Typography>
            <Typography>Revenue: Jan 2024</Typography>
          </CardContent>
          <Box sx={{ textAlign: 'center', backgroundColor: '#fff3b2', p: 2, borderTop: '1px solid #fed600' }}>
            <Typography color='black'>View Detailed Report</Typography>
          </Box>
        </Card>
      </Grid>

      <Grid item lg={3} md={6} sm={12} sx={{ mt: 5 }}>
        <Card sx={{ borderRadius: 0, border: '1px solid #01a9f6' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Icon icon='icon-park-twotone:medical-box' fontSize='60' color='#01a9f6' />
            <Typography variant='h5' color='black'>
              298
            </Typography>
            <Typography>Medicines Available</Typography>
          </CardContent>
          <Box sx={{ textAlign: 'center', backgroundColor: '#b3e5fc', p: 2, borderTop: '1px solid #01a9f6' }}>
            <Typography color='black'>Visit Inventory</Typography>
          </Box>
        </Card>
      </Grid>

      <Grid item lg={3} md={6} sm={12} sx={{ mt: 5 }}>
        <Card sx={{ borderRadius: 0, border: '1px solid #f0483e' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Icon icon='ic:twotone-warning' fontSize='60' color='#f0483e' />
            <Typography variant='h5' color='black'>
              01
            </Typography>
            <Typography>Medicine Shortage</Typography>
          </CardContent>
          <Box sx={{ textAlign: 'center', backgroundColor: '#fbc8c5', p: 2, borderTop: '1px solid #f0483e' }}>
            <Typography color='black'>Resolve Now</Typography>
          </Box>
        </Card>
      </Grid>

      <Grid item lg={6} md={6} sm={12} sx={{ mt: 5 }}>
        <Card sx={{ borderRadius: 0, border: '1px solid #a3a3a3' }}>
          <CardHeader title='Inventory' />
          <Divider color='#a3a3a3' />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={12}>
                <Typography variant='h5' color='black'>
                  298
                </Typography>
                <Typography>Total Number of Medicine</Typography>
              </Grid>

              <Grid item lg={6} md={6} sm={12}>
                <Typography variant='h5' color='black'>
                  24
                </Typography>
                <Typography>Medicine Groups</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item lg={6} md={6} sm={12} sx={{ mt: 5 }}>
        <Card sx={{ borderRadius: 0, border: '1px solid #a3a3a3' }}>
          <CardHeader
            title='Quick Report'
            action={
              <>
                <Typography>January 2024</Typography>
              </>
            }
          />
          <Divider color='#a3a3a3' />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={12}>
                <Typography variant='h5' color='black'>
                  70,856
                </Typography>
                <Typography>Qty of Medicines Sold</Typography>
              </Grid>

              <Grid item lg={6} md={6} sm={12}>
                <Typography variant='h5' color='black'>
                  5,288
                </Typography>
                <Typography>Invoices Generated</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item lg={6} md={6} sm={12} sx={{ mt: 5 }}>
        <Card sx={{ borderRadius: 0, border: '1px solid #a3a3a3' }}>
          <CardHeader title='My Pharmacy' />
          <Divider color='#a3a3a3' />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={12}>
                <Typography variant='h5' color='black'>
                  04
                </Typography>
                <Typography>Total no of Suppliers</Typography>
              </Grid>

              <Grid item lg={6} md={6} sm={12}>
                <Typography variant='h5' color='black'>
                  05
                </Typography>
                <Typography>Total no of Users</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item lg={6} md={6} sm={12} sx={{ mt: 5 }}>
        <Card sx={{ borderRadius: 0, border: '1px solid #a3a3a3' }}>
          <CardHeader title='My Pharmacy' />
          <Divider color='#a3a3a3' />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={12}>
                <Typography variant='h5' color='black'>
                  845
                </Typography>
                <Typography>Total no of Customers</Typography>
              </Grid>

              <Grid item lg={6} md={6} sm={12}>
                <Typography variant='h5' color='black'>
                  Paracetamol
                </Typography>
                <Typography>Frequently bought Item</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item lg={12} sx={{ textAlign: 'right' }}>
        <Button variant='contained'>Download Report</Button>
      </Grid>
    </Grid>
  )
}

export default Dashboard
