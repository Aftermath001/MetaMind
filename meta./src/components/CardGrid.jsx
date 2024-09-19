import React, { useEffect} from "react";
import "../Pages/Home/home.css"; // Assuming you are using an external CSS file for additional styling

const CardGrid = () => {
    useEffect(() => {
        const container = document.getElementById("card2-container");
        if (container) {
          container.style.display = "grid";
          container.style.gridTemplateColumns = "repeat(2, 1fr)";
          container.style.gap = "1rem";
        }
      }, []);

  return (
    <div id="card2-container">
      <div className="card2 border-primary mb-3">
        <div className="card2-header">EXPERIENCED TEAM</div>
        <div className="card2-body text-primary">
          <p className="card2-text">
          Our consultants have extensive
          real-world experience and hold the most recognized certifications in the industry (OSCP, OSWE, GWAPT, GPEN, OSEP, CISA, CCSE, CCSA, CISM, CISSP, etc.)
          </p>
        </div>
      </div>

      <div className="card2 border-secondary mb-3">
        <div className="card2-header">IMPARTIALITY</div>
        <div className="card2-body text-secondary">
          <p className="card2-text">
          Unlike many competitors, we do not resell hardware or software solutions. This ensures that our recommendations are focused on your organization’s real cybersecurity needs.
          </p>
        </div>
      </div>

      <div className="card2 border-success mb-3">
        <div className="card2-header">STANDARDS & METHODOLOGIES</div>
        <div className="card2-body text-success">
          <p className="card2-text">
          Our methodologies are based on known best practices and key technological standards in the industry (OSSTMM, OWASP, NIST, CVE, CVSS, STIX, CAPEC, etc)
          </p>
        </div>
      </div>

      <div className="card2 border-danger mb-3">
        <div className="card2-header">INNOVATIVE SOLUTIONS</div>
        <div className="card2-body text-danger">
          <p className="card2-text">
          We leverage the latest technologies and methodologies to offer forward-thinking strategies that keep you ahead of the competition
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
