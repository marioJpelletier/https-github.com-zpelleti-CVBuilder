import React, {Component} from "react";

class PersonalInfo extends Component {
    constructor() {
        super();

        this.state= {
            photo: '',    //{'href...'}
            address1: '',
            address2: '',
            phone: '',
            email: '',
            website: '',
            linkedin: '',
            edit: false,
            editPhoto: false,
        }
    }
    handlePhotoChange = e =>{
        this.setState({
            photo: e.target.value
        })
    }
    handleAddress1Change = e =>{
        this.setState({
            address1: e.target.value
        })
    }
    handleAddress2Change = e =>{
        this.setState({
            address2: e.target.value
        })
    }
    handlePhoneChange = e =>{
        this.setState({
            phone: e.target.value
        })
    }
    handleEmailChange = e =>{
        this.setState({
            email: e.target.value
        })
    }
    handleWebsiteChange = e =>{
        this.setState({
            website: e.target.value
        })
    }
    handleLinkedInChange = e =>{
        this.setState({
            linkedin: e.target.value
        })
    }
    handleEdit = () =>{
        this.setState(prevState=> ({
            edit: !prevState.edit,
        }))
    }
    toggleEditPhoto = () =>{
        this.setState(prevState=>({
            editPhoto: !prevState.editPhoto
        }))
    }

    render(){
        const{
            photo,
            address1,
            address2,
            phone,
            email,
            website,
            linkedin,
            edit,
            editPhoto,
        } = this.state;

        var profilePhoto = {
            backgroundImage: 'url(' + photo + ')'
        
        }

        return(
            <div id="PersonalInfo">
                <div className="header">Resume Builder</div>
                <div
                id="profile-photo"
                style={profilePhoto}
                onClick={this.toggleEditPhoto}/>
                <div className="address">
                    <h2>Address</h2>
                    <p>{address1 ? address1: '123 address st'}</p>
                    <p>{address2 ? address2: 'City, Prov X0X 0X0'}</p>
                </div>
                <div className="phone">
                    <h2>Phone</h2>
                    <p>{phone ? phone: '888-888-8888'}</p>
                </div>
                <div className="email">
                    <h2>Email</h2>
                    <p>{email ? email: 'info@website.com'}</p>
                </div>
                <div className="online">
                    <h2>Online</h2>
                    <p>{website ? website: 'website.com'}</p>
                    <p>linkedin.com/in/{linkedin ? linkedin: 'user-name'}</p>
                </div>
                <button 
                className="edit-toggle"
                type="button"
                onClick={this.toggleEdit}>
                    Edit
                </button>
                {edit &&
                    <form id="intro-edit" className="edit-form">
                        <label htmlFor="address1">Address</label>
                        <input 
                        id="address1"
                        type="text"
                        placeholder="123 address st"
                        onChange={this.handleAddress1Change}/>
                        <label htmlFor="address2">City, State, PostCode</label>
                        <input 
                        id="address2"
                        type="text"
                        placeholder="City, Prov, X0X 0X0"
                        onChange={this.handleAddress2Change}/>
                        <label htmlFor="phone">Phone</label>
                        <input 
                        id="phone"
                        type="text"
                        onChange={this.handlePhoneChange}/>
                        <label htmlFor="email">Email</label>
                        <input 
                        id="email"
                        type="text"
                        onChange={this.handleEmailChange}/>
                        <label htmlFor="website">Website</label>
                        <input 
                        id="website"
                        type="text"
                        onChange={this.handleWebsiteChange}/>
                        <label htmlFor="linkedin">Linkedin UserName</label>
                        <input 
                        id="linkedin"
                        type="text"
                        onChange={this.handleLinkedinChange}/>
                        <button type="button" 
                        onClick={this.toggleEdit}>
                            Close Edit
                        </button>
                    </form>
                }
                {editPhoto && 
                    <form id="photo-edit" className="edit-form">
                        <label htmlFor="photo">Photo Url</label>
                        <input 
                        id="photo"
                        type="text"
                        onChange={this.handlePhotoChange}/>
                        <button type="button" 
                        onclick={this.toggleEditPhoto}>
                            Close Edit
                        </button>
                    </form>
                }
            </div>
        )
    }
}

export default PersonalInfo;
