// fetch("https://api.github.com/users/nadfri")
// .then(reponse => reponse.json())
// .then(reponse2 => console.log(reponse2))
// // .then(reponse2 => console.log("public repos = " +reponse2.public_repos))


btn.onclick = () => {
    fetch("https://api.github.com/users/" + champ.value)
    .then(reponse => reponse.json())
    .then(data => {
        output.textContent = "";
         output.textContent = `Compte de ${data.login}`;
         output2.textContent = `Nombre de repo ${data.public_repos}`
         const img = document.createElement("img");
         img.src = data.avatar_url;
         output.appendChild(img);
    })
}


btn2.onclick = () => {
    fetch("https://api.themoviedb.org/3/movie/550?api_key=fac0c110fc951c3d2cac54b39c17fe30&query=3")
    .then(reponse => reponse.json())
    .then(data => {
        out.textContent= "";
        out.textContent = `Titre du film : ${data.title}`
        out2.textContent = `Site d'origine : ${data.homepage}`
        const aff = document.createElement("aff");
        const chemAff= data.poster_path;
        console.log("https://image.tmdb.org/t/p/w500/"+chemAff);
        aff.src = "https://image.tmdb.org/t/p/w500/"+chemAff;
        out.appendChild(aff);

    })
}
