import React, { Component } from 'react'
import Footer from './Footer'
class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-3">
          <div className="col-sm-12 mx-auto">
            <h1 className="text-center blood-head">Why Give Blood</h1>
			<div className="row">
				<div className="col-sm-5 mx-auto mt-3">

				<img src={require('./save_life.jpg')} alt="Logo" width="400" height="250" />
				</div>
				<div className="col-sm-7 mx-auto mt-3">
				<h3>
					You don't need a special reason to give blood. You just need your own reason.
				</h3>
					<ul>
					<li>Some of us give blood because we were asked by a friend. </li>
					<li>Some know that a family member or a friend might need blood some day. </li>
					<li>Some believe it is the right thing to do. </li>
					<li>Some do it for the free cookies and juice. </li>
					</ul>
					<p><b> Everyone enjoys the great feeling of helping save lives!</b></p>
				</div>
			</div>
          </div>
		  <div className="col-sm-12 mx-auto mt-5">
            <h1 className="text-center blood-head">Can I Give Blood</h1>
			<div className="row">
				<div className="col-sm-5 mx-auto mt-3">

				<img src={require('./give-blood.jpeg')} alt="Logo" width="400" height="350" />
				</div>
				<div className="col-sm-7 mx-auto mt-5">
				<h3>
					General Guidelines for Blood Donation
				</h3>
					<ul>
					<li>Be in good general health and feeling well. </li>
					<li>Be at least 17 years old in most states (16 years old with parental consent in some states). </li>
					<li>Weigh at least 110 pounds. Additional weight requirements apply for donors 18 years old and younger and all high school donors. </li>
					<li>Have not donated blood in the last 3 months.</li>
					</ul>
				</div>
			</div>
          </div>
		  <div className="col-sm-12 mx-auto mt-5">
            <h1 className="text-center blood-head">Learn About Donation</h1>
			<div className="row">
				<div className="col-sm-7 mx-auto ">
				<div className="mt-5">
					<img src={require('./blood-doner.png')} alt="Logo" width="550" height="350" />
				</div>
				<h4>
				After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.
				</h4>
				<center><button className="blood-doner" > Donate </button></center>
				</div>
				<div className="col-sm-5 mx-auto mt-5">
				<div className="blood-doner">
				<h3 className="blood-doner">
					Compatible Blood Type Donors
				</h3>
				</div>
					<table class="table">
						<thead class="thead-light">
							<tr>
							<th scope="col">Blood Type</th>
							<th scope="col">Donate Blood To</th>
							<th scope="col">Receive Blood From</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							<th className="blood-head" scope="row">A+</th>
							<td>A+ AB+</td>
							<td>A+ A- O+ O-</td>
							</tr>
							<tr>
							<th className="blood-head" scope="row">O+</th>
							<td>O+ A+ B+ AB+</td>
							<td>O+ O-</td>
							</tr>
							<tr>
							<th className="blood-head" scope="row">B+</th>
							<td>B+ AB+</td>
							<td>B+ B- O+ O-</td>
							</tr>
							<tr>
							<th className="blood-head" scope="row">AB+</th>
							<td>AB+</td>
							<td>Everyone</td>
							</tr>
							<tr>
							<th className="blood-head" scope="row">A-</th>
							<td>A+ A- AB+ AB-</td>
							<td>A- O-</td>
							</tr>
							<tr>
							<th className="blood-head" scope="row">O-</th>
							<td>Everyone</td>
							<td>O-</td>
							</tr>
							<tr>
							<th className="blood-head" scope="row">B-</th>
							<td>B+ B- AB+ AB-</td>
							<td>B- O-</td>
							</tr>
							<tr>
							<th className="blood-head" scope="row">AB-</th>
							<td>AB+ AB-</td>
							<td>AB- A- B- O-</td>
							</tr>
						</tbody>
					</table>

				</div>
			</div>
          </div>
        </div>
		<Footer />
      </div>
    )
  }
}

export default Landing
