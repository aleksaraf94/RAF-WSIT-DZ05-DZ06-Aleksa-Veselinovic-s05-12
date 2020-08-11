var raspored = document.getElementById("raspored");

var unos = document.getElementById("unos");

var podaci;

unos.addEventListener("input",(event)=>{
    var vrednost = event.target.value;

    raspored.innerHTML = "";

    /*
    "assdd".includes("ssd") => true
    "aaaaa".includes("aas") => false
    */

    for(var i=0;i<podaci.length;i++){

        var ok = false;
        for(var j=0;j<podaci[i].length;j++){
            if(podaci[i][j].includes(vrednost)){
                ok=true;
            }
        }

        if(!ok){
            continue;
        }

        var tr = document.createElement("tr");

        for(var j=0;j<podaci[i].length;j++){
            var td = document.createElement("td");
            td.innerHTML=podaci[i][j];
            tr.appendChild(td);
        }
        raspored.appendChild(tr);

    }
});
/*
function(){

}
() => {

}
*/
var ucionica = document.getElementsByClassName("ucionica");
for(var i=0;i<ucionica.length;i++){
    ucionica[i].addEventListener("click",function(e){
        raspored.innerHTML = "";
        var ime = e.target.innerHTML;

        for(var i=0;i<podaci.length;i++){

            if(podaci[i][6]==ime){

                var tr = document.createElement("tr");

                for(var j=0;j<podaci[i].length;j++){
                    var td = document.createElement("td");
                    td.innerHTML=podaci[i][j];
                    tr.appendChild(td);
                }

                raspored.appendChild(tr);
            }
        }

    });
}

var predavac = document.getElementsByClassName("predavac");
for(var i=0;i<predavac.length;i++){
    predavac[i].addEventListener("click",(e)=>{
        raspored.innerHTML = "";
        var ime = e.target.innerHTML;

        for(var i=0;i<podaci.length;i++){

            if(podaci[i][2]==ime){

                var tr = document.createElement("tr");

                for(var j=0;j<podaci[i].length;j++){
                    var td = document.createElement("td");
                    td.innerHTML=podaci[i][j];
                    tr.appendChild(td);
                }

                raspored.appendChild(tr);
            }
        }
    });
}

$.ajax({
    url: "podaci",
    data: $("form"),
    type: "POST",
    success: (response) => {
       podaci = response["raspored"];
       for(var i=0;i<podaci.length;i++){

       var tr = document.createElement("tr");

            for(var j=0;j<podaci[i].length;j++){

            var td = document.createElement("td");

               td.innerHTML = podaci[i][j];
               tr.appendChild(td);

            }

       raspored.appendChild(tr);

       }


    },
    error: (error) => {
        console.log(error);
    }
});