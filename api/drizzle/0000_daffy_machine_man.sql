CREATE TABLE `todos` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255),
	`completed` boolean DEFAULT false,
	CONSTRAINT `todos_id` PRIMARY KEY(`id`)
);
