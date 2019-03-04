var check = document.getElementById("newCheck");
var allGroup=['test1','test2'];

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

function clearAll()
{
	allGroup = [];
	info.innerText = '';
}

function finish()
{
	window.location.href="toupiao2.html";
}

result = [];

function toupiao2Init()
{
	var html = document.getElementById("maindiv").innerHTML;
	for(var i in allGroup)
	{
		html+='<div class="mui-content">\
			<h5 class="mui-content-padded">';
		html+=allGroup[i];
		html+='</h5>\
			<div class="mui-card">\
				<form class="mui-input-group">\
					<div class="mui-input-row mui-radio mui-left">\
						<label>A</label>';
		html+='<input name="'+allGroup[i]+'" value="Item 1" type="radio">';
		html+='</div>\
					<div class="mui-input-row mui-radio mui-left">\
						<label>B</label>';
		html+='<input name="'+allGroup[i]+'" value="Item 1" type="radio">';
		html+='</div>\
					<div class="mui-input-row mui-radio mui-left">\
						<label>C</label>';
		html+='<input name="'+allGroup[i]+'" value="Item 1" type="radio">';
		html+='</div>\
				</form>\
			</div>';
	}
	document.getElementById("maindiv").innerHTML = html;
	for(var i in allGroup)
	{
		result.push({"A":0,"B":0,"C":0});
	}
}

function nextone()
{
	for(var i in allGroup)
	{
		var aradio = document.getElementsByName(allGroup[i]);
		if(aradio[0].checked==true)
		{
			result[i]["A"]+=1;
			aradio[0].checked=false;
		}
		else if(aradio[1].checked==true)
		{
			result[i]["B"]+=1;
			aradio[1].checked=false;
		}
		else if(aradio[2].checked==true)
		{
			result[i]["C"]+=1;
			aradio[2].checked=false;
		}
		else
		{
			mui.alert('所有项目都必须有选择', '投票失败');
			return;
		}
	}
	mui.toast('请下一个同学投票');
}

function findMax(elm)
{
	var d="A";
	if(elm["B"]>elm[d])
		d="B";
	if(elm["C"]>elm[d])
		d="C";
	return d;
}

function calu()
{
	var d = "";
	for(var i in allGroup)
	{
		d+=allGroup[i]+"："+findMax(result[i])+"\n";
	}
	document.getElementById("info").innerText = d;
}
