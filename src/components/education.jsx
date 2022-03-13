import React, {Component} from 'react';
import uniqid from 'uniqid';

class Education extends Component {
    constructor(){
        super();

        this.state = {
            school: ' ', 
            degree: ' ', 
            startDate: ' ', 
            endDate: ' ', 
            location: ' ', 
            minor: ' ', 
            education: [
                {
                    id: uniqid(),
                    school: ' ', 
                    degree: ' ', 
                    date: ' ', 
                    location: ' ', 
                    minor: ' ', 
                }
            ],
            edit: false
        }
    }
    handleSchoolChange = e =>{
        this.setState({
            school: e.target.value
        })
    }
    handleDegreeChange = e =>{
        this.setState({
            degree: e.target.value
        })
    }
    handleStartDateChange = e =>{
        this.setState({
            startDate: e.target.value
        })
    }
    handleEndDateChange = e =>{
        this.setState({
            endDate: e.target.value
        })
    }
    handleLocationChange = e =>{
        this.setState({
            location: e.target.value
        })
    }
    handleMinorChange = e =>{
        this.setState({
            minor: e.target.value
        })
    }
    onSubmitEducation = e =>{
        e.preventDefault();
        this.setState({
            education: this.state.education.concat({
                id: uniqid(),
                school: this.state.school,
                degree: this.state.degree,
                date: this.state.startDate + ' - ' + this.state.endDate,
                location: this.state.location,
                minor: this.state.minor
            }),
            school: '',
            degree: '',
            startDate:'',
            endDate:'',
            location: '',
            minor: '',
        })
        this.toggleEdit();
    }
    toggleEdit = () =>{
        this.setState(prevState =>({
            edit: !prevState.edit
        }))
    }

    handleRemove = key =>{
        const newEdu = this.state.education.filter(Education.id !== key);
        this.setState({
            education: newEdu
        })
    }

    render(){
        const{
            school,
            degree,
            startDate,
            endDate,
            location,
            minor,
            education,
            edit
        } = this.state;

        return (
            <div id="Education">
                <h2>Education</h2>
                {education.map(edu => {
                    return(
                        <div key={edu.id} onClick={() =>
                            this.handleRemove(edu.id)}>
                                <div>
                                    <p className="education-date">{edu.date}</p>
                                    <p className="education-degree">{edu.degree}</p>                                             
                                </div>
                                <div>
                                    <p className="education-school">{edu.school}</p>
                                    <p className="education-location">{edu.location}</p>
                                    <p className="education-minor">minor: {edu.minor}</p>
                                </div>
                                </div>
                    )
                })}
                <button className="edit-toggle"
                type="button"
                onClick={this.toggleEdit}>
                    Add
                </button>
                {edit && 
                    <form id="education-add" className="edit-form">
                        <label htmlFor="school">School</label>
                        <input 
                        id="school"
                        type="text"
                        value={school}
                        onChange={this.handleSchoolChange}/>
                        <label htmlFor="degree">Degree</label>
                        <input 
                        id="degree"
                        type="text"
                        value={degree}
                        onChange={this.handleDegreeChange}/>
                        <label htmlFor="start-date">Start Date</label>
                        <input 
                        id="start-date"
                        type="text"
                        value={startDate}
                        placeholder="Month &amp; Year"
                        onChange={this.handleStartDateChange}/>
                        <label htmlFor="end-date">End Date</label>
                        <input
                        id="end-date"
                        type="text"
                        value={endDate}
                        placeholder="Month &amp; Year"
                        onChange={this.handleEndDateChange}/>
                        <label htmlFor="location">Location</label>
                        <input 
                        id="location"
                        type="text"
                        value={location}
                        onChange={this.handleLocationChange}/>
                        <label htmlFor="minor">Minor</label>
                        <input 
                        id="minor"
                        type="text"
                        value={minor}
                        onChange={this.handleMinorChange}/>
                        <button
                        type="button"
                        onClick={this.onSubmitEducation}>
                            Add Education
                        </button>
                        <button
                        type="button"
                        onClick={this.toggleEdit}>
                            Close
                        </button>
                    </form>
                }
         </div>   
        )
    }
  
}


export default Education;
