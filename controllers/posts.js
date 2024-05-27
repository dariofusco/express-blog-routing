let posts = require("../db/posts.json");

const index = (req, res) => {

    let html = '<ul>';
    posts.forEach(post => {
        html += `<li>
                    <div>
                        <h3>${post.title}</h3>
                        <img width="200" src=${`/${post.image}`} />
                        <p><strong>Ingredienti</strong>: ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join(', ')}</p>
                    </div>
                </li>`
    });
    html += '</ul>';
    res.send(html);

}

const show = (req, res) => {

    const slugPost = req.params.slug;
    const jsonPost = posts.find(post => post.slug === slugPost);

    res.format({
        json: () => {
            if (jsonPost) {
                res.json(jsonPost);
            }
        }
    })
}

module.exports = {
    index,
    show,
}