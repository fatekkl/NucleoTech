package com.nucleotech.backend.controller

import com.nucleotech.backend.repositories.DogRepository
import com.nucleotech.backend.repositories.ExamRepository
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/admin")
class AdminController(
    private val dogRepository: DogRepository,
    private val examRepository: ExamRepository
    ) {

    @DeleteMapping("/clear-all")
    @Transactional
    fun clearDatabase(): String {
        // Excluir exames primeiro
        examRepository.deleteAllInBatch()

        // Depois os cachorros
        dogRepository.deleteAllInBatch()

        return "Todos os dados foram apagados da base com sucesso."
    }

}
