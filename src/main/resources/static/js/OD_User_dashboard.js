var app = angular.module('OD_User_App', []);
app.controller('OD_User_Controller', function ($scope, $http, $document) {


    $scope.userRecord = JSON.parse(window.localStorage.getItem("user"));
    var protocal = window.location.protocol;
    var host = window.location.host;
    $scope.uRl = protocal + "//" + host + "/";
    if (($scope.userRecord.designation === "Account Executive") || ($scope.userRecord.designation === "Branch Manager")) {
        $scope.profileCard = false;
        $scope.notificationCard = false;
        $scope.helpCard = false;
        $scope.ODcalling = false;
        $scope.InsuranceTracker = false;
        $scope.RDcalling = true;
        $scope.insuranceTrackerForm = false;
        $scope.odConatinerForm = false;
        $scope.rdContainerForm = false;
        // side bar initial
        $scope.sidebarWidth = '0px';
        $scope.rdCalling = function () {
            $scope.RDcalling = true;
            $scope.ODcalling = false;
            $scope.InsuranceTracker = false;
            $scope.insuranceTrackerForm = false;
            $scope.odConatinerForm = false;
            $scope.rdContainerForm = false;
            $scope.sidebarWidth = '0px';
        }

        $scope.odCalling = function () {
            $scope.RDcalling = false;
            $scope.ODcalling = true;
            $scope.InsuranceTracker = false;
            $scope.insuranceTrackerForm = false;
            $scope.odConatinerForm = false;
            $scope.rdContainerForm = false;
            $scope.sidebarWidth = '0px';
        }

        $scope.insuranceTracker = function () {
            $scope.RDcalling = false;
            $scope.ODcalling = false;
            $scope.InsuranceTracker = true;
            $scope.insuranceTrackerForm = false;
            $scope.odConatinerForm = false;
            $scope.rdContainerForm = false;
            $scope.sidebarWidth = '0px';
        }


        $scope.RDcallingForm = function () {
            $scope.RDcalling = false;
            $scope.ODcalling = false;
            $scope.InsuranceTracker = false;
            $scope.insuranceTrackerForm = false;
            $scope.odConatinerForm = false;
            $scope.rdContainerForm = true;
        }


        $scope.ODcallingForm = function () {
            $scope.RDcalling = false;
            $scope.ODcalling = false;
            $scope.InsuranceTracker = false;
            $scope.insuranceTrackerForm = false;
            $scope.odConatinerForm = true;
            $scope.rdContainerForm = false;
        }

        $scope.InsuranceTrackerForm = function () {
            $scope.RDcalling = false;
            $scope.ODcalling = false;
            $scope.InsuranceTracker = false;
            $scope.insuranceTrackerForm = true;
            $scope.odConatinerForm = false;
            $scope.rdContainerForm = false;
        }

        $scope.ODcloseForm = function () {
            $scope.odConatinerForm = false;
            $scope.ODcalling = true;
        }

        $scope.RDcloseForm = function () {
            $scope.rdContainerForm = false;
            $scope.RDcalling = true;
        }


        $scope.ITcloseForm = function () {
            $scope.InsuranceTracker = true;
            $scope.insuranceTrackerForm = false;
        }


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

        $scope.submitODform = function () {

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
                modifiedBy: $scope.modifiedBy
            };

            var URL = $scope.uRl + "odcalling/create";
            $http.post(URL, $scope.odCallingOD)
                    .then(function (response) {
                        console.log(response);
                        alert("Form Submitted Successfully.");
                    }, function (error) {
                        console.log(error);
                    });
        };



        $scope.submitRDform = function () {

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
                reasonOfODDefault: $scope.reasonOfODDefault,
                anyMisappropriationCase: $scope.anyMisappropriationCase,
                remarksIfAny: $scope.remarksIfAny,
                filledBy: $scope.filledBy,
                modifiedBy: $scope.modifiedBy
            };
            var URL = $scope.uRl + "rdcalling/create";
            $http.post(URL, $scope.rdCallingOD)
                    .then(function (response) {
                        console.log(response);
                        alert("Form submitted Successfully");
                    }, function (error) {
                        console.log(error);
                    });
        };



        $scope.submitITform = function () {

            $scope.insuranceTracker = {
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
                incentiveReceivedInMonth: $scope.incentiveReceivedInMonth
            };

            var URL = $scope.uRl + "insurancetrackers/create";
            $http.post(URL, $scope.insuranceTracker)
                    .then(function (response) {
                        console.log(response);
                        alert("Form submitted Successfully");
                    }, function (error) {
                        console.log(error);
                    });

        };

    } else {
        window.location.href = $scope.uRl + "index.html";
    }
});



