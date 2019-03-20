$(function(){

    $.get(`https://www.themealdb.com/api/json/v1/1/categories.php`,function(res){
        // let result = JSON.parse(res)
        console.log(res.categories);
        res.categories.forEach(el => {
            console.log(el);
            $("#categories").append(`
            <div class="col-md-4 ">
                <div class="card ">
                    <img class="card-img-top" src="${el.strCategoryThumb}" alt="Recipe Thumbnail">
                    <div class="card-body" style="width: 18rem;">
                        <h5 class="card-title">${el.strCategory}</h5>
                        <p class="card-text">${el.strCategoryDescription}</p>
                        <a href="#" class="btn btn-primary">Go To Category</a>
                    </div>
                </div>
            </div>
        `)
        })
    })



    // $("#searchResults").removeAttr('id');
})

function mainFunction(){
    console.log("It Works!!!");
    
    
}

function searchResult(){
   var input =  $("#search").val();
   console.log(input);


}