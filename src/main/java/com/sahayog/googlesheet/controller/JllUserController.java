/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sahayog.googlesheet.controller;

import com.sahayog.googlesheet.model.JllUser;
import com.sahayog.googlesheet.service.JllUserService;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ritik
 */
@RestController
@RequestMapping("/user")
public class JllUserController {

    @Autowired
    private JllUserService service;

    public JllUserController() {
        System.out.println("I am in User RecordController");
    }
    
    // Add user
    @RequestMapping("/add/{emp_id}/{userName}/{email}/{zone}/{region}/{area}/{branch}/{designation}/{password}/{userIdStatus}/{reacted}")
    public JllUser save(@PathVariable String emp_id, @PathVariable String userName,
            @PathVariable String email, @PathVariable String zone,
            @PathVariable String region, @PathVariable String area,
            @PathVariable String branch, @PathVariable String designation,
            @PathVariable String password, @PathVariable String userIdStatus,
            @PathVariable String reacted) {
        JllUser jllUser
                = service.add(emp_id, userName, email, zone, region, area, branch, designation, password, userIdStatus, reacted);
        return jllUser;
    }

    // Update for branch and area
    @RequestMapping("/update/{id}/{emp_id}/{userName}/{email}/{zone}/{region}/{area}/{branch}/{designation}/{userIdStatus}/{reacted}")
    public JllUser update(@PathVariable int id, @PathVariable String emp_id, @PathVariable String userName,
            @PathVariable String email, @PathVariable String zone,
            @PathVariable String region, @PathVariable ArrayList<String> area,
            @PathVariable ArrayList<String> branch, @PathVariable String designation,
            @PathVariable String userIdStatus, @PathVariable String reacted) {
        JllUser jllUser
                = service.update(id, emp_id, userName, email, zone, region, area, branch, designation, userIdStatus, reacted);
        return jllUser;
    }

    // Update for Reaction take by ?
    @RequestMapping("/updateStatus/{emp_id}/{userName}/{userIdStatus}/{reacted}")
    public JllUser updateStatus(@PathVariable String emp_id, @PathVariable String userName,
            @PathVariable String userIdStatus, @PathVariable String reacted) {
        JllUser jllUser
                = service.updateStatus(emp_id, userName, userIdStatus, reacted);
        return jllUser;
    }

    // Edit profile for user
    @RequestMapping("/updateProfile/{id}/{emp_id}/{userName}/{userIdStatus}")
    public JllUser updateProfile(@PathVariable int id, @PathVariable String emp_id,
            @PathVariable String userName, @PathVariable String userIdStatus) {
        JllUser jllUser
                = service.updateProfile(id, emp_id, userName, userIdStatus);
        return jllUser;
    }

    // Get all user list
    @RequestMapping("/getallUser")
    public List<JllUser> getAll() {
        List<JllUser> list = service.getallUser();
        return list;
    }

    // Getting record by ID
    @RequestMapping("/get/{id}")
    public JllUser get(@PathVariable int id) {
        JllUser userRecord = service.get(id);
        return userRecord;
    }

    // Sign in
    @RequestMapping("/login/{emp_id}/{password}")
    public JllUser login(@PathVariable String emp_id, @PathVariable String password) {
        JllUser userRecord = service.getUser(emp_id, password);
        return userRecord;
    }

    // Reset Password
    @RequestMapping("/resetPassword/{email}/{password}")
    public JllUser reset(@PathVariable String email, @PathVariable String password) {
        JllUser userRecord = service.getUserRstPass(email, password);
        return userRecord;
    }

    // For OTP verification
    @RequestMapping("/otpVerification/{email}/{key}")
    public ResponseEntity<Object> OtpVerification(@PathVariable String email, @PathVariable String key) {
        String status = service.OtpVerification(email, key);
        HashMap<String, String> response = new HashMap<>();
        response.put("message", status);
        return ResponseEntity.ok(response);
    }

    // OTP Sender
    @RequestMapping("/otpSender/{email}")
    public ResponseEntity<Object> OtpSender(@PathVariable String email) {
        String status = service.getUserRstPass(email);
        HashMap<String, String> response = new HashMap<>();
        response.put("message", status);
        return ResponseEntity.ok(response);
    }

    // Delete User
    @RequestMapping("/delete/{emp_id}/{userName}/{userIdStatus}")
    public ResponseEntity<Object> delete(@PathVariable String emp_id, @PathVariable String userName,
            @PathVariable String userIdStatus) {
        String status = service.delete(emp_id, userName, userIdStatus);
        HashMap<String, String> response = new HashMap<>();
        response.put("message", status);
        return ResponseEntity.ok(response);
    }

    // Getting by emp_id
    @RequestMapping("/getuser/{emp_id}")
    public JllUser getJllUser(@PathVariable String emp_id) {
        return service.getUser(emp_id);
    }

    // Get User Details
    @RequestMapping("/getuserDetails/{userName}/{emp_id}/{email}")
    public JllUser getuserDetails(@PathVariable String userName, @PathVariable String emp_id, @PathVariable String email) {
        return service.getUser(userName, emp_id, email);
    }

    // Get User by mail
    @RequestMapping("/getEmail/{mail}")
    public JllUser getJMail(@PathVariable String mail) {
        return service.getUserM(mail);
    }

    // Getting Actived User
    @RequestMapping("/getActiveUser/{designation}")
    public List<JllUser> getActiveUser(@PathVariable String designation) {
        List<JllUser> list = service.getActiveUser(designation);
        return list;
    }
    
    // Getting Acceptance list
    @RequestMapping("/getuser_accept_list")
    public List<JllUser> accept_list() {
        List<JllUser> list = service.getActiveRecords();
        return list;
    }

    // Getting Rejected list
    @RequestMapping("/getuser_reject_list")
    public List<JllUser> reject_list() {
        List<JllUser> list = service.getInactiveRecords();
        return list;
    }

    // Getting Pending list
    @RequestMapping("/getuser_pending_list")
    public List<JllUser> pending_list() {
        List<JllUser> list = service.getPendingRecords();
        return list;
    }

    // Getting Terminated list
    @RequestMapping("/getuser_terminate_list")
    public List<JllUser> terminate_list() {
        List<JllUser> list = service.getTerminateRecords();
        return list;
    }

//    // Getting Resetpassword list
//    @RequestMapping("getuser_resetpassword_list")
//    public List<JllUser> resetpassword_list() {
//        List<JllUser> list = service.getResetPasswordRecords();
//        return list;
//    }

    // Getting Total no of user list all status
    @RequestMapping("/getAllRecordsNumberList")
    public ArrayList<String> getAllRecordsNumberList() {
        ArrayList<String> allRecordsNumberList = service.getAllRecordsNumberList();
        return allRecordsNumberList;
    }

}
