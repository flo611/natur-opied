<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StardurstCrusadersController extends AbstractController
{
    #[Route('/stardurstcrusaders', name: 'app_stardurst_crusaders')]
    public function index(): Response
    {
        return $this->render('stardurst_crusaders/index.html.twig', [
            'controller_name' => 'StardurstCrusadersController',
        ]);
    }
}
