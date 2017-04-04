	function strlen(str){
    var len = 0;
	    for (var i=0; i<str.length; i++) { 
		    var c = str.charCodeAt(i); //charCodeAt()用来返回指定位置的字符的Unicode编码，返回值是0-65535之间整数
		    if (c<255) { 
		       len++; 
		    } else { 
		    	len+=2; 
	     	} 
	    } 
	    console.log(len);
	    return len;
	}

	window.onload =function () {
		var aInput = document.getElementsByTagName('input');
		var text1 = aInput[0];
		var text2 = aInput[1];
		var text3 = aInput[2];
		var text4 = aInput[3];
		var text5 = aInput[4];

		var allP = document.getElementsByTagName('p');
		var tip1 = allP[0];
		var tip2 = allP[1];
		var tip3 = allP[2];
		var tip4 = allP[3];
		var tip5 = allP[4];

		var btn = document.getElementById('submit');


		////////////名称
		// 得到焦点
		text1.onfocus = function(){
			tip1.innerHTML = '必填，长度为4-16个字符';
			tip1.style.color = 'blue';
		}

		// 失去焦点
		text1.onblur =function checkName(){
			var len = strlen(text1.value);
			if (len>=4&&len<=16) {
				tip1.innerHTML = '名称格式正确';
				tip1.style.color = '#60ba49';
				text1.style.borderColor = '#60ba49';
			}else if (text1.value == '') {
				tip1.innerHTML = '名称不能为空';
				tip1.style.color = 'red';
				text1.style.borderColor = 'red';
			}else{
				tip1.innerHTML = '必填，长度为4-16个字符';
				tip1.style.color = 'blue';
				text1.style.borderColor = 'blue';
			}
		}


		//////////密码
		// 得到焦点
		text2.onfocus = function(){
			tip2.innerHTML = '必填，密码长度为4-16个字符';
			tip2.style.color = 'blue';
		}

		// 失去焦点
		text2.onblur =function checkPassword(){
			var len = strlen(text2.value);
			if (len>=4&&len<=16) {
				tip2.innerHTML = '密码可用';
				text3.removeAttribute('disabled');
				tip2.style.color = '#60ba49';
				text2.style.borderColor = '#60ba49';
			}else if (text2.value == '') {
				tip2.innerHTML = '密码不能为空';
				// text3.setAttribute('disabled');
				tip2.style.color = 'red';
				text2.style.borderColor = 'red';
			}else{
				tip2.innerHTML = '必填，密码长度为4-16个字符';
				text3.setAttribute('disabled');
				tip2.style.color = 'blue';
				text2.style.borderColor = 'blue';
			}
		}


		////////密码确认
		//得到焦点
		text3.onfocus = function(){
			tip3.innerHTML = '再次输入相同的密码';
			tip3.style.color = 'blue';
		}

		// 失去焦点
		text3.onblur =function checkPasswordAgain(){
			var len = strlen(text3.value);
			if (text2.value == text3.value) {
				tip3.innerHTML = '输入密码一致';
				tip3.style.color = '#60ba49';
				text3.style.borderColor = '#60ba49';
			}else if (text3.value == ''){
				tip3.innerHTML = '密码不能为空';
				tip3.style.color = 'red';
				text3.style.borderColor = 'red';
			}else{
				tip3.innerHTML = '输入密码不一致';
				tip3.style.color = 'red';
				text3.style.borderColor = 'red';
			}

		}


		///////////邮箱
		//得到焦点
		text4.onfocus = function(){
			tip4.innerHTML = '请输入正确的邮箱地址';
			tip4.style.color = 'blue';
		}

		// 失去焦点
		text4.onblur =function checkEmail(){
			var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
			if (reg.test(this.value)) {
				tip4.innerHTML = '邮箱地址正确';
				tip4.style.color = '#60ba49';
				text4.style.borderColor = '#60ba49';
			}else if (text4.value == ''){
				tip4.innerHTML = '邮箱地址不能为空';
				tip4.style.color = 'red';
				text4.style.borderColor = 'red';
			}else{
				tip4.innerHTML = '邮箱地址不正确';
				tip4.style.color = 'red';
				text4.style.borderColor = 'red';
			}

		}


		/////////手机
		//得到焦点
		text5.onfocus = function(){
			tip5.innerHTML = '输入正确的手机号';
			tip5.style.color = 'blue';
		}

		// 失去焦点
		text5.onblur =function checkPhone(){
			var len = strlen(text5.value);
			var reg_num = /\d/;
			if (reg_num.test(this.value)&&len == 11) {
				tip5.innerHTML = '手机号输入正确';
				tip5.style.color = '#60ba49';
				text5.style.borderColor = '#60ba49';
			}else if (text5.value == ''){
				tip5.innerHTML = '手机号不能为空';
				tip5.style.color = 'red';
				text5.style.borderColor = 'red';
			}else{
				tip5.innerHTML = '输入正确的手机号';
				tip5.style.color = 'red';
				text5.style.borderColor = 'red';
			}

		}

	btn.onclick = function(){
		if ('checkName()'&&'checkPassword()'&&'checkPasswordAgain()'&&'checkEmail()'&&'checkPhone()') {
			alert('验证通过');
		}else{
			alert('验证bu通过');
		}
	}
	}
