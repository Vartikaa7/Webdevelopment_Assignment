let span= document.querySelectorAll(".segment-control span");
for (let i=0; i<span.length;i++){
    span[i].addEventListener("click",()=>{
        for (let j=0; j<span.length; j++){
            if (i==j){
                span[j].classList.add("clickbtn");
            }else{
                span[j].classList.remove("clickbtn");
            }
        }
        let h4= document.querySelector(".section3 .data .text .t .span1 h4");
        let logos= document.querySelectorAll(".section3 .data .text .span2 .logos .logo");
        let logo= logos[2];
        if (span[i].classList.contains("approve")){
            h4.textContent="Build no-code approves";
            logo.classList.add("hidden");
        }
        else{
            h4.textContent="Build no-code workflows";
            logo.classList.remove("hidden");
        }
    });
};
