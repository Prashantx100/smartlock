const AccessCard = ({ title, description, icon }) => {
  return (
    <div className="access-card">
      <div className="icon-container">{icon}</div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const AccessGrid = () => {
  const accessTypes = [
    {
      title: "Permanent Access",
      description: "Ideal for family members. They can unlock through fingerprint, passcode, or dubo mobile app at any point.",
      icon: "🏠"
    },
    {
      title: "Timed Access",
      description: "Ideal for support staff. It allows access through passcode during specific time slots (e.g., 7-9am).",
      icon: "⏰"
    },
    {
      title: "One Time Access",
      description: "Ideal for visitors, enabling them to enter using a unique One Time Password.",
      icon: "🔑"
    }
  ];

  return (
    <div className="access-grid">
      {accessTypes.map((access, index) => (
        <AccessCard
          key={index}
          title={access.title}
          description={access.description}
          icon={access.icon}
        />
      ))}
    </div>
  );
};

export default AccessGrid;