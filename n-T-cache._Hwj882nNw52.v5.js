let t2CacheVERSION ="1.1.0"
console.warn(" Source:Running T-CAHE "+t2CacheVERSION+"")
document.getElementById("n11").innerHTML="Your Version Is <b>"+t2CacheVERSION+"</b>"
let limitNOTE ="ACCS&reg has limited you to use certain features.<a href='#modal29' class='modal-trigger s' id='block_lm_2'>learn why</a>"
let block_NOTE_TEMP_CFI ="YOUR CLOUD FIRE SECTION or ACCOUNT WAS TEMPORARILY BANNED FROM ACCS&reg. <a href='#modal29' class='modal-trigger m' id='block_lm'>learn more/remove ban</a>"
let block_NOTE_TEMP_CS ="YOUR CLOUDSHARE SECTION or ACCOUNT WAS TEMPORARILY BANNED FROM ACCS&reg. <a href='#modal29' class='modal-trigger m' id='block_lm'>learn more/remove ban</a>"

function setTheme(theme) {
  if (theme == 'light') {
   console.log("Switched to Light Theme"), 
   document.getElementById("currenttheme").innerHTML="<b>Royal Theme</b></br>FEEL IT, TAKE IT."
  location.replace("#RoyalView"), 
  document.getElementById('switcher-id').href = './royalview.v1.css';
  
  } 
  else if(theme == 'dark') {
   console.log("Switched to Dark Theme"), 
   
document.getElementById("currenttheme").innerHTML="<b>Dark Theme</b></br>THEY SHINE IN THEIR WAY."      
  location.replace("#DarkView")
   document.getElementById('switcher-id').href = './darkview.v1.css';
   
  }
   if (theme == 'lightorg') {
   console.log("Switched to Light Theme"),
         
document.getElementById("currenttheme").innerHTML="<b>Light Theme</b></br>If you enabled Dark theme in your smartphone, that will be  affect the LIGHT theme."
  location.replace("#LightView")
   document.getElementById('switcher-id').href = './lightview.v1.css';
   
  }     
  else if(theme == '2524ADN') {
      document.getElementById("locals").innerHTML="WELCOME ADHIL TO <tq>ACCS</tq>"
      document.getElementById('switcher-id').href = './lightview.v1.css';
      
      document.getElementById("currenttheme").innerHTML="Running Personalasied Theme '2524ADN' By Adhil"
      
      document.getElementById("tta").style.display="block"
      
document.getElementById("ttb").style.display="block"
 document.getElementById("w31").style.display="block"
 
 document.getElementById("w32").style.display="block"
 
 document.getElementById("w33").style.display="none"
           
     
   document.getElementById("w30").innerHTML=" <img src='https://firebasestorage.googleapis.com/v0/b/cloudfirein-pub-storege-1.appspot.com/o/users%2FRXonT5nv0aXJwgBMXYbUZDMkuMs2%2F719113230449238100000208283662668139700000934043691655264700000?alt=media&token=8668557c-a491-4c12-9949-c9d15529d7dd' width='150px' height='150px' class='welcoimg' alt='De-Profile'>"
    document.getElementById("proimg").style.display="none"
     document.getElementById("w27").innerHTML="Adhil's <b style='color:#1562ff;'>Cloud Fire</b> Account"
     document.getElementById("cfilogsta1").innerHTML="Hey Man...!🙌"
     document.getElementById("w28").innerHTML="Dear Adhil Please Loggin Again To Cloud Fire International Account With <tq>ACCS</tq>>"
     document.getElementById("w29").innerHTML="•menu"
     document.getElementById("w29").style.fontSize="20px"
     document.getElementById("w29").style.color="#1562ff"
  }
    
  if (theme == 'cfi_area2524') {
document.getElementById('switcher-id').href = './lightview.v1.css', document.getElementById("cfi_area").innerHTML="<h5 class='re'>"+block_NOTE_TEMP_CFI+"</h5>"
document.getElementById("w26").style.display="none"
document.getElementById("deleteCfi").style.display="none"
document.getElementById("cfilogoutbtn").style.display="none", document.getElementById("cfi_area_the").innerHTML="<h5 class='re'>"+limitNOTE+"</h5>"
document.getElementById("updateProPrimeCfi").innerHTML="<h5 class='re'>"+limitNOTE+"</h5>"
document.getElementById("accsNavIntPRE").innerHTML="<h5 class='re'>"+limitNOTE+"</h5>"
document.getElementById("accsNavPRE").innerHTML="<h5 class='re'>"+limitNOTE+"</h5>"
document.getElementById("accsNav").style.background="#000534"
document.getElementById("switch-4").style.display="none"
//document.getElementById("accsPrimeInt").innerHTML="<h5 class='re'>"+limitNOTE+"</h5>"
  }
  else if(theme == 'greenV'){
      document.getElementById('switcher-id').href = './lightgbr.v1.css';
      document.getElementById("currenttheme").innerHTML="<b>LIGHT-GBR</b></br>SHADE IT∞" 
  }
  if (theme == 'cs_area2524') {
document.getElementById('switcher-id').href = './lightview.v1.css', document.getElementById("cs_area").innerHTML="<h5 class='re'>"+block_NOTE_TEMP_CS+"</h5>"
document.getElementById("w26").style.display="none"
document.getElementById("deleteCs").style.display="none",
document.getElementById("cslogoutbtn").style.display="none", document.getElementById("cfi_area_the").innerHTML="<h5 class='re'>"+limitNOTE+"</h5>",
document.getElementById("prCs").innerHTML="<h5 class='re'>"+limitNOTE+"</h5>"
  }
  else if (theme == 'all_area2524') {
document.getElementById('switcher-id').href = './lightview.v1.css', document.getElementById("cfi_area").innerHTML="<h5 class='re'>"+block_NOTE_TEMP_CFI+"</h5>"
 document.getElementById("cs_area").innerHTML="<h5 class='re'>"+block_NOTE_TEMP_CS+"</h5>"
document.getElementById("locals").style.display="none"
document.getElementById("w26").style.display="none"

document.getElementById("deleteCfi").style.display="none"
document.getElementById("deleteCs").style.display="none"
document.getElementById("cfilogoutbtn").style.display="none"
document.getElementById("cslogoutbtn").style.display="none", document.getElementById("cfi_area_the").innerHTML="<h5 class='re'>"+limitNOTE+"</h5>"
document.getElementById("w36").innerHTML="<h5 class='re'>"+limitNOTE+"</h5>"
document.getElementById("logoutPRE").innerHTML="<h5 class='re'>"+limitNOTE+"</h5>"
document.getElementById("accsNavPRE").innerHTML="<h5 class='re'>"+limitNOTE+"</h5>"
document.getElementById("accsNavIntPRE").innerHTML="<h5 class='re'>"+limitNOTE+"</h5>"
document.getElementById("updateProPrimeCs").innerHTML="<h5 class='re'>"+limitNOTE+"</h5>"
document.getElementById("updateProPrimeCfi").innerHTML="<h5 class='re'>"+limitNOTE+"</h5>"
document.getElementById("accsPrimeInt").style.display="none"
  }
  firebase.auth().currentUser
  
  const userDocRef = firebase.firestore()
                        .collection('users')
                        .doc(firebase.auth().currentUser.uid)

                    userDocRef.update({
                        chf:""+theme+"",


                    })
                    
}
   
