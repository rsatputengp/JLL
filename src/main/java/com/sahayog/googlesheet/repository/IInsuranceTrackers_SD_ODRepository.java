/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sahayog.googlesheet.repository;

import com.sahayog.googlesheet.model.InsuranceTrackers_SD_OD;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author ritik
 */
@Repository
public interface IInsuranceTrackers_SD_ODRepository extends JpaRepository<InsuranceTrackers_SD_OD, Integer> {

}
