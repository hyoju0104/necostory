// jQuery
$(document).ready(function () {
    const params=new URLSearchParams(location.search);
    const catName=params.get("cat");
    if(catName){
        //쿼리스트링이 있다면(cat-detail.html에서 넘어왔다면)
        // 자동으로 catName에 해당 고양이 이름 넣고 readonly로 전환!
        $("#catName").val(decodeURIComponent(catName)); //이름 한글 대비해 디코딩
        $("#catName").attr("readonly", true);
    }else{
        //쿼리스트링 없으면 사용자가 직접 입력해야지
        $("#catName").attr("placeholder","입양할 고양이 이름을 입력하세요");
    }
    $("#address").on("click", function(){
        new daum.Postcode({
            oncomplete: function(data){
                $("#address").val(data.address)
            }
        }).open(); //open() : 실제 팝업 뜸
    }); //#address 클릭이벤트

    // 유효성 검사 부분!!
    $("form").on("submit", function(e){
        const userName = $("#userName").val().trim();
        const email = $("#email").val().trim();
        const phone = $("#phone").val().trim();
        const address = $("#address").val().trim();
        const message = $("#message").val().trim();
        const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if(userName === ""){
            alert("이름을 입력해주세요.");
            $("#userName").focus();
            e.preventDefault();
            return;
        }

        if(email === ""){
            alert("이메일을 입력해주세요.");
            $("#email").focus();
            e.preventDefault();
            return;
        }
        if(!emailReg.test(email)){
            alert("올바른 이메일 형식을 입력해주세요.");
            $("#email").focus();
            e.preventDefault();
            return;
        }

        if(phone === ""){
            alert("연락처를 입력해주세요.");
            $("#phone").focus();
            e.preventDefault();
            return;
        }

        if(address === ""){
            alert("주소를 입력해주세요.");
            $("#address").focus();
            e.preventDefault();
            return;
        }

        if(message.length < 10){ 
            alert("입양 동기를 10자 이상 입력해주세요.");
            $("#message").focus();
            e.preventDefault();
            return;
        }
    })//submit 이벤트
}); //document.ready


/*
 daum.PostCode() : 카카오에서 제공하는 주소검색 창 띄우는 함수

 팝업창 뜨고 사용자가 주소 선택하면 > oncomplete가 실행되는데,
사용자가 방금 선택한 주소에 대한 정보가 담긴 '객체'가 'data' 매개변수로 들어감
 data: {
  address: "서울 강남구 테헤란로 123",
  roadAddress: "서울 강남구 테헤란로 123",
  jibunAddress: "서울 강남구 역삼동 123-45",
  zonecode: "06236", // 우편번호
  ...기타 등등
} >>  우리는 이 중에서 도로명 주소인 data.address 만 꺼내쓸 것
이제 data.address를 input의 value로 넣어주면,
결과적으로 사용자가 팝업창에서 선택한 주소가 input에 자동으로 채워짐
 */