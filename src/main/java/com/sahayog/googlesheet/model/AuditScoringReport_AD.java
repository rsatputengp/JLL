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
public class AuditScoringReport_AD {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String region;
    private String area;
    private String branchName;
    private String branchId;
    private String monthOfAudit;
    private String auditedBy;
    private String auditReportRealeseDate;
    private String auditScoring;
    private String scores;
    private String remark;
    private String auditCover;
    private String auditSchedule;
    private String complinceStatus;
}
