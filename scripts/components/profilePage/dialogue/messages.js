define( function (require) { 
    //creating block for messages
    var block = require("createBlock");
    block.createBlock(".profile__dialogues", "profile__dialogues-messages profile__dialogues-messages_disp_flex");
    
    //loading all messages in this block
    var message = require("message_class");
    //Put here all information of person 
        //Can be used with loading information from server
    message.renderBody(".profile__dialogues", "img/avatars/NoAvatar.png", "Злотова Марина", "10:00", "Привет! Как твои дела? Давно не видел тебя! Слушай, я кушать хочу, есть молочко для хлопушек? А то выйти в последнее время не получается(99(");
    
    message.renderBody(".profile__dialogues", "img/avatars/ava2.png", "Почемучкин Андрей", "14:05", "Давно не виделись, может погуляем?");
    
    message.renderBody(".profile__dialogues", "img/avatars/ava5.png", "Подвижный попег", "11:32", "Чирик чирик! Как ты?");
    
    message.renderBody(".profile__dialogues", "img/avatars/ava4.png", "МастерНаВсе руки", "13:22", "Записала тебя на наготочки, завтра или послезавтра тебе удобнее всего?");
    
    message.renderBody(".profile__dialogues", "img/avatars/ava6.png", "Твой Папа", "04:00", "Почему не спим???");
});  