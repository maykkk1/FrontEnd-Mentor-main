btnShareSection = document.getElementById('btnShareSection');

btnShareSection.addEventListener("click", toggle);


function toggle () {
    const ShareSection = document.getElementById("share-section")
    if(ShareSection.classList.value === 'share-section') {
        ShareSection.classList.value = 'share-section-active'
        btnShareSection.style.backgroundColor = 'hsl(214, 17%, 51%)'
        btnShareSection.style.color = 'white'


    } else {
        ShareSection.classList.value = 'share-section'
        btnShareSection.style.backgroundColor = 'hsl(210, 46%, 95%)'
        btnShareSection.style.color = 'hsl(217, 19%, 35%)'
    }
}