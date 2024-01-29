// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import AuthIllustrationV1Wrapper from 'src/views/pages/auth/AuthIllustrationV1Wrapper'
import { useRouter } from 'next/router'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '25rem' }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'underline',
  color: `${theme.palette.primary.light} !important`
}))

const StyledButton = styled(Button)(({ theme, color = 'primary' }) => ({
  ':hover': {
    color: 'white',
    backgroundColor: '#0e3973'
  },
  backgroundColor: '#072142'
}))

const LoginV1 = () => {
  const router = useRouter()

  // ** State
  const [values, setValues] = useState({
    password: 'sample',
    showPassword: false
  })

  // ** Hook
  const theme = useTheme()

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const onSubmit = e => {
    e.preventDefault()
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

          <Typography color={'primary.light'} variant='h3' sx={{ mb: 5 }}>
            Sign In
          </Typography>

          <form autoComplete='off' onSubmit={onSubmit}>
            <CustomTextField
              required={true}
              autoFocus
              fullWidth
              id='username'
              label='Username'
              sx={{ mb: 4 }}
              placeholder='Enter your Username'
              value='sample'
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
              Login
            </StyledButton>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}
LoginV1.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default LoginV1
