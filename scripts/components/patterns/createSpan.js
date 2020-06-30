define( function() {
    return {
        createSpan: function(position, optionsString, insideSpan){
            parents = document.querySelectorAll(position);
            parent = parents[parents.length- 1];
            parent.innerHTML += 
                ` <span class="${optionsString}">${insideSpan}</span>`
        }
    }
});