import React, { useState } from 'react'
import style from './JSFunction.scss'

const JSMethods = [
    'JavaScript call() 方法',
    'JS表单实例',
]

export default function JSFunction() {

    const [showForm, setShowForm] = useState(false);

    function didClick(index) {
        console.log('value :', JSMethods[index]);
        // JS call方法
        if (index == 0) {
            jsCallMethod()
        }
        else if (index == 1) {
            setShowForm(true)
        }

    }
    //JavaScript call() 方法
    function jsCallMethod() {
        /** 
         * 函数是对象的方法,如果一个函数不是JS对象的方法,那么它就是全局对象的函数
         * 
         * call() 方法是预定义的 JavaScript 方法
         * 它可以用来调用所有者对象作为参数的方法。
        通过 call()，您能够使用属于另一个对象的方法。
        本例调用 person 的 fullName 方法，并用于 person1：
         */

        var person = {
            fullName: function () {
                return this.firstName + " " + this.lastName;
            },

            addressName: function (city, country) {
                return this.firstName + " " + this.lastName + "," + city + "," + country
            }
        }

        var person1 = {
            firstName: "Bill",
            lastName: "Gates",
        }
        var person2 = {
            firstName: "Steve",
            lastName: "Jobs",
        }

        // 输出:Bill Gates
        console.log(person.fullName.call(person1));

        // 2.带参数的 call() 方法 call() 方法可接受参数：
        // 输出:Bill Gates,上海,中国
        console.log(person.addressName.call(person1, '上海', '中国'));

    }


    /**
     * 验证表单的值
     */
    function validateForm(e) {
        // 获取表单中的值
        let name = document.forms['test']['name'].value
        let age = document.forms['test']['age'].value

        console.log('name:', name, 'age:', age);
        if (!name || name.length < 1 || !age || age.length < 1) {
            alert('参数不完整')
            // 阻止表单提交数据
            e.preventDefault();
            return false
        }
    }




    return <div className={style.jsFunction}>
        {
            JSMethods.map((value, index) => {
                return <button className={style.button} onClick={() => { didClick(index) }} key={index}>{value}</button>
            })
        }
        {
            showForm && <div className={style.testForm}>
                <form name='test' action='submit/login.m' onSubmit={validateForm} method='POST'>
                    <div>
                        姓名:<input type='text' name='name' />
                    </div>
                    <div >
                        年龄:<input type='text' name='age' />
                    </div>
                    <div >
                        <input type='submit' value='提交' />
                    </div>

                </form>
            </div>
        }
    </div>
}