//console.log("模块m1文件加载了");
 const a = 12;
 let b = 10;
 const c = 'test'
 export {
	 a,
	 b,
	 c
 }
 export default 12;//只有default的，文件引入的时候不加{}