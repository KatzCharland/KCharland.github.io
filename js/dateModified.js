//alert (document.lastModified)
function updateClock() {
   // var now = new Date(), // current date
      //  months = ['January', 'February', '...']; // you get the idea
      //  time = now.getHours() + ':' + now.getMinutes()//, // again, you get the idea

        // a cleaner way than string concatenation
        date = [now.getDate(), 
               months[now.getMonth()],
                now.getFullYear()].join(' ');

    // set the content of the element with the ID time to the formatted string
     getElementById('currentDate').innerHTML = "Katz";//[date].join(' / ');

   
}
updateClock(); // initial cal//