
fetch("./players.json")
  .then((response) => response.json())
  .then((data) => {
    for(let i = 0; i <7; i++){
    let jsonCartesHtml =`
    <div class="relative w-36 h-52">
        <img src="./img/player-carte-removebg-preview.png" alt="Player Card Background"
            class="absolute inset-0 w-full h-full object-cover" />

 
        <div class="absolute inset-0 mb-2 flex flex-col items-center justify-center text-white p-2">

            <div class="flex items-center">
                <div class="flex flex-col justify-between items-center w-[10%] h-5">
                    <span class="text-sm font-bold">
                        <span class="text-yellow-600"></span>${data.players[i].rating}</span>
                    <span class="text-S font-semibold">${data.players[i].position}</span>
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


            <div class="flex flex-col text-xs w-full px-2 h-16">
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
            </div>
        </div>'
  `
  document.getElementById('bank').insertAdjacentHTML("beforeEnd", jsonCartesHtml);
  }
})


///////////////////////////
// let form = document.getElementById('addForm');
// let showFromButton = document.getElementById('showFrom');
// let hideFromButton = document.getElementById('hideFrom');
// function 
