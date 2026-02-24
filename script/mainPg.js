
// empty array for interview count & rejected count 
let interviewList = []
let rejectedList = []

// Get dashboard element
let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');


// Get Buttons: All, Interview, Rejected
let allBtn = document.getElementById('all-btn');
let interviewBtn = document.getElementById('interview-btn');
let rejectedBtn = document.getElementById('rejected-btn');

// Get cards
const allCardContainer = document.getElementById('allCards');
const filteredCardContainer = document.getElementById('filteredCard');

// for update Dashboard
function updateDashboard() {
    const totalJobs = allCardsContainer.querySelectorAll('.card').length;
    totalCount.innerText = totalJobs;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    if (!filteredCardContainer.classList.contains('hidden')){
        availableJobs.innerText = filteredCardContainer.querySelectorAll('.card').length;
    }else{
        availableJobs.innerText = totalJobs;
    }
}    


// toggle style 

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
// adding '3B82F6' color for selected btn
let selected = document.getElementById(id);
selected.classList.remove('text-gray-400', 'bg-white');
selected.classList.add('text-amber-50', 'bg-[#3B82F6]');
// console.log(selected);
if (id ==='all-btn'){
    allCardsContainer.classList.remove('hidden');
    filteredCardContainer.classList.add('hidden');
}else{

}
updateDashboard();
}

// rendering for interview
function renderFiltered(type) {
    filteredCardContainer.innerHTML = '';
    const list = (type === 'interview') ? interviewList : rejectedList;

    if (list.length === 0) {
        filteredCardContainer.innerHTML = `
            <div class="col-span-full text-center py-10">
                <img src="./images/jobs.png" class="w-20 mx-auto  mb-4">
                <p class="text-gray-600 font-medium">No jobs Available</p>
                <p class="text-gray-400 text-sm">Keep applying to see data here!</p>
            </div>`;
    } else {
        list.forEach((job, index) => {
            const div = document.createElement('div');
            div.className = 'card flex justify-between bg-white p-4 rounded-md shadow-sm';
            div.innerHTML = `
                <div>
                    <div class="p-4">
                        <h1 class="companyName text-[18px] font-semibold text-[#002c5c]">${job.companyName}</h1>
                        <p class="designation text-[16px] font-normal text-[#64748B]">${job.designation}</p>
                    </div>
                    <div class="px-4 py-2">
                        <p class="place text-sm font-normal text-[#64748B]">${job.place}</p>
                        <p class="mt-2 text-sm text-[#002c5c]">${job.description}</p>
                    </div>
                    <div class="px-4">
                        <button class="px-4 py-2 text-sm font-bold text-white rounded ${type === 'interview' ? 'bg-[#10B981]' : 'bg-[#EF4444]'}">
                            ${type.toUpperCase()}
                        </button>
                        
                    </div>
                </div>
            `;
            filteredCardContainer.appendChild(div);
        });
    }
    updateDashboard();
}

document.addEventListener('click', function(event){
    const target = event.target;
    const card = target.closest('.card');
    if (!card) return;

    // Card theke data neya
    const cardInfo = {
        companyName: card.querySelector('.companyName').innerText,
        designation: card.querySelector('.designation').innerText,
        place: card.querySelector('.place').innerText,
        description: card.querySelector('.description').innerText
    };

})

//let allBtn = document.getElementById('all-btn');
//allBtn.addEventListener('click', function(){
// alert('click from all btn');
//})



// console.log(totalCount);