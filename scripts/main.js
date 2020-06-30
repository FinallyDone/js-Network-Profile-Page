//Settings of RequireJS
requirejs.config({
    baseUrl: '',
    paths: {
        //Using all lib. here
        jquery: [ `//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js`,
            //If can't load from website then load from this location
            `scripts/require`
        ],
        //patterns
        createBlock:
            `scripts/components/patterns/createBlock`,
        createImg:
            `scripts/components/patterns/createImg`,
        createSpan:
            `scripts/components/patterns/createSpan`,
        //All blocks and their components
            //dialogue block
        dialogue_body: 
            `scripts/components/profilePage/dialogue/dialogue_body`,
        header: 
            `scripts/components/profilePage/dialogue/header`,
        messages: 
            `scripts/components/profilePage/dialogue/messages`,
        message_class: 
            `scripts/components/profilePage/dialogue/message_class`
    }
});

requirejs(["scripts/blocks/dialogue"]);
