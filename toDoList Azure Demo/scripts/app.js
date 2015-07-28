(function (global) {
    var app = global.app = global.app || {};

    document.addEventListener("deviceready", function () {
        app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout" }); //, initial: "views/viewtodos.html"
    }, false);

    app.TO_DO_URL = "https://tplatform.azure-mobile.net/tables/ToDoList"; //LINK_TABLA_AZURE
    app.azureKey = "tEXZhTzumuywJOLMJCiDCVXBviDVfq51"; //AZURE_KEY
})(window);