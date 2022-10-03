import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonLoader = () => {
  return (
    <SkeletonTheme highlightColor="white">
      {/* <p> */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          overflow: "hidden",
          height: "100vh",
          padding: "1rem",
        }}
      >
        <div>
          <Skeleton
            height={23}
            style={{
              border: "1px solid #ccc",
              display: "block",
              lineHeight: 2,
              borderRadius: "50%",
              padding: "1rem",
              marginBottom: "0.5rem",
              width: 100,
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1rem",
          }}
        >
          {new Array(6).fill("").map((skeleton, i) => (
            <Skeleton
              key={i}
              height="80%"
              width={"80%"}
              style={{
                border: "1px solid #ccc",
                display: "block",
                lineHeight: 2,
                padding: "1rem",
                marginBottom: "0.5rem",
                width: "100%",
              }}
              //   count={7}
            />
          ))}
        </div>
      </div>
      {/* </p> */}
    </SkeletonTheme>
  );
};
export default SkeletonLoader;
