function cli(){
    $("li").click(function(e) {
      e.preventDefault();
      $("li").removeClass("active");
      $(this).addClass("active");
    });
};

