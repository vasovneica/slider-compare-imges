initComparisons();
function initComparisons() {

    var autoMovingFlag = true
    var x, i, firstImg, secondImg;
    x = document.getElementsByClassName("img-comp-overlay");
    firstImg = document.getElementById('first-img');
    secondImg = document.getElementById('second-img');
    secondImg.src = 'https://github.com/vasovneica/slider-compare-imges/blob/main/compare_images/sport_demo_sec_var.jpg?raw=true'
    button_1 = document.getElementById('button_1');
    button_2 = document.getElementById('button_2');
    button_3 = document.getElementById('button_3');

    for (i = 0; i < x.length; i++) {
        compareImages(x[i]);
    }


    function compareImages(img) {
        autoMoving()
        button_1.onclick=()=>{
            autoMovingFlag = false
            button_1.classList.add("active");
            button_2.classList.remove("active");
            button_3.classList.remove("active");
            firstImg .src = 'https://github.com/vasovneica/slider-compare-imges/blob/main/compare_images/sport_demo_sec_var1.jpg?raw=true';

        }
        button_2.onclick=()=>{
            autoMovingFlag = false
            button_1.classList.remove("active");
            button_2.classList.add("active");
            button_3.classList.remove("active");
            firstImg .src = 'https://github.com/vasovneica/slider-compare-imges/blob/main/compare_images/sport_demo_third_var.jpg?raw=true';
        }
        
        button_3.onclick=()=>{
            autoMovingFlag = false
            button_1.classList.remove("active");
            button_2.classList.remove("active");
            button_3.classList.add("active");
            firstImg .src = 'https://github.com/vasovneica/slider-compare-imges/blob/main/compare_images/sport_demo_fourth_var1.jpg?raw=true';
        }
        var slider, img, clicked = 0, w, h;
        w = img.offsetWidth;
        h = img.offsetHeight;
        img.style.width = (w / 2) + "px";
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        img.parentElement.insertBefore(slider, img);
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        slider.addEventListener("mousedown", slideReady);
        window.addEventListener("mouseup", slideFinish);
        slider.addEventListener("touchstart", slideReady);
        window.addEventListener("touchend", slideFinish);


        function autoMoving() {
            clicked = 1;
            var pos = 1;
            var moveDirection = 1;
            var movingCounter = 5;
            if (clicked == 0) return false;
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;


            setInterval(() => {
                if (autoMovingFlag == false) {
                    return;
                }
                if (movingCounter == 0) {
                    return;
                }
                if (movingCounter == 5) {
                    firstImg.src = 'https://github.com/vasovneica/slider-compare-imges/blob/main/compare_images/sport_demo_sec_var1.jpg?raw=true';
                    button_1.classList.add("active");
                    console.log('5');
                }
                if (movingCounter == 3) {
                    firstImg.src = 'https://github.com/vasovneica/slider-compare-imges/blob/main/compare_images/sport_demo_third_var.jpg?raw=true';
                    button_1.classList.remove("active");
                    button_2.classList.add("active");
                    console.log('3');
                }
                if (movingCounter == 1) {
                    firstImg.src = 'https://github.com/vasovneica/slider-compare-imges/blob/main/compare_images/sport_demo_fourth_var1.jpg?raw=true';
                    button_2.classList.remove("active");
                    button_3.classList.add("active");
                    console.log('1');
                }
                if (pos == 350) {
                    moveDirection = -1
                    movingCounter -= 1
                }
                if (pos == 15) {
                    moveDirection = 1
                    movingCounter -= 1
                }
                pos += 1 * moveDirection
                slide(pos);
            }, 25);
        }


        function slideReady(e) {
            e.preventDefault();
            clicked = 1;
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);

        }


        function slideFinish() {
            clicked = 0;
        }


        function slideMove(e) {
            autoMovingFlag = false
            slider.style.color = "#fff";
            slider.style.animation = "none"
            var pos;
            var moveDirection = 1
            if (clicked == 0) return false;
            pos = getCursorPos(e)
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            slide(pos);
        }


        function getCursorPos(e) {
            var a, x = 0;
            e = (e.changedTouches) ? e.changedTouches[0] : e;
            a = img.getBoundingClientRect();
            x = e.pageX - a.left;
            x = x - window.pageXOffset;
            return x;
        }


        function slide(x) {
            img.style.width = x + "px";
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";

        }

    }


}
