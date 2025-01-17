<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Products;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private $userPasswordHasher;
    private $environment;

    public function __construct(UserPasswordHasherInterface $userPasswordHasher, string $environment)
    {
        $this->userPasswordHasher = $userPasswordHasher;
        $this->environment = $environment;
    }

    public function load(ObjectManager $manager): void
    {
        if ($this->environment !== 'prod') {
            // Ajoute des utilisateurs
            $user = new User();
            $user->setEmail("user@naturopied.fr");
            $user->setPassword($this->userPasswordHasher->hashPassword($user, "user@naturopied.fr"));
            $user->setRoles(["ROLE_USER"]);
            $manager->persist($user);

            $userAdmin = new User();
            $userAdmin->setEmail("admin@naturopied.fr");
            $userAdmin->setPassword($this->userPasswordHasher->hashPassword($userAdmin, "admin@naturopied.fr"));
            $userAdmin->setRoles(["ROLE_ADMIN"]);
            $manager->persist($userAdmin);

            // Ajoute des produits
            for ($i = 0; $i < 50; $i++) {
                $product = new Products();
                $product->setName('Paysage :' . $i);
                $product->setDescription('Lorem' . $i);
                $product->setImage('https://www.france.tv/image/carre/1024/1024/y/8/3/8a492d8f-phpirh38y.jpg');
                $product->setAlldescription('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed est massa' . $i);
                $product->setTarifs(5);
                $product->setDestination('Europe');
                $manager->persist($product);
            }

            $manager->flush();
        }
    }
}
