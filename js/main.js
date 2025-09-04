const api_key ="live_Zqvi2XIgmPDKdemSpjpl9O6X3YXSwGP2d5e7qRiMSVE2Yr0nGgwyAKtm6iB4hRNZ";
const url =  "https://api.thecatapi.com/v1/images/search";
//오늘의 냥냥이 사진 가져오기
function loadRandomCat(){
    fetch(url,{
        headers:{
            "x-api-key": api_key
        }
    })
        .then(response => response.json()) //응답을 json(JS객체)로 변환
        .then(data=>{ //data:json 객체
            const catUrl = data[0].url; //응답 데이터 중 첫 번째 고양이의 이미지 주소를 꺼내서 catUrl이라는 변수에 저장
            //id="random-cat" 인 부분을 JS에서 찾아
            const catDiv = document.getElementById("random-cat");
            catDiv.innerHTML = `<img src="${catUrl}" alt="랜덤 고양이"/>`;
        })
        .catch(error => {
            console.error("고양이 불러오기 실패 😿", error);
        });
}

// 또 보기 버튼 클릭 시
document.addEventListener("DOMContentLoaded", () => {
    //DOMContentLoaded:  브라우저가 HTML 구조(DOM)를 다 읽고 나면 실행
    //                   즉 HTML요소들이 모두 만들어진 후 JS 실행
    loadRandomCat();
    const btn=document.getElementById("refresh-cat");
    btn.addEventListener("click", loadRandomCat);
    //loadRandomCat() 이렇게 괄호 붙이면 안되는 이유: 지금 바로 실행하라는 뜻이므로..
});


/*
TheCatAPI의 데이터 (json):
[
  {
    "id": "abc123",
    "url": "https://cdn2.thecatapi.com/images/abc123.jpg"
  }
]
배열 형태
*/

/* ✅ 입양 후기 슬라이더 실행 */
$(document).ready(function(){ //html이 준비된 후 안의 코드 실행
    $(".slider-container").slick({ //Slick 슬라이더 실행, {}안은 슬라이더의 설정 옵션
        infinite: true, //슬라이더 끝까지 가면 다시 처음으로 돌아가서 반복
        slidesToShow: 3, // 한 화면에 보여줄 슬라이드 개수 2장
        slidesToScroll: 1, //한 번 넘길 때 이동할 슬라이드 수 1장
        autoplay: true, //자동으로 슬라이드 넘어감
        autoplaySpeed: 3000, //3초마다 넘어가게
        arrows: true, //좌우 화살표 <- -> 보이게 하기
        dots: true, //아래에 슬라이드 위치 표시하는 점 네비게이션 보이게
        responsive:[ //반응형 웹 설정
            {
                breakpoint: 768,  // 화면 너비가 768px 이하일 떄는
                settings: {
                    slidesToShow: 2, //한 화면에 보이질 슬라이드 수 2장으로 해
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }); // slick

    //구글 지도 함수 호출
    initMap();
}); // document.ready

function initMap(){
    const location={lat: 37.499490, lng: 127.035938};

    //지도 옵션 설정
    const mapOptions={
        center:location,
        zoom:15,
        mapTypeControl:false, //지도 유형 컨트롤 숨기기
        streetViewControl:false, //스트릿뷰 컨트롤 숨기기
        fullscreenControl:true, //전체 화면 컨트롤 표시
        zoomControl:true, //확대/축소 컨트롤 표시
        styles:[
            {
                "featureType":"poi", //관심 지점(Point Of Interest)
                "elementType":"labels", // poi의 라벨 부분
                "stylers": [{"visibility":"off"}]
            }
        ]
    };
    // 지도 생성 - div id="map"에 mapOption 옵션을 가진 지도 표시
    const map=new google.maps.Map(document.getElementById("map"),mapOptions);
    //마커 생성
    const marker=new google.maps.Marker({
        position:location,
        map:map, //마커를 표시할 지도
        title:'네코스토리', // 마커에 마우스 올렸을 때 표시될 텍스트
        animation:google.maps.Animation.DROP
    });
    //마커 클릭 시 표시될 인포윈도우 HTML
    const infoContent=`
        <div style="padding: 10px; max-width: 200px; text-align: center;">
            <h3 style="color: #e06666; margin: 0 0 5px 0;">네코스토리</h3>
            <p style="margin: 0;">고양이들의 새로운 시작점</p>
            <p style="margin: 5px 0 0;">연락처: 02-1234-5678</p>
        </div>
    `;
    //인포윈도우 객체 생성
    const infoWindow=new google.maps.InfoWindow({
        content: infoContent,
    });
    //마커 클릭 시 인포윈도우 표시되게 event Listener 등록
    marker.addListener('click',function(){
        infoWindow.open(map,marker);
    });
    //페이지 로드 시 인포윈도우 자동으로 열기
    infoWindow.open(map,marker);
    //리사이징 시 지도 중심 유지
    window.addEventListener('resize',function(){
        const center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    })
}