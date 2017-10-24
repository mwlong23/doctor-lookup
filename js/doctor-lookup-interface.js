// import { DoctorSearch } from './../js/doctor-lookup.js'
const doctorSearch = new DoctorSearch();


export class DoctorSearch{
  search(searchTerm, category){
    return $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=${apiKey}`)
  }

  find(url){
    return $.get(url);
  }
}


$(document).ready(function(){
  $('#search').submit(function(e){
    e.preventDefault();
    let category = $('#category').val();
    let searchCriteria = $('#search-criteria').val();

  })
})




















// $.get(resource_url, function (data) {
//     // data: { meta: {<metadata>}, data: {<array[Practice]>} }
//     var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
//     document.getElementById('content-placeholder').innerHTML = template(data);
// });
