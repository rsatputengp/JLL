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
import com.sahayog.googlesheet.model.CenterVisitReport_AD;
import com.sahayog.googlesheet.repository.ICenterVisitReport_ADRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CenterVisitReport_ADService {

    private final ICenterVisitReport_ADRepository centerVisitReportRepository;

    @Autowired
    public CenterVisitReport_ADService(ICenterVisitReport_ADRepository centerVisitReportRepository) {
        this.centerVisitReportRepository = centerVisitReportRepository;
    }

    // Create operation
    public CenterVisitReport_AD create(CenterVisitReport_AD centerVisitReport) {
        return centerVisitReportRepository.save(centerVisitReport);
    }

    // Read operation
    public List<CenterVisitReport_AD> getAll() {
        return centerVisitReportRepository.findAll();
    }

    public Optional<CenterVisitReport_AD> getById(int id) {
        return centerVisitReportRepository.findById(id);
    }

    // Update operation
    public CenterVisitReport_AD update(int id, CenterVisitReport_AD updatedCenterVisitReport) {
        Optional<CenterVisitReport_AD> existingCenterVisitReport = centerVisitReportRepository.findById(id);
        if (existingCenterVisitReport.isPresent()) {
            CenterVisitReport_AD centerVisitReport = existingCenterVisitReport.get();
            centerVisitReport.setBranchName(updatedCenterVisitReport.getBranchName());
            centerVisitReport.setBranchId(updatedCenterVisitReport.getBranchId());
            centerVisitReport.setRoName(updatedCenterVisitReport.getRoName());
            centerVisitReport.setRoEmpId(updatedCenterVisitReport.getRoEmpId());
            centerVisitReport.setDateOfCenterVisit(updatedCenterVisitReport.getDateOfCenterVisit());
            centerVisitReport.setFoName(updatedCenterVisitReport.getFoName());
            centerVisitReport.setFoId(updatedCenterVisitReport.getFoId());
            centerVisitReport.setCenterName(updatedCenterVisitReport.getCenterName());
            centerVisitReport.setCenterId(updatedCenterVisitReport.getCenterId());
            centerVisitReport.setNoOfInstallment(updatedCenterVisitReport.getNoOfInstallment());
            centerVisitReport.setLoanCollectionReceiptAvailableInFile(updatedCenterVisitReport.getLoanCollectionReceiptAvailableInFile());
            centerVisitReport.setRdCollectionReceiptAvailableInFile(updatedCenterVisitReport.getRdCollectionReceiptAvailableInFile());
            centerVisitReport.setLoanCardUpdate(updatedCenterVisitReport.getLoanCardUpdate());
            centerVisitReport.setRdPassbookIssued(updatedCenterVisitReport.getRdPassbookIssued());
            centerVisitReport.setRdCollectionRegular_Irregular(updatedCenterVisitReport.getRdCollectionRegular_Irregular());
            centerVisitReport.setIfAnyODCustomer(updatedCenterVisitReport.getIfAnyODCustomer());
            centerVisitReport.setIfAnyCustomerMigrate(updatedCenterVisitReport.getIfAnyCustomerMigrate());
            centerVisitReport.setBmVisitDone(updatedCenterVisitReport.getBmVisitDone());
            centerVisitReport.setAmVisitDone(updatedCenterVisitReport.getAmVisitDone());
            centerVisitReport.setAnyOtherObservation(updatedCenterVisitReport.getAnyOtherObservation());
            centerVisitReport.setFilledBy(updatedCenterVisitReport.getFilledBy());
            centerVisitReport.setModifiedBy(updatedCenterVisitReport.getModifiedBy());
            return centerVisitReportRepository.save(centerVisitReport);
        } else {
            // Handle not found
            return null;
        }
    }

    // Delete operation
    public void delete(int id) {
        centerVisitReportRepository.deleteById(id);
    }
}

