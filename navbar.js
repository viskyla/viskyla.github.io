const header = `
   <style>

        @font-face {
            font-family: andy;
            src: url(/ANDYB.TTF);
        }
        
        :root{
        	--primary:#1f1f21ff;
            --secondary:#f2f2f2;
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
            background-color:#0f0f11ff;
        }
            
        .navbar{
            background-color: var(--primary);
            position: -webkit-sticky;
            position: sticky;
            height: 40px;
            overflow: visible;
        }

        .navbar a{
            float: left;
            color: #f2f2f2;
            padding:10px;
            text-align: center;
            height:20px;
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

        .dropdown{
            position:relative;
            float: left;
            display:inline-block;
        }

        .dropdown-content{
        	margin-top:40px;
            display:none;
            position:absolute;
            min-width:160;
            z-index:1;
        }

        .dropdown-content a{
        	background-color: #222;
        	padding: 10px 16px;
            min-width:160;
        	display:block;
        }
        
        .dropdown-content a:hover{
			transform: none;
        }
        
        .dropdown:hover .dropdown-content{
            display:block;
        }
    </style>

    <title>Viskyla</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">

    <div class="navbar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Portfolio">Portfolio</a></li>
            <div class="dropdown">
                <li><a href="/Projects">Projects</a></li>
                <div class="dropdown-content">
                    <a href="/Projects/starlight.html">Starlight</a>
                </div>
            </div>
            <li><a href="/Blog">Blog</a></li>
            <li><a href="/About">About</a></li>
        </ul>
    </div>
`;
document.querySelector("head").insertAdjacentHTML("afterend", header);