import React, {FC} from 'react'

interface FeedProps {
    id: string;
    feed: {
        id: string,
        caption: string,
        media_type: any,
        media_url: any
    };
}

const Feed: FC<FeedProps> = (props:FeedProps) => {
    let post;

    switch (props.feed.media_type) {
        case "VIDEO":
            post = (
                <video
                    width='100%'
                    height='auto'
                    src={props.feed.media_url}
                    controls>
                </video>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <img
                    width='100%'
                    height='auto'
                    id={props.feed.id}
                    src={props.feed.media_url}
                    alt={props.feed.caption}
                />
            );
            break;
        default:
            post = (
                <img
                    width='100%'
                    height='auto'
                    id={props.feed.id}
                    src={props.feed.media_url}
                    alt={props.feed.caption}
                />
            );
    }

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    );
}

export default Feed;