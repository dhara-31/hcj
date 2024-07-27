let button = document.querySelector(".removebtn");
let sideMenu = document.querySelector('.sidemenu');
let menubutton = document.querySelector('.menubutton');
button.addEventListener("click", function () {
    sideMenu.classList.remove('show');;
});
menubutton.addEventListener("click", function () {
    sideMenu.classList.add('show');
});


//accordion
const accordionContent = document.querySelectorAll(".accordion-content");
accordionContent.forEach((item, index) => {
    let acc = item.querySelector("div");

    acc.addEventListener("click", () => {
        item.classList.toggle("is-open");
        let description = item.querySelector(".accordion-content-description");
        if (item.classList.contains("is-open")) {
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        } else {
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        
        removeOpenedContent(index);

    })
})

function removeOpenedContent(index) {
    accordionContent.forEach((item2, index2) => {
        if (index != index2) {
            item2.classList.remove("is-open");
            let descrip = item2.querySelector(".accordion-content-description");
            descrip.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}



































// const items = document.querySelectorAll('.accordion button');
// function toggleAccordion() {
//     const itemToggle = this.getAttribute('aria-expanded');
//     for (i = 0; i < items.length; i++) {
//         // items[i].setAttribute('aria-expanded', 'false');

//         items[i].setAttribute('aria-expanded', 'false')
//     }

//     if (itemToggle == 'false') {
//         this.setAttribute('aria-expanded', 'true');
//     }
// }

// items.forEach((item) => item.addEventListener('click', toggleAccordion));

