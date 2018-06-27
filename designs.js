// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

$('#sizePicker').submit(function(event) {
    event.preventDefault();
    $('tr').remove();
    var r = $('#inputHeight').val();
    var c = $('#inputWeight').val();
        
    for (var i = 1; i <= r; i++) {
    $('table').append('<tr></tr>');
    for (var j = 1; j <= c; j++) {
        $('tr:last').append('<td></td>');
        $('td').addClass('cells');
        }
    }
    
    $('.cells').click(function (evt) {
        var colour = $('#colorPicker').val();
        $(evt.target).css('background-color', colour);  
    });  
});    
}
makeGrid();