async function loadRuns() {
    const response = await fetch('http://127.0.0.1:8000/counting');
    const runs = await response.json();
    console.log(runs); 
    setRunsTable(runs);
  }
// loadRuns();

function setRunsTable(runs) {
    const table = document.getElementById("tableContent");
    // table.remove();  
    console.log('before table is made')
    // replaceTable();
    $("tbody#id tableContent").remove(); 
    runs.forEach( item => {
      let row = table.insertRow();
      let directory = row.insertCell(0);
      directory.innerHTML = item.directory;
      let id = row.insertCell(1);
      id.innerHTML = item.id;
    });   
}

// Clear the table after the GET, but before the button show experiments
/* Using jQuery to delete all rows except the first row. */
$(document).ready(function(){ 
  $('#buttonStart').click(function(){ 
    $("#table").find("tr:gt(0)").remove();
  });
});

function createExperiment() {
  console.log('new experiment')
}

async function createRun() {
  const data =  {
    directory: "home/Sunshine",
    };
  const response = await fetch('http://127.0.0.1:8000/counting', {
    method: 'POST', 
    headers: {
        'Content-Type':'application/json',
    },
    body: JSON.stringify(data), 
});
const run = await response.json();
    console.log(run); 
}


// Make a fetch that can make a post for new runs, similar to what is seen below
/*
curl -s -X POST -H "Content-Type: application/json" -d '{"directory": "/home/sunshine"}' http://127.0.0.1:8000/counting | jq '.'
*/

// A header that says I'm sending you content of type json and -d stands for data, so its sending data in the type of a dictionary and then its the url that it sends it to.
// The post needs to send the data {"directory": "/home/sunshine"} to the url http://127.0.0.1:8000/counting

// populate the table for which I already have a function, using the GET request
// You get a list from the get, and this list is the content that has to go into the table
// the get gives you the data and then you put the data in the table
// the table needs to be cleared after the successful GET, and then the data from the GET needs to be added to the table

// another function that creates a new experiment needs to be added to the table, and that needs to use a POST request
// You 


// Clear the table first, and then make a post for new runs
// Add a button to post and fill out the table - and this will update the UI 


