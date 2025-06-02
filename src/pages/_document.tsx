import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/web-app-manifest-192x192.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/web-app-manifest-512x512.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;