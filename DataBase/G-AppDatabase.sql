CREATE DATABASE  IF NOT EXISTS `galleryapp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `galleryapp`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: galleryapp
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  `total_cost` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,2,2,1,560.00),(2,4,2,1,10000.00);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_ID` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  PRIMARY KEY (`category_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Mouse'),(2,'Keyboard'),(3,'HeadSet'),(4,'Speakers');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `title` varchar(255) NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `order_date` date DEFAULT (curdate()),
  `address` varchar(255) DEFAULT NULL,
  `paymenetMethod` enum('cash','card') DEFAULT (_utf8mb4'cash'),
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,'2024-10-13','cairo','cash'),(2,2,'2024-10-13','desouq','cash');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price` int DEFAULT NULL,
  `description` text NOT NULL,
  `stock` int NOT NULL,
  `category_id` int NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `priceSale` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'6D Gamming Mouse',425,'Mouse using ergonomic design',9,1,'',400,'6D Gamming Mouse'),(2,'AULA S11 Wired Gaming Mouse',280,'Wired optical mouse with 4 keys,800/1600/2400/3600DPI,125Hz,Cable length: 1.5m ; Win XP/7/8/10/Vista/Mac',12,1,NULL,250,'AULA S11 Wired Gaming Mouse'),(3,'GAMDIAS Zeus M4 RGB Gaming Mouse 12,800 DPI + NYX E1 Mouse Pad 23.5 X 18 CM',375,'RGB streaming lighting , 13 Lighting Effects , Honeycomb Design ,6 keys for strategic assignment ,12800 DPI for pixel perfect accuracy ,Double-layer fabrics',6,1,NULL,300,'GAMDIAS Zeus M4 RGB'),(4,'Logitech G502 X Wired Gaming Mouse 25600Dpi',5000,'Brand: Logitech , Model: G502 X , Type: Wired Mouse , Mouse Resolution: 100 – 25,600 dpi , Sensor: Hero 25K , Connectivity: USB , Number of Buttons: 13 , Dimensions: 131.4 x 41.1 x 79.2mm , Color: White , Compatible With: PC & Laptop ,Warranty: 2 Years With Warranty Of The Authorized Agent',4,1,NULL,4299,'Logitech G502 X Wired'),(5,'Logitech G502 X Wired Gaming Mouse 25600Dpi',5000,'Brand: Logitech , Model: G502 X , Type: Wired Mouse , Mouse Resolution: 100 – 25,600 dpi , Sensor: Hero 25K , Connectivity: USB , Number of Buttons: 13 , Dimensions: 131.4 x 41.1 x 79.2mm , Color: White , Compatible With: PC & Laptop ,Warranty: 2 Years With Warranty Of The Authorized Agent',4,1,NULL,4299,'Logitech G502 X Wired'),(6,'Logitech G502 X Wired Gaming Mouse 25600Dpi',5000,'Brand: Logitech , Model: G502 X , Type: Wired Mouse , Mouse Resolution: 100 – 25,600 dpi , Sensor: Hero 25K , Connectivity: USB , Number of Buttons: 13 , Dimensions: 131.4 x 41.1 x 79.2mm , Color: White , Compatible With: PC & Laptop ,Warranty: 2 Years With Warranty Of The Authorized Agent',4,1,NULL,4299,'Logitech G502 X Wired'),(7,'Logitech G502 X Wired Gaming Mouse 25600Dpi',5000,'Brand: Logitech , Model: G502 X , Type: Wired Mouse , Mouse Resolution: 100 – 25,600 dpi , Sensor: Hero 25K , Connectivity: USB , Number of Buttons: 13 , Dimensions: 131.4 x 41.1 x 79.2mm , Color: White , Compatible With: PC & Laptop ,Warranty: 2 Years With Warranty Of The Authorized Agent',4,1,NULL,4299,'Logitech G502 X Wired'),(8,'AULA S11 Wired Gaming Mouse',280,'Wired optical mouse with 4 keys,800/1600/2400/3600DPI,125Hz,Cable length: 1.5m ; Win XP/7/8/10/Vista/Mac',12,1,NULL,250,'AULA S11 Wired Gaming Mouse'),(9,'GAMDIAS Zeus M4 RGB Gaming Mouse 12,800 DPI + NYX E1 Mouse Pad 23.5 X 18 CM',375,'RGB streaming lighting , 13 Lighting Effects , Honeycomb Design ,6 keys for strategic assignment ,12800 DPI for pixel perfect accuracy ,Double-layer fabrics',6,1,NULL,300,'GAMDIAS Zeus M4 RGB Gaming Mouse'),(10,'Logitech G502 X Wired Gaming Mouse 25600Dpi',5000,'Brand: Logitech , Model: G502 X , Type: Wired Mouse , Mouse Resolution: 100 – 25,600 dpi , Sensor: Hero 25K , Connectivity: USB , Number of Buttons: 13 , Dimensions: 131.4 x 41.1 x 79.2mm , Color: White , Compatible With: PC & Laptop ,Warranty: 2 Years With Warranty Of The Authorized Agent',4,1,NULL,4,'Logitech G502 X Wired'),(11,'AULA S11 Wired Gaming Mouse',280,'Wired optical mouse with 4 keys,800/1600/2400/3600DPI,125Hz,Cable length: 1.5m ; Win XP/7/8/10/Vista/Mac',12,1,NULL,250,'AULA S11 Wired Gaming Mouse'),(12,'GAMDIAS Zeus M4 RGB Gaming Mouse 12,800 DPI + NYX E1 Mouse Pad 23.5 X 18 CM',375,'RGB streaming lighting , 13 Lighting Effects , Honeycomb Design ,6 keys for strategic assignment ,12800 DPI for pixel perfect accuracy ,Double-layer fabrics',6,1,NULL,300,'GAMDIAS Zeus M4 RGB Gaming Mouse'),(13,'Logitech G502 X Wired Gaming Mouse 25600Dpi',5000,'Brand: Logitech , Model: G502 X , Type: Wired Mouse , Mouse Resolution: 100 – 25,600 dpi , Sensor: Hero 25K , Connectivity: USB , Number of Buttons: 13 , Dimensions: 131.4 x 41.1 x 79.2mm , Color: White , Compatible With: PC & Laptop ,Warranty: 2 Years With Warranty Of The Authorized Agent',4,1,NULL,4298,'Logitech G502 X Wired'),(14,'AULA S11 Wired Gaming Mouse',280,'Wired optical mouse with 4 keys,800/1600/2400/3600DPI,125Hz,Cable length: 1.5m ; Win XP/7/8/10/Vista/Mac',12,1,NULL,250,'AULA S11 Wired Gaming Mouse'),(15,'GAMDIAS Zeus M4 RGB Gaming Mouse 12,800 DPI + NYX E1 Mouse Pad 23.5 X 18 CM',375,'RGB streaming lighting , 13 Lighting Effects , Honeycomb Design ,6 keys for strategic assignment ,12800 DPI for pixel perfect accuracy ,Double-layer fabrics',6,1,NULL,300,'GAMDIAS Zeus M4 RGB Gaming Mouse'),(16,'Logitech G502 X Wired Gaming Mouse 25600Dpi',5000,'Brand: Logitech , Model: G502 X , Type: Wired Mouse , Mouse Resolution: 100 – 25,600 dpi , Sensor: Hero 25K , Connectivity: USB , Number of Buttons: 13 , Dimensions: 131.4 x 41.1 x 79.2mm , Color: White , Compatible With: PC & Laptop ,Warranty: 2 Years With Warranty Of The Authorized Agent',4,1,NULL,4298,'Logitech G502 X Wired'),(17,'AULA S11 Wired Gaming Mouse',280,'Wired optical mouse with 4 keys,800/1600/2400/3600DPI,125Hz,Cable length: 1.5m ; Win XP/7/8/10/Vista/Mac',12,1,NULL,250,'AULA S11 Wired Gaming Mouse'),(18,'GAMDIAS Zeus M4 RGB Gaming Mouse 12,800 DPI + NYX E1 Mouse Pad 23.5 X 18 CM',375,'RGB streaming lighting , 13 Lighting Effects , Honeycomb Design ,6 keys for strategic assignment ,12800 DPI for pixel perfect accuracy ,Double-layer fabrics',6,1,NULL,300,'GAMDIAS Zeus M4 RGB Gaming Mouse'),(19,'Logitech G502 X Wired Gaming Mouse 25600Dpi',5000,'Brand: Logitech , Model: G502 X , Type: Wired Mouse , Mouse Resolution: 100 – 25,600 dpi , Sensor: Hero 25K , Connectivity: USB , Number of Buttons: 13 , Dimensions: 131.4 x 41.1 x 79.2mm , Color: White , Compatible With: PC & Laptop ,Warranty: 2 Years With Warranty Of The Authorized Agent',4,1,NULL,4298,'Logitech G502 X Wired'),(20,'AULA S11 Wired Gaming Mouse',280,'Wired optical mouse with 4 keys,800/1600/2400/3600DPI,125Hz,Cable length: 1.5m ; Win XP/7/8/10/Vista/Mac',12,1,NULL,250,'AULA S11 Wired Gaming Mouse'),(21,'Aula F2088 White Squre Mechanical Gaming Keyboard',950,'Aula f2088 Mechanical Keyboard RGB Backlight Anti-ghosting Double injection keycaps Keyboard aula f2088 Adjust different lighting effect Illumination multimedia Adjust brightness and speed USB Cable color switches RGB Backlight Side LED lighting modes Full keys anti ghosting Adjust different lighting effect Adjust brightness and speed',12,2,NULL,NULL,'Aula F2088 White Squre'),(22,'Combo Compu 11',970,'AULA F3087 Mechanical Keyboard (White),Pad Mouse _30*70_Skins Mousepad (Multicolor),ABLE 6 Click Gaming Ligths USB Mouse (Multicolor)',7,2,NULL,700,'Combo Compu 11'),(23,'G613 LOGITECH KEYBOARD WIRELESS LIGHT SPEED GAMING MECHANICAL GREY DARK',4500,'A wireless keyboard of the future designed for gamers who want both the high performance features of mechanical switches and the liberty of wireless gaming.',4,1,NULL,4200,' LOGITECH KEYBOARD WIRELESS LIGHT SPEED'),(24,'Aula F2088 White Squre Mechanical Gaming Keyboard',950,'Aula f2088 Mechanical Keyboard RGB Backlight Anti-ghosting Double injection keycaps Keyboard aula f2088 Adjust different lighting effect Illumination multimedia Adjust brightness and speed USB Cable color switches RGB Backlight Side LED lighting modes Full keys anti ghosting Adjust different lighting effect Adjust brightness and speed',12,2,NULL,NULL,'Aula F2088 White Squre'),(25,'Combo Compu 11',970,'AULA F3087 Mechanical Keyboard (White),Pad Mouse _30*70_Skins Mousepad (Multicolor),ABLE 6 Click Gaming Ligths USB Mouse (Multicolor)',7,2,NULL,700,'Combo Compu 11'),(26,'G613 LOGITECH KEYBOARD WIRELESS LIGHT SPEED GAMING MECHANICAL GREY DARK',4500,'A wireless keyboard of the future designed for gamers who want both the high performance features of mechanical switches and the liberty of wireless gaming.',4,2,NULL,4200,' LOGITECH KEYBOARD WIRELESS LIGHT SPEED'),(27,'Aula F2088 White Squre Mechanical Gaming Keyboard',950,'Aula f2088 Mechanical Keyboard RGB Backlight Anti-ghosting Double injection keycaps Keyboard aula f2088 Adjust different lighting effect Illumination multimedia Adjust brightness and speed USB Cable color switches RGB Backlight Side LED lighting modes Full keys anti ghosting Adjust different lighting effect Adjust brightness and speed',12,2,NULL,NULL,'Aula F2088 White Squre'),(28,'Combo Compu 11',970,'AULA F3087 Mechanical Keyboard (White),Pad Mouse _30*70_Skins Mousepad (Multicolor),ABLE 6 Click Gaming Ligths USB Mouse (Multicolor)',7,2,NULL,700,'Combo Compu 11'),(29,'G613 LOGITECH KEYBOARD WIRELESS LIGHT SPEED GAMING MECHANICAL GREY DARK',4500,'A wireless keyboard of the future designed for gamers who want both the high performance features of mechanical switches and the liberty of wireless gaming.',4,2,NULL,4200,' LOGITECH KEYBOARD WIRELESS LIGHT SPEED'),(30,'Aula F2088 White Squre Mechanical Gaming Keyboard',950,'Aula f2088 Mechanical Keyboard RGB Backlight Anti-ghosting Double injection keycaps Keyboard aula f2088 Adjust different lighting effect Illumination multimedia Adjust brightness and speed USB Cable color switches RGB Backlight Side LED lighting modes Full keys anti ghosting Adjust different lighting effect Adjust brightness and speed',12,2,NULL,NULL,'Aula F2088 White Squre'),(31,'Combo Compu 11',970,'AULA F3087 Mechanical Keyboard (White),Pad Mouse _30*70_Skins Mousepad (Multicolor),ABLE 6 Click Gaming Ligths USB Mouse (Multicolor)',7,2,NULL,700,'Combo Compu 11'),(32,'G613 LOGITECH KEYBOARD WIRELESS LIGHT SPEED GAMING MECHANICAL GREY DARK',4500,'A wireless keyboard of the future designed for gamers who want both the high performance features of mechanical switches and the liberty of wireless gaming.',4,2,NULL,4200,' LOGITECH KEYBOARD WIRELESS LIGHT SPEED'),(33,'Headphone HYPER X CLOUD II Red Gaming',6600,'Virtual 7.1 Surround Sound,HyperX signature comfort,Advanced audio control box,Multi-platform compatibility',5,3,NULL,NULL,'Headphone HYPER X '),(34,'Bloody G350 7.1 RGB USB GAMING HEADSET',970,'G350 Headset Speaker Unit,50mm Driver Frequency Response  , 20 Hz – 20 KHz Sensitivity           105 dB Impedance  ,16 ohm Microphone Frequency',9,3,NULL,959,'Bloody G350 7.1 '),(35,'Headphone Bingo Zone N2 Sport Bluetooth SD Card colors',450,'A wireless headset of the future designed for gamers who want both the high performance  the liberty of wireless gaming.',4,3,NULL,400,'Headphone Bingo Zone N2 Sport'),(36,'Headphone HYPER X CLOUD II Red Gaming',6600,'Virtual 7.1 Surround Sound,HyperX signature comfort,Advanced audio control box,Multi-platform compatibility',5,3,NULL,NULL,'Headphone HYPER X '),(37,'Bloody G350 7.1 RGB USB GAMING HEADSET',970,'G350 Headset Speaker Unit,50mm Driver Frequency Response  , 20 Hz – 20 KHz Sensitivity           105 dB Impedance  ,16 ohm Microphone Frequency',9,3,NULL,959,'Bloody G350 7.1 '),(38,'Headphone Bingo Zone N2 Sport Bluetooth SD Card colors',450,'A wireless headset of the future designed for gamers who want both the high performance  the liberty of wireless gaming.',4,3,NULL,400,'Headphone Bingo Zone N2 Sport'),(39,'HyperX QuadCast USB Condenser Gaming Mic',6600,'Anti-Vibration shock mount  ,Tap-to-Mute sensor with LED indicator  ,Four selectable polar patterns  ,Mount adapter included  ,Convenient gain control adjustment  ,Internal pop filter  ,Built-in headphone jack  ,Multi-device and chat program compatibilit',5,4,NULL,NULL,'HyperX QuadCast'),(40,'HyperX QuadCast USB Condenser Gaming Mic',6600,'Anti-Vibration shock mount  ,Tap-to-Mute sensor with LED indicator  ,Four selectable polar patterns  ,Mount adapter included  ,Convenient gain control adjustment  ,Internal pop filter  ,Built-in headphone jack  ,Multi-device and chat program compatibilit',5,4,NULL,NULL,'HyperX QuadCast'),(41,'HyperX QuadCast USB Condenser Gaming Mic',6600,'Anti-Vibration shock mount  ,Tap-to-Mute sensor with LED indicator  ,Four selectable polar patterns  ,Mount adapter included  ,Convenient gain control adjustment  ,Internal pop filter  ,Built-in headphone jack  ,Multi-device and chat program compatibilit',5,4,NULL,NULL,'HyperX QuadCast'),(42,'HyperX QuadCast USB Condenser Gaming Mic',6600,'Anti-Vibration shock mount  ,Tap-to-Mute sensor with LED indicator  ,Four selectable polar patterns  ,Mount adapter included  ,Convenient gain control adjustment  ,Internal pop filter  ,Built-in headphone jack  ,Multi-device and chat program compatibilit',5,4,NULL,NULL,'HyperX QuadCast'),(43,'HyperX QuadCast USB Condenser Gaming Mic',6600,'Anti-Vibration shock mount  ,Tap-to-Mute sensor with LED indicator  ,Four selectable polar patterns  ,Mount adapter included  ,Convenient gain control adjustment  ,Internal pop filter  ,Built-in headphone jack  ,Multi-device and chat program compatibilit',5,4,NULL,NULL,'HyperX QuadCast'),(44,'HyperX QuadCast USB Condenser Gaming Mic',6600,'Anti-Vibration shock mount  ,Tap-to-Mute sensor with LED indicator  ,Four selectable polar patterns  ,Mount adapter included  ,Convenient gain control adjustment  ,Internal pop filter  ,Built-in headphone jack  ,Multi-device and chat program compatibilit',5,4,NULL,NULL,'HyperX QuadCast'),(45,'HyperX QuadCast USB Condenser Gaming Mic',6600,'Anti-Vibration shock mount  ,Tap-to-Mute sensor with LED indicator  ,Four selectable polar patterns  ,Mount adapter included  ,Convenient gain control adjustment  ,Internal pop filter  ,Built-in headphone jack  ,Multi-device and chat program compatibilit',5,4,NULL,NULL,'HyperX QuadCast'),(46,'HyperX QuadCast USB Condenser Gaming Mic',6600,'Anti-Vibration shock mount  ,Tap-to-Mute sensor with LED indicator  ,Four selectable polar patterns  ,Mount adapter included  ,Convenient gain control adjustment  ,Internal pop filter  ,Built-in headphone jack  ,Multi-device and chat program compatibilit',5,4,NULL,NULL,'HyperX QuadCast'),(47,'phone',120,'description',12,4,NULL,NULL,'smart '),(48,'phone',120,'description',12,4,NULL,NULL,'smart '),(51,'gallery',1200,'description',16,1,'product-avatar-image1729086161653-d3315526-0658-4c32-9132-997b3904685f.jpeg',NULL,'test server '),(52,'gallery',1200,'description',16,1,NULL,NULL,'test server '),(53,'gallery',1200,'description',16,1,'product-avatar-image1729087623791-123fc9c7-dfb6-4a1b-9942-8d785d41fd5d.jpeg',NULL,'test server '),(54,'gallery',1200,'description',16,1,'http://localhost:4000/product/images/product-avatar-image1729087844440-e15b2924-3cd6-4522-819b-1df48f08d45d.jpeg',NULL,'test server kkkk0000000000'),(55,'gallery',1200,'description',16,1,'http://localhost:4000/product/images/product-avatar-image1729089492908-fa875502-ce9c-4d21-8d55-d1c2c363dec3.jpeg',NULL,'test server kkkk0000000000'),(56,'gallery',1200,'description',16,1,'http://localhost:4000/product/images/product-avatar-image1729089608487-e5922263-339f-40c6-9ed3-6ed56f746c9e.jpeg',NULL,'test server kkkk0000000000');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phones` json NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` enum('male','female') NOT NULL,
  `role` enum('manager','admin','cunsumer') DEFAULT 'cunsumer',
  `profileImg` varchar(255) DEFAULT NULL,
  `birthdate` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Adham Torky','adhamtorky64@gmail.com','[\"01008166929\", \"01066377396\"]','$2b$09$QqLvmiGpYgjG8YKON0zNRuc296zOacv6WrjMfin1CQABiRyy1IcnG','male','cunsumer',NULL,NULL,'adham-torky','2024-10-06 00:51:41','2024-10-06 00:51:41'),(2,'Adham Torky','adhamtork@gmail.com','[\"01008166929\", \"01066377396\"]','$2b$09$3exWLYBpniXNetrYg5AoTOb3N2rroPUAbRFLSoydL2btRA/.KCoam','male','cunsumer',NULL,NULL,'adham-torky','2024-10-06 01:22:42','2024-10-06 01:22:42'),(3,'Adham Torky','adhamtor@gmail.com','[\"01008166929\", \"01066377396\"]','$2b$09$p6LGRi0DuNolOIT4zRnfE.f5S2gjExj2puzSHy67sW6J3JAR3U14q','male','cunsumer',NULL,NULL,'adham-torky','2024-10-06 01:24:07','2024-10-06 01:24:07'),(4,'Adham Torky','adhamtr@gmail.com','[\"01008166929\", \"01066377396\"]','$2b$09$1HPBjZ/bstw6yUjfT4kTwOqx4FlkjqKul35kDvXy0QRiOtVoF6OCC','male','cunsumer',NULL,NULL,'adham-torky','2024-10-06 01:24:15','2024-10-06 01:24:15'),(5,'Adham Torky','adhamt@gmail.com','[\"01008166929\", \"01066377396\"]','$2b$09$G83DVyfRl3zm0TdUQyffue4W8Ts99FnoDHz75C7hftMdzcaNcDV9u','male','cunsumer',NULL,NULL,'adham-torky','2024-10-06 01:24:52','2024-10-06 01:24:52'),(6,'Adham Torky','adhat@gmail.com','[\"01008166929\", \"01066377396\"]','$2b$09$SHLcZ.7qBqOh5.wbJncqAe211M3dxtqoxjee2FowhtzGk5XHQ7afW','male','cunsumer',NULL,NULL,'adham-torky','2024-10-06 01:25:13','2024-10-06 01:25:13'),(7,'Adham Torky','adht@gmail.com','[\"01008166929\", \"01066377396\"]','$2b$09$W2GE0U/j6y6XAOT.AX0V4OsM2/jBmeWsi7cAk4OqWUJqArUp7JBCW','male','cunsumer',NULL,NULL,'adham-torky','2024-10-06 01:25:28','2024-10-06 01:25:28'),(8,'Adham Torky','adhamtorky6k4@gmail.com','[\"01008166929\", \"01066377396\"]','$2b$09$M9z77EePTIJis2H1RkXAt.HbQzgBo9yQbkcsvWSEYKv.NydxxnBFC','male','cunsumer',NULL,NULL,'adham-torky','2024-10-06 23:06:50','2024-10-06 23:06:50'),(9,'Adham Torky','adhamtorkykkkk64@gmail.com','[\"01008166929\", \"01066377396\"]','$2b$09$Vg/YZ.hj7BRI3pTfCYi2qux1.89erISR5WNs3tKHVahGPA0aM9BG.','male','cunsumer',NULL,NULL,'adham-torky','2024-10-06 23:24:22','2024-10-06 23:24:22'),(11,'Adham Saed','mladham92@gmail.com','[\"01066377396\", \"01008166929\"]','$2b$09$Ct2Hhu/OXrBry4QEdqeDDuOMJU3sTYb2nxBdMq3B0QHSmOrSlSNqu','male','cunsumer',NULL,NULL,'adham-saed','2024-10-24 09:32:57','2024-10-24 09:32:57');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-24 19:50:27
