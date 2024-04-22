/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sahayog.googlesheet.controller;

/**
 *
 * @author ritik
 */
import com.sahayog.googlesheet.model.AuditScoringReport_AD;
import com.sahayog.googlesheet.service.AuditScoringReport_ADService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/auditscoringreport")
public class AuditScoringReport_ADController {

    private final AuditScoringReport_ADService auditScoringReportService;

    @Autowired
    public AuditScoringReport_ADController(AuditScoringReport_ADService auditScoringReportService) {
        this.auditScoringReportService = auditScoringReportService;
    }

    // Create operation
    @PostMapping("/create")
    public ResponseEntity<AuditScoringReport_AD> create(@RequestBody AuditScoringReport_AD auditScoringReport) {
        AuditScoringReport_AD createdAuditScoringReport = auditScoringReportService.create(auditScoringReport);
        return new ResponseEntity<>(createdAuditScoringReport, HttpStatus.CREATED);
    }

    // Read operation
    @GetMapping("/getall")
    public ResponseEntity<List<AuditScoringReport_AD>> getAll() {
        List<AuditScoringReport_AD> auditScoringReportList = auditScoringReportService.getAll();
        return new ResponseEntity<>(auditScoringReportList, HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<AuditScoringReport_AD> getById(@PathVariable("id") int id) {
        Optional<AuditScoringReport_AD> auditScoringReport = auditScoringReportService.getById(id);
        return auditScoringReport.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Update operation
    @PutMapping("/update/{id}")
    public ResponseEntity<AuditScoringReport_AD> update(
            @PathVariable("id") int id,
            @RequestBody AuditScoringReport_AD updatedAuditScoringReport
    ) {
        AuditScoringReport_AD auditScoringReport = auditScoringReportService.update(id, updatedAuditScoringReport);
        if (auditScoringReport != null) {
            return new ResponseEntity<>(auditScoringReport, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete operation
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") int id) {
        auditScoringReportService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
