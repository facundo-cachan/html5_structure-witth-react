const Footer = ({ children }: any) => (
    <footer className="App-footer" aria-label="footer">
        <section role="feed" aria-busy="false">
            <article aria-posinset={427} aria-setsize={-1}>Article 427</article>
            <article aria-posinset={428} aria-setsize={-1}>Article 428</article>
            <article aria-posinset={429} aria-setsize={-1}>Article 429</article>
        </section>
        {children}
    </footer>
)
export default Footer