import {
  Grid,
  Card,
  CardHeader,
  Divider,
  Typography,
  CardContent,
  Button,
  FormLabel,
  MenuItem,
  CircularProgress,
  DialogContent,
  DialogTitle,
  Dialog,
  IconButton
} from '@mui/material'
import { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { fiveSizeValidate } from 'src/utilities/fiveSizeValidate'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import usstatecityzip from 'src/utilities/usstatecityzip'
import dayjs from 'dayjs'
import axios from 'axios'
import cryptoRandomString from 'crypto-random-string'
import Icon from 'src/@core/components/icon'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'
import CustomTextField from 'src/@core/components/mui/text-field'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import HeaderSearch from 'src/non-pages/drug-search/header'

const InsuranceTest = () => {
  const states = require('us-state-converter')

  //OPEN Test
  const [openDialog, setOpenDialog] = useState(false)
  const handleOpen = () => setOpenDialog(true)
  const handleClose = () => setOpenDialog(false)

  const [insuranceData, setInsuranceData] = useState({})
  const [frontRunnerResponse, setFrontRunnerResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  const initialInsuranceInfo = {
    FirstName: '',
    LastName: '',
    DateOfBirth: null,
    Gender: '',
    MRN: '',
    SSN: '',
    AddressLine1: '',
    AddressLine2: '',
    City: null,
    State: null,
    Zip: ''
  }

  const [insuranceInfo, setInsuranceInfo] = useState(initialInsuranceInfo)

  //insurance locations data
  const statesList = [...new Set(usstatecityzip.map(item => item.state_name))]
    .sort()
    .map(stateName => ({ state: stateName }))

  const cityList = usstatecityzip
    .filter(item => item.state_name === insuranceInfo?.State?.state)
    .map(item => ({ city: item.city }))
    .sort((a, b) => a.city.localeCompare(b.city))

  //submit test insurance
  const insuranceSubmit = async e => {
    e.preventDefault()

    var currentDay = dayjs(new Date()).format('YYYY-MM-DD')

    const { FirstName, LastName, DateOfBirth, Gender, MRN, SSN, AddressLine1, AddressLine2, City, State, Zip } =
      insuranceInfo

    const stateAbbr = states.abbr(State?.state)

    const insuranceSubmit = {
      UserName: 'addovis@frhcwebservice.com',
      Password: 'sCLw9Jy^ZGc2O&*E',
      Person: {
        FirstName: FirstName,
        LastName: LastName,
        DateOfBirth: `${dayjs(DateOfBirth).format('YYYY-MM-DD')}T00:00:00`,
        Gender: Gender,
        MRN: MRN,
        SSN: SSN,
        AddressLine1: AddressLine1,
        AddressLine2: AddressLine2,
        City: City?.city,
        State: stateAbbr,
        Zip: Zip
      },
      InsuranceInformation: [],
      DateOfService: `${currentDay}T00:00:00`,
      AccountNumber: cryptoRandomString({ length: 10, type: 'alphanumeric' }),
      CheckDemographics: true,
      CheckCredit: false,
      RunDiscovery: true,
      RunBusinessRules: false,
      ServiceCode: 1,
      IsCovid19: false
    }

    setInsuranceData(insuranceSubmit)
    handleOpen()
    setLoading(true)

    const headers = {
      'Content-Type': 'application/json'
    }

    axios
      .request({
        method: 'POST',
        url: `https://one.frhc.com/Api/PatientAndInsurance/ProcessPatientInformation`,
        headers: headers,
        data: insuranceSubmit
      })
      .then(res => {
        setLoading(false)
        setFrontRunnerResponse(res)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
        setFrontRunnerResponse(err)
      })
  }

  const clearFieldsClick = () => {
    setInsuranceInfo(initialInsuranceInfo)
  }

  return (
    <>
      <HeaderSearch />

      <Grid container spacing={2} justifyContent='center' sx={{ mt: 3 }}>
        <Grid item xs={11} md={9} lg={10}>
          <Card sx={{ borderRadius: 0 }} elevation={0}>
            <CardHeader
              title={
                <>
                  <Typography variant='h4'>Insurance Test</Typography>
                </>
              }
              subheader={'This form is to test the Front-Runner API Only'}
            />
            <Divider />

            <CardContent>
              <form onSubmit={insuranceSubmit}>
                <Grid container spacing={5}>
                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <CustomTextField
                      fullWidth
                      required={true}
                      variant='outlined'
                      size='small'
                      placeholder='First Name'
                      label='First Name'
                      value={insuranceInfo?.FirstName}
                      onChange={e =>
                        setInsuranceInfo({
                          ...insuranceInfo,
                          FirstName: e.target.value
                        })
                      }
                    />
                  </Grid>

                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <CustomTextField
                      fullWidth
                      required={true}
                      variant='outlined'
                      size='small'
                      placeholder='Last Name'
                      label='Last Name'
                      value={insuranceInfo?.LastName}
                      onChange={e =>
                        setInsuranceInfo({
                          ...insuranceInfo,
                          LastName: e.target.value
                        })
                      }
                    />
                  </Grid>

                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <FormLabel>
                      Date of Birth
                      <span className='req-color'>*</span>
                    </FormLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        disableFuture
                        sx={{ width: '100%' }}
                        slotProps={{ textField: { size: 'small' } }}
                        renderInput={params => <CustomTextField {...params} />}
                        onChange={e =>
                          setInsuranceInfo({
                            ...insuranceInfo,
                            DateOfBirth: e
                          })
                        }
                        value={insuranceInfo?.DateOfBirth}
                      />
                    </LocalizationProvider>
                  </Grid>

                  <Grid item xs={12} lg={6} md={6} sm={6} sx={{ mt: 1 }}>
                    <CustomTextField
                      select
                      fullWidth
                      label='Gender'
                      required={true}
                      value={insuranceInfo?.Gender}
                      onChange={e =>
                        setInsuranceInfo({
                          ...insuranceInfo,
                          Gender: e.target.value
                        })
                      }
                    >
                      <MenuItem value='M'>Male</MenuItem>
                      <MenuItem value='F'>Female</MenuItem>
                    </CustomTextField>
                  </Grid>

                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <CustomTextField
                      fullWidth
                      variant='outlined'
                      size='small'
                      placeholder='Medical Record Number'
                      label='MRN'
                      value={insuranceInfo?.MRN}
                      onChange={e =>
                        setInsuranceInfo({
                          ...insuranceInfo,
                          MRN: e.target.value
                        })
                      }
                    />
                  </Grid>

                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <CustomTextField
                      fullWidth
                      required={true}
                      variant='outlined'
                      size='small'
                      placeholder='Social Security Number'
                      label='SSN'
                      value={insuranceInfo?.SSN}
                      onChange={e =>
                        setInsuranceInfo({
                          ...insuranceInfo,
                          SSN: e.target.value
                        })
                      }
                    />
                  </Grid>

                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <CustomTextField
                      fullWidth
                      variant='outlined'
                      size='small'
                      placeholder='Address Line 1'
                      required={true}
                      label='Address Line 1'
                      value={insuranceInfo?.AddressLine1}
                      onChange={e =>
                        setInsuranceInfo({
                          ...insuranceInfo,
                          AddressLine1: e.target.value
                        })
                      }
                    />
                  </Grid>

                  <Grid item xs={12} lg={6} md={6} sm={6}>
                    <CustomTextField
                      fullWidth
                      variant='outlined'
                      size='small'
                      placeholder='Address Line 2'
                      label='Address Line 2'
                      value={insuranceInfo?.AddressLine2}
                      onChange={e =>
                        setInsuranceInfo({
                          ...insuranceInfo,
                          AddressLine2: e.target.value
                        })
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <CustomTextField
                      fullWidth
                      variant='outlined'
                      size='small'
                      placeholder='Zip Code'
                      label='Zip Code'
                      required
                      type='text'
                      onChange={e =>
                        setInsuranceInfo({
                          ...insuranceInfo,
                          Zip: fiveSizeValidate(e.target.value)
                        })
                      }
                      value={insuranceInfo.Zip}
                    />

                    {insuranceInfo.Zip && insuranceInfo.Zip?.length != 5 && (
                      <Typography color='error'>Invalid Zip Code. It should be exactly 5 numeric digits.</Typography>
                    )}
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <FormLabel sx={{ fontSize: 13 }}>
                      State<span className='req-color'>*</span>
                    </FormLabel>
                    <CustomAutocomplete
                      sx={{ width: '100%' }}
                      options={statesList}
                      getOptionLabel={option => option.state}
                      getOptionSelected={(option, value) => option.state === value.state}
                      renderInput={params => (
                        <CustomTextField {...params} fullWidth required placeholder='Select State' />
                      )}
                      value={insuranceInfo?.State}
                      onChange={(e, values) =>
                        setInsuranceInfo({
                          ...insuranceInfo,
                          State: values
                        })
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <FormLabel sx={{ fontSize: 13 }}>
                      City<span className='req-color'>*</span>
                    </FormLabel>
                    <CustomAutocomplete
                      sx={{ width: '100%' }}
                      options={cityList}
                      getOptionLabel={option => option.city}
                      getOptionSelected={(option, value) => option.city === value.city}
                      renderInput={params => (
                        <CustomTextField {...params} fullWidth required placeholder='Select City' />
                      )}
                      value={insuranceInfo?.City}
                      onChange={(e, values) =>
                        setInsuranceInfo({
                          ...insuranceInfo,
                          City: values
                        })
                      }
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mt: 7
                    }}
                  >
                    <Button onClick={clearFieldsClick}>Clear All Fields</Button>
                    <Button variant='contained' type='submit'>
                      Check Insurance
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dialog
        open={openDialog}
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleClose
          }
        }}
        maxWidth='xl'
        fullWidth={true}
      >
        <DialogTitle id='alert-dialog-title' sx={{ backgroundColor: '#072142' }}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h5' color={'#fff'} sx={{ mb: 2 }}>
              Check API Response
            </Typography>
            <IconButton aria-label='capture screenshot' sx={{ mt: -4, color: '#fff' }} onClick={handleClose}>
              <Icon icon='bx:x' />
            </IconButton>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={4}>
            <Grid lg={6} md={6} sm={12} xs={12} sx={{ p: 5 }}>
              <Typography variant='h4'>Front Runner Response</Typography>

              {loading ? (
                <>
                  <Typography>Getting Information from Front Runner</Typography>
                  <CircularProgress />
                </>
              ) : (
                <SyntaxHighlighter language='json' style={darcula}>
                  {JSON.stringify(frontRunnerResponse, null, 2)}
                </SyntaxHighlighter>
              )}
            </Grid>

            <Grid lg={6} md={6} sm={12} xs={12} sx={{ p: 5 }}>
              <Typography variant='h4'>Your Request Data</Typography>

              <SyntaxHighlighter language='json' style={darcula}>
                {JSON.stringify(insuranceData, null, 2)}
              </SyntaxHighlighter>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  )
}

InsuranceTest.getLayout = page => <BlankLayout>{page}</BlankLayout>
InsuranceTest.guestGuard = true

export default InsuranceTest
