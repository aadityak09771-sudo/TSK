import React from 'react';
import { ArrowRight, Play, Book, FlaskConical, Target, Send } from 'lucide-react';
import { Button } from '../../ui/Button';
import './YouTubeChannels.css';

interface ChannelData {
  name: string;
  description: string;
  subscribers: string;
  bannerText: string;
  icon: React.ReactNode;
}

const channelData: ChannelData[] = [
  {
    name: "SikshaKendra Maths",
    description: "Concepts, tricks, and practice for school and JEE.",
    subscribers: "1.2M subscribers",
    bannerText: "SIKSHAKENDRA MATHS",
    icon: <Book size={16} />
  },
  {
    name: "SikshaKendra Science",
    description: "Physics, Chemistry, and Biology made easy.",
    subscribers: "856K subscribers",
    bannerText: "SIKSHAKENDRA SCIENCE",
    icon: <FlaskConical size={16} />
  },
  {
    name: "SikshaKendra Exam Prep",
    description: "JEE, NEET, and Boards preparation tips.",
    subscribers: "732K subscribers",
    bannerText: "SIKSHAKENDRA EXAM PREP",
    icon: <Target size={16} />
  }
];

export const YouTubeChannels: React.FC = () => {
  return (
    <section className="youtube-channels-section">
      <div className="container">
        <div className="youtube-channels-header">
          <div className="header-left">
            <div className="youtube-title-icon">
              {/* <Youtube size={32} fill="#FF0000" color="#FF0000" strokeWidth={0} /> */}
            </div>
            <h2 className="youtube-channels-heading">Our Popular YouTube Channels</h2>
          </div>
          <a href="#" className="view-all-link">
            View All <ArrowRight size={18} />
          </a>
        </div>

        <div className="youtube-channels-grid">
          {channelData.map((channel, index) => (
            <div key={index} className="youtube-channel-card">
              <div className="channel-banner-wrapper">
                <div className="channel-banner">
                  <div className="banner-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                  </div>
                  <div className="banner-content">
                    <span className="banner-text">{channel.bannerText}</span>
                    <div className="banner-icons">
                      {channel.icon}
                      <Play size={16} fill="white" />
                      <Send size={16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="channel-details">
                <h3 className="channel-name">{channel.name}</h3>
                <p className="channel-description">{channel.description}</p>
                <p className="channel-subscribers">{channel.subscribers}</p>
                <Button variant="primary" className="subscribe-button">
                  {/* <Youtube size={18} fill="white" strokeWidth={0} /> */}
                  Subscribe
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
