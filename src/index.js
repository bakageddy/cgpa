import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const points = {
	"O": 10,
	"A+": 9,
	"A": 8,
	"B+": 7,
	"B": 6,
	"C": 5,
	"U": 0,
}
export const courses = {
	"Semester 1": [
		{ "course": "JHS1121", "credit": 3 },
		{ "course": "JMA1101", "credit": 3 },
		{ "course": "JPH1101", "credit": 3 },
		{ "course": "JCY1101", "credit": 3 },
		{ "course": "JGE1101", "credit": 3 },
		{ "course": "JGE1102", "credit": 3 },
		{ "course": "JPC1111", "credit": 1 },
		{ "course": "JGE1112", "credit": 2 },
		{ "course": "JGE1111", "credit": 2 }
	],
	"Semester 2": [
		{ "course": "JEC1204", "credit": 3 },
		{ "course": "JGE1201", "credit": 3 },
		{ "course": "JGE1202", "credit": 3 },
		{ "course": "JHS1221", "credit": 3 },
		{ "course": "JMA1201", "credit": 3 },
		{ "course": "JBE1223", "credit": 3 },
		{ "course": "JEC1214", "credit": 2 },
		{ "course": "JGE1211", "credit": 2 }
	],
	"Semester 3": [
		{ "course": "JCS1301", "credit": 3 },
		{ "course": "JCS1302", "credit": 3 },
		{ "course": "JCS1303", "credit": 3 },
		{ "course": "JCS1311", "credit": 2 },
		{ "course": "JCS1312", "credit": 2 },
		{ "course": "JCS1321", "credit": 3 },
		{ "course": "JMA1303", "credit": 3 }
	],
	"Semester 4": [
		{"course": "JCS1401", "credit": 3},
		{"course": "JCS1402", "credit": 3},
		{"course": "JCS1403", "credit": 3},
		{"course": "JCS1404", "credit": 3},
		{"course": "JMA1403", "credit": 3},
		{"course": "JPT1001", "credit": 1},
		{"course": "NPTL001/JBA9001", "credit": 3},
		{"course": "JCS1411", "credit": 2},
		{"course": "JCS1412", "credit": 2},
	],
}

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
