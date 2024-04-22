/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sahayog.googlesheet.service;

/**
 *
 * @author ritik
 */
import com.sahayog.googlesheet.model.AuditScoringReport_AD;
import com.sahayog.googlesheet.repository.IAuditScoringReport_ADRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuditScoringReport_ADService {

    private final IAuditScoringReport_ADRepository auditScoringReportRepository;

    @Autowired
    public AuditScoringReport_ADService(IAuditScoringReport_ADRepository auditScoringReportRepository) {
        this.auditScoringReportRepository = auditScoringReportRepository;
    }

    // Create operation
    public AuditScoringReport_AD create(AuditScoringReport_AD auditScoringReport) {
        return auditScoringReportRepository.save(auditScoringReport);
    }

    // Read operation
    public List<AuditScoringReport_AD> getAll() {
        return auditScoringReportRepository.findAll();
    }

    public Optional<AuditScoringReport_AD> getById(int id) {
        return auditScoringReportRepository.findById(id);
    }

    // Update operation
    public AuditScoringReport_AD update(int id, AuditScoringReport_AD updatedAuditScoringReport) {
        Optional<AuditScoringReport_AD> existingAuditScoringReport = auditScoringReportRepository.findById(id);
        if (existingAuditScoringReport.isPresent()) {
            AuditScoringReport_AD auditScoringReport = existingAuditScoringReport.get();
            auditScoringReport.setRegion(updatedAuditScoringReport.getRegion());
            auditScoringReport.setArea(updatedAuditScoringReport.getArea());
            auditScoringReport.setBranchName(updatedAuditScoringReport.getBranchName());
            auditScoringReport.setBranchId(updatedAuditScoringReport.getBranchId());
            auditScoringReport.setMonthOfAudit(updatedAuditScoringReport.getMonthOfAudit());
            auditScoringReport.setAuditedBy(updatedAuditScoringReport.getAuditedBy());
            auditScoringReport.setAuditReportRealeseDate(updatedAuditScoringReport.getAuditReportRealeseDate());
            auditScoringReport.setAuditScoring(updatedAuditScoringReport.getAuditScoring());
            auditScoringReport.setScores(updatedAuditScoringReport.getScores());
            auditScoringReport.setRemark(updatedAuditScoringReport.getRemark());
            auditScoringReport.setAuditCover(updatedAuditScoringReport.getAuditCover());
            auditScoringReport.setAuditSchedule(updatedAuditScoringReport.getAuditSchedule());
            auditScoringReport.setComplinceStatus(updatedAuditScoringReport.getComplinceStatus());
            auditScoringReport.setFilledBy(updatedAuditScoringReport.getFilledBy());
            auditScoringReport.setModifiedBy(updatedAuditScoringReport.getModifiedBy());            
            return auditScoringReportRepository.save(auditScoringReport);
        } else {
            // Handle not found
            return null;
        }
    }

    // Delete operation
    public void delete(int id) {
        auditScoringReportRepository.deleteById(id);
    }
}

