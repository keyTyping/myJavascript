## 项目中使用的ECMAScript6语法总结

```
    1、对象的写法
        es5中对象： {add:add,substrict:substrict}
        es6中对象： {add,substrict}  注意这种写法的属性名称和值变量是同一个名称才可以简写，否则要想es5那样的写法,例如： {addFun:add}

    2、在对象中的方法的写法
        es5中对象： {add:function(){},substrict:function(){}}
        es6中对象： {add(){},substrict(){}}
    
    3、对象的导出写法
         es5两种形式：
         1、module.exports = fucntion (){};
         2、exprots.add =  fucntion (){};

        es6中写法：
        1、export default{
            add(){}
        }
        2、export fucntion add(){} 相当于 将add方法当做一个属性挂在到exports对象


    4、对象的导入
        es5: var add  = require('./calc.js');
        es6:
        如果导出的是：export default{ add(){}}
        那么可以通过  import obj from './calc.js'

        如果导出的是：
        export fucntion add(){} 
        export fucntion substrict(){} 
        export const PI=3.14

        那么可以通过按需加载 import {add,substrict,PI} from './calc.js'

    5、es6中的箭头函数的写法
        箭头的演变过程：
        //需求：利用函数实现倒序排列
        [2,1,3].sort(function(x,y){return y - x;});
    
        //用箭头函数实现 =>读 goes to
        [2,1,3].sort((x,y)=>{return y - x;});
        [2,1,3].sort((x,y)=> {x++;y++; y - x;});
        [2,1,3].forEach(x=> {console.log(x)});
```
