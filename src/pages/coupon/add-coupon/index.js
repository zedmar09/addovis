// ** React Imports
import { useMemo, useState } from 'react'

// ** MUI Imports
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTabList from '@mui/lab/TabList'
import { Grid, Typography, Card, Button, CardContent, FormLabel, FormControlLabel, Switch } from '@mui/material'

// ** Custom Components Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'
import Icon from 'src/@core/components/icon'
import { useRouter } from 'next/router'

const StyledButton = styled(Button)(({ theme, color = 'primary' }) => ({
  ':hover': {
    color: 'white',
    backgroundColor: '#0e3973'
  },
  backgroundColor: '#072142'
}))

const AddManufacturer = () => {
  const router = useRouter()
  const [couponInfo, setCouponInfo] = useState({})

  return (
    <>
      <form>
        <Card sx={{ borderRadius: 0 }}>
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Typography variant='h4' sx={{ mb: 0 }}>
                  Information
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Coupon ID'
                  label='Coupon ID'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setCouponInfo({ ...couponInfo, manufacturer: e.target.value })}
                  value={couponInfo.manufacturer}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='BIN'
                  label='BIN'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setCouponInfo({ ...couponInfo, bin: e.target.value })}
                  value={couponInfo.bin}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Manufacturer Name'
                  label='Manufacturer Name'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setCouponInfo({ ...couponInfo, manufacturer: e.target.value })}
                  value={couponInfo.manufacturer}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='PCN'
                  label='PCN'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setCouponInfo({ ...couponInfo, pcn: e.target.value })}
                  value={couponInfo.pcn}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Drug Name'
                  label='Drug Name'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setCouponInfo({ ...couponInfo, drug_name: e.target.value })}
                  value={couponInfo.drug_name}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Group'
                  label='Group'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setCouponInfo({ ...couponInfo, group: e.target.value })}
                  value={couponInfo.group}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <FormLabel>
                  Status<span className='req-color'>*</span>
                </FormLabel>
                <br />
                <FormControlLabel
                  control={<Switch checked={couponInfo.active} />}
                  label={couponInfo.active ? 'Active' : 'Inactive'}
                  onChange={e => setCouponInfo({ ...couponInfo, active: e.target.checked })}
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

            <Button
              type='submit'
              variant='contained'
              size={'lg'}
              color={'error'}
              onClick={e => {
                e.preventDefault()
                router.back()
              }}
            >
              Cancel
            </Button>
          </div>
        </Grid>
      </form>
    </>
  )
}

export default AddManufacturer
