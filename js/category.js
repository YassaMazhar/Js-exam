
let allData = [];
async function getData (){
   let response  = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
   let finalData = await response.json();
   allData = finalData.categories;
   displayDta ()
   console.log(allData);
}
getData ();



function displayDta (){
    let carton = ``;
    for(var i = 0 ; i < allData.length ; i++){
        carton +=`   <div class="col-md-3">
                        <div class="inner position-relative">
                            <img src="${allData[i].strCategoryThumb}" class="w-100" alt="">
                            <div class="title position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center text-center flex-column">
                                <h2 class="fw-bold">${allData[i].strCategory}</h2>
                                <p class="text-muted">${allData[i].strCategoryDescription.split(" ").slice(0 , 15).join(" ")}</p>
                            </div>
                        </div>
                    </div>`
    }

    document.querySelector(".rowDta").innerHTML = carton ; 
}