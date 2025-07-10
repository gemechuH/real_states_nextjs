"use client";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";

const ShareButton = ({ property }) => {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";
  const shareUrl = `${siteUrl}/properties/${property._id}`;
  const name = ` ${property.name} - For Rent`;
  const hashtags = [property.type.replace(/\s/g, ""), "ForRent"];


  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">📤 Share this property:</h3>
      <div className="flex gap-4 items-center">
        <FacebookShareButton url={shareUrl} quote={name} hashtags={hashtags}>
          <div className="flex items-center gap-2 hover:scale-105 transition-transform">
            <FacebookIcon size={40} round />
          </div>
        </FacebookShareButton>

        <TwitterShareButton url={shareUrl} name={name} hashtags={hashtags}>
          <div className="flex items-center gap-2 hover:scale-105 transition-transform">
            <TwitterIcon size={40} round />
          </div>
        </TwitterShareButton>

        <WhatsappShareButton url={shareUrl} name={name} hashtags={hashtags}>
          <div className="flex items-center gap-2 hover:scale-105 transition-transform">
            <WhatsappIcon size={40} round />
          </div>
        </WhatsappShareButton>
        <EmailShareButton url={shareUrl} subject={name} body={`Check this out: ${shareUrl}` }>
          <EmailIcon size ={40} round/>
        </EmailShareButton>
      </div>
    </div>
  );
};

export default ShareButton;
