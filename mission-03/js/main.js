async function fetchPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000'); // Fetching a large number of Pokemon
    const data = await response.json();
    const totalPokemon = data.results.length;

    // 랜덤한 9개의 수
    const randomIndices = [];
    while (randomIndices.length < 9) {
      const randomIndex = Math.floor(Math.random() * totalPokemon);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    // 9개의 데이터 가져오기
    for (let index of randomIndices) {
      const pokemonUrl = data.results[index].url;
      const pokemonResponse = await fetch(pokemonUrl);
      const pokemonData = await pokemonResponse.json();
      addSlide(pokemonData.sprites.front_default, pokemonData.name);
    }

    // swiper 스크립트
    var swiper = new Swiper(".pocketmon-swiper", {
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 500,
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
  }
}

// 슬라이드 추가 함수
function addSlide(imageUrl, name) {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `<img src="${imageUrl}" alt="${name}" />`;
  swiperWrapper.appendChild(slide);
}

fetchPokemon();
// -----------------

const bgmPlayer = new AudioPlayer(`./assets/battle_wild.mp3`);
const bgm = document.querySelector('.bgm');

function handleClickBGM(){

  if(!bgmPlayer.isPlaying()){
    bgmPlayer.play();
    bgm.querySelector('img').src = './assets/sound-on.svg';
    bgm.querySelector('img').alt = '재생 중';
  }else{
    bgmPlayer.pause();
    bgm.querySelector('img').src = './assets/sound-off.svg';
    bgm.querySelector('img').alt = '음소거';
  }

}

bgm.addEventListener('click', handleClickBGM)
