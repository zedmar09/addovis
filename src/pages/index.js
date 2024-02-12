import { signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { styled } from '@mui/material/styles'
import {
  Button,
  Box,
  Checkbox,
  Typography,
  IconButton,
  CardContent,
  Alert,
  InputAdornment,
  FormControlLabel,
  CircularProgress
} from '@mui/material'

import Link from 'next/link'
import MuiCard from '@mui/material/Card'
import CustomTextField from 'src/@core/components/mui/text-field'
import Icon from 'src/@core/components/icon'
import BlankLayout from 'src/@core/layouts/BlankLayout'

//customizing cards from login
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '25rem' }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'underline',
  color: `${theme.palette.primary.light} !important`
}))

//customizing button from login
const StyledButton = styled(Button)(({ theme, color = 'primary' }) => ({
  ':hover': {
    color: 'white',
    backgroundColor: '#0e3973'
  },
  backgroundColor: '#072142'
}))

const Login = () => {
  const router = useRouter()

  //verify login and identify if fetching data
  const [isLoginError, setIsLoginError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  //storing values
  const [values, setValues] = useState({
    username: 'sample',
    password: 'sample123',
    showPassword: false
  })

  //getting the values of each field
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  //displaying login
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  //assigning a timer for invalid login
  useEffect(() => {
    let timer
    if (isLoginError) {
      timer = setTimeout(() => {
        setIsLoginError(false)
      }, 2000)
    }

    return () => clearTimeout(timer)
  }, [isLoginError])

  //checking account credentials
  const handleLogin = async e => {
    e.preventDefault()

    setIsLoading(true)

    const { username, password } = values

    router.push('/dashboard')
  }

  return (
    <Box className='content-center' sx={{ backgroundColor: '#072142' }}>
      <Card elevation={1}>
        <CardContent sx={{ p: theme => `${theme.spacing(10.5, 8, 8)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src='/images/addovislogo.webp'
              alt='Addovis Logo'
              width={'100%'}
              style={{ filter: 'grayscale(90%)' }}
            />
          </Box>

          {isLoginError && (
            <Alert severity='error' sx={{ mb: 5 }}>
              Invalid Credentials. Please Try Again
            </Alert>
          )}

          <Typography color={'primary.light'} variant='h3' sx={{ mb: 5 }}>
            Sign In
          </Typography>

          <form autoComplete='off' onSubmit={handleLogin}>
            <CustomTextField
              required={true}
              autoFocus
              fullWidth
              id='username'
              label='Username'
              value={values.username}
              onChange={handleChange('username')}
              sx={{ mb: 4 }}
              placeholder='Enter your Username'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton edge='end' aria-label='toggle password visibility'>
                      <Icon fontSize='1.25rem' icon={'ph:user-duotone'} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <CustomTextField
              fullWidth
              required={true}
              sx={{ mb: 1.5 }}
              label='Password'
              value={values.password}
              id='auth-login-password'
              placeholder='Enter your Password'
              onChange={handleChange('password')}
              type={values.showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={e => e.preventDefault()}
                      aria-label='toggle password visibility'
                    >
                      <Icon
                        fontSize='1.25rem'
                        icon={values.showPassword ? 'ph:eye-duotone' : 'iconamoon:eye-off-duotone'}
                      />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Box
              sx={{
                mb: 5,
                mt: 4,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <FormControlLabel
                color='primary.dark'
                label={<Typography color='primary.dark'>Remember Me</Typography>}
                control={<Checkbox />}
              />
              <Typography component={LinkStyled} href='/pages/auth/forgot-password-v1'>
                Forgot Password?
              </Typography>
            </Box>

            <StyledButton variant='contained' color='primary' fullWidth type='submit'>
              {isLoading && <CircularProgress sx={{ color: '#fff !important', mr: 4 }} size='1rem' />}
              Login
            </StyledButton>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}
Login.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Login
