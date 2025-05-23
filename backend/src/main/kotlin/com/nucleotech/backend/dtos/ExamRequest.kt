package com.nucleotech.backend.dtos

data class ExamRequest(
    val patientId: Long,
    val risk_rating: String,  // ou Risk, se preferir
    val exam_date: String     // data em formato ISO, tipo "2025-05-23"
)
