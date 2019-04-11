import classNames from 'classnames';
import * as React from 'react';
import injectSheet from 'react-jss';
import { Grid } from '@material-ui/core';
import { Link } from 'gatsby';
import Burger from './Burger';
//import LunrSearch from './LunrSearch';

export interface ISiteNavigationProps {
	classes: any;
}

export interface ISiteNavigationState {
	isOpen: boolean;
}

const styles = theme => ({
	root: {
		background: '#fff',
		position: 'fixed',
		width: '100vw',
		bottom: 0,
		color: '#000',
		height: '100px',
		overflow: 'hidden',
		boxShadow: '0 2px 4px 0 rgba(0,0,0,0.50)',
		zIndex: 1000
	},

	navIsOpen: {
		height: '100vh',
		maxHeight: '100vh',
		overflow: 'hidden',
		boxShadow: 'none',

		[theme.breakpoints.up('sm')]: {
			overflow: 'auto'
		}
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

		[theme.breakpoints.up('md')]: {
			boxShadow: 'none',
			padding: '0 40px'
		}
	},

	navBody: {
		padding: {
			left: '15px',
			right: '15px'
		},

		margin: '0 auto',

		[theme.breakpoints.up('md')]: {
			maxWidth: '80%'
		},

		'$navIsOpen &': {
			position: 'fixed',
			bottom: '100px',
			width: '100%',
			height: 'calc(100vh - 100px)',
			zIndex: 900,

			[theme.breakpoints.up('sm')]: {
				left: '50%',
				transform: 'translateX(-50%)'
			}
		}
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
			background: 'transparent'
		},

		[theme.breakpoints.up('sm')]: {
			padding: '0 8px',
			maxWidth: '1160px',
			margin: '0 auto',
			overflow: '-moz-scrollbars-none'
		}
	},

	menu: {
		listStyle: 'none',
		padding: 0,
		fontFamily: theme.typography.fontPrimary,
		fontSize: '24px',
		lineHeight: '36px',
		color: theme.colors.neutralBlack,
		fontWeight: 300,
		fontStyle: 'normal',
		margin: {
			top: 0,
			right: 0,
			bottom: '50px',
			left: 0
		},

		[theme.breakpoints.up('sm')]: {
			marginTop: '150px',
			fontSize: '30px',
			lineHeight: '37px',

			margin: {
				bottom: '200px'
			},
		}
	},

	menuItem: {
		marginTop: '30px',

		[theme.breakpoints.up('sm')]: {
			marginTop: 0,
			marginBottom: '50px'
		}
	},

	menuItemLink: {
		color: 'inherit',
		textDecoration: 'none',
		touchAction: 'manipulation',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		'&:visited, &:active, &:hover': {
			color: 'inherit'
		}
	},

	appearItem: {
		opacity: 0,
		transform: 'translateY(30px)',
		transition: 'all .5s ease-in-out',

		'$navIsOpen &': {
			opacity: 1,
			transform: 'none'
		},

		'&:nth-child(2)': {
			transitionDelay: '.1s'
		},

		'&:nth-child(3)': {
			transitionDelay: '.15s'
		},

		'&:nth-child(4)': {
			transitionDelay: '.2s'
		},

		'&:nth-child(5)': {
			transitionDelay: '.25s'
		},

		'&:nth-child(6)': {
			transitionDelay: '.3s'
		}
	},

	horizontalMenu: {
		listStyle: 'none',
		display: 'flex',
		justifyContent: 'space-between',
		margin: 0,
		padding: 0,
		color: theme.colors.neutralBlack
	},

	horizontalMenuItem: {
		paddingRight: '30px'
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
			color: 'inherit'
		}
	},

	navLinkIcon: {
		stroke: theme.colors.neutralBlack,
		marginRight: '10px'
	},

	smUp: {
		display: 'none',

		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},

	smDown: {
		display: 'block',

		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
	}
});

