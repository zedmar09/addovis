// ** MUI Imports
import { useMemo } from 'react'
import { MaterialReactTable } from 'material-react-table'
import { Box, Button } from '@mui/material'

import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

import { useRouter } from 'next/navigation'

const AllUser = () => {
  const { push } = useRouter()

  const rows = [
    {
      id: 1,
      fullname: 'John Smith ',
      email: '1231DAEda@gmail.com',
      active: 'YES'
    },
    {
      id: 2,
      fullname: 'Albert Irvin',
      email: '123456789a@gmail.com',
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
              {row.original.fullname}
            </Typography>
          </div>
        )
      },
      {
        accessorKey: 'email',
        header: 'E-MAIL ADDRESS',
        Cell: ({ cell, row }) => (
          <div>
            <Typography>{row.original.email} </Typography>
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
                  width: '80%',
                  mt: -1
                }}
              >
                <Typography variant='h4'>All User</Typography>
                <div>
                  <Button variant='contained' onClick={() => push('/users/add-user')}>
                    Add User
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

export default AllUser
