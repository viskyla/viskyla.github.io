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
            background-color: #0f0f11ff
        }
            
        .navbar{
            background-color: #222;
            position: -webkit-sticky;
            position: sticky;
            height: 20px;
            overflow: visible;
        }

        .navbar a{
            float: left;
            color: #f2f2f2;
            padding:10px;
            text-align: center;
            text-decoration: none;
            font-size: 17px;
            transition: transform 0.3s ease-in-out;
        }

        .navbar a:hover{
            background-color: #444;
            color: #ffffa6;
            transform: translateY(2px);
        }

        .navbar ul {
            list-style-type: none;
            overflow: visible;
            background-color: #0000
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

        .tilecontainer {
            padding: 50;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        .tile {
            width: 400;
            background-color: #222;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
            padding: 20px;
            border-radius: 10px;
            text-decoration: none;
            transition: transform 0.3s ease-in-out;
        }

        .tile:hover {
            transform: scale(1.04);
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