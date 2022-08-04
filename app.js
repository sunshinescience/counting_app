
async function loadRuns() {
    const response = await fetch('http://127.0.0.1:8000/counting');
    const runs = await response.json();
    console.log(runs); 
    setRunsTable(runs);
  }
loadRuns();


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

/* Using jQuery to delete all rows except the first row. */
$(document).ready(function(){ 
  $('#buttonStart').click(function(){ 
    $("#table").find("tr:gt(0)").remove();
  });
});




// Clear the table first, and then make a post for new runs
// Add a button to post and fill out the table - and this will update the UI 
/*
const postData = async (url = '', data = {}) => { 
  const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type':'application/json',
      },
      body: JSON.stringify(data), 
  });

  try {
      const newData = await response.json(); // waiting for the backend to tell you its done, and you get a response back which means it is done
      console.log(newData);
      //return newData;

  } catch(error) {
      console.log('error', error);
  };
};

postData()

*/

