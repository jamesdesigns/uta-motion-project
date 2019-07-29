const HomeItemsViewModel = require("./home-items-view-model");


function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new HomeItemsViewModel();
}

function onItemTap(args) {
    const view = args.view;
    const page = view.page;
    const tappedItem = view.bindingContext;

    // New
    // const listView = page.getViewById('list_view');
    // if (tappedItem.favorite) {
    //     tappedItem.favorite = false;
    // } else {
    //     tappedItem.favorite = true;
    // }
    // localStorage[tappedItem.name] = tappedItem.favorite;
    // listView.refresh();
    // End of New

    page.frame.navigate({
        moduleName: "home/home-item-detail/home-item-detail-page",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}

function favorites(args) {
    const button = args.object;
    button.text = `   `;
    // button.text = `   `;

    // This is only a Test
    var favoritesArray = [];
    console.log("Hello World!"); 
    console.log(args);
    // New
    const view = args.view;
    const page = view.page;
    const tappedItem = view.bindingContext;
    // End of New

    if (button.tappedItem) {
        button.bindingContext = false;
    }
     else {
        button.bindingContext = true;
    }

    // This is only a Test
    // favoritesArray.push("Test 1","Test 2","Test 3");
    console.log(favoritesArray);

    // NEW - This takes the Favorites Icon to the Favorites Page
    page.frame.navigate({
        moduleName: "favorites/favorites-page",
        context: tappedItem
    });
    // End of New

  

    
}

exports.favorites = favorites;
exports.onItemTap = onItemTap;
exports.onNavigatingTo = onNavigatingTo;

