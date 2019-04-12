import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageTitle from '../components/PageTitle'
import GoogleMap from '../components/GoogleMap'
import { withStyles } from '@material-ui/core/styles'
import theme from '../theme'

const styles = {
  map: {
    width: '100vw',
    height: '50vh',
  },
  address: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 300,
    textAlign: 'center',
    marginBottom: '40px',
  },
  addressLine: {
    marginTop: 0,
    marginBottom: 0,
  },
}

const DirectionsPage = ({ classes }) => (
  <Layout>
    <SEO
      title="Find os - Gasworks, kontorfælleskab på Vesterbro"
      keywords={[`kontorfælleskab`, `egen plads`, `eget skrivebord`]}
    />

    <PageTitle title="Adresse" />

    <div
      className={classes.address}
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <p itemProp="name" className={classes.addressLine}>
        Gasworks kontorfælleskab
      </p>
      <div
        className={classes.addressLine}
        itemProp="address"
        itemScope
        itemType="http://schema.org/PostalAddress"
      >
        <p itemProp="streetAddress" className={classes.addressLine}>
          Gasværksvej 8D, 1. tv
        </p>
        <span itemProp="postalCode">1656</span>{' '}
        <span itemProp="addressLocality">København V</span>
      </div>
    </div>

    <div className={classes.map}>
      <GoogleMap
        apiKey="AIzaSyA1fmSW6Z45b1FR5GOlzaRjMG4MF_xKUPI"
        title="Gasworks kontorfælleskab"
        lat={55.67127}
        lng={12.55585}
      />
    </div>
  </Layout>
)

export default withStyles(styles)(DirectionsPage)
