//
$('#toRight').click(function () { //右移
    $('#right>select').append($('#left>select>option:selected'));
});
$('#toRight').click(function () { //左移
    $('#left>select').append($('#left>select>option:selected'));
});
$('#toAllRight').click(function () { //全部右移
    $('#right>select').append($('#left>select>option'));
});
$('#toAllLeft').click(function () { //全部左移
    $('#left>select').append($('#right>select>option'));
});