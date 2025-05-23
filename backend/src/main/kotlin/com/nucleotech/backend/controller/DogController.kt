package com.nucleotech.backend.controller

import com.nucleotech.backend.entitys.Dog
import com.nucleotech.backend.repositories.DogRepository
import org.springframework.http.ResponseEntity
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/dogs")
class DogController(private val dogRepository: DogRepository) {

    @GetMapping
    fun getAllDogs(): List<Dog> = dogRepository.findAll()

    @GetMapping("/{id}")
    fun getDogById(@PathVariable id: Long): ResponseEntity<Dog> {
        val dog = dogRepository.findById(id)
        return if (dog.isPresent) {
            ResponseEntity.ok(dog.get())
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @PostMapping("/add")
    fun saveDog(@RequestBody dog: Dog): Dog {
        return dogRepository.save(dog)
    }

    @PutMapping("/{id}")
    fun updateDog(@PathVariable id: Long, @RequestBody updatedDog: Dog): ResponseEntity<Dog> {
        val existingDog = dogRepository.findById(id)
        return if (existingDog.isPresent) {
            val dogToSave = existingDog.get().copy(
                name = updatedDog.name,
                age = updatedDog.age
                // Não altera lista de exames aqui para evitar problemas de cascata
            )
            ResponseEntity.ok(dogRepository.save(dogToSave))
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @DeleteMapping("/{id}")
    @Transactional
    fun deleteDogById(@PathVariable id: Long): ResponseEntity<String> {
        return if (dogRepository.existsById(id)) {
            dogRepository.deleteById(id)
            ResponseEntity.ok("Cachorro com id $id removido com sucesso.")
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @DeleteMapping("/clear")
    @Transactional
    fun deleteAllDogs(): String {
        dogRepository.deleteAll()
        return "Todos os registros de cães foram removidos com sucesso."
    }
}
