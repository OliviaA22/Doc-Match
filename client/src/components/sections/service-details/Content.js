import React from 'react';
import { Link } from 'react-router-dom';
import { getService } from '../../../helper/serviceHelper';
import { socialShare } from '../../../helper/helper';
import Popuphelper from '../../../helper/Popuphelper';
import Sidebar from '../../layouts/Servicesidebar';

class Content extends Popuphelper {
    constructor(props) {
        super(props);
        this.openSocialPopup = this.openSocialPopup.bind(this);
    }
    // Open window
    openSocialPopup(social) {
        window.open(social.link, "MsgWindow", "width=600,height=600")
        // alert(social.title)
    }
    render() {
        const detailId = this.props.detailId;
        const item = getService(detailId);
        return (
            <div className="sidebar-style-9 service-details">
                <div className="section sigma_post-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="sigma_post-details-inner mb-md-80">
                                    <div className="entry-content">
                                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} className="w-100" />
                                        <div className="row">
                                            {/* Data */}
                                            {item.gallery.map((image, i) => (
                                                <div className="col-md-4" key={i}>
                                                    <a rel={"external"} href={image} className="gallery-thumb">
                                                        <img src={process.env.PUBLIC_URL + "/" + image} alt={item.title} />
                                                    </a>
                                                </div>
                                            ))}
                                            {/* Data */}
                                        </div>
                                        <h2 className="entry-title">{item.title}</h2>
                                        <div dangerouslySetInnerHTML={{ __html: item.htmltext }} />
                                    </div>
                                    {/* Post Meta Start */}
                                    <div className="sigma_post-details-meta">
                                        <div className="sigma_post-details-meta-item sigma_post-share">
                                            <h5>Share</h5>
                                            <ul className="sigma_sm">
                                                {/* Data */}
                                                {socialShare(item.title).map((social, i) => (
                                                    <li key={i}>
                                                        <Link to="#" onClick={(e) => this.openSocialPopup(social, i)}>
                                                            <i className={social.iconClass} />
                                                        </Link>
                                                    </li>
                                                ))}
                                                {/* Data */}
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Post Meta End */}
                                </div>
                            </div>
                            {/* Sidebar Start */}
                            <div className="col-lg-4">
                                <Sidebar />
                            </div>
                            {/* Sidebar End */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;