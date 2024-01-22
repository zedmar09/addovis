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

const AddUser = () => {
  const router = useRouter()
  const [userInfo, setUserInfo] = useState({})

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
              placeholder='First Name'
              label='First Name'
              type='text'
              inputProps={{ style: { textTransform: 'capitalize' } }}
              onChange={e => setUserInfo({ ...userInfo, first_name: e.target.value })}
              value={userInfo.first_name}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6}>
            <CustomTextField
              fullWidth
              required={true}
              variant='outlined'
              size='small'
              placeholder='Last Name'
              label='Last Name'
              type='text'
              inputProps={{ style: { textTransform: 'capitalize' } }}
              onChange={e => setUserInfo({ ...userInfo, last_name: e.target.value })}
              value={userInfo.last_name}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6}>
            <CustomTextField
              fullWidth
              required={true}
              variant='outlined'
              size='small'
              placeholder='Email Address'
              label='Email Address'
              type='text'
              inputProps={{ style: { textTransform: 'capitalize' } }}
              onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
              value={userInfo.email}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6}>
            <FormLabel>
              Status<span className='req-color'>*</span>
            </FormLabel>
            <br />
            <FormControlLabel
              control={<Switch checked={userInfo.status} />}
              label={userInfo.status ? 'Active' : 'Inactive'}
              onChange={e => setUserInfo({ ...userInfo, status: e.target.checked })}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6}>
            <CustomTextField
              fullWidth
              required={true}
              variant='outlined'
              size='small'
              placeholder='Username'
              label='Username'
              type='text'
              inputProps={{ style: { textTransform: 'capitalize' } }}
              onChange={e => setUserInfo({ ...userInfo, username: e.target.value })}
              value={userInfo.username}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6}>
            <CustomTextField
              fullWidth
              required={true}
              variant='outlined'
              size='small'
              placeholder='Password'
              label='Password'
              type='text'
              inputProps={{ style: { textTransform: 'capitalize' } }}
              onChange={e => setUserInfo({ ...userInfo, password: e.target.value })}
              value={userInfo.password}
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

export default AddUser
