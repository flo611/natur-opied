<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SoifDeSangController extends AbstractController
{
    #[Route('phantomblood/diolenvahisseur', name: 'app_soif_de_sang')]
    public function index(): Response
    {
        return $this->render('soif_de_sang/index.html.twig', [
            'controller_name' => 'SoifDeSangController',
        ]);
    }
}
