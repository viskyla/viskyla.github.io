const header = `
    <style>

        @font-face {
            font-family: andy;
            src: url(/ANDYB.TTF);
        }

    	*{
        	margin: 0;
            padding: 0;
            text-align: center;
            font-family: andy;
            color: #f2f2f2;
        }

        body{
            padding: 10px;
            background-color: #555
        }
            
        .navbar{
            background-color: #333;
            overflow: hidden;
        }

        .navbar a{
            float: left;
            color: #f2f2f2;
            padding:10px;
            text-align: center;
            text-decoration: none;
            font-size: 17px;
        }

        .navbar a:hover{
            background-color: #444;
            color: #ffffa6;
        }

        .navbar ul {
            list-style-type: none;
            overflow: hidden;
            background-color: #222;
            position: -webkit-sticky;
            position: sticky;
            top: 0;
        }

        .navbar li:last-child{
            float:right;
        }

        ul{
            list-style-type: none;
        }

        img{
            margin-left: auto;
            margin-right: auto;
            display: block;
            width: 50%;
        }
    </style>

    <title>Viskyla</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">

    <div class="navbar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Portfolio">Portfolio</a></li>
            <li><a href="/Projects">Projects</a></li>
            <li><a href="/Blog">Blog</a></li>
            <li><a href="/About">About</a></li>
        </ul>
    </div>
`;
document.querySelector("head").insertAdjacentHTML("afterend", header);