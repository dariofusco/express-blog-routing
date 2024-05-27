const path = require("path");
const fs = require("fs");
let posts = require("../db/posts.json");

const index = (req, res) => {

    let html = '<ul>';
    posts.forEach(post => {
        html += `<li>
                    <div>
                        <a href="${post.slug}"><h1>${post.title}</h1></a>
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

    //res.json(jsonPost);

    res.json({
        ...jsonPost,
        image_url: `http://${req.headers.host}/${jsonPost.image}`
    });
}

const create = (req, res) => {

    res.format({
        html: () => {
            res.send(`<h1>Creazione nuovo post</h1>`);
        },
        json: () => {
            res.status(406).json({
                error: "Not Acceptable",
            });
        }
    });

}

const download = (req, res) => {

    const slugPost = req.params.slug;
    const selectedPost = posts.find(post => post.slug === slugPost);
    res.download(`${__dirname}/../public/${selectedPost.image}`);
}

module.exports = {
    index,
    show,
    create,
    download
}