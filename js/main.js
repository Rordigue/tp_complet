$( document ).ready(function() {
    
        $.getJSON("data.json", function(result){
            const data = JSON.parse(JSON.stringify(result))
            console.log(result)
          $.each(data, function(i, data){
            console.log(data.length)
            for (let count = 0; count < data.length; count ++){
              // afficher tout les articles
              $("#articles_container").append("<div class=card> <img src=" + data[count].img +" class=card-img-top alt=Image de " + data[count].name + "><div class=card-body><h5 class=card-title>" + data[count].name +"</h5> <p class=card-text> Prix à l'unité : " + data[count].prix + "€"+ "<br/>" + "Quantité disponible : " + data[count].quantity + " <a href=#>Ajouter l'article au panier</a></div")              
              // afficher les articles en promo
              if (data[count].promo === true){
                $("#articles-promo").append("<div class=card> <img src=" + data[count].img +" class=card-img-top alt=Image de " + data[count].name + "> <div class=card-body><h5 class=card-title>" + data[count].name +"</h5> <p class=card-text> Prix à l'unité : " + data[count].prix + "€"+ "<br/>" + "Quantité disponible : " + data[count].quantity + "</p> <a href=#>Ajouter l'article au panier</a></div")
              }
            }
            $("#articles_container a").addClass("btn btn-primary")
            $("#articles_promo a").addClass("btn btn-primary")
          });
        });
});