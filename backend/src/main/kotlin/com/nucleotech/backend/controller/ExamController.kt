package com.nucleotech.backend.controller

import com.nucleotech.backend.dtos.ExamRequest
import com.nucleotech.backend.entitys.Exam
import com.nucleotech.backend.entitys.Risk
import com.nucleotech.backend.repositories.DogRepository
import com.nucleotech.backend.repositories.ExamRepository
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.time.LocalDate

@RestController
@RequestMapping("/exams")
class ExamController(
    private val examRepository: ExamRepository,
    private val dogRepository: DogRepository
) {

    @GetMapping
    fun getAllExams(): List<Exam> = examRepository.findAll()

    @GetMapping("/{id}")
    fun getExamById(@PathVariable id: Long): ResponseEntity<Any> {
        val examOptional = examRepository.findById(id)
        return if (examOptional.isPresent) {
            ResponseEntity.ok(examOptional.get())
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @PostMapping("/add")
    fun addExam(@RequestBody examRequest: ExamRequest): ResponseEntity<Any> {
        val dogOptional = dogRepository.findById(examRequest.patientId)
        if (dogOptional.isEmpty) {
            return ResponseEntity.badRequest().body("Paciente (dog) com id ${examRequest.patientId} não encontrado.")
        }

        val dog = dogOptional.get()

        val risk = try {
            Risk.valueOf(examRequest.risk_rating.uppercase())
        } catch (e: IllegalArgumentException) {
            return ResponseEntity.badRequest().body("Valor inválido para risk_rating: ${examRequest.risk_rating}")
        }

        val examDate = try {
            LocalDate.parse(examRequest.exam_date)
        } catch (e: Exception) {
            return ResponseEntity.badRequest().body("Formato inválido para exam_date: ${examRequest.exam_date}, esperado YYYY-MM-DD")
        }

        val exam = Exam(patient = dog, risk_rating = risk, exam_date = examDate)
        examRepository.save(exam)

        dog.exams.add(exam)
        dogRepository.save(dog)

        return ResponseEntity.ok(exam)
    }

    @DeleteMapping("/{id}")
    fun deleteExam(@PathVariable id: Long): ResponseEntity<Any> {
        val examOptional = examRepository.findById(id)
        if (examOptional.isEmpty) {
            return ResponseEntity.notFound().build()
        }

        val exam = examOptional.get()

        // Remove o exame da lista do dog (para manter a consistência)
        exam.patient.exams.remove(exam)
        dogRepository.save(exam.patient)

        examRepository.delete(exam)
        return ResponseEntity.noContent().build()
    }
}
