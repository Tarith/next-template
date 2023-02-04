import styles from './base_template.module.css';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className={styles.container}> {sampleTextProp} </div>;
};

export default BaseTemplate;
