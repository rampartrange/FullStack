import React from "react";
import "./MyProfile.css"
import NavBar from "../../components/NavBar/NavBar";
import line_delimeter from "../../images/line_delimeter.png";
import add_button from "../../images/add-button.png"
import AuthAPI from "../../services/AuthAPI";
import {withCookies} from "react-cookie";
import {useForm} from "react-hook-form";
import ProfileAPI from "../../services/ProfileAPI";


function MyProfile(props) {

    return (
        <div className="myprofile">
            <NavBar/>
            <DescriptionBlock
                title='My profile'
                cookies={props}
            />
        </div>
    )
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
            <InfoBlock cookies={props.cookies}/>
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

class InfoBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            user_id: null,
            profile_id: null,
            access: null,
            description: ""
        }

        const {cookies} = this.props.cookies;
        const refresh = cookies.get("refresh");
        const id = cookies.get("id");

        console.log(this.state)

        AuthAPI.RefreshUser(refresh).then((data) => {
            if (data.status === 200) {
                this.setState({access: data.data.access})
                AuthAPI.GetActiveUser(id, data.data.access).then((data) => {
                    this.setState({username: data.data.username});
                    this.setState({user_id: data.data.id});

                }).then((data) => {
                    ProfileAPI.GetUserProfiles(id).then((data) => {
                        if (data.status === 200) {
                            if (data.data.length > 0) {
                                this.setState({
                                    description: data.data[0].description,
                                    profile_id: data.data[0].id,
                                    user_id: id
                                })
                            }
                        }
                    })
                })
            } else {
                this.setState({username: "nickname"})
            }
        })
    }
    UpdateProfile() {
        const description = document.getElementById('description').textContent;
        if (this.state.profile_id === null) {
            ProfileAPI.CreateProfile(this.state.user_id, description).then((data) => {
                this.setState({
                    description: description,
                    profile_id: data.data.profile.id
                })
            })
        } else {
            ProfileAPI.UpdateProfile(this.state.profile_id, this.state.user_id, description).then((data) => {
                this.setState({description: data.data.description})
            })
        }
    }


    render() {
        return (
            <div className="myprofile-infoblock">
                <div className="myprofile-userinfo">
                    <div className="myprofile-userinfo-title">
                        {this.state.username}
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
                    <div className="myprofile-description-form">
                        <div className='description-header-form'>
                            Description:
                        </div>
                        <div className="description-form-block">
                            <div
                                id='description'
                                className="description-form-text"
                                contentEditable="true"
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        document.execCommand('insertLineBreak')
                                        event.preventDefault()
                                    }
                                }}
                            >
                                {this.state.description}
                            </div>
                        </div>
                        <button className={'save-button'}
                                onClick={() => this.UpdateProfile()}
                        >
                            Save
                        </button>
                    </div>
                </div>
                <div className="myprofile-userposts">
                    COMING SOON
                </div>
            </div>
        )
    }
}

export default withCookies(MyProfile);
