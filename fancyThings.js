

$('#originalSubmit').on('click', function(event){
    event.preventDefault()
    $('#commentContainer').append(`
    <div id="appendedComment">
      <div class="imgStyling">        
       <img src="profileicon.png">
      </div>
      <div id="commentSectionOverall">
        <div id="commentSection1" >
          <div class="commentStyling" id="usernameCommented">${$('#username').val()}</div>
          
          <div class="commentStyling" class="h2" style="font-size:25px;font-weight:400">${$('#comment').val()}</div>
        </div>
        <div id="commentsection2">
          <div class="commentEditing" class="edits" id="edit" style="color:#519499">Edit</div>
          <hr>
          <div class="commentEditing" class="edits" id="delete" style="color:#519499">Delete</div>
        </div>
      </div>
    </div>
    
    `);
    
});

$('#commentContainer').on('click', '#delete', function(){
    $(this).parent().parent().parent().remove();
});

$('#commentContainer').on('click', '#edit', function(){
    let alteringComment = $(this).parent().prev().children()[1];
    console.log(alteringComment);
    $(alteringComment).html(`
    <div id="newCommentStyling">
      <input  type="text" id="comment2" value="${$($(this).parent().prev().children()[1]).text()}" class="commentStyling" class="h2">
      <input  type="submit" value="submit" id="newSubmit">
    </div>
    `);
})

$('#commentContainer').on('click', '#newSubmit', function(){
    let newComment = $(this).prev().val()
    console.log(newComment)
    let commentInsert = $(this).parent().parent()
    $(commentInsert).text(newComment)
    console.log(commentInsert)
   $(this).parent().parent().remove();
   $(this).parent().children()[0].remove();
    
});
//$('#commentContainers').append(`

//`)