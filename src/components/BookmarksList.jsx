import React, {useCallback, useEffect, useState} from "react";
import fetchAllBookmarks from "../services/api/bookmarks.js";
import BookmarkItem from "./BookmarkItem.jsx";
import Pagination from "./Pagination.jsx";
import paginationFromHydraView from "../services/transformers/paginationFromHydraView.js";
import Loading from "./Loading.jsx";

export default function BookmarksList()
{
    const [bookmarksData, setBookmarksData] = useState([]);
    const [bookmarksList, setBookmarksList] = useState(null);
    const [pagination, setPagination] = useState({})

    const pageChange = useCallback(
         (page = "1") => {
                fetchAllBookmarks(new URLSearchParams({page:page})).then((data) => {
                    setBookmarksData(data['hydra:member']);
                    setPagination(paginationFromHydraView(data['hydra:view']))
            }, []);
        }
    )

    useEffect(() =>{
        pageChange();
    }, []);

    useEffect(() => {
        setBookmarksList(bookmarksData.map((bookmark) => (
            <BookmarkItem data={bookmark} key={bookmark.id}/>
        )));
    }, [bookmarksData]);

    return <>
        <div>{bookmarksList}</div>
        {bookmarksList == null ? (<Loading/>) : null}
        <Pagination pagination={pagination} onPageChange={pageChange} />
    </>;
}