 // DropzoneJS Demo Code Start
 if (Dropzone.instances.length > 0) Dropzone.instances.forEach(dz => dz.destroy());
 Dropzone.autoDiscover = false;


  var previewNode1 = document.querySelector("#template1")
  previewNode1.id = ""
  var previewTemplate1 = previewNode1.parentNode.innerHTML
  previewNode1.parentNode.removeChild(previewNode1)
 
  var myDropzone1 = new Dropzone(document.body, { // Make the whole body a dropzone
   url: "/target-url", // Set the url
   thumbnailWidth:350,
   thumbnailHeight: 200,
   previewTemplate: previewTemplate1,
   autoQueue: false, // Make sure the files aren't queued until manually added
   previewsContainer: "#previews", // Define the container to display the previews
   clickable: ".fileinput-button", // Define the element that should be used as click trigger to select files.
   acceptedFiles: 'image/*',
   maxFiles: 1,
 })
 
 Dropzone.autoDiscover = false


 document.querySelector("#actions .cancel").onclick = function() {
  myDropzone1.removeAllFiles(true);
  $('#previews').empty();
}

/*
 myDropzone.on("addedfile", function(file) {
   // Hookup the start button
   file.previewElement.querySelector(".start").onclick = function() { myDropzone.enqueueFile(file) }
 })*/
/*
 // Update the total progress bar
 myDropzone.on("totaluploadprogress", function(progress) {
   document.querySelector("#total-progress .progress-bar").style.width = progress + "%"
 })*/
/*
 myDropzone.on("sending", function(file) {
   // Show the total progress bar when upload starts
   document.querySelector("#total-progress").style.opacity = "1"
   // And disable the start button
   file.previewElement.querySelector(".start").setAttribute("disabled", "disabled")
 })
*//*
 // Hide the total progress bar when nothing's uploading anymore
 myDropzone.on("queuecomplete", function(progress) {
   document.querySelector("#total-progress").style.opacity = "0"
 })*/

 // Setup the buttons for all transfers
 // The "add files" button doesn't need to be setup because the config
 // `clickable` has already been specified.
 /*
 document.querySelector("#actions .start").onclick = function() {
   myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED))
 }
 document.querySelector("#actions .cancel").onclick = function() {
   myDropzone.removeAllFiles(true)
 }*/
 // DropzoneJS Demo Code End


