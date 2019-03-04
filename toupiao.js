var check = document.getElementById("newCheck");
var allGroup=[];

function display()
{
	var d="";
	for(var i in allGroup)
	{
		d+=allGroup[i]+"\n";
	}
	document.getElementById("info").innerText = d;
}

function add()
{
	var val = check.value;
	if(val=='')
	{
		return;
	}
	else
	{
		allGroup.push(val);
		check.value = '';
		display();
	}
}

function delLast()
{
	allGroup.pop();
	display();
}

function finish()
{
	if(allGroup.length==0)
	{
		mui.alert('请添加选项', '录入选项');
		return;
	}
	else
	{
		localStorage.setItem("par",allGroup.toString());
		window.location.href="toupiao2.html";
	}
}
