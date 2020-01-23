$(function () {
    $(".addburger").on("submit", function (event) {
        //event.preventDefault();
        //alert("clicked");

        var newBurgerObj = {
            burger_name: $("#newburger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurgerObj
        }).then(function () {
            alert("new burger added " + burger_name);
            location.reload();
        })
    });

    $(".changestatusbutton").on("click", function (event) {
        var id = $(this).data("id");
        //alert(id);
        var willBeDevoured = {
            devoured: true
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: willBeDevoured
        }).then(function () {
            console.log("moved " + id)
            location.reload();
        });
    })
})