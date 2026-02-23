console.log('main page added by js')
// empty array for interviewCount & rejectedCount count
let interviewCountList = []
let rejectedCountList = []

// Get dashboard element
let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

// Get Buttons: All, Interview, Rejected
let allBtn = document.getElementById('all-btn');
let interviewBtn = document.getElementById('interview-btn');
let rejectedBtn = document.getElementById('rejected-btn');


// calculate totalCount, interviewCount 
let calculateAllCard = document.getElementById('allCards');

const mainContainer = document.querySelector('main');
console.log(mainContainer);

// push list into interviewCountList & rejectedCountList
interviewCountList.push()

function calculateTotalCount(){
totalCount.innerText = calculateAllCard.children.length; 
interviewCount.innerText = interviewCountList.length;
rejectedCount.innerText = rejectedCountList.length;
}
calculateTotalCount();

// available Jobs
let availableJobs= document.getElementById('availableJobs');

function calculateAvailableJobs (){
availableJobs.innerText=calculateAllCard.children.length;
}
calculateAvailableJobs();

// toggleStyle

function toggleStyle(id){
    // remove btn color
allBtn.classList.remove('text-amber-50' ,'bg-[#3B82F6]');
interviewBtn.classList.remove('text-amber-50' ,'bg-[#3B82F6]');
rejectedBtn.classList.remove('text-amber-50' ,'bg-[#3B82F6]');
    //  add btn color
allBtn.classList.add( 'text-gray-400', 'bg-white');
interviewBtn.classList.add('text-gray-400', 'bg-white');
rejectedBtn.classList.add('text-gray-400', 'bg-white');
   // for selected btn
let selected = document.getElementById(id);
// console.log(selected);

selected.classList.remove('text-gray-400', 'bg-white')
selected.classList.add('text-amber-50','bg-[#3B82F6]' )
}

// let allBtn = document.getElementById('all-btn');
// allBtn.addEventListener('click', function(){
//     alert('click from all btn');
// })




// console.log(totalCount);