// Check off Specific Todos by clicking

$("li").click(function() {
  //   // If Li is gray
  //   if ($(this).css("color") === "rgb(128, 128, 128)") {
  //     // Turn it black
  //     $(this).css({
  //       color: "black",
  //       textDecoration: "none"
  //     });
  //   }
  //   // else
  //   else {
  //     // turn it gray
  //     $(this).css({
  //       color: "gray",
  //       textDecoration: "line-through"
  //     });
  //   }
  $(this).toggleClass("completed");
});

// Click on X to delete todo
$("span").click(function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });

  event.stopPropagation();
});
