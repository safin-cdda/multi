export default function Home({ ip }) {
    return (
        <>
            <h1>{ip}</h1>
        </>
    );
}

export const getServerSideProps = ({ req }) => {
    console.log(req.headers);
    const forwarded = req.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    return {
        props: {
            ip,
        },
    };
};
