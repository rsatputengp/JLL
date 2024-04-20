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
public class OD_Calling_OD {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String region;
    private String area;
    private String branchId;
    private String branchName;
    private String loanAccountNumber;
    private String clientName;
    private String dateOfDefault;
    private String callingDate;
    private String calledByEmployeeId;
    private String calledByEmployeeName;
    private String reasonOfODDefault;
    private String anyMisappropriationCase;
    private String remarksIfAny;
    private String filledBy;
    private String modifiedBy;
}
