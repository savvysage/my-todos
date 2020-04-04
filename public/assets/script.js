$(document).ready(function() {
    $('form#todo').submit(function() {
        var todo = $('#todoInput').val();

        $.ajax({
            type: 'POST',
            url: '/',
            data: {todo: todo},
            success: function(data, status) {
                location.reload();
            }
        });
    });

    $('#todoList li').click(function() {
        var todoKey = $(this).attr('data-key');

        $.ajax({
            type: 'DELETE',
            url: '/',
            data: {todoKey: todoKey},
            success: function(data, status) {
                location.reload();
            }
        });
    });
});