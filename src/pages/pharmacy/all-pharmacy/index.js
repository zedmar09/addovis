// ** MUI Imports
import { useMemo } from 'react'
import { MaterialReactTable } from 'material-react-table'
import { Box, Button } from '@mui/material'

import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

import { useRouter } from 'next/navigation'

const AllPharmacy = () => {
  const { push } = useRouter()

  const rows = [
    {
      id: 1,
      name: 'White Pharmacy',
      nabp: '4342432',
      npi: '3123243121',
      address: '526 W 30th St, New York, NY 10001 ',
      fax: '23125122',
      phone: '212-555-1212 ',
      active: 'YES'
    },
    {
      id: 2,
      name: 'Red Pharmacy',
      nabp: '756343252',
      npi: '3123243121',
      address: '383 W 31st St, New York, NY 10001',
      fax: '23312312',
      phone: '231-323-4545 ',
      active: 'YES'
    },
    {
      id: 3,
      name: 'Green Pharmacy',
      nabp: '756343252',
      npi: '3123243121',
      address: '383 W 31st St, New York, NY 10001',
      fax: '23312312',
      phone: '231-323-4545 ',
      active: 'NO'
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
        accessorKey: 'nabp',
        header: 'NAPB',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.nabp} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'npi',
        header: 'NPI',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.npi} </Typography>
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
      },
      {
        accessorKey: 'fax',
        header: 'Fax No.',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.fax} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'phone',
        header: 'Phone No.',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.phone} </Typography>
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
                <Typography variant='h4'>All Pharmacy</Typography>
                <div>
                  <Button variant='contained' sx={{ mr: 4 }} color={'secondary'}>
                    Generate Report
                  </Button>
                  <Button variant='contained' onClick={() => push('/pharmacy/add-pharmacy')}>
                    Add Pharmacy
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

export default AllPharmacy
