<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Serializer\UserSerializer;
use Symfony\Component\HttpFoundation\JsonResponse;

class DashboardController extends AbstractController
{
    #[Route('/dashboard', name: 'app_dashboard')]
    public function index(): Response
    {
        return $this->render('dashboard/index.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
    #[Route('/serialize-user', name: 'serialize_user')]
    public function serializeUser(UserSerializer $userSerializer)
    {
        $user = $this->getUser(); // Récupérez l'utilisateur actuellement connecté

        $serializedUser = $userSerializer->serializeUser($user);

        return new JsonResponse(['user' => json_decode($serializedUser, true)]);
    }
}
