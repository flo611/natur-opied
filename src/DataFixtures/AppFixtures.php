<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Products;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        for ($i = 0; $i < 50; $i++) {
        $product = new Products();
        $product->setName('Paysage :'.$i);
        $product->setDescription('Lorem'.$i);
        $product->setImage('https://www.france.tv/image/carre/1024/1024/y/8/3/8a492d8f-phpirh38y.jpg');
        $product ->setAlldescription ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed est massa'.$i);
        $product -> setTarifs(5);
        $product -> setDestination('Europe');
        $manager->persist($product);
    }
        $manager->flush();
    
    }

}
