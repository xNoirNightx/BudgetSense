// Pie Chart Stuff 
const container = d3.select("#pieChart");
const svg = container.append("svg")
  .attr("width", 300)
  .attr("height", 300);

// Create a circle within the SVG
svg.append("circle")
  .attr("cx", 150)
  .attr("cy", 150)
  .attr("r", 147)
  .attr("fill", "#F2A7C3");

//   Expense Input Form 

  document.getElementById('newExpense').addEventListener('click', function(){
    let table = document.querySelector('table');
    let row = table.insertRow(table.rows.length - 1);
    let labelCell = row.insertCell(0);
    let amountCell = row.insertCell(1);
    labelCell.innerHTML = '<input type="text" name="label[]" placeholder="Expense label">';
    amountCell.innerHTML = '<input type="number" name="amount[]" placeholder="Expense Amount">';
});

document.getElementById('culminate').addEventListener('click', function(){
    let amounts = document.getElementsByName('amount[]')
    let total = 0;
    for (var i=0; i < amounts.length; i++) {
        if (amounts[i].value !== '') {
            total += parseFloat(amounts[i].value);
        }
    } 
    document.getElementById('total').innerHTML = 'Total Expenses: $' + total.toFixed(2); 
});


const data = [{
  name: 'Mortgage/Rent',
  value: document.getElementById('data1').value 
}, {
name: 'Home Insurance',
value: document.getElementById('data2'). value
}, {
name: 'Car Insurance',
value: document.getElementById('data3').value
}, {
name: 'Loans',
value: document.getElementById('data4').value 
}, {
name: 'Groceries',
value: document.getElementById('data5').value
}]

const color = d3.scaleOrdinal(['red', 'green', 'grey', 'blue', 'pink'])

const pie = d3.pie().value(d => d.value);
