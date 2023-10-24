<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Book;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        for ($i = 0; $i < 100; $i++) {

            $book = new Book();
            $book->setTitle("Titre : " . $i);
            $book->setSubTitle("Sous-titre :" . $i);
            $book->setCountry("Pays : " . $i);
            $book->setAuthors(["Auteur : " . $i]);
            $book->setEditor(["Editeur : " . $i]);
            $book->setImage("https://fr.shopping.rakuten.com/photo/888712840_L.jpg");
            $manager ->persist($book);
        }
        $manager->flush();
    }
}
