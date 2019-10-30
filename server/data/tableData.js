/* eslint-disable require-jsdoc */
$( document ).ready(function() {
  console.log( 'ready!' );
});

$('.submit').on('click', function() {
  alert('working!');
  const reservation = {
    customerName: $('#name').val().trim(),
    phoneNumber: $('#phone').val().trim(),
    customerEmail: $('#email').val().trim(),
    customerID: $('#uniqueid').val().trim(),
  };
  console.log(reservation);
});

function checkFreeTables() {
  const tables = [];
  if (tables.length < 5) {
    reservation.push(tables);
  } else {
    const waitlist = [];
    reservation.push(waitlist);
  }
};
checkFreeTables();
