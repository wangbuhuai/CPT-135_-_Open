// Created by Dayu Wang (dwang@stchas.edu) on 2022-06-05

// Last updated by Dayu Wang (dwang@stchas.edu) on 2022-06-05


document.addEventListener("DOMContentLoaded", () => {
    // "Line-through" effect
    let elements = document.getElementsByClassName("line-through");
    [].forEach.call(elements, function(element) {
        const color = element.style.color;
        if (color) { element.innerHTML = "<span style='color:" + color + "'>" + element.innerText + "</span>"; }
        element.style.color = "black";
        element.style.textDecoration = "line-through";
    });

    // Bullet effect
    elements = document.getElementsByClassName("bullet-large");
    [].forEach.call(elements, function(element) {
        element.style.marginRight = '0';
        element.style.marginBottom = '0';
        element.style.marginLeft = "12pt";
        element.style.textIndent = "-6pt";
        element.innerHTML = "<span style='display:inline-block;width:6pt;'>&bull;</span>" + element.innerHTML;
    });

    elements = document.getElementsByClassName("bullet-small");
    [].forEach.call(elements, function(element) {
        element.style.marginRight = '0';
        element.style.marginBottom = '0';
        element.style.marginLeft = "11pt";
        element.style.textIndent = "-5.5pt";
        element.innerHTML = "<span style='display:inline-block;width:5.5pt;'>&bull;</span>" + element.innerHTML;
    });

    // Math equations
    elements = document.getElementsByClassName("math");
    [].forEach.call(elements, function(element) {
        console.log(element.getAttribute("class"));
        const formula = element.innerText;
        const top = element.style.top;
        const color = element.getAttribute("class").replace("math", '').trim();
        element.outerHTML = "<img style='border:none;margin:0;padding:0;vertical-align:baseline;position:relative;" +
            (top ? "top:" + top + ';' : '') +
            "' alt='" + formula +
            "' src='https://latex.codecogs.com/svg.latex?\\boldsymbol{\\color{" +
            (color ? color : "Black") + "}{" + formula + "}}'>";
    });
});