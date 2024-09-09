function crearCondicionales() {
    resetearFormulario();
  
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Opciones');
    var data = sheet.getDataRange().getValues();
    var form = FormApp.openById('YOUR_FORM_ID');
  
    var categorias = [];
    var productosPorCategorias = {};
  
    for (var i = 1; i < data.length; i++) {
      var categoria = data[i][0];
      var producto = data[i][1];
      if (categorias.indexOf(categoria) === -1) {
        paises.push(categoria);
        productosPorCategorias[categoria] = [];
      }
      productosPorCategorias[categoria].push(producto);
    }
  
    var preguntaCategoria = form.addMultipleChoiceItem().setTitle('Categoria');
    var opcionesCategoria = [];
  
    paises.forEach(function(categoria) {
      var section = form.addPageBreakItem().setTitle(categoria);
      var preguntaCiudad = form.addMultipleChoiceItem().setTitle('Ciudades de ' + pais);
      preguntaProducto.setChoices(productosPorCategoria[categoria].map(producto => preguntaCiudad.createChoice(ciudad)));
      section.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  
      opcionesCategoria.push(preguntaCategoria.createChoice(categoria, section));
    });
  
    preguntaPais.setChoices(opcionesCategoria);
  }