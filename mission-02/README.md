# Poster UI

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" alt="HTML5"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" alt="Javascript">

- 과제일: 2024년 6월 30일
- 과제 내용: Poster UI 제작
- 과제 웹페이지에서 확인하기 : [<u>바로가기</u>](https://jaehwan-space.github.io/js-homework/mission-02/index.html)

---

썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직을 작성해주세요.

## 요구사항

1. 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.
   1. 이벤트 위임
   2. 반복문
2. 이미지와 색상의 데이터는 `data.js` 에서 불러와주세요.
3. 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.

   1. 배경색 변경 ( colorB의 기본값은 `#000` 으로 한다 )

   ```jsx
   elem.style.background = `linear-gradient(to bottom, 'colorA','colorB')`;
   ```

   b. 이미지 변경

   ```jsx
   target.src = `./assets/${data.name}.jpeg`;
   target.alt = data.alt;
   ```

4. 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.

   ```jsx
   target.textContent = data.name;
   ```

5. 함수를 분리시켜주세요.
   1. `setBgColor` 함수
   2. `setImage` 함수
   3. `setNameText` 함수
6. 가독성이 좋은 코드로 리팩토링 해주세요.
