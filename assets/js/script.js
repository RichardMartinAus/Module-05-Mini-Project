$( "form" ).submit(function( event ) {
    event.preventDefault();
    var projectName = $("#project-name").val();
    var projectType = $("#project-type").val();
    var hourlyWage = $("#hourly-wage").val();
    var dueDate = $("#due-date").val();
    
    addItemToTable(projectName, projectType, hourlyWage, dueDate);
  });

  function addItemToTable(x, y, z, a){
    
  }