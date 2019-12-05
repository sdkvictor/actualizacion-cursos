$('input[name="pregunta_1"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta !== "correct"){
        alert('Respuesta incorrecta');
    }
    else if (respuesta == "correct"){
        alert('¡Respuesta Correcta!');
    }
    event.preventDefault();
});


$('input[name="pregunta_2"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="number"]').val();
    if (respuesta !== "12"){
        alert('Respuesta incorrecta');
    }
    if (respuesta == "12"){
        alert('¡Respuesta correcta! Después de esta edad sigue la adolescencia.');
    }
    event.preventDefault();
});


$('input[name="pregunta_3"][type="button"]').on('click', function(event){
    let correctas = $('input[name="respuesta"][type="checkbox"][value="correct2"]').toArray().length;
    let res_cor = $('input[name="respuesta"][type="checkbox"][value="correct2"]:checked').toArray().length;
    let res_incor = $('input[name="respuesta"][type="checkbox"][value="incorrect2"]:checked').toArray().length;
    if(res_incor > 0){
        alert('Alguna respuesta es incorrecta');
    }else if(res_cor !== correctas && res_cor > 0){
        alert('Existen más opciones correctas');
    }
    else if (res_cor == correctas){
        alert('¡Correcto! Son voluntad, esfuerzo, orden, sinceridad, diálogo y tolerancia.');
    }
    event.preventDefault();
});