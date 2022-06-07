let mainInfos = document.querySelectorAll(".main__info");
let activeNode = null;
let reservedClass = document.querySelectorAll('.reserved');

[...mainInfos].forEach(function(main) {
    let buttons = main.querySelectorAll(".button");

    [...reservedClass].forEach(el => el.style.display = 'none');

    [...buttons].forEach((button) => {
        button.addEventListener("click", function() {
            activeNode = main;
        });
    });

    main.addEventListener("mouseleave", function() {
        if (activeNode) {
            activeNode.classList.add("reserved");
            activeNode = null;
            [...reservedClass].find(el => main.contains(el)).style.display = 'initial';
        }
    });

    main.addEventListener("click", function() {
        main.classList.remove("reserved");
        [...reservedClass].find(el => main.contains(el)).style.display = 'none';
    });
});