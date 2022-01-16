import React from "react";
import "./MyProfile.css"
import NavBar from "../../components/NavBar/NavBar";
import line_delimeter from "../../images/line_delimeter.png";
import add_button from "../../images/add-button.png"


export default class MyProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="myprofile">
                <NavBar/>
                <DescriptionBlock
                    title='My profile'
                />
            </div>
        )
    }
}

function Delimeter(props) {
    return (
        <img className={props.className}
             src={props.delimeter}
        >
        </img>
    );
}


function DescriptionBlock(props) {
    return (
        <div className="myprofile-description-block">
            <div className="myprofile-description-header">
                {props.title}
                <Delimeter className="myprofile-description-delimeter"
                           delimeter={line_delimeter}
                />
            </div>
            <InfoBlock/>
            {/*<div className="description">*/}
            {/*    <TextBlock text={props.texts[0].text}/>*/}
            {/*    <Delimeter className="description-delimeter"*/}
            {/*               delimeter={description_delimeter}/>*/}

            {/*    <TextBlock text={props.texts[1].text}/>*/}
            {/*    <Delimeter className="description-delimeter"*/}
            {/*               delimeter={description_delimeter}/>*/}

            {/*    <TextBlock text={props.texts[2].text}/>*/}
            {/*</div>*/}

        </div>
    );
}

function InfoBlock(props) {
    return (
        <div className="myprofile-infoblock">
            <div className="myprofile-userinfo">
                <div className="myprofile-userinfo-title">
                    nickname
                </div>
                <button className="myprofile-userinfo-button">
                    <img
                        className="add-button"
                        src={add_button}>
                    </img>
                    <div className="prescription">
                        Add your photo
                    </div>
                </button>
                <button className="myprofile-userinfo-button">
                    <img
                        className="add-button"
                        src={add_button}>
                    </img>
                    <div className="prescription">
                        Add description
                    </div>
                </button>
            </div>
            <div className="myprofile-userposts">

            </div>
        </div>
    )
}