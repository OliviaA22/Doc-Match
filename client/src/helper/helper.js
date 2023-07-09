
import author from '../data/doctor/doctor.json';
import tags from '../data/tags.json';
import category from '../data/category.json';

// Name Initial
function getNameInitials(string) {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
}
// Author
function getAuthor(items) {
    var elems = author.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Tags
function getTags(items) {
    var elems = tags.filter(item => {
        return items.includes(item.id)
    });
    return elems;
}
// Categories
function getCategories(items) {
    var elems = category.filter(item => {
        return items.includes(item.id)
    });
    return elems;
}
function Rating(rating) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<i className="far fa-star" key={i} />);
    }
    if (rating && rating > 0) {
        for (let i = 0; i <= rating - 1; i++) {
            stars[i] = <i className="fas fa-star" key={i} />;
        }
    }
    return stars;
};
// Social Share
const pageUrl = window.location.href;
function socialShare(title) {
    var socialIcons = [
        {
            title: "facebook",
            iconClass: "fab fa-facebook-f",
            iconStyle: "fb",
            link: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(pageUrl) + ""
        },
        {
            title: "twitter",
            iconClass: "fab fa-twitter",
            iconStyle: "tw",
            link: "http://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&" + encodeURIComponent(pageUrl) + ""
        },
        {
            title: "linkedin",
            iconClass: "fab fa-linkedin-in",
            iconStyle: "ln",
            link: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(pageUrl) + "&title=" + encodeURIComponent(title) + ""
        },
        {
            title: "pinterest",
            iconClass: "fab fa-pinterest-p",
            iconStyle: "gg",
            link: "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(pageUrl) + ""
        }
    ];
    return socialIcons;
}
export { getAuthor, Rating, socialShare, getTags, getCategories, getNameInitials };