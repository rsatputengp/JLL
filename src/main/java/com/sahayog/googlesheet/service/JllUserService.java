/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sahayog.googlesheet.service;

import com.google.gson.JsonArray;
import com.sahayog.googlesheet.model.JllUser;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import com.sahayog.googlesheet.repository.IJllUserRepository;
import java.io.IOException;
import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.stereotype.Service;

/**
 *
 * @author ritik
 */
@Service
public class JllUserService {

    @Autowired
    private IJllUserRepository repository;

    public JllUserService() {
        System.out.println("I am in JllService");
    }

    public JllUser add(String emp_id, String userName, String email, String zone,
            String region, String area, String branch,
            String designation, String password, String userIdStatus) {
        if (getUser(userName, emp_id, email) == null) {
            if ("Branch Manager".equals(designation) || "Account Executive".equals(designation) || "Risk Officer".equals(designation)) {
                JllUser addUser = addUser(emp_id, userName, email, zone, region, area, branch, designation, password, userIdStatus);
                return addUser;
            } else if ("Area Manager".equals(designation) || "Area Account Manager".equals(designation) || "Auditor".equals(designation)) {
                JllUser addManager = addManager(emp_id, userName, email, zone, region, area, branch, designation, password, userIdStatus);
                return addManager;
            } else if ("Regional Manager".equals(designation) || "MIS".equals(designation) || "Cluster Audit Manager".equals(designation)) {
                JllUser addSuperUser = addSuperUser(emp_id, userName, email, zone, region, area, branch, designation, password, userIdStatus);
                return addSuperUser;
            }
        }
        return getUser(emp_id);
    }

    public JllUser update(int id, String emp_id, String userName, String email,
            String zone, String region, ArrayList<String> area,
            ArrayList<String> branch, String designation,
            String userIdStatus) {
        JllUser user = getUser(emp_id);
        if (user != null) {
            user.setId(id);
            user.setEmp_id(emp_id);
            user.setUserName(userName);
            user.setEmail(email);
            user.setZone(zone);
            user.setRegion(region);
            user.setArea(area);
            user.setBranch(branch);
            user.setDesignation(designation);
            user.setUserIdStatus(userIdStatus);
            repository.save(user);
            return user;
        }
        return null;
    }

    public JllUser updateProfile(int id, String emp_id, String userName, String email) {
        JllUser user = get(id);
        if (user != null) {
            user.setEmp_id(emp_id);
            user.setUserName(userName);
            user.setEmail(email);
            repository.save(user);
            return user;
        }
        return null;
    }

    public JllUser update(String emp_id, String userName, String userIdStatus) {
        JllUser user = getUser(emp_id);
        if (user != null) {
            user.setUserIdStatus(userIdStatus);
            repository.save(user);
            return user;
        }
        return null;
    }

    public List<JllUser> getallUser() {
        return repository.findAll();
    }

    public JllUser get(int id) {
        Optional<JllUser> optional = repository.findById(id);
        JllUser get = optional.get();
        return get;
    }

    public List<JllUser> getActiveRecords() {
        return findRecords("Accept");
    }

    public List<JllUser> getInactiveRecords() {
        return findRecords("Reject");
    }

    public List<JllUser> getPendingRecords() {
        return findRecords("Pending");
    }

    public List<JllUser> getTerminateRecords() {
        return findRecords("Terminate");
    }

    public List<JllUser> getResetPasswordRecords() {
        return findRecords("Reset_Password");
    }

    public ArrayList<String> getAllRecordsNumberList() {
        List<JllUser> activeRecords = getActiveRecords();
        List<JllUser> inactiveRecords = getInactiveRecords();
        List<JllUser> pendingRecords = getPendingRecords();
        List<JllUser> terminateRecords = getTerminateRecords();
        List<JllUser> resetPasswordRecords = getResetPasswordRecords();
        ArrayList<String> arrayList = new ArrayList<String>();
        arrayList.add(activeRecords.size() + "");
        arrayList.add(inactiveRecords.size() + "");
        arrayList.add(pendingRecords.size() + "");
        arrayList.add(terminateRecords.size() + "");
        arrayList.add(resetPasswordRecords.size() + "");
        return arrayList;
    }

    public JllUser getUser(String userName, String emp_id, String email) {
        List<JllUser> findAll = getallUser();
        for (JllUser jllUser : findAll) {
            if (emp_id.equals(jllUser.getEmp_id()) || email.equals(jllUser.getEmail())) {
                return jllUser;
            }
        }

        return null;
    }

    public JllUser getUser(String emp_id) {
        List<JllUser> findAll = getallUser();
        for (JllUser jllUser : findAll) {
            if (emp_id.equals(jllUser.getEmp_id())) {
                return jllUser;
            }
        }

        return null;
    }

    public JllUser getUserM(String mail) {
        List<JllUser> findAll = repository.findAll();
        for (JllUser jllUser : findAll) {
            if (mail.equals(jllUser.getEmail())) {
                return jllUser;
            }
        }

        return null;
    }

    public JllUser getUser(String emp_id, String password) {
        JllUser JllUserOptional = findUserByUsernameAndPassword(emp_id, password);

        return JllUserOptional;
    }

    public JllUser getUserRstPass(String mail, String password) {
        JllUser user = getUserM(mail);
        if (user != null) {
            user.setPassword(password);
            JllUser record = repository.save(user);
            return record;
        }
        return user;
    }

    public String OtpVerification(String mail, String key) {
        JllUser user = getUserM(mail);
        if (user != null) {
            if (user.getKey().equals(key)) {
                return "OK";
            }
        }
        return "NotOk";
    }

