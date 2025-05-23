package com.nucleotech.backend.config

import com.nucleotech.backend.entitys.Dog
import com.nucleotech.backend.entitys.Exam
import com.nucleotech.backend.entitys.Risk
import com.nucleotech.backend.repositories.DogRepository
import com.nucleotech.backend.repositories.ExamRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import java.time.LocalDate

@Configuration
class DataSeeder {

    @Bean
    fun seedData(
        dogRepository: DogRepository,
        examRepository: ExamRepository
    ) = CommandLineRunner {
        println("Hello")
    }
}
