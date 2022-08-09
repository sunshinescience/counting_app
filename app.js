// For usability, create the runs and then right away load the runs so that the table contains the newly created stuff

// Using a GET request to get the data 
async function loadRuns() {
    const response = await fetch('http://127.0.0.1:8000/counting');
    const runs = await response.json();
    console.log(runs); 
    setRunsTable(runs);
  }

// Create the table 
function setRunsTable(runs) {
    const table = document.getElementById("tableContent");
    $("#table").find("tr:gt(0)").remove(); // This clears the table. What's happening here is that I clear the table and then add the data to the table. Make sure to have the data first, and then clear the table, and then add the new data. Clear the table after the GET, because then you know you have the data from the GET. 
    $("tbody#id tableContent").remove(); 
    runs.forEach( item => {
      let row = table.insertRow();
      let directory = row.insertCell(0);
      directory.innerHTML = item.directory;
      let id = row.insertCell(1);
      id.innerHTML = item.id;
    });   
}

// createRun sends a new run to the server and then reloads the table
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
    loadRuns(); // After you've created the experiment, you load the runs in the table
}


// TODO: Let user select the directory. The directory right now is hard coded but now the user needs to be able to select the directory.
// There are problems with security to access a directory, try https://developer.mozilla.org/en-US/docs/Web/API/Window/showDirectoryPicker
// Try: https://fjolt.com/article/javascript-new-file-system-api
// Try: https://codepen.io/matuzo/pen/KOdpmq?editors=1111

/* ******  Directory  ******* */
/* 
maybe use:
startIn

    A FileSystemHandle or a well known directory ("desktop", "documents", "downloads", "music", "pictures", or "videos") to open the dialog in.

*/

// See here for an example: https://codepen.io/matuzo/pen/KOdpmq?editors=1111
document.getElementById("folder").addEventListener("change", function(event) {
  var output = document.querySelector("ul");
  var files = event.target.files;

  for (var i=0; i<files.length; i++) {
    var item = document.createElement("li");
    item.innerHTML = files[i].webkitRelativePath;
    output.appendChild(item);
  };
}, false);
