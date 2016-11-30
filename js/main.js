/*$(function() {/*$(function() {
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

$('#pais').on('click', function(e){
	// recupero el nombre del pais pulsado
	var pais_pulsado = $(this).find('span').html();
	console.log(pais_pulsado);
	// lo guardo en localStorage
	window.localStorage.setItem('flag-jaque', pais_pulsado);
});


var QueryString = (function () {
 // This function is anonymous, is executed immediately and 
 // the return value is assigned to QueryString!
 var query_string = {};
 var query = window.location.search.substring(1);
 var vars = query.split("&");
 for (var i=0;i<vars.length;i++) {
   var pair = vars[i].split("=");
       // If first entry with this name
   if (typeof query_string[pair[0]] === "undefined") {
     query_string[pair[0]] = decodeURIComponent(pair[1]);
       // If second entry with this name
   } else if (typeof query_string[pair[0]] === "string") {
     var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
     query_string[pair[0]] = arr;
       // If third or later entry with this name
   } else {
     query_string[pair[0]].push(decodeURIComponent(pair[1]));
   }
 } 
 return query_string;
})();

function obtenerCodigoBandera(){
	var codigo = QueryString.codigo;
	$('#prefijo').append(codigo);
	var img = '';
	//alert(QueryString.pais)
    if(QueryString.pais==='chile'){
        img = 'img/chile.jpg';
    }else if(QueryString.pais==='mexico'){
        img = 'img/mexico.png';
    }else if(QueryString.pais==='peru'){
        img = 'img/peru.png';
    
    }else{
        img = 'img/chile.jpg';
    }
    $('#flag-jaque').attr('src', img);
}

//variable con la lista de img de las banderas

		window.localStorage.setItem('pais', QueryString.pais);


    $('#nextt2').click(function() {
        if ($('#phone').val().length != 9 || isNaN($('#phone').val())) {
            $('#phone').css('border-color','#FF0000');
            alert('El número de teléfono debe tener al menos 9 números.');
            return false;
        }
        else {
            alert('El numero es correcto');
        }
    });



$(document).ready(function (){
          $('.solo-numero').keyup(function (){
            this.value = (this.value + '').replace(/[^0-9]/g, '');
            
          });
        });


window.localStorage.setItem('nombre_pais', QueryString.pais);



//para que no este vacio el campo nombre
$('#nextt').click(function(ev) {

  // Se verifica que el valor del campo este vacio
  if ($('#icon_prefix').val() === '') {
    alert('El nombre es obligatorio');
    ev.preventDefault();
  } else if ($('#email').val() === '') {
    alert('El correo es obligatorio');
    ev.preventDefault();
  } 
});


//para validar correo

$('.validar').change(function(ev) {
    // Expresion regular para validar el correo
    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

    // Se utiliza la funcion test() nativa de JavaScript


    if (!regex.test($('#email').val().trim())) {
        alert('La direccón de correo no es valida');
    }
});



$(".button-collapse").sideNav();





//$('pais-item a').on('click', function(ev){
	//var nombre_pais=$(this).find('span').html();

//window.localStorage.setItem('nombre_pais', nombre_pais);


//});

//$(".validate").change(function (ev) {  
   // if($("#icon_prefix").val().length < 1) {  
       // alert("El nombre es obligatorio");  
        //return false;  
    //}  
    //return false;  
//});  





