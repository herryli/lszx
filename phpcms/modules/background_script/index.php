<?php
defined('IN_PHPCMS') or exit('No permission resources.');
defined('NEW_URL','localhost');
defined('DOMAIN_NAME','cdylw.com');
/**
 * index 是后台修改数据库URL的class.
 *
 * @property yp_company_model $yp_company_db 黄页企业模型class.
 * @property member_model member_db  会员模型
 * @author lihai 
 * @version 1.0
 * @package lszx.phpcms.modules.background_script
 */

class index{
	private $yp_company_db;
	private $member_db;
	
	public function __construct(){
		pc_base::load_app_func('global','background_script');
		$this->yp_company_db = pc_base::load_model('yp_company_model');
		$this->member_db = pc_base::load_model('member_model');
	}
	
	/**
	 * 修改yp_company表的menu、logo、url字段.
	 * @return string 修改成功地条数和修改后的URL.
	 */
	public function update_company(){
		
		$res = $this->yp_company_db->select('','*',200);
		$url_rule = pc_base::load_config('urlRule');
		$url_path =pc_base::load_config('system','url_path');
		
		foreach($res as $key => $val){
			$userid = $val['userid'];
			$member = $this->member_db->get_one(array('userid'=>$userid));
			$username = $member['username'];
			
			$menu = string2array($val['menu']);
			$data = $menu['catname'];
			$res_menu = disposeArrayUrl($data,$userid,$url_rule,$username,$url_path);
			$menu['catname'] = $res_menu;
			$menu = array2string($menu);
			
			if(!$this->yp_company_db->update(array('menu'=>$menu),array('userid'=> $userid))){
				echo "error";
			}
		}
		
		
	}
}