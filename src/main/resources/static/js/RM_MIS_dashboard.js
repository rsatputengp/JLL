/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('RM_MIS_App', []);
app.controller('RM_MIS_Controller', function ($scope, $http, $document) {


    $scope.userRecord = JSON.parse(window.localStorage.getItem("user"));
    var protocal = window.location.protocol;
    var host = window.location.host;
    $scope.uRl = protocal + "//" + host + "/";
    if (($scope.userRecord)) {
        if (($scope.userRecord.designation === "Regional Manager"
                || $scope.userRecord.designation === "MIS")) {

            $scope.profileCard = false;
            $scope.notificationCard = false;
            $scope.helpCard = false;
            $scope.dashBoard = false;

            //list view
            $scope.ODcalling = true;
            $scope.InsuranceTracker = true;
            $scope.RDcalling = true;

            //form view
            $scope.insuranceTrackerForm = false;
            $scope.odConatinerForm = false;
            $scope.rdContainerForm = false;

            // side bar initial
            $scope.sidebarWidth = '0px';
            //getting list for displaying
            $scope.odCallingList = [];
            $scope.rdCallingList = [];
            $scope.iTtrackerList = [];

//
//
//       
//
//
//        $scope.getListforOD = function () {
//
//            console.log($scope.uRl + "odcalling/getall");
//            $http.get($scope.uRl + "odcalling/getall")
//                    .then(function (response) {
//                        $scope.odCallingList = response.data;
//                    }, function (error) {
//                        console.error(error);
//                    });
//        };
//
//
//        $scope.getListforRD = function () {
//
//            console.log($scope.uRl + "rdcalling/getall");
//            $http.get($scope.uRl + "rdcalling/getall")
//                    .then(function (response) {
//                        $scope.rdCallingList = response.data;
//                    }, function (error) {
//                        console.error(error);
//                    });
//        };
//
//
//        $scope.getListforIT = function () {
//
//            console.log($scope.uRl + "insurancetrackers/getall");
//            $http.get($scope.uRl + "insurancetrackers/getall")
//                    .then(function (response) {
//                        $scope.iTtrackerList = response.data;
//                    }, function (error) {
//                        console.error(error);
//                    });
//        };
//
//
//        $scope.getListforOD();
//        $scope.getListforRD();
//        $scope.getListforIT();
//
//
//         $scope.rdCalling = function () {
//            $scope.RDcalling = true;
//            $scope.ODcalling = false;
//            $scope.InsuranceTracker = false;
//            $scope.insuranceTrackerForm = false;
//            $scope.odConatinerForm = false;
//            $scope.rdContainerForm = false;
//            $scope.sidebarWidth = '0px';
//            //show in the list view
//            $scope.getListforRD();
//        }
//
//
//        $scope.odCalling = function () {
//            $scope.RDcalling = false;
//            $scope.ODcalling = true;
//            $scope.InsuranceTracker = false;
//            $scope.insuranceTrackerForm = false;
//            $scope.odConatinerForm = false;
//            $scope.rdContainerForm = false;
//            $scope.sidebarWidth = '0px';
//
//             $scope.getListforOD();
//        }
//
//        $scope.insuranceTracker = function () {
//            $scope.RDcalling = false;
//            $scope.ODcalling = false;
//            $scope.InsuranceTracker = true;
//            $scope.insuranceTrackerForm = false;
//            $scope.odConatinerForm = false;
//            $scope.rdContainerForm = false;
//            $scope.sidebarWidth = '0px';
//
//             $scope.getListforIT();
//        }
//
//
//
//        $scope.RDcallingForm = function () {
//
//            $scope.RDcalling = false;
//            $scope.ODcalling = false;
//            $scope.InsuranceTracker = false;
//            $scope.insuranceTrackerForm = false;
//            $scope.odConatinerForm = false;
//            $scope.rdContainerForm = true;
//        }
//
//
//        $scope.ODcallingForm = function () {
//            $scope.RDcalling = false;
//            $scope.ODcalling = false;
//            $scope.InsuranceTracker = false;
//            $scope.insuranceTrackerForm = false;
//            $scope.odConatinerForm = true;
//            $scope.rdContainerForm = false;
//        }
//
//        $scope.InsuranceTrackerForm = function () {
//            $scope.RDcalling = false;
//            $scope.ODcalling = false;
//            $scope.InsuranceTracker = false;
//            $scope.insuranceTrackerForm = true;
//            $scope.odConatinerForm = false;
//            $scope.rdContainerForm = false;
//        }
//
//        $scope.ODcloseForm = function () {
//            $scope.odConatinerForm = false;
//            $scope.ODcalling = true;
//            location.reload();
//        }
//
//        $scope.RDcloseForm = function () {
//            $scope.rdContainerForm = false;
//            $scope.RDcalling = true;
//            location.reload();
//        }
//
//
//        $scope.ITcloseForm = function () {
//            $scope.InsuranceTracker = true;
//            $scope.insuranceTrackerForm = false;
//            location.reload();
//        }
//
//
//
//
//
//        $scope.closeSidebar = function () {
//            $scope.sidebarWidth = '0px';
//        };
//        $scope.openSideBar = function () {
//            $scope.sidebarWidth = '250px';
//        };
//        $scope.notificationButton = function () {
//            $scope.profileCard = false;
//            $scope.notificationCard = true;
//            $scope.helpCard = false;
//        };
//        $scope.profileButton = function () {
//            $scope.profileCard = true;
//            $scope.notificationCard = false;
//            $scope.helpCard = false;
//        };
//        $scope.helpButton = function () {
//            $scope.profileCard = false;
//            $scope.notificationCard = false;
//            $scope.helpCard = true;
//            $scope.sidebarWidth = '0px';
//        };
//        $scope.closePopup = function () {
//            $scope.profileCard = false;
//            $scope.notificationCard = false;
//            $scope.helpCard = false;
//        };
//        $scope.logout = function () {
//            alert("Logout Successfully.");
//            window.location.href = $scope.uRl + "index.html";
//            $scope.list = null;
//            $scope.list = [];
//            $scope.userList = [];
//            $scope.acceptedUserList = [];
//            $scope.rejectedUserList = [];
//            $scope.pendingUserList = [];
//            $scope.terminatedUserList = [];
//            $scope.resetpasswordUserList = [];
//            window.localStorage.removeItem("user");
//        };
//
//
//
//
//
//
////        for updating RD form
//        $scope.updateRDform = function () {
//
//            $scope.rdCallingOD = {
//                region: $scope.region,
//                area: $scope.area,
//                branchId: $scope.branchId,
//                branchName: $scope.branchName,
//                loanAccountNumber: $scope.loanAccountNumber,
//                clientName: $scope.clientName,
//                dateOfDefault: $scope.dateOfDefault,
//                callingDate: $scope.callingDate,
//                calledByEmployeeId: $scope.calledByEmployeeId,
//                calledByEmployeeName: $scope.calledByEmployeeName,
//                reasonOfRDDefault: $scope.reasonOfRDDefault,
//                anyMisappropriationCase: $scope.anyMisappropriationCase,
//                remarksIfAny: $scope.remarksIfAny,
//                filledBy: $scope.filledBy,
//                modifiedBy: $scope.modifiedBy
//            };
//            var URL = $scope.uRl + "rdcalling/update/" + $scope.id;
//            $http.put(URL, $scope.rdCallingOD)
//                    .then(function (response) {
//                        console.log(response);
//                        alert("Form Submitted Successfully.");
//                        location.reload();
//                    }, function (error) {
//                        console.log(error);
//                    });
//        };
//
//
//
//
//        //get RD form
//        $scope.getRDrecord = function (id) {
//            $scope.ODcalling = false;
//            $scope.InsuranceTracker = false;
//            $scope.RDcalling = false;
//            $scope.insuranceTrackerForm = false;
//            $scope.odConatinerForm = false;
//            $scope.rdContainerForm = true;
//
//            var URL = $scope.uRl + "odcalling/get/" + id;
//            $http.get(URL)
//                    .then(function (response) {
//                        $scope.record = response.data;
//
//
//                        $scope.id = $scope.record.id;
//                        $scope.region = $scope.record.region;
//                        $scope.area = $scope.record.area;
//                        $scope.branchId = $scope.record.branchId;
//                        $scope.branchName = $scope.record.branchName;
//                        $scope.rdAccountNumber = $scope.record.rdAccountNumber;
//                        $scope.clientName = $scope.record.clientName;
//                        $scope.dateOfDefault = $scope.record.dateOfDefault;
//                        $scope.callingDate = $scope.record.callingDate;
//                        $scope.calledByEmployeeId = $scope.record.calledByEmployeeId;
//                        $scope.calledByEmployeeName = $scope.record.calledByEmployeeName;
//                        $scope.reasonOfRDDefault = $scope.record.reasonOfRDDefault;
//                        $scope.anyMisappropriationCase = $scope.record.anyMisappropriationCase;
//                        $scope.remarksIfAny = $scope.record.remarksIfAny;
//                        $scope.filledBy = $scope.record.filledBy;
//                        $scope.modifiedBy = $scope.record.modifiedBy;
//
//
//
//                    }, function (error) {
//                        console.log(error);
//                    });
//
//        };
//
//
//
//
//
//        //update OD form
//        $scope.updateODform = function () {
//
//            $scope.odCallingOD = {
//                region: $scope.region,
//                area: $scope.area,
//                branchId: $scope.branchId,
//                branchName: $scope.branchName,
//                loanAccountNumber: $scope.loanAccountNumber,
//                clientName: $scope.clientName,
//                dateOfDefault: $scope.dateOfDefault,
//                callingDate: $scope.callingDate,
//                calledByEmployeeId: $scope.calledByEmployeeId,
//                calledByEmployeeName: $scope.calledByEmployeeName,
//                reasonOfODDefault: $scope.reasonOfODDefault,
//                anyMisappropriationCase: $scope.anyMisappropriationCase,
//                remarksIfAny: $scope.remarksIfAny,
//                filledBy: $scope.filledBy,
//                modifiedBy: $scope.modifiedBy
//            };
//            var URL = $scope.uRl + "odcalling/update/" + $scope.id;
//            $http.put(URL, $scope.odCallingOD)
//                    .then(function (response) {
//                        console.log(response);
//                        alert("Form Submitted Successfully.");
//                        location.reload();
//                    }, function (error) {
//                        console.log(error);
//                    });
//        };
//
//
//
//
//        //for getting OD form
//        $scope.getODform = function (id) {
//
//            $scope.ODcalling = false;
//            $scope.InsuranceTracker = false;
//            $scope.RDcalling = false;
//            $scope.insuranceTrackerForm = false;
//            $scope.odConatinerForm = true;
//            $scope.rdContainerForm = false;
//
//            var URL = $scope.uRl + "odcalling/get/" + id;
//            $http.get(URL)
//                    .then(function (response) {
//                        $scope.record = response.data;
//                        $scope.id = $scope.record.id;
//                        $scope.region = $scope.record.region;
//                        $scope.area = $scope.record.area;
//                        $scope.branchId = $scope.record.branchId;
//                        $scope.branchName = $scope.record.branchName;
//                        $scope.loanAccountNumber = $scope.record.loanAccountNumber;
//                        $scope.clientName = $scope.record.clientName;
//                        $scope.dateOfDefault = $scope.record.dateOfDefault;
//                        $scope.callingDate = $scope.record.callingDate;
//                        $scope.calledByEmployeeId = $scope.record.calledByEmployeeId;
//                        $scope.calledByEmployeeName = $scope.record.calledByEmployeeName;
//                        $scope.reasonOfODDefault = $scope.record.reasonOfODDefault;
//                        $scope.anyMisappropriationCase = $scope.record.anyMisappropriationCase;
//                        $scope.remarksIfAny = $scope.record.remarksIfAny;
//                        $scope.filledBy = $scope.record.filledBy;
//                        $scope.modifiedBy = $scope.record.modifiedBy;
//
//                    }, function (error) {
//                        console.log(error);
//                    });
//        };
//
//
//
////        for updating IT form
//        $scope.updateITform = function () {
//
//            $scope.ITtrackerOD = {
//                region: $scope.region,
//                branchCode: $scope.branchCode,
//                branchName: $scope.branchName,
//                claimId: $scope.claimId,
//                centerId: $scope.centerId,
//                centerName: $scope.centerName,
//                clientId: $scope.clientId,
//                accountId: $scope.accountId,
//                disbursementDate: $scope.disbursementDate,
//                clientName: $scope.clientName,
//                nomineeName: $scope.nomineeName,
//                deathClientName: $scope.deathClientName,
//                disbursementAmount: $scope.disbursementAmount,
//                emiDay: $scope.emiDay,
//                dateOfDeath: $scope.dateOfDeath,
//                deathReasion: $scope.deathReasion,
//                paidEmi: $scope.paidEmi,
//                loanOutstandingAmt: $scope.loanOutstandingAmt,
//                otsAmt: $scope.otsAmt,
//                claimSettelmentAmt: $scope.claimSettelmentAmt,
//                memberHandoverAmount: $scope.memberHandoverAmount,
//                claimStatus: $scope.claimStatus,
//                remarks: $scope.remarks,
//                trueCellPunchingDate: $scope.trueCellPunchingDate,
//                datedOfDOCReceivedFromMember: $scope.datedOfDOCReceivedFromMember,
//                datedOfSendDocToHo: $scope.datedOfSendDocToHo,
//                datedOfSendDocToKotak: $scope.datedOfSendDocToKotak,
//                dateOfSettelmentByKotak: $scope.dateOfSettelmentByKotak,
//                accountCloseDateByBranch: $scope.accountCloseDateByBranch,
//                incentiveReceivedInMonth: $scope.incentiveReceivedInMonth,
//                filledBy: $scope.filledBy,
//                modifiedBy: $scope.modifiedBy
//            };
//
//
//            var URL = $scope.uRl + "insurancetrackers/update/" + $scope.id;
//            $http.put(URL, $scope.ITtrackerOD)
//                    .then(function (response) {
//                        console.log(response);
//                        alert("Form Submitted Successfully.");
//                        location.reload();
//                    }, function (error) {
//                        console.log(error);
//                    });
//        };
//
//
//
//
////for getting ITform
//        $scope.getITform = function (id) {
//            $scope.ODcalling = false;
//            $scope.InsuranceTracker = false;
//            $scope.RDcalling = false;
//            $scope.insuranceTrackerForm = true;
//            $scope.odConatinerForm = false;
//            $scope.rdContainerForm = false;
//
//
//            var URL = $scope.uRl + "odcalling/get/" + id;
//            $http.get(URL)
//                    .then(function (response) {
//
//                        $scope.region = $scope.record.region;
//                        $scope.branchCode = $scope.record.branchCode;
//                        $scope.branchName = $scope.record.branchName;
//                        $scope.claimId = $scope.record.claimId;
//                        $scope.centerId = $scope.record.centerId;
//                        $scope.centerName = $scope.record.centerName;
//                        $scope.clientId = $scope.record.clientId;
//                        $scope.accountId = $scope.record.accountId;
//                        $scope.disbursementDate = $scope.record.disbursementDate;
//                        $scope.clientName = $scope.record.clientName;
//                        $scope.nomineeName = $scope.record.nomineeName;
//                        $scope.deathClientName = $scope.record.deathClientName;
//                        $scope.disbursementAmount = $scope.record.disbursementAmount;
//                        $scope.emiDay = $scope.record.emiDay;
//                        $scope.dateOfDeath = $scope.record.dateOfDeath;
//                        $scope.deathReasion = $scope.record.deathReasion;
//                        $scope.paidEmi = $scope.record.paidEmi;
//                        $scope.loanOutstandingAmt = $scope.record.loanOutstandingAmt;
//                        $scope.otsAmt = $scope.record.otsAmt;
//                        $scope.claimSettelmentAmt = $scope.record.claimSettelmentAmt;
//                        $scope.memberHandoverAmount = $scope.record.memberHandoverAmount;
//                        $scope.claimStatus = $scope.record.claimStatus;
//                        $scope.remarks = $scope.record.remarks;
//                        $scope.trueCellPunchingDate = $scope.record.trueCellPunchingDate;
//                        $scope.datedOfDOCReceivedFromMember = $scope.record.datedOfDOCReceivedFromMember;
//                        $scope.datedOfSendDocToHo = $scope.record.datedOfSendDocToHo;
//                        $scope.datedOfSendDocToKotak = $scope.record.datedOfSendDocToKotak;
//                        $scope.dateOfSettelmentByKotak = $scope.record.dateOfSettelmentByKotak;
//                        $scope.accountCloseDateByBranch = $scope.record.accountCloseDateByBranch;
//                        $scope.incentiveReceivedInMonth = $scope.record.incentiveReceivedInMonth;
//                        $scope.filledBy = $scope.record.filledBy;
//                        $scope.modifiedBy = $scope.record.modifiedBy;
//
//
//                    }, function (error) {
//                        console.log(error);
//                    });
//        };

//New Code
//getting all lists data --->
            $scope.getListforOD = function () {
                console.log($scope.uRl + "odcalling/getall");
                $http.get($scope.uRl + "odcalling/getall")
                        .then(function (response) {
                            $scope.odCallingList = response.data;
                        }, function (error) {
                            console.error(error);
                        });
            };

            $scope.getListforRD = function () {

                console.log($scope.uRl + "rdcalling/getall");
                $http.get($scope.uRl + "rdcalling/getall")
                        .then(function (response) {
                            $scope.rdCallingList = response.data;
                        }, function (error) {
                            console.error(error);
                        });
            };

            $scope.getListforIT = function () {

                console.log($scope.uRl + "insurancetrackers/getall");
                $http.get($scope.uRl + "insurancetrackers/getall")
                        .then(function (response) {
                            $scope.iTtrackerList = response.data;
                        }, function (error) {
                            console.error(error);
                        });
            };
            $scope.getListforRD();
            $scope.getListforOD();
            $scope.getListforIT();
            //<-------------


            //for RD calling list view
            $scope.rdCalling = function () {
                $scope.RDcalling = true;
                $scope.ODcalling = false;
                $scope.InsuranceTracker = false;
                $scope.insuranceTrackerForm = false;
                $scope.odConatinerForm = false;
                $scope.rdContainerForm = false;
                $scope.dashBoard = false;

                //for close the profile
                $scope.showProfile = false;

                $scope.sidebarWidth = '0px';
                $scope.getListforRD();
            };


            //for OD calling list view
            $scope.odCalling = function () {
                $scope.RDcalling = false;
                $scope.ODcalling = true;
                $scope.InsuranceTracker = false;
                $scope.insuranceTrackerForm = false;
                $scope.odConatinerForm = false;
                $scope.rdContainerForm = false;
                $scope.dashBoard = false;

                //for close the profile
                $scope.showProfile = false;

                $scope.sidebarWidth = '0px';
                $scope.getListforOD();
            };


            // for IT tracker list view       
            $scope.insuranceTracker = function () {
                $scope.RDcalling = false;
                $scope.ODcalling = false;
                $scope.InsuranceTracker = true;
                $scope.odConatinerForm = false;
                $scope.rdContainerForm = false;
                $scope.insuranceTrackerForm = false;
                $scope.dashBoard = false;

                //for close the profile
                $scope.showProfile = false;

                $scope.sidebarWidth = '0px';
                $scope.getListforIT();
            };

            $scope.ODcloseForm = function () {
                $scope.odConatinerForm = false;
                $scope.ODcalling = true;
                location.reload();
            };

            $scope.RDcloseForm = function () {
                $scope.rdContainerForm = false;
                $scope.RDcalling = true;
                location.reload();
            };


            $scope.ITcloseForm = function () {
                $scope.InsuranceTracker = true;
                $scope.insuranceTrackerForm = false;
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


            // for updating RD form {"rdcalling/update/"}
            $scope.updateRDform = function () {

                $scope.rdCallingOD = {
                    region: $scope.region,
                    area: $scope.area,
                    branchId: $scope.branchId,
                    branchName: $scope.branchName,
                    rdAccountNumber: $scope.rdAccountNumber,
                    clientName: $scope.clientName,
                    dateOfDefault: $scope.dateOfDefault,
                    callingDate: $scope.callingDate,
                    calledByEmployeeId: $scope.calledByEmployeeId,
                    calledByEmployeeName: $scope.calledByEmployeeName,
                    reasonOfRDDefault: $scope.reasonOfRDDefault,
                    anyMisappropriationCase: $scope.anyMisappropriationCase,
                    remarksIfAny: $scope.remarksIfAny,
                    filledBy: $scope.filledBy,
                    modifiedBy: $scope.userRecord.emp_id
                };
                var URL = $scope.uRl + "rdcalling/update/" + $scope.id;
                $http.put(URL, $scope.rdCallingOD)
                        .then(function (response) {
                            console.log(response);
                            alert("Form Submitted Successfully.");
                            location.reload();
                        }, function (error) {
                            console.log(error);
                        });
            };


            //get RD form  {"rdcalling/get/"}
            $scope.getRDrecord = function (id) {
                $scope.ODcalling = false;
                $scope.InsuranceTracker = false;
                $scope.RDcalling = false;
                $scope.insuranceTrackerForm = false;
                $scope.odConatinerForm = false;
                $scope.rdContainerForm = true;

                //form button            
                $scope.RDsubmitButton = false;
                $scope.RDupdateButton = true;

                //for close the profile
                $scope.showProfile = false;


                var URL = $scope.uRl + "rdcalling/get/" + id;
                $http.get(URL)
                        .then(function (response) {
                            $scope.record = response.data;
                            $scope.id = $scope.record.id;
                            $scope.region = $scope.record.region;
                            $scope.area = $scope.record.area;
                            $scope.branchId = $scope.record.branchId;
                            $scope.branchName = $scope.record.branchName;
                            $scope.rdAccountNumber = $scope.record.rdAccountNumber;
                            $scope.clientName = $scope.record.clientName;
                            $scope.dateOfDefault = $scope.record.dateOfDefault;
                            $scope.callingDate = $scope.record.callingDate;
                            $scope.calledByEmployeeId = $scope.record.calledByEmployeeId;
                            $scope.calledByEmployeeName = $scope.record.calledByEmployeeName;
                            $scope.reasonOfRDDefault = $scope.record.reasonOfRDDefault;
                            $scope.anyMisappropriationCase = $scope.record.anyMisappropriationCase;
                            $scope.remarksIfAny = $scope.record.remarksIfAny;
                            $scope.filledBy = $scope.record.filledBy;
                            $scope.modifiedBy = $scope.record.modifiedBy;

                        }, function (error) {
                            console.log(error);
                        });

            };

            // for updating OD form {"odcalling/update/"}
            $scope.updateODform = function () {

                $scope.odCallingOD = {
                    region: $scope.region,
                    area: $scope.area,
                    branchId: $scope.branchId,
                    branchName: $scope.branchName,
                    loanAccountNumber: $scope.loanAccountNumber,
                    clientName: $scope.clientName,
                    dateOfDefault: $scope.dateOfDefault,
                    callingDate: $scope.callingDate,
                    calledByEmployeeId: $scope.calledByEmployeeId,
                    calledByEmployeeName: $scope.calledByEmployeeName,
                    reasonOfODDefault: $scope.reasonOfODDefault,
                    anyMisappropriationCase: $scope.anyMisappropriationCase,
                    remarksIfAny: $scope.remarksIfAny,
                    filledBy: $scope.filledBy,
                    modifiedBy: $scope.userRecord.emp_id
                };
                var URL = $scope.uRl + "odcalling/update/" + $scope.id;
                $http.put(URL, $scope.odCallingOD)
                        .then(function (response) {
                            console.log(response);
                            alert("Form Submitted Successfully.");
                            location.reload();
                        }, function (error) {
                            console.log(error);
                        });
            };


            //get OD form  {"odcalling/get/"}
            $scope.getODform = function (id) {

                $scope.ODcalling = false;
                $scope.InsuranceTracker = false;
                $scope.RDcalling = false;
                $scope.insuranceTrackerForm = false;
                $scope.odConatinerForm = true;
                $scope.rdContainerForm = false;


                //form button            
                $scope.ODsubmitButton = false;
                $scope.ODupdateButton = true;

                //for close the profile
                $scope.showProfile = false;


                var URL = $scope.uRl + "odcalling/get/" + id;
                $http.get(URL)
                        .then(function (response) {
                            $scope.record = response.data;
                            $scope.id = $scope.record.id;
                            $scope.region = $scope.record.region;
                            $scope.area = $scope.record.area;
                            $scope.branchId = $scope.record.branchId;
                            $scope.branchName = $scope.record.branchName;
                            $scope.loanAccountNumber = $scope.record.loanAccountNumber;
                            $scope.clientName = $scope.record.clientName;
                            $scope.dateOfDefault = $scope.record.dateOfDefault;
                            $scope.callingDate = $scope.record.callingDate;
                            $scope.calledByEmployeeId = $scope.record.calledByEmployeeId;
                            $scope.calledByEmployeeName = $scope.record.calledByEmployeeName;
                            $scope.reasonOfODDefault = $scope.record.reasonOfODDefault;
                            $scope.anyMisappropriationCase = $scope.record.anyMisappropriationCase;
                            $scope.remarksIfAny = $scope.record.remarksIfAny;
                            $scope.filledBy = $scope.record.filledBy;
                            $scope.modifiedBy = $scope.record.modifiedBy;

                        }, function (error) {
                            console.log(error);
                        });
            };


            // for updating IT form {"insurancetrackers/update/"}
            $scope.updateITformm = function () {
                debugger;

                $scope.ITtrackerOD = {
                    region: $scope.region,
                    branchCode: $scope.branchCode,
                    branchName: $scope.branchName,
                    claimId: $scope.claimId,
                    centerId: $scope.centerId,
                    centerName: $scope.centerName,
                    clientId: $scope.clientId,
                    accountId: $scope.accountId,
                    disbursementDate: $scope.disbursementDate,
                    clientName: $scope.clientName,
                    nomineeName: $scope.nomineeName,
                    deathClientName: $scope.deathClientName,
                    disbursementAmount: $scope.disbursementAmount,
                    emiDay: $scope.emiDay,
                    dateOfDeath: $scope.dateOfDeath,
                    deathReasion: $scope.deathReasion,
                    paidEmi: $scope.paidEmi,
                    loanOutstandingAmt: $scope.loanOutstandingAmt,
                    otsAmt: $scope.otsAmt,
                    claimSettelmentAmt: $scope.claimSettelmentAmt,
                    memberHandoverAmount: $scope.memberHandoverAmount,
                    claimStatus: $scope.claimStatus,
                    remarks: $scope.remarks,
                    trueCellPunchingDate: $scope.trueCellPunchingDate,
                    datedOfDOCReceivedFromMember: $scope.datedOfDOCReceivedFromMember,
                    datedOfSendDocToHo: $scope.datedOfSendDocToHo,
                    datedOfSendDocToKotak: $scope.datedOfSendDocToKotak,
                    dateOfSettelmentByKotak: $scope.dateOfSettelmentByKotak,
                    accountCloseDateByBranch: $scope.accountCloseDateByBranch,
                    incentiveReceivedInMonth: $scope.incentiveReceivedInMonth,
                    filledBy: $scope.filledBy,
                    modifiedBy: $scope.userRecord.emp_id
                };


                var URL = $scope.uRl + "insurancetrackers/update/" + $scope.id;
                $http.put(URL, $scope.ITtrackerOD)
                        .then(function (response) {
                            debugger;
                            console.log(response);
                            alert("Form Submitted Successfully.");
                            location.reload();
                        }, function (error) {
                            console.log(error);
                        });
            };

            //get IT form  {"insurancetrackers/get/"}
            $scope.getITform = function (id) {
                $scope.ODcalling = false;
                $scope.InsuranceTracker = false;
                $scope.RDcalling = false;
                $scope.insuranceTrackerForm = true;
                $scope.odConatinerForm = false;
                $scope.rdContainerForm = false;

                //form button            
                $scope.ITsubmitButton = false;
                $scope.ITupdateButton = true;

                //for close the profile
                $scope.showProfile = false;



                var URL = $scope.uRl + "insurancetrackers/get/" + id;
                $http.get(URL)
                        .then(function (response) {
                            $scope.record = response.data;
                            $scope.id = $scope.record.id;
                            $scope.region = $scope.record.region;
                            $scope.branchCode = $scope.record.branchCode;
                            $scope.branchName = $scope.record.branchName;
                            $scope.claimId = $scope.record.claimId;
                            $scope.centerId = $scope.record.centerId;
                            $scope.centerName = $scope.record.centerName;
                            $scope.clientId = $scope.record.clientId;
                            $scope.accountId = $scope.record.accountId;
                            $scope.disbursementDate = $scope.record.disbursementDate;
                            $scope.clientName = $scope.record.clientName;
                            $scope.nomineeName = $scope.record.nomineeName;
                            $scope.deathClientName = $scope.record.deathClientName;
                            $scope.disbursementAmount = $scope.record.disbursementAmount;
                            $scope.emiDay = $scope.record.emiDay;
                            $scope.dateOfDeath = $scope.record.dateOfDeath;
                            $scope.deathReasion = $scope.record.deathReasion;
                            $scope.paidEmi = $scope.record.paidEmi;
                            $scope.loanOutstandingAmt = $scope.record.loanOutstandingAmt;
                            $scope.otsAmt = $scope.record.otsAmt;
                            $scope.claimSettelmentAmt = $scope.record.claimSettelmentAmt;
                            $scope.memberHandoverAmount = $scope.record.memberHandoverAmount;
                            $scope.claimStatus = $scope.record.claimStatus;
                            $scope.remarks = $scope.record.remarks;
                            $scope.trueCellPunchingDate = $scope.record.trueCellPunchingDate;
                            $scope.datedOfDOCReceivedFromMember = $scope.record.datedOfDOCReceivedFromMember;
                            $scope.datedOfSendDocToHo = $scope.record.datedOfSendDocToHo;
                            $scope.datedOfSendDocToKotak = $scope.record.datedOfSendDocToKotak;
                            $scope.dateOfSettelmentByKotak = $scope.record.dateOfSettelmentByKotak;
                            $scope.accountCloseDateByBranch = $scope.record.accountCloseDateByBranch;
                            $scope.incentiveReceivedInMonth = $scope.record.incentiveReceivedInMonth;
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
                // side bar initial
                $scope.sidebarWidth = '0px';

                //super user view
                $scope.dashBoard = false;

                // profile view
                $scope.showProfile = true;

                //list view
                $scope.RDcalling = false;
                $scope.ODcalling = false;
                $scope.InsuranceTracker = false;

                //form view
                $scope.insuranceTrackerForm = false;
                $scope.odConatinerForm = false;
                $scope.rdContainerForm = false;

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
                $scope.RDcalling = false;
                $scope.ODcalling = false;
                $scope.InsuranceTracker = false;

                //form view
                $scope.insuranceTrackerForm = false;
                $scope.odConatinerForm = false;
                $scope.rdContainerForm = false;


            };

            // superUserView function end

            ///// Json to Excel file

            // $scope.odCallingList = [];
            $scope.exportToExcelOD = function () {
                var jsonData = $scope.odCallingList;

                var filteredData = jsonData.map(function (item) {
                    return {
                        'ID': item.id,
                        'Region': item.region,
                        'Area': item.area,
                        'Branch ID': item.branchId,
                        'Branch Name': item.branchName,
                        'Loan Account Number': item.loanAccountNumber,
                        'Client Name': item.clientName,
                        'Date of Default': item.dateOfDefault,
                        'Calling Date': item.callingDate,
                        'Called by – Employee ID': item.calledByEmployeeId,
                        'Called by Employee Name': item.calledByEmployeeName,
                        'Reason of OD Default': item.reasonOfODDefault,
                        'Any Misappropriation case': item.anyMisappropriationCase,
                        'Remarks if any': item.remarksIfAny,
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
                XLSX.writeFile(wb, 'odCallingReport.xlsx');
                alert("Downloading Data Excel file.");
                location.reload();
            };

            // $scope.rdCallingList = [];
            $scope.exportToExcelRD = function () {
                var jsonData = $scope.rdCallingList;

                var filteredData = jsonData.map(function (item) {
                    return {
                        'ID': item.id,
                        'Region': item.region,
                        'Area': item.area,
                        'Branch ID': item.branchId,
                        'Branch Name': item.branchName,
                        'RD Account Number': item.rdAccountNumber,
                        'Client Name': item.clientName,
                        'Date of Default': item.dateOfDefault,
                        'Calling Date': item.callingDate,
                        'Called by – Employee ID': item.calledByEmployeeId,
                        'Called by Employee Name': item.calledByEmployeeName,
                        'Reason of RD Default': item.reasonOfRDDefault,
                        'Any Misappropriation case': item.anyMisappropriationCase,
                        'Remarks if any': item.remarksIfAny,
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
                XLSX.writeFile(wb, 'rdCallingReport.xlsx');
                alert("Downloading Data Excel file.");
                location.reload();
            };

            // $scope.iTtrackerList = [];
            $scope.exportToExcelIT = function () {
                var jsonData = $scope.iTtrackerList;

                var filteredData = jsonData.map(function (item) {
                    return {
                        'ID': item.id,
                        'Region': item.region,
                        'Branch Code': item.branchCode,
                        'Branch Name': item.branchName,
                        'CLAIM ID': item.claimId,
                        'Group No/Center ID': item.centerId,
                        'Center Name': item.centerName,
                        'Client Id': item.clientId,
                        'Account Id': item.accountId,
                        'Disbursement Date': item.disbursementDate,
                        'Client Name': item.clientName,
                        'Nominee Name': item.nomineeName,
                        'Death Client Name /Demise Client Name': item.deathClientName,
                        'Disbursement Amount': item.disbursementAmount,
                        'EMI Day': item.emiDay,
                        'Date of Death': item.dateOfDeath,
                        'Death Reasion/ Demise Reasion': item.deathReasion,
                        'Paid EMI': item.paidEmi,
                        'Loan Outstanding Amt': item.loanOutstandingAmt,
                        'OTS Amt': item.otsAmt,
                        'Claim Settelment Amt': item.claimSettelmentAmt,
                        'Member Handover Amount': item.memberHandoverAmount,
                        'Claim Status': item.claimStatus,
                        'Remarks': item.remarks,
                        'True cell punching date': item.trueCellPunchingDate,
                        'Dated of DOC Received Fom Member': item.datedOfDOCReceivedFromMember,
                        'Dated of send DOC to HO': item.datedOfSendDocToHo,
                        'Dated of send DOC TO KOTAK': item.datedOfSendDocToKotak,
                        'Date of Settelment by Kotak': item.dateOfSettelmentByKotak,
                        'Account Close date by Branch': item.accountCloseDateByBranch,
                        'Incentive received in month': item.incentiveReceivedInMonth,
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
                XLSX.writeFile(wb, 'iTtrackerReport.xlsx');
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
        }
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
//    console.log($scope.uRl);
    if (($scope.userRecord)) {
        if (($scope.userRecord.designation === "Regional Manager"
                || $scope.userRecord.designation === "MIS")) {
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
            $scope.selectedUserType = function () {
                debugger;
//            alert($scope.selectedOptionForUser);
                if ($scope.selectedOptionForUser !== null) {
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
//            alert($scope.selectedOption);
                if ($scope.selectedOption !== null) {
                    $http.get($scope.uRl + "user/getuser/" + $scope.selectedOption)
                            .then(function (response) {
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
