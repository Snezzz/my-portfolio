import React from 'react'
import {getData} from "../actions/main";
import connect from "react-redux/es/connect/connect";
import {Contacts} from "../Components/Contacts/contacts";
import lodash from 'lodash'


class ContactsContainer extends React.Component {

    componentWillMount(){
        this.props.getData(this.props.db,'/contacts');
    }

    render() {
        if(!lodash.isEmpty(this.props.contacts)) {
            return (
                <Contacts {...this.props} />
            )
        }
        else return (<div className="empty-body"/>)
    }
}
const mapStateToProps = state => ({
    contacts: state.contactsReducer,
    db: state.dbReducer
});

const mapDispatchToProps = dispatch =>({
    getData:(db,from)=>{
        dispatch(getData(db,from))
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(ContactsContainer)