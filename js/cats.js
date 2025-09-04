document.addEventListener("DOMContentLoaded", ()=>{
    fetch("data/cats.json")
        .then((res)=>res.json())
        .then((cats)=>{
            const container = document.getElementById("cat-list");
            cats.forEach((cat) => {
                const card=document.createElement("div");//하나의 고양이 카드가 될 새로운 div태그 생성
                card.className="cat-card";
                card.innerHTML = `
                <img src="${cat.img}" alt="${cat.name}"/> 
                <h3>${cat.name}</h3>
                <p>나이:${cat.age} / 성별: ${cat.gender}</p>
                <p>${cat.desc}</p>
                <a href="cat-detail.html?id=${cat.id}" class="detail-btn">자세히 보기</a>
                `;
                container.appendChild(card);//완성된 카드를 <section id="cat-list"> 안에 하나씩 붙여
            });
        })
        .catch((err)=>{
            console.log(err);
        });

});


/*
.then((cats) => { ... })
cats: cats.json 안에 들어 있던 고양이 목록 배열

e.g.
[
  { "name": "우동", "age": "2살", ... },
  { "name": "라엘", "age": "1살", ... }
  ...
]

(cat) => { ... }	반복될 때마다 하나씩 꺼낸 고양이 하나를 cat이라는 변수로 사용
✅ 실제 동작 흐름

cats.forEach((cat) => {
  console.log(cat);
});
이렇게 쓰면 두 번 반복되면서:

1번째 반복: cat = { id: 1, name: "코코", img: "img/cat1.jpg" }

2번째 반복: cat = { id: 2, name: "모카", img: "img/cat2.jpg" }
 */