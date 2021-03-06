(function() {
  'use strict';

  angular.module('application')
  
		.controller('ChatCtrl',function($scope,chat){
			 /**
		     * Message input field id
		     * @const {string}
		     */
		    var MESSAGE_INPUT_ID = "message_input";

		    function send() {

		        //do send
		        chat.sendMessage($scope.message);

		        clearFocus();
		    }

		    function clearFocus() {
		        //set focus to input field
		        document.getElementById(MESSAGE_INPUT_ID).focus();

		        //clear message input
		        $scope.message = "";
		    }

		 	function init(){
		 		$scope.messages = chat.messages;
		 		clearFocus();
		 	}

		 	init();

		 	//Exports
			$scope.send = send;
			
		});
		
})();
