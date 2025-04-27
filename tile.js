const tile = `
        <section class="tilecontainer">
                <a class="tile" href="imback.html">
                        <h2>I'M BACK!!!</h2>
                        <p>
                            This post emphasizes the fact that Viskyla is back. For some reason she is really excited about that fact.
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