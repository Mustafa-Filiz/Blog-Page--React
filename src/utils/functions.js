import { useEffect, useState } from "react";
import firebase from "./firebase";

export const addBlog = (blog) => {
    const blogRef = firebase.database().ref("blogInfo");
    blogRef.push(blog)
}

export const useFetch = () => {
    const [blogList, setBlogList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const blogRef = firebase.database().ref("blogInfo");
        blogRef.on("value", (snapshot) => {
            const blogs = snapshot.val();
            const blogArray = [];
            for (let id in blogs) {
                blogArray.push({id, ...blogs[id]})
            }
            setBlogList(blogArray)
            setIsLoading(false)
        });
    }, []);
    return {blogList, isLoading}
}