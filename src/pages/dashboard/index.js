import { useEffect, useState } from 'react'
import { getSession } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { Card, Grid, Typography, CardHeader, CardContent, Box, Divider, Button } from '@mui/material/'

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
    </Grid>
  )
}

export default Dashboard
