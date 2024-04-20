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
public class InsuranceTrackers_SD_OD {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String region;
    private String branchCode;
    private String branchName;
    private String claimId;
    private String centerId;
    private String centerName;
    private String clientId;
    private String accountId;
    private String disbursementDate;
    private String clientName;
    private String nomineeName;
    private String deathClientName;
    private String disbursementAmount;
    private String emiDay;
    private String dateOfDeath;
    private String deathReasion;
    private String paidEmi;
    private String loanOutstandingAmt;
    private String otsAmt;
    private String claimSettelmentAmt;
    private String memberHandoverAmount;
    private String claimStatus;
    private String remarks;
    private String trueCellPunchingDate;
    private String datedOfDOCReceivedFromMember;
    private String datedOfSendDocToHo;
    private String datedOfSendDocToKotak;
    private String dateOfSettelmentByKotak;
    private String accountCloseDateByBranch;
    private String incentiveReceivedInMonth;
}
