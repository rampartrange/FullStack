import React from 'react';
import './Home.css';
import NavBar from "../../components/NavBar/NavBar";
import description_delimeter from "../../images/desctiption_delimeter.png";
import feed_delimeter from "../../images/feed_delimeter.png"

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            texts: [
                {
                    text: "ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ATBOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS ABOBUS",
                },
                {
                    text: "I like Barak Obama I like Barak Obama I like Barak Obama I like Barak Obama I like Barak Obama I like Barak Obama I like Barak Obama I like Barak Obama I like Barak Obama I like Barak Obama I like Barak Obama I like Barak Obama I like Barak Obama I like Barak Obama I like Barak Obama I like Barak Obama I like Barak Obama I like Barak Obama",
                },
                {
                    text: "Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo!"
                },
            ],
            title: "Virtual closet",
            feed_header: "Most popular community posts",
            feed_data: [
                {
                    header: "PoggersPoggersPoggersPoggers",
                    text: " Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo!"
                },
                {
                    header: "Poggers",
                    text: " Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo!"
                },
                {
                    header: "Poggers",
                    text: " Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo! Okaay, let's goo!"
                }
            ]
        };
    }

    render() {
        const title = this.state.title.slice();
        const texts = this.state.texts.slice();
        const feed_header = this.state.feed_header.slice()
        const feed_data = this.state.feed_data.slice()
        return (
            <div className="home">
                <NavBar/>
                <DescriptionBlock
                    title={title}
                    texts={texts}
                />
                <Feed
                    feed_header={feed_header}
                    feed_data={feed_data}
                />
            </div>
        )
    }
}


function DescriptionBlock(props) {
    return (
        <div className="description-block">
            <div className="description-header">
                {props.title}
            </div>
            <div className="description">
                <TextBlock text={props.texts[0].text}/>
                <Delimeter className="description-delimeter"
                           delimeter={description_delimeter}/>

                <TextBlock text={props.texts[1].text}/>
                <Delimeter className="description-delimeter"
                           delimeter={description_delimeter}/>

                <TextBlock text={props.texts[2].text}/>
            </div>

        </div>
    );
}

function TextBlock(props) {
    return (
        <div className="description-text-block">
            {props.text}
        </div>
    );
}

function Delimeter(props) {
    return (
        <img className={props.className}
             src={props.delimeter}
        >
        </img>
    );
}

function Feed(props) {
    return (
        <div className="feed">
            <div className="feed-header">
                {props.feed_header}
            </div>
            <div className="feed-block">
                <FeedPost feed_data={props.feed_data[0]}/>

                <Delimeter className="feed-delimeter"
                           delimeter={feed_delimeter}/>
                <FeedPost feed_data={props.feed_data[1]}/>

                <Delimeter className="feed-delimeter"
                           delimeter={feed_delimeter}/>

                <FeedPost feed_data={props.feed_data[2]}/>
            </div>
        </div>
    );
}

function FeedPost(props) {
    return (
        <div className="feed-post">
            <div className="feed-post-header">
                {props.feed_data.header}
            </div>
            <div className="feed-post-text">
                {props.feed_data.text}
            </div>
        </div>
    )
}