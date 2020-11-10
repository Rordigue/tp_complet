$( document ).ready(function() {
        // Fetch URL 
        $.get("http://localhost:3000/products", function(results){
          console.log(results)
          $.each(results, function(i, result){
              console.log(result.name)
              // afficher tout les articles page accueil
              $("#articles_container").append("<div class=card> <img src=" + result.img +" class=card-img-top alt=Image de " + result.name + "><div class=card-body><h5 class=card-title>" + result.name +"</h5> <p class=card-text> Prix à l'unité : " + result.prix + "€"+ "<br/>" + "Quantité disponible : " + result.quantity + " <a href=#>Ajouter l'article au panier</a></div")              
              // afficher les articles en promo page accueil
              if (result.promo === true){
                $("#articles-promo").append("<div class=card> <img src=" + result.img +" class=card-img-top alt=Image de " + result.name + "> <div class=card-body><h5 class=card-title>" + result.name +"</h5> <p class=card-text> Prix à l'unité : " + result.prix + "€"+ "<br/>" + "Quantité disponible : " + result.quantity + "</p> <a href=#>Ajouter l'article au panier</a></div")
              }
              $("#articles_container a").addClass("btn btn-primary")
              $("#articles_promo a").addClass("btn btn-primary")

              // afficher tout les articles page management
              $("#body_table").append("<tr><td>" + result.id + "</td><td>" + result.name + "</td><td>" +result.prix + "</td><td>" +result.quantity + "</td><td><button type=button class=btn-danger>Supprimer</button> <button type=button class=btn-warning>Modifier</button></td></tr>")
              $("#body_table button").addClass("btn")
            });
        });


        // AJOUTER UN PRODUIT
        let form = $('form');

        $("#message_confirmation").hide();
        $("#message_error").hide();

        form.on("submit", function(e){
            e.preventDefault();
            let product = {
              id : $("#id_article").val(),
              name : $("#name_articles").val(),
              prix : $("#unit_price").val(),
              quantity : $("#quantity").val(),
              img : $("#img_article").val(),
              categorie : $("#category").val(),
              livraison : $("#check_livraison").is(":checked"),
              promo : $("#check_promo").is(":checked"),
            }

            let isValid = true;
            $.each(product, function(k,v){
              if(v === ''){
                alert(k + " est vide");
                isValid = false;
              }
              console.log(v)
            })

            if(isValid){
              $.ajax({
                type:"POST",
                url : "http://127.0.0.1:5500/front/manage.html",
                data : JSON.stringify(product),
                dataType : "json"
              })
              form.get(0).reset();
              $("#message-confirmation").show()
              $("#message-error").hide()
            } else {
              $("#message-confirmation").hide()
              $("#message-error").show()
            }
        })
});