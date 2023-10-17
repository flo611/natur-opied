<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\PanierRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PanierRepository::class)]
#[ApiResource]
class Panier
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nom = null;

    #[ORM\Column(nullable: true)]
    private ?int $quantité = null;

    #[ORM\Column(nullable: true)]
    private ?int $total = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $date = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $customer_name = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getQuantité(): ?int
    {
        return $this->quantité;
    }

    public function setQuantité(?int $quantité): static
    {
        $this->quantité = $quantité;

        return $this;
    }

    public function getTotal(): ?int
    {
        return $this->total;
    }

    public function setTotal(?int $total): static
    {
        $this->total = $total;

        return $this;
    }

    public function getDate(): ?string
    {
        return $this->date;
    }

    public function setDate(?string $date): static
    {
        $this->date = $date;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(?\DateTimeImmutable $created_at): static
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getCustomerName(): ?string
    {
        return $this->customer_name;
    }

    public function setCustomerName(?string $customer_name): static
    {
        $this->customer_name = $customer_name;

        return $this;
    }
}
