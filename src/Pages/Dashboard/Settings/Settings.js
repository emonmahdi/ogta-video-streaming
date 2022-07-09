import React from "react";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as MIcons from "react-icons/md";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";


import Sidebar from "../../../components/Sidebar/Sidebar";
import AvatarAndCover from "../SubSetting/AvatarAndCover/AvatarAndCover";
import BalanceSetting from "../SubSetting/BalanceSetting/BalanceSetting";
import GeneralSetting from "../SubSetting/GeneralSetting/GeneralSetting";
import MonetizationSettings from "../SubSetting/MonetizationSettings/MonetizationSettings";
import PasswordSetting from "../SubSetting/PasswordSetting/PasswordSetting";
import Points from "../SubSetting/Points/Points";
import ProfileSetting from "../SubSetting/ProfileSetting/ProfileSetting";
import Verification from "../SubSetting/Verficatoin/Verification";
import "./Settings.css";


const Settings = () => {
  return (
    <div className="settingsDiv">
        <Sidebar /> 
      <div className="settingContent">
        <Tabs>
          <TabList>
            <Tab>
              <p className="tab-item"><MIcons.MdSettings /> General</p>
            </Tab>
            <Tab>
              <p className="tab-item"><FaIcons.FaUserCircle /> Profile</p>
            </Tab>
            <Tab>
              <p className="tab-item"><FaIcons.FaCommentDollar /> Monetization</p>
            </Tab>
            <Tab>
              <p className="tab-item"><MIcons.MdLock /> Password</p>
            </Tab>
            <Tab>
              <p className="tab-item"><MIcons.MdOutlineAccountBalanceWallet /> Balance</p>
            </Tab>
            <Tab>
              <p className="tab-item"><BsIcons.BsFillImageFill /> Avatar &amp; Cover</p>
            </Tab>
            <Tab>
              <p className="tab-item"><BsIcons.BsFillCheckCircleFill /> Verification </p>
            </Tab>
            <Tab>
              <p className="tab-item"><BsIcons.BsStarHalf /> Points </p>
            </Tab>
            <Tab>
              <p className="tab-item"><BsIcons.BsFillCheckCircleFill /> Two factor Authentication</p>
            </Tab>
            <Tab>
              <p className="tab-item"><BsIcons.BsFileEarmarkText /> My Information</p>
            </Tab>
             
          </TabList>

          <TabPanel>
            <div className="panel-content pt-3">
              <h2 className="panel-title">General Setting</h2>
              <GeneralSetting />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content pt-3">
              <h2 className="panel-title">Profile Setting</h2>
              <ProfileSetting />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content pt-3">
              <h2 className="panel-title">Monetization Settings</h2>
              <MonetizationSettings />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content pt-3">
              <h2 className="panel-title">Password Settings</h2>
              <PasswordSetting />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content pt-3">
              <h2 className="panel-title">Balance Settings</h2>
              <BalanceSetting />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content pt-3">
              <h2 className="panel-title">Avatar &amp; Cover Settings</h2>
              <AvatarAndCover />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content pt-3">
              <h2 className="panel-title">Verification Settings</h2>
              <Verification />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content pt-3">
              <h2 className="panel-title">Points</h2>
              <Points />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content pt-3">
              <h2 className="panel-title">Two-factor authentication Settings</h2>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content pt-3">
              <h2 className="panel-title">My Information Settings</h2>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
