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
import com.sahayog.googlesheet.model.HouseVerification_AD;
import com.sahayog.googlesheet.repository.IHouseVerification_ADRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HouseVerification_ADService {

    private final IHouseVerification_ADRepository houseVerificationRepository;

    @Autowired
    public HouseVerification_ADService(IHouseVerification_ADRepository houseVerificationRepository) {
        this.houseVerificationRepository = houseVerificationRepository;
    }

    // Create operation
    public HouseVerification_AD create(HouseVerification_AD houseVerification) {
        return houseVerificationRepository.save(houseVerification);
    }

    // Read operation
    public List<HouseVerification_AD> getAll() {
        return houseVerificationRepository.findAll();
    }

    public Optional<HouseVerification_AD> getById(int id) {
        return houseVerificationRepository.findById(id);
    }

    // Update operation
    public HouseVerification_AD update(int id, HouseVerification_AD updatedHouseVerification) {
        Optional<HouseVerification_AD> existingHouseVerification = houseVerificationRepository.findById(id);
        if (existingHouseVerification.isPresent()) {
            HouseVerification_AD houseVerification = existingHouseVerification.get();
            houseVerification.setBranchId(updatedHouseVerification.getBranchId());
            houseVerification.setBranchName(updatedHouseVerification.getBranchName());
            houseVerification.setRoName(updatedHouseVerification.getRoName());
            houseVerification.setRoId(updatedHouseVerification.getRoId());
            houseVerification.setHvDate(updatedHouseVerification.getHvDate());
            houseVerification.setCenterName(updatedHouseVerification.getCenterName());
            houseVerification.setCenterId(updatedHouseVerification.getCenterId());
            houseVerification.setClientId(updatedHouseVerification.getClientId());
            houseVerification.setClientName(updatedHouseVerification.getClientName());
            houseVerification.setLoanAppliedCycle(updatedHouseVerification.getLoanAppliedCycle());
            houseVerification.setFoId(updatedHouseVerification.getFoId());
            houseVerification.setFoName(updatedHouseVerification.getFoName());
            houseVerification.setReasonOfCancellation(updatedHouseVerification.getReasonOfCancellation());
            houseVerification.setRemarks(updatedHouseVerification.getRemarks());
            houseVerification.setFilledBy(updatedHouseVerification.getFilledBy());
            houseVerification.setModifiedBy(updatedHouseVerification.getModifiedBy());
            return houseVerificationRepository.save(houseVerification);
        } else {
            // Handle not found
            return null;
        }
    }

    // Delete operation
    public void delete(int id) {
        houseVerificationRepository.deleteById(id);
    }
}

