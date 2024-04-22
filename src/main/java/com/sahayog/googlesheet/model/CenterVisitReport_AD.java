/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sahayog.googlesheet.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 *
 * @author ritik
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CenterVisitReport_AD {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String branchName;
    private String branchId;
    private String roName;
    private String roEmpId;
    private String dateOfCenterVisit;
    private String foName;
    private String foId;
    private String centerName;
    private String centerId;
    private String noOfInstallment;
    private String loanCollectionReceiptAvailableInFile;
    private String rdCollectionReceiptAvailableInFile;
    private String loanCardUpdate;
    private String rdPassbookIssued;
    private String rdCollectionRegular_Irregular;
    private String ifAnyODCustomer;
    private String ifAnyCustomerMigrate;
    private String bmVisitDone;
    private String amVisitDone;
    private String anyOtherObservation;
    private String filledBy;
    private String modifiedBy;
}
