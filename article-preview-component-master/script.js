btnShareSection = document.getElementById('btnShareSection');

btnShareSection.addEventListener("click", toggle);


function toggle () {
    const ShareSection = document.getElementById("share-section")
    if(ShareSection.classList.value === 'share-section') {
        ShareSection.classList.value = 'share-section-active'
    } else {
        ShareSection.classList.value = 'share-section'
    }
}