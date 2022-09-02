$(document).ready(function () {
  function ride() {
    const positionStartleft = $("i.fa-motorcycle").offset().left;
    const positionStarttop = $("i.fa-motorcycle").offset().top;
    $("i.fa-motorcycle").addClass("start");
    $("i.fa-motorcycle").animate(
      {
        fontSize: "3rem",
      },
      500,
      "linear"
    );

    $("i.fa-motorcycle").animate(
      {
        left: $("div.workdiv").width(),
      },
      2000,
      "linear",
      function () {
        $("i.fa-motorcycle")
          .css("transform", "rotate(270deg)")
          .animate(
            {
              fontSize: "5rem",
            },
            500,
            "linear"
          )

          .animate(
            {
              top: $("p:first").offset().top,
            },
            500,
            "linear",
            function () {
              $("i.fa-motorcycle")
                .css("transform", "rotateY(180deg)")
                .animate(
                  {
                    left: $("p:first").offset().left + $("p:first").width() / 2,
                  },
                  2000,
                  "linear",
                  function () {
                    $("p:first").text("前端工程師");
                    $("img.jeremy").attr("src", "./images/lift.png");
                    $("i.fa-motorcycle").css("transform", "rotate(360deg)");
                    $("i.fa-motorcycle").offset({
                      left: positionStartleft,
                      top: positionStarttop,
                    });
                    $("i.fa-motorcycle").animate(
                      {
                        fontSize: "1rem",
                      },
                      500,
                      "linear",
                      function () {
                        setTimeout(function reset() {
                          $("img.jeremy").attr("src", "./images/jeremy.jpg");
                          $("p:first").text("待業中");
                        }, 2000);
                        ride();
                      }
                    );
                  }
                );
            }
          );
      }
    );
  }
  ride();
});
