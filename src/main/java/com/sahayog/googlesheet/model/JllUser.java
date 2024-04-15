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
import net.bytebuddy.asm.Advice;

/**
 *
 * @author ritik
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class JllUser {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column(name = "emp_id", unique = true)
    private String emp_id;
    @Column(name = "userName", unique = true)
    private String userName;
    @Column(name = "email", unique = true)
    private String email;
    private String zone;
    private String region;
    @Lob
    @Column(name = "area", length = 3000)
    private ArrayList<String> area;
    @Lob
    @Column(name = "branch", length = 3000)
    private ArrayList<String> branch;
    private String designation;
    private String password;
    private String userIdStatus;
    private String reacted;
    private String key;

}
