import Link from 'next/link'
const about = () => {
    return(
        <div>
            <p>About Page</p>
            <Link href="/">
                <a>Back to reality</a>
            </Link>
        </div>
    )
}
export default about;