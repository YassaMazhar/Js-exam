
let allData = [];
async function getData (){
   let response  = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
   let finalData = await response.json();
   allData = finalData.meals;
   displayDta ()
   console.log(finalData.meals);
}
getData ();


function displayDta (){
    let carton = ``;
    for(var i = 0 ; i < allData.length ; i++){
        carton +=` <div class="col-md-3">
                        <div class="inner position-relative">
                            <img src="${allData[i].strMealThumb}" class="w-100" alt="">
                            <div class="title position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center">
                                <h2 class="fw-bold">${allData[i].strMeal}</h2>
                            </div>
                        </div>
                    </div>`
    }

    document.querySelector(".rowDta").innerHTML = carton ; 
}