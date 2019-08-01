import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import history from '../framework/history';
import { addRecord } from '../action/function';

// UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	root: {
			width: '90%'
	},
	textField: {
		width: '200px'
	},
	margin: {
		margin: theme.spacing(1),
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
}));



function CreateLeave(props) {
	const classes = useStyles();

	const [values, setValues] = React.useState({
		name: '',
		date: ''
	});

	function submitRecord() {
		console.log('++++Test: craete record', values);
		props.addRecord(values);
		history.push('/summary');
	}

	const handleChange = name => event => {
		setValues({ ...values, [name]: event.target.value });
	};

	return (
		<React.Fragment>
			
			<Paper className={classes.root}>
				<br/>

				<Grid container spacing={3}>
					<Grid item xs={12} >
						<TextField
							id="standard-name"
							label="Name"
							className={classes.textField}
							value={values.name}
							onChange={handleChange('name')}
							margin="normal"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="date"
							label="Date"
							type="date"
							className={classes.textField}
							onChange={handleChange('date')}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Grid>
					<br/>
					<Grid item xs={12} >
						<Button variant="outlined" size="medium" color="primary" className={classes.margin} onClick={submitRecord}>
							Submit
						</Button>
					</Grid>
				</Grid>
				
			</Paper>
		</React.Fragment>
	);
}

export default injectIntl (connect(null, {addRecord})(CreateLeave) );