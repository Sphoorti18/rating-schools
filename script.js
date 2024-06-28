/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('schoolRatingsDB');

// Insert a few documents into the schools collection.
db.getCollection('ratings').insertMany([
  { 'school': 'Swami Vivekanand Vidyaprasarak Mandal Primary School ', 'rating': 2.5, 'date': new Date('2024-06-01T08:00:00Z') },
  { 'school': 'DBCE', 'rating': 4.0, 'date': new Date('2024-06-01T09:00:00Z') },
  { 'school': 'AITD', 'rating': 3.5, 'date': new Date('2024-06-15T09:00:00Z') },
  { 'school': 'AITD', 'rating': 3.8, 'date': new Date('2024-06-04T11:21:39.736Z') },
  { 'school': 'Goa Engineering College', 'rating': 4.2, 'date': new Date('2024-06-04T21:23:13.331Z') },
  { 'school': 'DBCE', 'rating': 3.9, 'date': new Date('2024-06-04T05:08:13Z') },
  { 'school': 'DBCE', 'rating': 4.1, 'date': new Date('2024-06-10T08:43:00Z') },
  { 'school': 'Goa Engineering College', 'rating': 4.7, 'date': new Date('2024-06-06T20:20:13Z') },
]);

// Run a find command to view ratings given on June 4th, 2024.
const ratingsOnJune4th = db.getCollection('ratings').find({
  date: { $gte: new Date('2024-06-04'), $lt: new Date('2024-06-05') }
}).count();

// Print a message to the output window.
console.log(`${ratingsOnJune4th} ratings occurred on June 4th, 2024.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
const aggregatedRatings = db.getCollection('ratings').aggregate([
  // Find all of the ratings that occurred in June 2024.
  { $match: { date: { $gte: new Date('2024-06-01'), $lt: new Date('2024-07-01') } } },
  // Group the average rating for each school.
  { $group: { _id: '$school', averageRating: { $avg: '$rating' } } }
]).toArray();

// Print the aggregated ratings.
console.log(aggregatedRatings);

//------------------------------------------------------------------------------------------------------
// script.js

document.addEventListener('DOMContentLoaded', () => {
    fetch('/path/to/schools.json')
        .then(response => response.json())
        .then(data => {
            displaySchools(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displaySchools(schools) {
  const searchInput = document.getElementById('search-input');
    const schoolList = document.getElementById('school-list');
    schoolList.innerHTML = '';

    schools.forEach(school => {
        const li = document.createElement('li');

        const h2 = document.createElement('h2');
        h2.textContent = school.schoolName;

        const p = document.createElement('p');
        p.innerHTML = `<a href="https://maps.google.com/?q=${encodeURIComponent(school.schoolName)}" target="_blank">Rate on Google Maps</a>`;

        li.appendChild(h2);
        li.appendChild(p);

        schoolList.appendChild(li);
    });
}
//---------------------------------------------------------------------------------------------------------

