export default function Home({ ip }) {
    return (
        <>
            <h1>{ip}</h1>
        </>
    );
}

Home.getInitialProps = async ({ req }) => {
    const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
    return { ip };
};
