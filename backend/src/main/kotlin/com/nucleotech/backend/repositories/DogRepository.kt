package com.nucleotech.backend.repositories

import com.nucleotech.backend.entitys.Dog
import org.springframework.data.jpa.repository.JpaRepository

interface DogRepository : JpaRepository<Dog, Long>