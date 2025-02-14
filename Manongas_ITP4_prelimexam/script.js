function getLayout() {

    return `
    <header>
        <h1>Jan Yerner Q. Manongas</h1>
        <nav>
            <a href="index.html">About Me</a>
            <a href="subjects_taken.html">Subjects Taken</a>
            <a href="Enrolled.html">Currently Enrolled</a>
            <a href="Favorites.html">Favorites</a>
            <a href="Contact.html">Contact Me</a>
            <a href="Gallery.html">Gallery</a>
        </nav>
    </header>
    `
}

document.body.insertAdjacentHTML("afterbegin", getLayout());