// For full API documentation, including code examples, visit https://wix.to/94BuAAs
import wixUsers from 'wix-users';
import wixData from 'wix-data';
import wixLocation from 'wix-location';
import {session} from 'wix-storage';

import {local} from 'wix-storage';

$w.onReady(async function () {
	//TODO: write your page related code here...
	if(wixUsers.currentUser.loggedIn){
		let user=(await wixData.query("users").eq("userId", wixUsers.currentUser.id).find()).items;
		//console.log(user)
		
		if(user.length>0){
			if(user[0].cancelled===true){
				wixUsers.logout();
			}
		}

	}
	$w("#globalSearchBtn").onClick(() => {
		wixLocation.to("/mp3s-in-english-dev/");
		let search = $w("#globalSearch").value;
		session.setItem("Search", search)
	})
	 $w('#globalSearch').onKeyPress((event) => {
		 let url = wixLocation.url;

		 if (wixLocation.path[0] == "dev") {
			 console.log("Dev: ", url);
		 }
		 
        if(event.key === "Enter" || event.key === " " ) {
        wixLocation.to("/mp3s-in-english-dev/");
		let search = $w("#globalSearch").value;
		session.setItem("Search", search)
		
        }
		
    })


});
