// ** MUI Imports
import { useMemo } from 'react'
import { MaterialReactTable } from 'material-react-table'
import { Box, Button, Card, CardContent } from '@mui/material'

import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

import { useRouter } from 'next/navigation'

import { styled, useTheme } from '@mui/material/styles'

const StyledButton = styled(Button)(({ theme, color = 'primary' }) => ({
  ':hover': {
    color: 'white',
    backgroundColor: '#0e3973'
  },
  backgroundColor: '#072142'
}))

const DrugRequest = () => {
  const { push } = useRouter()

  const rows = [
    {
      id: 1,
      drug_name: 'Paracetamol',
      prescriber_name: 'John Smith, MD',
      npi: '123145',
      time: '11:30 AM',
      city: 'New York',
      state: 'New York',
      date: '12-23-23',
      prescription: 'New York'
    },

    {
      id: 2,
      drug_name: 'Salbutamol',
      prescriber_name: 'Mary Jones, DO',
      npi: '123145',
      time: '12:30 PM',
      city: 'New York',
      state: 'New York',
      date: '12-23-23',
      prescription: 'New York'
    }
  ]

  const columns = useMemo(
    () => [
      {
        accessorKey: 'drug_name',
        header: 'Drug Name',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.drug_name} </Typography>
          </div>
        )
      },

      {
        accessorKey: 'npi',
        header: 'Prescriber NPI',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.npi} </Typography>
          </div>
        )
      },

      {
        accessorKey: 'prescriber_name',
        header: 'Prescriber Name',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.prescriber_name} </Typography>
          </div>
        )
      },

      {
        accessorKey: 'city',
        header: 'City',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.city} </Typography>
          </div>
        )
      },

      {
        accessorKey: 'state',
        header: 'State',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.state} </Typography>
          </div>
        )
      },

      {
        accessorKey: 'date',
        header: 'Date',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.date} </Typography>
          </div>
        )
      },

      {
        accessorKey: 'time',
        header: 'Time',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.time} </Typography>
          </div>
        )
      },

      {
        accessorKey: 'prescription',
        header: 'Monthly Prescription',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.prescription} </Typography>
          </div>
        )
      }
    ],
    []
  )

  return (
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
                    width: '75%',
                    mt: -1
                  }}
                >
                  <Typography variant='h4'>All Drug Request</Typography>
                  <div>
                    <StyledButton variant='contained' onClick={() => push('/coupon/add-coupon')}>
                      Generate Report
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
        </Grid>
      </Grid>
    </Card>
  )
}

export default DrugRequest
