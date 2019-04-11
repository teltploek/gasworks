import React from 'react'
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle'
import { Grid } from '@material-ui/core'

const ContactSuccessPage = () => (
  <Layout>
    <PageTitle title="Kontakt" />

    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <p>
          Tak for din henvendelse! Vi vil forsøge at besvare så hurtigt vi kan
          😀
        </p>
      </Grid>
    </Grid>
  </Layout>
)

export default ContactSuccessPage
