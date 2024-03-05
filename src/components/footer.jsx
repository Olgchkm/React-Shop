function Footer() {
    return <footer className="page-footer teal darken-3">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Olga Chekmareva
                <a className="grey-text text-lighten-4 right" href="https://github.com/Olgchkm/React-Shop">Repository</a>
            </div>
        </div>
    </footer>
}

export {Footer};