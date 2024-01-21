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
  IconButton
} from '@mui/material'

// ** Custom Components Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'
import Icon from 'src/@core/components/icon'
import { MaterialReactTable } from 'material-react-table'

// Styled TabList component
const TabList = styled(MuiTabList)(({ theme }) => ({
  borderBottom: '0 !important',
  '&, & .MuiTabs-scroller': {
    boxSizing: 'content-box',
    padding: theme.spacing(1.25, 1.25, 2),
    margin: `${theme.spacing(-1.25, -1.25, -2)} !important`
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    lineHeight: 1,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}))

const AddPharmacy = () => {
  // ** State for tabs
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  //OPEN DRUG DIALOG
  const [openDrugDialog, setOpenDrugDialog] = useState(false)
  const handleDrugOpen = () => setOpenDrugDialog(true)
  const handleDrugClose = () => setOpenDrugDialog(false)

  const [drugDetails, setDrugDetails] = useState({})

  const rows = [
    {
      id: 1,
      name: 'Tylenold',
      type: 'Branded',
      description: 'Pain reliever and fever reducer',
      stocks: '433'
    }
  ]

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        Cell: ({ cell, row }) => (
          <div>
            <Typography
              sx={{ textTransform: 'capitalize', textDecoration: 'underline' }}
              color={'primary.main'}
              fontWeight={450}
            >
              {row.original.name}{' '}
            </Typography>
          </div>
        )
      },
      {
        accessorKey: 'type',
        header: 'Type',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.type} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'description',
        header: 'Description',
        Cell: ({ cell, row }) => (
          <div>
            <Typography>{row.original.description} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'stocks',
        header: 'Quantity',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.stocks} </Typography>
          </div>
        )
      }
    ],
    []
  )

  return (
    <>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='customized tabs example'>
          <Tab value='1' label='Profile' />
          <Tab value='2' label='Inventory' />
        </TabList>
        <TabPanel value='1'>
          <Typography variant='h4' sx={{ mb: 0 }}>
            Pharmacy Profile
          </Typography>

          <Typography variant='subtitle'>This module allows you to add pharmacy information.</Typography>

          <PharmacyProfile />
        </TabPanel>
        <TabPanel value='2'>
          {/* <Typography variant='h4' sx={{ mb: 0 }}>
          Pharmacy Inventory
        </Typography>

        <Typography variant='subtitle'>This module allows you to add drug for pharmacy.</Typography> */}

          {/* <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Icon icon='ph:pill-duotone' fontSize={100} />
          <Typography variant='h4' fontWeight={350}>
            There are no items currently for this Pharmacy.
          </Typography>
          <Typography variant='subtitle' color={'secondary'}>
            Click the add button to create a new one
          </Typography>
          <br /> <br />
          <Button size='lg' variant='contained'>
            Add Drug
          </Button>
        </Grid> */}

          <MaterialReactTable
            columns={columns}
            data={rows}
            enableStickyHeader
            enableDensityToggle={false}
            enableFullScreenToggle={false}
            enableFilterMatchHighlighting={true}
            enableHiding={false}
            initialState={{ density: 'compact', showGlobalFilter: true, pagination: { pageSize: 10, pageIndex: 0 } }}
            muiTableContainerProps={{ sx: { backgroundColor: '#000' } }}
            renderTopToolbarCustomActions={({ table }) => (
              <>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '16px',
                    padding: '8px',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    width: '79%',
                    mt: -1
                  }}
                >
                  <Typography variant='h4'>List of Drugs</Typography>
                  <div>
                    <Button
                      variant='contained'
                      onClick={() => {
                        handleDrugOpen()
                      }}
                    >
                      Add Drug
                    </Button>
                  </div>
                </Box>
              </>
            )}
            muiTableBodyProps={{
              sx: theme => ({
                '& tr:nth-of-type(even)': {
                  backgroundColor: '#fafafa !important'
                }
              })
            }}
            renderBottomToolbarCustomActions={() => (
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px' }}>
                <Typography>{`Showing 1 to ${Math.min(rows.length, 10)} of ${rows.length} entries`}</Typography>
                {/* Add any additional footer information here */}
              </div>
            )}
          />
        </TabPanel>
      </TabContext>

      <Dialog open={openDrugDialog} onClose={handleDrugClose} maxWidth='sm' fullWidth={true}>
        <form>
          <DialogTitle id='alert-dialog-title' sx={{ backgroundColor: '#1452a2' }}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='h5' color={'#fff'} sx={{ mb: 2 }}>
                Add Drug
              </Typography>
              <IconButton aria-label='capture screenshot' sx={{ mt: -4, color: '#fff' }} onClick={handleDrugClose}>
                <Icon icon='bx:x' />
              </IconButton>
            </Grid>
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={6}>
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
                  onChange={e => setDrugDetails({ ...drugDetails, drug_name: e.target.value })}
                  value={drugDetails.drug_name}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Quantity'
                  label='Quantity'
                  type='number'
                  inputProps={{ style: { textTransform: 'capitalize' } }}
                  onChange={e => setDrugDetails({ ...drugDetails, quantity: e.target.value })}
                  value={drugDetails.quantity}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Type'
                  label='Type'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize' } }}
                  onChange={e => setDrugDetails({ ...drugDetails, type: e.target.value })}
                  value={drugDetails.type}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='In-Stock'
                  label='In-Stock'
                  type='number'
                  inputProps={{ style: { textTransform: 'capitalize' } }}
                  onChange={e => setDrugDetails({ ...drugDetails, in_stock: e.target.value })}
                  value={drugDetails.in_stock}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Description'
                  label='Description'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize' } }}
                  onChange={e => setDrugDetails({ ...drugDetails, description: e.target.value })}
                  value={drugDetails.description}
                  rows={5}
                  multiline
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions className='dialog-actions-dense'>
            <Button variant='contained' type='submit'>
              Confirm
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

