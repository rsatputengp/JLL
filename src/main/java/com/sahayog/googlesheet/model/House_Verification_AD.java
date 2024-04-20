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
public class House_Verification_AD {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String branchId;
    private String branchName;
    private String roName;
    private String roId;
    private String hvDate;
    private String centerName;
    private String centerId;
    private String clientId;
    private String clientName;
    private String loanAppliedCycle;
    private String foId;
    private String foName;
    private String reasonOfCancellation;
    private String remarks;
}
