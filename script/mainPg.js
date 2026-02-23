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

// get empty filteredCard section
let filteredCard = document.getElementById('filteredCard');

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
  // adding '3B82F6' color for selected btn
selected.classList.remove('text-gray-400', 'bg-white');
selected.classList.add('text-amber-50','bg-[#3B82F6]' );
}
      // rendering for interview
mainContainer.addEventListener('click', function(event){
    console.log(event.target.classList.contains('pressInterviewedBtn'));
if (event.target.classList.contains('pressInterviewedBtn')){
    
    const parentNode = event.target.parentNode.parentNode

    const companyName = parentNode.querySelector('.companyName').innerText;
    const designation = parentNode.querySelector('.designation').innerText;
    const place = parentNode.querySelector('.place').innerText;
    const currentStatus = parentNode.querySelector('.currentStatus').innerText;
    const description = parentNode.querySelector('.description').innerText;
    const pressInterviewedBtn = parentNode.querySelector('.pressInterviewedBtn').innerText;
    const pressRejectedBtn = parentNode.querySelector('.pressRejectedBtn').innerText;
    // const deleteBtn = parentNode.querySelector('.deleteBtn').scr;

    // console.log(companyName,designation,place,currentStatus,description,pressInterviewedBtn,pressRejectedBtn);

    const cardInfo={
        companyName,
        designation,
        place,
        currentStatus,
        description,pressInterviewedBtn,pressRejectedBtn
    }
    console.log(cardInfo);
let interviewCall = interviewCountList.find(i=>i.companyName === cardInfo.companyName);
if (!interviewCall){
    interviewCountList.push(cardInfo);
}
renderInterview();

}
// console.log(interviewCountList);
})

// Add filteredCard 
function renderInterview (){
    filteredCard.innerHTML = ''

    for (interview of interviewCountList){
        // console.log(interview);
        let div = document.createElement('div')
        div.className='card flex justify-between  bg-white p-4 rounded-md'
        div.innerHTML = `
                    <div class="card flex justify-between  bg-white p-4 rounded-md">
                <div>
                    <!-- div-1 :job description & company name -->
                    <div class="p-4">
                        <h1 class="companyName text-[18px] font-semibold text-[#002c5c]">Mobile First Corp</h1>
                        <p class="designation text-[16px] font-normal text-[#64748B]">React Native Developer</p>
                    </div>
                    <!-- div-02:place & salary -->
                    <div>
                        <p class="place p-4 text-sm font-normal text-[#64748B]">
                            Los Angeles, CA
                            <span class="mx-2">.</span>
                            Part-time
                            <span>.</span>
                            $80,000 - $120,000
                        </p>
                    </div>
                    <!-- div-03: current status- interviewed or rejected -->
                    <div class="px-4">
                        <!-- ID; currentStatus -->
                        <button id="currentStatus"
                            class="currentStatus px-4 w-[122px] h-12  text-sm font-normal text-[#002c5c] bg-[#EEF4FF]">NOT
                            APPLIED</button>
                        <p class="description mt-2 text-sm text-[#002c5c]">Create stunning web experiences for
                            high-profile clients.
                            Must have portfolio and
                            experience with modern web design trends.</p>
                    </div>
                    <!-- div-04: press btn,interviewed or rejected  -->
                    <div class="flex p-4 gap-4">
                        <!-- ID: press-interviewed-btn -->
                        <BUtton id="press-interviewed-btn"
                            class="pressInterviewedBtn px-4 w-[122px] h-12  rounded-md  text-sm font-bold text-[#10B981] border border-[#10B981]">INTERVIEW</BUtton>

                        <!-- ID:press-rejected-btn -->
                        <BUtton id="press-rejected-btn"
                            class="pressRejectedBtn px-4 w-[122px] h-12  rounded-md  text-sm font-bold text-[#EF4444] border border-[#EF4444]">REJECTED</BUtton>

                    </div>
                </div>

                <!-- Delete-card-div -->
                <div>
                    <button id="delete-btn" class="deleteBtn"><img src="./images/Delete.png" alt=""></button>
                </div>
            </div>
        `
    }
}


// let allBtn = document.getElementById('all-btn');
// allBtn.addEventListener('click', function(){
//     alert('click from all btn');
// })




// console.log(totalCount);