'use strict';
import uuap from 'uuap';
const administrator = ["luyuewen", "liuyingying","huangjiaolong"];
export default class extends think.controller.base {
  /**
   * some base method in here
   */
  
  async checkAuthor(data){

		let userInfo = await uuap.getUserInfo(this.http.req, this.http.res);
		let logout = data.get("logout");

		if(logout){
			let corrLogout = uuap.logout(data.http.req, data.http.res);
			if(corrLogout){
				this.redirect("/")
			}
		}
		if(administrator.indexOf(userInfo.userName) !== -1){
			return userInfo;
		}else{
			this.redirect("/")
		}
	}
}