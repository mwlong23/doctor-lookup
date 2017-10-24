import { apiKey } from './../.env';




export class DoctorSearch{
  search(searchTerm, category){
    return $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=${apiKey}`)
  }

  find(url){
    return $.get(url);
  }
}