    public String getUserRstPass(String mail) {
        JllUser user = getUserM(mail);
        if (user != null) {
            String generateOTP = generateOTP();
            user.setKey(generateOTP);
            MailSender.sendMail(mail, "OTP Verification for JLL", "This is a email sent from OTP :\n" + generateOTP);
            repository.save(user);
            return "OK";
        }
        return null;
    }

    public String delete(String emp_id, String userName,
            String userIdStatus) {
        JllUser user = getUser(emp_id);
        repository.deleteById(user.getId());
        return "OK";
    }

    public List<JllUser> findRecords(String val) {
        List<JllUser> jllUsers = repository.findAll();
        ArrayList<JllUser> jus = new ArrayList<>();
        for (JllUser jllUser : jllUsers) {
            if (jllUser.getUserIdStatus().equals(val)) {
                jus.add(jllUser);
            }
        }
        return jus;
    }

    private JllUser findUserByUsernameAndPassword(String emp_id, String password) {
        List<JllUser> jllUsers = repository.findAll();
        for (JllUser jllUser : jllUsers) {
            if (jllUser.getEmp_id().equals(emp_id) && jllUser.getPassword().equals(password)) {
                return jllUser;
            }
        }
        return null;
    }

    public String generateOTP() {

        // Generate a random 6-digit OTP
        Random random = new Random();
        int otp = 100000 + random.nextInt(999999); // Generating a random number between 100000 and 999999
        return String.valueOf(otp);
    }

    public List<JllUser> getActiveUser(String designation) {
        List<JllUser> jllUsers = getActiveRecords();
        ArrayList<JllUser> jus = new ArrayList<>();
        for (JllUser jllUser : jllUsers) {
            if (jllUser.getDesignation().equals(designation)) {
                jus.add(jllUser);
            }
        }
        return jus;
    }

    public JllUser addUser(String emp_id, String userName, String email, String zone,
            String region, String area, String branch,
            String designation, String password, String userIdStatus) {
        if (getUser(emp_id) == null) {
            JllUser user = new JllUser();
            user.setEmp_id(emp_id);
            user.setUserName(userName);
            user.setEmail(email);
            user.setZone(zone);
            user.setRegion(region);
            ArrayList<String> areaL = new ArrayList<>();
            areaL.add(area);
            user.setArea(areaL);
            ArrayList<String> branchL = new ArrayList<>();
            branchL.add(branch);
            user.setBranch(branchL);
            user.setDesignation(designation);
            user.setPassword(password);
            user.setUserIdStatus(userIdStatus);
            user.setKey(null);
            repository.save(user);
            return user;
        }
        return getUser(emp_id);
    }

    public JllUser addManager(String emp_id, String userName, String email, String zone,
            String region, String area, String branch,
            String designation, String password, String userIdStatus) {
        if (getUser(emp_id) == null) {
            AreaData areaData;
            try {
                areaData = new AreaData("/home/ritik/NetBeansProjects/JLL/src/main/resources/zone_Data.json");
//                areaData = new AreaData("/home/sysadmin/NetBeansProjects/JLL/src/main/resources/zone_Data.json");
                // Getter example
//                ArrayList<String> branchL;
                JsonArray jsonArray = areaData.getArea(zone, region, area);
//                ArrayList<String> areaL = (ArrayList<String>) areaData.getAreasForRegion(zone, region);
                ArrayList<String> branchL = (ArrayList<String>) areaData.convertJsonArrayToList(jsonArray);

                JllUser user = new JllUser();
                user.setEmp_id(emp_id);
                user.setUserName(userName);
                user.setEmail(email);
                user.setZone(zone);
                user.setRegion(region);
                ArrayList<String> areaL = new ArrayList<String>();
                areaL.add(area);
                user.setArea(areaL);
                user.setBranch(branchL);
                user.setDesignation(designation);
                user.setPassword(password);
                user.setUserIdStatus(userIdStatus);
                user.setKey(null);
                repository.save(user);
                return user;
            } catch (IOException ex) {
                Logger.getLogger(JllUserService.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return getUser(emp_id);
    }

    public JllUser addSuperUser(String emp_id, String userName, String email, String zone,
            String region, String area, String branch,
            String designation, String password, String userIdStatus) {
        if (getUser(emp_id) == null) {
            AreaData areaData;
            try {
                areaData = new AreaData("/home/ritik/NetBeansProjects/JLL/src/main/resources/zone_Data.json");

                ArrayList<String> branchList = new ArrayList<>();
                ArrayList<String> areaList = (ArrayList<String>) areaData.getAreasForRegion(zone, region);

                for (String areaName : areaList) {

                    JsonArray jsonArray = areaData.getArea(zone, region, areaName);
                    List<String> list = areaData.convertJsonArrayToList(jsonArray);
                    for (String branchName : list) {
                        branchList.add(branchName);
                    }
                }

                JllUser user = new JllUser();
                user.setEmp_id(emp_id);
                user.setUserName(userName);
                user.setEmail(email);
                user.setZone(zone);
                user.setRegion(region);
//                ArrayList<String> areaL = new ArrayList<String>();
//                areaL.add(area);
                user.setArea(areaList);
//                ArrayList<String> branchL = new ArrayList<String>();
//                branchL.add(branch);
                user.setBranch(branchList);
                user.setDesignation(designation);
                user.setPassword(password);
                user.setUserIdStatus(userIdStatus);
                user.setKey(null);
                repository.save(user);
                return user;
            } catch (IOException ex) {
                Logger.getLogger(JllUserService.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return getUser(emp_id);
    }

}
