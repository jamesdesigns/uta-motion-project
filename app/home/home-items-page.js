const HomeItemsViewModel = require("./home-items-view-model");
const localStorage = require("nativescript-localstorage");

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
    // This is only a Test
    console.log("This is a Test");
    // console.log(args);

    // Place Entries Into an Array
    let favoritesArray = [];
    newTest = { name: 'Add To Favorites'} // Must add the data from tapping the Heart Icon here
    favoritesArray.push(newTest);
    console.log(favoritesArray.length);

    // Store Them
    favoritesString = JSON.stringify(favoritesArray)
    localStorage.setItem('Favorites', favoritesString)

    // Retrieve Them
    retrievedFavoritesString = localStorage.getItem('Favorites')
    arrayThatICanUse = JSON.parse(retrievedFavoritesString)

    console.log(favoritesArray)
    // newItem1 = {name: 'Salt Lake Central'};
    // favoritesArray.push(newItem1);

    // localStorage.setItem('Another Test', 'This is a another test' );
    // console.log("Keys stored", localStorage.length);

    // // Store Them
    // favoritesString = JSON.stringify(favoritesArray);
    // localStorage.setItem('Favorites', favoritesString);

    // //Retrieve Them
    // retrievedFavoriteString = localStorage.getItem('Favorites');
    // arrayThatICanUse = JSON.parse(retrievedFavoriteString);
    // console.log(favoritesArray);
    // console.log(retrievedFavoriteString);
    // console.log(arrayThatICanUse);
    // New
    // const view = args.view;
    // const page = view.page;
    // const tappedItem = view.bindingContext;
    // End of New

    // if (button.tappedItem) {
    //     button.bindingContext = false;
    // }
    //  else {
    //     button.bindingContext = true;
    // };

    // NEW - This takes the Favorites Icon to the Favorites Page
    // page.frame.navigate({
    //     moduleName: "favorites/favorites-page",
    //     context: tappedItem
    // });
    // End of New    
}

exports.favorites = favorites;
exports.onItemTap = onItemTap;
exports.onNavigatingTo = onNavigatingTo;

