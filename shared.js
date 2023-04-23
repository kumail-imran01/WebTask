/**
 * shared.js
 * This file contains shared code that runs on both view.html and index.html
 */

// Constants used as KEYS for LocalStorage

const SESSION_INDEX_KEY = "sessionIndex";
const APP_DATA_KEY = "playSportsData";

class Student
{
   //TODO Task 1    
    //This class is used to store all information about the student.
}
class Session
{
   //TODO Task 1    
    //This class is used to store all information about the session.
}
class SessionList
{
    //TODO Task 1
    //This class is used to store all sessions.
        
}

function checkLocalStorageDataExist(key)
{
    if (localStorage.getItem(key))
    {
        return true;
    }
    return false;
}
//Takes 2 parameters and saves it in local storage. To use this, you should call it and pass in the session list.
function updateLocalStorageData(key, data)
{
    let jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
}
//Returns a correctly formatted session list from local storage.
function getLocalStorageData(key)
{
    let jsonData = localStorage.getItem(key);
    let data = jsonData;
    try
    {
        data = JSON.parse(jsonData);
    }
    catch(e)
    {
        console.error(e);
    }
    finally
    {
        return data;
    }
}

// Globals
let allsessions= new SessionList();

// //If there is something in local storage, load it otherwise update LS with default data if no data exists
if (checkLocalStorageDataExist(APP_DATA_KEY))
{
    let data = getLocalStorageData(APP_DATA_KEY);
       allsessions.fromData(data);
       
}
else
{
    // write code to add defalt session by appropriate function call
    //and update local storage
    
 }
