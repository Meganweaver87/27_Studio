window.addEventListener("load", function(){
    fetch ("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json){
            
            let astronautContainer = document.getElementById("container");
            
            // Bonus 1 - done. Needed to be coded BEFORE the HTML so the items could be sorted before being written on the web page
            json.sort(function(b, a){
                //let astronautHours = json[i].hoursInSpace;
                return Number(b.hoursInSpace) - Number(a.hoursInSpace);
            });

            for (let i = 0; i < json.length; i++){
                astronautContainer.innerHTML +=`
                <div class = "astronaut">
                    <div class = "bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li class = "active">Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                    <img class = "avatar" src = ${json[i].picture}>
                </div>
                `;
            };
            

            // Bonus 2 - done
            let activeAstronaut = document.getElementsByClassName("active");
            console.log(json);
            console.log(activeAstronaut);
            for (let i = 0; i < activeAstronaut.length; i++){
                if (json[i].active === true){
                    //console.log(json[i].firstName);
                    activeAstronaut[i].style.color = "green";
                } // close if
            }; // close for

            // Bonus 3 - done
            let footer = document.createElement("footer");
            footer.innerText = `Astronaut Count: ${json.length}`;
            document.body.appendChild(footer);

        }); // close response
    }); // close fetch
}); // close window