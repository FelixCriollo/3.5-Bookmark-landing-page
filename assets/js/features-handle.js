import features from "./features.js";

export default function featureHandle (pos) {
  const $info = document.querySelector(".feature-container");
  const $infoBody = $info.children[1];

  $info.children[0].src = features[pos].img;
  $infoBody.children[0].innerHTML = features[pos].title;
  $infoBody.children[1].innerHTML = features[pos].body;
}