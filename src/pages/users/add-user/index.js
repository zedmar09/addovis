import { useState } from 'react'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import {
  Grid,
  Typography,
  Button,
  FormLabel,
  FormControlLabel,
  Switch,
  Divider,
  Card,
  CardContent,
  InputAdornment,
  IconButton
} from '@mui/material'

// ** Custom Components Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import cryptoRandomString from 'crypto-random-string'
import Swal from 'sweetalert2'
import Icon from 'src/@core/components/icon'
import axiosClient from 'src/http-request/axios-request'

//styling custom buttons
const StyledButton = styled(Button)(({ theme, color = 'primary' }) => ({
  ':hover': {
    color: 'white',
    backgroundColor: '#0e3973'
  },
  backgroundColor: '#072142'
}))

const AddUser = () => {
  const router = useRouter()

  //show or hide password
  const [showPassword, setShowPassword] = useState(true)

  //handle data from user creation
  const [userInfo, setUserInfo] = useState({
    firstName: null,
    lastName: null,
    email: null,
    username: null,
    password: cryptoRandomString({ length: 8, type: 'alphanumeric' }),
    passwordConfirmation: null,
    status: null
  })

  //submitting add user information
  const addUserSubmit = async e => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={addUserSubmit}>
        <Card sx={{ borderRadius: 0 }}>
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Typography variant='h4' sx={{ mb: 0 }}>
                  Add User Information
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
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setUserInfo({ ...userInfo, firstName: e.target.value })}
                  value={userInfo.firstName}
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
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setUserInfo({ ...userInfo, lastName: e.target.value })}
                  value={userInfo.lastName}
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
                  type='email'
                  inputProps={{ style: { backgroundColor: '#f5f5f5' } }}
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
                  inputProps={{ style: { backgroundColor: '#f5f5f5' } }}
                  onChange={e => setUserInfo({ ...userInfo, username: e.target.value })}
                  value={userInfo.username}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={8} lg={9}>
                    <CustomTextField
                      fullWidth
                      required={true}
                      label='Password'
                      onChange={e => setUserInfo({ ...userInfo, password: e.target.value })}
                      value={userInfo.password}
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onMouseDown={e => e.preventDefault()}
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <Icon fontSize='1.25rem' icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                            </IconButton>
                          </InputAdornment>
                        ),
                        style: { backgroundColor: '#f5f5f5' }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} lg={3}>
                    <Button
                      variant='tonal'
                      color='primary'
                      fullWidth
                      sx={{ mt: 5 }}
                      onClick={() =>
                        setUserInfo({
                          ...userInfo,
                          password: cryptoRandomString({ length: 8, type: 'alphanumeric' })
                        })
                      }
                    >
                      Generate
                    </Button>
                  </Grid>
                </Grid>

                {/* <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Password'
                  label='Password'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setUserInfo({ ...userInfo, password: e.target.value })}
                  value={userInfo.password}
                /> */}
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

export default AddUser
