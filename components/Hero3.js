import React from 'react';

export default function Hero3() {
	return (
		<div>
			<div>
				<a name="sec3" />
				<center>
					<select
						className="form-select-indicator"
						style={{ width: 90, height: 30 }}
						aria-label="Default select example"
					>
						<option selected>ประเทศไทย</option>
						<option value={1}>: พม่า</option>
						<option value={2}>: อังกฤษ</option>
						<option value={3}>: เกาหลี</option>
						<option value={4}>: จีน</option>
						<option value={5}>: ญี่ปุ่น</option>
						<option value={6}>: สเปน</option>
					</select>
					&nbsp;&nbsp;&nbsp;
					<select
						className="form-select-indicator"
						style={{ width: 90, height: 30 }}
						aria-label="Default select example"
					>
						<option selected>พารามิเตอร์</option>
						<option value={1}>: อุณหภูมิ(C)</option>
						<option value={2}>: ความชื้นในอากาศ(%)</option>
						<option value={3}>: ความชื้นในดิน(%)</option>
						<option value={4}>: เเสง(lux)</option>
						<option value={5}>: คุณภาพน้ำ(%)</option>
						<option value={6}>: ระดับน้ำ(%)</option>
					</select>
					&nbsp;&nbsp;&nbsp;
					<select
						className="form-select-indicator"
						style={{ width: 90, height: 30 }}
						aria-label="Default select example"
					>
						<option selected>ทุกช่วงเวลา</option>
						<option value={1}>: 1 วันล่าสุด</option>
						<option value={2}>: 1 สัปดาห์ล่าสุด</option>
						<option value={3}>: 1 เดือนล่าสุด</option>
						<option value={4}>: 1 ไตรมาสล่าสุด</option>
						<option value={5}>: 1 ปีล่าสุด</option>
					</select>
				</center>
				<center>
					<div id="curve_chart" style={{ width: '100%', height: 600 }} />
				</center>
				&nbsp;&nbsp;&nbsp;
			</div>
		</div>
	);
}
