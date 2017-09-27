let incrementbutton = Array.from(document.getElementsByClassName("button-increment"))

incrementbutton.forEach(btn => {
    btn.addEventListener("click", e => {
        let count = btn.nextSibling.textContent.trim()
        newCount = parceInt(count) + 1
        btn.nextSibling.textContent = newCount
    });
});

