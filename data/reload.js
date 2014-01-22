self.on("click", function (node, data) {    
    if (window !== top){
        var frame_name = window.name;
        window.parent[frame_name].location.reload();
    }
});