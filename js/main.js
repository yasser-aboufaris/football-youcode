
fetch("./players.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.players[0].name); 
  })
  

  let showAddFrom = document.getElementById("")