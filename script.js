document.getElementById("saveProfile").addEventListener("click", function () {
    const username = document.getElementById("username").value.trim();
    if (!username) {
        alert("Please enter a valid username!");
        return;
    }

    // Sauvegarder les données dans le localStorage
    const profileData = { username: username };
    localStorage.setItem(username, JSON.stringify(profileData));

    // Redirection vers la page du profil
    const profileLink = `https://votrenom.github.io/profil.html?username=${username}`;
    window.location.href = profileLink;
});

