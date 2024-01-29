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
  Card,
  CardContent,
  InputAdornment,
  Tooltip
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
    backgroundColor: theme.palette.primary.dark,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    lineHeight: 1,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      color: theme.palette.primary.dark
    }
  }
}))

const StyledButton = styled(Button)(({ theme, color = 'primary' }) => ({
  ':hover': {
    color: 'white',
    backgroundColor: '#0e3973'
  },
  backgroundColor: '#072142'
}))

const UpdateDrug = () => {
  // ** State for tabs
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const [drugDetails, setDrugDetails] = useState({
    drug_name: 'Acetaminophen',
    type: 'Generic',
    description: 'Pain reliever and fever reducer'
  })

  return (
    <>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label='customized tabs example'>
          <Tab value='1' label='Profile' />
          <Tab value='2' label='Pharmacy Stock' />
          <Tab value='3' label='Pharmacy Metrics' />
        </TabList>

        <TabPanel value='1'>
          <DrugInformation drugDetails={drugDetails} setDrugDetails={setDrugDetails} />

          <Manufacturer drugDetails={drugDetails} setDrugDetails={setDrugDetails} />

          <AssociatedDrug drugDetails={drugDetails} setDrugDetails={setDrugDetails} />
        </TabPanel>
        <TabPanel value='2'>
          <PharmacyStock />
        </TabPanel>

        <TabPanel value='3'>
          <PharmacyMetrics />
        </TabPanel>
      </TabContext>
    </>
  )
}

const DrugInformation = ({ drugDetails, setDrugDetails }) => {
  return (
    <>
      <form>
        <Card sx={{ borderRadius: 0 }}>
          <CardContent>
            <Grid container spacing={6} sx={{ mb: 4 }}>
              <Grid item xs={12}>
                {' '}
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
                  placeholder='Drug Name'
                  label='Drug Name'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
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
                  placeholder='Type'
                  label='Type'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setDrugDetails({ ...drugDetails, type: e.target.value })}
                  value={drugDetails.type}
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
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setDrugDetails({ ...drugDetails, description: e.target.value })}
                  value={drugDetails.description}
                  rows={5}
                  multiline
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </>
  )
}

const Manufacturer = ({ drugDetails, setDrugDetails }) => {
  //OPEN MANUFACTURER DIALOG
  const [openManufacturerDialog, setOpenManufacturerDialog] = useState(false)
  const handleManufacturerOpen = () => setOpenManufacturerDialog(true)
  const handleManufacturerClose = () => setOpenManufacturerDialog(false)

  const [manufacturerInfo, setManufacturerInfo] = useState({})

  const rows = [
    {
      id: 1,
      manufacture: 'Johnson & Johnson',
      ndc: '8673 4325 33',
      quantity: '100',
      type: 'Capsule',
      active: 'YES'
    },
    {
      id: 2,
      manufacture: 'Teva Pharmaceuticals',
      ndc: '7654 8755 12',
      quantity: '100',
      type: 'Capsule',
      active: 'NO'
    }
  ]

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'MANUFACTURER',
        Cell: ({ cell, row }) => (
          <div>
            <Typography
              sx={{ textTransform: 'capitalize', textDecoration: 'underline' }}
              color={'primary.main'}
              fontWeight={450}
            >
              {row.original.manufacture}{' '}
            </Typography>
          </div>
        )
      },
      {
        accessorKey: 'ndc',
        header: 'NDC',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.ndc} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'quantity',
        header: '30 DAY QUANTITY',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.quantity} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'type',
        header: 'QUANTITY TYPE',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.type} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'active',
        header: 'Is Active',
        Cell: ({ cell, row }) => (
          <div>
            <Typography
              sx={{ textTransform: 'capitalize' }}
              color={row.original.active == 'YES' ? 'success.main' : 'error'}
              fontWeight={500}
            >
              {row.original.active}{' '}
            </Typography>
          </div>
        )
      }
    ],
    []
  )

  return (
    <>
      <Card sx={{ borderRadius: 0, mt: 5 }}>
        <Grid container spacing={6} sx={{ mt: 3 }}>
          <Grid item xs={12}>
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
                      width: '73%',
                      mt: -1
                    }}
                  >
                    <Typography variant='h4'>Manufacturer</Typography>

                    <StyledButton variant='contained' onClick={handleManufacturerOpen}>
                      Add Manufacturer
                    </StyledButton>
                  </Box>
                </>
              )}
              muiTablePaperProps={{
                elevation: 0,
                sx: {
                  borderRadius: '0'
                }
              }}
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
          </Grid>
        </Grid>
      </Card>

      <Dialog open={openManufacturerDialog} onClose={handleManufacturerClose} maxWidth='xs' fullWidth={true}>
        <form>
          <DialogTitle id='alert-dialog-title' sx={{ backgroundColor: '#072142' }}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='h5' color={'#fff'} sx={{ mb: 2 }}>
                Add Manufacturer
              </Typography>
              <IconButton
                aria-label='capture screenshot'
                sx={{ mt: -4, color: '#fff' }}
                onClick={handleManufacturerClose}
              >
                <Icon icon='bx:x' />
              </IconButton>
            </Grid>
          </DialogTitle>
          <DialogContent>
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
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  value={drugDetails.drug_name}
                />
              </Grid>

              <Grid item xs={12}>
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

              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='NDC'
                  label='NDC'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setManufacturerInfo({ ...manufacturerInfo, ndc: e.target.value })}
                  value={manufacturerInfo.ndc}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='30 Day Quantity'
                  label='30 Day Quantity'
                  type='number'
                  inputProps={{ style: { backgroundColor: '#f5f5f5' } }}
                  onChange={e => setManufacturerInfo({ ...manufacturerInfo, quantity: e.target.value })}
                  value={manufacturerInfo.quantity}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Quantity Type'
                  label='Quantity Type'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setManufacturerInfo({ ...manufacturerInfo, quantity_type: e.target.value })}
                  value={manufacturerInfo.quantity_type}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormLabel>
                  Status<span className='req-color'>*</span>
                </FormLabel>
                <br />
                <FormControlLabel
                  control={<Switch checked={manufacturerInfo.active} />}
                  label={manufacturerInfo.active ? 'Active' : 'Inactive'}
                  onChange={e => setManufacturerInfo({ ...manufacturerInfo, active: e.target.checked })}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions className='dialog-actions-dense'>
            <StyledButton variant='contained' type='submit'>
              Save
            </StyledButton>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

