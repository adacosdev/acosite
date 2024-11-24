export default interface HeadingInfo {
  name: string
  position: string
  introduction: string
  links: LinkElement[]
}

interface LinkElement {
  name: string
  url: string
  icon: string
}
