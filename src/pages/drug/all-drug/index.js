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
import { useRouter } from 'next/router'

const AllDrug = () => {
  const { push } = useRouter()

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
                <Button variant='tonal' sx={{ mr: 2 }}>
                  Associate Brand / Generic
                </Button>

                <Button variant='tonal' sx={{ mr: 2 }}>
                  Add Manufacturer for Drug
                </Button>
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
            <Button variant='contained' type='submit'>
              Confirm
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export default AllDrug
