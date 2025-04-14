$(document).ready(function() {
    $("#myForm").on("submit", function(e) {
        e.preventDefault();
        let valid = true;
         // Vérification nom
         let name = $("#name").val();
         let nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\- ]{2,}$/;
         if (name.length == 0) {
             $("#nameError").html("Le nom est requis");
             $('#name').addClass("error-border");
             valid = false;
       
         }  
         else if(!nameRegex.test(name)) {
             $("#nameError").html("Le nom n'est pas valide");
             $('#name').addClass("error-border");
             valid = false;
         } else {
             $("#nameError").hide();
             $('#name').removeClass("error-border");
         }

        // Vérification email
        let email = $("#email").val();
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.length == 0) {
            $("#emailError").html("L'email est requis");
            $("#email").addClass("error-border");
            valid = false;
        }
        else if (!emailRegex.test(email)) {
            $("#emailError").html("L'email n'est pas valide");
            $("#email").addClass("error-border");
            valid = false;
        } else {
            $("#emailError").hide();
            $("#email").removeClass("error-border");
        }
        // Vérification message
        let message = $("#message").val();
        let messageRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9.,;!?'"()\- \n\r]{5,}$/;
        if (message.length == 0) {
            $("#messageError").html("Le message est requis");
            $("#message").addClass("error-border");
            valid = false;
        } else if (!messageRegex.test(message)) {
            $("#messageError").html("Le message n'est pas valide");
            $("#message").addClass("error-border");
            valid = false;
        } else {
            $("#messageError").hide();
            $("#message").removeClass("error-border");
        }

        // Soumission si tout est valide
        if (valid) {
            this.submit();
            this.reset();
        }
    });

    
});// 