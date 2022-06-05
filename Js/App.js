// Created by Dayu Wang (dwang@stchas.edu) on 2022-06-05

// Last updated by Dayu Wang (dwang@stchas.edu) on 2022-06-05


document.addEventListener("DOMContentLoaded", () => {
    // "Line-through" effect
    let elements = document.getElementsByClassName("line-through");
    [].forEach.call(elements, function(element) {
        let color = element.style.color;
        if (color) { element.innerHTML = "<span style='color:" + color + "'>" + element.innerText + "</span>"; }
        element.style.color = "black";
        element.style.textDecoration = "line-through";
    });

    // Bullet effect
    elements = document.getElementsByClassName("bulletLarge");
    [].forEach.call(elements, function(element) {
        element.style.marginRight = '0';
        element.style.marginBottom = '0';
        element.style.marginLeft = "12pt";
        element.style.textIndent = "-6pt";
        element.innerHTML = "<span style='display:inline-block;width:6pt;'>&bull;</span>" + element.innerHTML;
    });
});