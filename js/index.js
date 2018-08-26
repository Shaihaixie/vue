/*局部组件*/
var product={
	props:['content'],
	template:"<li>{{content.pname}}</li>"	
};






new Vue({
	/*挂载点*/
	el: "#app",
	components:{
		'product-item':product
	},
	data: {
		msg: "hello vue",
		msg2: "sssssss",
		title:"测试title",
		inputvalue:"",
		firstname:"",
		lastname:"",
		count:0,
		show:false,
		list:[1,2,3,4,5],
		data:[{pname:"手机",price:"1234"},{pname:"家电",price:"8888"}]
	
	},
	methods: {
		_click: function() {
			alert(123);

		},
		handlerClick:function(){
			this.show=!this.show;
		}

	},
	computed:{
		fullname:function(){
			return  this.firstname+""+this.lastname;
		}
	},
	watch:{
		firstname:function(){
			this.count++;
		},
		lastname:function(){
			this.count++;
		}
	}

});