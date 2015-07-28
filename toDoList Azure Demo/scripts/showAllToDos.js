(function (global) {
    var app = global.app = global.app || {};

    var todoModel = {
        id: "id",
        fields: {
            todoItem: {
                type: "string",
                validation: {
                    required: true
                }
            },
            todoEntered: {
                type: "string",
                defaultValue: new Date()
            },
            isComplete: {
                type: "boolean",
                defaultValue: false,
                nullable: false
            },
            importance: {
                type: "string",
                defaultValue: "Medium",
                nullable: false,
                validation: {
                    pattern: "(?:Urgent|Medium|Low)"
                }
            }
        }
    };

    //Definir el DataSource
    var azureToDoDS = new kendo.data.DataSource({
        offlineStorage: "todoItems-offline",
        schema: {
            model: todoModel
        },
        transport: {
            read: {
                url: app.TO_DO_URL,
                dataType: "json",
                headers: {
                    "X-ZUMO-APPLICATION": app.azureKey
                }
            }
        }
    });

    //Funcion para traer los datos sin conexion(offline)
    var saveViewforOffline = function (e) {
        if (e.sender.element[0].innerText === "Offline") {
            //La aplicacion esta cambiando al modo sin conexion
            app.azureDataService.azureToDoDS.online(false);
            e.sender.element[0].innerText = "Online";
        } else {
            //La aplicacion esta cambiando al modo con conexion 
            app.azureDataService.azureToDoDS.online(true);
            e.sender.element[0].innerText = "Offline";
        }
    }

    app.azureDataService = {
        azureToDoDS: azureToDoDS,
        saveViewforOffline: saveViewforOffline
    }

})(window);