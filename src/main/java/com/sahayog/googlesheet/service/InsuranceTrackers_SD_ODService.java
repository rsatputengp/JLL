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
import com.sahayog.googlesheet.model.InsuranceTrackers_SD_OD;
import com.sahayog.googlesheet.repository.IInsuranceTrackers_SD_ODRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InsuranceTrackers_SD_ODService {

    private final IInsuranceTrackers_SD_ODRepository insuranceTrackersRepository;

    @Autowired
    public InsuranceTrackers_SD_ODService(IInsuranceTrackers_SD_ODRepository insuranceTrackersRepository) {
        this.insuranceTrackersRepository = insuranceTrackersRepository;
    }

    // Create operation
    public InsuranceTrackers_SD_OD create(InsuranceTrackers_SD_OD insuranceTrackers) {
        return insuranceTrackersRepository.save(insuranceTrackers);
    }

    // Read operation
    public List<InsuranceTrackers_SD_OD> getAll() {
        return insuranceTrackersRepository.findAll();
    }

    public Optional<InsuranceTrackers_SD_OD> getById(int id) {
        return insuranceTrackersRepository.findById(id);
    }

    // Update operation
    public InsuranceTrackers_SD_OD update(int id, InsuranceTrackers_SD_OD updatedInsuranceTrackers) {
        Optional<InsuranceTrackers_SD_OD> existingInsuranceTrackers = insuranceTrackersRepository.findById(id);
        if (existingInsuranceTrackers.isPresent()) {
            InsuranceTrackers_SD_OD insuranceTrackers = existingInsuranceTrackers.get();
            insuranceTrackers.setRegion(updatedInsuranceTrackers.getRegion());
            insuranceTrackers.setBranchCode(updatedInsuranceTrackers.getBranchCode());
            insuranceTrackers.setBranchName(updatedInsuranceTrackers.getBranchName());
            insuranceTrackers.setClaimId(updatedInsuranceTrackers.getClaimId());
            insuranceTrackers.setCenterId(updatedInsuranceTrackers.getCenterId());
            insuranceTrackers.setCenterName(updatedInsuranceTrackers.getCenterName());
            insuranceTrackers.setClientId(updatedInsuranceTrackers.getClientId());
            insuranceTrackers.setAccountId(updatedInsuranceTrackers.getAccountId());
            insuranceTrackers.setDisbursementDate(updatedInsuranceTrackers.getDisbursementDate());
            insuranceTrackers.setClientName(updatedInsuranceTrackers.getClientName());
            insuranceTrackers.setNomineeName(updatedInsuranceTrackers.getNomineeName());
            insuranceTrackers.setDeathClientName(updatedInsuranceTrackers.getDeathClientName());
            insuranceTrackers.setDisbursementAmount(updatedInsuranceTrackers.getDisbursementAmount());
            insuranceTrackers.setEmiDay(updatedInsuranceTrackers.getEmiDay());
            insuranceTrackers.setDateOfDeath(updatedInsuranceTrackers.getDateOfDeath());
            insuranceTrackers.setDeathReasion(updatedInsuranceTrackers.getDeathReasion());
            insuranceTrackers.setPaidEmi(updatedInsuranceTrackers.getPaidEmi());
            insuranceTrackers.setLoanOutstandingAmt(updatedInsuranceTrackers.getLoanOutstandingAmt());
            insuranceTrackers.setOtsAmt(updatedInsuranceTrackers.getOtsAmt());
            insuranceTrackers.setClaimSettelmentAmt(updatedInsuranceTrackers.getClaimSettelmentAmt());
            insuranceTrackers.setMemberHandoverAmount(updatedInsuranceTrackers.getMemberHandoverAmount());
            insuranceTrackers.setClaimStatus(updatedInsuranceTrackers.getClaimStatus());
            insuranceTrackers.setRemarks(updatedInsuranceTrackers.getRemarks());
            insuranceTrackers.setTrueCellPunchingDate(updatedInsuranceTrackers.getTrueCellPunchingDate());
            insuranceTrackers.setDatedOfDOCReceivedFromMember(updatedInsuranceTrackers.getDatedOfDOCReceivedFromMember());
            insuranceTrackers.setDatedOfSendDocToHo(updatedInsuranceTrackers.getDatedOfSendDocToHo());
            insuranceTrackers.setDatedOfSendDocToKotak(updatedInsuranceTrackers.getDatedOfSendDocToKotak());
            insuranceTrackers.setDateOfSettelmentByKotak(updatedInsuranceTrackers.getDateOfSettelmentByKotak());
            insuranceTrackers.setAccountCloseDateByBranch(updatedInsuranceTrackers.getAccountCloseDateByBranch());
            insuranceTrackers.setIncentiveReceivedInMonth(updatedInsuranceTrackers.getIncentiveReceivedInMonth());
            insuranceTrackers.setFilledBy(updatedInsuranceTrackers.getFilledBy());
            insuranceTrackers.setModifiedBy(updatedInsuranceTrackers.getModifiedBy());
            return insuranceTrackersRepository.save(insuranceTrackers);
        } else {
            // Handle not found
            return null;
        }
    }

    // Delete operation
    public void delete(int id) {
        insuranceTrackersRepository.deleteById(id);
    }
}

