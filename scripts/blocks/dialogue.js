define(["dialogue_body", "header", "messages"], function () {
    //load every part of dialogues in sequence
    //Подгрузка идет в последовательности
    
    //Make sure you have css for this block
    //Удостоверься, что есть css для загрузки блока
    
    /*              !!!!!
    Make sure you go to
    scripts/components/profilePage/dialogue/dialogue_body.js
    to set up where this block will be
    
    Удостоверься, что поставил свое название главное блока в js
    scripts/components/profilePage/dialogue/dialogue_body.js

    /*
        How it looks in html when loaded
         <!-- все диалоги -->
                <div class="profile__dialogues profile__dialogues_disp_flex profile__dialogues_size profile__dialogues_margin profile__body_background_white_border">
                    <!-- header -->
                    <div class="profile__dialogues-header profile__dialogues-header_disp_flex">
                        <span class="profile__dialogues-header-name profile__dialogues-header-name_position">Сообщения</span>
                    </div>
                    
                    <!-- Сами сообщения -->
                    <div class="profile__dialogues-messages profile__dialogues-messages_disp_flex">
                        <!-- Пример -->
                        <div class="profile__dialogues-friend profile__dialogues-friend_size profile__dialogues-friend_disp_grid profile__dialogues-friend_line_before profile__dialogues-friend-margin">
                            <div class="profile__dialogues-friend-photo profile__dialogues-friend-photo_size profile__dialogues-friend-photo_position">
                                <img class="profile__dialogues-friend-photo-img profile__dialogues-friend-photo-img_size" src="img/avatars/NoAvatar.png" alt="img" />
                            </div>
                            <div class="profile__dialogues-friend-information profile__dialogues-friend-information_disp_grid profile__dialogues-friend-information_size">
                                <div class="profile__dialogues-friend-header profile__dialogues-friend-header_disp_flex">
                                    <span class="profile__dialogues-friend-who">Злотова Марина</span>
                                    <span class="profile__dialogues-friend-last-time">10:00</span>
                                </div>
                                <span class="profile__dialogues-friend-message">Привет! Как твои дела? Давно не видел тебя! Слушай, я кушать хочу, есть молочко для хлопушек? А то выйти в последнее время не получается(99(</span>
                            </div>
                        </div>
                    </div>
                </div>
    */
});
