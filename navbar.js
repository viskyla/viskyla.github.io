const header = `
    <style>
    	*{
        	margin: 0;
            padding: 0;
        }


            
        .navbar{
            background-color: #333;
            overflow: hidden;
        }

        .navbar a{
            float: left;
            color: #f2f2f2;
            padding: 5px;
            text-align: center;
            text-decoration: none;
            font-size: 17px;
        }

        .navbar ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
            position: -webkit-sticky; /* Safari */
            position: sticky;
            top: 0;
        }
    </style>
    <div class="navbar">
        <ul>
            <li><a href="https://viskyla.com">Home</a></li>
            <li><a href="https://viskyla.com">Also home but another button</a></li>
        </ul>
    </div>
`;
document.querySelector("header").insertAdjacentHTML("afterbegin", header);