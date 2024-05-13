import React from "react";

const Footer = () => {
  return (
    <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About</h6>
          <p class="text-justify">
            Srila Prabhupada came to New York in 1965 and in twelve short
            years made the chanting of ‘Hare Krishna’ known throughout the
            world. He started a spiritual revolution wherein devotion,
            simplicity and compassion became the direction for living.
            Coming from a lineage of self-realized teachers, Srila
            Prabhupada gave a fearless exposition of devotional wisdom
            which had been kept locked within India for centuries.
          </p>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Categories</h6>
          <ul class="footer-links">
            <li>
              <a href="#/about">About Us</a>
            </li>
          </ul>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul class="footer-links">
            <li>
              <a href="#/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">
            Copyright &copy; 2017 All Rights Reserved by
            <a href="#">Scanfcode</a>.
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li>
              <a class="facebook" href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a class="twitter" href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a class="dribbble" href="#">
                <i class="fa fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a class="linkedin" href="#">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
 