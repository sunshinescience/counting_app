async function loadRuns() {
    const response = await fetch('http://127.0.0.1:8000/counting');
    const runs = await response.json();
    console.log(runs); 
    setRunsTable(runs);
  }
// loadRuns();

function setRunsTable(runs) {
    const table = document.getElementById("tableContent");
    $("#table").find("tr:gt(0)").remove(); // Clear the table and then you add the data to the table. Make sure you have the data first, and then you clear the table, and then you add the new data.
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

// Clear the table after the GET, because then you know you have the data from the GET. Make sure you have the new data before you clear the data


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

// For usability, you create the runs and then right away load the runs so that the table contains your new created stuff

