
function Banner() {
    const bannerUrl = "https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/BR-pt-20240923-TRIFECTA-perspective_e024151e-1476-45cc-bb67-47e33a8942f7_small.jpg"

    return (
        <section className="w-screen">
            <figure className="w-full">
                <div
                    className="w-full h-[400px] bg-center bg-cover blur-xs"
                    style={{ backgroundImage: `url(${bannerUrl})` }}>
                </div>
            </figure>

        </section>
    )
}

export default Banner;