const AssociatedDrug = ({ drugDetails, setDrugDetails }) => {
  //OPEN ASSOCIATE DRUG DIALOG
  const [openDrugAssociateDialog, setOpenDrugAssociateDialog] = useState(false)
  const handleDrugAssociateOpen = () => setOpenDrugAssociateDialog(true)
  const handleDrugAssociateClose = () => setOpenDrugAssociateDialog(false)

  const [drugAssociate, setDrugAssociate] = useState({})

  const rows = [
    {
      id: 1,
      drug: 'Tylenol',
      description: 'Reduces fever: associated with colds, flu, or other illnesses',
      abrated: 'Yes',
      active: 'YES'
    },
    {
      id: 2,
      drug: 'Excedrin',
      description: ' Relief for: Headaches, muscle aches, toothaches, menstrual cramps, and fever.',
      abrated: 'Yes',
      active: 'NO'
    }
  ]

  const columns = useMemo(
    () => [
      {
        accessorKey: 'drug',
        header: 'DRUG NAME',
        Cell: ({ cell, row }) => (
          <div>
            <Typography
              sx={{ textTransform: 'capitalize', textDecoration: 'underline' }}
              color={'primary.main'}
              fontWeight={450}
            >
              {row.original.drug}{' '}
            </Typography>
          </div>
        )
      },
      {
        accessorKey: 'description',
        header: 'description',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.description} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'abrated',
        header: 'AB RATED',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.abrated} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'active',
        header: 'Is Active',
        Cell: ({ cell, row }) => (
          <div>
            <Typography
              sx={{ textTransform: 'capitalize' }}
              color={row.original.active == 'YES' ? 'success.main' : 'error'}
              fontWeight={500}
            >
              {row.original.active}{' '}
            </Typography>
          </div>
        )
      }
    ],
    []
  )

  return (
    <>
      <Card sx={{ borderRadius: 0, mt: 5 }}>
        <Grid container spacing={6} sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <MaterialReactTable
              columns={columns}
              data={rows}
              enableStickyHeader
              enableDensityToggle={false}
              enableFullScreenToggle={false}
              enableFilterMatchHighlighting={true}
              enableHiding={false}
              initialState={{
                density: 'compact',
                showGlobalFilter: true,
                pagination: { pageSize: 10, pageIndex: 0 }
              }}
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
                      width: '73%',
                      mt: -1
                    }}
                  >
                    <Typography variant='h4'>Associated Drugs</Typography>

                    <StyledButton variant='contained' onClick={handleDrugAssociateOpen}>
                      Associate Drug
                    </StyledButton>
                  </Box>
                </>
              )}
              muiTablePaperProps={{
                elevation: 0,
                sx: {
                  borderRadius: '0'
                }
              }}
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
          </Grid>
        </Grid>
      </Card>

      <Dialog open={openDrugAssociateDialog} onClose={handleDrugAssociateClose} maxWidth='xs' fullWidth={true}>
        <form>
          <DialogTitle id='alert-dialog-title' sx={{ backgroundColor: '#072142' }}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='h5' color={'#fff'} sx={{ mb: 2 }}>
                Associate Drug
              </Typography>
              <IconButton
                aria-label='capture screenshot'
                sx={{ mt: -4, color: '#fff' }}
                onClick={handleDrugAssociateClose}
              >
                <Icon icon='bx:x' />
              </IconButton>
            </Grid>
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Generic Brand'
                  label='Generic Brand'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#ddd' } }}
                  value={'Acetaminophen'}
                  disabled
                />
              </Grid>

              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Branded Drug'
                  label='Branded Drug'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setDrugAssociate({ ...drugAssociate, branded: e.target.value })}
                  value={drugAssociate.branded}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormLabel>
                  AB Rated<span className='req-color'>*</span>
                </FormLabel>
                <br />
                <FormControlLabel
                  control={<Switch checked={drugAssociate.abrated} />}
                  label={drugAssociate.abrated ? 'Yes' : 'No'}
                  onChange={e => setDrugAssociate({ ...drugAssociate, abrated: e.target.checked })}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormLabel>
                  Status<span className='req-color'>*</span>
                </FormLabel>
                <br />
                <FormControlLabel
                  control={<Switch checked={drugAssociate.active} />}
                  label={drugAssociate.active ? 'Active' : 'Inactive'}
                  onChange={e => setDrugAssociate({ ...drugAssociate, active: e.target.checked })}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions className='dialog-actions-dense'>
            <StyledButton variant='contained' type='submit'>
              Save
            </StyledButton>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

