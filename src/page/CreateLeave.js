import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import history from '../framework/history';
import { addRecord } from '../action/function';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
	margin: {
		margin: theme.spacing(1),
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
}));



export default function CreateLeave() {
	const classes = useStyles();

	const [values, setValues] = React.useState({
		name: ''
	});

	function submitRecord() {
		history.push('/summary');
	}

	const handleChange = name => event => {
		setValues({ ...values, [name]: event.target.value });
	};

	return (
		<React.Fragment>
			<TextField
				id="standard-name"
				label="Name"
				className={classes.textField}
				value={values.name}
				onChange={handleChange('name')}
				margin="normal"
			/>
			<Button variant="outlined" size="medium" color="primary" className={classes.margin} onClick={submitRecord}>
				Submit
			</Button>
		</React.Fragment>
	);
}
