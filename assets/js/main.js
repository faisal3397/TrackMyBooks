

$(function(){
    $("#back").click(function(){
        $("#categories").show();
        $("#categoryResults").hide();
    })
    $.get(`https://www.themealdb.com/api/json/v1/1/categories.php`,function(res){
        var category = document.getElementById("categories");
        
        res.categories.forEach(el => {


        var colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col-md-4");
        var card = document.createElement("div");
        card.setAttribute("class", "card");
        var img = document.createElement("img");
        img.setAttribute("class", "card-img-top");
        img.setAttribute("src", `${el.strCategoryThumb}`);
        var cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body");
        cardBody.setAttribute("style","width: 18rem; position: relative;");
        var h5 = document.createElement("h5");
        var title = document.createTextNode(`${el.strCategory}`);
        h5.appendChild(title);
        var textDiv = document.createElement("div")
        textDiv.setAttribute("style","width: 100%; height: 100%; overflow:auto;")
        var p = document.createElement("p");
        var desc = document.createTextNode(`${el.strCategoryDescription}`);
        p.appendChild(desc);
        textDiv.appendChild(p);
        var btn = document.createElement("button");
        var btnTxt = document.createTextNode("Go To Category")
        btn.setAttribute("class","btn btn-primary")
        btn.setAttribute("id","categoryBtn")
        btn.appendChild(btnTxt)
        cardBody.appendChild(h5);
        cardBody.appendChild(textDiv);
        cardBody.appendChild(btn)
        card.appendChild(img);
        card.appendChild(cardBody)
        colDiv.appendChild(card);
        category.appendChild(colDiv)

        

        })

        $(".btn").click(function(){
            console.log("clicked");
            var catTitle = $(this).parent().find("h5").text();
            $.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catTitle}`,function(res){
                var selectedCategory = document.getElementById("selectedCategory");

                $("#selectedCategory").children().replaceWith(`

                `)
                console.log(res);
                res.meals.forEach(el => {
                    var colDiv = document.createElement("div");
                    colDiv.setAttribute("class", "col-md-4");
                    var card = document.createElement("div");
                    card.setAttribute("class", "card");
                    var img = document.createElement("img");
                    img.setAttribute("class", "card-img-top");
                    img.setAttribute("src", `${el.strMealThumb}`);
                    var cardBody = document.createElement("div");
                    cardBody.setAttribute("class","card-body");
                    cardBody.setAttribute("style","width: 18rem; position: relative;");
                    var h5 = document.createElement("h5");
                    var title = document.createTextNode(`${el.strMeal}`);
                    h5.appendChild(title);
                    cardBody.appendChild(h5);
                    card.appendChild(img);
                    card.appendChild(cardBody)
                    colDiv.appendChild(card);
                    selectedCategory.appendChild(colDiv)

                })
            })
         $("#categories").hide();
         $("#categoryResults").show();
        })

    })





    // $("#searchResults").removeAttr('id');
})

