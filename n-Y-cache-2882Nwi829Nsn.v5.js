document.getElementById("deleteCfi").style.display="none"
document.getElementById("deleteCs").style.display="none" 
document.getElementById("updateProPrimeCfi").style.display="none"
document.getElementById("updateProPrimeCs").style.display="none"
document.getElementById("deleteCfiRelogDesti").style.display="none"
document.getElementById("switch-4").style.display="none"
let accsverGL ="<mc class='lb'>V1.5.3(INTER 2.0)</mc>"    
let accsver ="<tq>ACCS</tq> "+accsverGL+" 2023&copy</br>Powered By Cloud Fire International 2023&copy</br>Secured By ARM64⚡</br><tq>ACCS-BINDER ∞</tq>"
document.getElementById("w41").innerHTML=""+accsverGL+""
let y2CacheVERSION ="1.10.0"
console.warn(" Source:Running Y-CAHE "+y2CacheVERSION+""),
document.getElementById("w38").innerHTML="Your Version Is <b>"+y2CacheVERSION+"</b>"
//document.getElementById("w22").innerHTML="Welcome Developer</br><b class='s'>the options for developers has been enabled</b>"
document.getElementById("w23").innerHTML="Build The Feature Before Trying. Or Make it Public"
//document.getElementById("w24").innerHTML="BR DEVELOPER CONSOLE "
document.getElementById("deleteCfiFinal").innerHTML="<div class='modal' id='modal19'><div class='modal-content'><h4 style='color:red;'>Are You Sure To Delete Cloud Fire Account?</h4><button onclick='deleteCfi()' class='btn green'>Yes, Delete This Account</button></br></br>If you logged in to your CLOUDSHARE Account ,it will be logouted during this action for (ECM52)</div></div>"

document.getElementById("deleteCsFinal").innerHTML="<div class='modal' id='modal20'><div class='modal-content'><h4 style='color:red;'>Are You Sure To Delete CloudShare Account?</h4><button onclick='deleteCs()' class='btn green'>Yes, Delete This Account</button></br></br>If you logged in to your CLOUD FIRE Account ,it will be logouted during this action for (ECM52)</div></div>"

document.getElementById("passresetALL").innerHTML="<div class='modal' id='modal11'><div class='modal-content'><center><img src='./8315419563691929000021718307847389263000049577019355394380000.webp' width='75px' height='75px'alt='Logo'><h4 id='restpassH1'>NULL-42</h4><p>For Added Security, enter your email again to proceed.<div id='restpassCfiCon'><input type='email' id='emailForPass' placeholder='example@mail.com'><button class='btn red darken-2' onclick='forgotPass()'>SENT LINK!</button></div><div id='restpassCsCon'><input type='email' id='emailForPassCs' placeholder='example@mail.com'><button class='btn red red 5' onclick='forgotPassCs()'>SENT LINK!</button></div></p></center></div></div>"

document.getElementById("csloginpage").innerHTML="<div class='modal' id='modal7'><div class='modal-content'><center><img src='./8315419563691929000021718307847389263000049577019355394380000.webp' width='75px' height='75px'alt='Logo'><h4>CS LOGIN</h4><p>Login To Your Existing CloudShare Account</p><form autocomplete='off' onsubmit='loginCs(event)'>Email <input type='email' id='loginEmailCs' placeholder='Email' style='color:white'>Password <input type='password' id='loginPasswordCs' style='color:white' placeholder='Password:Remember It.'><button class='btn areelaink blue darken-2'><a href='#modal11' class='modal-trigger'>Forgotten Password</a></button></br></br><button class='btn areelaink #fbc02d yellow darken-2' type='submit'>Login to cShare</button><p>secured By <tq>ACCS</tq>&ARM64</br><tq>ACCS BINDER ∞</tq></p></form></center></div></div>"

