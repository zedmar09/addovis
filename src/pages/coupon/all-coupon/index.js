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

const AllManufacturer = () => {
  const { push } = useRouter()

  const rows = [
    {
      id: 1,
      manufacturer: 'Johnson & Johnson',
      drug: 'Acetaminophen',
      bin: '234567',
      pcn: '1234567895',
      group: '126458',
      active: 'YES'
    },

    {
      id: 2,
      manufacturer: 'Pfizer',
      drug: 'Ibuprofen',
      bin: '3959298',
      pcn: '9876543221',
      group: '624268',
      active: 'NO'
    }
  ]

  const columns = useMemo(
    () => [
      {
        accessorKey: 'manufacturer',
        header: 'manufacturer name',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.manufacturer} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'drug',
        header: 'drug name',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.drug} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'bin',
        header: 'bin',
        Cell: ({ cell, row }) => (
          <div>
            <Typography>{row.original.bin} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'pcn',
        header: 'pcn',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.pcn} </Typography>
          </div>
        )
      },
      {
        accessorKey: 'group',
        header: 'group',
        Cell: ({ cell, row }) => (
          <div>
            <Typography sx={{ textTransform: 'capitalize' }}>{row.original.group} </Typography>
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
                  <Typography variant='h4'>All Coupon</Typography>
                  <div>
                    <StyledButton variant='contained' onClick={() => push('/coupon/add-coupon')}>
                      Add Coupon
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

export default AllManufacturer
