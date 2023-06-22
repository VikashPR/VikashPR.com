import * as React from "react"
import "../styles/global.scss";
import Layout from "../components/Layout";

// Import sections
import Hero from "../components/Hero";
const IndexPage = () => {
    return (
        <Layout>
            <Hero />
        </Layout>
    );
}

export default IndexPage;