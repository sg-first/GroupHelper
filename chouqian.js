var info = document.getElementById("info");

function rand(num)
{
	return Math.floor(Math.random()*num+1);
}

function chouqian()
{
	var num = document.getElementById("number").value;
	if(num == "")
	{
		mui.alert('请输入学号末尾', '抽签结果');
	}
	else
	{
		num = parseInt(num);
		var result = rand(num);
		mui.alert(result.toString(), '抽签结果');
	}
}
