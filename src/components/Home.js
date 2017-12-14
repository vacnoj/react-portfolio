import React, { Component } from 'react';
var pub = process.env.PUBLIC_URL;

class Home extends Component {
   render() {
      return (
        <div className="home">
         <div className="content">
	        <section>
		       <h2>Contact</h2>

            <form id="contactForm" method="GET" action="mailto:vacnoj93@yahoo.com" enctype="text/plain">
            Name <br />
              <input type="text" name="name" className="inputs" /><br />
            Email <br />
               <input type="text" name="email" className="inputs" /><br />
            Comments <br />
               <textarea name="comment"></textarea><br />

               <input type="submit" name="submit" id="submit" />
            </form>

			
	</section>

	<aside>
		<h3>Connect with Me</h3>

		<ul>
			<li><a href="https://github.com/vacnoj"><img alt="alt" className="connectImages" src="../images/github.png" /></a></li>
			<li><a href="https://linkedin.com"><img alt="alt" className="connectImages" src="../images/linkedin.png" /></a></li>
			<li><a href="https://stackoverflow.com"><img alt="alt" className="connectImages" src="../images/stackoverflow.png" /></a></li>
		</ul>

		
	</aside>

	</div>

	<footer>
		©Copyright Jon Caviness 2017
	</footer>
 </div>
      );
   }
}

export default Home;