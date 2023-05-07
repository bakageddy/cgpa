import { Card, CardContent, Grid, Typography } from '@mui/material';
import Grade from './Grade';
import React from 'react';

export default function Semester({ semesterName, subjects }) {
	return (
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
		</Card>
	);
}
