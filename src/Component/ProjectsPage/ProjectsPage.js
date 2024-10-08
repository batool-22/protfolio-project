import React from "react";
import "./projects.css";
import { motion } from "framer-motion";
import Khotta3 from "../../assets/images/Khotta3.JPG";
import Cooking3 from "../../assets/images/Cooking3.png";
import Consumer3 from "../../assets/images/Consumer3.png";
import TenderHand from "../../assets/images/TenderHand.jpg";
import Project2 from "../../assets/images/Project2.jpg";

const ProjectsPage = () => {
  return (
    <>
      <section class="blog section" id="projects">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="intro"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div class="container">
              <div class="row">
                <div class="section-t padd-15">
                  <h2>Projects</h2>
                </div>
              </div>
              <div class="row">
                <div class="blog-item padd-15">
                  <div class="blog-item-inner shadow-dark">
                    <div class="blog-img">
                      <img src={Consumer3} />
                      <div class="blog-data">1 Aug 2022</div>
                    </div>
                    <div class="blog-info">
                      <h4 class="blog-title">
                        Consumer Portal | Lendo Financing
                      </h4>
                      <p class="blog-descrip">Web Development</p>
                      <p class="blog-tags">
                        Tags : <a href="#">React JS </a>,
                        <a href=""> Bootstrap Css </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="blog-item padd-15">
                  <div class="blog-item-inner shadow-dark">
                    <div class="blog-img">
                      <img src={Khotta3} />
                      <div class="blog-data">8 Sep 2021</div>
                    </div>
                    <div class="blog-info">
                      <h4 class="blog-title">Khotta App | Axenda</h4>
                      <p class="blog-descrip">Web Designer</p>
                      <p class="blog-tags">
                        Tags : <a href="#">Figma </a>, <a href=""> Jira </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="blog-item padd-15">
                  <div class="blog-item-inner shadow-dark">
                    <div class="blog-img">
                      <img src={Project2} />
                      <div class="blog-data">4 Feb 2021</div>
                    </div>
                    <div class="blog-info">
                      <h4 class="blog-title">
                        Hybird Software Project Management
                      </h4>
                      <p class="blog-descrip">Web Development</p>
                      <p class="blog-tags">
                        Tags : <a href="#">Next JS </a>,
                        <a href=""> Tailwind Css </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="blog-item padd-15">
                  <div class="blog-item-inner shadow-dark">
                    <div class="blog-img">
                      <img src={TenderHand} />
                      <div class="blog-data">1 Nov 2020</div>
                    </div>
                    <div class="blog-info">
                      <h4 class="blog-title">Tender Hands App</h4>
                      <p class="blog-descrip">Web Development</p>
                      <p class="blog-tags">
                        Tags : <a href="#">Flutter</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="blog-item padd-15">
                  <div class="blog-item-inner shadow-dark">
                    <div class="blog-img">
                      <img src={Cooking3} />
                      <div class="blog-data">12 Aug 2020</div>
                    </div>
                    <div class="blog-info">
                      <h4 class="blog-title">Cooking Website</h4>
                      <p class="blog-descrip">Web Development</p>
                      <p class="blog-tags">
                        Tags : <a href="#">React JS </a>,
                        <a href=""> Tailwind Css </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default ProjectsPage;
