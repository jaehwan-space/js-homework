const nav = document.querySelector(".nav");
const img = document.querySelector(".visual img");
const name = document.querySelector(".nickName");

const audios = data.map((element) => {
  return new AudioPlayer(`./assets/audio/${element.name.toLowerCase()}.m4a`);
});

function setBgColor(colorA, colorB) {
  document.body.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;
}

function setImage(target, data) {
  target.src = `./assets/${data.name.toLowerCase()}.jpeg`;
  target.alt = data.alt;
}

function setNameText(target, data) {
  target.textContent = data.name;
}

function removeActives() {
  const liLists = document.querySelectorAll(".nav li");

  liLists.forEach((element) => {
    element.classList.remove("is-active");
  });
}

function stopAudios() {
  audios.forEach((element) => {
    element.stop();
  });
}

function handleClick(e) {
  const target = e.target.closest("li");

  if (!target) return;

  const index = target.dataset.index;
  const selectedData = data[index - 1];

  // 배경, 이미지, 텍스트 변경
  setBgColor(selectedData.color[0], selectedData.color[1]);
  setImage(img, selectedData);
  setNameText(name, selectedData);

  // 'is-acitve' 클래스 제거 및 추가
  removeActives();
  target.classList.add("is-active");

  // 오디오 제어
  stopAudios();
  audios[index - 1].play();
}

nav.addEventListener("click", handleClick);
