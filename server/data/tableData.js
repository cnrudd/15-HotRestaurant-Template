$( document ).ready(function() {
  console.log( "ready!" );
});

$(".submit").on("click", function () {
  alert('working!');
  var reservation = {
    customerName: $('#name').val().trim(),
    phoneNumber: $('#phone').val().trim(),
    customerEmail: $('#email').val().trim(),
    customerID: $('#uniqueid').val().trim()
  };
  console.log(reservation);
});

function checkFreeTables() {
  var tables = [];
  if (tables.length < 5) {
    reservation.push(tables)
  }
  else {
    var waitlist = [];
    reservation.push(waitlist);
  }
};
checkFreeTables();
