// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stepper from '@mui/material/Stepper'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MuiStep from '@mui/material/Step'
import InputAdornment from '@mui/material/InputAdornment'
import CardContent from '@mui/material/CardContent'

import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Third Party Imports
import toast from 'react-hot-toast'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'
import CustomAvatar from 'src/@core/components/mui/avatar'
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Styled Component
import StepperWrapper from 'src/@core/styles/mui/stepper'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText
} from '@mui/material'
import Swal from 'sweetalert2'

const steps = [
  {
    icon: 'healthicons:1',
    title: 'Drug Search'
  },
  {
    icon: 'healthicons:2',
    title: 'Check Insurance'
  },
  {
    icon: 'healthicons:3',
    title: 'Benefits Check'
  },
  {
    icon: 'healthicons:4',
    title: 'Pharmacy Information'
  },
  {
    icon: 'healthicons:5',
    title: 'Patient Confirmation'
  }
]

const StepperHeaderContainer = styled(CardContent)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    borderRight: 0,
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}))

const Step = styled(MuiStep)(({ theme }) => ({
  '& .MuiStepLabel-root': {
    paddingTop: 0
  },
  '&:not(:last-of-type) .MuiStepLabel-root': {
    paddingBottom: theme.spacing(6)
  },
  '&:last-of-type .MuiStepLabel-root': {
    paddingBottom: 0
  },
  '& .MuiStepLabel-iconContainer': {
    display: 'none'
  },
  '& .step-subtitle': {
    color: `${theme.palette.text.disabled} !important`
  },
  '& + svg': {
    color: theme.palette.text.disabled
  },
  '&.Mui-completed .step-title': {
    color: theme.palette.text.disabled
  }
}))

//styled for drug listing if available
const StyledList = styled(List)(({ theme }) => ({
  '& .MuiListItem-container': {
    border: `1px solid ${theme.palette.divider}`,
    '&:first-of-type': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius
    },
    '&:last-child': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    },
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '& .MuiListItem-root': {
      paddingRight: theme.spacing(24)
    },
    '& .MuiListItemText-root': {
      marginTop: 0,
      '& .MuiTypography-root': {
        fontWeight: 500
      }
    }
  }
}))

