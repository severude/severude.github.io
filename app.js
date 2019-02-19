// This data is rendered by the Vue.js JavaScript Framework
// https://vuejs.org/

// Projects Gallery data
const projects = [
	{
		url: 'https://space-station-capstone.herokuapp.com',
		image: 'img/ISS.jpg',
		alt: 'Space Station',
		description: 'Unit 12: International Space Station Tracker',
		title: 'Unit 12: Create your own Full Stack App with React',
		skills: 'Full Stack App',
		overview: 'This capstone project uses three APIs to track the International Space Station on a map along with current weather conditions below.  Users site locations are tracked in a database.  Uses the MongoDB, Express, React and Node stack.',
		github: 'https://github.com/severude/Space-Station'
	},
	{
		url: 'http://localhost:5000',
		image: 'img/Postman.JPG',
		alt: 'Course-Rating',
		description: 'Unit 11: Course Rating API',
		title: 'Unit 11: Build a REST API',
		skills: 'REST API',
		overview: 'Build a course rating API that will provide a way for users to administer a school database containing information about courses. Verify REST API routes with Postman.  Uses Express and MongoDB.',
		github: 'https://github.com/severude/Course-Rating-API'
	},
	{
		url: 'http://localhost:3000',
		image: 'img/Library-Manager.JPG',
		alt: 'Library-Manager',
		description: 'Unit 10: Library Manager',
		title: 'Unit 10: Build a Library Database Manager',
		skills: 'Sqlite web application',
		overview: 'Create a web application for listing, adding, updating, and deleting books in a library application.  Uses Express and Sqlite.',
		github: 'https://github.com/severude/Library-Manager'
	},
	{
		url: 'http://localhost:3000',
		image: 'img/Flickr.JPG',
		alt: 'Gallery-App',
		description: 'Unit 9: Photo Gallery App',
		title: 'Unit 9: Build a React Photo Gallery App',
		skills: 'React app',
		overview: 'Build a fast and lightweight photo gallery application to access Flickr.  To use this app you must provide your own your own Flickr API Key Tokens.',
		github: 'https://github.com/severude/Gallery-App'
	},
	{
		url: 'This is a command line script',
		image: 'img/Gulp.jpg',
		alt: 'Gulp-Build',
		description: 'Unit 8: Build Workflow',
		title: 'Unit 8: Create a Build Workflow',
		skills: 'Gulp scripts',
		overview: 'Implement a quick and efficient professional workflow to compile, concatenate, minify, optimize and copy a given website into the dist folder.',
		github: 'https://github.com/severude/Gulp-Build'
	},
	{
		url: 'http://localhost:3000',
		image: 'img/Twitter.jpg',
		alt: 'Twitter-Interface',
		description: 'Unit 7: Twitter Interface',
		title: 'Unit 7: Build a Twitter Interface',
		skills: 'Node Web Server',
		overview: 'Build a Node.js and Express-powered Web Site that can access your Twitter account. To use this app you must provide your own your own personal Twitter Keys and Access Tokens.',
		github: 'https://github.com/severude/Twitter-Interface'
	},
	{
		url: 'This is a command line script',
		image: 'img/Content-Scraping.JPG',
		alt: 'Content-Scraper',
		description: 'Unit 6: Data-mining application',
		title: 'Unit 6: Build a data-mining application',
		skills: 'Command line app',
		overview: 'Create a command-line application to read a web page, extract information, and store the data in a text file.  Uses npm and Node.',
		github: 'https://github.com/severude/Content-Scraper'
	},
	{
		url: 'https://severude.github.io/Employee-Directory',
		image: 'img/EmployeeDirectory.JPG',
		alt: 'Employee-Directory',
		description: 'Unit 5: Employee Directory',
		title: 'Unit 5: Use an API to create an Employee Directory',
		skills: 'AJAX API calls',
		overview: 'Create an employee directory by communicating with a third-party API.  Add a clickable modal to allow viewing of further employee details.',
		github: 'https://github.com/severude/Employee-Directory'
	},
	{
		url: 'https://severude.github.io/Tic-Tac-Toe',
		image: 'img/TicTacToe.JPG',
		alt: 'Tic-Tac-Toe',
		description: 'Unit 4: Tic-Tac-Toe App',
		title: 'Unit 4: Build a Tic-Tac-Toe App',
		skills: 'Object-Oriented JavaScript',
		overview: 'Use JavaScript Object-Oriented Programming to create a Tic-Tac-Toe game against the computer.',
		github: 'https://github.com/severude/Tic-Tac-Toe'
	},
	{
		url: 'https://severude.github.io/Interactive-Form',
		image: 'img/InteractiveForm.JPG',
		alt: 'Interactive-Form',
		description: 'Unit 3: Interactive Form',
		title: 'Unit 3: Build an Interactive Form',
		skills: 'Processing HTML Forms',
		overview: 'Enhance a given form so that it is engaging, interactive, easy to use and validates correctly.',
		github: 'https://github.com/severude/Interactive-Form'
	},
	{
		url: 'https://severude.github.io/Pagination-Filter',
		image: 'img/PaginationFilter.JPG',
		alt: 'Pagination-Filter',
		description: 'Unit 2: Pagination and Content Filter',
		title: 'Unit 2: Pagination and Content Filter',
		skills: 'DOM Programming',
		overview: 'Enhance the usability of a given web page by writing JavaScript to dynamically divide a long list of items into "pages". Add a search feature to display only the students that match specific search criteria.',
		github: 'https://github.com/severude/Pagination-Filter'
	},
	{
		url: 'https://severude.github.io/Quote-Generator',
		image: 'img/QuoteGenerator.JPG',
		alt: 'Quote-Generator',
		description: 'Unit 1: Random Quote Generator',
		title: 'Unit 1: Build a Random Quote Generator',
		skills: 'HTML, CSS, JavaScript',
		overview: 'Create a program which displays a randomly selected quote each time the user clicks a button.',
		github: 'https://github.com/severude/Quote-Generator'
	}
];

