var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];



var $colorPersonalizado = $('#color-personalizado'),
    $paleta = $('#paleta'),
    $grillaDePixeles = $('#grilla-pixeles'),
    $mouseDown = false,
    $color = $('#indicador-de-color').css('background-color');

generarPaleta();
generarGrilla();

$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  colorActual = $colorPersonalizado.val();
  console.log(colorActual);
  $('#indicador-de-color').css('background-color', colorActual);

});

function generarPaleta(){
  $.each(nombreColores, function(index, value){
      var $nuevoDiv = $('<div>', {'class': 'color-paleta'}).css('background-color', value);
      $paleta.append($nuevoDiv);
  });
}

function generarGrilla(){
  for (var i = 0; i < 1750; i++) {
    var $pixel = $('<div>', {'class': 'pixel'});
    $grillaDePixeles.append($pixel);
  }
}

$paleta.click( function(event){
    var $colorPaleta = $(event.target).css('background-color');
    $('#indicador-de-color').css('background-color', $colorPaleta);
    $color = $('#indicador-de-color').css('background-color');
});

$('.pixel').click( function(event){
    $(event.target).css('background-color', $color);
  });

$('.pixel').mousedown( function(){
    $mouseDown = true;
    $(event.target).css('background-color', $color)
}).mouseup( function(){
    $mouseDown = false;
});

$('.pixel').mouseenter( function(event){
  if ($mouseDown) {
    $(event.target).css('background-color', $color)
  }
});

$('#borrar').click( function(){
  var $grilla = $('#grilla-pixeles div');
  $grilla.animate({'background-color':'White'}, 1000);
});

$('#batman').click( function() {
  cargarSuperheroe(batman);
});

$('#wonder').click( function() {
  cargarSuperheroe(wonder);
});

$('#flash').click( function() {
  cargarSuperheroe(flash);
});

$('#invisible').click( function() {
  cargarSuperheroe(invisible);
});

$('#guardar').click( function(){
  guardarPixelArt();
});