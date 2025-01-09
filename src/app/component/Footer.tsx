import Link from "next/link";
import { motion } from "framer-motion";

import "./Card.css" 
export default function Footer() {
  return (
    <footer className="sm:py-10">

      {/* Connect Section - Responsive */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center px-4 sm:px-8"
      >
        <div className="card w-full sm:w-[90%] md:w-[85%] lg:w-[80%] mt-5 sm:mt-10 mb-5 sm:mb-10 
                      rounded-lg bg-primary2/90 backdrop-blur-sm shadow-xl 
                      transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-center 
                        text-white p-4 sm:p-6 md:p-8 gap-4 sm:gap-8">
            <p className="text-lg sm:text-xl md:text-2xl font-light text-center sm:text-left flex-1">
              Let&apos;s Connect, Work Together or Share Your Suggestions
            </p>
            <Link href={"/Contact"}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-lg border 
                          px-4 sm:px-6 md:px-8 py-2 sm:py-3
                          hover:bg-white/10 transition-all duration-300 
                          w-full sm:w-auto"
              >
                <span className="relative z-10 text-white group-hover:text-white/90 
                               text-sm sm:text-base md:text-lg">Connect</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary2/50 to-blue-500/50 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Social Media Section - Responsive */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="social-buttons flex justify-center gap-4 sm:gap-6 mt-4 sm:mt-8"
      >
        {/* Social buttons remain the same but adjust their size */}
        <style jsx>{`
          .social-button {
            width: 35px;
            height: 35px;
          }
          @media (min-width: 640px) {
            .social-button {
              width: 40px;
              height: 40px;
            }
          }
        `}</style>
        <a
          href="https://github.com/Milan-Bhingradiya"
          target="_blank"
          className="social-button github"
        >
          <svg
            className="cf-icon-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2.5 0 19 19"
          >
            <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/milanbhingradiya"
          target="_blank"
          className="social-button linkedin"
        >
          <svg
            viewBox="0 -2 44 44"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g id="Icons" stroke="none" strokeWidth="1">
              <g transform="translate(-702.000000, -265.000000)">
                <path
                  d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                  id="LinkedIn"
                ></path>
              </g>
            </g>
          </svg>
        </a>

        <a
          href="https://www.instagram.com/milan__bhingradiya"
          target="_blank"
          className="social-button instagram"
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g id="Page-1" stroke="none" strokeWidth="1">
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-340.000000, -7439.000000)"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
                    id="instagram-[#167]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </a>
      </motion.div>

      {/* Copyright Section - Responsive */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center text-white/70 mt-4 sm:mt-8 text-xs sm:text-sm px-4"
      >
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}
