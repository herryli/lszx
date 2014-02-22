<?php
defined('IN_PHPCMS') or exit('No permission resources.');
pc_base::load_sys_class('hook','','0');
class calculator extends hook{
	Final static function admin_top_left_menu(){
		return '<a href="javascript:art.dialog({id:\'calculator\',iframe:\'http://www.soso.com/z.q?w=计算器&of=wq\', title:\''.pluginlang('calculator','','calculator').'\', width:\'390\', height:\'200\', lock:true});void(0);"><span>计算器</span></a>';
	}

}
?>