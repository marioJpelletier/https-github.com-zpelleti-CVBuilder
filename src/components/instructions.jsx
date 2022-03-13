import React, {Component} from 'react'

class Instructions extends Component {
    constructor() {
        super();

        this.state = {
            instructions: true
        }
    }
    
    toggleInstructions = () => {
        this.setState(prevState => ({
            instructions: !prevState.instructions
        }))
    }
    
    render(){
        return(
            <div>
                {this.state.instructions && <div id="Instructions">
                    <div className="container">
                        <h2>Instructions</h2>
                        <ul>
                            <li>Hover over the areas of the page that you want to edit.</li>
                            <li>You will find Add, Edit, and Save buttons</li>
                            <li>Enter your Education and Experience, or click on the entriesyou want to remove</li>
                            <li>When your Resume is done, click .......(add instructions)</li>
                        </ul>
                        <button type="button" onClick={this.toggleInstructions}>
                            Let's Get Started
                        </button>
                    </div>
                </div>}

        )
        </div>
    )

}
    
    
}

export default Instructions;

