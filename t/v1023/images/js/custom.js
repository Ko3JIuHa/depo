window.onload = function () {
    // if (document.querySelector("footer")) {
    //     fetch("footer.html")
    //         .then((response) => {
    //             return response.text();
    //         })
    //         .then((data) => {
    //             document.querySelector("footer").innerHTML = data;
    //             const date = new Date();
    //             document.getElementById(
    //                 "footer-text"
    //             ).innerText = `© 2000 - ${date.getFullYear()} эл\\д Планерное. Все права защищены`;
    //             console.log(document.getElementById(
    //                 "footer-text"
    //             ));
    //         });
    // }
    if (document.querySelector("footer")) {
        fetch("/footer.html")
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                document.querySelector("footer").innerHTML = data;
                const date = new Date();
                document.getElementById(
                    "footer-text"
                ).innerText = `© 2000 - ${date.getFullYear()} эл\\д Планерное. Все права защищены`;
                console.log(document.getElementById(
                    "footer-text"
                ));
            });
    }
};