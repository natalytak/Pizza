// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var eatOrNot = $(this).data("eatornot");

    var eatOrNotState = {
      isDevoured: eatOrNot
    };

    // Send the PUT request.
    $.ajax("/api/pizzas/" + id, {
      type: "PUT",
      data: eatOrNotState
    }).then(
      function() {
        console.log("changed devoured to", eatOrNot);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newPizza = {
      pizza_name: $("#ca").val().trim(),
      isDevoured: 0
    };

    // Send the POST request.
    $.ajax("/api/pizzas", {
      type: "POST",
      data: newPizza
    }).then(
      function() {
        console.log("created new pizza");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-pizza").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/pizzas/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted pizza", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
