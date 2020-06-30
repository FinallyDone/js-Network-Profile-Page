define( function() {
    return {
        createBlock: function(position, optionsString){
            parents = document.querySelectorAll(position);
            parent = parents[parents.length- 1];
            parent.innerHTML += 
                ` <div class="${optionsString}">\n</div>`
        }
    }
});