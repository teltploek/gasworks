import classNames from 'classnames'
import * as React from 'react'
import { Grid } from '@material-ui/core'
import { Link } from 'gatsby'
import Burger from './Burger'
import { withStyles } from '@material-ui/core/styles'
//import LunrSearch from './LunrSearch';

export interface ISiteNavigationProps {
	bright?: boolean
  classes: any
}

export interface ISiteNavigationState {
  isOpen: boolean
}

const styles = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    background: '#fff',
    position: 'fixed',
    width: '100vw',
    bottom: 0,
    color: '#000',
    height: '100px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.50)',
    zIndex: 1000,

    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      boxShadow: 'none',
      padding: '100px 80px 80px 0',
      top: 0,
      bottom: 'auto',
	},
	
	[theme.breakpoints.up('md')]: {
		flexDirection: 'column',
		padding: '100px'
	},

	[theme.breakpoints.up('lg')]: {
		flexDirection: 'row',
		padding: '100px 80px 80px 80px'
	}
  },
  
  navIsOpen: {
    height: '100vh',
    maxHeight: '100vh',
    overflow: 'hidden',
    boxShadow: 'none',

    [theme.breakpoints.up('sm')]: {
      overflow: 'auto',
    },
  },

  bright: {
	  color: '#fff',
	  background: 'transparent',
	boxShadow: 'none'
  },

  navHead: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100px',
    padding: '0 30px',
    zIndex: 1000,

    [theme.breakpoints.up('sm')]: {
      boxShadow: 'none',
      padding: '100px 80px 80px 80px',
      top: 0,
      bottom: 'auto',
      width: 'auto',
	},
	
	[theme.breakpoints.up('md')]: {
		padding: '80px'
	}
  },

  navBody: {
    margin: '0 auto',

    [theme.breakpoints.up('sm')]: {
      maxWidth: '80%',
      margin: '0 auto 0 240px',
	},
	
	[theme.breakpoints.up('md')]: {
		margin: '0 auto',
	},

	[theme.breakpoints.up('lg')]: {
		margin: '0 auto 0 300px',
	},

    '$navIsOpen &': {
      position: 'fixed',
      bottom: '100px',
      width: '100%',
      height: 'calc(100vh - 100px)',
      zIndex: 900,

      [theme.breakpoints.up('sm')]: {
        left: '50%',
        transform: 'translateX(-50%)',
      },
    },
  },

  navBodyInner: {
    height: 'calc(100vh - 100px)',
    overflowY: 'scroll',
    overflowX: 'hidden',
    '-webkit-overflow-scrolling': 'touch',
    '-ms-overflow-style': 'none',
    scrollbarWidth: 'none',
    display: 'flex',
    alignItems: 'center',

    '&::-webkit-scrollbar, &::-webkit-scrollbar-thumb, &::-webkit-scrollbar-corner': {
      background: 'transparent',
    },

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      padding: '0 8px',
      maxWidth: '1160px',
      margin: '0 auto',
      overflow: '-moz-scrollbars-none',
      height: '100px',
    },
  },

  menu: {
    listStyle: 'none',
    padding: 0,
    fontFamily: theme.typography.fontPrimary,
    fontSize: '24px',
    lineHeight: '36px',
    color: 'inherit',
    fontWeight: 300,
    fontStyle: 'normal',
    margin: {
      top: 0,
      right: 0,
      bottom: '50px',
      left: 0,
    },

    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      marginTop: 0,
      fontSize: '1.2em',
      lineHeight: '30px',
    },
  },

  menuItem: {
    marginTop: '30px',

    [theme.breakpoints.up('sm')]: {
		fontWeight: 300,
      marginTop: 0,
	  marginBottom: '50px',
	  marginRight: '40px'
	},
	

	[theme.breakpoints.up('md')]: {
		margin: '0 auto'
	},

	[theme.breakpoints.up('lg')]: {
		marginTop: 0,
	  	marginBottom: '50px',
	  	marginRight: '40px'
	}
  },

  menuItemLink: {
    color: 'inherit',
    textDecoration: 'none',
    touchAction: 'manipulation',
    display: 'flex',
    alignItems: 'center',
	justifyContent: 'center',
	transition: 'transform .5s ease',

    '&:visited, &:hover': {
      color: 'inherit',
	},
	
	'&:active': {
		transform: 'translateY(10px) scale3d(.95,.95,.95)',
		color: 'inherit',
		marginBottom: '-4px'
	},

	[theme.breakpoints.up('md')]: {
		width: '150px'
	},

	[theme.breakpoints.up('lg')]: {
		width: 'auto'
	}
  },

  appearItem: {
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'all .5s ease-in-out',

    '$navIsOpen &': {
      opacity: 1,
      transform: 'none',
    },

    '&:nth-child(2)': {
      transitionDelay: '.1s',
    },

    '&:nth-child(3)': {
      transitionDelay: '.15s',
    },

    '&:nth-child(4)': {
      transitionDelay: '.2s',
    },

    '&:nth-child(5)': {
      transitionDelay: '.25s',
    },

    '&:nth-child(6)': {
      transitionDelay: '.3s',
    },

    [theme.breakpoints.up('sm')]: {
      opacity: 1,
    },
  },

  horizontalMenu: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
    padding: 0,
    color: theme.palette.common.black,

    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  horizontalMenuItem: {
    paddingRight: '30px',
  },

  navLinkWithIcon: {
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    touchAction: 'manipulation',
    height: '30px',
    cursor: 'pointer',

    '&:visited, &:active, &:hover': {
      color: 'inherit',
    },
  },

  navLinkIcon: {
    stroke: theme.palette.common.black,
    marginRight: '10px',
  },

  smUp: {
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  smDown: {
    display: 'block',

    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
})

