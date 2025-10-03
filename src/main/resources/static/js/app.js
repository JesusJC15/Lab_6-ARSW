const AppController = (function () {
    
    let author = null;
    let blueprints = [];

    function setBlueprints(bps) {
        blueprints = bps.map(bp => ({
            name: bp.name,
            pointsCount: bp.points.length
        }));
    }

    function updateTable() {
        let tbody = $("#blueprintsTable tbody");
        tbody.empty();

        blueprints.forEach(bp => {
            let row = $("<tr></tr>");
            row.append(`<td>${bp.name}</td>`);
            row.append(`<td>${bp.pointsCount}</td>`);
            tbody.append(row);
        });

        let total = blueprints.reduce((sum, bp) => sum + bp.pointsCount, 0);
        $("#pointsSum").text(total);
    }
    
    return {
        
        setAuthor: function (newAuthor) {
            author = newAuthor;
        },

        getAuthor: function () {
            return author;
        },

        setBlueprints: function (bps) {
            setBlueprints(bps);
        },

        getBlueprints: function () {
            return [...blueprints]; 
        },

        getTotalPoints: function () {
            return blueprints.reduce((sum, bp) => sum + bp.pointsCount, 0);
        },

        updateBlueprintsFromAuthor: function (authname) {
            author = authname;
            $("#authorName").text(authname); 

            apimock.getBlueprintsByAuthor(authname, function (bps) {
                setBlueprints(bps); 
                updateTable();      
            });
        },

        reset: function () {
            author = null;
            blueprints = [];
        }
    };
})();
