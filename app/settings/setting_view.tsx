import NavBarCommon from "../nav_bar_common";

export default function SettingView() {
    return (
        <div>

            <NavBarCommon />
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-700 to-blue-400">
                <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-10 max-w-lg w-full text-center">
                    <h1 className="text-4xl font-bold mb-4 text-green-700">Settings</h1>
                    <p className="text-lg text-gray-700">Manage your application settings here.</p>
                </div>
            </div>
        </div>
    );
}