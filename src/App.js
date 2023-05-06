import React from 'react';
import { Grid } from '@mui/material';
import Semester from './Semester';
import createPalette from '@mui/material/styles/createPalette';


function App() {
	const courses = {
		"Semester 1": ["JHS1121", "JMA1101", "JPH1101", "JCY1101", "JGE1101", "JGE1102", "JPC1111", "JGE1112", "JGE1111"],
		"Semester 2": ["JEC1204", "JGE1201", "JGE1202", "JHS1221", "JMA1201", "JEC1214", "JBE1223"],
		"Semester 3": ["JCS1301", "JCS1302", "JCS1303", "JCS1311", "JCS1312", "JCS1321", "JMA1303"],
	}
	return (
		<div className="App">
			<Grid display="flex" alignItems="center" justifyContent="center">
				<Grid display="grid"
					sx={{
						gridTemplateColumns: "25% 25% 25%",
						gap: "5rem",
					}}
				>
					{Object.keys(courses).map((x) =>
						<Semester semesterName={x} subjects={courses[x]} />
					)}
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
