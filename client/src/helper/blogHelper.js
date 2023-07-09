import blogpost from "../data/blog/blog.json";
import blogcategory from '../data/category.json';

function setCategoriesCount() {
    for (let i = 0; i < blogcategory.length; i++) {
        var count = blogpost.filter(post => { return post.category.includes(parseInt(blogcategory[i].id)) });
        count = count.length;
        blogcategory[i].count = count;
    }
}
setCategoriesCount();
// Post details
function getBlog(id) {
    return blogpost.filter(blog => { return blog.id === parseInt(id) })[0];
}
// Related post
function getPostByCategory(items, pageRoute) {
    var elems = blogpost.filter((post) => { return parseInt(post.id) !== parseInt(pageRoute) && post.category.some(r => items.includes(r)) });
    return elems;
}

// Recent post
function changeToMonth(month) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}

function setDemoDate() {
    var today = new Date();
    blogpost.slice(0, 3).map(post => {
        post.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000);
        // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
        // in the blog.json object
        post.postdate = `${today.getDate() - 2} ${changeToMonth(today.getMonth())}, ${today.getFullYear()}`;
        return post;
    });
}

function getRecentPost() {
    var elems = blogpost.filter(post => {
        return post.timestamp < new Date(post.postdate);
    });
    return elems;
}

setDemoDate();
// Filter 
function getFilteredPosts(posts, filter = { cat: '', tag: '', author: '', searchQuery: '' }) {
    var catgoryFilter = filter.cat !== undefined && filter.cat !== null && filter.cat !== '';
    var tagFilter = filter.tag !== undefined && filter.tag !== null && filter.tag !== '';
    var authorFilter = filter.author !== undefined && filter.author !== null && filter.author !== '';
    var searchFilter = filter.searchQuery !== undefined && filter.searchQuery !== null && filter.searchQuery !== '';
    // Category filter
    if (catgoryFilter) {
        posts = posts.filter(post => {
            return (post.category !== undefined && post.category !== null) && post.category.includes(parseInt(filter.cat))
        })
    } 
    // Tag filter
    if (tagFilter) {
        posts = posts.filter(post => {
            return (post.tags !== undefined && post.tags !== null) && post.tags.includes(parseInt(filter.tag))
        })
    }
    // Author filter
    if (authorFilter) {
        posts = posts.filter(post => {
            return (post.author !== undefined && post.author !== null) && post.author.includes(parseInt(filter.author))
        })
    }
    if (searchFilter) {
        posts = posts.filter(post => {
            return (post.title !== undefined && post.title !== null) && post.title.toLowerCase().includes(filter.searchQuery.toLowerCase())
        })
    }
    return posts;
}
export { getBlog, getFilteredPosts, getRecentPost, getPostByCategory };