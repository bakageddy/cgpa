import React from 'react';
import { Button, Grid, Stack, Typography } from '@mui/material';
import Semester from './Semester';
import { courses } from './index.js';


function App() {
	const points = {
		"O": 10,
		"A+": 9,
		"A": 8,
		"B+": 7,
		"B": 6,
		"C": 5,
		"U": 0,
	}

	const handleClick = () => {
		let credits = 0
		let totalCredits = 0
		for (const [keys, course_arr] of Object.entries(courses)) {
			course_arr.map((x) => {
				let grade = points[document.getElementById(x["course"]).innerText];
				let credit = grade * x["credit"];
				totalCredits += credit;
				credits += x["credit"];
			})
		}
		document.getElementById("output").innerHTML = totalCredits / credits;
	}
	return (
		<>
			<Grid display="flex" alignItems="center" justifyContent="center">
				<Grid display="grid"
					sx={{
						gridTemplateColumns: "auto auto auto",
						gap: "10rem",
					}}
				>
					{Object.keys(courses).map((x) =>
						<Semester semesterName={x} subjects={courses[x]} />
					)}
				</Grid>
			</Grid>

			<Stack sx={{
				padding: "14px",
				display: "grid",
				justifyItems: "center",
				alignContent: "center",
			}}>
				<Button
					onClick={handleClick}
					sx={{
						color: "#2e3440",
						backgroundColor: "#81a1c1",
					}}
				>
					<Typography sx={{
						fontFamily: "Barlow Condensed",
					}}>Calculate</Typography>
				</Button>
				<Typography sx={{
					fontFamily: "Barlow Condensed",
					color: "#d8dee9",
				}} 
				id="output"></Typography>
			</Stack>
		</>
	);
}

export default App;
