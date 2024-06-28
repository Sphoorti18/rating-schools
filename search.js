const schools = [
    {
        name: "Rose Mary Hr. Sec. School",
        link: "https://www.google.com/maps/place/Rose+Mary+Hr.+Sec.+School/@23.2760753,77.410147,17z/data=!3m1!4b1!4m6!3m5!1s0x397c6848586e5d53:0x487cabb50abd73ca!8m2!3d23.2760704!4d77.4147604!16s%2Fg%2F11c542_rf4?authuser=0&entry=ttu"
    },
    {
        name: "Goa College of Pharmacy",
        link: "https://www.google.com/maps/place/Goa+College+of+Pharmacy/@15.4951802,73.8193461,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfc08da589790f:0x60390a362ee2664a!8m2!3d15.495175!4d73.821921!16s%2Fg%2F1v3kfyyx?authuser=0&entry=ttu"
    },
    {
        name: "PES's Rajaram And Tarabai Bandekar College Of Pharmacy",
        link: "https://www.google.com/maps/place/PES's+Rajaram+And+Tarabai+Bandekar+College+Of+Pharmacy/@15.4553301,73.8226952,12z/data=!4m10!1m2!2m1!1sGoa+pharmarcy+school+in+farmagudi!3m6!1s0x3bbfbab93667b5d1:0xd5b3f776d083450b!8m2!3d15.4151847!4d73.988275!15sCiBHb2EgcGhhcm1hY3kgc2Nob29sIGluIGZhcm1hZ3VkaZIBB2NvbGxlZ2XgAQA!16s%2Fg%2F1tkc0kgv?authuser=0&entry=ttu"
    },
    {
        name: "G.V.M's SNJA Higher Secondary School",
        link: "https://www.google.com/maps/place/G.V.M's+SNJA+Higher+Secondary+School/@15.4076191,73.9880401,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfbaf237ffa7c1:0x843de5eb127a1209!8m2!3d15.407614!4d73.9926535!16s%2Fg%2F1tr8j__x?authuser=0&entry=ttu"
    }
];

const searchInput = document.getElementById('search-input');
const schoolList = document.getElementById('school-list');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    schoolList.innerHTML = '';

    const filteredSchools = schools.filter(school => school.name.toLowerCase().includes(query));

    filteredSchools.forEach(school => {
        const li = document.createElement('li');
        li.innerHTML = `<h2>${school.name}</h2><p><a href="${school.link}" target="_blank">Rate on Google Maps</a></p>`;
        schoolList.appendChild(li);
    });
});

// Trigger the search event to show all schools initially
searchInput.dispatchEvent(new Event('input'));
