<?php 
/**
 * @param  array $data 菜单URL数组
 * @param  int   $userid 用户ID
 * @param  array $url_rule
 * @param  string $username; 用户登录名，用来生成二级域名
 * @param  string $url_path;
 * @return array $result; 修改后的URL
 */
function disposeArrayUrl($data = Array(),$userid=0,$url_rule=array(),$username='',$url_path=''){
	foreach($data as $key => $val){
		$new_url = "http://".$username.".".$url_path.$url_rule[$val['id']]['url'].$userid;
		$data[$key]['linkurl'] = $new_url;
	}
	return $data;
}

?>