// Other projects
const sites = [
	{
		url: 'https://lifechurchmonroe.org',
		image: 'img/LifeChurchMonroe.JPG',
		alt: 'LifeChurchMonroe.org',
		description: 'LifeChurchMonroe.org - A large WordPress site that has more than 20 pages built out'
	},
	{
		url: 'https://severude.github.io/weather-api',
		image: 'img/Weather.JPG',
		alt: 'weather-api',
		description: 'An app to retrieve the current weather conditions and forecast for your area'
	},
	{
		url: 'https://severude.github.io/state-capitals',
		image: 'img/50-States.JPG',
		alt: 'state-capitals',
		description: 'A quiz for testing your knowledge of United States state capitals'
	}
];

// Skills data
const skills = [
	{
		skill: 'JavaScript',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
	},
	{
		skill: 'Node',
		url: 'https://nodejs.org/en'
	},
	{
		skill: 'React',
		url: 'https://reactjs.org'
	},
	{
		skill: 'Express',
		url: 'https://expressjs.com'
	},
	{
		skill: 'MongoDB',
		url: 'https://www.mongodb.com'
	},
	{
		skill: 'SQL',
		url: 'http://docs.sequelizejs.com'
	},
	{
		skill: 'HTML',
		url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
	},
	{
		skill: 'CSS',
		url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
	},
	{
		skill: 'Bootstrap',
		url: 'https://getbootstrap.com'
	}
];

// Vue for projects gallery
let gallery = new Vue({
	el: '#gallery',
	data: {
		projects: projects
	}
});

// Vue for websites
let websites = new Vue({
	el: '#sites',
	data: {
		sites: sites
	}
});

// Vue for job skills
let workflow = new Vue({
	el: '.my-buttons',
	data: {
		skills: skills
	}
});

let elementIndex = 0; // Saves the index of last clicked project

// Show overlay when a project is clicked
$('#gallery').on('click', 'a', function(event){
	event.preventDefault();
	
	// Save project index and show correct overlay arrows
	elementIndex = $('#gallery a').index(this);
	showOverlayArrows();

	// Show project information on the overlay
	let imageLocation = $(this).attr("href");
	$('#content img').attr("src", imageLocation);
	let title = $(this).children("p")[2].textContent;
	$('.title').text(title);
	let overview = $(this).children("p")[3].textContent;
	$('.overview').text(overview);
	let url = $(this).children("p")[4].textContent;
	$('.url').attr("href", url).text(url);
	let github = $(this).children("p")[5].textContent;
	$('.github').attr("href", github).text(github);

	// Show the overlay
	$('#overlay').show();
});

// Hide overlay if clicked
$('#close').click(function() {
	$('#overlay').hide();
});

// Logic to determine when to show or hide the overlay arrows
function showOverlayArrows() {
	let projectCount = $("#gallery li").length;
	if(elementIndex+1 === projectCount) {
		$('.next').hide();
	} else {
		$('.next').show();
	}
	if(elementIndex-1 < 0) {
		$('.previous').hide();
	} else {
		$('.previous').show();
	}
}

// Click to show the previous card
function previousCard() {
	$('#gallery a')[elementIndex-1].click();
};

// Click to show the next card
function nextCard() {
	$('#gallery a')[elementIndex+1].click();
};

// Click handlers for arrow buttons
$('.previous').on('click', previousCard);
$('.next').on('click', nextCard);
