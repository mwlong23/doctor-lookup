import { DoctorSearch } from './../js/doctor-lookup.js'
const doctorSearch = new DoctorSearch();


$(document).ready(function(){
  $('#search').submit(function(){
    let category = $('#category').val();
    let searchCriteria = $('#search-criteria').val();

  })
})




















// $.get(resource_url, function (data) {
//     // data: { meta: {<metadata>}, data: {<array[Practice]>} }
//     var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
//     document.getElementById('content-placeholder').innerHTML = template(data);
// });
