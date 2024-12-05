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

fetch("./players.json")
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.players.length; i++) {
            let jsonCartedHtml = `
    <div data-position="${JSON.stringify(data.players[i].position)}" data-player='${JSON.stringify(data.players[i])}' onclick="changePlace(this)" class="relative w-36 h-52 player scale-90 ${data.players[i].position} hover:scale-125">
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




            switch (data.players[i].position) {
                case "GK":
                    GK.push(data.players[i]);
                    break;
                case "RW":
                    RW.push(data.players[i]);
                    break;
                case "CML":
                    CML.push(data.players[i]);
                    break;
                case "CBL":
                    break;
                case "CBR":
                    CBR.push(data.players[i]);
                    break;
                case "LW":
                    LW.push(data.players[i]);
                    break;
                case "CMR":
                    CMR.push(data.players[i]);
                    break;
                case "ST":
                    ST.push(data.players[i]);
                    break;
                case "LB":
                    LB.push(data.players[i]);
                    break;
                case "RB":
                    RB.push(data.players[i]);
                    break;
                case "CMC":
                    CMC.push(data.players[i]);
                    break;

            }
            console.log(GK)
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
    let position = document.getElementById('Position').value;
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
    ///////////////////////////////////////////////////////////////////////////////
    
    

    //let rating = document.getElementById('').value;
    let player;
    if (position == GK) {
     player = {
            "name":name,
            "photo": playerImage,
            "position":position,
            "flag": playerFlag,
            "logo": playerLogo,
            "rating": 90,
            "pace": paceStates,
            "shooting": shootStates,
            "passing": passStates,
            "dribbling": dribStates,
            "defending": defStates,
            "physical": phyStates
        }}
    else {
         player = {
                "name":name,
                "photo": playerImage,
               "position": position,
                "flag": playerFlag,
                "logo": playerLogo,
                "rating":90,
                "diving": divStates,
                "handling": handStates,
                "kicking": kickStates,
                "reflexes": refStates,
                "speed": spdStates,
                "positioning": posStates
            }
        }

        const regexName = /^[a-z ]{1,12}$/;
        const regexStat = /^[1-9][0-9]?$/;

if(regexName.test(name)&&((regexStat.test(paceStates)|| regexStat(divStates))&&
(regexStat.test(shootStates)||regexStat.test(handStates))&&
(regexStat.test(passStates)||regexStat.test(kickStates))&&
(regexStat.test(dribStates)||regexStat.test(refStates))&&/////////////////////4
(regexStat.test(defStates)||regexStat.test(spdStates))&&/////////////////////////////////5
(regexStat.test(phyStates)||regexStat.test(posStates))////////////////////////////6
)){ console.log(1)

        let createdCard = `
    <div data-position="${JSON.stringify(position)}" data-player='${JSON.stringify(player)}' class="relative w-36 h-52 player ${position} hover:scale-125" onclick="changePlace(this)">
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
        document.getElementById("addForm").classList.add("hidden");}
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




    
  function changePlace(playerElement){
    let ElementContainer = playerElement.parentNode.id;
    let playerData = JSON.parse(playerElement.dataset.player);
    if(ElementContainer==bank.id){
    let emptyCard = document.querySelector(`[data-position='${playerData.position}']`);

    emptyCard.replaceWith(playerElement)
    }
    else{
        
        let Reserve = document.getElementById("bank");
        let pose = playerData.position;

    console.log(pose)

        let emptyCard = convertHtmlToNode(`<div data-position="${pose}" class="h-40 w-24 flex justify-center items-center"
                                style="background-image: url(https://www.futbin.com/design2/img/static/evolutions/placeholder-card-normal.webp); background-repeat: no-repeat; background-size: contain;">

                                <div class="hover:scale-125 h-fit addingButton">
                                    <svg viewBox="0 0 36 42" fill="none" width="36">
                                        <path
                                            d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z"
                                            stroke="limegreen" stroke-width="1.5"></path>
                                    </svg>
                                </div>
                            </div>`);
       

        playerElement.replaceWith(emptyCard);
        Reserve.appendChild(playerElement);
        
    }
  }


  function convertHtmlToNode(html) {
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.firstElementChild;
  }
  