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
        $scope.submitRDform = function () {

            var URL = $scope.uRl + "jll/addRDform" + $scope.region + "/" + $scope.area + "/" + $scope.branchId + "/" + $scope.branchName + "/" + $scope.rdAccountNumber + "/" + $scope.clientName + "/" + $scope.dateOfDefault + "/" + $scope.callingDate + "/" + $scope.calledByEmployeeId + "/" + $scope.calledByEmployeeName + "/" + $scope.reasonOfRDDefault + "/" + $scope.anyMisappropriationCase + "/" + $scope.remarks + "/" + $scope.filledBy + "/" + $scope.modifiedBy;
            $http.get(URL)
                    .then(function (response) {
                        console.log(response);
                        alert("Form Submitted Successfully.");
                    }, function (error) {
                        console.log(error);
                    });
        }



        $scope.submitODform = function () {

            var URL = $scope.uRl + "jll/addODform" + +$scope.region + "/" + $scope.area + "/" + $scope.branchId + "/" + $scope.branchName + "/" + $scope.rdAccountNumber + "/" + $scope.clientName + "/" + $scope.dateOfDefault + "/" + $scope.callingDate + "/" + $scope.calledByEmployeeId + "/" + $scope.calledByEmployeeName + "/" + $scope.reasonOfRDDefault + "/" + $scope.anyMisappropriationCase + "/" + $scope.remarks + "/" + $scope.filledBy + "/" + $scope.modifiedBy;
            $http.get(URL)
                    .then(function (response) {
                        console.log(response);
                        alert("Form submitted Successfully");
                    }, function (error) {
                        console.log(error);
                    });
        }
        
        

        $scope.submitITform = function () {
            
            var URL = $scope.uRl +"jll/addITform"+ $scope.region+"/"+$scope.branchCode+"/"+$scope.branchName+"/"+$scope.claimId+"/"+$scope.centerId+"/"+$scope.centerName+"/"+$scope.clientId+"/"+$scope.accountId+"/"+$scope.disbursementDate+"/"+$scope.clientName+"/"+$scope.nomineeName+"/"+$scope.deathClientName+"/"+$scope.disbursementAmount+"/"+$scope.emiDay+"/"+$scope.dateOfDeath+"/"+$scope.deathReasion+"/"+$scope.paidEmi+"/"+$scope.loanOutstandingAmt+"/"+$scope.otsAmt+"/"+$scope.claimSettelmentAmt+"/"+$scope.memberHandoverAmount+"/"+$scope.claimStatus+"/"+$scope.remarks+"/"+$scope.trueCellPunchingDate+"/"+$scope.datedOfDOCReceivedFromMember+"/"+$scope.datedOfSendDocToHo+"/"+$scope.datedOfSendDocToKotak+"/"+ 
          $scope.dateOfSettelmentByKotak  +"/"+$scope.accountCloseDateByBranch +"/"+ $scope.incentiveReceivedInMonth+"/"+ $scope.filledBy + "/" + $scope.modifiedBy;
            
            
        }




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
    } else {
        window.location.href = $scope.uRl + "index.html";
    }
});



