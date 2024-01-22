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
      coupon_id: 'AFE4373',
      manufacturer: 'Johnson & Johnson',
      drug: 'Acetaminophen',
      bin: '234567',
      pcn: '1234567895',
      group: '126458'
    },

    {
      id: 2,
      coupon_id: 'F1F5G6S',
      manufacturer: 'Pfizer',
      drug: 'Ibuprofen',
      bin: '3959298',
      pcn: '9876543221',
      group: '624268'
    }
  ]

  const columns = useMemo(
    () => [
      {
        accessorKey: 'coupon_id',
        header: 'COUPON ID',
        Cell: ({ cell, row }) => (
          <div>
            <Typography
              sx={{ textTransform: 'capitalize', textDecoration: 'underline' }}
              color={'primary.main'}
              fontWeight={450}
            >
              {row.original.coupon_id}{' '}
            </Typography>
          </div>
        )
      },
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
                <Typography variant='h4'>All Coupon</Typography>
                <div>
                  <Button variant='contained' onClick={() => push('/coupon/add-coupon')}>
                    Add Coupon
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
