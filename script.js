document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Get the count from the cookie
  let count = getCookie('count');

  // Initialize or increment the count
  if (count === null) {
    count = 1;
  } else {
    count = parseInt(count) + 1;
  }

  // Update the cookie
  setCookie('count', count, 7); // expires in 7 days

  // Display the count in the #countDisplay div
  const countDisplay = document.getElementById('countDisplay');
  countDisplay.textContent = `You have visited this page ${count} time(s).`;
});