document.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    try {
        const iput  = document.querySelector("input[name=iput]").value;
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${iput}`);
        if(!response.ok) throw new Error("error in queryJoke!");
        const jsonData = await response.json();

        const jokesDiv = document.querySelector("#jokes");
        for(let i = 0; i < jsonData.result.length; i++){
            const article = document.createElement("article");
            const paragraph = document.createElement("p");
            const text = document.createTextNode(jsonData.result[i].value);
            paragraph.appendChild(text);
            article.appendChild(paragraph);
            jokesDiv.appendChild(article);
        }
    } catch (error) {
        console.log(error.message);
    }
});