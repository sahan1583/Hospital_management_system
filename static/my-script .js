// Assume `names` is an array of strings obtained from the backend
const names = ["Alice", "Bob", "Charlie"];

function generateTable() {
  const tableBody = document.querySelector("#name-table tbody");
  tableBody.innerHTML = ""; // Clear any existing rows
  
  names.forEach((name) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    row.appendChild(nameCell);

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      // Handle delete button click here
      console.log(`Deleting ${name}`);
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    tableBody.appendChild(row);
  });
}

// Call the function to generate the initial table
generateTable();