const PharmacyStock = () => {
  //OPEN DRUG DIALOG
  const [openPharmacyDialog, setOpenPharmacyDialog] = useState(false)
  const handlePharmacyOpen = () => setOpenPharmacyDialog(true)
  const handlePharmacyClose = () => setOpenPharmacyDialog(false)

  const [pharmacyInfo, setPharmacyInfo] = useState({})

  const rows = [
    {
      id: 1,
      pharmacy_name: 'Blue Pharmacy',
      city: 'New York',
      state: 'New York',
      in_stock: '1111'
    },
    {
      id: 2,
      pharmacy_name: 'White Pharmacy',
      city: 'New York',
      state: 'New York',
      in_stock: '2222'
    }
  ]

  const columns = useMemo(
    () => [
      {
        accessorKey: 'pharmacy_name',
        header: 'PHARMACY NAME',
        Cell: ({ cell, row }) => (
          <div>
            <Typography
              sx={{ textTransform: 'capitalize', textDecoration: 'underline' }}
              color={'primary.main'}
              fontWeight={450}
            >
              {row.original.pharmacy_name}{' '}
            </Typography>
          </div>
        )
      },
      {
        accessorKey: 'city',
        header: 'city',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.city} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'state',
        header: 'state',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.state} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'in_stock',
        header: 'IN-STOCK',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.in_stock} </Typography>
          </div>
        )
      }
    ],
    []
  )

  return (
    <>
      <Card sx={{ borderRadius: 0, pt: 5 }}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
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
                      width: '74%',
                      mt: -1
                    }}
                  >
                    <Typography variant='h4'>Pharmacy Stock</Typography>

                    <StyledButton variant='contained' onClick={handlePharmacyOpen}>
                      Add Pharmacy
                    </StyledButton>
                  </Box>
                </>
              )}
              muiTablePaperProps={{
                elevation: 0,
                sx: {
                  borderRadius: '0'
                }
              }}
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
          </Grid>
        </Grid>
      </Card>

      <Dialog open={openPharmacyDialog} onClose={handlePharmacyClose} maxWidth='xs' fullWidth={true}>
        <form>
          <DialogTitle id='alert-dialog-title' sx={{ backgroundColor: '#072142' }}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='h5' color={'#fff'} sx={{ mb: 2 }}>
                Add Pharmacy
              </Typography>
              <IconButton aria-label='capture screenshot' sx={{ mt: -4, color: '#fff' }} onClick={handlePharmacyClose}>
                <Icon icon='bx:x' />
              </IconButton>
            </Grid>
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Pharmacy'
                  label='Pharmacy'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setPharmacyInfo({ ...pharmacyInfo, pharmacy_name: e.target.value })}
                  value={pharmacyInfo.pharmacy_name}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='City'
                  label='City'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setPharmacyInfo({ ...pharmacyInfo, city: e.target.value })}
                  value={pharmacyInfo.city}
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
                  inputProps={{ style: { textTransform: 'capitalize', backgroundColor: '#f5f5f5' } }}
                  onChange={e => setPharmacyInfo({ ...pharmacyInfo, state: e.target.value })}
                  value={pharmacyInfo.state}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='Quantity'
                  label='Quantity'
                  type='number'
                  inputProps={{ style: { backgroundColor: '#f5f5f5' } }}
                  onChange={e => setPharmacyInfo({ ...pharmacyInfo, quantity: e.target.value })}
                  value={pharmacyInfo.quantity}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomTextField
                  fullWidth
                  required={true}
                  variant='outlined'
                  size='small'
                  placeholder='In-Stock'
                  label='In-Stock'
                  inputProps={{ style: { backgroundColor: '#f5f5f5' } }}
                  type='number'
                  InputProps={{
                    endAdornment: (
                      <Tooltip title='Override'>
                        <InputAdornment position='end'>
                          <IconButton edge='end'>
                            <Icon fontSize='1.25rem' icon={'fa:undo'} />
                          </IconButton>
                        </InputAdornment>
                      </Tooltip>
                    )
                  }}
                  onChange={e => setPharmacyInfo({ ...pharmacyInfo, in_stock: e.target.value })}
                  value={pharmacyInfo.in_stock}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions className='dialog-actions-dense'>
            <StyledButton variant='contained' type='submit'>
              Save
            </StyledButton>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

