$( "form" ).submit(function( event ) {
    event.preventDefault();
    var projectName = $("#project-name").val();
    console.log(projectName);
  });