const PharmacyProfile = () => {
  const [pharmacyInfo, setPharmacyInfo] = useState({})

  const cbsa = [
    { value: 'broker-view', label: 'Can View Account' },
    { value: 'broker-create', label: 'Can Create Account' },
    { value: 'broker-update', label: 'Can Update Account' },
    { value: 'broker-reset-password', label: 'Can Reset Password' }
  ]

  return (
    <form>
      <Grid container spacing={6} sx={{ mt: 5 }}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <CustomTextField
            fullWidth
            required={true}
            variant='outlined'
            size='small'
            placeholder='Pharmacy Name'
            label='Pharmacy Name'
            type='text'
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={e => setPharmacyInfo({ ...pharmacyInfo, pharmacy_name: e.target.value })}
            value={pharmacyInfo.pharmacy_name}
          />
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
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={e => setPharmacyInfo({ ...pharmacyInfo, street: e.target.value })}
            value={pharmacyInfo.pharmacy_name}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6}>
          <CustomTextField
            fullWidth
            required={true}
            variant='outlined'
            size='small'
            placeholder='NABP'
            label='NABP'
            type='text'
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={e => setPharmacyInfo({ ...pharmacyInfo, nabp: e.target.value })}
            value={pharmacyInfo.pharmacy_name}
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
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={e => setPharmacyInfo({ ...pharmacyInfo, city: e.target.value })}
            value={pharmacyInfo.city}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6}>
          <CustomTextField
            fullWidth
            required={true}
            variant='outlined'
            size='small'
            placeholder='NPI'
            label='NPI'
            type='text'
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={e => setPharmacyInfo({ ...pharmacyInfo, npi: e.target.value })}
            value={pharmacyInfo.npi}
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
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={e => setPharmacyInfo({ ...pharmacyInfo, state: e.target.value })}
            value={pharmacyInfo.state}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6}>
          <CustomTextField
            fullWidth
            required={true}
            variant='outlined'
            size='small'
            placeholder='Fax Number'
            label='Fax Number'
            type='text'
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={e => setPharmacyInfo({ ...pharmacyInfo, fax: e.target.value })}
            value={pharmacyInfo.fax}
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
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={e => setPharmacyInfo({ ...pharmacyInfo, zip: e.target.value })}
            value={pharmacyInfo.zip}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6}>
          <CustomTextField
            fullWidth
            required={true}
            variant='outlined'
            size='small'
            placeholder='Phone Number'
            label='Phone Number'
            type='text'
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={e => setPharmacyInfo({ ...pharmacyInfo, phone: e.target.value })}
            value={pharmacyInfo.phone}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6}>
          <FormLabel>
            Status<span className='req-color'>*</span>
          </FormLabel>
          <br />
          <FormControlLabel
            control={<Switch checked={pharmacyInfo.active} />}
            label={pharmacyInfo.active ? 'Active' : 'Inactive'}
            onChange={e => setPharmacyInfo({ ...pharmacyInfo, active: e.target.checked })}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Typography variant='h4' sx={{ mb: 0 }}>
            CBSA (Core-Based Statistical Area)
          </Typography>

          <Typography variant='subtitle'>
            Will only show CBSAs that contain a zip code within 200 miles of the Pharmacy zip code
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12}></Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Typography variant='h4' sx={{ mb: 0 }}>
            State Services
          </Typography>

          <Typography variant='subtitle'>States are preloaded</Typography>
        </Grid>

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
          <div></div>
          <div>
            <Button type='submit' variant='contained' size={'lg'} sx={{ mr: 3 }}>
              Save
            </Button>

            <Button type='submit' variant='contained' size={'lg'} color={'error'}>
              Cancel
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  )
}

export default AddPharmacy
