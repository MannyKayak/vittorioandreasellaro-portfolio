// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     remotePatterns: [
//       new URL("https://www.bimportale.com/wp-content/uploads/2024/12/0.jpg"),
//       new URL(
//         "https://www.bimportale.com/wp-content/uploads/2024/11/cover.jpg"
//       ),
//       new URL(
//         "https://www.ingenio-web.it/upload/image/a/4/6/472e9caa46f46a4d80bd1c606b628636956c8371.jpg"
//       ),
//       new URL(
//         "https://www.unina.it/documents/11897/0/BIM+e+Intelligenza+Artificiale/3528a12e-b907-4d34-ad36-827c1732b725?t=1731056058107"
//       ),
//       new URL(
//         "https://ediltecnico.it/wp-content/uploads/2024/11/DEFINITIVA_23.11.2024-FEDERICO-II-e1731420474602.jpg"
//       ),
//       new URL("https://www.infobuild.it/wp-content/uploads/bimknow.png"),
//       new URL(
//         "https://www.bimportale.com/wp-content/uploads/2025/03/IMG-20250310-WA0007.jpg"
//       ),
//       new URL(
//         "https://www.unipv.news/sites/magazine/files/styles/max_2600x2600/public/2024-12/Ingegneria%20Ingresso%20Nave%20Estate.jpg?itok=v_BnOlwB"
//       ),
//       new URL(
//         "https://media.licdn.com/dms/image/D4D22AQH5LeMdd4NFXA/feedshare-shrink_2048_1536/0/1716214405467?e=2147483647&t=ewEW-Veu3f6ImdQxX0T29k1wcmz1eWYJJTkVNuoymUY&v=beta"
//       ),
//       new URL(
//         "https://www.unipv.news/sites/magazine/files/styles/max_2600x2600/public/2024-12/Facciata%20Aula%20400%20e%20Disegno%20con%20Duomo%20e%20Museo%20Archeologia.jpg?itok=CipRn4Y5"
//       ),
//       new URL(
//         "https://news.unipv.it/wp-content/uploads/2023/03/Copertina-news-BIM.jpg"
//       ),
//       new URL(
//         "https://www.unipv.news/sites/magazine/files/2025-03/2025_04_09_BIM%20KNOW_Locandina.pdf"
//       ),
//       new URL(
//         "https://www.bimportale.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-17-at-18.39.34-4.jpg"
//       ),
//       new URL(
//         "https://skeinbim.com/wp-content/uploads/2025/03/9aprile-1536x638.jpg"
//       ),
//       new URL(
//         "https://skeinbim.com/wp-content/uploads/2025/04/Bim-Know-torna-a-Napoli-1536x637.jpg"
//       ),
//       new URL(
//         "https://skeinbim.com/wp-content/uploads/2025/03/28marzo-1536x638.jpg"
//       ),
//       new URL(
//         "https://www.bimportale.com/wp-content/uploads/2024/04/LOCANDINA-BIM-Know-.jpg"
//       ),
//       new URL(
//         "https://www.stefanoboeriarchitetti.net/wp-content/uploads/2024/04/bim-scaled.jpg"
//       ),
//       new URL(
//         "https://mvrdv.com/media/uploads/MVRDV%20Matrix%20One%201%20%C2%A9%20Daria%20Scagliola(4).jpg?width=1920"
//       ),
//       new URL(
//         "https://skeinbim.com/wp-content/uploads/2024/05/BIM-nellistruzione-1536x1152.jpg"
//       ),
//       new URL(
//         "https://skeinbim.com/wp-content/uploads/2024/11/BIM-e-intelligenza-artificiale-Napoli-1536x738.jpg"
//       ),
//       new URL(
//         "https://www.bimportale.com/wp-content/uploads/2023/07/vittorio-andrea-sellaroBN.jpeg"
//       ),
//       new URL(
//         "https://2025.festivalsvilupposostenibile.it/plugins/slir/w740-/public/asvisfestival25/images/cal/211/immagine_9_maggio_2025-04-24_18-23-42.png"
//       ),
//       new URL(
//         "https://2025.festivalsvilupposostenibile.it/plugins/slir/w740-/public/asvisfestival25/images/cal/1004/immagine_2025-04-23_18-19-54.png"
//       ),
//       new URL(
//         "https://www.unipv.news/sites/magazine/files/styles/max_2600x2600/public/2024-12/Ingegneria%20Ingresso%20Nave%20Estate.jpg?itok=v_BnOlwB"
//       ),
//       new URL(
//         "https://ediltecnico.it/wp-content/uploads/2025/03/LOCANDINA-SINGOLO-EVENTO_CONFERENZA-1-e1742901492630.jpg"
//       ),
//     ],
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.bimportale.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.ingenio-web.it",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.unina.it",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ediltecnico.it",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.infobuild.it",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.unipv.news",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "news.unipv.it",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "skeinbim.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.stefanoboeriarchitetti.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mvrdv.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "2025.festivalsvilupposostenibile.it",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
