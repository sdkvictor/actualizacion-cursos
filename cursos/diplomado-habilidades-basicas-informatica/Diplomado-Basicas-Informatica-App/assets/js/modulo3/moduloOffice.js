$(document).ready(() => {
  $('#word-button').on('click', () => {
    $('#word-button').addClass('selected')
    $('#powerpoint-button').removeClass('selected')
    $('#excel-button').removeClass('selected')

    $('#word-section').removeClass('hidden')
    $('#powerpoint-section').addClass('hidden')
    $('#excel-section').addClass('hidden')
  })

  $('#powerpoint-button').on('click', () => {
    $('#powerpoint-button').addClass('selected')
    $('#word-button').removeClass('selected')
    $('#excel-button').removeClass('selected')

    $('#powerpoint-section').removeClass('hidden')
    $('#word-section').addClass('hidden')
    $('#excel-section').addClass('hidden')
  })

  $('#excel-button').on('click', () => {
    $('#excel-button').addClass('selected')
    $('#word-button').removeClass('selected')
    $('#powerpoint-button').removeClass('selected')

    $('#excel-section').removeClass('hidden')
    $('#word-section').addClass('hidden')
    $('#powerpoint-section').addClass('hidden')
  })

  $('#abrir-app-1').on('click', () => {
    $('#abrir-app-1').addClass('selected')
    $('#abrir-app-2').removeClass('selected')

    $('#abrir-app-1-section').removeClass('hidden')
    $('#abrir-app-2-section').addClass('hidden')
  })

  $('#abrir-app-2').on('click', () => {
    $('#abrir-app-2').addClass('selected')
    $('#abrir-app-1').removeClass('selected')

    $('#abrir-app-2-section').removeClass('hidden')
    $('#abrir-app-1-section').addClass('hidden')
  })

  $('#cerrar-app-1').on('click', () => {
    $('#cerrar-app-1').addClass('selected')
    $('#cerrar-app-2').removeClass('selected')
    $('#cerrar-app-3').removeClass('selected')

    $('#cerrar-app-1-section').removeClass('hidden')
    $('#cerrar-app-2-section').addClass('hidden')
    $('#cerrar-app-3-section').addClass('hidden')
  })

  $('#cerrar-app-2').on('click', () => {
    $('#cerrar-app-2').addClass('selected')
    $('#cerrar-app-1').removeClass('selected')
    $('#cerrar-app-3').removeClass('selected')

    $('#cerrar-app-2-section').removeClass('hidden')
    $('#cerrar-app-1-section').addClass('hidden')
    $('#cerrar-app-3-section').addClass('hidden')
  })

  $('#cerrar-app-3').on('click', () => {
    $('#cerrar-app-3').addClass('selected')
    $('#cerrar-app-1').removeClass('selected')
    $('#cerrar-app-2').removeClass('selected')

    $('#cerrar-app-3-section').removeClass('hidden')
    $('#cerrar-app-1-section').addClass('hidden')
    $('#cerrar-app-2-section').addClass('hidden')
  })

  $('#office-2007').on('click', () => {
    $('#office-2007').addClass('selected')
    $('#office-2010').removeClass('selected')

    $('#office-2007-section').removeClass('hidden')
    $('#office-2010-section').addClass('hidden')
  })
  
  $('#office-2010').on('click', () => {
    $('#office-2010').addClass('selected')
    $('#office-2007').removeClass('selected')

    $('#office-2010-section').removeClass('hidden')
    $('#office-2007-section').addClass('hidden')
  })

  $('#of2007-1').on('click', () => {
    $('#of2007-1').addClass('selected')
    $('#of2007-2').removeClass('selected')
    $('#of2007-3').removeClass('selected')
    $('#of2007-4').removeClass('selected')

    $('#of2007-1-section').removeClass('hidden')
    $('#of2007-2-section').addClass('hidden')
    $('#of2007-3-section').addClass('hidden')
    $('#of2007-4-section').addClass('hidden')
  })

  $('#of2007-2').on('click', () => {
    $('#of2007-2').addClass('selected')
    $('#of2007-1').removeClass('selected')
    $('#of2007-3').removeClass('selected')
    $('#of2007-4').removeClass('selected')

    $('#of2007-2-section').removeClass('hidden')
    $('#of2007-1-section').addClass('hidden')
    $('#of2007-3-section').addClass('hidden')
    $('#of2007-4-section').addClass('hidden')
  })

  $('#of2007-3').on('click', () => {
    $('#of2007-3').addClass('selected')
    $('#of2007-1').removeClass('selected')
    $('#of2007-2').removeClass('selected')
    $('#of2007-4').removeClass('selected')

    $('#of2007-3-section').removeClass('hidden')
    $('#of2007-1-section').addClass('hidden')
    $('#of2007-2-section').addClass('hidden')
    $('#of2007-4-section').addClass('hidden')
  })

  $('#of2007-4').on('click', () => {
    $('#of2007-4').addClass('selected')
    $('#of2007-1').removeClass('selected')
    $('#of2007-2').removeClass('selected')
    $('#of2007-3').removeClass('selected')

    $('#of2007-4-section').removeClass('hidden')
    $('#of2007-1-section').addClass('hidden')
    $('#of2007-2-section').addClass('hidden')
    $('#of2007-3-section').addClass('hidden')
  })

  $('#of2010-1').on('click', () => {
    $('#of2010-1').addClass('selected')
    $('#of2010-2').removeClass('selected')
    $('#of2010-3').removeClass('selected')
    $('#of2010-4').removeClass('selected')

    $('#of2010-1-section').removeClass('hidden')
    $('#of2010-2-section').addClass('hidden')
    $('#of2010-3-section').addClass('hidden')
    $('#of2010-4-section').addClass('hidden')
  })

  $('#of2010-2').on('click', () => {
    $('#of2010-2').addClass('selected')
    $('#of2010-1').removeClass('selected')
    $('#of2010-3').removeClass('selected')
    $('#of2010-4').removeClass('selected')

    $('#of2010-2-section').removeClass('hidden')
    $('#of2010-1-section').addClass('hidden')
    $('#of2010-3-section').addClass('hidden')
    $('#of2010-4-section').addClass('hidden')
  })

  $('#of2010-3').on('click', () => {
    $('#of2010-3').addClass('selected')
    $('#of2010-1').removeClass('selected')
    $('#of2010-2').removeClass('selected')
    $('#of2010-4').removeClass('selected')

    $('#of2010-3-section').removeClass('hidden')
    $('#of2010-1-section').addClass('hidden')
    $('#of2010-2-section').addClass('hidden')
    $('#of2010-4-section').addClass('hidden')
  })

  $('#of2010-4').on('click', () => {
    $('#of2010-4').addClass('selected')
    $('#of2010-1').removeClass('selected')
    $('#of2010-2').removeClass('selected')
    $('#of2010-3').removeClass('selected')

    $('#of2010-4-section').removeClass('hidden')
    $('#of2010-1-section').addClass('hidden')
    $('#of2010-2-section').addClass('hidden')
    $('#of2010-3-section').addClass('hidden')
  })
})