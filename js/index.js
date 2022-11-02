console.log("Your index.js file is loaded correctly!");

$(".logo").on("hover", function(){
    $('.logo').toggle();
    $("").toggle();
});

$("img", "#gifs-rows").click(function() {
    $('.preset-file').toggle();
    $('.gif-file').toggle();
  });