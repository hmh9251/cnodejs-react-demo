/**
 * action类型
 */

 export const SHOW_HOME_LIST = "SHOW_HOME_LIST";

 /**
  * 创建函数
  */

  export function showHomeList(list) {
    return {
      type: SHOW_HOME_LIST,
      list
    }
  }