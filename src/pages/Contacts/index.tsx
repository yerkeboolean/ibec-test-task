import React from "react";
import {YMaps, Map, Placemark} from "react-yandex-maps";

import "./contacts.scss";

const Contacts: React.FC = () => {
    const mapData = {
        center: [43.250977, 76.947301],
        zoom: 12,
        controls: ["zoomControl", "fullscreenControl"]
    };

    return (
        <div>
            <YMaps>
                <div>
                    <Map
                        defaultState={mapData}
                        modules={["control.ZoomControl", "control.FullscreenControl"]}
                        width="100%"
                        height="500px"
                    >
                        <Placemark
                            geometry={[43.264165, 76.92991]}
                            properties={{
                                balloonContent: "Mega Park Алматы",
                                hintContent: "Mega Park Алматы"
                            }}
                            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                        />
                        <Placemark
                            geometry={[43.230582, 76.945995]}
                            options={{preset: "islands#greenStarCircleIcon"}}
                        />
                    </Map>
                </div>
            </YMaps>
        </div>
    );
};
export default Contacts;
