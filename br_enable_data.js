const userDocRef = firebase.firestore()
                        .collection('users')
                        .doc(firebase.auth().currentUser.uid)


                    userDocRef.update({
                    chBR_ORG:"inline",
})
