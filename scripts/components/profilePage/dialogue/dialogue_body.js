define(['createBlock'], function (block) {
    //Write your own style of Main block where should dialogues be
    //Dialogue will be placed in the end of all block of this block
    
    //Поменять стиль блока, куда поместить блок диалога
    let whereShouldBeDialogue = ".profile__photo-stuff-dialogues"
    
    block.createBlock(whereShouldBeDialogue,"profile__dialogues profile__dialogues_disp_flex profile__dialogues_size profile__dialogues_margin profile__body_background_white_border");
});
