define( function() {
    return {
        createImg: function(position, optionsString, src, altName){
            parents = document.querySelectorAll(position);
            parent = parents[parents.length- 1];
            parent.innerHTML += 
                `<img class="${optionsString}" src="${src}" alt=${altName}/>`
        }
    }
});