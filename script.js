const hour = $('.hour');
const minute = $('.minutes');
const second = $('.seconds');
const date = $('.date');
const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

const setValue = value => {
  return value.toString().length === 1 
    ? '0' + value
    : value.toString();
}

const setTime = () => {
  const current = new Date();

  date.html(current.toLocaleDateString('pl', dateOptions));
  hour.html(setValue(current.getHours()));
  minute.html(setValue(current.getMinutes()));
  second.html(setValue(current.getSeconds()));
};

setTime();
setInterval(setTime, 1000);

$(window).on('load', function() {
    $('.container').fadeIn('slow');
});

$(document).ready(function() {
    const correctPassword = '1234'; 
    $('#show-data-button').click(function() {
        $('#password-modal').show();
    });

    $('.close').click(function() {
        $('#password-modal').hide();
    });

    $('#submit-password').click(function() {
        const enteredPassword = $('#password-input').val();
        if (enteredPassword === correctPassword) {
            $('#blurred-data').removeClass('blurred');
            $('#password-modal').hide();
            $('#show-data-button').fadeOut('slow');
        } else {
            alert('Niepoprawne hasło. Spróbuj ponownie.');
        }
    });

    $(window).click(function(event) {
        if (event.target.id === 'password-modal') {
            $('#password-modal').hide();
        }
    });
});