class SiteNavigation<T extends ISiteNavigationProps> extends React.Component<
  T,
  ISiteNavigationState
> {
  public state: ISiteNavigationState

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }

	this.Toggle = this.Toggle.bind(this)
	this.ResetMenu = this.ResetMenu.bind(this)
  }

  public ResetMenu() {
	const bodyElm: HTMLBodyElement | null = document.querySelector('body');

	if (bodyElm) {
		bodyElm.classList.remove('body--menu-open');
	}
  }

  public Toggle() {

    this.setState({
      isOpen: !this.state.isOpen,
    }, () => {
		/*
		* Admittedly, this is a bit dirty, so here's an explanaition:
		* We need to decorate our surroundings when the header is open.
		* Specifically we want to disable scroll behind the header when it's open.
		* Normally we would dispatch an action an reflect it in the state of the entire app
		* but as of now the arcitecture regarding this approach is uncertain and therefore we
		* will allow this component to reach out into its outer surroundings and decorate the body-tag
		* when the header is open.
		*/
		const bodyElm: HTMLBodyElement | null = document.querySelector('body');

		if (bodyElm) {
			if (this.state.isOpen === true) {
				bodyElm.classList.add('body--menu-open');
			} else {
				bodyElm.classList.remove('body--menu-open');
			}
		}
	});
  }

  public render() {
    const navClassName = classNames(this.props.classes.root, {
		[this.props.classes.bright]: this.props.bright,
      [this.props.classes.navIsOpen]: this.state.isOpen,
	})
	

	const svgColor = this.props.bright ? '#ffffff' : '#000000';

    return (
      <React.Fragment>
        <nav className={navClassName}>
          <div className={this.props.classes.navHead}>
            <Link className={this.props.classes.logoWrapper} to={`/`}>
              <svg
                width="222px"
                height="265px"
                viewBox="0 0 222 265"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{ width: '50px' }}
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="LOGO-01"
                    transform="translate(-139.000000, -111.000000)"
                  >
                    <g id="Group" transform="translate(139.000000, 114.000000)">
                      <g
                        id="Frame-Copy-3"
                        transform="translate(2.000000, 0.000000)"
                        stroke={svgColor}
                        strokeLinecap="round"
                      >
                        <g
                          id="Frame"
                          transform="translate(-1.000000, 0.000000)"
                        >
                          <path
                            d="M59.537037,5.85507246 L160.462963,103.439614"
                            id="Line"
                            strokeWidth="5"
                            fillRule="nonzero"
                          />
                          <path
                            d="M59.0324074,5.85507246 L159.958333,103.439614"
                            id="Line-Copy"
                            strokeWidth="5"
                            fillRule="nonzero"
                            transform="translate(109.747685, 54.647343) scale(-1, 1) translate(-109.747685, -54.647343) "
                          />
                          <path
                            d="M59.537037,201.024155 L160.462963,201.024155"
                            id="Line-2-Copy"
                            strokeWidth="5"
                            fillRule="nonzero"
                          />
                          <path
                            d="M59.537037,0 L59.537037,201.024155"
                            id="Line-2-Copy-2"
                            strokeWidth="5"
                            fillRule="nonzero"
                          />
                          <path
                            d="M160.210648,0 L160.462963,201.024155"
                            id="Line-2-Copy-3"
                            strokeWidth="5"
                            fillRule="nonzero"
                          />
                          <path
                            d="M59.537037,5.85507246 L160.462963,5.85507246"
                            id="Line-2"
                            strokeWidth="5"
                            fillRule="nonzero"
                          />
                          <path
                            d="M1.75694444,33.6666667 L59.0324074,103.439614"
                            id="Line"
                            strokeWidth="5"
                            fillRule="nonzero"
                          />
                          <path
                            d="M160.49537,33.6666667 L218.023148,103.439614"
                            id="Line-Copy-6"
                            strokeWidth="5"
                            fillRule="nonzero"
                            transform="translate(189.243056, 68.678744) scale(-1, 1) translate(-189.243056, -68.678744) "
                          />
                          <path
                            d="M1.50462963,117.855072 L59.537037,201.024155"
                            id="Line-Copy-2"
                            strokeWidth="5"
                            fillRule="nonzero"
                          />
                          <path
                            d="M159.990741,117.855072 L218.275463,201.024155"
                            id="Line-Copy-7"
                            strokeWidth="5"
                            fillRule="nonzero"
                            transform="translate(189.243056, 159.101449) scale(-1, 1) translate(-189.243056, -159.101449) "
                          />
                          <path
                            d="M1.04166667,5.85507246 L58.5694444,117.101449"
                            id="Line-Copy"
                            strokeWidth="5"
                            fillRule="nonzero"
                            transform="translate(30.037037, 61.855072) scale(-1, 1) translate(-30.037037, -61.855072) "
                          />
                          <path
                            d="M160.462963,5.85507246 L218.49537,117.101449"
                            id="Line-Copy-8"
                            strokeWidth="5"
                            fillRule="nonzero"
                          />
                          <path
                            d="M2.04166667,104.178744 L59.3171296,201.024155"
                            id="Line-Copy-3"
                            strokeWidth="5"
                            fillRule="nonzero"
                            transform="translate(30.537037, 152.439614) scale(-1, 1) translate(-30.537037, -152.439614) "
                          />
                          <path
                            d="M160.462963,104.178744 L217.990741,201.024155"
                            id="Line-Copy-9"
                            strokeWidth="5"
                            fillRule="nonzero"
                          />
                          <path
                            d="M1.50462963,117.101449 L59.0324074,103.439614"
                            id="Line-2"
                            strokeWidth="5"
                            fillRule="nonzero"
                          />
                          <path
                            d="M1.50462963,201.024155 L59.537037,201.024155"
                            id="Line-2-Copy"
                            strokeWidth="5"
                            fillRule="nonzero"
                          />
                          <path
                            d="M1.75694444,33.178744 L59.537037,5.85507246"
                            id="Line-2"
                            strokeWidth="5"
                            fillRule="nonzero"
                          />
                          <path
                            d="M1.50462963,25.3719807 L1.75694444,201.024155"
                            id="Line-3"
                            strokeWidth="5"
                            fillRule="nonzero"
                          />
                          <path
                            d="M160.462963,117.101449 L217.990741,103.439614"
                            id="Line-2"
                            strokeWidth="5"
                            fillRule="nonzero"
                            transform="translate(189.479167, 110.270531) scale(-1, 1) translate(-189.479167, -110.270531) "
                          />
                          <path
                            d="M160.967593,201.024155 L219,201.024155"
                            id="Line-2-Copy"
                            strokeWidth="5"
                            fillRule="nonzero"
                            transform="translate(189.731481, 201.024155) scale(-1, 1) translate(-189.731481, -201.024155) "
                          />
                          <path
                            d="M160.210648,33.178744 L217.990741,5.85507246"
                            id="Line-2"
                            strokeWidth="5"
                            fillRule="nonzero"
                            transform="translate(189.226852, 19.516908) scale(-1, 1) translate(-189.226852, -19.516908) "
                          />
                          <path
                            d="M218.49537,25.3719807 L218.747685,201.024155"
                            id="Line-3"
                            strokeWidth="5"
                            fillRule="nonzero"
                            transform="translate(218.495370, 113.198068) scale(-1, 1) translate(-218.495370, -113.198068) "
                          />
                        </g>
                      </g>
                      <path
                        d="M16.38,257 C20.38,257 22.02,255.64 22.02,255.64 L22.02,249.72 L15.66,249.72 L15.66,245.24 L26.74,245.24 L26.74,257.96 C26.74,257.96 23.18,261.48 16.38,261.48 C8.18,261.48 1.66,255.28 1.66,247 C1.66,238.72 7.98,232.52 16.18,232.52 C23.06,232.52 26.54,236.72 26.54,236.72 L23.26,239.92 C23.26,239.92 20.94,237 16.18,237 C10.54,237 6.54,241.6 6.54,247 C6.54,252.4 10.74,257 16.38,257 Z M29.06,261 L39.94,233 L44.82,233 L55.7,261 L50.86,261 L48.3,254.36 L36.46,254.36 L33.9,261 L29.06,261 Z M42.38,239.04 L38.18,249.96 L46.58,249.96 L42.38,239.04 Z M72.9,253.68 C72.9,251.32 71.1,250.48 67.78,249.32 C63.66,247.88 59.02,245.64 59.02,240.44 C59.02,236.48 62.54,232.52 68.18,232.52 C74.02,232.52 77.3,236.96 77.3,236.96 L73.98,240.24 C73.98,240.24 71.66,237.08 68.18,237.08 C65.78,237.08 63.9,238.56 63.9,240.44 C63.9,242.88 66.1,243.64 69.94,245.08 C74.22,246.68 77.78,248.6 77.78,253.68 C77.78,258.76 73.3,261.48 68.02,261.48 C61.02,261.48 57.78,255.76 57.78,255.76 L61.38,252.72 C61.38,252.72 63.78,256.92 68.02,256.92 C70.42,256.92 72.9,255.96 72.9,253.68 Z M118.9,233 L107.86,261.96 L99.46,240.96 L90.94,261.96 L79.9,233 L85.34,233 L91.26,249.8 L97.62,233 L101.58,233 L107.82,249.8 L113.9,233 L118.9,233 Z M133.94,232.52 C142.1,232.52 148.1,238.72 148.1,247 C148.1,255.28 142.1,261.48 133.94,261.48 C125.78,261.48 119.78,255.28 119.78,247 C119.78,238.72 125.78,232.52 133.94,232.52 Z M133.94,256.92 C139.58,256.92 143.22,252.4 143.22,247 C143.22,241.6 139.58,237.08 133.94,237.08 C128.3,237.08 124.66,241.6 124.66,247 C124.66,252.4 128.3,256.92 133.94,256.92 Z M152.42,261 L152.42,233 L161.62,233 C167.18,233 170.9,236.6 170.9,241.72 C170.9,245.92 168.66,249.12 164.66,250.12 L171.66,261 L166.06,261 L159.42,250.44 L157.22,250.44 L157.22,261 L152.42,261 Z M161.02,245.88 C164.1,245.88 166.02,244.48 166.02,241.72 C166.02,238.96 164.1,237.56 161.02,237.56 L157.22,237.56 L157.22,245.88 L161.02,245.88 Z M180.54,233 L180.54,245.56 L190.54,233 L196.54,233 L185.58,246.76 L197.9,261 L191.54,261 L180.54,248.36 L180.54,261 L175.74,261 L175.74,233 L180.54,233 Z M214.86,253.68 C214.86,251.32 213.06,250.48 209.74,249.32 C205.62,247.88 200.98,245.64 200.98,240.44 C200.98,236.48 204.5,232.52 210.14,232.52 C215.98,232.52 219.26,236.96 219.26,236.96 L215.94,240.24 C215.94,240.24 213.62,237.08 210.14,237.08 C207.74,237.08 205.86,238.56 205.86,240.44 C205.86,242.88 208.06,243.64 211.9,245.08 C216.18,246.68 219.74,248.6 219.74,253.68 C219.74,258.76 215.26,261.48 209.98,261.48 C202.98,261.48 199.74,255.76 199.74,255.76 L203.34,252.72 C203.34,252.72 205.74,256.92 209.98,256.92 C212.38,256.92 214.86,255.96 214.86,253.68 Z"
                        id="GASWORKS"
                        fill={svgColor}
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </Link>

            <nav id="mainNavigation" role="navigation">
              <ul className={this.props.classes.horizontalMenu}>
                <li>
                  <Burger
                    onClick={this.Toggle}
                    isOpen={this.state.isOpen}
					navToToggle="mainMenu" 
					bright={this.props.bright}
                  />
                </li>
              </ul>
            </nav>
          </div>

          <nav
            id="mainMenu"
            role="navigation"
            className={this.props.classes.navBody}
          >
            <div className={this.props.classes.navBodyInner}>
              <Grid container spacing={16}>
                <Grid item xs={12} sm={6}>
                  <ul className={this.props.classes.menu}>
                    <li
                      className={`${this.props.classes.menuItem} ${
                        this.props.classes.appearItem
                      }`}
                    >
                      <Link
					  	onClick={this.ResetMenu}
                        className={this.props.classes.menuItemLink}
                        to={`/adresse`}
                        tabIndex={!this.state.isOpen ? -1 : undefined}
                      >
                        Adresse
                      </Link>
                    </li>
                    <li
                      className={`${this.props.classes.menuItem} ${
                        this.props.classes.appearItem
                      }`}
                    >
                      <Link
					  	onClick={this.ResetMenu}
                        className={this.props.classes.menuItemLink}
                        to={`/billeder`}
                        tabIndex={!this.state.isOpen ? -1 : undefined}
                      >
                        Billeder
                      </Link>
                    </li>
                    <li
                      className={`${this.props.classes.menuItem} ${
                        this.props.classes.appearItem
                      }`}
                    >
                      <Link
					  	onClick={this.ResetMenu}
                        className={this.props.classes.menuItemLink}
                        to={`/faq`}
                        tabIndex={!this.state.isOpen ? -1 : undefined}
                      >
                        FAQ
                      </Link>
                    </li>
                    <li
                      className={`${this.props.classes.menuItem} ${
                        this.props.classes.appearItem
                      }`}
                    >
                      <Link
					  	onClick={this.ResetMenu}
                        className={this.props.classes.menuItemLink}
                        to={`/kontakt`}
                        tabIndex={!this.state.isOpen ? -1 : undefined}
                      >
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </div>
          </nav>
        </nav>
      </React.Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(SiteNavigation)
