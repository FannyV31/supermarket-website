var categoryContainer = document.querySelector('#categories');

categories.addEventListener('click', function(e){
    console.log(e);
    var clickedItem = e.target;
    var category = clickedItem.getAttribute('data-category');
    console.log(category);
    var categoryItems = document.getElementsByClassname(category);

    // loop over each category item and add showing to the class list//
})
