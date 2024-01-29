// ** React Imports
import { useMemo, useState } from 'react'

// ** MUI Imports
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTabList from '@mui/lab/TabList'
import { Grid, Typography, Button, Divider, Card, CardContent } from '@mui/material'

// ** Custom Components Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'
import Icon from 'src/@core/components/icon'

const StyledButton = styled(Button)(({ theme, color = 'primary' }) => ({
  ':hover': {
    color: 'white',
    backgroundColor: '#0e3973'
  },
  backgroundColor: '#072142'
}))

const AddManufacturer = () => {
  const [manufacturerInfo, setManufacturerInfo] = useState({})

  return (
    <>
      <form>
        <Card sx={{ borderRadius: 0 }}>
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Typography variant='h4' sx={{ mb: 0 }}>
                  Contact Information
                </Typography>
              </Grid>

              <Divider />

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Manufacturer'
                  label='Manufacturer'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setManufacturerInfo({ ...manufacturerInfo, manufacturer: e.target.value })}
                  value={manufacturerInfo.manufacturer}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Primary Contact Name'
                  label='Primary Contact Name'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setManufacturerInfo({ ...manufacturerInfo, primary_contact: e.target.value })}
                  value={manufacturerInfo.primary_contact}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Contact Number'
                  label='Contact Number'
                  type='number'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setManufacturerInfo({ ...manufacturerInfo, contact_number: e.target.value })}
                  value={manufacturerInfo.contact_number}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Email'
                  label='Email'
                  type='email'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setManufacturerInfo({ ...manufacturerInfo, email: e.target.value })}
                  value={manufacturerInfo.email}
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 4 }}>
                <Divider />
              </Grid>

              <Grid item xs={12}>
                <Typography variant='h4' sx={{ mb: 0 }}>
                  Location
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Street'
                  label='Street'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setManufacturerInfo({ ...manufacturerInfo, street: e.target.value })}
                  value={manufacturerInfo.street}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='City'
                  label='City'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setManufacturerInfo({ ...manufacturerInfo, city: e.target.value })}
                  value={manufacturerInfo.city}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='State'
                  label='State'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setManufacturerInfo({ ...manufacturerInfo, state: e.target.value })}
                  value={manufacturerInfo.state}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Zip Code'
                  label='Zip Code'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setManufacturerInfo({ ...manufacturerInfo, zip_code: e.target.value })}
                  value={manufacturerInfo.zip_code}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
          <div></div>
          <div>
            <StyledButton type='submit' variant='contained' size={'lg'} sx={{ mr: 3 }}>
              Save
            </StyledButton>

            <Button type='submit' variant='contained' size={'lg'} color={'error'}>
              Cancel
            </Button>
          </div>
        </Grid>
      </form>
    </>
  )
}

export default AddManufacturer