function deleteCfi() {

   
try{
    firebase.auth().currentUser.delete()   
    firebasee.auth().signOut()
    document.getElementById("deleteCfi").style.display="none"
document.getElementById("deleteCs").style.display="none"   
   document.getElementById("modal19").style.display="none"
   
   document.getElementById("cfishowbody").style.display="none"  

document.getElementById("updateProPrimeCfi").style.display="none"

document.getElementById("cfilogsta2").innerHTML=" Account Deleted,Just Now."

document.getElementById("deleteCfiRelogDesti").style.display="none" 
             document.getElementById("cfilogcheck").style.display="block"    
 document.title="ACCS - "
 document.getElementById("proimg").src="./8315419563691929000021718307847389263000049577019355394380000.webp"
 document.getElementById("unameshow").innerHTML="There 👋"
   
    Swal.fire({
                        icon: "info",
                        title: "Deleted Permanently",
                        text: "Cloud Fire International Account Deleted",

                    })
                    console.log(err)
}
    catch (err) {
                    
                        
   document.getElementById("deleteCfi").style.display="none"

document.getElementById("deleteCfiRelogDesti").style.display="block"    
   document.getElementById("deleteCs").style.display="block"
}

              
}
function deleteCs() {
firebasee.auth().currentUser.delete()   
    firebase.auth().signOut()
    Swal.fire({
                        icon: "info",
                        title: "Deleted Permanently",
                        text: "CloudShare Account Deleted",

                    })
            document.getElementById("deleteCfi").style.display="none"
document.getElementById("deleteCs").style.display="none"   
     document.getElementById("modal20").style.display="none"   
}


document.getElementById("dnameport").innerHTML="<div class='modal' id='modal21'><div class='modal-content'><img src='./8315419563691929000021718307847389263000049577019355394380000.webp' width='75px' height='75px'><h4>Change <b id='cwelcoH1'></b> Welcome Name</h4><div id='cfiDnamechange'><input type='text' name='dnameCfi' id='dnameCfit'></br></br><button class='btn yellow darken-2' onclick='dnameCfiSubmit()'>Update</button></div><div id='csDnamechange'><input type='text' name='dnameCs' id='dnameCst'></br></br><button class='btn yellow darken-2' onclick='dnameCsSubmit()'>Update</button></div></div></div>"

function dnameChangeFromCfi() {
    document.getElementById("cfiDnamechange").style.display="block"
document.getElementById("csDnamechange").style.display="none"    
document.getElementById("cwelcoH1").innerHTML="Cloud Fire"
}


function dnameCfiSubmit() {
       const ndname = document.getElementById('dnameCfit').value
        firebase.auth().currentUser.updateProfile({                        displayName:""+ndname+""
                                })
            Swal.fire({
                                icon: "success",
                                title: "Successfully Welcome Name Changed To "+ndname+"",
                                text: "Your welcome name updated to "+ndname+".May it take some time to take affect this change across all Cloud Fire International Platforms",

                            })
                  const userDocRefLA = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid);                                    userDocRefLA.update({ch25:"CFI: DNAME CHANGED"}), document.getElementById("unameshow").innerHTML=""+ndname+""          
                 
}


function dnameCsSubmit() {
       const ndnameCs = document.getElementById('dnameCst').value
        firebasee.auth().currentUser.updateProfile({                        displayName:""+ndnameCs+""
                                })
            Swal.fire({
                                icon: "success",
                                title: "Successfully Welcome Name Changed To "+ndnameCs+"",
                                text: "Your welcome name updated to "+ndnameCs+".May it take some time to take affect this change across all Cloud Fire International Platforms",

                            })
                   //document.getElementById("unameshow").innerHTML=""+ndnameCs+""  
                   document.getElementById("CsusernameShow").innerHTML = "" +ndnameCs+ ""  
}

function dnameChangeFromCs() {
    document.getElementById("cfiDnamechange").style.display="none"
document.getElementById("csDnamechange").style.display="block"    
document.getElementById("cwelcoH1").innerHTML="CloudShare"
}
var myDate = new Date();
var hrs = myDate.getHours();
var greet;

if (hrs < 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 16)
  greet = 'Good Afternoon';
  else if (hrs >= 16 && hrs <= 19)
  greet = 'Good Evening';
  else if (hrs >= 19 && hrs <= 24)
  greet = 'Good Night';

