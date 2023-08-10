console.warn("RUNNING TEMP FILE 001/BAN_TOOLS AND ORGANIZATION_MAKER")

document.getElementById("BanControlPage").style.display="none"
document.getElementById("OrgControlPage").style.display="none"
function openBanCP() {
    document.getElementById("suclog").style.display="none"
    document.getElementById("BanControlPage").style.display="block"
}
document.getElementById("BanControlPage").innerHTML="<div id='m1'><h4 id='m2'><a  href='#WE' id='snas1' onclick='closeBanCP()' style='color:#ff9595;font-size:25px;' class='ico4423'>arrow_back</a><img src='./8315419563691929000021718307847389263000049577019355394380000.webp' width='25px' height='25px'alt='Accs-Logo'>ACCS LITe</h4></div></br></br></br></br><center><img id='headimgLocal' src='./8315419563691929000021718307847389263000049577019355394380000.webp' width='75px' height='75px'alt='AL'><h5>BAN CONTROL PAGE<b class='s lb'>beta</b></h5><p><b>Quick Removal Tool</b></p><p>This tool only work when you switched your theme to (CFI_AREA2524) By Accidentally.</p></br><button class='btn orange darken-2' onclick='tryBANREMOVAL1()'>Remove BAN</button></br></br>If still your BAN didn't removed that means you are directly banned by ACCS&reg</br><p><b>Request For BAN Removal</b></p></br>Wait"
function closeBanCP(){ document.getElementById("BanControlPage").style.display="none"
document.getElementById("suclog").style.display="block"
}
function tryBANREMOVAL1() {
    const userDocRef = firebase.firestore()
                        .collection('users')
                        .doc(firebase.auth().currentUser.uid)

                    userDocRef.update({
                        chf:"light",


                    })
                    Swal.fire({
                        icon: "info",
                        title: "TRY: BAN REMOVED, REFRESH IT.",
                        text: "REFRESH THE SITE OR THE APP.",

                    })

                    M.toast({
                        html: `Refresh to take affect <a href='index.html' class='lb'>Refresh></a>`,
                        classes: "orange"
                    })
                    const userDocRefLA = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid);                                    userDocRefLA.update({ch25:"BAN REMOVED"})
}
//ORGANIZATION CONTROL 
function openOrgCP() {
    document.getElementById("suclog").style.display="none"
    document.getElementById("OrgControlPage").style.display="block"
}
function closeOrgCP(){ document.getElementById("OrgControlPage").style.display="none"
document.getElementById("suclog").style.display="block"
}
function updateBR_EDIT_URLS() {
      const userDocRef = firebase.firestore()
                        .collection('users')
                        .doc(firebase.auth().currentUser.uid)


                    userDocRef.update({

                        ch21: editBREDITURLS["BRDESTIURL"].value,
                        ch22: editBREDITURLS["BRIMGURL"].value,
                        ch25:"BR BADGE UPDATED"
                    })
                      Swal.fire({
                        icon: "success",
                        title: "BR BADGE UPADATED",
                        text: "THE BR ORGANIZATION BADGE WAS NOW UPDATED TO NEW WITH APPLIED CHANGES BY YOU.",

                    })
                    document.getElementById("cfilogsta1").innerHTML="BR Badge Updated,Just Now."
}
function trySUBMIT_BR_NAME(event) {
const userDocRef = firebase.firestore()
                        .collection('users')
                        .doc(firebase.auth().currentUser.uid)


                    userDocRef.update({

                        ch23: editBREDITNAME["editBRNAME"].value,
                        ch25:"BR BADGE NAME UPDATED"
                        
                    })
     Swal.fire({
                        icon: "success",
                        title: "BR ORGANIZATION NAME UPADATED",
                        text: "THE BR ORGANIZATION NAME WAS NOW UPDATED TO NEW WITH APPLIED CHANGES BY YOU.",

                    })
                    document.getElementById("cfilogsta1").innerHTML="BR Badge Name Updated,Just Now."
                    
}
function upgrade64BIT_1() {
    const userDocRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)


                    userDocRef.update({

                       
                        cha:"none",
                            chb:"2",
                            chc:"3",
                            chd:"Date Of Birth",
                            che:"About",
                            chf:"lightorg",
                            chg:"7",
                            chh:"8",
                            chBR_ORG:"none",
                           ch24:"AC_CHA",ch25:"UPDATED TO 64-BIT",ch26:"AC_CHA",ch27:"AC_CHA",ch28:"AC_CHA",ch29:"AC_CHA",ch30:"AC_CHA",ch31:"AC_CHA",ch32:"AC_CHA",ch33:"AC_CHA",ch34:"AC_CHA",ch35:"AC_CHA",ch36:"AC_CHA",ch37:"AC_CHA",ch38:"AC_CHA",ch39:"AC_CHA",ch40:"AC_CHA",ch41:"AC_CHA",ch42:"AC_CHA",ch43:"AC_CHA",ch44:"AC_CHA",ch45:"AC_CHA",ch46:"AC_CHA",ch47:"AC_CHA",ch48:"AC_CHA",ch49:"AC_CHA",ch50:"AC_CHA",ch51:"AC_CHA",ch52:"AC_CHA",ch53:"AC_CHA",ch54:"AC_CHA",ch55:"AC_CHA",ch56:"AC_CHA",ch57:"AC_CHA",ch58:"AC_CHA",ch59:"AC_CHA",ch60:"AC_CHA",ch61:"AC_CHA",ch62:"AC_CHA",ch63:"AC_CHA",ch64:"AC_CHA"
                    })
                    Swal.fire({
                        icon: "success",
                        title: "UPGRADED TO 64BIT WEBCHANEL",
                        text: "ARM64",

                    })
                    //document.getElementById("BR_SHOW").style.display="none"
                    
}

