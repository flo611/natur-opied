<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BattleTendencyController extends AbstractController
{
    #[Route('/battletendency', name: 'app_battle_tendency')]
    public function index(): Response
    {
        return $this->render('battle_tendency/index.html.twig', [
            'controller_name' => 'BattleTendencyController',
        ]);
    }
}
