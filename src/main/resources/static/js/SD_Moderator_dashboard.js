var app = angular.module('SD_Moderator_App', []);
app.controller('SD_Moderator_Controller', function ($scope, $http, $document) {


    $scope.userRecord = JSON.parse(window.localStorage.getItem("user"));
    var protocal = window.location.protocol;
    var host = window.location.host;
    $scope.uRl = protocal + "//" + host + "/";
    if (($scope.userRecord)) {
        if (($scope.userRecord.designation === "Area Manager")) {


//        $scope.profileCard = false;
//        $scope.notificationCard = false;
//        $scope.helpCard = false;
//        $scope.ODcalling = false;
//        $scope.insuranceTracker = false;
//        $scope.ROcalling = true;
//        // side bar initial
//        $scope.sidebarWidth = '0px';
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
//        $scope.submitITform = function () {
//
//            $scope.insuranceTracker = {
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
//            var URL = $scope.uRl + "insurancetrackers/create";
//            $http.post(URL, $scope.insuranceTracker)
//                    .then(function (response) {
//                        console.log(response);
//                        alert("Form submitted Successfully");
//                    }, function (error) {
//                        console.log(error);
//                    });
//
//        };
//        $scope.profileCard = false;
//        $scope.notificationCard = false;
//        $scope.helpCard = false;
//        $scope.InsuranceTracker = true;
//
//        // side bar initial
//        $scope.sidebarWidth = '0px';
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
//
//
//        $scope.helpButton = function () {
//            $scope.profileCard = false;
//            $scope.notificationCard = false;
//            $scope.helpCard = true;
//        };
//
//
//        $scope.closePopup = function () {
//            $scope.profileCard = false;
//            $scope.notificationCard = false;
//            $scope.helpCard = false;
//        };
//
//
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
//        $scope.insuranceTracker = function () {
//            $scope.InsuranceTracker = true;
//            $scope.insuranceTrackerForm = false;
//            $scope.sidebarWidth = '0px';
//        };
//
//
//
//
//            $scope.ITcloseForm = function () {
//                $scope.InsuranceTracker = true;
//                $scope.insuranceTrackerForm = false;
//            };

//
//        $scope.InsuranceTrackerForm = function () {
//            $scope.InsuranceTracker = false;
//            $scope.insuranceTrackerForm = true;
//
//        }
//
//
//
//
//        $scope.getITformData = function (id) {
//
//            var URL = $scope.uRl + "insurancetrackers/get/" + id;
//            $http.get(URL, $scope.insuranceTracker)
//                    .then(function (response) {
//                        $scope.record = response.data;
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
//                    }, function (error) {
//                        console.log(error);
//                    });
//        };
//
//
//        $scope.submitITform = function () {
//
//            $scope.insuranceTracker = {
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
//            var URL = $scope.uRl + "insurancetrackers/create";
//            $http.post(URL, $scope.insuranceTracker)
//                    .then(function (response) {
//                        console.log(response);
//                        alert("Form submitted Successfully");
//                    }, function (error) {
//                        console.log(error);
//                    });
//
//        };

//new code

            $scope.profileCard = false;
            $scope.notificationCard = false;
            $scope.helpCard = false;
//        $scope.ODcalling = true;
//        $scope.RDcalling = true;
            $scope.InsuranceTracker = true;
            $scope.insuranceTrackerForm = false;
//        $scope.odConatinerForm = false;
//        $scope.rdContainerForm = false;
            // side bar initial
            $scope.sidebarWidth = '0px';

            //getting list for displaying
//        $scope.odCallingList = [];
//        $scope.rdCallingList = [];
            $scope.iTtrackerList = [];




//        //getting all lists data --->
//        $scope.getListforOD = function () {
//            console.log($scope.uRl + "odcalling/getall");
//            $http.get($scope.uRl + "odcalling/getall")
//                    .then(function (response) {
//                        $scope.odCallingList = response.data;
//                    }, function (error) {
//                        console.error(error);
//                    });
//        };
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

            $scope.getListforIT = function () {

                console.log($scope.uRl + "insurancetrackers/getall");
                $http.get($scope.uRl + "insurancetrackers/getall")
                        .then(function (response) {
                            $scope.iTtrackerList = response.data;
                        }, function (error) {
                            console.error(error);
                        });
            };
//        $scope.getListforRD();
//        $scope.getListforOD();
            $scope.getListforIT();
            //<-------------

            // for IT tracker list view       
            $scope.insuranceTracker = function () {
//            $scope.RDcalling = false;
//            $scope.ODcalling = false;
                $scope.InsuranceTracker = true;
                $scope.insuranceTrackerForm = false;
//            $scope.odConatinerForm = false;
//            $scope.rdContainerForm = false;
                $scope.sidebarWidth = '0px';

                //for close the profile
                $scope.showProfile = false;

                $scope.getListforIT();
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

                $scope.InsuranceTracker = false;
                $scope.insuranceTrackerForm = false;

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


