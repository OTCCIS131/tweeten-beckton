let incrementbutton = Array.from(document.getElementsByClassName("button-inc"))

incrementbutton.forEach(btn => {
    btn.addEventListener("click", e => {
        let count = btn.nextSibling.textContent.trim()
        let newCount = parseInt(count) + 1
        
        btn.nextSibling.textContent = newCount;
    });
});

