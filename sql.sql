/*
SQLyog Professional v12.5.1 (64 bit)
MySQL - 8.0.12 : Database - minibook
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`minibook` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `minibook`;

/*Table structure for table `memo` */

DROP TABLE IF EXISTS `memo`;

CREATE TABLE `memo` (
  `id` int(100) NOT NULL AUTO_INCREMENT COMMENT '备忘录ID',
  `userId` varchar(100) DEFAULT NULL COMMENT '用户ID',
  `time` varchar(50) DEFAULT NULL COMMENT '时间',
  `text` varchar(256) DEFAULT NULL COMMENT '内容',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Table structure for table `notice` */

DROP TABLE IF EXISTS `notice`;

CREATE TABLE `notice` (
  `id` int(50) NOT NULL COMMENT '公告ID',
  `text` varchar(256) DEFAULT NULL COMMENT '公告内容',
  `time` varchar(100) DEFAULT NULL COMMENT '公告时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Table structure for table `proposal` */

DROP TABLE IF EXISTS `proposal`;

CREATE TABLE `proposal` (
  `id` int(50) NOT NULL AUTO_INCREMENT COMMENT '建议ID',
  `userId` varchar(100) DEFAULT NULL COMMENT '用户ID',
  `text` varchar(256) DEFAULT NULL COMMENT '建议',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Table structure for table `time` */

DROP TABLE IF EXISTS `time`;

CREATE TABLE `time` (
  `id` int(100) NOT NULL AUTO_INCREMENT COMMENT '时光机ID',
  `userId` varchar(100) DEFAULT NULL COMMENT '用户ID',
  `time` varchar(50) DEFAULT NULL COMMENT '时间',
  `text` varchar(256) DEFAULT NULL COMMENT '内容',
  `type` varchar(5) DEFAULT NULL COMMENT '时光机类型',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(50) NOT NULL AUTO_INCREMENT COMMENT '表ID',
  `userId` varchar(100) NOT NULL COMMENT '用户ID',
  `openId` varchar(100) NOT NULL COMMENT 'openID',
  `lv` int(5) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
