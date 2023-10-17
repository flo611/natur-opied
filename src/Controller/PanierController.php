<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PanierController extends AbstractController
{
    #[Route('/panier', name: 'app_panier')]
    public function index(): Response
    {
        return $this->render('panier/index.html.twig', [
            'controller_name' => 'PanierController',
        ]);
    }
    #[Route('/panier/{id}', name: 'app_panier_show')]
    public function show(): Response
    {
        return $this->render('panier/index.html.twig', [
            'controller_name' => 'PanierController',
        ]);
    }
}
