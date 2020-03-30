function Painting(artists, title, year) {
  this.artists = artists
  this.title = title
  this.year = year
}
const americanGothic = new Painting("American Gothic", ["Grant Wood"], 1930);
const theLastSupper = new Painting("The Last Supper", ["Leonardo Da Vinci"], 1495);
const americasMostWanted = new Painting("America's Most Wanted", ["Vitaly Komar", "Alexander Melamid"], 1993);

function Gallery() {
  this.paintings = []
}

const ga1 = new Gallery();
Gallery.prototype.addPainting = function (painting) {
  this.paintings.push(painting)
}


Gallery.prototype.findByTitle = function (title) {
  const searchResults = []
  for (let painting of this.paintings) {
    if (painting.title.toLowerCase().includes(title.toLowerCase())) {
      searchResults.push(painting)
    }
  }
  return searchResults;
}

Gallery.prototype.list = function () {
  return this.paintings
}