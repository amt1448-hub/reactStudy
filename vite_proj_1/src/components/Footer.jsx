const Footer = () => {
  //   const year = new Date().getFullYear();
 
  return (
    <footer className="py-6 px-4 bg-stone-50">
      <div className="container mx-auto text-center text-stone-600">
        <p>
          Created by{" "}
          <a
            className="text-emerald-600"
            href="https://github.com/amt1448-hub/reactStudy"
            target="_blank"
            rel="noreferrer"
          >
            @amt1448-hub
          </a>{" "}
          &copy; {new Date().getFullYear()}
          {/* &copy; {year} */}
        </p>
      </div>
    </footer>
  );
};
 
export default Footer;