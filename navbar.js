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
        }

        body{
            padding: 10px;
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
            background-color: #333;
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
    <div class="navbar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Projets</a></li>
            <li><a href="/About">About</a></li>
        </ul>
    </div>
`;
document.querySelector("head").insertAdjacentHTML("afterend", header);