<?php /** 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://beta.skaffolder.com/#!/register?friend=5d35f8d6d011cc097f0543fe
*
* You will get 10% discount for each one of your friends
* 
*/
?>
<?php
	require_once './db/dbpizza_dbManager.php';
	
/*
 * SCHEMA DB cliente
 * 
	{
		apellidos: {
			type: 'String'
		},
		direccion: {
			type: 'String'
		},
		id_user: {
			type: 'Integer', 
			required : true
		},
		nombres: {
			type: 'String'
		},
		telefono: {
			type: 'String'
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/cliente',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'apellidos'	=> isset($body->apellidos)?$body->apellidos:'',
		'direccion'	=> isset($body->direccion)?$body->direccion:'',
		'id_user'	=> $body->id_user,
		'nombres'	=> isset($body->nombres)?$body->nombres:'',
		'telefono'	=> isset($body->telefono)?$body->telefono:'',
			);

	$obj = makeQuery("INSERT INTO cliente (_id, apellidos, direccion, id_user, nombres, telefono )  VALUES ( null, :apellidos, :direccion, :id_user, :nombres, :telefono   )", $params, false);

	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/cliente/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM cliente WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/cliente/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM cliente WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/cliente',	function () use ($app){
	makeQuery("SELECT * FROM cliente");
});


//CRUD - EDIT

$app->post('/cliente/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'apellidos'	    => isset($body->apellidos)?$body->apellidos:'',
		'direccion'	    => isset($body->direccion)?$body->direccion:'',
		'id_user'	    => $body->id_user,
		'nombres'	    => isset($body->nombres)?$body->nombres:'',
		'telefono'	    => isset($body->telefono)?$body->telefono:''	);

	$obj = makeQuery("UPDATE cliente SET  apellidos = :apellidos,  direccion = :direccion,  id_user = :id_user,  nombres = :nombres,  telefono = :telefono   WHERE _id = :id LIMIT 1", $params, false);

	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>