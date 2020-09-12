$(document).ready(function() {
  
  var page ='?page='+2;
  var settings = {
  "url": "https://reqres.in/api/colors"+page,
  "method": "GET",
  "timeout": 0,
  };
  
    $.ajax(settings).done(function (response) {
      console.log(response.data);
       colors = response.data;
       // console.log(colors[2].name)
       var p ="'#p";
       var c ="'";
       for (var i = 0; i < colors.length; i++) {
          $("#colors").append('<div data-toggle="modal" data-target="#copiado'+colors[i].id+'" onclick="copyColor('+p+colors[i].id+c+')" data-toggle="tooltip" title="click para copiar en portapapeles!" id="prueba" class="prueba card col-md-4" style="width: 18rem; background-color:'+colors[i].color+';"><div data-toggle="modal" data-target="#copiado'+colors[i].id+'" onclick="copyColor('+p+colors[i].id+c+')" class="year">'+colors[i].year+'</div><div data-toggle="modal" data-target="#copiado'+colors[i].id+'" class="card-body"><h5 class="card-title align-self-center text-center">'+colors[i].name+'</h5><center><p data-toggle="modal" data-target="#copiado'+colors[i].id+'" onclick="copyColor('+p+colors[i].id+c+')" id="p'+colors[i].id+'" class=" align-self-center text-center">'+colors[i].color+'</p></center></div><div data-toggle="modal" data-target="#copiado'+colors[i].id+'" class="pantone_value"> <p>'+colors[i].pantone_value+'</p></div></div>'+
            '<div class="modal fade" id="copiado'+colors[i].id+'" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><br><br><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-body"><label for="">'+colors[i].year+'</label><br><br><br><br><center><h1>COPIADO!</h1></center><br><br><br><br><label class="float-right">'+colors[i].pantone_value+'</label></div></div></div></div>'); 
       }
      });  

});

function copyColor(elemento) {
  var $temp = $("<input>")
  $("body").append($temp);
  $temp.val($(elemento).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

