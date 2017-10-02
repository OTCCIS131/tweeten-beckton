let incrementButtons = Array.from(document.getElementsByClassName('btn-inc'))

incrementButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let content = btn.nextSibling.textContent.trim()
        let currentLikes = parseInt(content)

        btn.nextSibling.textContent = ` ${++currentLikes} `
    })
})