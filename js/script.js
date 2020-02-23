$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })

  $('[data-toggle="closecanvas"]').on('click', function () {
    $('.offcanvas-collapse').removeClass('open')
  })
})
