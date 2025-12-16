const links = document.querySelectorAll('.card-link');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        modalImg.src = this.dataset.image;
        modal.classList.add('show');
    });
});

closeBtn.onclick = () => modal.classList.remove('show');
modal.onclick = e => {
    if (e.target === modal) modal.classList.remove('show');
};