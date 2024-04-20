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
import com.sahayog.googlesheet.model.ODCalling_OD;
import com.sahayog.googlesheet.service.ODCalling_ODService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/odcalling")
public class ODCalling_ODController {

    private final ODCalling_ODService odCallingOdService;

    @Autowired
    public ODCalling_ODController(ODCalling_ODService odCallingOdService) {
        this.odCallingOdService = odCallingOdService;
    }

// Create operation
    @PostMapping("/create")
    public ResponseEntity<ODCalling_OD> create(@RequestBody ODCalling_OD odCallingOD) {
        ODCalling_OD createdODCallingOD = odCallingOdService.create(odCallingOD);
        return new ResponseEntity<>(createdODCallingOD, HttpStatus.CREATED);
    }

    // Read operation
    @GetMapping("/getall")
    public ResponseEntity<List<ODCalling_OD>> getAll() {
        List<ODCalling_OD> odCallingODs = odCallingOdService.getAll();
        return new ResponseEntity<>(odCallingODs, HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<ODCalling_OD> getById(@PathVariable("id") int id) {
        Optional<ODCalling_OD> odCallingOD = odCallingOdService.getById(id);
        return odCallingOD.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Update operation
    @PutMapping("/update/{id}")
    public ResponseEntity<ODCalling_OD> update(
            @PathVariable("id") int id,
            @RequestBody ODCalling_OD updatedODCallingOD
    ) {
        ODCalling_OD odCallingOD = odCallingOdService.update(id, updatedODCallingOD);
        if (odCallingOD != null) {
            return new ResponseEntity<>(odCallingOD, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete operation
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") int id) {
        odCallingOdService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
