function getCol() {
		var colorData;

		var oReq = new XMLHttpRequest();
		oReq.onload = reqListener;
		oReq.open("get", "ColorNameMap.json", true);
		oReq.send();

		function reqListener(e) {
			colorData = JSON.parse(this.responseText);
			
			var i;

			for (i = 0; i < colorData.length; i++)
			{
				var li = document.createElement("li");
				li.className = "litem";
				var color = document.createTextNode(colorData[i].color);
                var ellipse = document.createElement("div");
                ellipse.className = "ellipse";
                ellipse.style.background = colorData[i].value;
				li.appendChild(color);
                li.appendChild(ellipse);
                
				document.getElementById("list1").appendChild(li);

			}
            
            for (i = colorData.length-1; i >= 0 ; i--)
			{
				var li = document.createElement("li");
				li.className = "litem";
				var value = document.createTextNode(colorData[i].value);
                var ellipse = document.createElement("div");
                ellipse.className = "ellipse";
                ellipse.style.background = colorData[i].value;
				li.appendChild(value);
                li.appendChild(ellipse);
                
				document.getElementById("list2").appendChild(li);

			}

		}
	}
	
	window.onload = getCol;