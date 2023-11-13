-- MySQL Workbench Synchronization
-- Generated: 2023-11-13 09:14
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Filipe

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

ALTER SCHEMA `app_tarefas`  DEFAULT CHARACTER SET utf8  DEFAULT COLLATE utf8_general_ci ;

CREATE TABLE IF NOT EXISTS `app_tarefas`.`tarefas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NOT NULL,
  `descricao` VARCHAR(255) NOT NULL,
  `status` VARCHAR(100) NOT NULL,
  `data_criacao` DATETIME NOT NULL,
  `data_limite` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `app_tarefas`.`usuarios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `app_tarefas`.`usuarios_has_tarefas` (
  `usuarios_id` INT(11) NOT NULL,
  `tarefas_id` INT(11) NOT NULL,
  PRIMARY KEY (`usuarios_id`, `tarefas_id`),
  INDEX `fk_usuarios_has_tarefas_tarefas1_idx` (`tarefas_id` ASC) VISIBLE,
  INDEX `fk_usuarios_has_tarefas_usuarios_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuarios_has_tarefas_usuarios`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `app_tarefas`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarios_has_tarefas_tarefas1`
    FOREIGN KEY (`tarefas_id`)
    REFERENCES `app_tarefas`.`tarefas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
