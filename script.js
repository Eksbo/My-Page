let userLink = "https://api.github.com/users/Eksbo/repos";
let blockReposInfo = document.querySelector(".block-repos");
let userFoto = document.querySelector(".img");
let content;
let contentFoto;
let commitInfo = document.createElement("div");
let commitDate = document.createElement("p");
let repoLink = document.createElement("a");

commitInfo.classList.add("d-none");
const creatRepo = () => {
    for (let item in content) {
        const commitContent = () => {
            commitInfo.classList.toggle("d-none");
            commitInfo.classList.add("elem-result");
            repoLink.href = content[item]["svn_url"];
            repoLink.textContent = repoLink.href;
            commitDate.textContent =
                "Data last commit : " + content[item]["updated_at"];

            commitInfo.append(repoLink);
            commitInfo.append(commitDate);
            reposItem.append(commitInfo);
        };

        let reposItem = document.createElement("p");

        let reposItemButton = document.createElement("button");

        reposItemButton.textContent = "commit info";
        reposItemButton.classList.add("btn");
        reposItemButton.addEventListener("click", commitContent);

        reposItem.classList.add("item");
        reposItem.textContent = content[item].name;
        reposItem.append(reposItemButton);
        blockReposInfo.append(reposItem);
    }
};



async function getResult() {
    let result = await fetch(userLink);
    content = await result.json();
    userFoto.src = content[0].owner["avatar_url"];
    creatRepo();
}

getResult();



let mask = document.querySelector('.mask')
window.addEventListener('load', () => {
    mask.classList.add('hide')
    setTimeout(() => {
        mask.remove()
    }, 600)

})