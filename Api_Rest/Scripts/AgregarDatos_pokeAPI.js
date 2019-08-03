function pedirDatos(url,funcionSizas,funcionNonas){
  $(function(){
    peticion(url)
    .then(function(data){
      funcionSizas(data);
    })
    .catch(function(err){
      funcionNonas(err);
    })
  });
}

function peticion(url, param){
  return new Promise(function(resolve, reject){
    $.ajax({
      type: "get",
      url: url,
      data: param,
      dataType: "json",
    })
    .done(function(data){
      console.log('Datos llegaron bien 😃');
      resolve(data);
    })
    .fail(function (){
      reject("Datos no llegaron 🤮");
    })
    .always(function(){
      //console.log('funcionAlways')
    });
  });
}