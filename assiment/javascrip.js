
  
        // document.getElement("li")
        // Create an "li" node:
        const node1 = document.createElement("li");
        const node2 = document.createElement("li");
        const node3 = document.createElement("li");
        const node4 = document.createElement("li");
        const node5 = document.createElement("li");
        const node6 = document.createElement("li");
        const node7 = document.createElement("li");
        const node8 = document.createElement("li");
        const node9 = document.createElement("li");
        const node10 = document.createElement("li");
        const node11 = document.createElement("li");
        const node12 = document.createElement("li");
        const node13 = document.createElement("li");
        const node14 = document.createElement("li");
        const node15 = document.createElement("li");
        const node16 = document.createElement("li");
        // Create a text node:
        const textnode1 = document.createTextNode("Dashboards");
        const textnode2 = document.createTextNode("Product");
        const textnode3 = document.createTextNode("Widgets");
        const textnode4 = document.createTextNode("Career");
        const textnode5 = document.createTextNode("UI Elements");
        const textnode6 = document.createTextNode("Pages");
        const textnode7 = document.createTextNode("Calendar");
        const textnode8 = document.createTextNode("Forms");
        const textnode9 = document.createTextNode("Tables");
        const textnode10 = document.createTextNode("Graphs & Maps");
        const textnode11 = document.createTextNode("Layouts");
        const textnode12 = document.createTextNode("Authentication");
        const textnode13 = document.createTextNode("LInk");
        const textnode14 = document.createTextNode("Home");
        const textnode15 = document.createTextNode("About");
        const textnode16 = document.createTextNode("Contact");
        // Append the text node to the "li" node:
        node1.appendChild(textnode1);
        node2.appendChild(textnode2);
        node3.appendChild(textnode3);
        node4.appendChild(textnode4);
        node5.appendChild(textnode5);
        node6.appendChild(textnode6);
        node7.appendChild(textnode7);
        node8.appendChild(textnode8);
        node9.appendChild(textnode9);
        node10.appendChild(textnode10);
        node11.appendChild(textnode11);
        node12.appendChild(textnode12);
        node13.appendChild(textnode13);
        node14.appendChild(textnode14);
        node15.appendChild(textnode15);
        node16.appendChild(textnode16);
        // Append the "li" node to the list:
        document.getElementById("myList").appendChild(node1);
        document.getElementById("myList").appendChild(node2);
        document.getElementById("myList").appendChild(node3);
        document.getElementById("myList").appendChild(node4);
        document.getElementById("myList").appendChild(node5);
        document.getElementById("myList").appendChild(node6);
        document.getElementById("myList").appendChild(node7);
        document.getElementById("myList").appendChild(node8);
        document.getElementById("myList").appendChild(node9);
        document.getElementById("myList").appendChild(node10);
        document.getElementById("myList").appendChild(node11);
        document.getElementById("myList").appendChild(node12);
        document.getElementById("myList").appendChild(node13);
        document.getElementById("myList").appendChild(node14);
        document.getElementById("myList").appendChild(node15);
        document.getElementById("myList").appendChild(node16);
        document.addEventListener('DOMContentLoaded', (event) => {
            loadTheme();
        });
        
        async function getProducts() {
            var apiUrl = "https://dummyjson.com/products";
            var prodObj = await fetch(apiUrl);
            var products = await prodObj.json();
            var productsList = products["products"];
            
            var table = "<table width='100%' border='1' style='border-collapse: collapse;'>";
            table += "<tr> <th>Image</th><th>Title</th><th>price</th> <th>Brand</th><th>Category</th></tr>";
            for(var product in productsList) {
                var productsList = products["products"];
                var proObj = productsList[product];
                table += "<tr>";
                table += "<td> <img width='100px' src='" + proObj.thumbnail + "'></td>";
                table += "<td> " + proObj.title + "</td>";
                table += "<td> " + proObj.price + "</td>";
                table += "<td> " + proObj.brand + "</td>";
                table += "<td> " + proObj.category + "</td>";
                table += "</tr>";
                
            }
            table += "</table>";
            
            document.getElementById("product").innerHTML = table;
        }
        
        getProducts();
        function saveTheme() {
            const themeSelector = document.getElementById('theme-selector');
            const selectedTheme = themeSelector.value;
            localStorage.setItem('theme', selectedTheme);
            applyTheme(selectedTheme);
        }
        function loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                const themeSelector = document.getElementById('theme-selector');
                themeSelector.value = savedTheme;
                applyTheme(savedTheme);
            }
        }
        
        function applyTheme(theme) {
            document.body.className = theme;
            const welcomeMessage = document.getElementById('welcome-message');
            if (theme === 'dark') {
                welcomeMessage.style.color = 'white';
                document.body.style.backgroundColor = 'black';
                document.body.style.color = 'white';
        
                // Set the color for all <li> elements to white
                const listItems = document.querySelectorAll('li');
                listItems.forEach(item => {
                    item.style.color = 'white';
                });
                // Set the color for all table elements to white
                const tableHeaders = document.querySelectorAll('th');
                const tableRows = document.querySelectorAll('tr');
                const tableData = document.querySelectorAll('td');
                tableHeaders.forEach(element => {
                    element.style.color = 'white';
                });
                
                tableRows.forEach(element => {
                    element.style.color = 'white';
                });
        
                tableData.forEach(element => {
                    element.style.color = 'white';
                });
        
            } else {
                welcomeMessage.style.color = 'black';
                document.body.style.backgroundColor = 'white';
                document.body.style.color = 'black';
        
                // Reset the color for all <li> elements to black (or the default)
                const listItems = document.querySelectorAll('li');
                listItems.forEach(item => {
                    item.style.color = 'black';
                });
        
                // Reset the color for all table elements to black (or the default)
                const tableHeaders = document.querySelectorAll('th');
                const tableRows = document.querySelectorAll('tr');
                const tableData = document.querySelectorAll('td');
                
                tableHeaders.forEach(element => {
                    element.style.color = 'black';
                });
        
                tableRows.forEach(element => {
                    element.style.color = 'black';
                });
        
                tableData.forEach(element => {
                    element.style.color = 'black';
                });
            }
        }
        
        