const PharmacyMetrics = () => {
  const rows = [
    {
      id: 1,
      pharmacy_name: 'White Pharmacy',
      under_three_days: '12',
      over_three_days: '6',
      under_five_days: '2',
      over_five_days: '22',
      refills: '5',
      eligible: '11',
      score: '88'
    },

    {
      id: 2,
      pharmacy_name: 'Blue Pharmacy',
      under_three_days: '23',
      over_three_days: '56',
      under_five_days: '55',
      over_five_days: '22',
      refills: '9',
      eligible: '8',
      score: '50'
    },

    {
      id: 3,
      pharmacy_name: 'Orange Pharmacy',
      under_three_days: '11',
      over_three_days: '77',
      under_five_days: '2',
      over_five_days: '11',
      refills: '5',
      eligible: '22',
      score: '45'
    },

    {
      id: 4,
      pharmacy_name: 'Gold Pharmacy',
      under_three_days: '11',
      over_three_days: '44',
      under_five_days: '23',
      over_five_days: '22',
      refills: '6',
      eligible: '22',
      score: '25'
    }
  ]

  const columns = useMemo(
    () => [
      {
        accessorKey: 'pharmacy_name',
        header: 'PHARMACY NAME',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }} fontWeight={450}>
              {row.original.pharmacy_name}{' '}
            </Typography>
          </div>
        )
      },
      {
        accessorKey: 'under_three_days',
        header: 'No PA NRx Under 3 Days Dispensed',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.under_three_days} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'over_three_days',
        header: 'No PA NRx Over 3 Days Dispensed',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.over_three_days} </Typography>
          </div>
        )
      },

      {
        accessorKey: 'under_five_days',
        header: 'No PA NRx Under 5 Days Dispensed',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.under_five_days} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'over_five_days',
        header: 'No PA NRx Over 5 Days Dispensed',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.over_five_days} </Typography>
          </div>
        )
      },

      {
        accessorKey: 'refills',
        header: 'Refills Dispensed',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.refills} </Typography>
          </div>
        )
      },

      {
        accessorKey: 'eligible',
        header: 'Eligible Refills Not Dispensed',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.eligible} </Typography>
          </div>
        )
      },

      {
        accessorKey: 'score',
        header: 'Score',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.score} </Typography>
          </div>
        )
      }
    ],
    []
  )

  return (
    <>
      <Card sx={{ borderRadius: 0, pt: 5 }}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
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
                <Box sx={{ padding: 2 }}>
                  <Typography variant='h4'>Pharmacy Metrics</Typography>
                </Box>
              )}
              muiTablePaperProps={{
                elevation: 0,
                sx: {
                  borderRadius: '0'
                }
              }}
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
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default UpdateDrug
