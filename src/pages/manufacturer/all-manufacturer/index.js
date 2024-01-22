// ** MUI Imports
import { useMemo } from 'react'
import { MaterialReactTable } from 'material-react-table'
import { Box, Button } from '@mui/material'

import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

import { useRouter } from 'next/navigation'

const AllManufacturer = () => {
  const { push } = useRouter()

  const rows = [
    {
      id: 1,
      manufacture: 'Johnson & Johnson',
      primary_contact: 'Ms. Bridgette Connect',
      contact_number: '1234567890',
      email: 'ce121A@gmail.com',
      address: '526 W 30th St, New York, NY 10001 '
    },
    {
      id: 2,
      manufacture: 'Teva Pharmaceuticals',
      primary_contact: 'Mr. Alistair Communique',
      contact_number: '0987654332',
      email: 'jhg421A@gmail.com',
      address: '526 W 30th St, New York, NY 10001 '
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
              {row.original.manufacture}{' '}
            </Typography>
          </div>
        )
      },
      {
        accessorKey: 'primary_contact',
        header: 'PRIMARY CONTACT NO.',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.primary_contact} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'contact_number',
        header: 'CONTACT NO',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.contact_number} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'email',
        header: 'E-MAIL',
        Cell: ({ cell, row }) => (
          <div>
            <Typography>{row.original.email} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'address',
        header: 'Address',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.address} </Typography>
          </div>
        )
      }
    ],
    []
  )

  return (
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
                <Typography variant='h4'>All Manufacturer</Typography>
                <div>
                  <Button variant='contained' sx={{ mr: 4 }} color={'secondary'}>
                    Generate Report
                  </Button>
                  <Button variant='contained' onClick={() => push('/manufacturer/add-manufacturer')}>
                    Add Manufacturer
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
      </Grid>
    </Grid>
  )
}

export default AllManufacturer
