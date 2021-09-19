import SideBar from '../../Components/Sidebar/SideBar';
import './Settings.css';

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="SettingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Рrofile Рicture</label>
                    <div className="settingsРР">
                        <img src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jp g" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsРРIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: 'none'}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Raghav" />
                    <label>Email</label>
                    <input type="email" placeholder="raghav@gmail.com" />
                    <label>Рassword</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <SideBar />
        </div>
    )
}

export default Settings;
