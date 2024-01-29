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
  Card,
  Button,
  CardContent,
  FormControlLabel,
  Switch,
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  IconButton,
  FormLabel
} from '@mui/material'

// ** Custom Components Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'
import Icon from 'src/@core/components/icon'
import { MaterialReactTable } from 'material-react-table'
import { useRouter } from 'next/router'

const StyledButton = styled(Button)(({ theme, color = 'primary' }) => ({
  ':hover': {
    color: 'white',
    backgroundColor: '#0e3973'
  },
  backgroundColor: '#072142'
}))

const AllDrug = () => {
  const { push } = useRouter()

  //OPEN DRUG DIALOG
  const [openDrugDialog, setOpenDrugDialog] = useState(false)
  const handleDrugOpen = () => setOpenDrugDialog(true)
  const handleDrugClose = () => setOpenDrugDialog(false)

  //OPEN ASSOCIATE DRUG DIALOG
  const [openDrugAssociateDialog, setOpenDrugAssociateDialog] = useState(false)
  const handleDrugAssociateOpen = () => setOpenDrugAssociateDialog(true)
  const handleDrugAssociateClose = () => setOpenDrugAssociateDialog(false)

  //OPEN MANUFACTURER DIALOG
  const [openManufacturerDialog, setOpenManufacturerDialog] = useState(false)
  const handleManufacturerOpen = () => setOpenManufacturerDialog(true)
  const handleManufacturerClose = () => setOpenManufacturerDialog(false)

  const [manufacturerInfo, setManufacturerInfo] = useState({})
  const [drugDetails, setDrugDetails] = useState({})
  const [drugAssociate, setDrugAssociate] = useState({})

  const rows = [
    {
      id: 1,
      name: 'Tylenold',
      type: 'Branded',
      description: 'Pain reliever and fever reducer'
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
              sx={{ textTransform: 'capitalize', textDecoration: 'underline', cursor: 'pointer' }}
              color={'primary.main'}
              fontWeight={450}
              onClick={() => {
                push(`/drug/update-drug/${row.original.id}`)
              }}
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
      }
    ],
    [push]
  )

  return (
    <>
      <Card sx={{ borderRadius: 0 }}>
        <CardContent sx={{ p: 0, mt: 7 }}>
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
                    width: '75%',
                    mt: -1
                  }}
                >
                  <Typography variant='h4'>List of Drugs</Typography>
                  <div>
                    <Button
                      variant='tonal'
                      sx={{ mr: 2 }}
                      onClick={() => {
                        handleDrugAssociateOpen()
                      }}
                    >
                      Associate Brand / Generic
                    </Button>

                    <Button
                      variant='tonal'
                      sx={{ mr: 2 }}
                      onClick={() => {
                        handleManufacturerOpen()
                      }}
                    >
                      Add Manufacturer for Drug
                    </Button>
                    <StyledButton
                      variant='contained'
                      onClick={() => {
                        handleDrugOpen()
                      }}
                    >
                      Add Drug
                    </StyledButton>
                  </div>
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
        </CardContent>
      </Card>

      <Dialog open={openDrugDialog} onClose={handleDrugClose} maxWidth='sm' fullWidth={true}>
        <form>
          <DialogTitle id='alert-dialog-title' sx={{ backgroundColor: '#072142' }}>
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
                  placeholder='Type'
                  label='Type'
                  type='text'
                  inputProps={{ style: { textTransform: 'capitalize' } }}
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
            <StyledButton variant='contained' type='submit'>
              Confirm
            </StyledButton>
          </DialogActions>
        </form>
      </Dialog>

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

export default AllDrug
