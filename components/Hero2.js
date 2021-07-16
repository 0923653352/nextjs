import React, { Component } from "react";
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  Polygon,
} from "google-maps-react";

class Hero2 extends Component {
  render() {
    const triangleCoords = [
      { lat: 13.75827, lng: 100.62234 },
      { lat: 13.74605, lng: 100.6127 },
      { lat: 13.74318, lng: 100.63121 },
      { lat: 13.75827, lng: 100.62234 },
    ];
	[
		{ lat: 13.74669, lng: 100.62075 },
		{ lat: 13.74640, lng: 100.62066 },
		{ lat: 13.74642, lng: 100.62086 },
		{ lat: 13.74669, lng: 100.62075 },
	  ];
    return (
      <div className="container-fluid p-5">
        <a name="sec2" />
        <br />
        <div>
          <div className="row">
            <div className="col">
              <h4>สถานที่พารามิเตอร์ในประเทศไทย</h4>
              <h5>
                <font color="#DCDCDC">เเยกตามจังหวัด</font>
              </h5>
              <p>
                <font color="#DCDCDC">อัปเดตล่าสุด 27/05/2021</font>
              </p>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">ที่ตั้ง</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ ในพระบรมราชูปถัมภ์ ถ.
                      พหลโยธิน ตำบล คลองหนึ่ง อำเภอคลองหลวง ปทุมธานี 13180
                    </td>
                  </tr>
                  <tr>
                    <td>
                      สถานีตำรวจทางหลวง1 กองกำกับการ1 กองบังคับการตำรวจทางหลวง
                      ตำบล เชียงรากน้อย อำเภอบางปะอิน จังหวัดพระนครศรีอยุธยา
                      12120
                    </td>
                  </tr>
                  <tr>
                    <td>
                      สนามหลวง ถนน ราชดำเนินกลาง แขวงพระบรมมหาราชวัง เขตพระนคร
                      กรุงเทพมหานคร 10200
                    </td>
                  </tr>
                  <tr>
                    <td>
                      วัดตะโก หลวงพ่อรวย 31หมู่2 ดอนหญ้านาง อำเภอ ภาชี
                      จังหวัดพระนครศรีอยุธยา 13140
                    </td>
                  </tr>
                  <tr>
                    <td>
                      วัดพระธาตุดอยสุเทพราชวรวิหาร 9 หมู่ที่ 9
                      อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200
                    </td>
                  </tr>
                  <tr>
                    <td>
                      ดอยอินทนนท์ ตำบล บ้านหลวง อำเภอจอมทอง เชียงใหม่ 50270
                    </td>
                  </tr>
                  <tr>
                    <td>ดอยเสมอดาว ตำบล ศรีษะเกษ อำเภอนาน้อย น่าน 55150 </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div 
              style={{ width: "100%", height: "250px", position: "relative" }}
            >
              <Map
                google={this.props.google}
                zoom={14}
                initialCenter={{ lat: 13.75284, lng: 100.61871 }}
              >
                <Polygon
                  paths={triangleCoords}
                  strokeColor="#0000FF"
                  strokeOpacity={0.8}
                  strokeWeight={2}
                  fillColor="#0000FF"
                  fillOpacity={0.35}
                />
                <Marker
                  onClick={this.onMarkerClick}
                  name={"Current location"}
                  position={{ lat: 13.75284, lng: 100.61871 }}
                />
                <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
              </Map>
            </div>
          </div>
        </div>
      </div>
	  
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyA-NoP20OejFNd_gxMizvmRCDHwRPg0gJI&callback",
})(Hero2);
