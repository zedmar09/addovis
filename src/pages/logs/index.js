// ** MUI Imports
import { useMemo } from 'react'
import { MaterialReactTable } from 'material-react-table'
import { Box, Button, Checkbox, Card, MenuItem, CardHeader, Divider, ListItem } from '@mui/material'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'

import CustomTextField from 'src/@core/components/mui/text-field'
import Icon from 'src/@core/components/icon'

import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

import { useRouter } from 'next/navigation'

import { styled, useTheme } from '@mui/material/styles'

const StyledList = styled(List)(({ theme }) => ({
  '& .MuiListItem-container': {
    border: `1px solid ${theme.palette.divider}`,
    '&:first-of-type': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius
    },
    '&:last-child': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    },
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '& .MuiListItem-root': {
      paddingRight: theme.spacing(24)
    },
    '& .MuiListItemText-root': {
      marginTop: 0,
      '& .MuiTypography-root': {
        fontWeight: 500
      }
    }
  }
}))

const StyledButton = styled(Button)(({ theme, color = 'primary' }) => ({
  ':hover': {
    color: 'white',
    backgroundColor: '#0e3973'
  },
  backgroundColor: '#072142',
  color: 'white'
}))

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
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant='h3'>Logs</Typography>
      </Grid>
      <Grid item xs={9}>
        <Card sx={{ borderRadius: 0, pt: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={1} sx={{ ml: 3, mt: 1 }}>
              <Typography variant='h5'>Action</Typography>
            </Grid>

            <Grid item xs={12} lg={4}>
              <CustomTextField select fullWidth placeholder='Action (Please Select)'>
                <MenuItem value='All'>All</MenuItem>
                <MenuItem value='Add'>Add</MenuItem>
                <MenuItem value='Update'>Update</MenuItem>
                <MenuItem value='Delete'>Delete</MenuItem>
              </CustomTextField>
            </Grid>

            <Grid item xs={12} lg={1} sx={{ textAlign: 'right' }}>
              <StyledButton>Go</StyledButton>
            </Grid>
          </Grid>

          <MaterialReactTable
            columns={columns}
            data={rows}
            enableRowSelection={true}
            enableFacetedValues
            enableStickyHeader
            enableDensityToggle={false}
            enableFullScreenToggle={false}
            enableFilterMatchHighlighting={true}
            enableHiding={false}
            initialState={{ density: 'compact', showGlobalFilter: true, pagination: { pageSize: 10, pageIndex: 0 } }}
            muiTableContainerProps={{ sx: { backgroundColor: '#000' } }}
            enableMultiRowSelection
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
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ borderRadius: 0 }}>
          <CardHeader title='FILTER' />
          <Divider />
          <StyledList disablePadding>
            <ListItem>
              <ListItemAvatar sx={{ mt: 2 }}>
                <Icon icon='icon-park-twotone:check-one' fontSize='19' />
              </ListItemAvatar>

              <div>
                <ListItemText primary='All' />
              </div>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemAvatar sx={{ mt: 2 }}>
                <Icon icon='iconamoon:file-add-duotone' fontSize='19' />
              </ListItemAvatar>

              <div>
                <ListItemText primary='Add' />
              </div>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemAvatar sx={{ mt: 2 }}>
                <Icon icon='line-md:pencil-twotone' fontSize='19' />
              </ListItemAvatar>

              <div>
                <ListItemText primary='Update' />
              </div>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemAvatar sx={{ mt: 2 }}>
                <Icon icon='ph:trash-duotone' fontSize='19' />
              </ListItemAvatar>

              <div>
                <ListItemText primary='Delete' />
              </div>
            </ListItem>
          </StyledList>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TransactionLogs
