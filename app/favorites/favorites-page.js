const FavoritesViewModel = require("./favorites-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new FavoritesViewModel();
}



exports.onNavigatingTo = onNavigatingTo;
