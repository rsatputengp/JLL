/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('CAM_App', []);
app.controller('CAM_Controller', function ($scope, $http, $document) {


    $scope.userRecord = JSON.parse(window.localStorage.getItem("user"));
    var protocal = window.location.protocol;
    var host = window.location.host;
    $scope.uRl = protocal + "//" + host + "/";

    if (($scope.userRecord) && ($scope.userRecord.designation === "Cluster Audit Manager")) {

        $scope.profileCard = false;
        $scope.notificationCard = false;
        $scope.helpCard = false;
        $scope.dashBoard = false;

        //list view
        $scope.houseverification = true;
        $scope.centervisitreport = true;
        $scope.auditscoringreport = true;

        //form view
        $scope.houseverificationForm = false;
        $scope.centervisitreportForm = false;
        $scope.auditscoringreportForm = false;

        // side bar initial
        $scope.sidebarWidth = '0px';

        //getting list for displaying
        $scope.houseVerificationList = [];
        $scope.centerVisitReportList = [];
        $scope.auditScoringReportList = [];




        //getting all lists data --->
        $scope.getListforHV = function () {
            console.log($scope.uRl + "houseverification/getall");
            $http.get($scope.uRl + "houseverification/getall")
                    .then(function (response) {
                        $scope.houseVerificationList = response.data;
                    }, function (error) {
                        console.error(error);
                    });
        };

        $scope.getListforCVR = function () {

            console.log($scope.uRl + "centervisitreport/getall");
            $http.get($scope.uRl + "centervisitreport/getall")
                    .then(function (response) {
                        $scope.centerVisitReportList = response.data;
                    }, function (error) {
                        console.error(error);
                    });
        };

        $scope.getListforASR = function () {

            console.log($scope.uRl + "auditscoringreport/getall");
            $http.get($scope.uRl + "auditscoringreport/getall")
                    .then(function (response) {
                        $scope.auditScoringReportList = response.data;
                    }, function (error) {
                        console.error(error);
                    });
        };
        $scope.getListforHV();
        $scope.getListforCVR();
        $scope.getListforASR();
        //<-------------


        //for HV list view
        $scope.houseVerification = function () {
            $scope.houseverification = true;
            $scope.centervisitreport = false;
            $scope.auditscoringreport = false;

            $scope.dashBoard = false;

            $scope.houseverificationForm = false;
            $scope.centervisitreportForm = false;
            $scope.auditscoringreportForm = false;

            //for close the profile
            $scope.showProfile = false;

            $scope.sidebarWidth = '0px';
            $scope.getListforHV();
        };


        //for CVR list view
        $scope.centerVisitReport = function () {
            $scope.houseverification = false;
            $scope.centervisitreport = true;
            $scope.auditscoringreport = false;

            $scope.dashBoard = false;

            $scope.houseverificationForm = false;
            $scope.centervisitreportForm = false;
            $scope.auditscoringreportForm = false;

            //for close the profile
            $scope.showProfile = false;

            $scope.sidebarWidth = '0px';
            $scope.getListforCVR();
        };


        // for ASR list view       
        $scope.auditScoringReport = function () {
            $scope.houseverification = false;
            $scope.centervisitreport = false;
            $scope.auditscoringreport = true;

            $scope.dashBoard = false;

            $scope.houseverificationForm = false;
            $scope.centervisitreportForm = false;
            $scope.auditscoringreportForm = false;
            $scope.sidebarWidth = '0px';

            //for close the profile
            $scope.showProfile = false;

            $scope.getListforASR();
        };


        $scope.HVcloseForm = function () {
            $scope.houseverification = false;
            $scope.houseverificationForm = true;
            location.reload();
        };

        $scope.CVRcloseForm = function () {
            $scope.centervisitreport = false;
            $scope.centervisitreportForm = true;
            location.reload();
        };


        $scope.ASRcloseForm = function () {
            $scope.auditscoringreport = false;
            $scope.auditscoringreportForm = true;
            location.reload();
        };


        $scope.closeSidebar = function () {
            $scope.sidebarWidth = '0px';
        };
        $scope.openSideBar = function () {
            $scope.sidebarWidth = '250px';
        };
        $scope.notificationButton = function () {
            $scope.profileCard = false;
            $scope.notificationCard = true;
            $scope.helpCard = false;
        };
        $scope.profileButton = function () {
            $scope.profileCard = true;
            $scope.notificationCard = false;
            $scope.helpCard = false;
        };
        $scope.helpButton = function () {
            $scope.profileCard = false;
            $scope.notificationCard = false;
            $scope.helpCard = true;
            $scope.sidebarWidth = '0px';
        };
        $scope.closePopup = function () {
            $scope.profileCard = false;
            $scope.notificationCard = false;
            $scope.helpCard = false;
        };

        $scope.logout = function () {
            alert("Logout Successfully.");
            window.location.href = $scope.uRl + "index.html";
            $scope.list = null;
            $scope.list = [];
            $scope.userList = [];
            $scope.acceptedUserList = [];
            $scope.rejectedUserList = [];
            $scope.pendingUserList = [];
            $scope.terminatedUserList = [];
            $scope.resetpasswordUserList = [];
            window.localStorage.removeItem("user");
        };

        // for updating HV form {"houseverification/update/"}
        $scope.updateHVform = function () {

            $scope.houseVerification = {
                branchId: $scope.branchId,
                branchName: $scope.branchName,
                roName: $scope.roName,
                roId: $scope.roId,
                hvDate: $scope.hvDate,
                centerName: $scope.centerName,
                centerId: $scope.centerId,
                clientId: $scope.clientId,
                clientName: $scope.clientName,
                loanAppliedCycle: $scope.loanAppliedCycle,
                foId: $scope.foId,
                foName: $scope.foName,
                reasonOfCancellation: $scope.reasonOfCancellation,
                remarks: $scope.remarks,
                filledBy: $scope.filledBy,
                modifiedBy: $scope.userRecord.emp_id
            };
            var URL = $scope.uRl + "houseverification/update/" + $scope.id;
            $http.put(URL, $scope.houseVerification)
                    .then(function (response) {
                        console.log(response);
                        alert("Form Submitted Successfully.");
                        location.reload();
                    }, function (error) {
                        console.log(error);
                    });
        };

        //get HV form  {"houseverification/get/"}
        $scope.getHVrecord = function (id) {
            $scope.houseverification = false;
            $scope.centervisitreport = false;
            $scope.auditscoringreport = false;

            $scope.houseverificationForm = true;
            $scope.centervisitreportForm = false;
            $scope.auditscoringreportForm = false;

            //form remarks field
            $scope.hvFormfilledBy = true;
            $scope.hvFormModifiedBy = true;

            //form button            
            $scope.HVsubmitButton = false;
            $scope.HVupdateButton = true;

            //for close the profile
            $scope.showProfile = false;

            var URL = $scope.uRl + "houseverification/get/" + id;
            $http.get(URL)
                    .then(function (response) {
                        $scope.record = response.data;
                        $scope.id = $scope.record.id;
                        $scope.branchId = $scope.record.branchId;
                        $scope.branchName = $scope.record.branchName;
                        $scope.roName = $scope.record.roName;
                        $scope.roId = $scope.record.roId;
                        $scope.hvDate = $scope.record.hvDate;
                        $scope.centerName = $scope.record.centerName;
                        $scope.centerId = $scope.record.centerId;
                        $scope.clientId = $scope.record.clientId;
                        $scope.clientName = $scope.record.clientName;
                        $scope.loanAppliedCycle = $scope.record.loanAppliedCycle;
                        $scope.foId = $scope.record.foId;
                        $scope.foName = $scope.record.foName;
                        $scope.reasonOfCancellation = $scope.record.reasonOfCancellation;
                        $scope.remarks = $scope.record.remarks;
                        $scope.filledBy = $scope.record.filledBy;
                        $scope.modifiedBy = $scope.record.modifiedBy;

                    }, function (error) {
                        console.log(error);
                    });

        };

        // for updating CVR form {"centervisitreport/update/"}
        $scope.updateCVRform = function () {
            $scope.centerVisitReport = {
                branchName: $scope.branchName,
                branchId: $scope.branchId,
                roName: $scope.roName,
                roEmpId: $scope.roEmpId,
                dateOfCenterVisit: $scope.dateOfCenterVisit,
                foName: $scope.foName,
                foId: $scope.foId,
                centerName: $scope.centerName,
                centerId: $scope.centerId,
                noOfInstallment: $scope.noOfInstallment,
                loanCollectionReceiptAvailableInFile: $scope.loanCollectionReceiptAvailableInFile,
                rdCollectionReceiptAvailableInFile: $scope.rdCollectionReceiptAvailableInFile,
                loanCardUpdate: $scope.loanCardUpdate,
                rdPassbookIssued: $scope.rdPassbookIssued,
                rdCollectionRegular_Irregula: $scope.rdCollectionRegular_Irregula,
                ifAnyODCustomer: $scope.ifAnyODCustomer,
                ifAnyCustomerMigrate: $scope.ifAnyCustomerMigrate,
                bmVisitDone: $scope.bmVisitDone,
                amVisitDone: $scope.amVisitDone,
                anyOtherObservation: $scope.anyOtherObservation,
                filledBy: $scope.filledBy,
                modifiedBy: $scope.userRecord.emp_id
            };
            var URL = $scope.uRl + "centervisitreport/update/" + $scope.id;
            $http.put(URL, $scope.centerVisitReport)
                    .then(function (response) {
                        console.log(response);
                        alert("Form Submitted Successfully.");
                        location.reload();
                    }, function (error) {
                        console.log(error);
                    });
        };

        //get CVR form  {"centervisitreport/get/"}
        $scope.getCVRrecord = function (id) {
            $scope.houseverification = false;
            $scope.centervisitreport = false;
            $scope.auditscoringreport = false;

            $scope.houseverificationForm = false;
            $scope.centervisitreportForm = true;
            $scope.auditscoringreportForm = false;

            //form remarks field
            $scope.cvrFormfilledBy = true;
            $scope.cvrFormModifiedBy = true;

            //form button            
            $scope.CVRsubmitButton = false;
            $scope.CVRupdateButton = true;

            //for close the profile
            $scope.showProfile = false;

            var URL = $scope.uRl + "centervisitreport/get/" + id;
            $http.get(URL)
                    .then(function (response) {
                        $scope.record = response.data;
                        $scope.id = $scope.record.id;
                        $scope.branchName = $scope.record.branchName;
                        $scope.branchId = $scope.record.branchId;
                        $scope.roName = $scope.record.roName;
                        $scope.roEmpId = $scope.record.roEmpId;
                        $scope.dateOfCenterVisit = $scope.record.dateOfCenterVisit;
                        $scope.foName = $scope.record.foName;
                        $scope.foId = $scope.record.foId;
                        $scope.centerName = $scope.record.centerName;
                        $scope.centerId = $scope.record.centerId;
                        $scope.noOfInstallment = $scope.record.noOfInstallment;
                        $scope.loanCollectionReceiptAvailableInFile = $scope.record.loanCollectionReceiptAvailableInFile;
                        $scope.rdCollectionReceiptAvailableInFile = $scope.record.rdCollectionReceiptAvailableInFile;
                        $scope.loanCardUpdate = $scope.record.loanCardUpdate;
                        $scope.rdPassbookIssued = $scope.record.rdPassbookIssued;
                        $scope.rdCollectionRegular_Irregular = $scope.record.rdCollectionRegular_Irregular;
                        $scope.ifAnyODCustomer = $scope.record.ifAnyODCustomer;
                        $scope.ifAnyCustomerMigrate = $scope.record.ifAnyCustomerMigrate;
                        $scope.bmVisitDone = $scope.record.bmVisitDone;
                        $scope.amVisitDone = $scope.record.amVisitDone;
                        $scope.anyOtherObservation = $scope.record.anyOtherObservation;
                        $scope.filledBy = $scope.record.filledBy;
                        $scope.modifiedBy = $scope.record.modifiedBy;

                    }, function (error) {
                        console.log(error);
                    });

        };

        // for updating ASR form {"auditscoringreport/update/"}
        $scope.updateASRform = function () {
            $scope.auditScoringReport = {
                region: $scope.region,
                area: $scope.area,
                branchName: $scope.branchName,
                branchId: $scope.branchId,
                monthOfAudit: $scope.monthOfAudit,
                auditedBy: $scope.auditedBy,
                auditReportRealeseDate: $scope.auditReportRealeseDate,
                auditScoring: $scope.auditScoring,
                scores: $scope.scores,
                remark: $scope.remark,
                auditCover: $scope.auditCover,
                auditSchedule: $scope.auditSchedule,
                complinceStatus: $scope.complinceStatus,
                filledBy: $scope.filledBy,
                modifiedBy: $scope.userRecord.emp_id
            };
            var URL = $scope.uRl + "auditscoringreport/update/" + $scope.id;
            $http.put(URL, $scope.auditScoringReport)
                    .then(function (response) {
                        console.log(response);
                        alert("Form Submitted Successfully.");
                        location.reload();
                    }, function (error) {
                        console.log(error);
                    });
        };

        //get CVR form  {"auditscoringreport/get/"}
        $scope.getASRrecord = function (id) {
            $scope.houseverification = false;
            $scope.centervisitreport = false;
            $scope.auditscoringreport = false;

            $scope.houseverificationForm = false;
            $scope.centervisitreportForm = false;
            $scope.auditscoringreportForm = true;

            //form remarks field
            $scope.asrFormfilledBy = true;
            $scope.asrFormModifiedBy = true;

            //form button            
            $scope.ASRsubmitButton = false;
            $scope.ASRupdateButton = true;

            //for close the profile
            $scope.showProfile = false;

            var URL = $scope.uRl + "auditscoringreport/get/" + id;
            $http.get(URL)
                    .then(function (response) {
                        $scope.record = response.data;
                        $scope.id = $scope.record.id;
                        $scope.region = $scope.record.region;
                        $scope.area = $scope.record.area;
                        $scope.branchName = $scope.record.branchName;
                        $scope.branchId = $scope.record.branchId;
                        $scope.monthOfAudit = $scope.record.monthOfAudit;
                        $scope.auditedBy = $scope.record.auditedBy;
                        $scope.auditReportRealeseDate = $scope.record.auditReportRealeseDate;
                        $scope.auditScoring = $scope.record.auditScoring;
                        $scope.scores = $scope.record.scores;
                        $scope.remark = $scope.record.remark;
                        $scope.auditCover = $scope.record.auditCover;
                        $scope.auditSchedule = $scope.record.auditSchedule;
                        $scope.complinceStatus = $scope.record.complinceStatus;
                        $scope.filledBy = $scope.record.filledBy;
                        $scope.modifiedBy = $scope.record.modifiedBy;

                    }, function (error) {
                        console.log(error);
                    });

        };

        // view edit function start

        // profile view
        $scope.showProfile = false;
        $scope.profileData = [];


        $scope.profile_View = function () {
            // profile view
            $scope.showProfile = true;

            // super user view
            $scope.dashBoard = false;

            //list view
            $scope.houseverification = false;
            $scope.centervisitreport = false;
            $scope.auditscoringreport = false;

            //form view
            $scope.houseverificationForm = false;
            $scope.centervisitreportForm = false;
            $scope.auditscoringreportForm = false;

            $scope.closeSidebar();
            $scope.getProfile();
        };



        // profile buttons
        $scope.editButton = false;
        $scope.saveButton = false;
        $scope.usernameField = true;
        $scope.emailField = true;


        $scope.closeProfileView = function () {
            location.reload();
        };

        $scope.editProfileForm = function () {
            $scope.editButton = true;
            $scope.saveButton = true;

            $scope.usernameField = false;
            $scope.emailField = false;

        };

        $scope.updateProfile = function () {

            //update backend controller to update email also

            var URL = $scope.uRl + "user/updateProfile/" + $scope.userRecord.id + "/" + $scope.userRecord.emp_id + "/" + $scope.userName + "/" + $scope.email;

            $http.get(URL)
                    .then(function (response) {
                        alert("Profile Updated Successfully");
                        location.reload();
                    }, function (error)
                    {
                        console.log(error);
                    });
        };
        $scope.getProfile = function () {

            //update backend controller to update email also

            var URL = $scope.uRl + "user/get/" + $scope.userRecord.id;
            $http.get(URL)
                    .then(function (response) {
                        $scope.profileData = response.data;
                        $scope.userName = $scope.profileData.userName;
                        $scope.email = $scope.profileData.email;
                        $scope.branch = $scope.profileData.branch;
                        $scope.area = $scope.profileData.area;
                        $scope.region = $scope.profileData.region;
                        $scope.zone = $scope.profileData.zone;
                        $scope.userIdStatus = $scope.profileData.userIdStatus;
                    }, function (error)
                    {
                        console.log(error);
                    });
        };

        // view edit function end

        // superUserView function start

        $scope.superUserView = function () {
            $scope.profileCard = false;
            $scope.notificationCard = false;
            $scope.helpCard = false;

            // side bar initial
            $scope.sidebarWidth = '0px';

            //super user view
            $scope.dashBoard = true;

            // profile view
            $scope.showProfile = false;

            //list view
            $scope.houseverification = false;
            $scope.centervisitreport = false;
            $scope.auditscoringreport = false;

            //form view
            $scope.houseverificationForm = false;
            $scope.centervisitreportForm = false;
            $scope.auditscoringreportForm = false;


        };

        // superUserView function end

        ///// Json to Excel file

        // $scope.houseVerificationList = [];
        $scope.exportToExcelHV = function () {
            var jsonData = $scope.houseVerificationList;

            var filteredData = jsonData.map(function (item) {
                return {
                        'ID': item.id,
                        'Branch ID': item.branchId,
                        'Branch Name': item.branchName,
                        'RO Name': item.roName,
                        'RO ID': item.roId,
                        'HV Date(DD/MM/YYY)': item.hvDate,
                        'Center Name': item.centerName,
                        'Center ID': item.centerId,
                        'Client ID': item.clientId,
                        'Client Name': item.clientName,
                        'Loan Applied Cycle': item.loanAppliedCycle,
                        'FO ID': item.foId,
                        'FO Name': item.foName,
                        'Reason of Cancellation': item.reasonOfCancellation,
                        'Remarks': item.remarks,
                        'Filled by': item.filledBy,
                        'Modified by': item.modifiedBy
                };
            });

            var ws = XLSX.utils.json_to_sheet(filteredData);

            // Add table properties
            var range = XLSX.utils.decode_range(ws['!ref']);
            ws['!autofilter'] = {ref: XLSX.utils.encode_range(range)};
            ws['!cols'] = [
                {width: 10}, // Adjust column widths as needed
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15}
            ];


            // Apply table style
            ws['!theme'] = {
                'tableStyles': {
                    '1': {
                        'name': 'TableStyleMedium9',
                        'showFirstColumn': false,
                        'showLastColumn': false,
                        'showRowStripes': true,
                        'showColumnStripes': true
                    }
                }
            };

            var wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

            // Save the Excel file
//                XLSX.writeFile(wb, 'User\'s Status_report.xlsx');
            XLSX.writeFile(wb, 'houseVerificationReport.xlsx');
            alert("Downloading Data Excel file.");
            location.reload();
        };

        // $scope.centerVisitReportList = [];
        $scope.exportToExcelCVR = function () {
            var jsonData = $scope.centerVisitReportList;

            var filteredData = jsonData.map(function (item) {
                return {
                    'ID': item.id,
                    'Branch Name': item.branchName,
                    'Branch ID': item.branchId,
                    'RO Name': item.roName,
                    'RO EMP ID': item.roEmpId,
                    'Date of Center Visit(DD/MM/YYY)': item.dateOfCenterVisit,
                    'FO Name': item.foName,
                    'FO ID': item.foId,
                    'Center Name': item.centerName,
                    'Center ID': item.centerId,
                    'No. of Installment': item.noOfInstallment,
                    'Loan Collection Receipt Available in File': item.loanCollectionReceiptAvailableInFile,
                    'RD Collection Receipt Available in File': item.rdCollectionReceiptAvailableInFile,
                    'Loan Card Update': item.loanCardUpdate,
                    'RD Passbook Issued': item.rdPassbookIssued,
                    'RD Collection Regular/Irregular': item.rdCollectionRegular_Irregular,
                    'If any OD Customer': item.ifAnyODCustomer,
                    'If any Customer Migrate': item.ifAnyCustomerMigrate,
                    'BM Visit Done': item.bmVisitDone,
                    'AM Visit Done': item.amVisitDone,
                    'Any Other Observation': item.anyOtherObservation,
                    'Filled by': item.filledBy,
                    'Modified by': item.modifiedBy
                };
            });

            var ws = XLSX.utils.json_to_sheet(filteredData);

            // Add table properties
            var range = XLSX.utils.decode_range(ws['!ref']);
            ws['!autofilter'] = {ref: XLSX.utils.encode_range(range)};
            ws['!cols'] = [
                {width: 10}, // Adjust column widths as needed
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15}
            ];


            // Apply table style
            ws['!theme'] = {
                'tableStyles': {
                    '1': {
                        'name': 'TableStyleMedium9',
                        'showFirstColumn': false,
                        'showLastColumn': false,
                        'showRowStripes': true,
                        'showColumnStripes': true
                    }
                }
            };

            var wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

            // Save the Excel file
//                XLSX.writeFile(wb, 'User\'s Status_report.xlsx');
            XLSX.writeFile(wb, 'centerVisitReport.xlsx');
            alert("Downloading Data Excel file.");
            location.reload();
        };

        // $scope.auditScoringReportList = [];
        $scope.exportToExcelASR = function () {
            var jsonData = $scope.auditScoringReportList;

            var filteredData = jsonData.map(function (item) {
                return {
                    'ID': item.id,
                    'Region': item.region,
                    'Area': item.area,
                    'Branch Name': item.branchName,
                    'Branch ID': item.branchId,
                    'Month of Audit': item.monthOfAudit,
                    'Audited by': item.auditedBy,
                    'Audit Report Realese Date': item.auditReportRealeseDate,
                    'Audit Scoring': item.auditScoring,
                    'Scores %': item.scores,
                    'Remarks': item.remark,
                    'Audit Cover': item.auditCover,
                    'Audit Schedule': item.auditSchedule,
                    'Complince Status': item.complinceStatus,
                    'Filled by': item.filledBy,
                    'Modified by': item.modifiedBy
                };
            });

            var ws = XLSX.utils.json_to_sheet(filteredData);

            // Add table properties
            var range = XLSX.utils.decode_range(ws['!ref']);
            ws['!autofilter'] = {ref: XLSX.utils.encode_range(range)};
            ws['!cols'] = [
                {width: 5}, // Adjust column widths as needed
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15},
                {width: 15}
            ];


            // Apply table style
            ws['!theme'] = {
                'tableStyles': {
                    '1': {
                        'name': 'TableStyleMedium9',
                        'showFirstColumn': false,
                        'showLastColumn': false,
                        'showRowStripes': true,
                        'showColumnStripes': true
                    }
                }
            };

            var wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

            // Save the Excel file
            XLSX.writeFile(wb, 'auditScoringReport.xlsx');
            alert("Downloading Data Excel file.");
            location.reload();
        };

        //end Json to Excel file

        $scope.showMessage = function (inputId, divId) {
            const viewMessage = document.getElementById(inputId);
            const popupView = document.getElementById(divId);
            viewMessage.addEventListener('input', function () {
                popupView.innerText = viewMessage.value;
            });

        };

    } else {
        window.location.href = $scope.uRl + "index.html";
    }
});
//super_user - controller
app.controller("super_controller", function ($scope, $http) {

    $scope.userRecord = JSON.parse(window.localStorage.getItem("user"));
    var protocal = window.location.protocol;
    var host = window.location.host;
    $scope.uRl = protocal + "//" + host + "/";

    if (($scope.userRecord.designation === "Cluster Audit Manager")) {
        $scope.branchContainerVisible = false;
        $scope.userContainerVisible = true;
        $scope.dashBoard = false;
        //opration page
        $scope.branchAccess = function () {
            $scope.branchContainerVisible = true;
            $scope.userContainerVisible = false;
        };
        $scope.list = [];
        $scope.userList = [];
        $scope.acceptedUserList = [];
        $scope.rejectedUserList = [];
        $scope.pendingUserList = [];
        $scope.terminatedUserList = [];
        $scope.resetpasswordUserList = [];
        $http.get($scope.uRl + "user/getallUser")
                .then(function (response) {
                    $scope.userList = response.data;
                },
                        function (error) {
                            console.log(error);
                        });
        $scope.acceptVisible = true;
        $scope.rejectVisible = true;
        $scope.terminateVisible = false;
        $scope.deleteVisible = false;
        $scope.listForAccept = function () {
            $http.get($scope.uRl + "user/getuser_accept_list")
                    .then(function (response) {
                        $scope.list = response.data;
                        $scope.acceptVisible = false;
                        $scope.rejectVisible = false;
                        $scope.terminateVisible = true;
                        $scope.deleteVisible = false;
                    },
                            function (error) {
                                console.log(error);
                            });
        };
        $scope.listForReject = function () {
            $http.get($scope.uRl + "user/getuser_reject_list")
                    .then(function (response) {
                        $scope.list = response.data;
                        $scope.acceptVisible = false;
                        $scope.rejectVisible = false;
                        $scope.terminateVisible = false;
                        $scope.deleteVisible = true;
                    },
                            function (error) {
                                console.log(error);
                            });
        };
        $scope.listForPending = function () {
            $http.get($scope.uRl + "user/getuser_pending_list")
                    .then(function (response) {
                        $scope.list = response.data;
                        $scope.acceptVisible = true;
                        $scope.rejectVisible = true;
                        $scope.terminateVisible = false;
                        $scope.deleteVisible = false;
                    },
                            function (error) {
                                console.log(error);
                            });
        };
        $scope.listForTerminate = function () {
            $http.get($scope.uRl + "user/getuser_terminate_list")
                    .then(function (response) {
                        $scope.list = response.data;
                        $scope.acceptVisible = true;
                        $scope.rejectVisible = false;
                        $scope.terminateVisible = false;
                        $scope.deleteVisible = false;
                    },
                            function (error) {
                                console.log(error);
                            });
        };
        $scope.listForResetpass = function () {
            $http.get($scope.uRl + "user/getuser_resetpassword_list")
                    .then(function (response) {
                        $scope.list = response.data;
                        $scope.acceptVisible = true;
                        $scope.rejectVisible = true;
                        $scope.terminateVisible = false;
                        $scope.deleteVisible = false;
                    },
                            function (error) {
                                console.log(error);
                            });
        };
        $scope.listForPending();
        $scope.countNoForlistView = function () {

            $http.get($scope.uRl + "user/getAllRecordsNumberList")
                    .then(function (response) {
                        $scope.acceptedUserList = response.data;
                        $scope.Accepted = "Accepted ( " + response.data[0] + " )";
                        $scope.Rejected = "Rejected ( " + response.data[1] + " )";
                        $scope.Pending = "Pending ( " + response.data[2] + " )";
                        $scope.Terminated = "Terminated ( " + response.data[3] + " )";
                        $scope.Reset_Password = "Reset Password ( " + response.data[4] + " )";
                    }, function (error) {
                        console.log(error);
                    });
        };
        $scope.countNoForlistView();
        //Accept
        $scope.onUserEditA = function (record) {
            $scope.url = "user/updateStatus/" + record.emp_id + "/" + record.userName
                    + "/" + "Accept" + "/" + "Accepted by : " + $scope.userRecord.emp_id;
            $http.get($scope.uRl + $scope.url)
                    .then(function (response) {
                        alert("User : " + record.userName + " is Activated.");
                        location.reload();
                    },
                            function (error) {
                                console.log(error);
                            });
        };
        //Reject
        $scope.onUserEditR = function (record) {
            $scope.url = "user/updateStatus/" + record.emp_id + "/" + record.userName
                    + "/" + "Reject" + "/" + "Rejected by : " + $scope.userRecord.emp_id;
            $http.get($scope.uRl + $scope.url)
                    .then(function (response) {
                        alert("User : " + record.userName + " is Rejected.");
                        location.reload();
                    },
                            function (error) {
                                console.log(error);
                            });
        };
        //Terminate
        $scope.onUserEditT = function (record) {
            $scope.url = "user/updateStatus/" + record.emp_id + "/" + record.userName
                    + "/" + "Terminate" + "/" + "Terminated by : " + $scope.userRecord.emp_id;
            $http.get($scope.uRl + $scope.url)
                    .then(function (response) {
                        alert("User : " + record.userName + " is Terminated.");
                        location.reload();
                    },
                            function (error) {
                                console.log(error);
                            });
        };
        //Delete
        $scope.onUserEditD = function (record) {
            $scope.url = "user/delete/" + record.emp_id + "/" + record.userName
                    + "/" + record.userIdStatus;
            $http.get($scope.uRl + $scope.url)
                    .then(function (response) {
                        alert("User : " + record.userName + " is permanently deleted from the Database.");
                        location.reload();
                    },
                            function (error) {
                                console.log(error);
                            });
        };
        ///
        $scope.searchByFiled = function (message) {
            $scope.search = message;
        };
        $scope.logout = function () {
            alert("Logout Successfully.");
            window.location.href = $scope.uRl + "index.html";
            $scope.list = null;
            $scope.list = [];
            $scope.userList = [];
            $scope.acceptedUserList = [];
            $scope.rejectedUserList = [];
            $scope.pendingUserList = [];
            $scope.terminatedUserList = [];
            $scope.resetpasswordUserList = [];
            window.localStorage.removeItem("user");
        };
        ///// Json to Excel file
        $scope.exportToExcel = function () {
            alert("Downloading Data Excel file.");
            var jsonData = $scope.userList;
            jsonData.forEach(function (item) {
                item.area = item.area.join(', ');
                item.branch = item.branch.join(', ');
            });
            var filteredData = jsonData.map(function (item) {
                return {
                    'emp_id': item.emp_id,
                    'userName': item.userName,
                    'email': item.email,
                    'zone': item.zone,
                    'region': item.region,
                    'area': item.area,
                    'branch': item.branch,
                    'designation': item.designation,
                    'userIdStatus': item.userIdStatus,
                    'reacted': item.reacted
                };
            });
            var ws = XLSX.utils.json_to_sheet(filteredData);
            // Add table properties
            var range = XLSX.utils.decode_range(ws['!ref']);
            ws['!autofilter'] = {ref: XLSX.utils.encode_range(range)};
            ws['!cols'] = [
                {width: 10}, // Adjust column widths as needed
                {width: 20},
                {width: 20},
                {width: 10},
                {width: 10},
                {width: 40},
                {width: 60},
                {width: 10},
                {width: 10},
                {width: 10}
            ];
            // Apply table style
            ws['!theme'] = {
                'tableStyles': {
                    '1': {
                        'name': 'TableStyleMedium9',
                        'showFirstColumn': false,
                        'showLastColumn': false,
                        'showRowStripes': true,
                        'showColumnStripes': true
                    }
                }
            };
//            const columnF = ws.getColumn('branchNameList');
//            columnF.alignment = {wrapText: true};

            var wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
            // Save the Excel file
            XLSX.writeFile(wb, 'User\'s Status_report.xlsx');
        };
//            User Access permission *_*
//            _______________
//            
//            Branch Access permission *_*

        //branch options
        $scope.optionsArrayB = {};
        $scope.selectedOptionsB = [];
        $scope.optionsB = ["Kanhan", "Saoner", "Parsivani", "Ramtek", "Kalmeshwar",
            "Hingna", "Mouda", "Katol", "Manish Nagar", "Umred", "Kuhi", "Wardha",
            "Seloo", "Deoli", "Karanja Gadge", "Samudrapur", "Arni", "Dharwa",
            "Digras", "Umarkhed", "Wani", "Kalamb", "Pandherkawada", "Yawatmal",
            "Amgaon", "Deori", "Gondia", "Goregaon", "Morgaon Arjuni", "Sadak Arjuni",
            "Salekasa", "Tirora", "Bhandara", "Lakhandur", "Lakhani", "Pauni",
            "Sakoli", "Tumsar", "Armori", "Bhrampuri", "Gadchiroli", "Kurkheda",
            "Wadsa", "Bhadrawati", "Chandrapur", "Gondpipari", "Rajura",
            "Akola", "Amravati", "Chandur Railway", "Morshi", "Paratwada"];
        //Area options    
        $scope.optionsArrayA = {};
        $scope.selectedOptionsA = [];
        $scope.optionsA = ["Nagpur-1", "Nagpur-2", "Wardha", "Yawatmal-1", "Yawatmal-2",
            "Gondia", "Bhandara", "Gadchiroli", "Chandrapur", "Amravati"];
        $scope.acceptedlist = [];
        $scope.list2 = [];
        $scope.selectedOptionForUser = "";
        $scope.selectedOption = "";
        $scope.selectedUserType = function () {
            debugger;
//            alert($scope.selectedOptionForUser);
            if ($scope.selectedOptionForUser !== null) {
                console.log($scope.uRl + "user/getActiveUser/" + $scope.selectedOptionForUser);
                $http.get($scope.uRl + "user/getActiveUser/" + $scope.selectedOptionForUser)
                        .then(function (response) {
                            debugger;
                            $scope.acceptedlist = response.data;
                            $scope.emp_id = null;
                            $scope.userName = null;
                            $scope.zone = null;
                            $scope.region = null;
                            $scope.area = null;
                            $scope.branch = null;
                            $scope.designation = null;
                            $scope.userIdStatus = null;
                            $scope.reacted = null;
                            //Branch
                            $scope.templistBranch = [];
                            $scope.optionsB.forEach(function (option) {

                                $scope.optionsArrayB[option] = $scope.templistBranch.includes(option);
                            });
                            $scope.selectedOptionsB = Object.values($scope.templistBranch);
                            //Area
                            $scope.templistArea = [];
                            $scope.optionsA.forEach(function (option) {

                                $scope.optionsArrayA[option] = $scope.templistBranch.includes(option);
                            });
                            $scope.selectedOptionsA = Object.values($scope.templistBranch);
//                    $scope.showSelectedV();  
                        }, function (error) {
                            console.log(error);
                        });
            }
        };
        $scope.showSelectedValue = function () {
            debugger;
//            alert($scope.selectedOption);
            if ($scope.selectedOption !== null) {
                $http.get($scope.uRl + "user/getuser/" + $scope.selectedOption)
                        .then(function (response) {
                            debugger;
                            $scope.list2 = response.data;
                            $scope.id = $scope.list2.id;
                            $scope.emp_id = $scope.list2.emp_id;
                            $scope.userName = $scope.list2.userName;
                            $scope.zone = $scope.list2.zone;
                            $scope.region = $scope.list2.region;
                            $scope.area = $scope.list2.area;
                            $scope.branch = $scope.list2.branch;
                            $scope.designation = $scope.list2.designation;
                            $scope.userIdStatus = $scope.list2.userIdStatus;
                            $scope.reacted = $scope.list2.reacted;
                            $scope.showSelectedV();
                        }, function (error) {
                            console.log(error);
                        });
            }
        };
        $scope.showSelectedV = function () {
            if ($scope.list2.id) {
                $http.get($scope.uRl + "user/get/" + $scope.list2.id)
                        .then(function (response) {
                            if ("" === response.data) {
                                $scope.selectedOptionsB = [];
                                $scope.optionsArrayB = [];
                                $scope.selectedOptionsA = [];
                                $scope.optionsArrayA = [];
                            } else {

                                //Branch
                                $scope.templistBranch = response.data.branch;
                                $scope.optionsB.forEach(function (option) {

                                    $scope.optionsArrayB[option] = $scope.templistBranch.includes(option);
                                });
                                $scope.selectedOptionsB = Object.values($scope.templistBranch);
                                //Area
                                $scope.templistArea = response.data.area;
                                $scope.optionsA.forEach(function (option) {

                                    $scope.optionsArrayA[option] = $scope.templistArea.includes(option);
                                });
                                $scope.selectedOptionsA = Object.values($scope.templistArea);
                            }
                        }, function (error) {
                            console.log(error);
                        });
            }
        };
        $scope.updateSelectedOptionsB = function (option) {
            // Update the selectedOptions array based on checkbox changes
            if ($scope.optionsArrayB[option]) {
                $scope.selectedOptionsB.push(option);
            } else {
                // Remove the option from the selectedOptions array
                var index = $scope.selectedOptionsB.indexOf(option);
                if (index !== -1) {
                    $scope.selectedOptionsB.splice(index, 1);
                }
            }
        };
        $scope.updateSelectedOptionsA = function (option) {
            // Update the selectedOptions array based on checkbox changes
            if ($scope.optionsArrayA[option]) {
                $scope.selectedOptionsA.push(option);
            } else {
                // Remove the option from the selectedOptions array
                var index = $scope.selectedOptionsA.indexOf(option);
                if (index !== -1) {
                    $scope.selectedOptionsA.splice(index, 1);
                }
            }
        };
        $scope.submitForm = function () {

            if ((!($scope.userName)) || (!($scope.selectedOptionForUser))) {
                if (!($scope.selectedOptionForUser)) {
                    alert("Please, Select the user type.");
                } else {
                    alert("Please, Select the user name.");
                }
            } else {
                // Handle form submission logic here
                var arraylistofbranch = $scope.selectedOptionsB.toString();
                var branchList = arraylistofbranch.split(',').map(function (item) {
                    return item.trim();
                });
                var arraylistofarea = $scope.selectedOptionsA.toString();
                var areaList = arraylistofarea.split(',').map(function (item) {
                    return item.trim();
                });
                if ($scope.selectedOptionsB.length > 0 && $scope.selectedOptionsA.length > 0) {
                    $scope.url = "user/update/" + $scope.list2.id + "/" + $scope.emp_id
                            + "/" + $scope.userName + "/" + $scope.list2.email + "/" + $scope.zone
                            + "/" + $scope.region + "/" + areaList + "/" + branchList
                            + "/" + $scope.designation + "/" + $scope.userIdStatus + "/" + $scope.reacted;
                    alert(areaList);
                    alert(branchList);
                    $http.get($scope.uRl + $scope.url)
                            .then(function (response) {
                                alert("Branch successfully updated.");
                                location.reload();
                            }, function (error) {
                                console.log(error);
                            });
                } else {
                    alert("Please, select atleast one branch OR press 'Cancel' button.");
                }


            }
        };
        $scope.loadpage = function () {
            location.reload();
        };
        $scope.replaceString = function (str, oldStr, newStr) {
            return str.replace(oldStr, newStr);
        };
        $scope.viewRemark = function (mess) {
            alert(mess);
        };

//        show popUp

        $scope.showPopup = function () {
            debugger

//            alert("add");
            var inputField = document.getElementById("branchview");
            var popup = document.getElementById("popup");
            if (inputField.scrollWidth < inputField.clientWidth) {
                popup.style.display = "block";
            }
        };
        $scope.hidePopup = function () {
            var popup = document.getElementById("popup");
            popup.style.display = "none";
        };


    } else {
        window.location.href = $scope.uRl + "index.html";
    }

});
app.filter('continuousSubstringFilter', function () {
    return function (list, search, columns) {
        if (!search) {
            return list;
        }

        search = search.toLowerCase();
        return list.filter(function (record) {
            return columns.some(function (column) {
                var columnValue = record[column] && record[column].toString().toLowerCase();
                return columnValue && columnValue.includes(search);
            });
        });
    };
});
///-->
// Function to switch between lists
function switchList(listName) {
    // Remove the 'active' class from all buttons
    var buttons = document.querySelectorAll('.form-button');
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });
    // Add the 'active' class to the clicked button
    var clickedButton = document.querySelector('button[data-list="' + listName + '"]');
    clickedButton.classList.add('active');
    // Update the content based on the active button (You can customize this part)
    //var listContent = document.getElementById('list-content');
    //listContent.innerHTML = 'Content for ' + listName + ' list goes here.';

    // Change color temporarily to indicate the click
    clickedButton.style.backgroundColor = '#64B5F6';
    setTimeout(function () {
        clickedButton.style.backgroundColor = ''; // Reset to default
    }, 300);
}
app.filter('continuousSubstringFilter', function () {
    return function (list, search, columns) {
        if (!search) {
            return list;
        }

        search = search.toLowerCase();

        return list.filter(function (record) {
            return columns.some(function (column) {
                var columnValue = record[column] && record[column].toString().toLowerCase();
                return columnValue && columnValue.includes(search);
            });
        });
    };
});

