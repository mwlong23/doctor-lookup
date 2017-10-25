import { DoctorSearch } from './../js/doctor-lookup.js';
let doctorSearch = new DoctorSearch();
let apiKey = '3cf0ffbb88fae132f82086fd2704ace2';

$(document).ready(function() {
  $('#search').submit(function(event){
    event.preventDefault();

    let category = $('#category').val();
    let searchCriteria = $('#search-criteria').val();
    // let responsePromise = doctorSearch.search(searchCriteria, category);
    let results = doctorSearch.search(searchCriteria, category);
    debugger;

    // $('search-criteria').val('');

  });
})

// $(document).ready(function () {
//   $('#search').submit(function (event) {
//     event.preventDefault();
//
//
//     $('.results').html("");
//     let searchTerm = $('#search-term').val();
//     let category = $('#category').val();
//     let responsePromise = starWars.search(searchTerm, category);
//     responsePromise.then(function(response) {
//       displayData(response);
//     })
//     .fail(function(error) {
//       $('.results').append(`<h3>There was an error: ${error.responseText} </h3>`);
//     });
//   });
// });

// let displayProperty = {
//
//
//
//
// }
//
// let displayData = function(response) {
//   let result = response.results[0];
//   Object.keys(result).forEach(function(key){
//     console.log(result[key]);
//     displayProperty(key, result[key]);
//   });
// }

// $.get(resource_url, function (data) {
//     // data: { meta: {<metadata>}, data: {<array[Practice]>} }
//     var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
//     document.getElementById('content-placeholder').innerHTML = template(data);
// });
