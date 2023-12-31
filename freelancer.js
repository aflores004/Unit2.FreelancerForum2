const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];


const freelanceForum = document.createElement('h1');
freelanceForum.textContent = 'Freelance Forum';
freelanceForum.style.textAlign = 'center';
freelanceForum.style.fontSize = '40px'; 
document.body.appendChild(freelanceForum);

function calculateAverageStartingPrice(freelancers) {
  const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  return totalPrices / freelancers.length;
}



const averagePrice = calculateAverageStartingPrice(freelancers);

const averagePriceElement = document.createElement('p');
averagePriceElement.textContent = `The average starting price is: $${averagePrice.toFixed(2)}`;
averagePriceElement.style.textAlign = 'center';
averagePriceElement.style.fontSize ="25px"
document.body.appendChild(averagePriceElement);


const availableFreelancers = document.createElement('p');
availableFreelancers.textContent = 'Available Freelancers';
availableFreelancers.style.textAlign = 'center';

availableFreelancers.style.fontSize = '24px'; 
availableFreelancers.style.fontWeight = 'bold'; 
document.body.appendChild(availableFreelancers);


const table = document.createElement('table');
table.style.margin = '0 auto'; 
table.style.borderSpacing = '20px';

const tableRow = document.createElement('tr');
const headers = ['Name', 'Occupation', 'Starting Price'];

headers.forEach(headerText => {
  const header = document.createElement('th');
  header.textContent = headerText;
  tableRow.appendChild(header);
});

table.appendChild(tableRow);

freelancers.forEach(freelancer => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = freelancer.name;

  const occupationCell = document.createElement('td');
  occupationCell.textContent = freelancer.occupation;

  const priceCell = document.createElement('td');
  priceCell.textContent = `$${freelancer.price}`;

  row.appendChild(nameCell);
  row.appendChild(occupationCell);
  row.appendChild(priceCell);

  table.appendChild(row);
});

document.body.appendChild(table);

