package com.nucleotech.backend.services

import com.nucleotech.backend.repositories.ExamRepository
import org.springframework.stereotype.Service

@Service
class RiskService(val examRepository: ExamRepository)