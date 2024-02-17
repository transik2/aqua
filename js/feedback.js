let feedbacks = document.querySelectorAll(".feedback-item");
let togglers = document.querySelectorAll(".feedback-togglers button");

for(let i=0; i<togglers.length; i++) {
    togglers[i].onclick = function() {
        document.querySelector(".feedback-item.current").classList.remove("current");
        document.querySelector(".feedback-item.prev").classList.remove("prev");
        document.querySelector(".feedback-item.next").classList.remove("next");
        feedbacks[i].classList.add("current");
        if(i == 0) {
            feedbacks[feedbacks.length- 1].classList.add("prev");
        }
        else {
            feedbacks[i - 1].classList.add("prev");
        }
        if(i == feedbacks.length - 1) {
            feedbacks[0].classList.add("next");
        }
        else {
            feedbacks[i + 1].classList.add("next");
        }
    }
}