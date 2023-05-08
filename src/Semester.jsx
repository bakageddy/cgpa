import { Box, Button, Card, CardActions, CardContent, Grid, Stack, Typography } from '@mui/material';
import Grade from './Grade';
import React from 'react';
import { points } from './index.js';

export default function Semester({ semesterName, subjects }) {
	const calculateGpa = () => {
		let creditTotalValue = 0;
		let credits = 0;
		subjects.map((x) => {
			let grade = points[document.getElementById(x["course"]).innerText];
			let credit = grade * x["credit"];
			creditTotalValue += credit;
			credits += x["credit"];
		})
		document.getElementById("gpa_output_" + semesterName).innerHTML = creditTotalValue / credits;
	}
	return (
		<Box>
			<Card sx={{ backgroundColor: "#434c5e" }}>
				<CardContent>
					<Grid>
						<Typography sx={{
							textAlign: "center",
							color: "#d8dee9",
							fontFamily: "Barlow Condensed",
							fontSize: 30,
						}}>
							{semesterName}
						</Typography>
						<Grid display="flex"
							sx={{
								height: "auto",
								flexDirection: "column",
							}}
						>
							{subjects.map((x) =>
								<Grade label={x["course"]} labelid={x["course"] + '-label'} id={x["course"]} />
							)}
						</Grid>
					</Grid>
				</CardContent>
				<CardActions>
					<Stack spacing="4px" sx={{
						justifyItems: "center",
						alignContent: "center",
						padding: "14px",
					}}>
						<Button onClick={calculateGpa} sx={{
							fontFamily: "Barlow Condensed",
							color: "#2e3440",
							backgroundColor: "#a3be8c",
						}}>
						Calculate GPA
						</Button>
						<Typography id={"gpa_output_" + semesterName}
							sx={{
								fontSize: 18,
								fontFamily: "Barlow Condensed",
								color: "#d8dee9",
							}}
						>
						</Typography>
					</Stack>
				</CardActions>
			</Card>
		</Box>
	);
}
