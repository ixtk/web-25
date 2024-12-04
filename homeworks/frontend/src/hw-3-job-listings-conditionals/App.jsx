import "./App.css";
import "./New.css";
import ListingCard from "./components/ListingCard";
import data from "./data.json";

// DRY - Don't Repeat Yourself

export const JobListingsConditionals = () => {
  const listings = data.map((item, itemIndex) => {
    return (
      <ListingCard
        key={itemIndex}
        title={item.position}
        companyName={item.company}
        companyLogo={item.logo || "/images/company-placeholder.svg"}
        uploadDate={item.postedAt}
        contract={item.contract}
        location={item.location}
        isNew={item.new}
        isFeatured={item.featured}
        tags={[...item.languages, ...item.tools, item.role, item.level]}
      />
    );
  });

  return (
    <div>
      <img className="banner-img" src="/images/bg-header-mobile.svg" alt="" />
      <div className="container card-container">
        {listings}
        {/* <ListingCard
          title="Senior Frontend Developer"
          companyName="Photosnap"
          companyLogo="/images/photosnap.svg"
          uploadDate="1d"
          contract="Full time"
          location="USA only"
        />
        <ListingCard
          title="Fullstack Developer"
          companyName="Manage"
          companyLogo="/images/manage.svg"
          uploadDate="1d"
          contract="Part time"
          location="Remote"
        />
        <ListingCard
          title="Junior Frontend Developer"
          companyName="Account"
          companyLogo="/images/account.svg"
          uploadDate="2d"
          contract="Part time"
          location="USA only"
        /> */}
      </div>
    </div>
  );
};
