import classNames from 'classnames';
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		background: 'transparent',
		border: 0,
		display: 'flex',
		padding: 0,
		cursor: 'pointer',
		
		width: '30px',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'start',
		zIndex: 1001,

		[theme.breakpoints.up('sm')]: {
			width: '90px',
			justifyContent: 'start'
		}
	},

	rootBright: {
		color: 'inherit'
	},

	BurgerIcon: {
		border: 'none',
		display: 'block',
		padding: 0,
		width: '24px',
		height: '16px',
		position: 'relative',
		transform: 'scale(1.5) rotate(0deg)',
		transition: '.5s ease-in-out',
		marginBottom: '18px',

		[theme.breakpoints.up('sm')]: {
			margin: {
				right: '15px'
			}
		}
	},

	BurgerIconBar: {
		display: 'block',
		position: 'absolute',
		height: '1px',
		width: '100%',
		background: '#000',
		opacity: 1,
		left: 0,
		transform: 'rotate(0deg)',
		transition: '.25s ease-in-out',

		'$rootBright &': {
			background: '#fff'
		}
	},

	BurgerIconBar1: {
		top: '3px',

		'$isOpen &': {
			top: 0,
			width: '0%',
			left: '50%'
		}
	},
	BurgerIconBar2: {
		top: '8px',

		'$isOpen &': {
			transform: 'rotate(45deg)'
		}
	},

	BurgerIconBar3: {
		top: '8px',

		'$isOpen &': {
			transform: 'rotate(-45deg)'
		}
	},

	BurgerIconBar4: {
		top: '13px',

		'$isOpen &': {
			top: 0,
			width: 0,
			left: '50%'
		}
	},

	BurgerCaption: {
		display: 'block',
		whiteSpace: 'nowrap',
		color: theme.palette.common.black,
		fontFamily: theme.typography.fontFamily,
		fontSize: '9px',
		lineHeight: 'normal',

		'$rootBright &': {
			color: '#fff'
		}
	},

	isOpen: {
		color: 'inherit'
	}
});

export interface IBurgerMenuButtonProps {
	classes: any;
	onClick: any;
	navToToggle: string;
	bright?: boolean;
	isOpen?: boolean;
}

const BrugerMenuButton: React.SFC<IBurgerMenuButtonProps> = props => {
	const { isOpen, classes, navToToggle, bright, onClick } = props;

	const className = classNames(classes.root, {
		[classes.isOpen]: isOpen,
		[classes.rootBright]: bright
	});

	const accessibilityValues = {
		isExpanded: isOpen
	};

	return (
		<button
			aria-expanded={accessibilityValues.isExpanded}
			aria-controls={navToToggle}
			className={className}
			onClick={onClick}
		>
			<div className={classes.BurgerIcon}>
				<span
					className={`${classes.BurgerIconBar} ${
						classes.BurgerIconBar1
					}`}
				/>
				<span
					className={`${classes.BurgerIconBar} ${
						classes.BurgerIconBar2
					}`}
				/>
				<span
					className={`${classes.BurgerIconBar} ${
						classes.BurgerIconBar3
					}`}
				/>
				<span
					className={`${classes.BurgerIconBar} ${
						classes.BurgerIconBar4
					}`}
				/>
			</div>

			<div className={classes.BurgerCaption}>
				{isOpen ? 'LUK MENU' : 'MENU'}
			</div>
		</button>
	);
};

export default withStyles(styles)(BrugerMenuButton);