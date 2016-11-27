/*$(function() {
  $('#colorselector').change(function(){
    $('.colors').hide();
    $('#' + $(this).val()).show();
  });
});

$('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'http://placehold.it/250x250'
    }
  });*/
/*var paises= window.localStorage.setItem('nom_pais', pais_pulsado);      
var pais_actual=window.localStorage.getItem('nom_pais');
var pais_obj=null;
for (var i =0; i=paises.length - 1; i++) {
	paises[i]
}
	if(paises[i].nom_pais==pais_actual){
		pais_obj=paises[i];
		
	}*/

$('#paises a').on('click', function(e){
	// recupero el nombre del pais pulsado
	var pais_pulsado = $(this).find('span').html();

	// lo guardo en localStorage
	window.localStorage.setItem('nombre_pais', pais_pulsado);
});





//$('pais-item a').on('click', function(ev){
	//var nombre_pais=$(this).find('span').html();

//window.localStorage.setItem('nombre_pais', nombre_pais);


//});















