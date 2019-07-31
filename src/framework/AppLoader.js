import React from 'react';

export default function AppLoader(props) {

	return (
		<React.Fragment>
			<p>The url is : {props.location.pathname }</p>
		</React.Fragment>
	);
}
