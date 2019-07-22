--
-- Database: `pizza_db`
--

CREATE DATABASE IF NOT EXISTS `pizza_db`;
USE `pizza_db`;


-- ENTITIES

--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`password` varchar(130)  NOT NULL,
	`roles` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

INSERT INTO `pizza_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `pizza_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);





--
-- Struttura della tabella `cliente`
--

CREATE TABLE IF NOT EXISTS `cliente` (
	`apellidos` varchar(130) ,
	`direccion` varchar(130) ,
	`id_user` int  NOT NULL,
	`nombres` varchar(130) ,
	`telefono` varchar(130) ,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `pedidos`
--

CREATE TABLE IF NOT EXISTS `pedidos` (
	`direccion` varchar(130) ,
	`estado` varchar(130) ,
	`fecha` date ,
	`id_cliente` int  NOT NULL,
	`id_producto` int  NOT NULL,
	`total` int ,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
	`cantidad` int ,
	`descripcion` varchar(130) ,
	`nombre` varchar(130) ,
	`precio` decimal(6,2) ,
	`stock` int ,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);