class SiteNavigation<T extends ISiteNavigationProps> extends React.Component<T, ISiteNavigationState> {
	public state: ISiteNavigationState;

	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};

		this.Toggle = this.Toggle.bind(this);
	}

	public Toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	public render() {
		const headerClassName = classNames(
			this.props.classes.root,
			{
				[this.props.classes.navIsOpen]: this.state.isOpen
			}
		);

		return (
			<React.Fragment>
				<header className={headerClassName}>
					<div className={this.props.classes.navHead}>
						<a className={this.props.classes.logoWrapper} href={`/`}>	
							<svg width="66px" height="65px" viewBox="0 0 66 65" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
								<g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g id="Bar" transform="translate(-20.000000, -16.000000)">
										<g id="Logo" transform="translate(20.000000, 17.000000)">
											<g id="Frame-Copy-3" transform="translate(15.000000, 0.000000)" stroke="#000000" stroke-linecap="round">
												<g id="Frame">
													<path d="M10.0098333,1.00121739 L27.2681667,17.6881739" id="Line" stroke-width="0.855" fill-rule="nonzero"></path>
													<path d="M9.92354167,1.00121739 L27.181875,17.6881739" id="Line-Copy" stroke-width="0.855" fill-rule="nonzero" transform="translate(18.595854, 9.344696) scale(-1, 1) translate(-18.595854, -9.344696) "></path>
													<path d="M10.0098333,34.3751304 L27.2681667,34.3751304" id="Line-2-Copy" stroke-width="0.855" fill-rule="nonzero"></path>
													<path d="M10.0098333,0 L10.0098333,34.3751304" id="Line-2-Copy-2" stroke-width="0.855" fill-rule="nonzero"></path>
													<path d="M27.2250208,0 L27.2681667,34.3751304" id="Line-2-Copy-3" stroke-width="0.855" fill-rule="nonzero"></path>
													<path d="M10.0098333,1.00121739 L27.2681667,1.00121739" id="Line-2" stroke-width="0.855" fill-rule="nonzero"></path>
													<path d="M0.1294375,5.757 L10.0098333,17.6881739" id="Line" stroke-width="0.855" fill-rule="nonzero"></path>
													<path d="M27.2681667,5.757 L37.1485625,17.6881739" id="Line-Copy-6" stroke-width="0.855" fill-rule="nonzero" transform="translate(32.186792, 11.680870) scale(-1, 1) translate(-32.186792, -11.680870) "></path>
													<path d="M0.1294375,20.1077826 L10.0098333,34.3751304" id="Line-Copy-2" stroke-width="0.855" fill-rule="nonzero"></path>
													<path d="M27.2681667,20.1077826 L37.1485625,34.3751304" id="Line-Copy-7" stroke-width="0.855" fill-rule="nonzero" transform="translate(32.186792, 27.199739) scale(-1, 1) translate(-32.186792, -27.199739) "></path>
													<path d="M0.0862916667,1.00121739 L9.9666875,20.0243478" id="Line-Copy" stroke-width="0.855" fill-rule="nonzero" transform="translate(5.048063, 10.512783) scale(-1, 1) translate(-5.048063, -10.512783) "></path>
													<path d="M27.2250208,1.00121739 L37.1054167,20.0243478" id="Line-Copy-8" stroke-width="0.855" fill-rule="nonzero"></path>
													<path d="M0.0862916667,17.6881739 L9.9666875,34.3751304" id="Line-Copy-3" stroke-width="0.855" fill-rule="nonzero" transform="translate(5.048063, 26.031652) scale(-1, 1) translate(-5.048063, -26.031652) "></path>
													<path d="M27.2250208,17.6881739 L37.1054167,34.3751304" id="Line-Copy-9" stroke-width="0.855" fill-rule="nonzero"></path>
													<path d="M0.0862916667,20.0243478 L9.92354167,17.6881739" id="Line-2" stroke-width="0.855" fill-rule="nonzero"></path>
													<path d="M0.0862916667,34.3751304 L10.0098333,34.3751304" id="Line-2-Copy" stroke-width="0.855" fill-rule="nonzero"></path>
													<path d="M0.1294375,5.67356522 L10.0098333,1.00121739" id="Line-2" stroke-width="0.855" fill-rule="nonzero"></path>
													<path d="M0.0862916667,4.3386087 L0.1294375,34.3751304" id="Line-3" stroke-width="0.855" fill-rule="nonzero"></path>
													<path d="M27.2681667,20.0243478 L37.1054167,17.6881739" id="Line-2" stroke-width="0.855" fill-rule="nonzero" transform="translate(32.229938, 18.856261) scale(-1, 1) translate(-32.229938, -18.856261) "></path>
													<path d="M27.3544583,34.3751304 L37.278,34.3751304" id="Line-2-Copy" stroke-width="0.855" fill-rule="nonzero" transform="translate(32.273083, 34.375130) scale(-1, 1) translate(-32.273083, -34.375130) "></path>
													<path d="M27.2250208,5.67356522 L37.1054167,1.00121739" id="Line-2" stroke-width="0.855" fill-rule="nonzero" transform="translate(32.186792, 3.337391) scale(-1, 1) translate(-32.186792, -3.337391) "></path>
													<path d="M37.1917083,4.3386087 L37.2348542,34.3751304" id="Line-3" stroke-width="0.855" fill-rule="nonzero" transform="translate(37.191708, 19.356870) scale(-1, 1) translate(-37.191708, -19.356870) "></path>
												</g>
											</g>
											<text id="GASWORKS" font-family="Europa-Bold" font-size="12" font-weight="bold" fill="#000000">
												<tspan x="0.29" y="63">GASWORKS</tspan>
											</text>
										</g>
									</g>
								</g>
							</svg>
						</a>

						<nav id="mainNavigation" role="navigation">
							<ul className={this.props.classes.horizontalMenu}>
								<li>
									<Burger onClick={this.Toggle} isOpen={this.state.isOpen} navToToggle="mainMenu" />
								</li>
							</ul>
						</nav>
					</div>

					<nav id="mainMenu" role="navigation" className={this.props.classes.navBody}>
						<div className={this.props.classes.navBodyInner}>
							<Grid container spacing={16}>
								<Grid item xs={12} sm={6}>
									<ul className={this.props.classes.menu}>
										<li className={`${this.props.classes.menuItem} ${this.props.classes.appearItem}`}>
											<Link className={this.props.classes.menuItemLink} to={`/`} tabIndex={!this.state.isOpen ? -1 : undefined}>
												Directions
											</Link>
										</li>
										<li className={`${this.props.classes.menuItem} ${this.props.classes.appearItem}`}>
											<Link className={this.props.classes.menuItemLink} to={`/`} tabIndex={!this.state.isOpen ? -1 : undefined}>
												Pictures
											</Link>
										</li>
										<li className={`${this.props.classes.menuItem} ${this.props.classes.appearItem}`}>
											<Link className={this.props.classes.menuItemLink} to={`/`} tabIndex={!this.state.isOpen ? -1 : undefined}>
												Contact
											</Link>
										</li>
										<li className={`${this.props.classes.menuItem} ${this.props.classes.appearItem}`}>
											<Link className={this.props.classes.menuItemLink} to={`/`} tabIndex={!this.state.isOpen ? -1 : undefined}>
												FAQ
											</Link>
										</li>
										<li className={`${this.props.classes.menuItem} ${this.props.classes.appearItem}`}>
											<Link className={this.props.classes.menuItemLink} to={`/`} tabIndex={!this.state.isOpen ? -1 : undefined}>
												Residents
											</Link>
										</li>
									</ul>
								</Grid>
							</Grid>
						</div>
					</nav>
				</header>
			</React.Fragment>
		);
	}
}

export default injectSheet(styles)(SiteNavigation);