const DrugSearch = () => {
  const [activeStep, setActiveStep] = useState(0)

  // Handle Stepper
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <Fragment key={step}>
            <DrugSearchStepOne handleBack={handleBack} handleNext={handleNext} />
          </Fragment>
        )
      case 1:
        return <Fragment key={step}></Fragment>
      case 2:
        return <Fragment key={step}></Fragment>
      case 3:
        return <Fragment key={step}></Fragment>
      case 4:
        return <Fragment key={step}></Fragment>

      default:
        return 'Unknown Step'
    }
  }

  const renderContent = () => {
    if (activeStep === steps.length) {
      return (
        <>
          <Typography>All steps are completed!</Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}></Box>
        </>
      )
    } else {
      return (
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            {/* <Grid item xs={12}>
              <Typography variant='h4'>{steps[activeStep].title}</Typography>
              <Typography variant='caption' component='p'>
                {steps[activeStep].subtitle}
              </Typography>
            </Grid> */}
            {getStepContent(activeStep)}
            {/* <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {activeStep != 0 && (
                <Button variant='tonal' color='secondary' onClick={handleBack}>
                  Back
                </Button>
              )}

              <Button variant='contained' onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Grid> */}
          </Grid>
        </form>
      )
    }
  }

  return (
    <Card
      sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, m: 10 }}
      style={{ border: 'none', boxShadow: 'none' }}
    >
      <StepperHeaderContainer>
        <StepperWrapper sx={{ height: '100%' }}>
          <Box sx={{ mb: 8 }}>
            <img src='/images/addovislogo.webp' alt='Addovis Logo' width={'70%'} />
          </Box>

          <Stepper
            activeStep={activeStep}
            orientation='vertical'
            connector={<></>}
            sx={{ height: '100%', minWidth: '15rem' }}
          >
            {steps.map((step, index) => {
              const RenderAvatar = activeStep >= index ? CustomAvatar : Avatar

              return (
                <Step key={index}>
                  <StepLabel StepIconComponent={StepperCustomDot}>
                    <div className='step-label'>
                      <RenderAvatar
                        variant='rounded'
                        {...(activeStep >= index && { skin: 'light' })}
                        {...(activeStep === index && { skin: 'filled' })}
                        {...(activeStep >= index && { color: 'primary' })}
                        sx={{
                          ...(activeStep === index && { boxShadow: theme => theme.shadows[3] }),
                          ...(activeStep > index && { color: theme => hexToRGBA(theme.palette.primary.main, 0.4) })
                        }}
                      >
                        <Icon icon={step.icon} />
                      </RenderAvatar>
                      <div>
                        <Typography className='step-title'>{step.title}</Typography>
                        {/* <Typography className='step-subtitle'>{step.subtitle}</Typography> */}
                      </div>
                    </div>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
      </StepperHeaderContainer>
      <Divider sx={{ m: '0 !important' }} />
      <CardContent sx={{ width: '100%' }}>{renderContent()}</CardContent>
    </Card>
  )
}

//STEP ONE DRUG SEARCH

const DrugSearchStepOne = ({ handleBack, handleNext }) => {
  const [drugSearch, setDrugSearch] = useState({ title: 'Drug Search', isAvailable: null })
  const [drugRequest, setDrugRequest] = useState({})

  //OPEN DRUG Request DIALOG
  const [openDrugRequestDialog, setOpenDrugRequestDialog] = useState(false)
  const handleDrugRequestOpen = () => setOpenDrugRequestDialog(true)
  const handleDrugRequestClose = () => setOpenDrugRequestDialog(false)

  const drugSearchClick = () => {
    if (drugSearch.drug_name == 'Paracetamol') {
      setDrugSearch({ ...drugSearch, isAvailable: false })
    } else {
      setDrugSearch({ ...drugSearch, isAvailable: true })
    }
  }

  const drugRequestSubmit = e => {
    e.preventDefault()
    handleDrugRequestClose()

    Swal.fire({
      title: 'Drug Request Confirmation',
      text: 'Are you sure you want to submit this drug request?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm'
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Success!',
          text: 'Your request for Paracetamol has been submitted',
          icon: 'success'
        })
      }
    })
  }

  return (
    <>
      <Grid item xs={12}>
        <Typography variant='h4'>{drugSearch.title}</Typography>
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
          onChange={e => setDrugSearch({ ...drugSearch, drug_name: e.target.value })}
          value={drugSearch.drug_name}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={4}>
        <CustomTextField
          fullWidth
          required={true}
          variant='outlined'
          size='small'
          placeholder='Quantity'
          label='Quantity'
          type='number'
          onChange={e => setDrugSearch({ ...drugSearch, quantity: e.target.value })}
          value={drugSearch.quantity}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={2}>
        <Button variant='contained' fullWidth size='lg' sx={{ mt: 4 }} onClick={drugSearchClick}>
          <Icon icon='iconamoon:search-duotone' fontSize={18} /> &nbsp;Search
        </Button>
      </Grid>

      {drugSearch.isAvailable != null && !drugSearch.isAvailable && (
        <Grid item xs={12} sx={{ textAlign: 'center', mt: 7 }}>
          <Icon icon='ph:pill-duotone' fontSize={100} />
          <Typography variant='h4'>Paracetamol is currently not available</Typography>
          <Typography variant='h5' fontWeight={350} sx={{ mt: 5 }}>
            Request stocking of this product?
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button variant='contained' sx={{ mr: 2 }} color='success' onClick={() => handleDrugRequestOpen()}>
              Yes
            </Button>
            <Button variant='tonal' color='error'>
              No
            </Button>
          </Box>
        </Grid>
      )}

      {drugSearch.isAvailable && (
        <Grid item xs={12} sx={{ mt: 7 }}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', mb: 5 }}>
            <Typography variant='h6'>Available Drug(s)</Typography>
            <Typography variant='body2'>2 Record(s) Found</Typography>
          </Grid>
          <StyledList disablePadding>
            <ListItem>
              <ListItemAvatar>
                <Icon icon='ph:pill-duotone' />
              </ListItemAvatar>
              <div>
                <ListItemText primary='Ibuprofen' />
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Typography variant='body2'> Nonsteroidal Anti-inflammatory Drugs</Typography>
                </Box>
              </div>
              <ListItemSecondaryAction>
                <Button variant='tonal' size='small' color={'success'} onClick={handleNext}>
                  Confirm
                </Button>
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Icon icon='ph:pill-duotone' />
              </ListItemAvatar>
              <div>
                <ListItemText primary='Advil' />
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Typography variant='body2'> Nonsteroidal Anti-inflammatory Drugs</Typography>
                </Box>
              </div>
              <ListItemSecondaryAction>
                <Button variant='tonal' size='small' color={'success'} onClick={handleNext}>
                  Confirm
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          </StyledList>
        </Grid>
      )}

      <Dialog open={openDrugRequestDialog} onClose={handleDrugRequestClose} maxWidth='xs' fullWidth={true}>
        <form onSubmit={drugRequestSubmit}>
          <DialogTitle id='alert-dialog-title' sx={{ backgroundColor: '#1452a2' }}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='h5' color={'#fff'} sx={{ mb: 2 }}>
                Drug Request
              </Typography>
              <IconButton
                aria-label='capture screenshot'
                sx={{ mt: -4, color: '#fff' }}
                onClick={handleDrugRequestClose}
              >
                <Icon icon='bx:x' />
              </IconButton>
            </Grid>
          </DialogTitle>
          <DialogContent>
            {/* onChange={e => setPharmacyInfo({ ...pharmacyInfo, pharmacy_name: e.target.value })}
                   value={pharmacyInfo.pharmacy_name} */}

            <Grid container spacing={6}>
              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Drug Name'
                  label='Drug Name'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#dedede', color: '#000' } }}
                  value={'Paracetamol'}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Monthly Prescriptions'
                  label='Monthly Prescriptions'
                  type='number'
                  inputProps={{ style: { textTransform: 'capitalize' } }}
                  onChange={e => setDrugRequest({ ...drugRequest, prescription: e.target.value })}
                  value={drugRequest.prescription}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Prescriber NPI'
                  label='Prescriber NPI'
                  type='number'
                  inputProps={{ style: { textTransform: 'capitalize' } }}
                  onChange={e => setDrugRequest({ ...drugRequest, npi: e.target.value })}
                  value={drugRequest.npi}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Prescriber Name'
                  label='Prescriber Name'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#dedede', color: '#000' } }}
                  value={'John Duo'}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='State'
                  label='State'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#dedede', color: '#000' } }}
                  value={'New York'}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions className='dialog-actions-dense' sx={{ mb: 2 }}>
            <Button variant='contained' type='submit'>
              Submit
            </Button>

            <Button variant='tonal' color={'error'} onClick={handleDrugRequestClose}>
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

const CheckInsurance = () => {
  return <></>
}

DrugSearch.getLayout = page => <BlankLayout>{page}</BlankLayout>
DrugSearch.guestGuard = true

export default DrugSearch
