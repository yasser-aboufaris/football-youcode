fetch("./players.json")
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.players.length; i++) {
            let jsonCartedHtml = `
    <div class="relative w-36 h-52 player scale-90 ${data.players[i].position} hover:scale-125">
        <img src="./img/player-carte-removebg-preview.png" alt="Player Card Background"
            class="absolute inset-0 w-full h-full object-cover" />

 
        <div class="absolute inset-0 mb-2 flex flex-col items-center justify-center text-white p-2">

            <div class="flex items-center">
                <div class="flex flex-col justify-between items-center w-[10%] h-5">
                    <span class="text-sm font-bold">
                        <span class="text-yellow-600"></span>${data.players[i].rating}</span>
                    <span class="text-S font-semibold shadow-text">${data.players[i].position}</span>
                </div>
                <div class="">
                    <img src="${data.players[i].photo}" alt="Player"
                        class="w-16 h-16 rounded-md" />
                </div>
            </div>


            <h3 class="text-center text-sm font-bold">${data.players[i].name}</h3>


            <div class="flex justify-between items-center w-[30%]">
                <div class="flex items-center">
                    <img src="${data.players[i].flag}" alt="Nationality" class="w-4 h-4 rounded-sm" />
                </div>
                <img src="${data.players[i].logo}" alt="Club" class="w-5 h-5" />
            </div>




            ${data.players[i].position === "GK" ? ` <div class="flex flex-col text-xs w-full px-2 h-16">
                <div class="flex justify-around">
                    <span>DIV:</span>
                    <span>${data.players[i].diving}</span>

                    <span>HAN:</span>
                    <span>${data.players[i].handling}</span>
                </div>
                <div class="flex justify-around">
                    <span>KIC:</span>
                    <span>${data.players[i].kicking}</span>

                    <span>REF:</span>
                    <span>${data.players[i].reflexes}</span>
                </div>
                <div class="flex justify-around">
                    <span>SPE:</span>
                    <span>${data.players[i].speed}</span>

                    <span>PHY:</span>
                    <span>${data.players[i].positioning}</span>
                </div>`
                
                
                : 



                `<div class="flex flex-col text-xs w-full px-2 h-16">
                <div class="flex justify-around">
                    <span>PAC:</span>
                    <span>${data.players[i].pace}</span>

                    <span>SHO:</span>
                    <span>${data.players[i].shooting}</span>
                </div>
                <div class="flex justify-around">
                    <span>PAS:</span>
                    <span>${data.players[i].passing}</span>

                    <span>DRI:</span>
                    <span>${data.players[i].dribbling}</span>
                </div>
                <div class="flex justify-around">
                    <span>DEF:</span>
                    <span>${data.players[i].defending}</span>

                    <span>PHY:</span>
                    <span>${data.players[i].physical}</span>
                </div>
            </div>`}
            
        </div>
  `
            document.getElementById('bank').insertAdjacentHTML("beforeEnd", jsonCartedHtml);
            let GK = [];
            let RW = [];
            let CML = [];
            let CBL = [];
            let CBR = [];
            let LW = [];
            let CMR = [];
            let ST = [];
            let LB = [];
            let RB = [];
            let CMC = [];
            switch(data.players[i].position){
                case GK:
                    GK.push({name1:"${data.players[i].position}",})
                    return;
                case RW : 
                    RW.push();    
            }
        }
    })





///////////////////////////
document.getElementById("ShowFrom").addEventListener("click", function () {
    document.getElementById("addForm").classList.remove("hidden");
});

