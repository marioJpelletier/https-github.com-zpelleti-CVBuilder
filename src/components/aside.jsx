import React, {Component}  from "react";
import Info from "./personalInfo";
import Skills from "./skills"

/**
 * Aside element represents a portion of a document whose contents
 * is only indirectly related to the document's main content. 
 */
class Aside extends Component{
    render(){
        return(
            <aside id="Aside">
                <Info/>
                <Skills/>
            </aside>
        )
    }
}

export default Aside;
