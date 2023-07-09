import doctor from '../data/doctor/doctor.json';

// Doctor details
function getDoctor(id) {
    return doctor.filter(post => { return post.id === parseInt(id) })[0];
}
// Filter 
function getFilteredPosts(posts, filter = { cat: '' }) {
    var catgoryFilter = filter.cat !== undefined && filter.cat !== null && filter.cat !== '';    // Category filter
    if (catgoryFilter) {
        posts = posts.filter(post => {
            return (post.category !== undefined && post.category !== null) && post.category.includes(parseInt(filter.cat))
        })
    }
    return posts;
}
export { getDoctor, getFilteredPosts };