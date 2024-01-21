// ** React Imports
import { useMemo, useState } from 'react'

// ** MUI Imports
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTabList from '@mui/lab/TabList'
import {
  Grid,
  Typography,
  Tab,
  Button,
  FormLabel,
  FormControlLabel,
  Switch,
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  IconButton,
  Divider
} from '@mui/material'

// ** Custom Components Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'
import Icon from 'src/@core/components/icon'
import { useRouter } from 'next/router'

const AddManufacturer = () => {
  const router = useRouter()
  const [couponInfo, setCouponInfo] = useState({})

  return (
    <>
      <form>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Typography variant='h4' sx={{ mb: 0 }}>
              Information
            </Typography>
          </Grid>

          <Divider />

          <Grid item xs={12} sm={12} md={12} lg={6}>
            <CustomTextField
              fullWidth
              required={true}
              variant='outlined'
              size='small'
              placeholder='Coupon ID'
              label='Coupon ID'
              type='text'
              inputProps={{ style: { textTransform: 'capitalize' } }}
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
              inputProps={{ style: { textTransform: 'capitalize' } }}
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
              inputProps={{ style: { textTransform: 'capitalize' } }}
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
              inputProps={{ style: { textTransform: 'capitalize' } }}
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
              inputProps={{ style: { textTransform: 'capitalize' } }}
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
              inputProps={{ style: { textTransform: 'capitalize' } }}
              onChange={e => setCouponInfo({ ...couponInfo, group: e.target.value })}
              value={couponInfo.group}
            />
          </Grid>

          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
            <div></div>
            <div>
              <Button type='submit' variant='contained' size={'lg'} sx={{ mr: 3 }}>
                Save
              </Button>

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
        </Grid>
      </form>
    </>
  )
}

export default AddManufacturer
