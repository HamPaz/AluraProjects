var listaFilmes = [
  "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/90/69/66/20108900.jpg",
  "https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/11/news-article-images-star-wars-goh-splash.jpg.adapt.crop16x9.1023w.jpg",
  "https://br.web.img2.acsta.net/pictures/15/07/13/21/47/517191.jpg",
  "https://br.web.img2.acsta.net/c_310_420/pictures/14/10/10/20/36/282573.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/90/80/87/20114463.jpg",
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/00/25/20240355.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
