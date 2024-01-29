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
                  <Typography variant='h4'>All User</Typography>
                  <div>
                    <StyledButton variant='contained' onClick={() => push('/users/add-user')}>
                      Add User
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

export default AllUser
