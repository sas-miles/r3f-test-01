const CameraAnimator = () => {
  const { camera } = useThree()
  const scrollProgress = useRef(0)

  // Create a curve from the JSON data
  const curve = useMemo(() => {
    const points = cameraPathData.points.map((p) => new Vector3(p.x, p.y, p.z))
    return new CatmullRomCurve3(points)
  }, [])

  useFrame(() => {
    // Update camera position based on the current scroll progress
    // Assume the full scroll length maps to the curve
    const point = curve.getPoint(scrollProgress.current)
    camera.position.set(point.x, point.y, point.z)
    camera.lookAt(curve.getPoint(scrollProgress.current + 0.01)) // Look slightly ahead on the curve
  })

  // Listen to scroll events to update scrollProgress
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight
      scrollProgress.current = window.scrollY / maxScroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null // This component doesn't render anything itself
}
