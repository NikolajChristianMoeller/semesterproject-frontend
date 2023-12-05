
export default function ScrollTop(target){
//       const {pathName} = useLocation();

//    useEffect(() => {
//   window.scrollTo(0, 0)
// }, [pathName])

    setTimeout( ()=>document.getElementById(target).scrollIntoView({ behavior: 'instant' }),1)

}