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
import com.sahayog.googlesheet.model.CenterVisitReport_AD;
import com.sahayog.googlesheet.service.CenterVisitReport_ADService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/centervisitreport")
public class CenterVisitReport_ADController {

    private final CenterVisitReport_ADService centerVisitReportService;

    @Autowired
    public CenterVisitReport_ADController(CenterVisitReport_ADService centerVisitReportService) {
        this.centerVisitReportService = centerVisitReportService;
    }

    // Create operation
    @PostMapping("/create")
    public ResponseEntity<CenterVisitReport_AD> create(@RequestBody CenterVisitReport_AD centerVisitReport) {
        CenterVisitReport_AD createdCenterVisitReport = centerVisitReportService.create(centerVisitReport);
        return new ResponseEntity<>(createdCenterVisitReport, HttpStatus.CREATED);
    }

    // Read operation
    @GetMapping("/getall")
    public ResponseEntity<List<CenterVisitReport_AD>> getAll() {
        List<CenterVisitReport_AD> centerVisitReportList = centerVisitReportService.getAll();
        return new ResponseEntity<>(centerVisitReportList, HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<CenterVisitReport_AD> getById(@PathVariable("id") int id) {
        Optional<CenterVisitReport_AD> centerVisitReport = centerVisitReportService.getById(id);
        return centerVisitReport.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Update operation
    @PutMapping("/update/{id}")
    public ResponseEntity<CenterVisitReport_AD> update(
            @PathVariable("id") int id,
            @RequestBody CenterVisitReport_AD updatedCenterVisitReport
    ) {
        CenterVisitReport_AD centerVisitReport = centerVisitReportService.update(id, updatedCenterVisitReport);
        if (centerVisitReport != null) {
            return new ResponseEntity<>(centerVisitReport, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete operation
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") int id) {
        centerVisitReportService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
