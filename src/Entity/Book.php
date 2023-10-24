<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\BookRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BookRepository::class)]
#[ApiResource]
class Book
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    
    #[ORM\Column(type: 'array')]
    private ?array $array;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(length: 255)]
    private ?string $sub_title = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $authors = [];

    #[ORM\Column(length: 255)]
    private ?string $country = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $editor = [];

    #[ORM\Column(length: 255)]
    private ?string $image = null;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private ?array $tome = null;


    public function getId(): ?int
    {
        return $this->id;
    }
    public function getArray(): ?array
    {
        return $this->array;
    }
    public function setArray(array $array): ?array
    {
        return $this->array;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getSubTitle(): ?string
    {
        return $this->sub_title;
    }

    public function setSubTitle(string $sub_title): static
    {
        $this->sub_title = $sub_title;

        return $this;
    }

    public function getAuthors(): array
    {
        return $this->authors;
    }

    public function setAuthors(array $authors): static
    {
        $this->authors = $authors;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): static
    {
        $this->country = $country;

        return $this;
    }

    public function getEditor(): array
    {
        return $this->editor;
    }

    public function setEditor(array $editor): static
    {
        $this->editor = $editor;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getTome(): ?array
    {
        return $this->tome;
    }

    public function setTome(?array $tome): static
    {
        $this->tome = $tome;

        return $this;
    }
}
