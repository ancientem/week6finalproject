$('#originalSubmit').on('click', '#username', '#comment', function(){
    $(this).append(`<div>${$('#username[type=text]') + $('#comment[type=text]')}</div>`)
})

$('#commentContainers').append(`

`)