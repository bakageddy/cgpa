import * as React from 'react';
import { Typography, Select, FormControl, InputLabel, MenuItem, Box } from '@mui/material';

export default function Grade({ labelid, id, label }) {
	const [grade, setGrade] = React.useState(10);

	const handleChange = (event) => {
		setGrade(event.target.value);
	};

	return (
		<Box display="flex" alignItems="center">
			<FormControl sx={{ m: 1, width: 200}} size="small">
				<InputLabel sx={{color:"#d8dee9"}} id={labelid}>{label}</InputLabel>
				<Select
					labelId={labelid}
					id={id}
					value={grade}
					label={label}
					onChange={handleChange}
					sx={{
						color: "#d8dee9",
						borderStyle: "none",
						borderWidth: 0,
					}}
					inputProps={{
						color: "#d8dee9"
					}}
				>
					<MenuItem value={10}>
						<Typography>O</Typography>
					</MenuItem>
					<MenuItem value={9}>
						<Typography>A+</Typography>
					</MenuItem>
					<MenuItem value={8}>
						<Typography>A</Typography>
					</MenuItem>
					<MenuItem value={7}>
						<Typography>B+</Typography>
					</MenuItem>
					<MenuItem value={6}>
						<Typography>B</Typography>

					</MenuItem>
					<MenuItem value={5}>
						<Typography>C</Typography>
					</MenuItem>
					<MenuItem value={0}>
						<Typography>U</Typography>
					</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
