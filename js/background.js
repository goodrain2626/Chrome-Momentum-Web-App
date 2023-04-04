const images = ['0.jpg','1.jpg', '2.jpg', '3.jpg', '4.jpg' ,'5.jpg'];

// const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImage);

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// // console.log(bgImage);

// document.body.appendChild(bgImage);

// Math.random() => 0과 1사이의 무작위 숫자가 나옴
// 인덱스 숫자로 쓰려면 0 이상의 숫자가 나와야함 Math.random() * 10 => 5.67890056789 그런데,소수점 뒤에 숫자들이 딸려옴
// 이를 해결할 방법은 2가지
// 1. round 해주기 <반올림하기> Math.round(1.7) => 2 Math.round(0.1) => 0
// 2. ceil 해주기 <반대로 올림하기> Math.ceil(1.1) => 2 Math.ceil(0.1) => 1
// 3. floor 해주기 <내림하기> Math.floor(1.999999999) => 1


document.body.style = `background-image: url("img/${Math.floor(
    Math.random() * images.length)}.jpg");`;
  