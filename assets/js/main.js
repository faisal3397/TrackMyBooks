$(function(){
    mainFunction();
})

function mainFunction(){
    console.log("It Works!!!");
    
    $.get("http://openlibrary.org/search.json?q=the+lord+of+the+rings",function(res){
        console.log(res.docs);
        
    })
}