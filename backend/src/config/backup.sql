-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article_photos`
--

DROP TABLE IF EXISTS `article_photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article_photos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `article_id` int NOT NULL,
  `seller_id` int NOT NULL,
  `url` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `article_photos_article_id_index` (`article_id`),
  KEY `article_photos_seller_id_index` (`seller_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_photos`
--

LOCK TABLES `article_photos` WRITE;
/*!40000 ALTER TABLE `article_photos` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_tags`
--

DROP TABLE IF EXISTS `article_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article_tags` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `article_id` int unsigned NOT NULL,
  `tag_id` int unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `article_tags_article_id_foreign` (`article_id`),
  KEY `article_tags_tag_id_foreign` (`tag_id`),
  CONSTRAINT `article_tags_article_id_foreign` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `article_tags_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_tags`
--

LOCK TABLES `article_tags` WRITE;
/*!40000 ALTER TABLE `article_tags` DISABLE KEYS */;
INSERT INTO `article_tags` VALUES (1,1,1,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(2,1,4,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(3,2,1,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(4,2,16,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(5,3,2,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(6,3,16,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(7,4,2,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(8,4,15,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(9,5,9,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(10,5,17,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(11,6,9,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(12,6,18,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(13,7,8,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(14,7,19,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(15,8,8,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(16,8,15,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(17,9,7,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(18,9,20,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(19,10,7,'2025-01-07 19:12:42','2025-01-07 19:12:42'),(20,10,15,'2025-01-07 19:12:42','2025-01-07 19:12:42');
/*!40000 ALTER TABLE `article_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `seller_id` int unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `amount` int NOT NULL,
  `price` double DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `rating` float(8,2) NOT NULL DEFAULT '0.00',
  `category_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `articles_seller_id_foreign` (`seller_id`),
  KEY `articles_category_id_foreign` (`category_id`),
  CONSTRAINT `articles_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  CONSTRAINT `articles_seller_id_foreign` FOREIGN KEY (`seller_id`) REFERENCES `sellers` (`id`) ON DELETE CASCADE,
  CONSTRAINT `articles_chk_1` CHECK ((`rating` between 0 and 5))
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,1,'Laptop',10,999.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.50,1),(2,1,'Smartphone',15,699.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.70,1),(3,1,'Smartphone',15,699.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.70,2),(4,1,'Smartphone',15,699.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.70,3),(5,1,'Smartphone',15,699.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.70,4),(6,1,'Smartphone',15,699.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.70,5),(7,1,'Smartphone',15,699.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.70,6),(8,2,'T-shirt',50,19.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.30,2),(9,2,'Jeans',30,49.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.10,2),(10,3,'Novel Book',100,9.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.80,3),(11,3,'Textbook',70,29.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.40,3),(12,4,'Blender',25,89.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.60,4),(13,4,'Microwave',10,149.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.50,4),(14,5,'Action Figure',40,14.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.90,5),(15,5,'Board Game',20,39.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.80,5),(16,6,'Lipstick',60,12.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.70,6),(17,6,'Perfume',25,49.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.60,6),(18,7,'Vitamins',100,19.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.80,7),(19,7,'Protein Powder',50,29.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.70,7),(20,8,'Car Battery',15,99.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.30,8),(21,8,'Car Tires',30,199.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.40,8),(22,9,'Garden Hose',40,24.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.50,9),(23,9,'Lawn Mower',10,299.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.60,9),(24,10,'Basketball',30,19.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.80,10),(25,10,'Tennis Racket',20,49.99,'2025-01-07 19:12:42','2025-01-07 19:12:42',4.70,10);
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Electronics','2025-01-07 19:12:42','2025-01-07 19:12:42'),(2,'Clothing','2025-01-07 19:12:42','2025-01-07 19:12:42'),(3,'Books','2025-01-07 19:12:42','2025-01-07 19:12:42'),(4,'Home Appliances','2025-01-07 19:12:42','2025-01-07 19:12:42'),(5,'Toys','2025-01-07 19:12:42','2025-01-07 19:12:42'),(6,'Beauty','2025-01-07 19:12:42','2025-01-07 19:12:42'),(7,'Health','2025-01-07 19:12:42','2025-01-07 19:12:42'),(8,'Automotive','2025-01-07 19:12:42','2025-01-07 19:12:42'),(9,'Garden','2025-01-07 19:12:42','2025-01-07 19:12:42'),(10,'Sports','2025-01-07 19:12:42','2025-01-07 19:12:42'),(11,'Furniture','2025-01-07 19:12:42','2025-01-07 19:12:42'),(12,'Groceries','2025-01-07 19:12:42','2025-01-07 19:12:42'),(13,'Pet Supplies','2025-01-07 19:12:42','2025-01-07 19:12:42'),(14,'Music','2025-01-07 19:12:42','2025-01-07 19:12:42'),(15,'Movies','2025-01-07 19:12:42','2025-01-07 19:12:42'),(16,'Tools','2025-01-07 19:12:42','2025-01-07 19:12:42'),(17,'Stationery','2025-01-07 19:12:42','2025-01-07 19:12:42'),(18,'Luggage','2025-01-07 19:12:42','2025-01-07 19:12:42'),(19,'Gaming','2025-01-07 19:12:42','2025-01-07 19:12:42'),(20,'Art','2025-01-07 19:12:42','2025-01-07 19:12:42');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations`
--

DROP TABLE IF EXISTS `knex_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations`
--

LOCK TABLES `knex_migrations` WRITE;
/*!40000 ALTER TABLE `knex_migrations` DISABLE KEYS */;
INSERT INTO `knex_migrations` VALUES (1,'20241002142315_add_users_table.ts',1,'2025-01-07 19:10:17'),(2,'20241025173837_add_user_role_to_users.ts',1,'2025-01-07 19:10:17'),(3,'20241107075840_add_sellers_table.ts',1,'2025-01-07 19:10:17'),(4,'20241107080656_add_articles_table.ts',1,'2025-01-07 19:10:18'),(5,'20241110114303_add_categories_table.ts',1,'2025-01-07 19:10:18'),(6,'20241110114824_link_categories_to_articles.ts',1,'2025-01-07 19:10:18'),(7,'20241116180050_create_article_photos_table.ts',1,'2025-01-07 19:10:18'),(8,'20241124125253_add_tags_article_tags_tables.ts',1,'2025-01-07 19:10:18'),(9,'20241207132745_delete_values_in_tags.ts',1,'2025-01-07 19:10:18');
/*!40000 ALTER TABLE `knex_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations_lock`
--

DROP TABLE IF EXISTS `knex_migrations_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations_lock` (
  `index` int unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations_lock`
--

LOCK TABLES `knex_migrations_lock` WRITE;
/*!40000 ALTER TABLE `knex_migrations_lock` DISABLE KEYS */;
INSERT INTO `knex_migrations_lock` VALUES (1,0);
/*!40000 ALTER TABLE `knex_migrations_lock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sellers`
--

DROP TABLE IF EXISTS `sellers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sellers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `billing_info` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sellers_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sellers`
--

LOCK TABLES `sellers` WRITE;
/*!40000 ALTER TABLE `sellers` DISABLE KEYS */;
INSERT INTO `sellers` VALUES (1,'Shop A','shopA@example.com','$2a$10$ZF.MWIsVFM5ydtubMnLife08ea9YGjJeeUeTd2MIPcQXQSh26NCVK','1234-5678-9012-3456','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(2,'Shop B','shopB@example.com','$2a$10$Gi03U7oaYcz1M0ZuuHqqC.T97ML2TQwdlHVisUayal1hg494JrheW','2345-6789-0123-4567','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(3,'Shop C','shopC@example.com','$2a$10$rGwZJQxSTRd3tJIEKkbDAu3CCB2Eg7NjnzErn5vCLBbo7ZMpSv8F2','3456-7890-1234-5678','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(4,'Shop D','shopD@example.com','$2a$10$BBDFhiLHwioQiv3qMOfmIuKWQ2/tvqB4KScUht4wDFlyZ5bgdL7Z2','4567-8901-2345-6789','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(5,'Shop E','shopE@example.com','$2a$10$fRn1ooQZQH/r49nfV67yQuV4kDOczuySqDroFA5OjZ9KlkILK8XaK','5678-9012-3456-7890','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(6,'Shop F','shopF@example.com','$2a$10$9qhrIu0zEKMy/Y2c2kJ0iupVxV1rY4h0.wdxa0UpLs5UTIrqNVDxK','6789-0123-4567-8901','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(7,'Shop G','shopG@example.com','$2a$10$NRuGz.lwiit0FXEZ5N4fuOqxXOF7M4zzENv1nnyc//gQsVA2rwc72','7890-1234-5678-9012','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(8,'Shop H','shopH@example.com','$2a$10$cUQb1UhVpOP6Rm86r6.mqeKzH6QnsQp6MDfobvsWxxl7/4Of9AGpu','8901-2345-6789-0123','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(9,'Shop I','shopI@example.com','$2a$10$m3fEp.FM6YBZAcOSWG0jSekqhGWswXyNowdjunUldyUoZ5zjRsoHm','9012-3456-7890-1234','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(10,'Shop J','shopJ@example.com','$2a$10$jU85WVXKKSt49YRHVF3BTuEZH5OSe8Mj3kFwE1rfvbRlBs4FS5I4G','0123-4567-8901-2345','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(11,'Shop K','shopK@example.com','$2a$10$dJH5m69dJDfc0Jq.qUj4X.qdD/qiwmWyJ.R4c2H4/xsYoTxfE1uAm','3456-7890-1234-5678','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(12,'Shop L','shopL@example.com','$2a$10$gdTr6YqkmYZ7L7qJsiqV/O414.7erxDNr1W6CzEBi.8ipE2Hlntra','4567-8901-2345-6789','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(13,'Shop M','shopM@example.com','$2a$10$82lISRGEcU1NikkIufCbjOATJ2dtgL89Vk3EqFO4KPpsI.0Ce/0Pa','5678-9012-3456-7890','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(14,'Shop N','shopN@example.com','$2a$10$uxOLNwyQ0KzQdPvLFylnH.WbNDMtKlBtUJU0SyU3RaxLz9u/d2wtq','6789-0123-4567-8901','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(15,'Shop O','shopO@example.com','$2a$10$3l5TPdSAbZY2tNPZuKdDxOBqvt.t/JoakjjYVVoQVsEEM2uWQk96i','7890-1234-5678-9012','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(16,'Shop P','shopP@example.com','$2a$10$V2VWxVgU2Ltgih9b8OSuJO6vUH4BlLvZFn1Ueyuep99g8KtvBo6tm','8901-2345-6789-0123','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(17,'Shop Q','shopQ@example.com','$2a$10$MowPIzO1soZerKNjVUjYzOgtX52khIRYUQ1xvfzvnQZfyP5ABSKw.','9012-3456-7890-1234','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(18,'Shop R','shopR@example.com','$2a$10$odYB4VOWGx5aklcCjc8k7ObJdP6Q0B7EneGYETWMBh/VNQuoH7y0C','0123-4567-8901-2345','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(19,'Shop S','shopS@example.com','$2a$10$b0IeCen6zdNQFmbdG09PAeuY5hNxBQ6UJXDSMWrEUybAszoYBdmym','2345-6789-0123-4567','seller','2025-01-07 19:12:42','2025-01-07 19:12:42'),(20,'Shop T','shopT@example.com','$2a$10$wCLaOmMriHWqmYEmhrEiCuUrL4VRtZBVmwslw69edAFSPjGInNVie','3456-7890-1234-5678','seller','2025-01-07 19:12:42','2025-01-07 19:12:42');
/*!40000 ALTER TABLE `sellers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tags_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'Technology','2025-01-07 19:12:42','2025-01-07 19:12:42'),(2,'Fashion','2025-01-07 19:12:42','2025-01-07 19:12:42'),(3,'Budget','2025-01-07 19:12:42','2025-01-07 19:12:42'),(4,'High-End','2025-01-07 19:12:42','2025-01-07 19:12:42'),(5,'Sports','2025-01-07 19:12:42','2025-01-07 19:12:42'),(6,'Health','2025-01-07 19:12:42','2025-01-07 19:12:42'),(7,'Toys','2025-01-07 19:12:42','2025-01-07 19:12:42'),(8,'Home','2025-01-07 19:12:42','2025-01-07 19:12:42'),(9,'Books','2025-01-07 19:12:42','2025-01-07 19:12:42'),(10,'Beauty','2025-01-07 19:12:42','2025-01-07 19:12:42'),(11,'Automotive','2025-01-07 19:12:42','2025-01-07 19:12:42'),(12,'Garden','2025-01-07 19:12:42','2025-01-07 19:12:42'),(13,'Gaming','2025-01-07 19:12:42','2025-01-07 19:12:42'),(14,'Stationery','2025-01-07 19:12:42','2025-01-07 19:12:42'),(15,'Premium','2025-01-07 19:12:42','2025-01-07 19:12:42'),(16,'Affordable','2025-01-07 19:12:42','2025-01-07 19:12:42'),(17,'Lifestyle','2025-01-07 19:12:42','2025-01-07 19:12:42'),(18,'Essentials','2025-01-07 19:12:42','2025-01-07 19:12:42'),(19,'Durable','2025-01-07 19:12:42','2025-01-07 19:12:42'),(20,'Eco-friendly','2025-01-07 19:12:42','2025-01-07 19:12:42');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `role` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Alice','alice@example.com','$2a$10$whdzEECuK7AeueW9iugrNerrn.Cfcc8h1v5WoCBw71Y4.V0PJ3FyW','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(2,'Bob','bob@example.com','$2a$10$c82Ch5n6NARmYnUic6Vfh.fKlWkKRWACKUUCQho1l./KCq4aVzxei','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(3,'Charlie','charlie@example.com','$2a$10$oBfkFlvP1VQKIKIgCD72uOG7XfVJioxBkVpwJOKalrtYvGgxuUvIq','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(4,'Diana','diana@example.com','$2a$10$75sJMPqrrOm9k9CyPgT9duC3H4rcaqgx86vf45jK.9tXws888ytxe','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(5,'Eve','eve@example.com','$2a$10$AvcFiCRUl4VoMwi3TTOEb.NysTnAZ8VfnPFjRipAG2Sf3YSuk2rkm','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(6,'Frank','frank@example.com','$2a$10$P9kdEFsl5yN9R9uWFLYybujBcptw5LBJwSPZp07zXHKIJfkmV18VW','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(7,'Grace','grace@example.com','$2a$10$Sg0149U9JhE2FMjEvRE/OuHqDLCm/I/pBbFdb0s/u6gg7CSED9Sc.','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(8,'Hank','hank@example.com','$2a$10$XR98l2elnsp16fcnKOfKX.w3agCr6ke/PMrLR/cU1TtYhFj9PpD26','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(9,'Ivy','ivy@example.com','$2a$10$v7eACenyCsTpyfxNfaTt4.qH2MoM1uEh3.jEq9MmfwOLJzKrI4iq.','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(10,'Jack','jack@example.com','$2a$10$Pe9cM/m8fXXYkFckCcgtJeaVNAH0nNzxKipsmuxaX9h63gJ8gmJ16','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(11,'Karen','karen@example.com','$2a$10$VT0YLCVckdtEO65sHtOws.gftWuyEnebtf1B.yfWSJQrDz97uJvty','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(12,'Leo','leo@example.com','$2a$10$IxxzoV6rtzE5vPZ005KuRO02L65.PbizAeiiQxdN32pZR1sPioxTm','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(13,'Mona','mona@example.com','$2a$10$fd6t0Cv5yi4xt55YwM3HEejWguZm3xXoYn0FaTJU5.w5z0As9oY4O','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(14,'Nina','nina@example.com','$2a$10$zQuFol4FGKkvUTSwAJPVo.SjA7hj5UnPXpmz8eBYxsqXubE8uASEq','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(15,'Oscar','oscar@example.com','$2a$10$5RhWT0IT/gYyTDpLiQ2I1OzHWDQbU6C4WFj87Y66i.HSNf0T0440a','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(16,'Paul','paul@example.com','$2a$10$J1U3R59GY.XvEFKa5LF2iOHPNmGasUHHlNebGgnaVoWBMBxZdGkgO','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(17,'Quinn','quinn@example.com','$2a$10$WDyBCE.kLLhKufreId7yh.R2EfEhQ9i4Qq5BoMD4Tsg2rOiRaRw9.','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(18,'Rose','rose@example.com','$2a$10$P4WBEIx5I4LM2vWyHXcOhOiU8IQpV2feoUBGdLwl4tU4hq/tqEV96','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(19,'Steve','steve@example.com','$2a$10$doyb8XArWMtFp1NwA.Vnb.gaR5VahjwZp1A70QUlq43HKQsyaE16i','2025-01-07 19:12:39','2025-01-07 19:12:39','user'),(20,'Tina','tina@example.com','$2a$10$mU9q5D6WRgbFQqdEVIObB.GVU490LjupaxA8siCVriG6FpW5RA0Oa','2025-01-07 19:12:39','2025-01-07 19:12:39','user');
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

-- Dump completed on 2025-01-07 19:56:29
