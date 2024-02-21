import { useEffect, useState } from 'react'
import { getSession } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { Card, Grid, Typography, CardHeader, CardContent, Box, Divider, Button, Alert } from '@mui/material/'

import dayjs from 'dayjs'

import Icon from 'src/@core/components/icon'

const Dashboard = () => {
  //getting greetings from users
  const getGreeting = () => {
    const currentHour = dayjs().hour()

    if (currentHour >= 5 && currentHour < 12) {
      return 'Good Morning, '
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Good Afternoon, '
    } else {
      return 'Good Evening, '
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item lg={12} md={6} sm={6} xs={6}>
        <Typography variant='h3' sx={{ textTransform: 'capitalize' }}>
          {getGreeting()} Administrator!
        </Typography>
        <Typography variant='body2' color='secondary'>
          Here are the quick data overview of the inventory.
        </Typography>
      </Grid>

      <Grid item lg={12}>
        <Alert severity='warning' sx={{ borderRadius: 0, mt: 2 }}>
          Please take note of the following
        </Alert>

        <ol style={{ marginTop: 30 }}>
          <li>
            We will implement a <strong>"Global Search"</strong> once all the modules is finish
          </li>
          <li>
            We will implement pre-filled values for the other fields; however, this feature is currently unavailable due
            to demo purposes only, and it is not yet connected to the database.
          </li>
        </ol>
      </Grid>

      <Grid item lg={12}>
        <Alert severity='success' sx={{ borderRadius: 0, mt: 2 }}>
          Changes/updates of the designs <strong>February 20, 2023</strong>
        </Alert>

        <ol style={{ marginTop: 30 }}>
          <li>
            <strong>Pharmacy Page: </strong> Update inventory can select multiple NDC for the drug
          </li>
        </ol>
      </Grid>

      <Grid item lg={12}>
        <Alert severity='success' sx={{ borderRadius: 0, mt: 2 }}>
          Changes/updates of the designs <strong>February 14, 2023</strong>
        </Alert>

        <ol style={{ marginTop: 30 }}>
          <li>
            <strong>Pharmacy Page: </strong>The Pharmacy Name is now clickable. You can view the entries to update
            pharmacy information.
          </li>
          <li>
            <strong>Drug Page: </strong>Add Manufacturer: Update Header from “Add Manufacturer” to “Add Manufacturer for
            Drug”; Add field for “Authorized Generic” (Radio button for Y/N) below “Quantity Type
          </li>

          <li>
            <strong>Coupon Page: </strong> ID is removed in the table
          </li>
        </ol>
      </Grid>
    </Grid>
  )
}

export default Dashboard
