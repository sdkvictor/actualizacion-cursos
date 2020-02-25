let numPreguntas = $(".form-group").length;

$("#evaluar").click( _ => {
    if($("input[type='radio']:checked").length === numPreguntas) {
        if($(".answer").hasClass("answer")) {
            $(".answer").removeClass("answer");
        }
    }
});
