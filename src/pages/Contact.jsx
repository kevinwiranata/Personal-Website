import React from "react";
import SocialFollow from "../components/SocialFollow";

export class Contact extends React.Component {
	render() {
		return (
			<div className="contact-section" id="contact">
				<div className="portfolio-banner">
					<blockquote>
						<h1>Contact</h1>
					</blockquote>
					<div className="description">
						<span>
							Funfact: The background images depict the serene island of
							Pototano, located near Lombok, Indonesia. Getting there involved
							taking a 50-year old ferry ⛴️ followed by a short Helicopter ride
							🚁
						</span>
					</div>
				</div>
				<body class="is-preload">
					<div id="wrapper">
						<div id="main">
							<article>
								<h2 class="major">Contact</h2>
								<form name="contacts" method="post" data-netlify="true">
									<input type="hidden" name="form-name" value="contact" />
									<div class="fields">
										<div class="field half">
											<label for="name">Name</label>
											<input type="text" name="name" id="name" />
										</div>
										<div class="field half">
											<label for="email">Email</label>
											<input type="email" name="email" id="email" />
										</div>
										<div class="field">
											<label for="message">Message</label>
											<textarea name="message" id="message" rows="4"></textarea>
										</div>
										<div class="field">
											<div data-netlify-recaptcha="true"></div>
										</div>
									</div>
									<ul class="actions">
										<li>
											<input
												type="submit"
												value="Send Message"
												class="primary"
											/>
										</li>
										<li>
											<input type="reset" value="Reset" />
										</li>
									</ul>
								</form>
								<div className="social">
									<SocialFollow />
								</div>
								<br />
								<h4 className="email">Email: kevin.a.wiranata@gmail.com</h4>
							</article>
						</div>
					</div>
				</body>
			</div>
		);
	}
}

export default Contact;
