document.addEventListener("DOMContentLoaded", ()=>{
    const urlParams = new URLSearchParams(location.search);
    const id = parseInt(urlParams.get("id"));
    fetch("data/cats.json")
        .then((res)=>res.json())
        .then((cats)=>{
            const cat = cats.find((c)=>c.id===id);
            /* c.id(json데이터에 있는 고양이의 아이디)===id(쿼리스트링에 있는 id)
            find(): 배열 돌면서 c.id===id> true인 첫번째 항목 찾음
            true가 나온 그 고양이를 반환해 cat변수에 담음
            e.g. const cat = { id: 2, name: "라엘" };
            그럼 이제 cat.img, cat.name,cat.desc 이런식으로 사용 가능하겠지*/
            if(!cat) return;

            const container = document.getElementById("cat-detail");
            container.innerHTML=`
                <img src="${cat.img}" alt="${cat.name}"/>
                <h2>${cat.name}</h2>
                <p>나이: ${cat.age}</p>
                <p>성별: ${cat.gender}</p>
                <p>${cat.desc}</p>
                <p>${cat.detail}</p>
                <!-- ✅ 입양 신청 버튼 (이름을 쿼리로 넘김) -->
                <a href="adopt.html?cat=${encodeURIComponent(cat.name)}" class="detail-btn">입양 신청하기</a>
                <!--  name에 한글 들어갔을 때 꺠지는 경우 방지 위해 인코딩 사용  -->
                <!-- ✅ 목록으로 돌아가기 -->
                <a href="cats.html" class="detail-btn"><- 목록으로</a>
            `;
        }) //2번째 then
        .catch((err)=>console.log(err));
});

/*
new URLSearchParams(...)
    : ?id=2 같은 문자열을 파싱해서 JS객체처럼 꺼내쓸 수 있도록
* location.search : 현재 페이지의 쿼리 문자열만 추출("?id=2")
urlParams.get("id") >> "2" 값 가져옴
* */