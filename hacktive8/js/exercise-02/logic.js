
	var memory = 0;
	display = document.getElementsByTagName("input")[0];

	btns = document.getElementsByClassName("button");
	for(i = 0;i < btns.length;i++)
	{
		btns[i].onmouseenter = function(){
			this.style.backgroundColor = "#f8f8f8";
		}

		btns[i].onmouseleave = function(){
			this.style.backgroundColor = "#fefefe";
		}

		btns[i].onmousedown = function()
		{
			this.style.backgroundColor = '#aaabef';
		}

		btns[i].onmouseup = function()
		{
			this.style.backgroundColor = '#fefefe';
		}

		btns[i].onclick = function(){
			switch(this.childNodes[0].textContent)
			{
				case 'Clear' : display.value = "0";memory = 0;break;
				case 'M. Get' : if(display.value != 0) display.value += memory; else display.value = memory; break;
				case 'M. Set' : memory = display.value;display.value = "0";break;
				case 'Bs' : if(display.value.length > 1) display.value = display.value.slice(0,-1); else display.value = "0";break;
				case '='  :
				{
					try {
						display.value = eval(display.value);
					}
					catch(err)
					{
						alert("Terjadi Kesalahan");
						display.value = "0";
					}
				}break;
				default : 
							{
								if(display.value == "0")
									display.value = this.childNodes[0].textContent;
								else
									display.value = display.value + this.childNodes[0].textContent;
							}break;
			}
		}
	}

