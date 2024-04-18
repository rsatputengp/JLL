var app = angular.module('OD_Moderator_App', []);
app.controller('OD_Moderator_Controller', function ($scope, $http, $document) {


    $scope.userRecord = JSON.parse(window.localStorage.getItem("user"));
    var protocal = window.location.protocol;
    var host = window.location.host;
    $scope.uRl = protocal + "//" + host + "/";

    if (($scope.userRecord.designation === "Area Account Manager")) {
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
    } else {
        window.location.href = $scope.uRl + "index.html";
    }
});


