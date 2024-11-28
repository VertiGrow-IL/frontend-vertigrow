import NavbarUser from "../Components/NavbarUser"
import FooterUser from "../Components/FooterUser"
import Hero from "../Sections/Limbah/Hero"; // Sesuaikan path jika folder bernama `Section`
import SearchBar from "../Sections/Limbah/SearchBar"; // Sesuaikan path
import Gallery from "../Sections/Limbah/Gallery"; // Sesuaikan path

export default function Limbah() {
  return (
    <>
      <NavbarUser />
      <Hero />
      <SearchBar />
      <Gallery />
      <FooterUser />
    </>
  );
}
