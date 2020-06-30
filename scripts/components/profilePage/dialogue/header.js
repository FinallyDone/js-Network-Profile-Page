define(['createBlock', 'createSpan'], function (block,span) {
    //Creating header
    block.createBlock(".profile__dialogues","profile__dialogues-header profile__dialogues-header_disp_flex");
    
    span.createSpan(".profile__dialogues-header","profile__dialogues-header-name profile__dialogues-header-name_position","Сообщения");
});
