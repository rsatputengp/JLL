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

import com.sahayog.googlesheet.model.RDCalling_OD;
import com.sahayog.googlesheet.repository.IRDCalling_ODRepository1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RDCalling_ODService {

    private final IRDCalling_ODRepository1 rdCallingOdRepository;

    @Autowired
    public RDCalling_ODService(IRDCalling_ODRepository1 rdCallingOdRepository) {
        this.rdCallingOdRepository = rdCallingOdRepository;
    }

    // Create operation
    public RDCalling_OD create(RDCalling_OD rdCallingOD) {
        return rdCallingOdRepository.save(rdCallingOD);
    }

    // Read operation
    public List<RDCalling_OD> getAll() {
        return rdCallingOdRepository.findAll();
    }

    public Optional<RDCalling_OD> getById(int id) {
        return rdCallingOdRepository.findById(id);
    }

    // Update operation
    public RDCalling_OD update(int id, RDCalling_OD updatedRDCallingOD) {
        Optional<RDCalling_OD> existingRDCallingOD = rdCallingOdRepository.findById(id);
        if (existingRDCallingOD.isPresent()) {
            RDCalling_OD rdCallingOD = existingRDCallingOD.get();
            rdCallingOD.setRegion(updatedRDCallingOD.getRegion());
            rdCallingOD.setArea(updatedRDCallingOD.getArea());
            rdCallingOD.setBranchId(updatedRDCallingOD.getBranchId());
            rdCallingOD.setBranchName(updatedRDCallingOD.getBranchName());
            rdCallingOD.setRdAccountNumber(updatedRDCallingOD.getRdAccountNumber());
            rdCallingOD.setClientName(updatedRDCallingOD.getClientName());
            rdCallingOD.setDateOfDefault(updatedRDCallingOD.getDateOfDefault());
            rdCallingOD.setCallingDate(updatedRDCallingOD.getCallingDate());
            rdCallingOD.setCalledByEmployeeId(updatedRDCallingOD.getCalledByEmployeeId());
            rdCallingOD.setCalledByEmployeeName(updatedRDCallingOD.getCalledByEmployeeName());
            rdCallingOD.setReasonOfRDDefault(updatedRDCallingOD.getReasonOfRDDefault());
            rdCallingOD.setAnyMisappropriationCase(updatedRDCallingOD.getAnyMisappropriationCase());
            rdCallingOD.setRemarksIfAny(updatedRDCallingOD.getRemarksIfAny());
            rdCallingOD.setFilledBy(updatedRDCallingOD.getFilledBy());
            rdCallingOD.setModifiedBy(updatedRDCallingOD.getModifiedBy());
            return rdCallingOdRepository.save(rdCallingOD);
        } else {
            // Handle not found
            return null;
        }
    }

    // Delete operation
    public void delete(int id) {
        rdCallingOdRepository.deleteById(id);
    }
}

