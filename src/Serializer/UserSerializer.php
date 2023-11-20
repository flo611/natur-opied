<?php

namespace App\Serializer;

use Symfony\Component\Serializer\SerializerInterface;


class UserSerializer
{
    private $serializer;

    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

    public function serializeUser($user)
    {
        return $this->serializer->serialize($user, 'json');
    }

    public function deserializeUser($data, $class)
    {
        return $this->serializer->deserialize($data, $class, 'json');
    }
}