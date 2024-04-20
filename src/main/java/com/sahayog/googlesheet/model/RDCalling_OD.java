/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sahayog.googlesheet.model;

import java.util.ArrayList;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
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
public class RDCalling_OD {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String region;
    private String area;
    private int branchId;
    private String branchName;
    private long rdAccountNumber;
    private String clientName;
    private String dateOfDefault;
    private String callingDate;
    private int calledByEmployeeId;
    private String calledByEmployeeName;
    private String reasonOfRDDefault;
    private String anyMisappropriationCase;
    private String remarksIfAny;
    private String filledBy;
    private String modifiedBy;
}
