import AnchorLink from "react-anchor-link-smooth-scroll"

type LinkProps = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

const Link = ({page, selectedPage, setSelectedPage}: LinkProps) => {

    const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "")

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} 
        transition hover:text-primary-300
      `}
      href={`${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link