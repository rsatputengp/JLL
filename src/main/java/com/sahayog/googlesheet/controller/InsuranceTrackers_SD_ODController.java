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
import com.sahayog.googlesheet.model.InsuranceTrackers_SD_OD;
import com.sahayog.googlesheet.service.InsuranceTrackers_SD_ODService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/insurancetrackers")
public class InsuranceTrackers_SD_ODController {

    private final InsuranceTrackers_SD_ODService insuranceTrackersService;

    @Autowired
    public InsuranceTrackers_SD_ODController(InsuranceTrackers_SD_ODService insuranceTrackersService) {
        this.insuranceTrackersService = insuranceTrackersService;
    }

    // Create operation
    @PostMapping("/create")
    public ResponseEntity<InsuranceTrackers_SD_OD> create(@RequestBody InsuranceTrackers_SD_OD insuranceTrackers) {
        InsuranceTrackers_SD_OD createdInsuranceTrackers = insuranceTrackersService.create(insuranceTrackers);
        return new ResponseEntity<>(createdInsuranceTrackers, HttpStatus.CREATED);
    }

    // Read operation
    @GetMapping("/all")
    public ResponseEntity<List<InsuranceTrackers_SD_OD>> getAll() {
        List<InsuranceTrackers_SD_OD> insuranceTrackersList = insuranceTrackersService.getAll();
        return new ResponseEntity<>(insuranceTrackersList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<InsuranceTrackers_SD_OD> getById(@PathVariable("id") int id) {
        Optional<InsuranceTrackers_SD_OD> insuranceTrackers = insuranceTrackersService.getById(id);
        return insuranceTrackers.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Update operation
    @PutMapping("/update/{id}")
    public ResponseEntity<InsuranceTrackers_SD_OD> update(
            @PathVariable("id") int id,
            @RequestBody InsuranceTrackers_SD_OD updatedInsuranceTrackers
    ) {
        InsuranceTrackers_SD_OD insuranceTrackers = insuranceTrackersService.update(id, updatedInsuranceTrackers);
        if (insuranceTrackers != null) {
            return new ResponseEntity<>(insuranceTrackers, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete operation
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") int id) {
        insuranceTrackersService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

