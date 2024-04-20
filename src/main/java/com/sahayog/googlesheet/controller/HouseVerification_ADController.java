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
import com.sahayog.googlesheet.model.HouseVerification_AD;
import com.sahayog.googlesheet.service.HouseVerification_ADService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/houseverification")
public class HouseVerification_ADController {

    private final HouseVerification_ADService houseVerificationService;

    @Autowired
    public HouseVerification_ADController(HouseVerification_ADService houseVerificationService) {
        this.houseVerificationService = houseVerificationService;
    }

    // Create operation
    @PostMapping("/create")
    public ResponseEntity<HouseVerification_AD> create(@RequestBody HouseVerification_AD houseVerification) {
        HouseVerification_AD createdHouseVerification = houseVerificationService.create(houseVerification);
        return new ResponseEntity<>(createdHouseVerification, HttpStatus.CREATED);
    }

    // Read operation
    @GetMapping("/all")
    public ResponseEntity<List<HouseVerification_AD>> getAll() {
        List<HouseVerification_AD> houseVerificationList = houseVerificationService.getAll();
        return new ResponseEntity<>(houseVerificationList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<HouseVerification_AD> getById(@PathVariable("id") int id) {
        Optional<HouseVerification_AD> houseVerification = houseVerificationService.getById(id);
        return houseVerification.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Update operation
    @PutMapping("/update/{id}")
    public ResponseEntity<HouseVerification_AD> update(
            @PathVariable("id") int id,
            @RequestBody HouseVerification_AD updatedHouseVerification
    ) {
        HouseVerification_AD houseVerification = houseVerificationService.update(id, updatedHouseVerification);
        if (houseVerification != null) {
            return new ResponseEntity<>(houseVerification, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete operation
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") int id) {
        houseVerificationService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

