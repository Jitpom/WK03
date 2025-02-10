$(document).ready(function(){
    $("#menu-icon").click(function(event){
        event.stopPropagation();
        $("#canvas nav").addClass("active");        
    })

    // Hide dropdown when clicking anywhere else on the screen
    $(document).on("click", function(event){
        if ($("#canvas nav").hasClass("active")){
            $("#canvas nav").removeClass("active");
        }
      });
});