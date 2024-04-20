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




        $scope.getITformData = function (id) {

            var URL = $scope.uRl + "insurancetrackers/get/" + id;
            $http.post(URL, $scope.insuranceTracker)
                    .then(function (response) {
                        $scope.record = response.data;
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

                    }, function (error) {
                        console.log(error);
                    });
        };

    } else {
        window.location.href = $scope.uRl + "index.html";
    }
});




