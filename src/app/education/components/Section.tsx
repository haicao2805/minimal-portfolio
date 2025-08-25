import { Section as CommonSection } from "@/components/Section";

interface IProps extends React.ComponentPropsWithoutRef<typeof CommonSection> {}

export const Section: React.FC<IProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <CommonSection {...rest}>
      <div className="space-y-16">{children}</div>
    </CommonSection>
  );
};

