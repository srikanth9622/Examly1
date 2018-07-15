/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.57-0ubuntu0.14.04.1 : Database - pos
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `m_item` */

DROP TABLE IF EXISTS `m_item`;

CREATE TABLE `m_item` (
  `product_id` varchar(6) NOT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `price` int(14) DEFAULT '0',
  `gst` varchar(4) DEFAULT 'PCS',
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `unik` (`product_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*Data for the table `m_item` */

insert  into `m_item`(`product_id`,`product_name`,`price`,`gst`) values ('PB0001','Razor Blade','best razor blade in the world',8.00,12000,'PCS');
insert  into `m_item`(`product_id`,`product_name`,`price`,`gst`) values ('PB0002','Muscle Face','for build body',10.00,50000,'PCS');
insert  into `m_item`(`product_id`,`product_name`,`price`,`gst`) values ('PB0007','GALAXY NOTE 1','test 1 2 3 4 5 6',5.00,5000,'PCS');

/*Table structure for table `m_user` */

DROP TABLE IF EXISTS `m_user`;

CREATE TABLE `m_user` (
  
  `username` varchar(20) NOT NULL,
  `pass_user` char(50) NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `NewIndex1` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

/*Data for the table `m_user` */

insert  into `m_user`(`username`,`pass_user`) values (6,'ADMIN','202cb962ac59075b964b07152d234b70','1,2,3','58f72048cc33114');
insert  into `m_user`(`username`,`pass_user`) values (7,'HENZ','202cb962ac59075b964b07152d234b70','1,3',NULL);
insert  into `m_user`(`username`,`pass_user`) values (8,'ROBIN','202cb962ac59075b964b07152d234b70','1,2',NULL);