//document.getElementById("w33").innerHTML="User Tag and User Tag Colour Has removed due to some. security issues..it may be availabled in the future updates.</br></br>"

document.getElementById("accsNav").style.display="none"
function openAccsNav() {
    document.getElementById("accsNav").style.display="block"
document.getElementById("m1").style.border="1px solid #ff009d",   document.getElementById("accsNav").style.border="1px solid #404eff", document.getElementById("accsNav").style.width="80%"
    document.getElementById("m3").style.display="none"
    document.getElementById("w29").style.display="none"
    document.getElementById("m4").style.display="block"
}
function closeAccsNav() {
    document.getElementById("accsNav").style.display="none"
    document.getElementById("accsNav").style.width="0%"
  document.getElementById("m1").style.border="0px solid", document.getElementById("accsNav").style.border="0px solid", document.getElementById("w29").style.display="inline", document.getElementById("m3").style.display="block"
    document.getElementById("m4").style.display="none"
}
function conToAccs() {
    document.getElementById("fwelco").style.display="none"
    document.getElementById("suclog").style.display="block"
    
    document.getElementById("closefwelcoFromBoot").style.display="block"    
    document.getElementById("closefwelcoFromNav").style.display="none"
    
}
function openTERMPOLICY() {
    document.getElementById("fwelco").style.display="block"
    document.getElementById("suclog").style.display="none"
    document.getElementById("closefwelcoFromBoot").style.display="none"    
    document.getElementById("closefwelcoFromNav").style.display="block",
    document.getElementById("conToAccsText").style.display="none"
    document.getElementById("s1").innerHTML="Look's like you are already read and accepted the TERM POLICY. thank you for your coperation."
    M.toast({
                        html: `Looks like you already readed it.`,
                        classes: "orange"
                    })
    }

document.getElementById("commonmodal").innerHTML="<h5>Must Read And Accept TERM POLICY Before Trying To Exit.</br></br><button class='btn' onclick='openTERMPOLICY()'>Read Again</button></h5>"
function mo1() {
    document.getElementById("commonmodal").innerHTML="<h5>Refresh your current page for a two, three times to affect the changes</h5>"
}
//document.getElementById("block_lm").style.textDecoration="underlined"
