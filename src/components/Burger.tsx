import classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheetThemed } from 'react-jss';

/*
 * This atom is deliberately left out of /src/index.ts because it's not
 * considered to be a public atom - it's only intended to be used in a
 * composition (such as in the Header)
 * */

const styles: StyleSheetThemed = theme => ({
	root: {
		background: 0,
		border: 0,
		display: 'flex',
		padding: 0,
		cursor: 'pointer',
		height: '30px',
		width: '30px',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'start',

		[theme.breakpoints.up('sm')]: {
			width: '90px',
			justifyContent: 'start'
		}
	},

	BurgerIcon: {
		border: 'none',
		display: 'block',
		padding: 0,
		width: '24px',
		height: '16px',
		position: 'relative',
		transform: 'rotate(0deg)',
		transition: '.5s ease-in-out',
		marginBottom: '17px',

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
		transition: '.25s ease-in-out'
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
		color: theme.colors.neutralBlack,
		fontFamily: '"Europa-Bold"',
		fontSize: '12px',
		lineHeight: 'normal'
	},

	isOpen: {
		color: 'inherit'
	}
});

export interface IBurgerMenuButtonProps {
	classes: any;
	onClick: any;
	navToToggle: string;
	isOpen?: boolean;
}

const BrugerMenuButton: React.SFC<IBurgerMenuButtonProps> = props => {
	const { isOpen, classes, navToToggle, ...rest } = props;

	const className = classNames(props.classes.root, {
		[props.classes.isOpen]: props.isOpen
	});

	const accessibilityValues = {
		isExpanded: props.isOpen
	};

	return (
		<button
			aria-expanded={accessibilityValues.isExpanded}
			aria-controls={props.navToToggle}
			className={className}
			onClick={props.onClick}
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
				{props.isOpen ? 'GO BACK' : 'MENU'}
			</div>
		</button>
	);
};

export default injectSheet(styles)(BrugerMenuButton);
