/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sahayog.googlesheet.repository;

import com.sahayog.googlesheet.model.HouseVerification_AD;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author ritik
 */
@Repository
public interface IHouseVerification_ADRepository extends JpaRepository<HouseVerification_AD, Integer> {


//    @Query("SELECT u FROM JllUser u WHERE u.userName = :userName AND u.userPassword = :password")
//    Optional<JllUser> findUserByUsernameAndPassword(@Param("userName") String userName, @Param("password") String password);
//    JllUser findByUsername(String userName);
//    @Query("SELECT u FROM JllUser u WHERE u.userName = :userName")
//    Optional<JllUser> findUserByUsername(@Param("userName") String userName);
//    @Query("SELECT u FROM JllUser u WHERE u.userIdStatus = 'Accept'")
//    List<JllUser> findActiveRecords();
//
//    @Query("SELECT u FROM JllUser u WHERE u.userIdStatus = 'Reject'")
//    List<JllUser> findInactiveRecords();
//
//    @Query("SELECT u FROM JllUser u WHERE u.userIdStatus = 'Pending'")
//    List<JllUser> findPendingRecords();
//
//    @Query("SELECT u FROM JllUser u WHERE u.userIdStatus = 'Terminate'")
//    List<JllUser> findTerminateRecords();
//
//    @Query("SELECT u FROM JllUser u WHERE u.userIdStatus = 'Reset_Password'")
//    List<JllUser> findResetPasswordRecords();
}
