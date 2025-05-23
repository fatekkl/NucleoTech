package com.nucleotech.backend.entitys

import com.fasterxml.jackson.annotation.JsonBackReference
import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "exams")
class Exam(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @ManyToOne
    @JoinColumn(name = "patient_id", referencedColumnName = "id")
    @JsonBackReference
    var patient: Dog,


    @Enumerated(EnumType.STRING)
    @Column(name = "risk_rating")
    var risk_rating: Risk,


    @Column(name = "exam_date", nullable = false)
    val exam_date: LocalDate,

    @Column(name = "temperature", nullable = false)
    val temperature: Float,


    @Column(name = "heart_rate", nullable = false)
    val heart_rate: Long
)