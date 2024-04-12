/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('myApp', [])
app.controller('mainController', ['$scope', '$document', function ($scope, $http, $document) {



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
        }

        $scope.openSideBar = function () {
            $scope.sidebarWidth = '250px';

        }

        $scope.notificationButton = function () {
            $scope.profileCard = false;
            $scope.notificationCard = true;
            $scope.helpCard = false;
        }

        $scope.profileButton = function () {
            $scope.profileCard = true;
            $scope.notificationCard = false;
            $scope.helpCard = false;
        }

        $scope.helpButton = function () {
            $scope.profileCard = false;
            $scope.notificationCard = false;
            $scope.helpCard = true;

        }

        $scope.closePopup = function () {
            $scope.profileCard = false;
            $scope.notificationCard = false;
            $scope.helpCard = false;
        }

    }]);


//super_user - controller
app.controller("cont", function ($scope, $http) {
    $scope.userRecord = JSON.parse(window.localStorage.getItem("user"));
    var protocal = window.location.protocol;
    var host = window.location.host;
    $scope.uRl = protocal + "//" + host + "/";
    console.log($scope.uRl);

//            if(($scope.userRecord)){    
    $scope.branchContainerVisible = false;
    $scope.userContainerVisible = true;

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
//                    $http.get($scope.uRl + "branch/getall")
//                            .then(function (response) {
//                            $scope.userList_COPs = response.data;
//                            },
//                                    function (error) {
//                                    console.log(error);
//                                    }); 

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
//                        console.log($scope.list);
//                    console.log($scope.acceptedUserList +"|"+ $scope.rejectedUserList 
//                            +"|"+$scope.pendingUserList +"|"+ $scope.terminatedUserList 
//                            +"|"+ $scope.resetpasswordUserList );
//                                                
    //Accept
    $scope.onUserEditA = function (record) {
        $scope.url = "user/updateStatus/" + record.emp_id + "/" + record.userName
                + "/" + "Accept";
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
                + "/" + "Reject";
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
                + "/" + "Terminate";
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
        window.localStorage.removeItem("super_user");
    };

    ///// Json to Excel file
    $scope.exportToExcel = function () {
        alert("Downloading Data Excel file.");
        var jsonData = $scope.userList;

        var filteredData = jsonData.map(function (item) {
            return {
                'id': item.id,
                'userName': item.userName,
                'branchName': item.branchName,
                'userType': item.userType,
                'userIdStatus': item.userIdStatus,
                'remark': item.remark
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
//            const columnF = ws.getColumn('branchNameList');
//            columnF.alignment = {wrapText: true};

        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        // Save the Excel file
        XLSX.writeFile(wb, 'User\'s Status_report.xlsx');
    };

    ///// Json to Excel file for COPs
    $scope.exportToExcel_COPs = function () {
        alert("Downloading Data Excel file.");
        var jsonData = $scope.userList_COPs;

        jsonData.forEach(function (item) {
            item.branchNameList = item.branchNameList + ".";
        });

        var filteredData = jsonData.map(function (item) {
            return {
                'id': item.id,
                'userName': item.userName,
                'branchName': item.branchName,
                'userType': item.userType,
                'userIdStatus': item.userIdStatus,
                'branchNameList': item.branchNameList
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
            {width: 70}
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
//            columnF.alignment = {wrap Text: true};

        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        // Save the Excel file
        XLSX.writeFile(wb, 'COPs Branch list report.xlsx');
    };
//            User Access permission *_*
//            _______________
//            
//            Branch Access permission *_*
    $scope.optionsArray = {};
    $scope.selectedOptions = [];
    $scope.options = ["Kanhan", "Saoner", "Parsivani", "Ramtek", "Kalmeshwar",
        "Hingna", "Mouda", "Katol", "Manish Nagar", "Umred", "Kuhi", "Wardha",
        "Seloo", "Deoli", "Karanja Gadge", "Samudrapur", "Arni", "Dharwa",
        "Digras", "Umarkhed", "Wani", "Kalamb", "Pandherkawada", "Yawatmal",
        "Amgaon", "Deori", "Gondia", "Goregaon", "Morgaon Arjuni", "Sadak Arjuni",
        "Salekasa", "Tirora", "Bhandara", "Lakhandur", "Lakhani", "Pauni",
        "Sakoli", "Tumsar", "Armori", "Bhrampuri", "Gadchiroli", "Kurkheda",
        "Wadsa", "Bhadrawati", "Chandrapur", "Gondpipari", "Rajura",
        "Akola", "Amravati", "Chandur Railway", "Morshi", "Paratwada"];
    $scope.acceptedlist = [];
    $scope.list2 = [];
    $scope.selectedUserType = function () {
//            alert($scope.selectedOptionForUser);
        if ($scope.selectedOptionForUser !== null) {
            $http.get($scope.uRl + "user/getActiveUser/" + $scope.selectedOptionForUser)
                    .then(function (response) {
                        $scope.acceptedlist = response.data;
                        $scope.emp_id = null;
                        $scope.userName = null;
                        $scope.zone = null;
                        $scope.region = null;
                        $scope.area = null;
                        $scope.branch = null;
                        $scope.designation = null;
                        $scope.userIdStatus = null;
                        $scope.templistBranch = [];
                        $scope.templistArea = [];
                            $scope.options.forEach(function (option){

                            $scope.optionsArray[option] = $scope.templistBranch.includes(option);
                        });

                        $scope.selectedOptions = Object.values($scope.templistBranch);
//                    $scope.showSelectedV();  
                    },function (error) {
                        console.log(error);
                    });
        }
    };
    $scope.showSelectedValue = function () {
//            alert($scope.selectedOption);
            if($scope.selectedOption !== null) {
                $http.get($scope.uRl + "user/get/"+$scope.selectedOption)
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

                        $scope.showSelectedV();
                    },function (error) {
                        console.log(error);
                    });
        }
    };
    $scope.showSelectedV = function () {
        $http.get($scope.uRl + "user/get/" + $scope.list2.id)
                .then(function (response) {
                    if ("" === response.data) {
                        $scope.selectedOptions = [];
                        $scope.optionsArray = [];
                    } else {
                        $scope.templistBranch = response.data.branch;
                        $scope.options.forEach(function (option) {

                            $scope.optionsArray[option] = $scope.templistBranch.includes(option);
                        });

                        $scope.selectedOptions = Object.values($scope.templistBranch);
                    }
                }, function (error) {
                    console.log(error);
                });
    };



    $scope.updateSelectedOptions = function (option) {
        // Update the selectedOptions array based on checkbox changes
        if ($scope.optionsArray[option]) {
            $scope.selectedOptions.push(option);
        } else {
            // Remove the option from the selectedOptions array
            var index = $scope.selectedOptions.indexOf(option);
            if (index !== -1) {
                $scope.selectedOptions.splice(index, 1);
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
            var arraylistofbranch = $scope.selectedOptions.toString();
//                var listbranch = arraylistofbranch.split(",");
            var arrayResult = arraylistofbranch.split(',').map(function (item) {
                return item.trim();
            });
//                var jsonlist = JSON.stringify(arrayResult);

            $scope.oldList = [];
            $http.get($scope.uRl + "branch/getuser/" + $scope.userName)
                    .then(function (response) {
                        $scope.oldList = response.data;
                        if ("" === $scope.oldList) {
                            if ($scope.selectedOptions.length > 0) {
                                $scope.url = "branch/add/" + $scope.list2.userName + "/" + arrayResult
                                        + "/" + $scope.list2.userType + "/" + $scope.list2.userIdStatus
                                        + "/" + $scope.list2.branchName;
                                $http.get($scope.uRl + $scope.url)
                                        .then(function (response) {
                                            alert("Branch successfully Added.");
                                            location.reload();

                                        }, function (error) {
                                            console.log(error);
                                        });
                            } else {
                                alert("Please, select atleast one branch OR press 'Cancel' button.");
                            }
                        } else {
                            if ($scope.selectedOptions.length > 0) {
                                $scope.url = "branch/update/" + $scope.oldList.id + "/" + $scope.list2.userName
                                        + "/" + arrayResult + "/" + $scope.list2.userType + "/" + $scope.list2.userIdStatus
                                        + "/" + $scope.list2.branchName;
                                alert(arrayResult);
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
                    },
                            function (error) {
                                console.log(error);
                            });

        }
    };
    $scope.loadpage = function () {
        location.reload();
    };
//            }else{
//                window.location.href = $scope.uRl +"index.html";
//            }

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

