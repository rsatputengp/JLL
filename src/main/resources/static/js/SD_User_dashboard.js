var app = angular.module('SD_User_App', []);
app.controller('SD_User_Controller', function ($scope, $http, $document) {


    $scope.userRecord = JSON.parse(window.localStorage.getItem("user"));
    var protocal = window.location.protocol;
    var host = window.location.host;
    $scope.uRl = protocal + "//" + host + "/";

    if (($scope.userRecord.designation === "Branch Manager")) {
        $scope.profileCard = false;
        $scope.notificationCard = false;
        $scope.helpCard = false;
        $scope.ODcalling = false;
        $scope.insuranceTracker = false;
        $scope.ROcalling = true;
        // side bar initial
        $scope.sidebarWidth = '0px';
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




