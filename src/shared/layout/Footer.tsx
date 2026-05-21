
const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <>
            <footer className={"bg-cf-dark-gray text-white w-full"}>
                <div className={"container mx-auto py-8 text-center"}>
                    &copy; {currentYear} Coding Factory 9. All rights reserved.
                </div>
            </footer>
        </>
    )
}
export default Footer