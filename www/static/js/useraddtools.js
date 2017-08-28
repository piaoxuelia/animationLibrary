$(function(){

	ejs.open = "{%";
	ejs.close = "%}";

	//获取分类信息接口地址
	var cateUrl = "addtool/getcate?";

	//存储接口
	var storeToolsUrl = "addtool/store";


	function showCate(data){
		var html;
		var cont = $('#cate-tmpl').html();
		var list = data.data;
		html = ejs.compile(cont)(list, {
			compileDebug: true
		});
		var dom = $(html);
		
		$("#cate").html(dom);
		
	}
	getData(cateUrl,'',showCate);
	var timer = null;

	/* 错误提示 */
	function showErr(str){
		errTips.text(str);
		clearTimeout(timer);
 		timer = setTimeout(function(){
 			errTips.text('');
 		},4000);
	}
	/* 验证邮箱 */
	function isEmail(str){
		var myreg = /^([a-zA-Z0-9]+[_|\_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
		return myreg.test(str);
	}

	var formWrap = $('#tb'),
		errTips = $(".js-errerTxt");
	var texts =  $('.form-control'),
		textsLen = $('.form-control').length;

	var commData = {
		toolName:"",
		url:"",
		cateId:[],
		profile:'',
		email:''
	}

	formWrap.on('click','.js-submit',function(){

		/* 提交时验证
		* 所有输入框都是必填，验证工具地址和邮箱
		* 获得所有
		*/
		var isWork = true;
		for (var i = 0; i<textsLen; i++){
			var curText = texts.eq(i);
			var _val =$.trim(curText.val());
			if(!_val){
				showErr(curText.data("name")+'不能为空');
				isWork = false;
				break;
			}else{
				var _name = curText.data("name");
				if(_name == '工具地址'){
					if(!/^http:/.test(_val)&&!/^https:/.test(_val)){
						showErr('请输入规范的工具地址以便能够访问~');
						isWork = false;
						break;
					}
				}else if(_name == '邮箱地址'){
					if(!isEmail(_val)){
						showErr('请输入规范的邮箱地址');
						isWork = false;
						break;
					}
				}else if(_name == '工具名称'){
					if(_val.length>25){
						showErr('工具名称不能多于25个字');
						isWork = false;
						break;
					}
				}
				commData[curText.data("id")] = _val;
			}
		}

		if(!isWork){
			return false;
		}

		commData.cateId = [];
		/* 循环取得工具分类 */
		var _num = 0;
		$('input[type=checkbox]').each(function(){
			if($(this).prop('checked')==true){
				commData.cateId.push($(this).data('cateid'));
				_num++;
			}
		})
		
		/* 工具分类无数据提示 */
		if(!_num){
			showErr('请勾选工具所属分类');
			return false;
		}
		commData.cateId = commData.cateId.join(',');
		getData(storeToolsUrl, commData, function(data){
			if(data.errno == 0){
				$(".table-wrap").html('<div class="shenhe-tips"><p><img src="http://p6.qhimg.com/t01305294853aaab385.png" width="30"><span>添加成功!</span></p><p class="shenhe-tips-bot"><a href="addtool">继续添加工具</a></p></div>');
			}else{
				$(".table-wrap").html('<div class="shenhe-tips">'+data.errmsg+'<p class="shenhe-tips-bot"><a href="addtool">重新添加工具</a></p></div>');
			}
		})
	})

	/* 失去焦点，验证 */
	formWrap.on('blur','.form-control',function(){
		var me = $(this);
		var _val =$.trim(me.val());
		if(!_val){
			showErr(me.data("name")+'不能为空哦~')
		}else{
			var _name = me.data("name");
			if(_name == '工具地址'){
				if(!/^http:\/\/.+/.test(_val)&&!/^https:\/\/.+/.test(_val)){
					showErr('请输入规范的工具地址以便能够访问~');
				}
			}else if(_name == '邮箱地址'){
				if(!isEmail(_val)){
					showErr('请输入规范的邮箱地址');
				}
			}else if(_name == '工具名称'){
				if(_val.length>25){
					showErr('工具名称不能多于25个字');
				}
			}
		}
	})

	formWrap.on('focus','.form-control',function(){
		showErr('');
	})
})