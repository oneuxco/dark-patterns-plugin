var $form = $('form#dp-form'),
    url = 'https://script.google.com/macros/s/AKfycbzBYyowmsmzZpueS_7lHdI0fJBgx0noiPC43PKAabBC3zlcGZ4/exec'

$('#send').on('click', function(e) {
    if($('#website').val() && $('#topic').val() && $('#description').val()) {
        e.preventDefault();
        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $form.serializeObject()
        }).done(
            $("#submit").hide(),
            $("#thanks").show()
        );
    }
})