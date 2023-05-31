

export default function PublicAccess() {
    return (<main className="project-main">
<header className="project-header">
  <div className="project-heading-statement">
    <h1>Public Access Portal </h1>
    <h3>BOARD OF EXECUTIVES OF LONG-TERM SERVICES AND SUPPORTS (BELTSS)<br/>
      A DIVSION OF THE OHIO DEPARTMENT OF AGING</h3>
    <h2>Continuing Education Course Catalog</h2>
  </div>
  <div className="header-shape-container">
    <div className="header-shape">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path d="M1200 100H0V0l400 77.2L1200 0z"></path>
      </svg>
    </div>
  </div>
</header>
<article className="project-article">
  <div className="article-container">
    <img src="/images/CeuCatelog2fixed.png" alt="Ceu Catalog"/>
    <div className="multi-col">
      <div className="left-col-33">
        <div className="p-title">SCOPE OF THE PROJECT</div>
      </div>
      <div className="right-col-rest">
        <ul>
          <li>Licensed Nursing Home Administrators can search this list of board approved
            continuing education courses which are required to maintain their professional
            licenses.</li>
          <li>Companies that provide continuing education courses use this tool to submit course
            descriptions, schedules, locations and qualification information for Board approval
            and to advertise their courses.</li>
          <li>The Board to charge fees to Course Providers for vetting, approving the providers
            as Board Certified Course Providers and for vetting and approving and advertising
            continuing education courses.</li>
          <li>Continuing Education Course Providers are able to update their course descriptions,
            schedules and locations in real time when venues, schedules or staffing changes.</li>
        </ul>
      </div>
    </div>
    <img src="/images/CeuDetail2-1024x637.png"  alt="ceu detail page"/>
    <div className="multi-col">
      <div className="left-col-33">
        <div className="p-title">PROJECT SUMMARY</div>
      </div>
      <div className="right-col-rest">
        <p>This system allows vendors of Continuing Education Courses to apply for certification
          as a Certified Provider by the State of Ohio agency and then to apply for and pay for
          certification of each Continuing Education Course to be displayed on the State’s Catalog
          Website as approved for use by Licensees to satisfy their Continuing Education Unit requirements.</p>
        <p>The system is comprised of 4 web applications:</p>
        <ul>
          <li>
            <strong>Public Access Portal</strong> where licensees can search for courses to satisfy their annual
            Continuing Education requirements to renew their licenses. Oracle, C#, Angular, MVC
            Core Web API
          </li>
          <li><strong>Administration Application</strong> where department staff review and screen the
            certifications
            of provider of Courser Provider organizations and individual courses. ASP.Net MVC, ADO.NET,
            Oracle, C#, jQuery, Bootstrap</li>
          <li><strong>Course Provider Portal</strong> where CEU Course Providers can manage their certification
            requirements, renewals, pay fees, input descriptions of courses and schedules and upload
            documents describing course offerings. ASP.Net MVC, ADO.NET, Oracle, C#, jQuery, Ajax, Bootstrap
          </li>
          <li><strong>Board Member Approval Portal</strong> where board members can view renewals and course
            descriptions and
            uploaded presenter qualifications and vote to accept or reject offerings as approved for licensees
            to use to satisfy their CEU requirements. ASP.Net MVC, Ajax, ADO.NET, Oracle, C#, jQuery, Bootstrap
          </li>
        </ul>
      </div>
    </div>
    <div className="try-it-now">
      <h2><strong>Try it right now!</strong></h2>
      <p>Note, this button will open the production public site owned and operated by the State Of Ohio Department
        of Aging.
        This site provides public information about available Continuing Education Courses. This site provides
        read-only
        access to public information so it is completely safe for you to visit.</p>
      <p>The content you see on this site is all entered by vendors in a custom CRM (the Course Provider Portal).
        This
        allows them to describe their course offerings and keep the descriptions up to date.</p>
      <p>When you visit the catalog, you may enter “Key Words” like “hospice”, “social” or “music” to find specific
        relevant
        courses. You may also click on the dates and places and companies in the right side panel to further limit
        your search.</p>
      <div className="try-it-button-cont">
        <a className="wp-block-button__link" href="https://ceucatalog.age.ohio.gov/" target="_blank" rel="noopener noreferrer">Open New Tab with CEU Catalog</a>
      </div>
    </div>
  </div>
</article>
</main>)}