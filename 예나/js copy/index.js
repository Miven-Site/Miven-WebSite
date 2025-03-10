const block = document.getElementById("video")

function onVideoEnd() {
    console.log("영상 끝남")
  }
  
  video.addEventListener("ended",onVideoEnd)
  $(window).on("load",function(){
	
    //윈도우 로드 시 비디오 플레이
    $("#video").get(0).play();
	
    //작동하는지 콘솔창에서 확인
    console.log("test");
})
    
setInterval(function(){
   if($("#video").prop("ended")){
    
    //영상종료 후 어떤행동을 할건지 작성
    location.href="/html/index/index.php";
   
   }
},200);