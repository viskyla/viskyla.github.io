const tile = `
        <style>
                .tilecontainer {
                        padding: 50;
                        display: flex;
                        flex-wrap: wrap;
                        gap: 20px;
                }
                .tile {
                        flex: 1 .5 200px;
                        background-color: #ddd;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        padding: 20px;
                        border-radius: 10px;
                        text-decoration: none;
                        color:#000;
                        transition: transform 0.3s ease-in-out;
                }


                .tile:hover {
                        transform: scale(1.05);
                }
        </style>

        <section class="tilecontainer">
                <a class="tile" href="">
                        <h2>Not real</h2>
                        <p>
                        Pleepo plopo lorem ipsum afoij dsaoifjsa fisadjf<br>
                        soidfj saoidjf oidsa jfoisad jf<br>
                        dsasda<br>
                        sdasd<br>
                        asdsadsa<br>
                        dsadads<br>
                        </p>
                </a>        
                <a class="tile" href="firstpost.html">
                        <h2>The first post!</h2>
                        <p>
                        This post talks about where I'll be and what to expect.<br>
                        </p>
                </a>
        </section>
`

document.querySelector("body").insertAdjacentHTML("afterend", tile);