document.getElementById("hideForm").addEventListener("click", function () {
    document.getElementById("addForm").classList.add("hidden");
});
function createPlayer(event) {
    let name = document.getElementById('addedPlayerName').value;
    let position = document.getElementById('Position').value;//position du joueur
    let playerImage = document.getElementById('playerImgUrl').value;
    let playerFlag = document.getElementById('countryUrl').value;
    let playerLogo = document.getElementById('teamUrl').value;
    ////////////////////////////////////////////////////////////////
    let paceStates = document.getElementById('Pace').value;
    let shootStates = document.getElementById('shooting').value;
    let passStates = document.getElementById('passing').value;
    let dribStates = document.getElementById('dribbling').value;
    let defStates = document.getElementById('defending').value;
    let phyStates = document.getElementById('physical').value;
    ////////////////////////////////////////////////////////////////    
    let divStates = document.getElementById('diving').value;
    let handStates = document.getElementById('handling').value;
    let kickStates = document.getElementById('kicking').value;
    let refStates = document.getElementById('reflex').value;
    let spdStates = document.getElementById('speed').value;
    let posStates = document.getElementById('positioning').value;

    //let rating = document.getElementById('').value;
    console.log("1")
    let createdCard = `
    <div class="relative w-36 h-52 player ${position} hover:scale-125">
        <img src="./img/player-carte-removebg-preview.png" alt="Player Card Background"
            class="absolute inset-0 w-full h-full object-cover" />

 
        <div class="absolute inset-0 mb-2 flex flex-col items-center justify-center text-white p-2">

            <div class="flex items-center">
                <div class="flex flex-col justify-between items-center w-[10%] h-5">
                    <span class="text-sm font-bold">
                        <span class="text-yellow-600"></span>90</span>
                    <span class="text-S font-semibold">${position}</span>
                </div>


                <div class="">
                    <img src="${playerImage}" alt=""
                        class="w-16 h-16 rounded-md" />
                </div>
            </div>


            <h3 class="text-center text-sm font-bold">${name}</h3>


            <div class="flex justify-between items-center w-[30%]">
                <div class="flex items-center">
                    <img src="${playerFlag}" alt="Nationality" class="w-4 h-4 rounded-sm" />
                </div>
                <img src="${playerLogo}" alt="Club" class="w-5 h-5" />
            </div>


            ${position === "GK" ? ` <div class="flex flex-col text-xs w-full px-2 h-16">
                <div class="flex justify-around">
                    <span>DIV:</span>
                    <span>${divStates}</span>

                    <span>HAN:</span>
                    <span>${handStates}</span>
                </div>
                <div class="flex justify-around">
                    <span>KIC:</span>
                    <span>${kickStates}</span>

                    <span>REF:</span>
                    <span>${refStates}</span>
                </div>
                <div class="flex justify-around">
                    <span>SPE:</span>
                    <span>${spdStates}</span>

                    <span>PHY:</span>
                    <span>${posStates}</span>
                </div>`
                
                
                : 


                
                `<div class="flex flex-col text-xs w-full px-2 h-16">
                <div class="flex justify-around">
                    <span>PAC:</span>
                    <span>${paceStates}</span>

                    <span>SHO:</span>
                    <span>${shootStates}</span>
                </div>
                <div class="flex justify-around">
                    <span>PAS:</span>
                    <span>${passStates}</span>

                    <span>DRI:</span>
                    <span>${dribStates}</span>
                </div>
                <div class="flex justify-around">
                    <span>DEF:</span>
                    <span>${defStates}</span>

                    <span>PHY:</span>
                    <span>${phyStates}</span>
                </div>
            </div>`}
            
        </div>
  `;

    document.getElementById('bank').insertAdjacentHTML("beforeEnd", createdCard);
}
 
document.getElementById('playedCreate').addEventListener('click', createPlayer)
function addStates(event) {
    let selectedPosition = event.target.value
    if (selectedPosition === 'GK') {
        document.getElementById('playerStats').classList.add("hidden")
        document.getElementById("GKstats").classList.remove("hidden");
        console.log("1")
    }
    else {
        document.getElementById('playerStats').classList.remove("hidden")
        document.getElementById("GKstats").classList.add("hidden");
    }

}
document.getElementById('Position').addEventListener('change', addStates)



function addToField(){

}
