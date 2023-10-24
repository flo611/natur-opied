<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231006083033 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE refresh_tokens (id INT AUTO_INCREMENT NOT NULL, refresh_token VARCHAR(128) NOT NULL, username VARCHAR(255) NOT NULL, valid DATETIME NOT NULL, UNIQUE INDEX UNIQ_9BACE7E1C74F2195 (refresh_token), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE book CHANGE sub_title sub_title VARCHAR(255) NOT NULL, CHANGE authors authors LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', CHANGE country country VARCHAR(255) NOT NULL, CHANGE editor editor LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', CHANGE `array` `array` LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', CHANGE image image VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE refresh_tokens');
        $this->addSql('ALTER TABLE book CHANGE `array` `array` LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', CHANGE sub_title sub_title VARCHAR(255) DEFAULT NULL, CHANGE authors authors LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', CHANGE country country VARCHAR(255) DEFAULT NULL, CHANGE editor editor LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', CHANGE image image VARCHAR(255) DEFAULT NULL');
    }
}
