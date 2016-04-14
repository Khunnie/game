//命名
function $(selector,content){
	if(selector.charAt(0)==='#'){
		return document.getElementById(selector.substring(1))
	}else{
		var m=content || document;
		return m.getElementsByTagName(selector);
	}
}
function getStyle( obj,attr ){
	if( obj.currentStyle ){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj)[attr];
	}
}
//运动函数
function doMove(obj,attr,target,speed,callBack){
	var cur = parseInt( getStyle(obj,attr) );
	speed = cur < target ? Math.abs(speed) : -Math.abs(speed);
	clearInterval(obj.timer);  //先清除，在开启
	obj.timer = setInterval(function (){
		cur += speed;
		if(  cur >= target && speed > 0 ||  cur <= target && speed < 0){
			clearInterval(obj.timer);
			obj.timer = null;
			cur = target;
			obj.style[attr] = cur + "PX";	
			typeof callBack === "function" &&　callBack();
		}else{
			obj.style[attr] = cur + "PX";	
		}

		
	},30);
};
//抖动
function shake(obj,attr,speed,callBack){
	//如果这个元素身上已经有定时器开着，那么下面代码就不执行了
	if( obj.timer ) return;
	var cur = parseInt(getStyle(obj,attr)); //找到元素的起始位置
	var arr = [];
	for( var i = speed; i > 0 ; i-=3 ){
		arr.push(-i,i);
	}
	arr.push(0);
	var n = 0;
	obj.timer = setInterval(function (){
		obj.style[attr] = arr[n]+cur + "px";
		n++;
		if( n >= arr.length ){
			clearInterval(obj.timer);
			obj.timer = null;
			if(typeof callBack === "function"){
				callBack();
			}
		}
	},30)	
}
//indexof
function indexOf(a,b,c){
	c=c||0;
	for(var i=c;i<arr.length;i++){
			if(a[i]== b){
				return i;
			}
		}
	return  -1;
}