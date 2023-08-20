class Slider {
    position = 0;

    constructor(dict, position) {
        this.dict = dict;
        this.selectSliderItem(position);
    }

    setSliderProjects(num) {
        document.getElementById("slider-img").src = `img/${this.dict[num]['image']}`;
        document.getElementById("slider-img").alt = `${this.dict[num]['alt']}`;
        document.getElementById("slider-city").innerText = this.dict[num]['city'];
        document.getElementById("slider-theme").innerText = this.dict[num]['theme'];
        document.getElementById("slider-area").innerText = this.dict[num]['area'];
        document.getElementById("slider-time").innerText = this.dict[num]['time'];
        document.getElementById("slider-cost").innerText = this.dict[num]['cost'];
    }

    setStyleNavFirst(num) {
        let li_nav_first = document.querySelectorAll(`.slider__nav-first li`);
        li_nav_first[this.position + 1].classList.remove("slider__nav-first_selected");
        li_nav_first[num + 1].classList.add("slider__nav-first_selected");
    }

    setStyleNavSecond(num) {
        let li_nav_second = document.querySelectorAll(`.slider__nav-second li`);
        li_nav_second[this.position].classList.remove("slider__nav-second_selected");
        li_nav_second[num].classList.add("slider__nav-second_selected");
    }

    selectSliderItem(num) {
        this.setSliderProjects(num);
        this.setStyleNavFirst(num);
        this.setStyleNavSecond(num);
        this.position = num;

    }

    iterSliderItem(flag) {
        let pos = (flag) ? (this.position + 1) : (this.position - 1);
        pos = (pos < 0) ? (pos += 3) : pos;
        pos %= 3;
        this.selectSliderItem(pos)
    }
}


const slider = new Slider([
    { image: "image1.jpg", city: "Rostov-on-Don", theme: "LCD admiral", area: 81, time: 3.5, cost: "Upon request", alt: "photo1" },
    { image: "image2.jpg", city: "Sochi", theme: "Thieves", area: 105, time: 4, cost: "Upon request", alt: "photo2" },
    { image: "image3.jpg", city: "Rostov-on-Don", theme: "Patriotic", area: 93, time: 3, cost: "Upon request", alt: "photo3" }
], 0);



