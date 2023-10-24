<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ProductsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductsRepository::class)]
#[ApiResource]
class Products
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $name = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $image = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $alldescription = null;

    #[ORM\Column(nullable: true)]
    private ?int $tarifs = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Destination = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getAlldescription(): ?string
    {
        return $this->alldescription;
    }

    public function setAlldescription(?string $alldescription): static
    {
        $this->alldescription = $alldescription;

        return $this;
    }

    public function getTarifs(): ?int
    {
        return $this->tarifs;
    }

    public function setTarifs(?int $tarifs): static
    {
        $this->tarifs = $tarifs;

        return $this;
    }

    public function getDestination(): ?string
    {
        return $this->Destination;
    }

    public function setDestination(?string $Destination): static
    {
        $this->Destination = $Destination;

        return $this;
    }

  
}
