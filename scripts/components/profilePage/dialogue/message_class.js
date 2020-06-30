define(['createBlock', 'createImg', 'createSpan'], function (block, img, span) {
    let message = {
        //Render message from one user
        renderBody: function (nameMessagesBlock, imgSrc, nameOfPerson, lastTimeOnline, lastMessage) {
            messages = document.querySelector(nameMessagesBlock);
            block.createBlock(".profile__dialogues-messages", "profile__dialogues-friend profile__dialogues-friend_size profile__dialogues-friend_disp_grid profile__dialogues-friend_line_before profile__dialogues-friend-margin");
            
            block.createBlock(".profile__dialogues-friend", "profile__dialogues-friend-photo profile__dialogues-friend-photo_size profile__dialogues-friend-photo_position");
            
            //photo of person
            img.createImg(".profile__dialogues-friend-photo", "profile__dialogues-friend-photo-img profile__dialogues-friend-photo-img_size", imgSrc, "img");

            block.createBlock(".profile__dialogues-friend", "profile__dialogues-friend-information profile__dialogues-friend-information_disp_grid profile__dialogues-friend-information_size");

            block.createBlock(".profile__dialogues-friend-information", "profile__dialogues-friend-header profile__dialogues-friend-header_disp_flex");

            span.createSpan(".profile__dialogues-friend-header", "profile__dialogues-friend-who", nameOfPerson);
            //when this person was online
            span.createSpan(".profile__dialogues-friend-header", "profile__dialogues-friend-last-time", lastTimeOnline);

            //text of last message
            span.createSpan(".profile__dialogues-friend-information", "profile__dialogues-friend-message", lastMessage);
        }
    };

    return message;
});
