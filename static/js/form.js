teams =[
    {"country": "India", "players" :["Rohit Sharma", "Hardik Pandya", "Virat Kohli"], "flag":"/static/india"},
    {"country": "Pakistan", "players": ["Fakhar Zaman", "Azam Khan", "Shadab Khan"], "flag":"/static/Pakistan"},
    {"country": "England","players":["Phil Salt","Will Jacks", "Jos Buttler"],"flag":"/static/england"}
]

stadiums = ["Central Broward Park", "Kensington Oval", "Providence Stadium"]
Weather= ["sunny","rainy","dry", "humid"]
Pitch = ["green Pitch", "Flat track Pitch", "Dry Pitch", "Wet Pitch"]
Common = ["Team 1", "Team 2"]

    document.getElementById("team1").addEventListener("change",function(){
      var sel_team1 = document.getElementById("team1").value;
      var team1_players = document.getElementById("team1play");
      team1_players.innerHTML =""; 
      var playerslist=[];
      for(let t in teams) {
        if (sel_team1 == teams[t].country) {
          
          //create the span element 
          var span =document.createElement("span");
          span.textContent="Team 1 Players : ";
          
          team1_players.appendChild(span);
          team1_players.appendChild(document.createElement("br"));
          console.log("selected team", sel_team1);

          playerslist.push(teams[t].players)
          console.log("print playerslist",playerslist)
          playerslist[0].forEach(function (value) {
            
            //create check boxes based on the data
            console.log("print value in func", value)
            var checkbox =document.createElement("input");
            checkbox.type="checkbox";
            checkbox.name="team1players";
            checkbox.value=value;
            checkbox.id=value;

            console.log("print checkbox", checkbox);

            var label = document.createElement("label");
            label.htmlFor= value;
            label.appendChild(document.createTextNode(value));

            team1_players.appendChild(checkbox);
            team1_players.appendChild(label);
          });
        }
      }
    });

    document.getElementById("team2").addEventListener("change",function(){
      var sel_team2 = document.getElementById("team2").value;
      var team2_players = document.getElementById("team2play");
      team2_players.innerHTML =""; 
      var playerslist=[];
      for(let t in teams) {
        if (sel_team2 == teams[t].country) {
          
          //create the span element 
          var span =document.createElement("span");
          span.textContent="Team 2 Players : ";
          
          team2_players.appendChild(span);
          team2_players.appendChild(document.createElement("br"));
          console.log("selected team", sel_team2);
          playerslist.push(teams[t].players)
          console.log("print playerslist",playerslist)
          playerslist[0].forEach(function (value) {
            
            //create check boxes based on the data
            console.log("print value in func", value)
            var checkbox =document.createElement("input");
            checkbox.type="checkbox";
            checkbox.name="team1players";
            checkbox.value=value;
            checkbox.id=value;

            console.log("print checkbox", checkbox);

            var label = document.createElement("label");
            label.htmlFor= value;
            label.appendChild(document.createTextNode(value));

            team2_players.appendChild(checkbox);
            team2_players.appendChild(label);
          });
        }
      }
    });

  var tdropdown = document.getElementById("mwin");
    Common.forEach(function(value) {
    var option = document.createElement("option");
    option.text = value;
    option.value = value;
    tdropdown.add(option);
});

 var weatherdrop = document.getElementById("wcond");
    Weather.forEach(function(value) {
      var option = document.createElement("option");
      option.text = value;
      option.value = value;
      weatherdrop.add(option);
    });
  
  var tossdropdown = document.getElementById("tosswin");
  Common.forEach(function(value) {
    var option = document.createElement("option");
    option.text = value;
    option.value = value;
    tossdropdown.add(option);
});

  var stdrop =document.getElementById("stadium");
  stadiums.forEach(function(value) {
    var option= document.createElement("option");
    option.text=value;
    option.value=value;
    stdrop.add(option);
  });

  var pitchdrop =document.getElementById("pitch");
  Pitch.forEach(function(value) {
    var option= document.createElement("option");
    option.text=value;
    option.value=value;
    pitchdrop.add(option);
  });

  var team1drop =document.getElementById("team1");
  teams.forEach(function(value) {
    var option= document.createElement("option");
    option.text=value.country;
    option.value=value.country;
    team1drop.add(option);
  });

  var team2drop =document.getElementById("team2");
  teams.forEach(function(value) {
    var option= document.createElement("option");
    option.text=value.country;
    option.value=value.country;
    team2drop.add(option);
  });