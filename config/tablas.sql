CREATE TABLE `usuarios` (
  `id` int(10) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `nombre` varchar(500) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `imagen` varchar(500) NOT NULL,
  `privilegio` varchar(11) NOT NULL DEFAULT 'usuario',
  `inicio` varchar(20) DEFAULT NULL,
  `fotos` varchar(20) DEFAULT NULL,
  `ilustraciones` varchar(20) DEFAULT NULL,
  `juegosdemesa` varchar(20) DEFAULT NULL,
  `videojuegos` varchar(20) DEFAULT NULL
)

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `pass`, `imagen`, `privilegio`, `inicio`, `fotos`, `ilustraciones`, `juegosdemesa`, `videojuegos`) VALUES
(1, 'administrador ', 'admin@admin.com', 'admin ', '1616547979700_one-piece-luffy-alegre-780x405.jpg', 'admin', 'inicio', 'fotos', 'ilustraciones', 'juegosdemesa', 'videojuegos'),
(2, 'carlos', 'chacon@gmail.com', '12345', '1616502200406_840_560.jpeg', 'usuario', 'inicio', NULL, NULL, NULL, NULL),
(3, 'javier', 'javier@gmail.com', '12345 ', '1616556330433_perfil5.jpg', 'usuario', 'inicio', NULL, 'ilustraciones', NULL, 'videojuegos'),
(4, 'Jorgito', '	jorgito@demo.com', '12345', '1616557552761_gato.png', 'usuario', 'inicio', 'fotos', NULL, NULL, NULL),
(5, 'jack', '	jack@demo.com', '12345', '1616492986955_death-note.jpg', 'usuario', 'inicio', NULL, 'ilustraciones', NULL, 'videojuegos'),
(6, 'El gazca', '	gazca@demo.com', '12345', '1616576026651_buPGopU-akatsuki-wallpaper-hd.jpg', 'usuario', 'inicio', 'fotos', NULL, 'juegosdemesa', NULL),
(7, 'El tobi', 'tobi@demo.com', '12345', '1649702523184_dictaminador3.png', 'usuario', 'inicio', NULL, 'ilustraciones', NULL, 'videojuegos');
