var app = angular.module('OD_Moderator_App', []);
app.controller('OD_Moderator_Controller', function ($scope, $http, $document) {


    $scope.userRecord = JSON.parse(window.localStorage.getItem("user"));
    var protocal = window.location.protocol;
    var host = window.location.host;
    $scope.uRl = protocal + "//" + host + "/";
    if (($scope.userRecord)) {
        if (($scope.userRecord.designation === "Area Account Manager")) {
            $scope.profileCard = false;
            $scope.notificationCard = false;
            $scope.helpCard = false;

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
                $scope.rdFormfilledBy = true;
                $scope.rdFormModifiedBy = true;
                $scope.rddisabledFD = true;
                $scope.rddisabledMD = true;

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
                $scope.odFormfilledBy = true;
                $scope.odFormModifiedBy = true;
                $scope.oddisabledFD = true;
                $scope.oddisabledMD = true;                


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
                $scope.itFormfilledBy = true;
                $scope.itFormModifiedBy = true;
                $scope.itdisabledFD = true;
                $scope.itdisabledMD = true;                

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
                $scope.showProfile = true;

                $scope.RDcalling = false;
                $scope.ODcalling = false;
                $scope.InsuranceTracker = false;

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
                        }, function (error)
                        {
                            console.log(error);
                        });
            };

            // view edit function end

        }
    } else {
        window.location.href = $scope.uRl + "index.html";
    }
});


