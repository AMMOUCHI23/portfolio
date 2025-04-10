
$(document).ready(function () {

    // Scroll vers le haut de la page
    $("#navG p").on("click", function(e) {
        e.preventDefault(); 
        $("html, body").animate({ scrollTop: 0 }, 800); 
    });
    var sections = $("section[id]");
    // Récupère tous les liens de la navigation dans l'aside
    var navLinks = $("nav aside ul li a");

    $(window).on("scroll", function() {
        var currentSection = "";
        var scrollPos = $(window).scrollTop();
        console.log("papa");
        // Parcours de chaque section pour déterminer laquelle est active
        sections.each(function() {
            var sectionTop = $(this).offset().top;
            // Ajuste la valeur 60 selon ton design (décalage pour déclencher le changement)
            if (scrollPos >= sectionTop -60) {
                currentSection = $(this).attr("id");
            }
        });

        // Met à jour les classes des liens en fonction de la section active
        navLinks.each(function() {
            $(this).removeClass("active");
        
            if (currentSection && $(this).attr("href").indexOf(currentSection) !== -1) {
                $(this).addClass("active");
            }
        });
        
    });


    //activer et désactiver le menu burger
    $(".burger").on("click", function () {  
        $("aside").toggleClass("active");
    });
    $("aside ul li a").on("click", function () {
        $("aside").removeClass("active");
    });

    //modal
    $(".project-item").on("click", function () {

        let title = $(this).attr("data-title");
        let description = $(this).attr("data-description");
        let technologies = $(this).attr("data-technologies");
        let missions = $(this).attr("data-missions").split(","); // Convertir en tableau
        let site = $(this).attr("data-site");
        let github = $(this).attr("data-github");

        // Mise à jour du contenu de la modale avec des sous-titres
        $("#modal-title").html(title);
        $("#modal-description").html(`<strong>Description :</strong> <br><br>${description}`);
        $("#modal-technologies").html(`<strong>Technologies utilisées :</strong> <br><br>${technologies}`);

        // Vider et remplir la liste des missions
        $("#modal-missions").empty().append("<strong>Missions réalisées :</strong><br><ul></ul>");
        missions.forEach(mission => {
            $("#modal-missions ul").append(`<li>${mission.trim()}</li>`);
        });

        $("#modal-site").attr("href", site);
        $("#modal-github").attr("href", github);

        // Affiche la modale
        $("#projectModal").fadeIn().css("display", "flex");
    });

    // Fermer la modale en cliquant sur la croix
    $(".close").on("click", function () {
        $("#projectModal").fadeOut();
    });

    // Quand on clique en dehors de la modale, elle se ferme
    $(document).on("click", function (event) {
        if ($(event.target).is(".modal")) {
            $(".modal").fadeOut();
        }
    });
    
});


