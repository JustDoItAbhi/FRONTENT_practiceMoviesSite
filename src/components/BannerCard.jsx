function BannerCard({bannerLink,bannerLinkTitle,addtoWatchList}) {
  return (
    <div className="flex flex-wrap gap-4  p-8 relative" >

      <div className="h-[25rem] w-full object-cover relative" >
        <img className="rounded-md w-full h-full " src={bannerLink} alt={bannerLinkTitle} />
        <p className="absolute  bottom-0 inset-x-0  bg-black/50 text-white text-base p-6 text-center">{bannerLinkTitle} </p>
      </div>
    </div>
  )
}
export default BannerCard;