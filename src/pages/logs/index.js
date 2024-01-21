// ** MUI Imports
import { useMemo } from 'react'
import { MaterialReactTable } from 'material-react-table'
import { Box, Button } from '@mui/material'

import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

import { useRouter } from 'next/navigation'

const TransactionLogs = () => {
  const { push } = useRouter()

  const rows = [
    {
      id: 1,
      created: '12-23-23 11:14:56',
      created_by: 'Admin',
      action: 'Add',
      resource: 'Pharmacy',
      changes: 'Add pharmacy 111 account'
    },
    {
      id: 2,
      created: '12-24-23 11:14:56',
      created_by: 'Admin',
      action: 'Delete',
      resource: 'Manufacturer',
      changes: 'Deleted Manufacturer 123'
    }
  ]

  const columns = useMemo(
    () => [
      {
        accessorKey: 'created',
        header: 'CREATED',
        Cell: ({ cell, row }) => (
          <div>
            <Typography>{row.original.created} </Typography>
          </div>
        )
      },

      {
        accessorKey: 'created_by',
        header: 'Created By',
        Cell: ({ cell, row }) => (
          <div>
            <Typography>{row.original.created_by} </Typography>
          </div>
        )
      },

      {
        accessorKey: 'action',
        header: 'Action',
        filterVariant: 'multi-select',
        Cell: ({ cell, row }) => (
          <div>
            <Typography>{row.original.action} </Typography>
          </div>
        )
      },

      {
        accessorKey: 'resource',
        header: 'Resource',
        filterVariant: 'multi-select',
        Cell: ({ cell, row }) => (
          <div>
            <Typography>{row.original.resource} </Typography>
          </div>
        )
      },

      {
        accessorKey: 'changes',
        header: 'CHANGES',
        Cell: ({ cell, row }) => (
          <div>
            <Typography>{row.original.changes} </Typography>
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
          enableFacetedValues
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
                <Typography variant='h4'>Transaction Logs</Typography>
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

export default TransactionLogs
