package com.nucleotech.backend.services

import com.nucleotech.backend.repositories.DogRepository
import org.springframework.stereotype.Service

@Service
class DogService(val dogRepository: DogRepository)