-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 06 fév. 2023 à 11:40
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cinehall`
--

-- --------------------------------------------------------

--
-- Structure de la table `halls`
--

CREATE TABLE `halls` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `movie` int(11) NOT NULL,
  `is_full` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `halls`
--

INSERT INTO `halls` (`id`, `label`, `movie`, `is_full`) VALUES
(1, 'Hall 1', 1, 0),
(2, 'Hall 2', 2, 0),
(3, 'Hall 3', 9, 0),
(4, 'Hall 4', 4, 0);

-- --------------------------------------------------------

--
-- Structure de la table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `movies`
--

INSERT INTO `movies` (`id`, `title`, `price`, `image`, `description`) VALUES
(1, 'The Imitation Game', 200, 'https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_.jpg', 'Benedict Cumberbatch, Keira Knightley'),
(2, 'Game Night', 100, 'https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@._V1_.jpg', 'Jason Bateman, Rachel McAdams'),
(3, 'Game of Thrones', 150, 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg', 'Emilia Clarke, Peter Dinklage'),
(4, 'The Game', 150, 'https://m.media-amazon.com/images/M/MV5BNWQ2ODFhNWItNTA4NS00MzkyLTgyYzUtZjlhYWE5MmEzY2Q1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg', 'Michael Douglas, Deborah Kara Unger'),
(5, 'Squid Game', 0, 'https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg', 'Lee Jung-jae, Park Hae-soo'),
(6, 'Game-Show', 0, 'https://m.media-amazon.com/images/I/314t8YNB69L.png', 'Top 50 Game-Show Movies and TV Shows'),
(7, 'The Game', 0, 'https://m.media-amazon.com/images/M/MV5BZjYyMDVhMzEtNmM4ZS00YzliLWExOWEtMzRjZmFkZTk2YjI0XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg', 'Wendy Raquel Robinson, Hosea Chanchez'),
(8, 'Molly\'s Game', 0, 'https://m.media-amazon.com/images/M/MV5BNTkzMzRlYjEtMTQ5Yi00OWY3LWI0NzYtNGQ4ZDkzZTU0M2IwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg', 'Jessica Chastain, Idris Elba'),
(9, 'How to Train Your Dragon', 300, 'https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_.jpg', 'Jay Baruchel, Gerard Butler'),
(10, 'How to Train Your Dragon: Homecoming', 0, 'https://m.media-amazon.com/images/M/MV5BMTlkZjM1MDctZTZlOC00NDQwLTg3ZGEtNTJhMWQ2YWIxNGViXkEyXkFqcGdeQXVyMjQ5MjYwNDE@._V1_.jpg', 'Jay Baruchel, America Ferrera'),
(11, 'How to Train Your Dragon 2', 0, 'https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_.jpg', 'Jay Baruchel, Cate Blanchett'),
(12, 'How to Train Your Dragon: Snoggletog Log', 0, 'https://m.media-amazon.com/images/M/MV5BNDhjZWY0ZTMtOGY0Yy00ZWY2LTg1MzMtNjE0YzhjZmUyY2Y2XkEyXkFqcGdeQXVyMTEwNTU2NzM3._V1_.jpg', ''),
(13, 'How to Train Your Dragon: The Hidden World', 0, 'https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_.jpg', 'Jay Baruchel, America Ferrera'),
(14, 'Dreamworks How to Train Your Dragon Legends', 0, 'https://m.media-amazon.com/images/M/MV5BMTQzMjE5NDQwMl5BMl5BanBnXkFtZTgwMjI2NzA2MDE@._V1_.jpg', 'Jay Baruchel, Gerard Butler'),
(15, 'Dreamworks How to Train Your Dragon Legends', 0, 'https://m.media-amazon.com/images/M/MV5BODdhMzNjNGItYmUzMC00NWM5LTgyYmEtNzI3YjFlNGY5MTkyXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg', 'Christopher Mintz-Plasse, Jay Baruchel'),
(16, 'How to Train Your Dragon: Viking-Sized Cast', 0, 'https://m.media-amazon.com/images/M/MV5BYzY1M2RjZGEtMGI5NS00YmJjLWFiN2MtMDgxYTk1ODNkNzljXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg', 'Bonnie Arnold, Jay Baruchel'),
(17, 'hangover', 0, 'hangover.img', 'hangover is a good movie'),
(25, 'Avatar: The Way of Water', 0, 'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg', 'Sam Worthington, Zoe Saldana'),
(26, 'Morocco', 0, 'https://m.media-amazon.com/images/M/MV5BOWNiYzgxZjMtZTI5NC00MmZkLThkNTgtZGJmZTA0OTZmOGJiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg', 'Gary Cooper, Marlene Dietrich'),
(27, 'hamza', 0, 'hamza.img', 'hamza is a good movie');

-- --------------------------------------------------------

--
-- Structure de la table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `costumer` int(11) NOT NULL,
  `seat` int(11) NOT NULL,
  `hall` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `reservations`
--

INSERT INTO `reservations` (`id`, `costumer`, `seat`, `hall`, `date`) VALUES
(1, 1, 2, 1, '2023-02-05'),
(2, 1, 1, 1, '2023-02-05'),
(3, 1, 3, 2, '2023-02-05'),
(4, 1, 4, 2, '2023-02-05'),
(5, 1, 18, 1, '2023-02-05'),
(6, 1, 59, 3, '2023-02-05'),
(7, 1, 45, 3, '2023-02-05'),
(8, 1, 35, 2, '2023-02-06'),
(9, 1, 5, 1, '2023-02-06'),
(10, 1, 6, 1, '2023-02-06'),
(11, 1, 7, 1, '2023-02-06'),
(12, 1, 8, 1, '2023-02-06'),
(13, 1, 9, 1, '2023-02-06'),
(14, 1, 10, 1, '2023-02-06'),
(15, 1, 11, 1, '2023-02-06'),
(16, 1, 12, 1, '2023-02-06'),
(17, 1, 13, 1, '2023-02-06'),
(18, 1, 14, 1, '2023-02-06'),
(19, 1, 15, 1, '2023-02-06'),
(20, 1, 16, 1, '2023-02-06'),
(21, 1, 17, 1, '2023-02-06'),
(22, 1, 19, 1, '2023-02-06'),
(23, 1, 20, 1, '2023-02-06'),
(24, 1, 21, 1, '2023-02-06'),
(26, 1, 23, 2, '2023-02-06'),
(27, 1, 24, 2, '2023-02-06'),
(28, 1, 25, 2, '2023-02-06'),
(29, 1, 26, 2, '2023-02-06'),
(30, 1, 27, 2, '2023-02-06'),
(31, 1, 28, 2, '2023-02-06'),
(32, 1, 29, 2, '2023-02-06'),
(33, 1, 30, 2, '2023-02-06'),
(34, 1, 31, 2, '2023-02-06'),
(35, 1, 32, 2, '2023-02-06'),
(36, 1, 33, 2, '2023-02-06'),
(37, 1, 34, 2, '2023-02-06'),
(38, 1, 36, 2, '2023-02-06'),
(39, 1, 37, 2, '2023-02-06'),
(40, 1, 38, 2, '2023-02-06'),
(41, 1, 39, 2, '2023-02-06');

-- --------------------------------------------------------

--
-- Structure de la table `seats`
--

CREATE TABLE `seats` (
  `id` int(11) NOT NULL,
  `hall` int(11) NOT NULL,
  `is_booked` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `seats`
--

INSERT INTO `seats` (`id`, `hall`, `is_booked`) VALUES
(1, 1, 1),
(2, 1, 1),
(3, 2, 1),
(4, 2, 1),
(5, 1, 1),
(6, 1, 1),
(7, 1, 1),
(8, 1, 1),
(9, 1, 1),
(10, 1, 1),
(11, 1, 1),
(12, 1, 1),
(13, 1, 1),
(14, 1, 1),
(15, 1, 1),
(16, 1, 1),
(17, 1, 1),
(18, 1, 1),
(19, 1, 1),
(20, 1, 1),
(21, 1, 1),
(22, 1, 0),
(23, 2, 1),
(24, 2, 1),
(25, 2, 1),
(26, 2, 1),
(27, 2, 1),
(28, 2, 1),
(29, 2, 1),
(30, 2, 1),
(31, 2, 1),
(32, 2, 1),
(33, 2, 1),
(34, 2, 1),
(35, 2, 1),
(36, 2, 1),
(37, 2, 1),
(38, 2, 1),
(39, 2, 1),
(40, 2, 0),
(41, 3, 0),
(42, 3, 0),
(43, 3, 0),
(44, 3, 0),
(45, 3, 1),
(46, 3, 0),
(47, 3, 0),
(48, 3, 0),
(49, 3, 0),
(50, 3, 0),
(51, 3, 0),
(52, 3, 0),
(53, 3, 0),
(54, 3, 0),
(55, 3, 0),
(56, 3, 0),
(57, 3, 0),
(58, 3, 0),
(59, 3, 1),
(60, 3, 0),
(61, 4, 0),
(62, 4, 0),
(63, 4, 0),
(64, 4, 0),
(65, 4, 0),
(66, 4, 0),
(67, 4, 0),
(68, 4, 0),
(69, 4, 0),
(70, 4, 0),
(71, 4, 0),
(72, 4, 0),
(73, 4, 0),
(74, 4, 0),
(75, 4, 0),
(76, 4, 0),
(77, 4, 0),
(78, 4, 0),
(79, 4, 0),
(80, 4, 0);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `identifier`, `full_name`, `email`, `password`, `image`, `role`) VALUES
(1, 'eec47fc02ccbda3f1bca255e6be99efc', 'Fadwa Qarchi', 'fadwa@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'assets/images/profilee.jpg', 'client');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `halls`
--
ALTER TABLE `halls`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movie` (`movie`);

--
-- Index pour la table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `costumer` (`costumer`),
  ADD KEY `hall` (`hall`);

--
-- Index pour la table `seats`
--
ALTER TABLE `seats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hall` (`hall`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `halls`
--
ALTER TABLE `halls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT pour la table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT pour la table `seats`
--
ALTER TABLE `seats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `halls`
--
ALTER TABLE `halls`
  ADD CONSTRAINT `halls_ibfk_1` FOREIGN KEY (`movie`) REFERENCES `movies` (`id`);

--
-- Contraintes pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`costumer`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`hall`) REFERENCES `halls` (`id`);

--
-- Contraintes pour la table `seats`
--
ALTER TABLE `seats`
  ADD CONSTRAINT `seats_ibfk_1` FOREIGN KEY (`hall`) REFERENCES `halls` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
