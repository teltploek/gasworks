import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	pageTitle: {
		fontFamily: theme.typography.fontFamily,
		fontSize: '40px',
		fontWeight: 400,
		textAlign: 'center',
		color: 'inherit',
		lineHeight: '60px',
		marginBottom: '20px'
	}
});

export interface IPageTitleProps {
	title: string;
	classes: any;
}

const PageTitle: React.SFC<IPageTitleProps> = props => {
	return (
		<h1 className={props.classes.pageTitle}>{props.title}</h1>
	);
};

export default withStyles(styles, { withTheme: true })(PageTitle);
