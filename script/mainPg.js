// empty array for interviewCount & rejectedCount count
let interviewList = [];
let rejectedList = [];

// Get dashboard element
let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');
let availableJobs = document.getElementById('availableJobs');

let allBtn = document.getElementById('all-btn');
let interviewBtn = document.getElementById('interview-btn');
let rejectedBtn = document.getElementById('rejected-btn');

const allCardsContainer = document.getElementById('allCards');
const filteredCardContainer = document.getElementById('filteredCard');


// Dashboard Update
function updateDashboard() {
    const totalJobs = allCardsContainer.querySelectorAll('.card').length;
    totalCount.innerText = totalJobs;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
    
    if (!filteredCardContainer.classList.contains('hidden')) {
        availableJobs.innerText = filteredCardContainer.querySelectorAll('.card').length;
    } else {
        availableJobs.innerText = totalJobs;
    }
}

// toggle style
function toggleStyle(id) {
    // remove btn color
allBtn.classList.remove('text-amber-50' ,'bg-[#3B82F6]');
interviewBtn.classList.remove('text-amber-50' ,'bg-[#3B82F6]');
rejectedBtn.classList.remove('text-amber-50' ,'bg-[#3B82F6]');
    //  add btn color
allBtn.classList.add( 'text-gray-400', 'bg-white');
interviewBtn.classList.add('text-gray-400', 'bg-white');
rejectedBtn.classList.add('text-gray-400', 'bg-white');

    // Selected btn color
const selected = document.getElementById(id);
console.log(selected);

selected.classList.remove('text-gray-400', 'bg-white');
selected.classList.add('text-amber-50', 'bg-[#3B82F6]');


    if (id === 'all-btn') {
        allCardsContainer.classList.remove('hidden');
        filteredCardContainer.classList.add('hidden');
    } else {
        allCardsContainer.classList.add('hidden');
        filteredCardContainer.classList.remove('hidden');
        renderFiltered(id === 'interview-btn' ? 'interview' : 'rejected');
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
                <p class="text-gray-400 text-sm">Check back soon for new job opportunities</p>
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



// EventListener 
document.addEventListener('click', function(event) {
    const target = event.target;
    const card = target.closest('.card');
    if (!card) return;

   
    const cardInfo = {
        companyName: card.querySelector('.companyName').innerText,
        designation: card.querySelector('.designation').innerText,
        place: card.querySelector('.place').innerText,
        description: card.querySelector('.description').innerText
    };

    // interview btn
    if (target.classList.contains('pressInterviewedBtn')) {
    
        rejectedList = rejectedList.filter(item => item.companyName !== cardInfo.companyName);
        
        // !list then add
        if (!interviewList.find(i => i.companyName === cardInfo.companyName)) {
            interviewList.push(cardInfo);
        }

        const statusBtn = card.querySelector('.currentStatus'); 
        statusBtn.innerText = 'Interview'; 
        statusBtn.classList.remove('bg-[#EEF4FF]', 'bg-[#EF4444]');
        statusBtn.classList.add('bg-[#10B981]', 'text-white');
        updateDashboard();
    }


    if (target.classList.contains('pressRejectedBtn')) {
        // 
        interviewList = interviewList.filter(item => item.companyName !== cardInfo.companyName);
        
        if (!rejectedList.find(r => r.companyName === cardInfo.companyName)) {
            rejectedList.push(cardInfo);

        }
        const statusBtn = card.querySelector('.currentStatus'); 
        statusBtn.innerText = 'Rejected'; 
        statusBtn.classList.remove('bg-[#EEF4FF]', 'bg-[#EF4444]');
        statusBtn.classList.add('bg-[#EF4444]', 'text-white');
        updateDashboard();
    }

    // delete btn 
    if (target.closest('.deleteBtn')) {
        interviewList = interviewList.filter(item => item.companyName !== cardInfo.companyName);
        rejectedList = rejectedList.filter(item => item.companyName !== cardInfo.companyName);
        card.remove();
        updateDashboard();
    }
});

updateDashboard();

//let allBtn = document.getElementById('all-btn');
//allBtn.addEventListener('click', function(){
// alert('click from all btn');
//})



// console.log(totalCount);