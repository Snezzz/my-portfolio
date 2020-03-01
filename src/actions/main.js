
export const mainAction = (data) => {
    return {
        type: "ADD_CHILDREN",
        data
    }
};
export const aboutInfo = (info) => {
    return{
        type: "GET_ABOUT",
        info
    }
};
export const portfolioInfo = (info) => {
    return{
        type: "GET_PORTFOLIO",
        info
    }
};
export const contactsInfo = (info) => {
    return{
        type: "GET_CONTACTS",
        info
    }
};
export const uploadInfo = (info) => {
    return{
        type: "UPLOAD",
        info
    }
};
export const connectDB = (db) =>{
  return{
      type: "CHANGE_DB",
      db
  }
};
export const toggleElement = (el) => {
    return{
        type: "SWITCH",
        el
    }
};

export const getData = (db, from) => dispatch => {
   db.ref(from).once('value').then((snapshot) => {
       console.log(snapshot.val())
       switch (from){
           case "/about":
               dispatch(aboutInfo(JSON.stringify(snapshot.val())));
               break;
           case "/contacts":
               dispatch(contactsInfo(JSON.stringify(snapshot.val())));
               break;
           case "/information/developer":
               dispatch(portfolioInfo(JSON.stringify(snapshot.val())));
               break;
               case "/information/video-maker":
                   dispatch(portfolioInfo(JSON.stringify(snapshot.val())));
                   break;
           case "/information/photo-editor":
               dispatch(portfolioInfo(JSON.stringify(snapshot.val())));
               break;
           default: break;
       }

   });
};
