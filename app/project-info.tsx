type ProjectInfoProps = {
  name: string;
  title: string;
  description: string;
  year: string;
  services: string;
  category: string;
};

export function ProjectInfo({ name, title, description, year, services, category }: ProjectInfoProps) {
  return <section className="detail-intro" aria-labelledby="detail-intro-title">
    <p className="detail-project-name">{name}</p>
    <h1 id="detail-intro-title">{title}</h1>
    <p className="detail-info-label">INFO</p>
    <p className="detail-description">{description}</p>
    <dl className="detail-facts">
      <div><dt>CLIENT</dt><dd>{name}</dd></div>
      <div><dt>YEAR</dt><dd>{year}</dd></div>
      <div><dt>SERVICES</dt><dd>{services}</dd></div>
      <div><dt>CATEGORY</dt><dd>{category}</dd></div>
    </dl>
  </section>;
}
