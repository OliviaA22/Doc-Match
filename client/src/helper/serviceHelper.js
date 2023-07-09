import service from '../data/service/service.json';
import blogcategory from '../data/category.json';

function setCategoriesCount() {
    for (let i = 0; i < blogcategory.length; i++) {
        var count = service.filter(post => { return post.category.includes(parseInt(blogcategory[i].id)) });
        count = count.length;
        blogcategory[i].count = count;
    }
}
setCategoriesCount();
// Recent Service
function changeToMonth(month) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}
function setDemoDate() {
    var today = new Date();
    service.slice(0, 3).map(post => {
        post.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000);
        // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
        // in the blog.json object
        post.postdate = `${changeToMonth(today.getMonth())} ${today.getDate() - 2}, ${today.getFullYear()}`;
        return post;
    });
}
function getRecentService() {
    var elems = service.filter(post => {
        return post.timestamp < new Date(post.postdate);
    });
    return elems;
}
setDemoDate();
// Service details
function getService(id) {
    return service.filter(post => { return post.id === parseInt(id) })[0];
}
// Filter 
function getFilteredPosts(posts, filter = { cat: '' }) {
    var catgoryFilter = filter.cat !== undefined && filter.cat !== null && filter.cat !== '';
    // Category filter
    if (catgoryFilter) {
        posts = posts.filter(post => {
            return (post.category !== undefined && post.category !== null) && post.category.includes(parseInt(filter.cat))
        })
    } 
    return posts;
}
export { getService, getFilteredPosts, getRecentService };