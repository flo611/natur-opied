<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PhantomBloodController extends AbstractController
{
    #[Route('/phantomblood', name: 'app_phantom_blood')]
    public function index(): Response
    {
        return $this->render('phantom_blood/index.html.twig', [
            'controller_name' => 'PhantomBloodController',
        ]);
    }
}
