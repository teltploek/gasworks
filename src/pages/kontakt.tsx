import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageTitle from '../components/PageTitle'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  wrapper: {
    marginBottom: '140px',
  },

  hidden: {
    display: 'none',
  },

  intro: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 100,
    padding: '0 20px',
    textAlign: 'center',
    marginBottom: '60px',
  },

  centered: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
  },

  inputGroup: {
    position: 'relative',
    marginBottom: '45px',
  },

  inputField: {
    fontSize: '18px',
    fontFamily: 'europa, sans-serif',
    padding: '10px 10px 10px 5px',
    appearance: 'none',
    border: 'none',
    borderBottom: '1px solid #555',
    width: '300px',
    transition: '0.2s ease all',
    fontWeight: 100,

    '&:focus': {
      outline: 'none',
      borderBottom: '2px solid #000',
    },
  },

  messageField: {
    fontSize: '18px',
    fontFamily: 'europa, sans-serif',
    border: 'none',
    borderBottom: '1px solid #555',
    padding: '10px 10px 10px 5px',
    appearance: 'none',
    width: '300px',
    height: '100px',
    transition: '0.2s ease all',

    '&:focus': {
      outline: 'none',
      borderBottom: '2px solid #000',
    },
  },

  label: {
    color: '#222',
    fontFamily: 'europa, sans-serif',
    fontSize: '18px',
    fontWeight: 400,
    position: 'absolute',
    pointerEvents: 'none',
    left: '5px',
    top: '10px',
    transition: '0.2s ease all',
  },

  button: {
    appearance: 'none',
    fontFamily: 'europa, sans-serif',
    fontSize: '20px',
    border: 0,
    background: '#222',
    borderRadius: '100px',
    width: '200px',
    padding: '12px 40px',
    textAlign: 'center',
    color: '#fff',
    transition: '0.2s ease all',
    margin: '0 auto',
    display: 'inline-block',

    '&:hover': {
      transform: 'scale(1.1)',
    },

    '&:active': {
      transform: 'scale(1.3)',
    },
  },

  '@global': {
    'input:focus ~ label, input:valid ~ label, textarea:focus ~ label, textarea:valid ~ label': {
      top: '-20px',
      fontSize: '14px',
      color: '#000',
    },
  },
})

export interface IContactPageProps {
  classes: any
}

export interface IContactPageState {
  name: string
  email: string
  message: string
}

class ContactPage<T extends IContactPageProps> extends React.Component<
  T,
  IContactPageState
> {
  public state: IContactPageState

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  private handleChange = e => {
    let newState = {}

    newState[e.target.name] = e.target.value

    this.setState(newState)
  }

  public render() {
    return (
      <Layout>
        <SEO
          title="Kontakt os - Gasworks, kontorfælleskab på Vesterbro"
          keywords={[`kontorfælleskab`, `egen plads`, `eget skrivebord`]}
        />

        <PageTitle title="Kontakt" />

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={this.props.classes.wrapper}
        >
          <Grid item xs={12} sm={4}>
            <p className={this.props.classes.intro}>
              Tøv endelig ikke med at udfylde nedenstående, hvis du har
              spørgsmål, kommentarer eller på andre måder har brug for at lade
              os vide et eller andet 😎
            </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <form
              name="contact"
              method="POST"
              action="/succes"
              netlify-honeypot="gasworks-extras"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />

              <p className={this.props.classes.hidden}>
                <label>
                  So... gasworks extras...: <input name="gasworks-extras" />
                </label>
              </p>

              <Grid item xs={12} sm={6}>
                <div className={this.props.classes.inputGroup}>
                  <input
                    className={this.props.classes.inputField}
                    type="text"
                    name="name"
                    required
                    onChange={this.handleChange}
                    value={this.state.name}
                    autoComplete="off"
                  />

                  <label className={this.props.classes.label}>Navn</label>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div className={this.props.classes.inputGroup}>
                  <input
                    className={this.props.classes.inputField}
                    type="email"
                    name="email"
                    required
                    onChange={this.handleChange}
                    value={this.state.email}
                  />

                  <label className={this.props.classes.label}>Email</label>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <div className={this.props.classes.inputGroup}>
                  <textarea
                    className={this.props.classes.messageField}
                    name="message"
                    required
                    onChange={this.handleChange}
                  />

                  <label className={this.props.classes.label}>Besked</label>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} className={this.props.classes.centered}>
                <button className={this.props.classes.button} type="submit">
                  Send
                </button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Layout>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ContactPage)