function uploadImage_BR(e) {
     document.getElementById("lpage").style.display="block"              
      console.log(e.target.files[0]),
      
      document.getElementById("lpage").style.display="block", 
      
                        Swal.fire({
                            icon: 'info',
                            title: 'Uploading Your BR BADGE PICTURE',
                            text: 'Updating your profile please wait a while.. ',
                        })
                 
                    const uid = firebase.auth().currentUser.uid
                    const fileRef = firebase.storage().ref().child(`/users/${uid}/br_badge/`)
                    const uploadTask = fileRef.put(e.target.files[0])
                    uploadTask.on('state_changed',
                        (snapshot) => {

                            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                            //icon:'info',
                            //title:'Uploading Your Profile',
                            //text:'Updating your profile please wait a while.. ', 
                            // }),
                            if (progress == '100')    Swal.fire({
                                icon: 'success',
                                title: "BR BADGE PICTURE UPDATED",
                                text: "Your BR BADGE Picture Was Successfully Updated "
                            }), document.getElementById("cfilogsta1").innerHTML="BR BADGE UPDATED, just now." 
                
                
                document.getElementById("lpage").style.display="none"           
                        },
                        (error) => {
                            console.log(error)
        document.getElementById("lpage").style.display="none"                 
                            Swal.fire({
                                icon: 'error',
                                title: "Unable To Update BR BADGE Picture",
                                text:error
                            })
                        },
                        () => {

                            uploadTask.snapshot.ref.getDownloadURL().then((downloadURLBR) => {
                                console.log('File available at', downloadURLBR);
                                const userDocRef = firebase.firestore()
                        .collection('users')
                        .doc(firebase.auth().currentUser.uid)


                    userDocRef.update({

                        ch22:downloadURLBR,
                        ch25:"BR BADGE PHOTO UPDATED"
                    })
     
     
                                
                            });
                        }
                    );
                }  
function tryDISABLE_BR_BADGE() {
    const userDocRef = firebase.firestore()
                        .collection('users')
                        .doc(firebase.auth().currentUser.uid)


                    userDocRef.update({
                    chBR_ORG:"none",
                    ch24:"inline"
                    })
                    const userDocRefLA = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid);                                    userDocRefLA.update({ch25:"DISABLED BR BADGE"})
}

function tryENABLE_BR_BADGE() {
    const userDocRef = firebase.firestore()
                        .collection('users')
                        .doc(firebase.auth().currentUser.uid)


                    userDocRef.update({
                    chBR_ORG:"inline",
                    ch24:"none"
                    })
                    const userDocRefLA = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid);                                    userDocRefLA.update({ch25:"ENABLED BR BADGE"})
}
