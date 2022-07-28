// 定义表单验证插件

import validator from "validator";
import { isEmpty } from "lodash";
// console.log(isEmpty);

const validatorInput = (data) =>{
  console.log(data);
  /***
   * isEmpty，此方法用于验证是否为空
   */
  let errors = {}

  if(validator.isEmpty(data.username)){
    errors.username = "用户名不能为空"
  }
  if(validator.isEmpty(data.password)){
    errors.password = "密码不能为空"
  }
  return {
    // 如果value为空，那么返回true，否则返回false
   
    isValid:!isEmpty(errors),
    errors
  }
}
export default validatorInput