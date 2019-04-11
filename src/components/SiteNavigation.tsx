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
							<svg width="67px" height="65px" viewBox="0 0 67 65" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
								<g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
									<g id="Bar" transform="translate(-20.000000, -16.000000)">
										<g id="Logo" transform="translate(20.000000, 17.000000)">
											<g id="Frame-Copy-3" transform="translate(15.000000, 0.000000)" stroke="#000000" strokeLinecap="round">
												<g id="Frame">
													<path d="M10.0098333,1.00121739 L27.2681667,17.6881739" id="Line" strokeWidth="0.855" fillRule="nonzero"></path>
													<path d="M9.92354167,1.00121739 L27.181875,17.6881739" id="Line-Copy" strokeWidth="0.855" fillRule="nonzero" transform="translate(18.595854, 9.344696) scale(-1, 1) translate(-18.595854, -9.344696) "></path>
													<path d="M10.0098333,34.3751304 L27.2681667,34.3751304" id="Line-2-Copy" strokeWidth="0.855" fillRule="nonzero"></path>
													<path d="M10.0098333,0 L10.0098333,34.3751304" id="Line-2-Copy-2" strokeWidth="0.855" fillRule="nonzero"></path>
													<path d="M27.2250208,0 L27.2681667,34.3751304" id="Line-2-Copy-3" strokeWidth="0.855" fillRule="nonzero"></path>
													<path d="M10.0098333,1.00121739 L27.2681667,1.00121739" id="Line-2" strokeWidth="0.855" fillRule="nonzero"></path>
													<path d="M0.1294375,5.757 L10.0098333,17.6881739" id="Line" strokeWidth="0.855" fillRule="nonzero"></path>
													<path d="M27.2681667,5.757 L37.1485625,17.6881739" id="Line-Copy-6" strokeWidth="0.855" fillRule="nonzero" transform="translate(32.186792, 11.680870) scale(-1, 1) translate(-32.186792, -11.680870) "></path>
													<path d="M0.1294375,20.1077826 L10.0098333,34.3751304" id="Line-Copy-2" strokeWidth="0.855" fillRule="nonzero"></path>
													<path d="M27.2681667,20.1077826 L37.1485625,34.3751304" id="Line-Copy-7" strokeWidth="0.855" fillRule="nonzero" transform="translate(32.186792, 27.199739) scale(-1, 1) translate(-32.186792, -27.199739) "></path>
													<path d="M0.0862916667,1.00121739 L9.9666875,20.0243478" id="Line-Copy" strokeWidth="0.855" fillRule="nonzero" transform="translate(5.048063, 10.512783) scale(-1, 1) translate(-5.048063, -10.512783) "></path>
													<path d="M27.2250208,1.00121739 L37.1054167,20.0243478" id="Line-Copy-8" strokeWidth="0.855" fillRule="nonzero"></path>
													<path d="M0.0862916667,17.6881739 L9.9666875,34.3751304" id="Line-Copy-3" strokeWidth="0.855" fillRule="nonzero" transform="translate(5.048063, 26.031652) scale(-1, 1) translate(-5.048063, -26.031652) "></path>
													<path d="M27.2250208,17.6881739 L37.1054167,34.3751304" id="Line-Copy-9" strokeWidth="0.855" fillRule="nonzero"></path>
													<path d="M0.0862916667,20.0243478 L9.92354167,17.6881739" id="Line-2" strokeWidth="0.855" fillRule="nonzero"></path>
													<path d="M0.0862916667,34.3751304 L10.0098333,34.3751304" id="Line-2-Copy" strokeWidth="0.855" fillRule="nonzero"></path>
													<path d="M0.1294375,5.67356522 L10.0098333,1.00121739" id="Line-2" strokeWidth="0.855" fillRule="nonzero"></path>
													<path d="M0.0862916667,4.3386087 L0.1294375,34.3751304" id="Line-3" strokeWidth="0.855" fillRule="nonzero"></path>
													<path d="M27.2681667,20.0243478 L37.1054167,17.6881739" id="Line-2" strokeWidth="0.855" fillRule="nonzero" transform="translate(32.229938, 18.856261) scale(-1, 1) translate(-32.229938, -18.856261) "></path>
													<path d="M27.3544583,34.3751304 L37.278,34.3751304" id="Line-2-Copy" strokeWidth="0.855" fillRule="nonzero" transform="translate(32.273083, 34.375130) scale(-1, 1) translate(-32.273083, -34.375130) "></path>
													<path d="M27.2250208,5.67356522 L37.1054167,1.00121739" id="Line-2" strokeWidth="0.855" fillRule="nonzero" transform="translate(32.186792, 3.337391) scale(-1, 1) translate(-32.186792, -3.337391) "></path>
													<path d="M37.1917083,4.3386087 L37.2348542,34.3751304" id="Line-3" strokeWidth="0.855" fillRule="nonzero" transform="translate(37.191708, 19.356870) scale(-1, 1) translate(-37.191708, -19.356870) "></path>
												</g>
											</g>
											<path d="M5.114,61.8 C6.314,61.8 6.806,61.392 6.806,61.392 L6.806,59.616 L4.898,59.616 L4.898,58.272 L8.222,58.272 L8.222,62.088 C8.222,62.088 7.154,63.144 5.114,63.144 C2.654,63.144 0.698,61.284 0.698,58.8 C0.698,56.316 2.594,54.456 5.054,54.456 C7.118,54.456 8.162,55.716 8.162,55.716 L7.178,56.676 C7.178,56.676 6.482,55.8 5.054,55.8 C3.362,55.8 2.162,57.18 2.162,58.8 C2.162,60.42 3.422,61.8 5.114,61.8 Z M8.918,63 L12.182,54.6 L13.646,54.6 L16.91,63 L15.458,63 L14.69,61.008 L11.138,61.008 L10.37,63 L8.918,63 Z M12.914,56.412 L11.654,59.688 L14.174,59.688 L12.914,56.412 Z M22.07,60.804 C22.07,60.096 21.53,59.844 20.534,59.496 C19.298,59.064 17.906,58.392 17.906,56.832 C17.906,55.644 18.962,54.456 20.654,54.456 C22.406,54.456 23.39,55.788 23.39,55.788 L22.394,56.772 C22.394,56.772 21.698,55.824 20.654,55.824 C19.934,55.824 19.37,56.268 19.37,56.832 C19.37,57.564 20.03,57.792 21.182,58.224 C22.466,58.704 23.534,59.28 23.534,60.804 C23.534,62.328 22.19,63.144 20.606,63.144 C18.506,63.144 17.534,61.428 17.534,61.428 L18.614,60.516 C18.614,60.516 19.334,61.776 20.606,61.776 C21.326,61.776 22.07,61.488 22.07,60.804 Z M35.87,54.6 L32.558,63.288 L30.038,56.988 L27.482,63.288 L24.17,54.6 L25.802,54.6 L27.578,59.64 L29.486,54.6 L30.674,54.6 L32.546,59.64 L34.37,54.6 L35.87,54.6 Z M40.382,54.456 C42.83,54.456 44.63,56.316 44.63,58.8 C44.63,61.284 42.83,63.144 40.382,63.144 C37.934,63.144 36.134,61.284 36.134,58.8 C36.134,56.316 37.934,54.456 40.382,54.456 Z M40.382,61.776 C42.074,61.776 43.166,60.42 43.166,58.8 C43.166,57.18 42.074,55.824 40.382,55.824 C38.69,55.824 37.598,57.18 37.598,58.8 C37.598,60.42 38.69,61.776 40.382,61.776 Z M45.926,63 L45.926,54.6 L48.686,54.6 C50.354,54.6 51.47,55.68 51.47,57.216 C51.47,58.476 50.798,59.436 49.598,59.736 L51.698,63 L50.018,63 L48.026,59.832 L47.366,59.832 L47.366,63 L45.926,63 Z M48.506,58.464 C49.43,58.464 50.006,58.044 50.006,57.216 C50.006,56.388 49.43,55.968 48.506,55.968 L47.366,55.968 L47.366,58.464 L48.506,58.464 Z M54.362,54.6 L54.362,58.368 L57.362,54.6 L59.162,54.6 L55.874,58.728 L59.57,63 L57.662,63 L54.362,59.208 L54.362,63 L52.922,63 L52.922,54.6 L54.362,54.6 Z M64.658,60.804 C64.658,60.096 64.118,59.844 63.122,59.496 C61.886,59.064 60.494,58.392 60.494,56.832 C60.494,55.644 61.55,54.456 63.242,54.456 C64.994,54.456 65.978,55.788 65.978,55.788 L64.982,56.772 C64.982,56.772 64.286,55.824 63.242,55.824 C62.522,55.824 61.958,56.268 61.958,56.832 C61.958,57.564 62.618,57.792 63.77,58.224 C65.054,58.704 66.122,59.28 66.122,60.804 C66.122,62.328 64.778,63.144 63.194,63.144 C61.094,63.144 60.122,61.428 60.122,61.428 L61.202,60.516 C61.202,60.516 61.922,61.776 63.194,61.776 C63.914,61.776 64.658,61.488 64.658,60.804 Z" id="GASWORKS" fill="#000000"></path>
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
											<Link className={this.props.classes.menuItemLink} to={`/adresse`} tabIndex={!this.state.isOpen ? -1 : undefined}>
												Adresse
											</Link>
										</li>
										<li className={`${this.props.classes.menuItem} ${this.props.classes.appearItem}`}>
											<Link className={this.props.classes.menuItemLink} to={`/billeder`} tabIndex={!this.state.isOpen ? -1 : undefined}>
												Billeder
											</Link>
										</li>
										<li className={`${this.props.classes.menuItem} ${this.props.classes.appearItem}`}>
											<Link className={this.props.classes.menuItemLink} to={`/kontakt`} tabIndex={!this.state.isOpen ? -1 : undefined}>
												Kontakt
											</Link>
										</li>
										<li className={`${this.props.classes.menuItem} ${this.props.classes.appearItem}`}>
											<Link className={this.props.classes.menuItemLink} to={`/faq`} tabIndex={!this.state.isOpen ? -1 : undefined}>
												FAQ
											</Link>
										</li>
										{/* <li className={`${this.props.classes.menuItem} ${this.props.classes.appearItem}`}>
											<Link className={this.props.classes.menuItemLink} to={`/`} tabIndex={!this.state.isOpen ? -1 : undefined}>
												Residents
											</Link>
										</li> */}
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
