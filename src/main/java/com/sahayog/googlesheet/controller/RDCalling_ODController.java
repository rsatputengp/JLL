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
import com.sahayog.googlesheet.model.RDCalling_OD;
import com.sahayog.googlesheet.service.RDCalling_ODService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rdcalling")
public class RDCalling_ODController {

    private final RDCalling_ODService rdCallingOdService;

    @Autowired
    public RDCalling_ODController(RDCalling_ODService rdCallingOdService) {
        this.rdCallingOdService = rdCallingOdService;
    }

    // Create operation
    @PostMapping("/create")
    public ResponseEntity<RDCalling_OD> create(@RequestBody RDCalling_OD rdCallingOD) {
        RDCalling_OD createdRDCallingOD = rdCallingOdService.create(rdCallingOD);
        return new ResponseEntity<>(createdRDCallingOD, HttpStatus.CREATED);
    }

    // Read operation
    @GetMapping("/getall")
    public ResponseEntity<List<RDCalling_OD>> getAll() {
        List<RDCalling_OD> rdCallingODs = rdCallingOdService.getAll();
        return new ResponseEntity<>(rdCallingODs, HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<RDCalling_OD> getById(@PathVariable("id") int id) {
        Optional<RDCalling_OD> rdCallingOD = rdCallingOdService.getById(id);
        return rdCallingOD.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Update operation
    @PutMapping("/update/{id}")
    public ResponseEntity<RDCalling_OD> update(
            @PathVariable("id") int id,
            @RequestBody RDCalling_OD updatedRDCallingOD
    ) {
        RDCalling_OD rdCallingOD = rdCallingOdService.update(id, updatedRDCallingOD);
        if (rdCallingOD != null) {
            return new ResponseEntity<>(rdCallingOD, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete operation
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") int id) {
        rdCallingOdService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

