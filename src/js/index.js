function cidadeMapa(e) {
    e.preventDefault();
    document.querySelector(".title_mapa").innerHTML = e.target.title;
    if (e.target.alt) {
        document.querySelector(".modal_mapa").src = e.target.alt;
    } else {
        document.querySelector(".modal_mapa").src = e.target.href;
    }
    const class_modal = document.getElementById("modal");
    class_modal.classList.add(e.target.id);
    modal(e.target.id);
}

function modal(id) {

    const modal = document.querySelector('.' + id);
    if (modal) {
        setTimeout(() => {
            modal.classList.add('show');
        }, 500);
        modal.addEventListener('click', (e) => {
            if (e.target.id = id || e.target.span) {
                modal.classList.remove('show')
                modal.classList.remove(id)
                modal.setAttribute('id', 'modal');
            }
        });
    }
}