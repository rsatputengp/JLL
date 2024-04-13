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
@RequestMapping("user")
public class JllUserController {

    @Autowired
    private JllUserService service;

    public JllUserController() {
        System.out.println("I am in User RecordController");
    }

    @RequestMapping("add/{emp_id}/{userName}/{email}/{zone}/{region}/{area}/{branch}/{designation}/{password}/{userIdStatus}")
    public JllUser save(@PathVariable String emp_id, @PathVariable String userName,
            @PathVariable String email, @PathVariable String zone,
            @PathVariable String region, @PathVariable String area,
            @PathVariable String branch, @PathVariable String designation,
            @PathVariable String password, @PathVariable String userIdStatus) {
        JllUser jllUser
                = service.add(emp_id, userName, email, zone, region, area, branch, designation, password, userIdStatus);
        return jllUser;
    }

    @RequestMapping("update/{id}/{emp_id}/{userName}/{email}/{zone}/{region}/{area}/{branch}/{designation}/{userIdStatus}")
    public JllUser update(@PathVariable int id, @PathVariable String emp_id, @PathVariable String userName,
            @PathVariable String email, @PathVariable String zone,
            @PathVariable String region, @PathVariable ArrayList<String> area,
            @PathVariable ArrayList<String> branch, @PathVariable String designation,
            @PathVariable String userIdStatus) {
        JllUser jllUser
                = service.update(id, emp_id, userName, email, zone, region, area, branch, designation, userIdStatus);
        return jllUser;
    }

    @RequestMapping("updateStatus/{emp_id}/{userName}/{userIdStatus}")
    public JllUser updateStatus(@PathVariable String emp_id, @PathVariable String userName,
            @PathVariable String userIdStatus) {
        JllUser jllUser
                = service.update(emp_id, userName, userIdStatus);
        return jllUser;
    }

    @RequestMapping("updateProfile/{id}/{emp_id}/{userName}/{userIdStatus}")
    public JllUser updateProfile(@PathVariable int id, @PathVariable String emp_id,
            @PathVariable String userName, @PathVariable String userIdStatus) {
        JllUser jllUser
                = service.updateProfile(id, emp_id, userName, userIdStatus);
        return jllUser;
    }

    @RequestMapping("getallUser")
    public List<JllUser> getAll() {
        List<JllUser> list = service.getallUser();
        return list;
    }

    @RequestMapping("get/{id}")
    public JllUser get(@PathVariable int id) {
        JllUser userRecord = service.get(id);
        return userRecord;
    }

    @RequestMapping("login/{emp_id}/{password}")
    public JllUser login(@PathVariable String emp_id, @PathVariable String password) {
        JllUser userRecord = service.getUser(emp_id, password);
        return userRecord;
    }

    @RequestMapping("resetPassword/{email}/{password}")
    public JllUser reset(@PathVariable String email, @PathVariable String password) {
        JllUser userRecord = service.getUserRstPass(email, password);
        return userRecord;
    }

    @RequestMapping("otpVerification/{email}/{key}")
    public ResponseEntity<Object> OtpVerification(@PathVariable String email, @PathVariable String key) {
        String status = service.OtpVerification(email, key);
        HashMap<String, String> response = new HashMap<>();
        response.put("message", status);
        return ResponseEntity.ok(response);
    }

    @RequestMapping("otpSender/{email}")
    public ResponseEntity<Object> OtpSender(@PathVariable String email) {
        String status = service.getUserRstPass(email);
        HashMap<String, String> response = new HashMap<>();
        response.put("message", status);
        return ResponseEntity.ok(response);
    }

//    @RequestMapping("delete/{id}")
//    public void delete(@PathVariable int id) {
//        service.delete(id);
//    }
    @RequestMapping("delete/{emp_id}/{userName}/{userIdStatus}")
    public ResponseEntity<Object> delete(@PathVariable String emp_id, @PathVariable String userName,
            @PathVariable String userIdStatus) {
        String status = service.delete(emp_id, userName, userIdStatus);
        HashMap<String, String> response = new HashMap<>();
        response.put("message", status);
        return ResponseEntity.ok(response);
    }

    @RequestMapping("getuser/{emp_id}")
    public JllUser getJllUser(@PathVariable String emp_id) {
        return service.getUser(emp_id);
    }

    @RequestMapping("getEmail/{mail}")
    public JllUser getJMail(@PathVariable String mail) {
        return service.getUserM(mail);
    }

    @RequestMapping("getActiveUser/{designation}")
    public List<JllUser> getActiveUser(@PathVariable String designation) {
        List<JllUser> list = service.getActiveUser(designation);
        return list;
    }

    @RequestMapping("getuser_accept_list")
    public List<JllUser> accept_list() {
        List<JllUser> list = service.getActiveRecords();
        return list;
    }

    @RequestMapping("getuser_reject_list")
    public List<JllUser> reject_list() {
        List<JllUser> list = service.getInactiveRecords();
        return list;
    }

    @RequestMapping("getuser_pending_list")
    public List<JllUser> pending_list() {
        List<JllUser> list = service.getPendingRecords();
        return list;
    }

    @RequestMapping("getuser_terminate_list")
    public List<JllUser> terminate_list() {
        List<JllUser> list = service.getTerminateRecords();
        return list;
    }

    @RequestMapping("getuser_resetpassword_list")
    public List<JllUser> resetpassword_list() {
        List<JllUser> list = service.getResetPasswordRecords();
        return list;
    }

    @RequestMapping("getAllRecordsNumberList")
    public ArrayList<String> getAllRecordsNumberList() {
        ArrayList<String> allRecordsNumberList = service.getAllRecordsNumberList();
        return allRecordsNumberList;
    }

}
