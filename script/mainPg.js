console.log('main page added by js')

let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

// calculate totalCount
let calculateAllCard = document.getElementById('allCards');

function calculateTotalCount(){
totalCount.innerText=calculateAllCard.children.length;
}
calculateTotalCount();

// available Jobs
let availableJobs= document.getElementById('availableJobs');

function calculateAvailableJobs (){
availableJobs.innerText=calculateAllCard.children.length;
}
calculateAvailableJobs();




// console.log(totalCount);