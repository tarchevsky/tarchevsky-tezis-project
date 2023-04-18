const tabsTagsParent = document.querySelector(".tabs-tags__row"),
    tabsTagsButton = document.querySelectorAll(".tabs-tags__button"),
    tabsTagsItem = document.querySelectorAll(".tabs-tags__item");

function tabsTagsHideContent() {
    tabsTagsButton.forEach((item) => {
        item.classList.remove("active");
    });
    tabsTagsItem.forEach((item) => {
        item.style.maxHeight = "";
        if (item.classList.contains("tabs-tags__item--active")) {
            setTimeout(function () {
                item.style.display = "none";
            }, 800);
        }
        item.classList.remove("tabs-tags__item--active");
    });
}

tabsTagsHideContent();

function tabsTagsShowContent(i = 0) {
    tabsTagsItem[i].style.display = "block";
    tabsTagsButton[i].classList.add("active");
    tabsTagsItem[i].classList.add("tabs-tags__item--active");
    tabsTagsItem[i].style.maxHeight = `${tabsTagsItem[i].scrollHeight}px`;
}

tabsTagsShowContent();

function tabsTagsTabActivation() {
    tabsTagsParent.addEventListener("click", (e) => {
        const target = e.target;

        if (target && target.classList.contains("tabs-tags__button") && !target.classList.contains("tabs-tags__button--active")) {
            tabsTagsButton.forEach((item, i) => {
                if (target === item) {
                    tabsTagsHideContent();
                    tabsTagsShowContent(i);
                }
            });
        }
    });
}

tabsTagsTabActivation();

function resizeContent(content) {
    content.forEach((item, i) => {
        if (parseInt(content[i].style.maxHeight) !== content[i].scrollHeight) {
            content[i].style.maxHeight = `${content[i].scrollHeight}px`;
        }
    });
}

window.addEventListener("resize", () => resizeContent(tabsTagsItem));