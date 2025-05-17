let allData = [];
async function getData (){
   let response  = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
   let finalData = await response.json();
   allData = finalData.meals;
   displayDta ()
   console.log(finalData.meals);
}
getData ();


function displayDta (){
    let carton = ``;
    for(var i = 0 ; i < allData.length ; i++){
        carton +=`  <div class="col-md-3">
                        <div class="inner position-relative text-white text-center">
                            <div class="display-4">
                                   <i class="fa-solid fa-house-chimney"></i>
                            </div>
                            <h2> ${allData[i].strArea}</h2>
                        </div>
                    </div>`
    }

    document.querySelector(".rowDta").innerHTML = carton ; 
}