import React from 'react';

export default function Navbar() {
	return (
		<div>
			<section id="nav-bar">
				<nav className="navbar navbar-expand-lg navbar-light ">
					<div className="container-fluid">
						<h4 className="navbar-brand" href="#">
							<font color="#FFFFFF">WORKPOINTNEWS</font>
						</h4>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul
								className="navbar-nav mx-auto mb-2 mb-lg-0 "
								style={{ padding: '0 5px 0 300px' }}
							>
								<li className="nav-item">
									<a
										className="nav-link active"
										aria-current="page"
										href="#sec1"
									>
										<font color="#FFFFFF">Home</font>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#sec2">
										<font color="#FFFFFF">เเผนที่ทั่วโลก</font>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#sec3">
										<font color="#FFFFFF">Timeline</font>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#sec4">
										<font color="#FFFFFF">Table</font>
									</a>
								</li>
							</ul>
							<ul
								className="navbar-nav  mb-2 mb-lg-0 "
								style={{ padding: '0 5px 0 300px' }}
							>
								<li className="nav-item ">
									<a className="nav-link" href="#">
										<font color="#FFFFFF">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												color="#ea5771"
												width={16}
												height={16}
												fill="currentColor"
												className="bi bi-circle-fill"
												viewBox="0 0 16 16"
											>
												<circle cx={8} cy={8} r={8} />
											</svg>
											&nbsp;&nbsp;อัปเดตล่าสุด 22/5/2021 11.00
										</font>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</section>
		</div>
	);
}
