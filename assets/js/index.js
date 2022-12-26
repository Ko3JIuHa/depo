if (document.querySelector("header")) {
    fetch("/inc/header.html")
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            document.querySelector("header").innerHTML = data;
        })
        .then(() => {
            document.querySelectorAll("a").forEach((link) => {
                link.href == document.URL &&
                    link.classList.add("arsipa-active-link");
            });
        });
}
if (document.querySelector("footer")) {
    fetch("/inc/footer.html")
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            document.querySelector("footer").innerHTML = data;
        })
        .then(() => {
            document.querySelector("#currentYear").innerText =
                new Date().getFullYear();
        });
}
