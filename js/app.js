// const search = new Filter('search', 'data-caption');

baguetteBox.run('.gallery');


function searchBar() {
    let input = document.getElementById('search').value
    input = input.toLowerCase();
    let images = document.querySelectorAll('a');
      
    for (i = 0; i < images.length; i++) { 
        if (!images[i].getAttribute('data-caption').toLowerCase().includes(input)) {
            images[i].style.display="none";
        }
        else {
            images[i].style.display="list-item";                 
        }
    }
}