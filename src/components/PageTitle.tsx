import * as React from 'react';
import injectSheet, { StyleSheetThemed } from 'react-jss';

const styles: StyleSheetThemed = theme => ({
	pageTitle: {
		fontFamily: theme.typography.fontRegular,
		fontSize: '40px',
		fontWeight: 400,
		textAlign: 'center'
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

export default injectSheet(styles)(PageTitle);
