
var app = angular.module('app', []);


app.controller('signUpController', function ($scope, $http, $interval, $timeout) {

    $scope.signInSection = true;
    $scope.signUpSection = false;
    $scope.forgotPasswordSection = false;
    $scope.resetPasswordSection = false;

    $scope.timerExpired = false;
    $scope.orthodox = "";




    //java script syntax directly call by function
    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;
        return minutes + ":" + (remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds);
    }


    $scope.URL = window.location.protocol + "//" + window.location.host + "/";
    console.log($scope.URL);

    $scope.signInPage = function () {

        $scope.signInSection = true;
        $scope.signUpSection = false;
        $scope.forgotPasswordSection = false;
        $scope.resetPasswordSection = false;

    };

    $scope.signUpPage = function () {
        $scope.signInSection = false;
        $scope.signUpSection = true;
        $scope.forgotPasswordSection = false;
        $scope.resetPasswordSection = false;
    };


    $scope.forgotPassword = function () {
        $scope.signInSection = false;
        $scope.signUpSection = false;
        $scope.forgotPasswordSection = true;
        $scope.resetPasswordSection = false;
    };

    $scope.resetPasswordsec = function () {
        $scope.signInSection = false;
        $scope.signUpSection = false;
        $scope.forgotPasswordSection = false;
        $scope.resetPasswordSection = true;
    };


    $scope.regions = {
        "Zone-1": {
            "Region-2": {
                "Nagpur-1": ["Kanhan", "Saoner", "Parsivani", "Ramtek", "Kalmeshwar"],
                "Nagpur-2": ["Hingna", "Mouda", "Katol", "Manish Nagar", "Umred", "Kuhi"],
                "Wardha": ["Wardha", "Seloo", "Deoli", "Karanja Gadge", "Samudrapur"],
                "Yawatmal-1": ["Arni", "Dharwa", "Digras", "Umarkhed", "Wani"],
                "Yawatmal-2": ["Kalamb", "Pandherkawada", "Yawatmal"]
            },

            "Region-1": {
                "Gondia": ["Amgaon", "Deori", "Gondia", "Goregaon", "Morgaon Arjuni", "Sadak Arjuni", "Salekasa", "Tirora"],
                "Bhandara": ["Bhandara", "Lakhandur", "Lakhani", "Pauni", "Sakoli", "Tumsar"],
                "Gadchiroli": ["Armori", "Bhrampuri", "Gadchiroli", "Kurkheda", "Wadsa"],
                "Chandrapur": ["Bhadrawati", "Chandrapur", "Gondpipari", "Rajura"]
            },

            "Region-3": {
                "Amravati": ["Akola", "Amravati", "Chandur Railway", "Morshi", "Paratwada"]
            }
        }
    };


    $scope.updateRegion = function () {
        $scope.selectedRegion = "";
        $scope.selectedArea = "";
        $scope.selectedBranch = "";
    };


    $scope.updateArea = function () {
        $scope.selectedArea = "";
        $scope.selectedBranch = "";
        $scope.areas = Object.keys($scope.regions[$scope.selectedZone][$scope.selectedRegion]);
    };


    $scope.updateBranch = function () {
        $scope.selectedBranch = "";
        $scope.branches = $scope.regions[$scope.selectedZone][$scope.selectedRegion][$scope.selectedArea];
    };


    //signUP submit form
    $scope.signUpSubmit = function () {
        // $scope.encryptedPassword = CryptoJS.MD5($scope.userPassword).toString();
        if ($scope.password === $scope.cnfrmpass) {

            var Url = $scope.URL + "user/getuser/" + $scope.userName;

            $http.get(Url)
                    .then(function (response) {

                        $scope.resData = response.data;
                        if ($scope.resData.userName === $scope.userName) {
                            alert("Account already exist!")
                        } else {

                            var url = $scope.URL + "user/add/" + $scope.emp_id + "/" + $scope.userName + "/" + $scope.email + "/" + $scope.selectedZone + "/" + $scope.selectedRegion + "/" +
                                    $scope.selectedArea + "/" + $scope.selectedBranch + "/" + $scope.selectedDesignation + "/" + $scope.password + "/Pending";
                            $http.post(url)
                                    .then(function (response) {
                                        alert("You had Successfully Registered");
                                        location.reload();
                                    },
                                            function (error) {
                                                console.error(error);
                                            });
                        }

                    },
                            function (error) {
                                console.error(error);
                            });
        } else {
            alert("Password and Confirm Password should be match.")
        }
    };


    $scope.signInSubmit = function () {

        var url = $scope.URL + "user/login/" + $scope.emp_id + "/" + $scope.password;
        $http.get(url)
                .then(function (response) {
                    $scope.resData = response.data;
//                    alert($scope.emp_id);
//                    alert($scope.password);
//                    alert($scope.resData.emp_id);
//                    alert($scope.resData.password);
//                    alert(($scope.emp_id === $scope.resData.emp_id) && ($scope.password === $scope.resData.password));
                    if (($scope.emp_id === $scope.resData.emp_id) && ($scope.password === $scope.resData.password)) {
                        if ($scope.resData.userIdStatus === "Accept") {
//                            alert($scope.resData.designation);
//                            alert($scope.resData.designation === "account executive");
                            if ($scope.resData.designation === "Branch Manager") {
                                window.location.href = $scope.URL + "Moderator_dashboard.html";
                                localStorage.setItem("user", JSON.stringify($scope.resData));
                                alert("Login Successfully");
                            } else if ($scope.resData.designation === "Area Manager") {
                                window.location.href = $scope.URL + "Moderator_dashboard.html";
                                localStorage.setItem("user", JSON.stringify($scope.resData));
                                alert("Login Successfully");
                            } else if ($scope.resData.designation === "Account Executive") {
                                window.location.href = $scope.URL + "Moderator_dashboard.html";
                                localStorage.setItem("user", JSON.stringify($scope.resData));
                                alert("Login Successfully");
                            } else if ($scope.resData.designation === "Area Account Manager") {
                                window.location.href = $scope.URL + "Moderator_dashboard.html";
                                localStorage.setItem("user", JSON.stringify($scope.resData));
                                alert("Login Successfully");
                            } else if ($scope.resData.designation === "Risk Officer") {
                                window.location.href = $scope.URL + "Moderator_dashboard.html";
                                localStorage.setItem("user", JSON.stringify($scope.resData));
                                alert("Login Successfully");
                            } else if ($scope.resData.designation === "Auditor") {
                                window.location.href = $scope.URL + "Moderator_dashboard.html";
                                localStorage.setItem("user", JSON.stringify($scope.resData));
                                alert("Login Successfully");
                            } else if ($scope.resData.designation === "Cluster Audit Manager") {
                                window.location.href = $scope.URL + "Moderator_dashboard.html";
                                localStorage.setItem("user", JSON.stringify($scope.resData));
                                alert("Login Successfully");
                            } else if ($scope.resData.designation === "Regional Manager") {
                                window.location.href = $scope.URL + "Admin_dashboard.html";
                                localStorage.setItem("user", JSON.stringify($scope.resData));
                                alert("Login Successfully");
                            } else if ($scope.resData.designation === "MIS") {
                                window.location.href = $scope.URL + "Admin_dashboard.html";
                                localStorage.setItem("user", JSON.stringify($scope.resData));
                                alert("Login Successfully");
                            } else {
                                alert("Unable to login");
                            }

                        } else if ($scope.resData.userIdStatus === "Pending") {
                            alert("The user is not activated by Super User yet.");
                        }
                    } else {
                        alert("check the userId and Password!");
                    }
                },
                        function (error) {
                            console.error(error);
                        });
    };


    $scope.resetPassword = function () {
        if ($scope.password === $scope.cnfrmpass) {
            var Url = $scope.URL + "user/resetPassword/" + $scope.email + "/" + $scope.password;
            $http.get(Url)
                    .then(function (response) {
                        console.log(response);
                        alert("Password reset successfully :)")
                        location.reload();
                    },
                            function (error) {
                                console.error(error);
                            });

        } else {
            alert("password and confirm password should be match!");
        }
    };


    //timer
    $scope.timer = function () {
        $scope.timeLeft--;
        $scope.formattedTime = formatTime($scope.timeLeft);
        if ($scope.timeLeft <= 0) {
            $scope.timerExpired = false;
        } else {
            $timeout($scope.timer, 1000); // Call itself after 1 second (1000 milliseconds)
        }
    };


    // Function to start the timer
    $scope.timerInterval;

    $scope.startTimer = function () {

        $scope.generateOTPa = true;
        alert("inside the timer")

        $scope.timerDuration = 60;//timer duration in 20secs
        $scope.timeLeft = $scope.timerDuration;
        $scope.formattedTime = formatTime($scope.timeLeft);

        $scope.timerInterval = $interval(function () {
            $scope.timeLeft--;
            $scope.formattedTime = formatTime($scope.timeLeft);
            if ($scope.timeLeft <= 0) {
                $interval.cancel($scope.timerInterval);
                $scope.timerExpired = false;
                $scope.generateOTPa = false;
            }
        }, 1000);
    };




    $scope.buttonClicked = function (button) {
        // Store which button was clicked
        if (button === "generateOTP") {

            if ($scope.email) {
                var Url = $scope.URL + "user/getEmail/" + $scope.email;

                $http.get(Url)
                        .then(function (response) {
                            $scope.resData = response.data;

                            if ($scope.resData.email === $scope.email) {
                                Url = $scope.URL + "user/otpSender/"+ $scope.email;
                                $http.get(Url)
                                        .then(function (response) {
                                            $scope.mess = response.data;
                                            alert("helloji");
                                            alert($scope.mess.message);
                                            if ($scope.mess.message === "OK") {
                                                $scope.timerExpired = true;
                                                $scope.enterEmail = true;
                                                alert($scope.timerExpired === true);
                                                $scope.startTimer();
                                            } else {
                                                alert("Something , went wrong. Please! regenarate OTP.");
                                            }
                                        }, function (error) {
                                            console.error(error);
                                        });
                            } else {
                                alert("Invalid email-Id");
                            }

                        },
                                function (error) {
                                    console.error(error);
                                });

            } else {
                alert("Enter the email.");
            }

        } else if (button === "verify") {


            if ($scope.otpInput) {

                //post the otpInput
                var Url = $scope.URL + "user/otpVerification/" + $scope.email + "/" + $scope.otpInput;
                $http.get(Url)
                        .then(function (response) {
                            $scope.mess = response.data;
                            alert($scope.mess.message);
                            if ($scope.mess.message === "OK") {
                                // Handle successful response
                                $interval.cancel($scope.timerInterval);
                                alert("OTP correct");
                                $scope.resetPasswordsec();
                            } else {
                                alert("Something , went wrong. Please! regenarate OTP.");
                            }
                        }, function (error) {
                            alert("Incorrect OTP");
                            console.error(error);
                        });

            } else {
                alert("Enter OTP");
            }

        }
    };

});