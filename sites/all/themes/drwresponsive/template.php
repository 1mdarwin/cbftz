<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */
/*
	The next function is for alter the forms like as textbox
*/

function drwresponsive_form_alter(&$form, &$form_state, $form_id ){
	switch ($form_id) {
		case 'user_login_block':
			# code...
			$form['name']['#attributes']['placeholder'] = t('Username...');
			$form['pass']['#attributes']['placeholder'] = t('Password...');
			break;
		case 'search_block_form':
			$form['search_block_form']['#attributes']['placeholder'] = t('Search...');
			$form['search_block_form']['#attributes']['id'] = t('#search_box');
			break;
		
		default:
			# code...
			break;
	}

}
