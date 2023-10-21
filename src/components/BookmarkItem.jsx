import React from "react";
import {avatarUrl} from "../services/api/bookmarks.js";
import PropTypes from "prop-types";

export default function BookmarkItem({data})
{
    const {owner, name, url} = data;

    return (
        <div>
            <div>
                <a href={url}>{name}</a>
            </div>
            <img src={avatarUrl(owner.id)} alt="User Avatar"/>
        </div>
    );
}

BookmarkItem.proType = {
    name: PropTypes.string,
    url: PropTypes.string,
    owner: PropTypes.number
}