 

 //datatables
 $(function () {
  $("#example1").DataTable({
    "responsive": true, "lengthChange": false, "autoWidth": false,
    language: {
      url: 'http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json'
    },
    "buttons": ["copy", "csv", "excel", "pdf", "print"],
    
    
  }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');

});

$(function () {
  $("#example2").DataTable({
    "responsive": true, "lengthChange": false, "autoWidth": false,
    language: {
      url: 'http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json'
    },
    "buttons": ["copy", "csv", "excel", "pdf", "print"],
    
  }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');

});