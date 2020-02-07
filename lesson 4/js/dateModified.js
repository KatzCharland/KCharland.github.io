const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const d = new Date();
const monthName = monthNames[d.getMonth()];
const day = d.getDay();
const year = d.getFullYear();


document.getElementById('currentDate').innerHTML = monthName + " " + day + ", " + year;
