-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2019 at 03:50 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loja_desenhos`
--

-- --------------------------------------------------------

--
-- Table structure for table `desenhos`
--

CREATE TABLE `desenhos` (
  `nome_desenho` varchar(250) NOT NULL,
  `tamanho_desenho` varchar(10) NOT NULL,
  `categoria_desenho` varchar(20) NOT NULL,
  `preco_desenho` decimal(65,0) NOT NULL,
  `thumbnail_desenho` varchar(50) NOT NULL,
  `id_desenho` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `desenhos`
--

INSERT INTO `desenhos` (`nome_desenho`, `tamanho_desenho`, `categoria_desenho`, `preco_desenho`, `thumbnail_desenho`, `id_desenho`) VALUES
('Black Panther', 'A4', 'Originals', '79', '5.jpg', 1),
('Bloodborne', 'A3', 'Print', '20', '3.jpg', 2),
('Lady Maria', 'A3', 'Print', '20', '1.jpg', 3),
('Fallout New Vegas', 'A3', 'Original', '60', '4.jpg', 4),
('Fallout New Vegas', 'A4', 'Print', '20', '4.jpg', 5),
('Howl\'s Moving Castle', 'A4', 'Print', '10', '6.jpg', 6),
('Howl\'s Moving Castle', 'A3', 'Print', '20', '6.jpg', 7),
('Totoro', 'A4', 'Print', '10', '7.jpg', 8),
('Totoro', 'A3', 'Original', '20', '7.jpg', 9);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `desenhos`
--
ALTER TABLE `desenhos`
  ADD PRIMARY KEY (`id_desenho`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `desenhos`
--
ALTER TABLE `desenhos`
  MODIFY `id_desenho` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
