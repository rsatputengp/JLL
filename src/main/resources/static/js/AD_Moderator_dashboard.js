var app = angular.module('AD_Moderator_App', []);
app.controller('AD_Moderator_Controller', function ($scope, $http, $document) {


    $scope.userRecord = JSON.parse(window.localStorage.getItem("user"));
    var protocal = window.location.protocol;
    var host = window.location.host;
    $scope.uRl = protocal + "//" + host + "/";

    if (($scope.userRecord)) {
        if (($scope.userRecord.designation === "Auditor")) {

            $scope.profileCard = false;
            $scope.notificationCard = false;
            $scope.helpCard = false;

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

                $scope.houseverificationForm = false;
                $scope.centervisitreportForm = false;
                $scope.auditscoringreportForm = false;

                //for close the profile
                $scope.showProfile = false;

                $scope.sidebarWidth = '0px';
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

                var form = document.querySelector('.HVform'); // Assuming your form has a class 'HVform'
                var isValid = true;

                // Iterate over each input field within the form
                form.querySelectorAll('input[required]').forEach(function (input) {
                    // Check if the input field is empty
                    if (input.value.trim() === '') {
                        isValid = false;
                        // Optionally, you can add custom logic to highlight the empty fields or display error messages.
                    }
                });

                // Similarly, you can also check textarea elements if needed
                form.querySelectorAll('textarea[required]').forEach(function (textarea) {
                    // Check if the textarea is empty
                    if (textarea.value.trim() === '') {
                        isValid = false;
                        // Optionally, you can add custom logic to highlight the empty fields or display error messages.
                    }
                });

                // Proceed with the update process if all required fields are filled
                if (isValid) {
                    // update logic goes here
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
                } else {
                    // Optionally, you can display an error message to prompt the user to fill in the required fields.
                    alert('Please fill in all required fields.');
                }
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
                $scope.hvdisabledFD = true;
                $scope.hvdisabledMD = true;

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


                var form = document.querySelector('.CVRform'); // Assuming your form has a class 'CVRform'
                var isValid = true;

                // Iterate over each input field within the form
                form.querySelectorAll('input[required]').forEach(function (input) {
                    // Check if the input field is empty
                    if (input.value.trim() === '') {
                        isValid = false;
                        // Optionally, you can add custom logic to highlight the empty fields or display error messages.
                    }
                });

                // Similarly, you can also check textarea elements if needed
                form.querySelectorAll('textarea[required]').forEach(function (textarea) {
                    // Check if the textarea is empty
                    if (textarea.value.trim() === '') {
                        isValid = false;
                        // Optionally, you can add custom logic to highlight the empty fields or display error messages.
                    }
                });

                // Proceed with the update process if all required fields are filled
                if (isValid) {
                    // update logic goes here
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
                        rdCollectionRegular_Irregular: $scope.rdCollectionRegular_Irregular,
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
                } else {
                    // Optionally, you can display an error message to prompt the user to fill in the required fields.
                    alert('Please fill in all required fields.');
                }
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
                $scope.cvrdisabledFD = true;
                $scope.cvrdisabledMD = true;

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

                var form = document.querySelector('.ASRform'); // Assuming your form has a class 'ASRform'
                var isValid = true;

                // Iterate over each input field within the form
                form.querySelectorAll('input[required]').forEach(function (input) {
                    // Check if the input field is empty
                    if (input.value.trim() === '') {
                        isValid = false;
                        // Optionally, you can add custom logic to highlight the empty fields or display error messages.
                    }
                });

                // Similarly, you can also check textarea elements if needed
                form.querySelectorAll('textarea[required]').forEach(function (textarea) {
                    // Check if the textarea is empty
                    if (textarea.value.trim() === '') {
                        isValid = false;
                        // Optionally, you can add custom logic to highlight the empty fields or display error messages.
                    }
                });

                // Proceed with the update process if all required fields are filled
                if (isValid) {
                    // update logic goes here
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
                } else {
                    // Optionally, you can display an error message to prompt the user to fill in the required fields.
                    alert('Please fill in all required fields.');
                }
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
                $scope.asrdisabledFD = true;
                $scope.asrdisabledMD = true;

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
                $scope.showProfile = true;
                $scope.houseverification = false;
                $scope.centervisitreport = false;
                $scope.auditscoringreport = false;

                $scope.houseverificationForm = false;
                $scope.centervisitreportForm = false;
                $scope.auditscoringreportForm = false;

                //form remarks field
                $scope.cvrFormfilledBy = false;
                $scope.cvrFormModifiedBy = false;

                //form button            
                $scope.CVRsubmitButton = false;
                $scope.CVRupdateButton = false;

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
                        }, function (error)
                        {
                            console.log(error);
                        });
            };

            // view edit function end

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
                        'Reason of cancellation': item.reasonOfCancellation,
                        'Remarks': item.remarks,
                        'Filled By': item.filledBy,
                        'Modified By': item.modifiedBy
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
                        'No of Installment': item.noOfInstallment,
                        'Loan collection receipt available in file': item.loanCollectionReceiptAvailableInFile,
                        'RD collection receipt available in file': item.rdCollectionReceiptAvailableInFile,
                        'Loan card Update': item.loanCardUpdate,
                        'RD Passbook issued': item.rdPassbookIssued,
                        'RD Collection Regular/Irregular': item.rdCollectionRegular_Irregular,
                        'If any OD customer': item.ifAnyODCustomer,
                        'If any customer Migrate': item.ifAnyCustomerMigrate,
                        'BM Visit done': item.bmVisitDone,
                        'AM visit done': item.amVisitDone,
                        'Any other Observation': item.anyOtherObservation,
                        'Filled By': item.filledBy,
                        'Modified By': item.modifiedBy
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
                        'Branch Id': item.branchId,
                        'Month of Audit': item.monthOfAudit,
                        'Audited by': item.auditedBy,
                        'Audit Report Realese Date': item.auditReportRealeseDate,
                        'Audit Scoring': item.auditScoring,
                        'Scores%': item.scores,
                        'Remark': item.remark,
                        'Audit cover': item.auditCover,
                        'Audit Schedule': item.auditSchedule,
                        'Complince Status': item.complinceStatus,
                        'Filled By': item.filledBy,
                        'Modified By': item.modifiedBy
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

        }
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

