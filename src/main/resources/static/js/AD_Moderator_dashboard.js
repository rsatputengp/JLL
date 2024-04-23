var app = angular.module('AD_Moderator_App', []);
app.controller('AD_Moderator_Controller', function ($scope, $http, $document) {


    $scope.userRecord = JSON.parse(window.localStorage.getItem("user"));
    var protocal = window.location.protocol;
    var host = window.location.host;
    $scope.uRl = protocal + "//" + host + "/";

    if (($scope.userRecord.designation === "Auditor")) {
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

        $scope.submitHVform = function () {

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
                modifiedBy: $scope.modifiedBy
            };

            var URL = $scope.uRl + "houseverification/create";
            $http.post(URL, $scope.houseVerification)
                    .then(function (response) {
                        console.log(response);
                        alert("Form submitted Successfully");
                    }, function (error) {
                        console.log(error);
                    });

        };
        $scope.submitCVRform = function () {

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
                modifiedBy: $scope.modifiedBy
            };

            var URL = $scope.uRl + "centervisitreport/create";
            $http.post(URL, $scope.centerVisitReport)
                    .then(function (response) {
                        console.log(response);
                        alert("Form submitted Successfully");
                    }, function (error) {
                        console.log(error);
                    });

        };
        $scope.submitASRform = function () {

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
                modifiedBy: $scope.modifiedBy
            };

            var URL = $scope.uRl + "auditscoringreport/create";
            $http.post(URL, $scope.auditScoringReport)
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
