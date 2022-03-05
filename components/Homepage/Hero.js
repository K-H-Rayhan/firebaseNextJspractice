import React from "react";
import styles from "../../styles/Hero.module.css";
import { useRouter } from "next/router";
function Hero() {
  const router = useRouter();
  return (
    <div>
      {/* <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          userSelect: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            placeItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className={styles.heroText}
            style={{
              zIndex: 5,
              objectFit: "cover",

              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              letterSpacing: "0.2rem",
            }}
          >
            Welcome To Valorant Store
          </div>

          <div
            className={styles.heroText3}
            style={{
              zIndex: 5,
              objectFit: "cover",
              fontWeight: "semibold",
              border: "1px solid white",
              borderRadius: "25px",
              padding: "5px 20px",
              cursor: "pointer",
            }}
            onClick={() => router.push("/products")}
          >
            Products
          </div>
        </div>
        <img
          src={`./2109.w026.n002.823B.p1.823 [Converted].png`}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <img
          className={styles.hero}
          src={`./Brimstone_artwork.png`}
          style={{
            position: "absolute",
            right: "0",
            bottom: "0",
          }}
        />
        <img
          src={`./2109.w026.n002.823B.p1.8243 [Converted].png`}
          style={{ width: "100%", height: "100%" }}
        />
      </div> */}
    </div>
  );
}

export default Hero;
