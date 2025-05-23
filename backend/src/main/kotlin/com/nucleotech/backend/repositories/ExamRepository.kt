package com.nucleotech.backend.repositories

import com.nucleotech.backend.entitys.Exam
import org.springframework.data.jpa.repository.JpaRepository
interface ExamRepository: JpaRepository<Exam, Long>