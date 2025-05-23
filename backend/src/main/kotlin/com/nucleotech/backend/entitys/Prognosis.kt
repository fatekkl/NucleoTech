package com.nucleotech.backend.entitys

import com.fasterxml.jackson.annotation.JsonBackReference
import jakarta.persistence.*

class Prognosis(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @ManyToOne
    @JoinColumn(name = "patient_id", referencedColumnName = "id")
    @JsonBackReference
    val patient: Dog,

    @JoinColumn(name = "last_exam_id", referencedColumnName = "id")
    var exam: Exam,


    @JoinColumn(name = "stay_lenght")
    val stay_lenght: Long,

    @JoinColumn(name = "mortality_rate")
    val mortality_rate: Double = 0.0,


    @JoinColumn(name = "morbidity_rate")
    val morbidity_rate: Double = 0.0

    )