document.getElementById('good_h').innerHTML ='' + greet + '';
console.log("Greetings : "+greet+"")

function deleteCfiRelogDestiFunc() {
    firebase.auth().signOut()
    document.getElementById("lpage").style.display="flex"
    
document.getElementById("lpage_t").style.display="none"   
 document.getElementById("lpage_t2").innerHTML="Reload This Page.</br>You are logged out from a sensitive operation.</br>or here you can <a id='#modal6' style='color:red;' class='modal-trigger'>Loggin Again</a>"

}

let switches = document.getElementsByClassName('Themeswitch');

let style = localStorage.getItem('style');



// localStorage.getItem('style')
   //localStorage.removeItem('style');
  
for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}



function thlisw() {
					//Swal.fire({
//  icon: 'success',
 // title: "Theme Switched To ROYAL VIEW ",
  //text: 'Your Theme Will Be Auto/Manually Switched To Royal View Theme', 
// })
   
}
function thdasw() {
				//Swal.fire({
  //icon: 'success',
  //title: "Theme Switched To DARK VIEW"   text: 'Your Theme Will Be Auto/Manually Switched To Dark Theme', 
// })
}
function bothlogout() {
    firebase.auth().signOut()
    firebasee.auth().signOut()
    alert("This logout didn't perform completely logouted state(HH29)")
    document.getElementById("cfilogcheck").style.display="block" 
    document.getElementById("cfishowbody").style.display="none"  
    document.getElementById("cslogcheck").style.display="block" 
     document.getElementById("csshowbody").style.display="none"  
}
document.getElementById("ver1").innerHTML=""+accsver+""
document.getElementById("ver2").innerHTML=""+accsver+""
document.getElementById("ver3").innerHTML=""+accsver+""
document.getElementById("ver6").innerHTML=""+accsver+""
document.getElementById("ver5").innerHTML=""+accsverGL+""




// localStorage.setItem('oname', MhdAdhil)
 
 
const input = document.getElementById('welinpu');
let itemsArray = localStorage.getItem('welinpu') ?
JSON.parse(localStorage.getItem('welinpu')) : [];

itemsArray.forEach(addTask);
function addTask(text){
 const li = document.getElementById("good_h");
 li.textContent = text;
 //u2l.appendChild(li);
}
function addwelco(){
  itemsArray.push(input.value);
  localStorage.setItem('welinpu', JSON.stringify(itemsArray));
  addTask(input.value);
  
                    const userDocRef = firebase.firestore()
                        .collection('users')
                        .doc(firebase.auth().currentUser.uid)


                    userDocRef.update({
                        welcoprom: editProfile["welcoprompt"].value,


                    })
  
  Swal.fire({
  icon: 'success',
  title: "Welcome Prompt Added ",
    text: 'For deleting this welcome prompt Go To SideNav',
   })
   const userDocRefLA = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid);                                    userDocRefLA.update({ch25:"WELCOME PROMPT ADDED."})
}

function del(){
  localStorage.removeItem('welinpu')
  localStorage.removeItem('htd');
  console.log("run:-OVERRIDES DELETION")
  //alert('REFRESH PAGE FOR BETTER EXPERIENCE')
  itemsArray = [];
  localStorage.clear(); document.getElementById("good_h").innerHTML="Welcome, "
  document.getElementById("headtextLocal").innerHTML="ACCS LITe"
  document.getElementById("headtextLocalCs").innerHTML="ACCS LITe"
  document.getElementById("switch-4").style.display="block"
  
  M.toast({
                        html: ` Successfully Local Overrides DELETED <a href='#modal3' class='modal-trigger'>Set Again ></a>`,
                        classes: "red"
                    })
                    const userDocRefLA = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid);                                    userDocRefLA.update({ch25:"LOCAL OVERRIDES DELETED"})
  //document.getElementById("unameshow").style.display="none"
  
}
if (style == null) {
     setTheme("lightorg")
   
}else {
//  setTheme(theme);
  
}

