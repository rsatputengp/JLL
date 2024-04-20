package com.sahayog.googlesheet.service;

import com.sahayog.googlesheet.model.ODCalling_OD;
import com.sahayog.googlesheet.repository.IODCalling_ODRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ODCalling_ODService {

    @Autowired
    private IODCalling_ODRepository odCallingOdRepository;

    // Create operation
    public ODCalling_OD create(ODCalling_OD odCallingOD) {
        return odCallingOdRepository.save(odCallingOD);
    }

    // Read operation
    public List<ODCalling_OD> getAll() {
        return odCallingOdRepository.findAll();
    }

    public Optional<ODCalling_OD> getById(int id) {
        return odCallingOdRepository.findById(id);
    }

    // Update operation
    public ODCalling_OD update(int id, ODCalling_OD updatedODCallingOD) {
        Optional<ODCalling_OD> existingODCallingOD = odCallingOdRepository.findById(id);
        if (existingODCallingOD.isPresent()) {
            ODCalling_OD odCallingOD = existingODCallingOD.get();
            odCallingOD.setRegion(updatedODCallingOD.getRegion());
            odCallingOD.setArea(updatedODCallingOD.getArea());
            odCallingOD.setBranchId(updatedODCallingOD.getBranchId());
            odCallingOD.setBranchName(updatedODCallingOD.getBranchName());
            odCallingOD.setLoanAccountNumber(updatedODCallingOD.getLoanAccountNumber());
            odCallingOD.setClientName(updatedODCallingOD.getClientName());
            odCallingOD.setDateOfDefault(updatedODCallingOD.getDateOfDefault());
            odCallingOD.setCallingDate(updatedODCallingOD.getCallingDate());
            odCallingOD.setCalledByEmployeeId(updatedODCallingOD.getCalledByEmployeeId());
            odCallingOD.setCalledByEmployeeName(updatedODCallingOD.getCalledByEmployeeName());
            odCallingOD.setReasonOfODDefault(updatedODCallingOD.getReasonOfODDefault());
            odCallingOD.setAnyMisappropriationCase(updatedODCallingOD.getAnyMisappropriationCase());
            odCallingOD.setRemarksIfAny(updatedODCallingOD.getRemarksIfAny());
            odCallingOD.setFilledBy(updatedODCallingOD.getFilledBy());
            odCallingOD.setModifiedBy(updatedODCallingOD.getModifiedBy());
            return odCallingOdRepository.save(odCallingOD);
        } else {
            // Handle not found
            return null;
        }
    }

    // Delete operation
    public void delete(int id) {
        odCallingOdRepository.deleteById(id);
    }
}
