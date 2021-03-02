posterlist=["https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362",
"https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
"https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217",
"https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675",
"https://images-na.ssl-images-amazon.com/images/I/71nsvxFpSTL._AC_SY679_.jpg"]
titlelist=["Joker","After","Black Panther","Moonlight","The Nightingale","Dunkirk"];

function add(){
    var title=document.getElementById("title").value;
    var poster=document.getElementById("poster").value;
        titlelist.unshift(title);
        posterlist.unshift(poster);

    
    console.log(titlelist);
    console.log(posterlist);
    var first=posterlist[0];
    var second=posterlist[1];
    var third=posterlist[2];
    var fourth=posterlist[3];
    var fifth=posterlist[4];
    var sixth=posterlist[5];
    var first_title=titlelist[0];
    var second_title=titlelist[1];
    var third_title=titlelist[2];
    var fourth_title=titlelist[3];
    var fifth_title=titlelist[4];
    var sixth_title=titlelist[5];
    document.getElementById("first").src= first;
    document.getElementById("second").src= second;
    document.getElementById("third").src= third;
    document.getElementById("fourth").src= fourth;
    document.getElementById("fifth").src= fifth;
    document.getElementById("sixth").src= sixth;
    document.getElementById("first-name").innerHTML= first_title;
    document.getElementById("second-name").innerHTML= second_title;
    document.getElementById("third-name").innerHTML= third_title;
    document.getElementById("fourth-name").innerHTML= fourth_title;
    document.getElementById("fifth-name").innerHTML= fifth_title;
    document.getElementById("sixth-name").innerHTML= sixth_title;
}
