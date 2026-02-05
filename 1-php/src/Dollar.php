<?php

namespace App;

class Dollar
{
	public int $amount;

	public function __construct(int $amount)
	{
		$this->amount = $amount;
	}

	public function times(int $multiplier): self
	{
		return new self($this->amount * $multiplier);
	}

    public function equals(self $other): bool
    {
        return $this->amount == $other->amount;
    }
}