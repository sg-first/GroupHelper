var info = document.getElementById("info");
var check = document.getElementById("newCheck");
var allGroup=['test1','test2'];

function display()
{
	var d='';
	for(var i in allGroup)
	{
		d+=allGroup[i]+'\n';
	}
	info.innerText = d;
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

function clearAll()
{
	allGroup = [];
	info.innerText = '';
}

function finish()
{
	window.location.href="toupiao2.html";
}

function toupiao2Init()
{
	var html = document.getElementById("maindiv").innerHTML;
	for(var i in allGroup)
	{
		html+='<div class="mui-content"> \
			<h5 class="mui-content-padded">';
	}
}
