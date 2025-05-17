
let allData = [];
async function getData (){
   let response  = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
   let finalData = await response.json();
   allData = finalData.categories;
   displayDta ()

}
getData ();



function displayDta (){
    let carton = ``;
    for(var i = 0 ; i < allData.length ; i++){
        carton +=`     <div class="col-md-3">
                            <div class="inner position-relative text-white text-center">
                                <div class="display-2 pb-2">
                                        <i class="fa-solid fa-drumstick-bite"></i>
                                </div>
                                <h2> ${allData[i].strCategory}</h2>
                                </p>${allData[i].strCategoryDescription.split(" ").slice(0 , 15).join(" ")}</p>
                            </div>
                        </div>`
    }

    document.querySelector(".rowDta").innerHTML = carton ; 
}