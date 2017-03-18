var webdriverio = require('webdriverio');
var socketio = require('socketio')
var bodyParser = require('body-parser');
var express = require('express')

var options = { desiredCapabilities: { browserName: 'chrome' } };
var baseUrl = 'https://eighteeneight.mylocalsalon.com/onlinebooking/v7410/Steps/SiteSelection.aspx';

// data from socket 

var optionsList = {
	selectGroup : selectGroup || '#ctl00_MainContentHolder_SiteGroupAccordion_SiteGroupAccordion_Pane_1_header_SiteGroupHeaderBtn',
	selectLocation : '#ctl00_MainContentHolder_SiteGroupAccordion_SiteGroupAccordion_Pane_1_content_SitesList_ctl01_SiteNameLnk',
	firstDropdowns : {
		selectItem : '#ctl00_MainContentHolder_SelectServiceRepeater_ctl01_CategoryCombo',
		selectOption : 'Face Treatments'
	},
	secondDropdowns : {
		selectItem : '#ctl00_MainContentHolder_SelectServiceRepeater_ctl01_ServiceCombo',
		selectOption : 'SkinMetics Facial'
	},
	thirdDropdowns : {
		selectItem : '#ctl00_MainContentHolder_SelectServiceRepeater_ctl01_EmployeeCombo',
		selectOption : 'Male'
	},
	inputsData : {
		inputName : '#ctl00_MainContentHolder_ClientLogin_UserName',
		inputPassword : '#ctl00_MainContentHolder_ClientLogin_Password' 
	}
} 

var location = {
	title : 'title',
	address : 'address',
	phone: 8787987
};

var user = {
	userName : 'b.samat@mail.ru',
	userPassword : 'Qwerty123r'
}

var client = webdriverio.remote(options);

client
    .init()
    .url(baseUrl)
    .click(optionsList.selectGroup)
    .getTitle().then(function(title) { 
    			console.log(title);
    })
    .click(optionsList.selectLocation).then(function(title){
    		client.getTitle().then(function(title){
    			console.log(title);
    		})
    })
    .click(optionsList.firstDropdowns.selectItem)
    .selectByVisibleText(optionsList.firstDropdowns.selectItem, optionsList.firstDropdowns.selectOption)
    .pause(2000)
    .element(optionsList.firstDropdowns.selectItem).then(function(element){
    	console.log(element.selector);
    })
    .selectByVisibleText(optionsList.secondDropdowns.selectItem, optionsList.secondDropdowns.selectOption)
		.pause(2000)
		.click(optionsList.secondDropdowns.selectItem)
    .selectByVisibleText(optionsList.thirdDropdowns.selectItem, optionsList.thirdDropdowns.selectOption)
    .click('#ctl00_MainContentHolder_NextBtn')
    .pause(2000)
    .click('#ctl00_MainContentHolder_NextBtn')
    .pause(5000)
    .click('#ctl00_MainContentHolder_DayAccordion_DayAccordion_Pane_0_content_TimeAccordion_TimeAccordion_Pane_0_content_StartTimesList_ctl00_BookBtn')
    .pause(2000)
    .setValue(optionsList.inputsData.inputName, user.userName)
    .pause(1000)
    .setValue(optionsList.inputsData.inputPassword, user.userPassword)
    .pause(3000)
    .click('#ctl00_MainContentHolder_ClientLogin_LoginBtn')
    .pause(3000)
    .click('#ctl00_MainContentHolder_BookBtn')
